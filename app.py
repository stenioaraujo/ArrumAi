# all the imports
import os
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash, jsonify, send_file
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import ast
import json
from random import randint

template_dir = os.path.abspath('static')
app = Flask(__name__, template_folder=template_dir) # create the application instance :)
app.config.from_object(os.environ['APP_SETTINGS'])
# DB Configurations and declaration
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Order matters: Initialize SQLAlchemy before Marshmallow
db = SQLAlchemy(app)

UPLOAD_FOLDER = './static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
requests = {'requests':
[{'id': 1, 'user_id': 1, 'item_id': 12, 'date':'05/04/2017', 'status': 0},
 {'id': 2, 'user_id': 1, 'item_id': 12, 'date':'06/04/2017', 'status': 0}]}

ma = Marshmallow(app)

# We import here to avoid cycle dependencie problems
from models import *

idx = 3

#---------------------- ROUTES --------------------
@app.route('/')
def root():
    return render_template('index.html')


@app.route('/items', methods=['POST'])
def post_item():
    item_schema = ItemSchema()

    coords = ast.literal_eval(request.form['coords'])
    item_id = randint(0,100000000)
    item = Item(int(request.form['owner']), request.form['name'], float(request.form['price']), request.form['description'], request.form['size'], request.form['category'], '/images/' + str(item_id), coords['lng'], coords['lat'])
    db.session.add(item)
    db.session.commit()
    photo = request.files['file']
    filename = str(item_id) + '.' + photo.filename.rsplit('.', 1)[1].lower()
    photo.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    return render_template('index.html')

@app.route('/requests', methods=['POST'])
def post_request():
    global idx
    data = request.get_json()
    requests['requests'].append(
    {'id': idx,
     'user_id': int(data['user_id']),
     'item_id': int(data['item_id']),
     'date':data['date'],
     'status': 0
    })
    idx += 1
    return jsonify(requests['requests'][-1])

@app.route('/requests', methods=['PATCH'])
def patch():
    data = request.get_json()
    i = int(data['request_id'])
    status = int(data['status'])
    requests['requests'][i-1]['status'] = status
    return jsonify(requests['requests'][i-1])


@app.route('/images/<item_id>')
def get_image(item_id):
    path = './static/uploads/' + str(item_id) + '.jpg'
    return send_file(path, mimetype='image/jpg')

@app.route('/item/<id>')
def get_item(id):
    # to serialize Item
    item_schema = ItemSchema()

    # Query
    items = Item.query.filter_by(id=id).first_or_404()

    return item_schema.jsonify(items)

def get_item2(id):
    # to serialize Item
    item_schema = ItemSchema()

    # Query
    items = Item.query.filter_by(id=id).first_or_404()
    print(items)
    return item_schema.jsonify(items)

@app.route('/requests', methods=['GET'])
def get_requests():
    #for request in requests['requests']:
    #    print(get_item2(request['item_id']))
    #    request['item'] = get_item2(request['item_id'])
    return jsonify(requests)


@app.route('/items')
def get_all_items():
    # to serialize Item
    item_schema = ItemSchema()

    # Query
    items = Item.query.all()
    items = [item_schema.dump(item).data for item in items]

    return jsonify(items)

@app.route('/request', methods = ["POST"])
def request_item():
    request_schema = RequestSchema()
    json = request.json
    user_id = int(json["user_id"])
    item_id = int(json["item_id"])

    # Get User Owner of item_id
    item = Item.query.get(item_id)
    item_user_id = item.user_id

    # Increment number of request to user owner of item_id
    user = User.query.get(item_user_id)
    if user.num_requests:
        user.num_requests += 1
    else:
        user.num_requests = 1

    # Create request object
    r = Request(user_id, item_id)
    db.session.add(r)

    # Commit changes to DB
    db.session.commit()

    #Query
    response = Request.query.filter_by(fk_user_id=user_id, fk_item_id=item_id).first()

    print(user)
    return request_schema.jsonify(response)


@app.route('/request/<user_id>')
def get_user_request_count(user_id):
    user = User.query.get(user_id)
    if user.num_requests:
        num_requests = user.num_requests
    else:
        num_requests = 0

    r = {"count": num_requests}

    return jsonify(r)

@app.route('/item/latests')
def get_latest_item_added():
    item_schema = ItemSchema()

    item = db.session.query(Item).order_by(Item.id.desc()).first()

    return item_schema.jsonify(item)

#---------------------- MAIN --------------------

if __name__ == '__main__':
    app.run()

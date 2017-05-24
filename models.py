from app import db, ma

# from sqlalchemy.dialects.postgresql import ENUM

# ENUM
# clothe_sizes = ('P', 'M', 'G')
# clothe_sizes_enum = ENUM(*clothe_sizes, name='clothe_size')

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    email = db.Column(db.String())
    num_requests = db.Column(db.Integer, default=0)
    items = db.relationship("Item", backref="user")


    def __init__(self, name, email):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<USER: id {} | num_requests {}>'.format(self.id, self.num_requests)

class Item(db.Model):
    __tablename__ = 'item'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    name = db.Column(db.String())
    price = db.Column(db.Float)
    description = db.Column(db.String())
    # size  = db.Column(clothe_sizes_enum) # Use postgres ENUM
    size = db.Column(db.String())
    category = db.Column(db.String())
    image_url = db.Column(db.String())
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)

    # user = relationship("User", back_populates="items")

    def __init__(self, owner_id, name, price, description, size, category, image_url, longitude, latitude):
        self.user_id = owner_id
        self.name = name
        self.price = price
        self.description = description
        self.size = size
        self.category = category
        self.image_url = image_url
        self.longitude = longitude
        self.latitude = latitude

    def __repr__(self):
        return '<ITEM: item_id {}, user_id {}>'.format(self.id, self.user_id)

class Request(db.Model):
    __tablename__ = 'request'

    id = db.Column(db.Integer, primary_key=True)
    fk_user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    fk_item_id = db.Column(db.Integer, db.ForeignKey('item.id'))
    date = db.Column(db.String())
    status = db.Column(db.String())

    def __init__(self, user_id_requesting, item_id_requested, date, status):
        self.fk_user_id = user_id_requesting
        self.fk_item_id = item_id_requested
        self.date = date
        self.status = status

    def __repr__(self):
        return '<id {}>, user_id {}, item_id {}'.format(self.id, self.fk_user_id, self.fk_item_id)


# Marshmallow Schemas
class UserSchema(ma.ModelSchema):
    class Meta:
        model = User

class ItemSchema(ma.ModelSchema):
    class Meta:
        model = Item

class RequestSchema(ma.ModelSchema):
    class Meta:
        model = Request

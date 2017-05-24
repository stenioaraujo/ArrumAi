from app import db

from models import *

# Clean tables
# User.query().delete()
# Request.query.delete()
# Item.query.delete()

# User
me = User("Caynan Sousa", "caynanvls@gmail.com")

# Item
item1 = Item(1, "Roupa Legal", 19.99, "Roupa Muito Linda", "Terno", "M", "http://lorempixel.com/400/200/fashion", 10, -59)
item2 = Item(1, "Roupa Fofa", 42, "Roupa Muito Linda", "Vestido", "M", "http://lorempixel.com/400/200/fashion", 10, -59)

db.session.add(me)
db.session.add(item1)
db.session.add(item2)

db.session.commit()

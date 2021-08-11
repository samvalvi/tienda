import os
from flask_admin import Admin
from api.models import db, Candela, Usuario, Orden
from flask_admin.contrib.sqla import ModelView


def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY')
    app.config['FLASK_ADMIN_SWATCH'] = 'flatly'
    admin = Admin(app, name='admin', template_mode='bootstrap4')

    admin.add_view(ModelView(Candela, db.session))
    admin.add_view(ModelView(Usuario, db.session))
    admin.add_view(ModelView(Orden, db.session))

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Candela(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    nombre = db.Column(db.String(200), nullable=False)
    color = db.Column(db.String(150), nullable=False)
    esencia = db.Column(db.String(150), nullable=False)
    modelo = db.Column(db.Integer, nullable=False)
    precio = db.Column(db.Numeric(asdecimal=False), nullable=False)
    descripcion = db.Column(db.Text(), nullable=False)
    img = db.Column(db.String(225))
    nuevo = db.Column(db.Boolean, default=False)
    home_img = db.Column(db.Boolean, default=False)

    def serialize(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'color': self.color,
            'esencia': self.esencia,
            'modelo': self.modelo,
            'precio': self.precio,
            'descripcion': self.descripcion,
            'img': self.img,
            'nuevo': self.nuevo,
            'home_img': self.home_img
        }


class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    primer_nombre = db.Column(db.String(150), nullable=False)
    primer_apellido = db.Column(db.String(150), nullable=False)
    provincia = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)
    clave = db.Column(db.LargeBinary(256), nullable=False)
    is_active = db.Column(db.Boolean, default=False)
    

    def serialize(self):
        return {
            'id': self.id,
            'primer_nombre': self.primer_nombre,
            'primer_apellido': self.primer_apellido,
            'provincia': self.provincia,
            'email': self.email,
            'is_active': self.is_active
        }
        

class Orden(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(200), db.ForeignKey('usuario.email'))
    distrito = db.Column(db.String(150), nullable=False)
    direccion = db.Column(db.Text(), nullable=False)
    telefono = db.Column(db.String(150), nullable=False)
    productos = db.Column(db.Text())
    total = db.Column(db.Numeric(asdecimal=False))
    cantidad = db.Column(db.Integer)
    metodo_pago = db.Column(db.String(250), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'usuario': self.usuario,
            'distrito': self.distrito,
            'direccion': self.direccion,
            'telefono': self.telefono,
            'productos': self.productos,
            'cantidad': self.cantidad,
            'total': self.total,
            'metodo_pago': self.metodo_pago
        }

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
    nuevo = db.Column(db.Boolean)

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
            'nuevo': self.nuevo
        }


class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    primer_nombre = db.Column(db.String(150), nullable=False)
    primer_apellido = db.Column(db.String(150), nullable=False)
    provincia = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)
    clave = db.Column(db.LargeBinary(256), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'primer_nombre': self.primer_nombre,
            'primer_apellido': self.primer_apellido,
            'provincia': self.provincia,
            'email': self.email,
        }
        

class Orden(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(200), db.ForeignKey('usuario.email'))
    productos = db.Column(db.Text())
    total = db.Column(db.Numeric(asdecimal=False))
    cantidad = db.Column(db.Integer)

    def serialize(self):
        return {
            'id': self.id,
            'usuario': self.usuario,
            'productos': self.productos,
            'cantidad': self.cantidad,
            'total': self.total
        }

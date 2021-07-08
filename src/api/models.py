from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Candela(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    color = db.Column(db.String(150), nullable=False)
    esencia = db.Column(db.String(150), nullable=False)
    modelo = db.Column(db.Integer, nullable=False)
    precio = db.Column(db.Numeric(asdecimal=False), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'color': self.color,
            'esencia': self.esencia,
            'modelo': self.modelo,
            'precio': self.precio
        }


class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    primer_nombre = db.Column(db.String(150), nullable=False)
    primer_apellido = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)
    clave = db.Column(db.LargeBinary(256), nullable=False)
    role = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'primer_nombre': self.primer_nombre,
            'email': self.email
        }


class Administrador(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    primer_nombre = db.Column(db.String(150), nullable=False)
    primer_apellido = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)
    clave = db.Column(db.LargeBinary(256), nullable=False)
    role = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'primer_nombre': self.primer_nombre,
            'email': self.email
        }


class Orden(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(200), db.ForeignKey('usuario.email'))
    monto = db.Column(db.Numeric(asdecimal=False))
    productos = db.Column(db.Text)

    def serialize(self):
        return {
            'id': self.id,
            'usuario': self.usuario,
            'monto': self.monto,
            'productos': self.productos,
            'cantidad': self.cantidad
        }

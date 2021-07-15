from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Candela(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    color = db.Column(db.String(150), nullable=False)
    esencia = db.Column(db.String(150), nullable=False)
    modelo = db.Column(db.Integer, nullable=False)
    precio = db.Column(db.Numeric(asdecimal=False), nullable=False)
    imagen = db.Column(db.LargeBinary(256), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'color': self.color,
            'esencia': self.esencia,
            'modelo': self.modelo,
            'precio': self.precio,
            'imagen': self.imagen
        }


class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    primer_nombre = db.Column(db.String(150), nullable=False)
    primer_apellido = db.Column(db.String(150), nullable=False)
    provincia = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)
    clave = db.Column(db.LargeBinary(256), nullable=False)
    role = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'primer_nombre': self.primer_nombre,
            'primer_apellido': self.primer_apellido,
            'provincia': self.provincia,
            'email': self.email,
            'role': self.role
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
            'email': self.email,
            'role': self.role
        }


class Orden(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(200), db.ForeignKey('usuario.email'))
    productos = db.Column(db.Text)
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

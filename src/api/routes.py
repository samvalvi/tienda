from werkzeug.wrappers import UserAgentMixin
import bcrypt
from flask import Flask, request, jsonify, url_for, Blueprint, redirect
from api.models import db, Candela, Usuario, Orden
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

api = Blueprint('api', __name__)


@api.route('/', methods=['GET', 'POST'])
def hello():
    response_body = {
        "msg": "this is a backend message",
        "status": "successful"
    }
    return jsonify(response_body), 200


@api.route('/registrar', methods=['POST'])
def registrar():
    primer_nombre = request.json.get('primer_nombre', None)
    primer_apellido = request.json.get('primer_apellido', None)
    provincia = request.json.get('provincia', None)
    correo = request.json.get('correo', None)
    clave = request.json.get('clave', None)
    repetir_clave = request.json.get('repetir_clave', None)

    if primer_nombre is None:
        return jsonify({'msg': 'Debe indicar un nombre', 'status': 'failed'}), 400
    if primer_apellido is None:
        return jsonify({'msg': 'Debe indicar un apellido', 'status': 'failed'}), 400
    if provincia is None:
        return jsonify({'msg': 'Debe especificar la provincia', 'status': 'failed'}), 400
    if correo is None:
        return jsonify({'msg': 'Debe indicar un correo electrónico', 'status': 'failed'}), 400
    if clave is None:
        return jsonify({'msg': 'Debe crear una contraseña', 'status': 'failed'}), 400
    if repetir_clave is None:
        return jsonify({'msg': 'Debe repetir su contraseña', 'status': 'failed'}), 400
    if clave != repetir_clave:
        return jsonify({'msg': 'Las contraseñas no coinciden', 'status': 'failed'}), 400

    usuario = Usuario.query.filter_by(email=correo).first()
    if usuario:
        return jsonify({'msg': 'El usuario ya se encuentra registrado', 'status': 'successful'}), 200

    password_hash = bcrypt.hashpw(clave.encode(), bcrypt.gensalt())

    usuario = Usuario()
    usuario.primer_nombre = primer_nombre
    usuario.primer_apellido = primer_apellido
    usuario.provincia = provincia
    usuario.email = correo
    usuario.clave = password_hash
    db.session.add(usuario)
    db.session.commit()

    response_body = {
        'msg': 'Usuario registrado',
        'status': 'successful'
    }

    return jsonify(response_body), 200


@api.route('/acceder', methods=['POST'])
def inicio_sesion():
    correo = request.json.get('correo', None)
    clave = request.json.get('clave', None)

    if not correo or not clave:
        return jsonify({'msg': 'Todos los campos son requeridos', 'status': 'failed'}), 400

    usuario = Usuario.query.filter_by(email=correo).first()

    if not usuario:
        return jsonify({'msg': 'El usuario no se encuentra registrado', 'status': 'failed'}), 404

    password = bcrypt.checkpw(clave.encode(), usuario.clave)

    if correo != usuario.email or password is not True:
        return jsonify({'msg': 'El email o la contraseña no coinciden, vuelva a intentarlo', 'status': 'failed'}), 400

    if correo == usuario.email and password:
        token = create_access_token(identity=usuario.id)
        response_body = {
            'msg': 'Sesión iniciada',
            'primer_nombre': usuario.primer_nombre,
            'primer_apellido': usuario.primer_apellido,
            'provincia': usuario.provincia,
            'email': usuario.email,
            'access_token': token,
            'status': 'successful'
        }
        return jsonify(response_body), 200


@api.route('/actualizar', methods=['GET', 'POST'])
@jwt_required()
def actualizar_usuario():
    current_user_id = get_jwt_identity()

    user = Usuario.query.filter_by(id=current_user_id).first()

    primer_nombre = request.json.get('primer_nombre', None)
    primer_apellido = request.json.get('primer_apellido', None)
    correo = request.json.get('correo', None)

    if not primer_nombre or not primer_apellido or not correo:
        return jsonify({'msg': 'Todos los campos son requeridos'}), 400

    user.primer_nombre = primer_nombre
    user.primer_apellido = primer_apellido,
    user.email = correo

    db.session.add(user)
    db.session.commit()

    response_body = {
        'msg': 'Usuario actualizado',
        'status': 'successful'
    }

    return jsonify(response_body), 200


@api.route('/eliminar', methods=['DELETE'])
@jwt_required()
def eliminar_usuario():
    current_user_id = get_jwt_identity()

    usuario = Usuario.query.filter_by(id=current_user_id).first()

    clave = request.json.get('clave', None)
    usuario_email = request.json.get('correo', None)
    
    if not usuario_email:
        return jsonify({'msg': 'Debe especificar un correo', 'status': 'failed'}), 400

    if not clave:
        return jsonify({'msg': 'Debe ingresar la contraseña', 'status': 'failed'}), 400
    
    if usuario_email != usuario.email:
        return jsonify({'msg': 'El correo no coincide con el usuario', 'status': 'failed'}), 400
    
    if clave != usuario.clave:
        return jsonify({'msg': 'La contraseña es incorrecta', 'status': 'failed'}), 400

    clave_hash = bcrypt.hashpw(clave.encode(), bcrypt.gensalt())
    usuario_clave = bcrypt.checkpw(clave_hash, usuario.clave)

    if usuario_clave:
        db.session.delete(usuario)
        db.session.commit()

        response_body = {
            'msg': 'Usuario eliminado',
            'status': 'successful'
        }

        return jsonify(response_body), 200

    else:
        return jsonify({'msg': 'La contraseña es incorrecta', 'status': 'failed'}), 400


@api.route('/productos', methods=['GET'])
def mostrar_productos():
    productos = Candela.query.all()
    productos = list(map(lambda x: x.serialize(), productos))
    return jsonify(productos), 200


@api.route('/nuevaOrden', methods=['POST'])
@jwt_required()
def crear_orden():
    current_user_id = get_jwt_identity()
    
    usuario = Usuario.query.filter_by(id=current_user_id).first()

    if not usuario:
        return jsonify({'msg': 'Debe iniciar sesión', 'status': 'failed'}), 401

    candelas = request.json.get('productos', None)

    if not candelas:
        return jsonify({'msg': 'No hay productos seleccionados', 'status': 'failed'}), 400

    orden = Orden()
    orden.usuario = current_user_id

    total = 0
    for candela in candelas:
        total += candela.precio

    orden.monto = total
    orden.productos = candelas
    db.session.add(orden)
    db.session.commit()
    
    response_body = {
        'msg': 'Orden creada',
        'status': 'successful'        
    }
    
    return jsonify(response_body), 200


@api.route('/mostrarOrden', methods=['GET'])
@jwt_required()
def mostrar_orden():
    current_user_id = get_jwt_identity()
    usuario = Usuario.query.filter_by(id=current_user_id).first()

    if not usuario:
        return jsonify({'msg': 'Debe iniciar sesión', 'status': 'failed'}), 401

    orden = Orden.query.filter_by(usuario=usuario.email).first()

    response_body = {
        'msg': 'Orden',
        'orden': orden.serialize,
        'status': 'successful'
    }

    return jsonify(response_body)


@api.route('/actualizar-clave', methods=['PUT'])
@jwt_required()
def actualizar_clave():
    current_user_id = get_jwt_identity()

    nueva_clave = request.json.get('nueva_clave', None)
    repetir_clave = request.json.get('repetir_clave', None)

    if not nueva_clave or not repetir_clave:
        return jsonify({'msg': 'Todos los campos son requeridos', 'status': 'failed'}), 400

    if nueva_clave != repetir_clave:
        return jsonify({'msg': 'Las contraseñas no coinciden', 'status': 'failed'}), 400
    
    hash_password = bcrypt.hashpw(nueva_clave.encode(), bcrypt.gensalt());
    
    usuario = Usuario.query.filter_by(id=current_user_id).first()
    usuario.clave = hash_password
    
    db.session.commit()

    response_body = {
        'msg': 'Contraseña actualizada',
        'status': 'successful'
    }

    return jsonify(response_body), 200


@api.route('/recuperar')
def recuperar_clave():
    
    codigo = request.json.get('codigo', None)
    nueva_clave = request.json.get('nueva_clave', None)
    repetir_clave = request.json.get('repetir_clave', None)
    
    if not codigo:
        return jsonify({'msg': 'Debe ingresar el código enviado', 'status': 'failed'}), 400
    
    if not nueva_clave or not repetir_clave:
        return jsonify({'msg': 'Todos los campos son requeridos', 'status': 'failed'}), 400

    if nueva_clave != repetir_clave:
        return jsonify({'msg': 'Las contraseñas no coinciden', 'status': 'failed'}), 400
    

    response_body = {
        'msg': 'Contraseña actualizada',
        'status': 'successful'
    }

    return jsonify(response_body), 200
    
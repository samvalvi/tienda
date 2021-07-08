import bcrypt
from flask import Flask, request, jsonify, url_for, Blueprint, redirect
from api.models import db, Candela, Usuario, Administrador, Orden
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
    correo = request.json.get('correo', None)
    clave = request.json.get('clave', None)
    repetir_clave = request.json.get('repetir_clave', None)

    if not primer_nombre:
        return jsonify({'msg': 'Debe indicar un nombre', 'status': 'failed'}), 400
    if not primer_apellido:
        return jsonify({'msg': 'Debe indicar un apellido', 'status': 'failed'}), 400
    if not correo:
        return jsonify({'msg': 'Debe indicar un correo electrónico', 'status': 'failed'}), 400
    if not clave:
        return jsonify({'msg': 'Debe crear una contraseña', 'status': 'failed'}), 400
    if not repetir_clave:
        return jsonify({'msg': 'Debe repetir su contraseña', 'status': 'failed'}), 400
    if clave != repetir_clave:
        return jsonify({'msg': 'Las contraseñas no coinciden', 'status': 'failed'}), 400

    usuario = Usuario.query.filter_by(email=correo).first()
    admin = Administrador.query.filter_by(email=correo).first()
    if usuario or admin:
        return jsonify({'msg': 'El usuario ya se encuentra registrado', 'status': 'successful'}), 200

    password_hash = bcrypt.hashpw(clave.encode(), bcrypt.gensalt())

    usuario = Usuario()
    usuario.primer_nombre = primer_nombre
    usuario.primer_apellido = primer_apellido
    usuario.email = correo
    usuario.clave = password_hash
    usuario.role = 'user'
    db.session.add(usuario)
    db.session.commit()

    response_body = {
        'msg': 'Usuario registrado',
        'status': 'successful'
    }

    return jsonify(response_body), 200


@api.route('/login', methods=['POST'])
def inicio_sesion():
    correo = request.json.get('correo', None)
    clave = request.json.get('clave', None)

    if not correo or not clave:
        return jsonify({'msg': 'Todos los campos son requeridos', 'status': 'failed'}), 400

    usuario = Usuario.query.filter_by(email=correo).first()
    admin = Administrador.query.filter_by(email=correo).first()

    if not usuario or not admin:
        return jsonify({'msg': 'El usuario no se encuentra registrado', 'status': 'failed'}), 404

    password = bcrypt.checkpw(clave.encode(), usuario.clave)
    pass_admin = bcrypt.checkpw(clave.encode(), admin.clave)

    if correo != usuario.email or password is not True or correo != admin.email or pass_admin is not True:
        return jsonify({'msg': 'El email o la contraseña no coinciden, vuelva a intentarlo', 'status': 'failed'}), 400

    if correo == usuario.email and password:
        token = create_access_token(identity=usuario.id)
        response_body = {
            'msg': 'Sesión iniciada',
            'primer_nombre': usuario.primer_nombre,
            'access_token': token,
            'role': usuario.role,
            'status': 'successful'
        }
        return jsonify(response_body), 200

    if correo == admin.email and pass_admin:
        token = create_access_token(identity=admin.id)
        response_body = {
            'msg': 'Sesión administrador',
            'primer_nombre': admin.primer_nombre,
            'access_token': token,
            'role': admin.role,
            'status': 'successful'
        }
        return jsonify(response_body), 200


@api.route('/admin/registrar')
def registrar_admin():
    primer_nombre = request.json.get('primer_nombre', None)
    primer_apellido = request.json.get('primer_apellido', None)
    correo = request.json.get('correo', None)
    clave = request.json.get('clave', None)
    repetir_clave = request.json.get('repetir_clave', None)

    if not primer_nombre:
        return jsonify({'msg': 'Debe indicar un nombre', 'status': 'failed'}), 400
    if not primer_apellido:
        return jsonify({'msg': 'Debe indicar un apellido', 'status': 'failed'}), 400
    if not correo:
        return jsonify({'msg': 'Debe indicar un correo electrónico', 'status': 'failed'}), 400
    if not clave:
        return jsonify({'msg': 'Debe crear una contraseña', 'status': 'failed'}), 400
    if not repetir_clave:
        return jsonify({'msg': 'Debe repetir su contraseña', 'status': 'failed'}), 400
    if clave != repetir_clave:
        return jsonify({'msg': 'Las contraseñas no coinciden', 'status': 'failed'}), 400

    usuario = Usuario.query.filter_by(email=correo).first()
    if usuario:
        return jsonify({'msg': 'El email se encuentra registrado como usuario', 'status': 'failed'}), 400

    admin = Administrador.query.filter_by(email=correo).first()
    if admin:
        return jsonify({'msg': 'El administrador ya se encuentra registrado', 'status': 'failed'}), 400

    password_hash = bcrypt.hashpw(clave.encode(), bcrypt.gensalt())

    admin = Administrador()
    admin.primer_nombre = primer_nombre
    admin.primer_apellido = primer_apellido
    admin.email = correo
    admin.clave = password_hash
    admin.role = 'admin'
    db.session.add(admin)
    db.session.commit()

    response_body = {
        'msg': 'Administrador registrado',
        'status': 'successful'
    }

    return jsonify(response_body), 200


@api.route('/admin/producto', methods=['POST'])
@jwt_required()
def crear_producto():
    current_user_id = get_jwt_identity()

    admin = Administrador.query.filter_by(id=current_user_id).first()

    if not admin:
        return jsonify({'msg': 'No posee los permisos necesarios', 'status': 'failed'}), 403

    if admin.role == "admin":
        color = request.json.get("color", None)
        esencia = request.json.get("esencia", None)
        modelo = request.json.get("modelo", None)

        if not color:
            return jsonify({'msg': 'Debe especificar el color', 'status': 'failed'}), 400
        if not esencia:
            return jsonify({'msg': 'Debe especificar la esencia', 'status': 'failed'}), 400
        if not modelo:
            return jsonify({'msg': 'Debe especificar el modelo', 'status': 'failed'}), 400

        candela = Candela()
        candela.color = color
        candela.esencia = esencia
        candela.modelo = modelo

        db.session.add(candela)
        db.session.commit()

        response_body = {
            'msg': 'Producto agregado',
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

    if not clave:
        return jsonify({'msg': 'Debe ingresar la contraseña', 'status': 'failed'}), 400

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


@api.route('/admin/actualizar')
@jwt_required()
def actualizar_admin():
    current_user_id = get_jwt_identity()

    admin = Administrador.query.filter_by(id=current_user_id).first()

    primer_nombre = request.json.get('primer_nombre', None)
    primer_apellido = request.json.get('primer_apellido', None)
    correo = request.json.get('correo', None)

    if not primer_nombre or not primer_apellido or not correo:
        return jsonify({'msg': 'Todos los campos son requeridos'}), 400

    admin.primer_nombre = primer_nombre
    admin.primer_apellido = primer_apellido,
    admin.email = correo

    db.session.add(admin)
    db.session.commit()

    response_body = {
        'msg': 'Administrador actualizado',
        'status': 'successful'
    }

    return jsonify(response_body), 200


@api.route('/admin/eliminar')
@jwt_required()
def eliminar_admin():
    current_user_id = get_jwt_identity()

    admin = Administrador.query.filter_by(id=current_user_id).first()

    clave = request.json.get('clave', None)

    if not clave:
        return jsonify({'msg': 'Debe ingresar la contraseña', 'status': 'failed'}), 400

    clave_hash = bcrypt.hashpw(clave.encode(), bcrypt.gensalt())
    admin_clave = bcrypt.checkpw(clave_hash, admin.clave)

    if admin_clave:
        db.session.delete(admin)
        db.session.commit()

        response_body = {
            'msg': 'Administrador eliminado',
            'status': 'successful'
        }

        return jsonify(response_body), 200

    else:
        return jsonify({'msg': 'La contraseña es incorrecta', 'status': 'failed'}), 401


@api.route('/productos', methods=['GET'])
@jwt_required()
def mostrar_productos():
    current_user_id = get_jwt_identity()

    if current_user_id:
        producto = Candela.query.all()
        if not producto:
            return jsonify({'msg': 'No hay productos registrados', 'status': 'successful'}), 200

        candela = list(map(lambda x: x.serialize(), producto))
        return jsonify(candela), 200

    if not current_user_id:
        return jsonify({'msg': 'Para ingresar debe iniciar sesión', 'status': 'failed'}), 403


@api.route('/admin/productos', methods=['GET'])
@jwt_required()
def productos():
    current_user_id = get_jwt_identity()

    if current_user_id:
        producto = Candela.query.all()
        if not producto:
            return jsonify({'msg': 'No hay productos registrados', 'status': 'successful'}), 200

        candela = list(map(lambda x: x.serialize(), producto))
        return jsonify(candela), 200

    if not current_user_id:
        return jsonify({'msg': 'Para ingresar debe iniciar sesión', 'status': 'failed'}), 403


@api.route('/admin/mostrarOrden')
@jwt_required()
def mostrar_ordenes():
    current_user_id = get_jwt_identity()

    admin = Administrador.query.filter_by(id=current_user_id).first()

    if admin:
        orden = Orden.query.all()

        if not orden:
            return jsonify({'msg': 'No hay ordenes', 'status': 'successful'}), 200

        usuarios_ordenes = list(map(lambda x : x.serialize(), orden))

        response_body = {
            'msg': 'Ordenes',
            'ordenes': usuarios_ordenes,
            'status': 'successful'
        }
        return jsonify(response_body), 200

    if not admin:
        return jsonify({'msg': 'No está autorizado', 'status': 'failed'}), 403


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
    orden.productos = productos
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


@api.route('/settings/update', methods=['PUT'])
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

@api.route('/recover')
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
    

@api.route('/admin/settings/update', methods=['PUT'])
@jwt_required()
def actualizar_clave():
    current_user_id = get_jwt_identity()

    nueva_clave = request.json.get('nueva_clave', None)
    repetir_clave = request.json.get('repetir_clave', None)

    if not nueva_clave or not repetir_clave:
        return jsonify({'msg': 'Todos los campos son requeridos', 'status': 'failed'}), 400

    if nueva_clave != repetir_clave:
        return jsonify({'msg': 'Las contraseñas no coinciden', 'status': 'failed'}), 400
    
    hash_password = bcrypt.hashpw(nueva_clave.encode(), bcrypt.gensalt())
    
    admin = Administrador.query.filter_by(id=current_user_id).first()
    admin.clave = hash_password
    
    db.session.commit()

    response_body = {
        'msg': 'Contraseña actualizada',
        'status': 'successful'
    }

    return jsonify(response_body), 200

"""empty message

Revision ID: d236565b5849
Revises: 
Create Date: 2021-08-12 15:39:44.770275

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd236565b5849'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('candela',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=200), nullable=False),
    sa.Column('color', sa.String(length=150), nullable=False),
    sa.Column('esencia', sa.String(length=150), nullable=False),
    sa.Column('modelo', sa.Integer(), nullable=False),
    sa.Column('precio', sa.Numeric(asdecimal=False), nullable=False),
    sa.Column('descripcion', sa.Text(), nullable=False),
    sa.Column('img', sa.String(length=225), nullable=True),
    sa.Column('nuevo', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('usuario',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('primer_nombre', sa.String(length=150), nullable=False),
    sa.Column('primer_apellido', sa.String(length=150), nullable=False),
    sa.Column('provincia', sa.String(length=150), nullable=False),
    sa.Column('email', sa.String(length=200), nullable=False),
    sa.Column('clave', sa.LargeBinary(length=256), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('orden',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('usuario', sa.String(length=200), nullable=True),
    sa.Column('productos', sa.Text(), nullable=True),
    sa.Column('total', sa.Numeric(asdecimal=False), nullable=True),
    sa.Column('cantidad', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['usuario'], ['usuario.email'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('orden')
    op.drop_table('usuario')
    op.drop_table('candela')
    # ### end Alembic commands ###
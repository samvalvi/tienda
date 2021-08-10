"""empty message

Revision ID: 09f9c3bf2900
Revises: 5eded02f3ada
Create Date: 2021-08-08 18:48:25.327295

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '09f9c3bf2900'
down_revision = '5eded02f3ada'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('candela', sa.Column('img', sa.String(length=225), nullable=True))
    op.add_column('candela', sa.Column('nuevo', sa.Boolean(), nullable=False))
    op.drop_column('candela', 'imagen')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('candela', sa.Column('imagen', sa.VARCHAR(length=225), autoincrement=False, nullable=False))
    op.drop_column('candela', 'nuevo')
    op.drop_column('candela', 'img')
    # ### end Alembic commands ###
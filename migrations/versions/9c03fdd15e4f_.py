"""empty message

Revision ID: 9c03fdd15e4f
Revises: e6812de062d0
Create Date: 2021-09-03 14:02:31.107412

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9c03fdd15e4f'
down_revision = 'e6812de062d0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('candela', sa.Column('home_img', sa.String(length=250), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('candela', 'home_img')
    # ### end Alembic commands ###
"""empty message

Revision ID: 466006f0b6bc
Revises: 9c03fdd15e4f
Create Date: 2021-09-03 14:16:11.525936

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '466006f0b6bc'
down_revision = '9c03fdd15e4f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('candela', 'home_img')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('candela', sa.Column('home_img', sa.VARCHAR(length=250), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
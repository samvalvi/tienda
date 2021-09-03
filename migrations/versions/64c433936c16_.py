"""empty message

Revision ID: 64c433936c16
Revises: 466006f0b6bc
Create Date: 2021-09-03 14:16:37.936128

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '64c433936c16'
down_revision = '466006f0b6bc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('candela', sa.Column('home_img', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('candela', 'home_img')
    # ### end Alembic commands ###
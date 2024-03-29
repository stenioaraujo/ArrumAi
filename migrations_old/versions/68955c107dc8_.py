"""empty message

Revision ID: 68955c107dc8
Revises: 3cbab3548a01
Create Date: 2017-04-02 16:06:07.363750

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '68955c107dc8'
down_revision = '3cbab3548a01'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('request', sa.Column('fk_item_id', sa.Integer(), nullable=True))
    op.drop_constraint('request_user_id_fkey', 'request', type_='foreignkey')
    op.create_foreign_key(None, 'request', 'item', ['fk_item_id'], ['id'])
    op.drop_column('request', 'user_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('request', sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'request', type_='foreignkey')
    op.create_foreign_key('request_user_id_fkey', 'request', 'item', ['user_id'], ['id'])
    op.drop_column('request', 'fk_item_id')
    # ### end Alembic commands ###

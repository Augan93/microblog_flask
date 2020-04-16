from app import ma


class PostSchema(ma.Schema):
    class Meta:
        fields = (
            'id',
            'body',
            'user_id',
        )


post_schema = PostSchema()
posts_schema = PostSchema(many=True)

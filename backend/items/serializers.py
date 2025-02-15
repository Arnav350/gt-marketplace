from rest_framework import serializers
from django.apps import apps

Item = apps.get_model('items', 'Item')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id','seller_id','title','description','price']

    def create(self, validated_data):
        item = Item(
            id = validated_data['id'],
            seller_id = validated_data['seller_id'],
            title = validated_data['title'],
            description = validated_data['description'],
            price = validated_data['price']
        )
        item.save()
        return item
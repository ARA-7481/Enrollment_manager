from channels.generic.websocket import AsyncWebsocketConsumer
import json

class DBUpdateTriggerConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("dbupdatetrigger", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("dbupdatetrigger", self.channel_name)

    async def receive(self, text_data):
        return

    async def new_object(self, event):
        await self.send(text_data=json.dumps({
            'message': 'A new model object has been created',
            'event' : event
        }))

    async def updated_object(self, event):
        await self.send(text_data=json.dumps({
            'message': 'A model object has been updated',
            'event' : event
        }))

    async def deleted_object(self, event):
        await self.send(text_data=json.dumps({
            'message': 'A model object has been deleted',
            'event' : event
        }))
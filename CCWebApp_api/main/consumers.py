from channels.generic.websocket import AsyncWebsocketConsumer
import json

# class DBUpdateTriggerConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         await self.accept()

#     async def disconnect(self, close_code):
#         pass

#     async def receive(self, text_data):
#         text_data_json = json.loads(text_data)
#         message = text_data_json['message']

#         await self.send(text_data=json.dumps({
#             'message': message
#         }))
class DBUpdateTriggerConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # This method is called when the websocket is handshaking as part of the connection process.
        await self.channel_layer.group_add("dbupdatetrigger", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        # This method is called when the WebSocket closes for any reason.
        await self.channel_layer.group_discard("dbupdatetrigger", self.channel_name)

    async def receive(self, text_data):
        # This method is called when the server receives a message from WebSocket.
        return

    # Custom handler for new object
    async def new_object(self, event):
        # Send a message down to the client
        await self.send(text_data=json.dumps({
            'message': 'A new student profile object has been created',
            'event' : event
        }))

    # # Custom handler for updated object
    # async def updated_object(self, event):
    #     # Send a message down to the client
    #     await self.send(text_data=json.dumps({
    #         'message': 'A student profile object has been updated',
    #         'event' : event
    #     }))

    # Custom handler for deleted object
    async def deleted_object(self, event):
        # Send a message down to the client
        await self.send(text_data=json.dumps({
            'message': 'A student profile object has been deleted',
            'event' : event
        }))
import asyncio
import websockets

async def echo(websocket, path):
    for i in range(0, 5):
        await websocket.send("{}")

start_server = websockets.serve(echo, "localhost", 5010)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
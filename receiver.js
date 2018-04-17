const amqp = require("amqplib");

const queue = "demo";

async function receiveMessage()
{
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    await channel.consume(queue, function(message)
    {
        console.log(message.content.toString());
        channel.ack(message);
    });
}

receiveMessage();
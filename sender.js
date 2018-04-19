const amqp = require("amqplib");

const queue = "demo";

async function sendMessage(message)
{
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    await channel.sendToQueue(queue, new Buffer(message),
    {
        // RabbitMQ重启时，消息会被保存到磁盘
        persistent: true
    });
}


setInterval(function()
{
    sendMessage("Hello, Fundebug!");
}, 1000)
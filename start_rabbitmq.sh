#!/bin/bash

sudo docker rm -f rabbitmq > /dev/null
sudo docker run -d \
                --name rabbitmq \
                -h rabbitmq \
                -p 5672:5672 \
                -v /var/lib/rabbitmq:/var/lib/rabbitmq \
                registry.docker-cn.com/library/rabbitmq:3.7
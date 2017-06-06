FROM node:latest

WORKDIR /home/app

RUN apt-get update; apt-get -y install nginx

COPY . ./

EXPOSE 3000


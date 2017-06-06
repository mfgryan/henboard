FROM node:latest

WORKDIR /home/app

RUN apt-get update; apt-get -y install nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY . ./

EXPOSE 3000


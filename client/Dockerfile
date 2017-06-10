FROM node:latest 

RUN apt-get update; apt-get -y install nginx

RUN useradd -ms /bin/bash nginx

USER nginx

WORKDIR /home/nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY . ./

USER root

EXPOSE 3000 8000

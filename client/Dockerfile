FROM node:latest 

RUN apt-get update && apt-get install -y nginx

RUN useradd -ms /bin/bash nginx

USER nginx

WORKDIR /home/nginx

COPY package.json .
RUN npm install --loglevel warn

COPY nginx.conf /etc/nginx/nginx.conf

COPY . ./

USER root

EXPOSE 3000 

CMD ["node"]

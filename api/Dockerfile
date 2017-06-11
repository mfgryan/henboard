FROM node:latest

RUN apt-get update

RUN useradd -ms /bin/bash express

USER express

WORKDIR /home/express

COPY package.json .
RUN npm install --loglevel warn

COPY . ./

USER root

EXPOSE 8080

CMD ["node"]

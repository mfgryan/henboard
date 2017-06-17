FROM node:latest

RUN apt-get update

RUN useradd -ms /bin/bash express

USER express

WORKDIR /home/express

COPY . ./

USER root

EXPOSE 8080

CMD ["node"]

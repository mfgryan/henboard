FROM node:latest 

RUN apt-get update && apt-get install -y nginx

RUN useradd -ms /bin/bash nginx

WORKDIR /home/nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY . ./

EXPOSE 3000 

CMD ["node"]

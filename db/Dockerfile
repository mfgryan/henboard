FROM mongo:latest 

RUN apt-get -q update && apt-get -q install -y curl

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get -q update && apt-get -q install -y nodejs 

RUN useradd -ms /bin/bash -g mongodb mongo

USER mongo

WORKDIR /home/mongo

COPY package.json .
RUN npm install --loglevel warn

COPY . ./

USER root

EXPOSE 27017 

CMD ["mongod"]

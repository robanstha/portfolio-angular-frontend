FROM node:22.0.0

RUN apt-get update && apt-get install -y vim && apt-get clean

# ADD src/package.json /src/package.json

ADD src /src

WORKDIR /src

RUN npm install -g @angular/cli

RUN npm install

# RUN npm run build --prod

EXPOSE 4200
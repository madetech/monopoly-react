FROM node:10.1.0-alpine

RUN apk --no-cache add git
RUN npm install -g serve @storybook/cli

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ADD . /app

EXPOSE 5000

CMD npm start

FROM node:latest

RUN mkdir /app

COPY /package*.json /app

WORKDIR /app

RUN rm -rf node_mudules

RUN npm install

RUN npm run build

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev", "backend"]
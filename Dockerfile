FROM node

RUN mkdir /app

COPY /package*.json /app 

WORKDIR /app

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "backend"]
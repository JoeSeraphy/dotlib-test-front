FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/dotlib-test-frontend

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/dotlib-test-frontend

COPY --from=BUILD_IMAGE /app/dotlib-test-frontend/dist/ /app/dotlib-test-frontend/dist/
EXPOSE 8080

COPY package.json .
COPY vite.config.js .

RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "preview"]

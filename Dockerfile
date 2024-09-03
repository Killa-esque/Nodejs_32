FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn install --legacy-peer-deps

COPY prisma ./prisma

RUN yarn prisma generate

COPY . .

# Private port
EXPOSE 8080

# yarn start || node index.js

CMD [ "node", "index.js" ]

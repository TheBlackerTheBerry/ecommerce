FROM node:16-alpine

WORKDIR /app
ENV PORT=3000
COPY ./package*.json ./

RUN yarn --only=production

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]
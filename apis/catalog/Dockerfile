FROM node:16-alpine

WORKDIR /app
ENV PORT=9001
COPY ./package*.json ./

RUN yarn --only=production

COPY . .

EXPOSE 9001

CMD ["npm", "run", "start:prod"]
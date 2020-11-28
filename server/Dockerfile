FROM node:15-alpine

WORKDIR /app
ADD . .

EXPOSE 3000

RUN npm install && \
    npm run build

CMD ["npm", "start"]

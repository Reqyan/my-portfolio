FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./

RUN npm ci
COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
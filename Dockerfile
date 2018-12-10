FROM node:11
WORKDIR /app
COPY . .
RUN npm ci
ENTRYPOINT [ "npm", "start" ]

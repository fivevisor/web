FROM node:latest

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

FROM node:latest

COPY . .

RUN npm install --ignore-scripts

CMD ["npm", "run", "start"]

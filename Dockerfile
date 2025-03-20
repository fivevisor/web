FROM node:latest

COPY . .

RUN npm install --ignore-scripts
RUN npm run build

CMD ['npm', 'run', 'preview']

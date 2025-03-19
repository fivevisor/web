FROM node:latest

COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN pnpm install
RUN pnpm build

CMD ['pnpm', 'preview']
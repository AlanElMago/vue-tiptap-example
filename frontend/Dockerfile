FROM node:22.12-alpine AS base
USER node

WORKDIR /app
COPY --chown=node:node package.json package-lock.json ./
RUN npm install

COPY --chown=node:node . /app

FROM base AS debug
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

FROM base AS dev
ENV NODE_ENV=development
RUN npm run build-dev
CMD ["npm", "run", "preview"]

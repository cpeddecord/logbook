FROM node:12-alpine as base

WORKDIR /usr/web-app
COPY . /usr/web-app

RUN npm i

FROM node:12-alpine as builder

WORKDIR /usr/web-app
COPY --from=base /usr/web-app /usr/web-app

RUN npm build

FROM node:12-alpine as pruner

WORKDIR /usr/web-app
COPY --from=builder /usr/web-app /usr/web-app

RUN npm prune --production

FROM node:12-alpine as runner

WORKDIR /usr/web-app
COPY --from=pruner /usr/web-app /usr/web-app

EXPOSE 3000
CMD ["npm", "run", "serve"]
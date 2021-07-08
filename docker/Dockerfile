# base image
FROM node:10-alpine as build

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY ./docker-entrypoint.sh /

EXPOSE 8080

RUN chmod +x /docker-entrypoint.sh

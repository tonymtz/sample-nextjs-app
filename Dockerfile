FROM nginx:alpine
LABEL maintainer="tonymtz <hello@tonymtz.com>"

COPY ./dist /usr/share/nginx/html
COPY ./public /usr/share/nginx/html/public

FROM nginx:alpine
LABEL maintainer="tonymtz <hello@tonymtz.com>"

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./deploy/default.conf /etc/nginx/conf.d/

COPY ./dist /usr/share/nginx/html
COPY ./public /usr/share/nginx/html/public

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]

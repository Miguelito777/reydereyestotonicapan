# This defines our starting point
FROM node:current

RUN npm install -g @angular/cli@8.3.26 

EXPOSE 4200
FROM node:16
WORKDIR /usr/src/app
COPY * ./
EXPOSE 8080
RUN npm install 
ADD init.sql /docker-entrypoint-initdb.d/
CMD ["node", "app.js"]
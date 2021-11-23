FROM node:lastest
WORKDIR /usr/src/app
COPY * ./
EXPOSE 5000
CMD ["flask", "run"]
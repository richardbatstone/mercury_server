FROM node:8.15.1-jessie
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8080
CMD ["node", "index.js"]

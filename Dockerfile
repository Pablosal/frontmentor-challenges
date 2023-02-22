FROM node:16
WORKDIR /app
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
COPY package*.json /app
COPY . /app
RUN npm install
EXPOSE 5173
ENTRYPOINT ["/entrypoint.sh"]
CMD [ "npm","run","dev" ]
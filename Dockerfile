FROM node

WORKDIR /opt/web-ui

COPY ./yarn.lock .
COPY ./package.json .

RUN yarn install

COPY . .

EXPOSE 8000

ENTRYPOINT ["npm", "run"]

CMD ["dev"]
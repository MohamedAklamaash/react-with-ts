FROM node

COPY package-lock.json package-lock.json
COPY package.json package.json
COPY ./dist/index.js index.js
RUN npm install

ENTRYPOINT [ "node" , "./dist/index.js" ]

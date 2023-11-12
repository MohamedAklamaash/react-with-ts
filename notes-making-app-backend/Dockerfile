FROM node as build

WORKDIR /server

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .

EXPOSE 5001

CMD [ "npm","run","start" ]

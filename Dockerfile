#1st Stage
FROM node:10-alpine as build

# Setting working directory. All the path will be relative to WORKDIR

WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json yarn.lock ./

RUN yarn install

# Copying source files
COPY . .

# Building app
RUN yarn build

#2nd Stage
FROM node:10-alpine

WORKDIR /usr/src/app

ENV USERNAME="boatnoodle"
ENV PASSWORD="Nattasit222539"
ENV IMAGE_NAME="repo.treescale.com/boatnoodle/revhere-frontend:latest"
ENV API_KEY="AIzaSyCf-zMEDcKa8nFOn96jNm-0mmcPlcpABBs"
ENV AUTH_DOMAIN="revhere-51751.firebaseapp.com"
ENV DATABASE_URL="https://revhere-51751.firebaseio.com"
ENV PROJECT_ID="revhere-51751"
ENV STORAGE_BUCKET="revhere-51751.appspot.com"
ENV MESSAGING_SENDER_ID="105192741531"
ENV APP_ID="1:105192741531:web:268a78d5b3667cc7cc843e"
ENV MEASUREMENT_ID="G-442W9NDKZE"

COPY --from=build /usr/src/app .

CMD ["npm", "start"]
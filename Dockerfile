#1st Stage
# FROM node:10 as build
FROM node:12-alpine

# Setting working directory. All the path will be relative to WORKDIR

WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./

RUN yarn install

# Copying source files
COPY . .

# Building app
RUN yarn build

#2nd Stage
# FROM node:10-alpine

# WORKDIR /usr/src/app

# COPY --from=build /usr/src/app .

ENV GRAPHQL_URL=https://phukethomevilla.com/graphql
ENV API_KEY=AIzaSyCf-zMEDcKa8nFOn96jNm-0mmcPlcpABBs
ENV AUTH_DOMAIN=revhere-51751.firebaseapp.com
ENV DATABASE_URL=https://revhere-51751.firebaseio.com
ENV PROJECT_ID=revhere-51751
ENV STORAGE_BUCKET=revhere-51751.appspot.com
ENV MESSAGING_SENDER_ID=105192741531
ENV APP_ID=1:105192741531:web:268a78d5b3667cc7cc843e
ENV MEASUREMENT_ID=G-442W9NDKZE



CMD ["npm", "start"]
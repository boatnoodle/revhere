#1st Stage
FROM node:12 as build

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
FROM node:12-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app .

CMD ["npm", "start"]
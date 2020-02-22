#1st Stage
FROM node:12 AS build

# Setting working directory. All the path will be relative to WORKDIR

WORKDIR /usr/src/backend
# Installing dependencies
COPY package.json .
COPY . .

RUN yarn install

RUN yarn build

# #2nd Stage
# FROM mhart/alpine-node:10

# WORKDIR /usr/src/backend

# COPY package.json ./

# RUN yarn install --prod

# COPY --from=build /usr/src/backend/dist ./dist

CMD ["npm", "start"]

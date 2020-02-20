#!/bin/bash

echo 'start postgres db...'

docker run --rm -d --name my_postgres -v db-data:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=revhere postgres



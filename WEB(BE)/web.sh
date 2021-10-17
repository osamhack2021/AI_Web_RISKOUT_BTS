#!/bin/bash

mkdir -p ./drf/build
mkdir -p ./drf/staticfiles

cd ../frontend

npm i
npm run build

rm -rf ../backend/drf/build/*
cp -r ./build ../backend/drf/

cd ../backend

sudo docker-compose -f web-docker-compose.yml --env-file web-docker-env up

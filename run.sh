#!/bin/bash


# Check if the credential file exists.
if [ -s "./WEB/backend/web-docker-env" ] ; then
    :
else
    echo "[+] The web-docker-env file does not exist or is empty!"
    exit
fi

if [ -s "./WEB/backend/drf/secrets.json" ] ; then
    :
else
    echo "[+] The secrets.json file does not exist or is!"
    exit
fi

if [ -s "./WEB/backend/crawler/crawler/model/twitter/secrets.py" ] ; then
    :
else
    echo "[+] The secrets.py file does not exist or is empty!"
    while true; do
        read -p "Do you want to exclude Twitter from crawling list? (Y/N) : " yn
        case $yn in
            [Yy]* ) sed -i "s/'Twitter': 'twitter'/# 'Twitter': 'twitter'/" ./WEB/backend/crawler/crawler/setting.py; break;;
            [Nn]* ) exit;;
            * ) echo "Please answer yes or no.";;
        esac
    done
fi


# Build & Run NLP Server

echo [+] Building NLP Server...
cd ./NLP
sudo docker-compose up --build -d
cd ../
echo [+] NLP Server started!


# Build & Run Analyzer

echo [+] Building Analyzer Server...
cd ./WEB/backend
sudo docker-compose -f analyzer-docker-compose.yml up --build -d

# Wait until crawling and analyzing done
until [ "`docker inspect -f {{.State.Status}} analyzer_service`"=="exited" && "`docker inspect -f {{.State.ExitCode}} analyzer_service`"=="0"]; do
    sleep 1;
done;
echo [+] Analyzer Server started!


# Build React

echo [+] Building React...

mkdir -p ./drf/build
mkdir -p ./drf/staticfiles

cd ./frontend

npm i
npm run build

rm -rf ../backend/drf/build/*
cp -r ./build ../backend/drf/


# Build & Run Django Server

echo [+] Building Django server...
cd ../backend

sudo docker-compose -f web-docker-compose.yml --env-file web-docker-env up --build -d
echo [+] Django Server started!

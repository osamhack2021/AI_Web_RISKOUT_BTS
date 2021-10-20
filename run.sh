#!/bin/bash

web_docker_secret="./WEB(BE)/web-docker-env"
web_drf_secret="./WEB(BE)/drf/secrets.json"
crawler_twitter_secret="./WEB(BE)/crawler/crawler/model/twitter/secrets.py"

# Check if the credential file exists.
if [ -s $web_docker_secret ] ; then
    :
else
    echo "[!] The '$web_docker_secret' file does not exist or is empty!"
    exit
fi

if [ -s $web_drf_secret ] ; then
    :
else
    echo "[!] The '$web_drf_secret' file does not exist or is!"
    exit
fi

if [ -s $crawler_twitter_secret ] ; then
    :
else
    echo "[!] The '$crawler_twitter_secret' file does not exist or is empty!"
    while true; do
        read -p "Do you want to exclude Twitter from crawling list? (Y/N) : " yn
        case $yn in
            [Yy]* )
                break;;
            [Nn]* ) exit;;
            * ) echo "Please answer yes or no.";;
        esac
    done
fi


# Build & Run NLP Server

echo [+] Building NLP Server...
cd "./AI(BE)"
sudo docker-compose up --build -d
cd ../
echo [+] NLP Server started!


# Build & Run Analyzer

echo [+] Building Analyzer Server...
cd "./WEB(BE)"
sudo docker-compose -f analyzer-docker-compose.yml up --build -d
cd ../


# Wait until crawling and analyzing done

echo [+] Wait until crawling and analyzing done... \(This might take tens of minutes to complete.\)
until [ "`sudo docker inspect -f {{.State.Status}} analyzer_service`" = "exited" ]; do
    sleep 5;
done;
echo [+] Crawling and analyzing done!


# Build React

echo [+] Building React...
mkdir -p "./WEB(BE)/drf/build"
mkdir -p "./WEB(BE)/drf/staticfiles"
cd "./WEB(FE)/frontend"
yarn
yarn build
rm -rf "../../WEB(BE)/drf/build/"
cp -r ./build "../../WEB(BE)/drf/"
cd "../../WEB(BE)"


# Build & Run Django Server

echo [+] Building Django server...
sudo docker-compose -f web-docker-compose.yml --env-file web-docker-env up --build -d
echo [+] Django Server started!

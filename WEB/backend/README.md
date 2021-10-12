# Getting Started

## Prerequisites

* **docker 20.10.x or higher**
```bash
# Ubuntu 20.04 example

sudo apt-get update -y

sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common -y 

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - sudo add-apt-repository \ "deb [arch=amd64] https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) \ stable"

sudo apt-get update -y && sudo apt-get install docker-ce docker-ce-cli containerd.io -y

sudo docker -v sudo systemctl enable docker sudo systemctl status docker
```

* **docker-compose 1.29.x or higher**
```bash
# Ubuntu 20.04 example
# Docker must be installed

sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

sudo docker-compose -version
```

## Usage

#### Analyzer
1. Move to ```~/WEB/NLP/``` and run command ```docker-compose up```
2. Move to ```~/WEB/backend/``` and run command ```chmod a+x analyzer.sh```
3. Run command ```./analyzer.sh```

#### Django
1. Move to ```~/WEB/backend/``` and run command ```cp web-docker-env-example web-docker-env```
2. Edit ```web-docker-env``` with your own credentials.
3. Move to ```~/WEB/backend/drf/``` and run command ```cp secrets.example.json secrets.json```
4. Edit ```secrets.json``` with your own credentials.
5. Move to ```~/WEB/backend/``` and run command ```chmod a+x web.sh```
6. Run command ```./web.sh```

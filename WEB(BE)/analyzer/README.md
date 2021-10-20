# References

https://github.com/mongodb/mongo
https://www.mongodb.com/


# Requirements

* Ubuntu 20.04 // Codespace default
* If you are using another Linux distribution, you will need to install mongoDB yourself.

* Python 3.8.x // pre-installed at codespace
* pip3 (sudo apt install python3-pip) // pre-installed at codespace
* python3.8-venv (sudo apt install python3.8-venv)


# Installation

* cd ~{project dir}/WEB/backend
* mkdir venv
* cd venv
* python3 -m venv mongo-venv
* source ./mongo-venv/bin/activate
#
* cd ~{project dir}/WEB/backend/analyzer/mongo-test
* chmod a+x mongo_install.sh
* ./mongo_install.sh
#
* cd ~{project dir}/WEB/backend/analyzer/mongo-test
* pip install -r requirements.txt
#
* mongod
* Open new terminal and run command 
```cd ~{project dir}/WEB/backend/analyzer/mongo-test```
```mongoimport --db=riskout --collection=counter --jsonArray --file=riskout_db.json```
FROM python:3.7.4-stretch

WORKDIR /home/user

RUN apt-get update && apt-get install -y curl git pkg-config cmake apt-utils
RUN apt-get install -y wget build-essential autotools-dev automake libmecab2 libmecab-dev

# copy code
COPY riskout /home/user/riskout

# install as a package
COPY setup.py requirements.txt /home/user/
RUN pip3 install --no-cache-dir -r requirements.txt

# install mecab
COPY mecab.sh /home/user/
RUN apt-get install -y g++ openjdk-8-jdk curl
RUN bash mecab.sh

# add user-dic
COPY user-dic.csv /tmp/mecab-ko-dic-2.1.1-20180720/user-dic/
RUN bash /tmp/mecab-ko-dic-2.1.1-20180720/tools/add-userdic.sh
WORKDIR /tmp/mecab-ko-dic-2.1.1-20180720
RUN make clean
RUN make install

# copy saved models
# COPY models* /home/user/models/

# download google drive
WORKDIR /home/user
COPY install_model.py /home/user/
RUN pip3 install --no-cache-dir gdown
RUN python3 install_model.py

# Copy REST API code
COPY rest_api /home/user/rest_api

# optional: copy data directory containing docs for ingestion
#COPY data /home/user/data

EXPOSE 8000

# Command for running the API server
# gunicorn rest_api.application:app -k uvicorn.workers.UvicornWorker --workers 1

CMD ["gunicorn", "rest_api.application:app",  "-b", "0.0.0.0", "-k", "uvicorn.workers.UvicornWorker", "--workers", "2", "--timeout", "300"]


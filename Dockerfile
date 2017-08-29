FROM ubuntu:16.04

# Install python parser libraries, since they have js code
RUN apt-get update \
    && apt-get install -y wget curl sudo git libcurl4-openssl-dev ca-certificates build-essential python3 python3-pip \
    && apt-get install -y nodejs npm \
    && ln -s /usr/bin/nodejs /usr/bin/node \
    && apt-get install -y python python-dev python-pip \
    && pip3 install --upgrade pip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

RUN pip3 install --target app/static/grammar -r req-parsers.txt

# Build frontend
RUN make build_js

# Build requirements for server
RUN pip3 install -r requirements.txt -r req-parsers.txt

# install osh AST generator
# Note, we make sure python -> python2.7, so the oil build scripts won't use python3
#
RUN mkdir -p /usr/bin/python2_7 && ln /usr/bin/python2.7 /usr/bin/python2_7/python \
    && git clone -b dev-comms https://github.com/datacamp/oil.git \
    && PATH="/usr/bin/python2_7:$PATH" pip2 install -e ./oil

EXPOSE 8000

CMD ["python3", "test.py"]

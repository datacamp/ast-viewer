FROM ubuntu:18.04

# Install python parser libraries, since they have js code
RUN apt-get update \
    && apt-get install -y wget curl sudo git libcurl4-openssl-dev ca-certificates build-essential python3 python3-pip
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash \
    && apt-get install -y nodejs
RUN apt-get install -y python python-dev python-pip \
    && pip3 install --upgrade pip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Build node modules
COPY ./app/static/package.json ./app/static/package.json
RUN (cd app/static && npm install)

# Build requirements for server
COPY requirements.txt req-parsers.txt requirements-dc.txt ./
RUN pip3 install -r requirements.txt -r req-parsers.txt -r requirements-dc.txt

# install osh AST generator
# Note, we make sure python -> python2.7, so the oil build scripts won't use python3
ARG LIBS=/var/lib/python/site-packages
RUN mkdir -p $LIBS/python2
RUN pip2 install git+https://github.com/datacamp/oil.git@ast/v0.1.1 --target $LIBS/python2

# Build frontend
COPY config.py run.py Makefile ./
COPY app/static ./app/static
RUN make build_js

# Copy server
COPY app/*.py ./app/
RUN ls *

EXPOSE 3000

RUN useradd -m -s /bin/bash user
USER user

CMD ["/bin/bash", "-c", "gunicorn -w 4 -b 0.0.0.0:3000 -k gevent app:app"]

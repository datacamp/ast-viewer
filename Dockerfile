# Install required parsers into app/static/grammar folder ---------------------
FROM python:3.5

WORKDIR /app
COPY ./ .

RUN pip3 install --target app/static/grammar -r req-parsers.txt


# Build frontend --------------------------------------------------------------
FROM node:8.4

WORKDIR /app
COPY --from=0 /app .
RUN make build_js


# Build final container -------------------------------------------------------
FROM python:3.5

WORKDIR /app
COPY --from=1 /app .
RUN pip3 install -r requirements.txt -r req-parsers.txt

# install osh AST generator
RUN apt-get update \
    && apt-get install -y python python-dev python-pip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Note, we make sure python -> python2.7, so the oil build scripts won't use python3
#
RUN mkdir -p /usr/bin/python2_7 && ln /usr/bin/python2.7 /usr/bin/python2_7/python \
    && git clone -b dev-comms https://github.com/datacamp/oil.git \
    && PATH="/usr/bin/python2_7:$PATH" pip2 install -e ./oil

EXPOSE 8000

CMD ["python3", "test.py"]

FROM python:3.5

WORKDIR /app
COPY ./ .

RUN pip3 install --target app/static/grammar -r req-parsers.txt


FROM node:8.4

WORKDIR /app
COPY --from=0 /app .
RUN make build_js


FROM python:3.5

WORKDIR /app
COPY --from=1 /app .
RUN pip3 install -r requirements.txt -r req-parsers.txt

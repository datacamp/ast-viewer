web: env PYTHONPATH=$PYTHONPATH:$PWD/app/static/frontend/grammar gunicorn -w 4 -b 0.0.0.0:$PORT -k gevent app:app

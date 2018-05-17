from app import app
import sys

debug = bool(sys.argv[1]) if len(sys.argv) > 1 else False

app.run(debug=debug, threaded=True, host = '0.0.0.0', port = 3000)

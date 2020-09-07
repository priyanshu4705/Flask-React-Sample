# BackEnd Api 
import time
from flask import Flask, jsonify

app = Flask(__name__)

# return current time
@app.route('/time')
def get_current_time():
    return jsonify({'time': time.asctime(time.localtime(time.time()))})


if __name__ == "__main__":
    app.run(debug=True)

from flask import (
    Flask,
    render_template as render,
    request,
    redirect,
    send_from_directory,
    send_file
)
import os

app = Flask(__name__)


@app.route('/public/<path:path>', methods=['GET'])
def assets(path):
    filename = os.path.join(os.getcwd(), 'public', path)
    print(filename)
    return send_file(filename, mimetype='image/png')


@app.route('/', methods=['GET'])
def signin():
    return {'server': 'works'}


if __name__ == '__main__':
    app.run(debug=True, port=8000)

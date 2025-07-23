# server/app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Libera acesso entre front e back

senha_atual = 0

@app.route('/senha')
def get_senha():
    return jsonify({'senha': senha_atual})

@app.route('/chamar', methods=['POST'])
def chamar_senha():
    global senha_atual
    senha_atual += 1
    return jsonify({'senha': senha_atual})

if __name__ == '__main__':
    app.run(debug=True)

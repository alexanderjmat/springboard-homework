from boggle import Boggle
from flask import Flask, request, render_template, redirect, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from flask_cors import CORS
import json

app = Flask(__name__)
app.config['SECRET_KEY'] = "abc123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.debug = True
# app.config['TESTING'] = True
toolbar = DebugToolbarExtension(app)
boggle_game = Boggle()
board = boggle_game.make_board()


@app.route('/')
def home_page():
    session["board"] = board
    session.modified = True
    return render_template("index.html", board=board)

@app.route('/guess', methods=["POST"])
def guess_word():
    # import pdb
    # pdb.set_trace()
    content = request.form.to_dict()
    content = list(content.keys())

    word_dict = json.loads(content[0])
    word = word_dict["word"]
    if boggle_game.check_valid_word(board, word) == "ok":
        response = {"result": "ok"}
    elif boggle_game.check_valid_word(board, word) == "not-on-board":
        response = {"result": "not-on-board"}
    else:
        response = {"result": "not-a-word"}
    
    # session["response"] = jsonify(response)
    
    redirect('/')

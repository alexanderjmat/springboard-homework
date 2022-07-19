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


@app.route('/')
def home_page():
    board = boggle_game.make_board()
    session['board'] = board
    highscore = session.get('highscore', 0)
    times_played = session.get('times played', 0)
    return render_template("index.html", board=board, highscore=highscore, times_played=times_played)

@app.route('/guess')
def guess_word():
    word = request.args['word']
    board = session["board"]
    check_valid_word = boggle_game.check_valid_word(board, word)
    return jsonify({'result': check_valid_word})

@app.route('/score', methods=["POST"])
def score_game():
    score = request.json['score']
    highscore = session.get('highscore', 0)
    session['highscore'] = max(score, highscore)
    session['times_played'] += 1
    session['score'] = score
    redirect('/')

    return jsonify(session)

    
 
    
    
   

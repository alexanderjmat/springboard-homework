import stories
from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "test123"
debug = DebugToolbarExtension(app)

s = stories.Story (
    ["place", "noun", "verb", "adjective", "plural_noun"],
    """Once upon a time in a long-ago {place}, there lived a
       large {adjective} {noun}. It loved to {verb} {plural_noun}."""
)

@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/result')
def results_page():
    place = request.args.get("place")
    noun = request.args.get("noun")
    verb = request.args.get("verb")
    adjective = request.args.get("adjective")
    plural_noun = request.args.get("plural_noun")
    story = s.generate({"place": place, "noun": noun, "verb": verb, "adjective": adjective, "plural_noun": plural_noun})
    return render_template('result.html', story=story)





"""Minimal Flask application used to serve the portfolio."""

from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def home():
    """Render the single-page portfolio."""
    return render_template("index.html")


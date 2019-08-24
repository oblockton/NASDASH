import os

import pandas as pd
import numpy as np


from flask import Flask, jsonify, render_template
import sqlite3
from sqlite3 import Error
# from config import NEWS_KEY
from db_load import connector,symbolFetch, get_articles, init_newstable,marketstats,scrape_econcal,stock_call
import requests





app = Flask(__name__)
NEWS_KEY = os.environ.get('NEWS_KEY','')
alpha_vantage_key = os.environ.get('ALPHA_VANTAGE', '')




#################################################
# Database Setup
#################################################
# Handled in db/db_load.py. database parse is stored as a variable -> imported to this file for use.


@app.route("/")
def index():
    """Return the homepage."""

    return render_template("index.html")

@app.route("/aboutus")
def aboutus():
    return render_template("aboutus.html")

@app.route("/api")
def api():
    return render_template("api.html")


@app.route("/tickpicks")
def tickermenu():
    """Return a list of ticker symbols."""

    """ The function symbolfetch returns a list of symbols.Declared in db_load.py"""
    return jsonify(symbolFetch())



@app.route("/newstable/<symbol>")
def news_table(symbol):
    """ Returns parsed news data from an API call.loaded to db, then used to build news table"""
    print(symbol)

    articles = get_articles(symbol,NEWS_KEY)
    # init_newstable(articles)

    return jsonify(articles)
    # current_time = datetime.datetime.now()
    # latest_request = datetime.datetime.now()



@app.route("/marketstats/<tableinput>")
def show_tables(tableinput):

    return marketstats(tableinput)



@app.route('/econcal/<dateinput>')
def economic_calendar(dateinput):
    try:
        return scrape_econcal(dateinput)
    except:
        return jsonify("No records for this date")

# *******************************************************************
# Pull historical stock data from Alpha Vantage by TIME_SERIES_MONTHLY
#********************************************************************

@app.route("/stockpull/<symbol>")
def stockpull(symbol):
    return jsonify(stock_call(symbol,alpha_vantage_key))



# *******************************************************************
# Pull historical stock data from Alpha Vantage by TIME_SERIES_MONTHLY
#********************************************************************
@app.route("/stockhistory/<symbol>")
def stockhistory(symbol):
    url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=' + symbol + f'&apikey={alpha_vantage_key}'
    stockhistory = requests.get(url).json()
    return jsonify(stockhistory)



if __name__ == "__main__":
    app.run()

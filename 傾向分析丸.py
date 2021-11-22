# -*- coding: utf-8 -*-

from flask import Flask, render_template #追加
from static.textmining import model_making

app = Flask(__name__)
        
@app.route('/')
@app.route('/login')
def init():
    return render_template('login.html')
    
@app.route('/top_page')
def top_page():
    return render_template('home.html')

@app.route('/keikou/')
@app.route('/keikou')
def error():
        return render_template('error.html')

# def execute():
    # with open("text_2.txt", "r", encoding="utf-8") as file:
        # return file.read()

#試したが area と　job　がないと　リングが見つかりません
@app.route('/keikou/<area>_<job>')
def keikou(area, job):
    if area == "err" and job == "err":
        return render_template('error.html')
    else:
        return render_template('keikou.html', area = area, job = job, output = model_making.results)
        # results は　model making 14　行目にあります
        # output　は　keikou.html の　15行目にあります、　{{output}}　を置き換えします

## おまじない
if __name__ == "__main__":
    app.run(debug=True)
    

# -- coding: cp65001 --

# python解析器janome, ベクトル変換ツールword2vecをインポート
from janome.tokenizer import Tokenizer
from gensim.models import word2vec
import re

# テキストファイルの読み込み - 2
bindata = open("static/textmining/Sample.csv","r", encoding="utf-8")
text = bindata.read()

# 形態素解析 - 3
t = Tokenizer()
results = []

# テキストを一行ごとに処理 - 4
lines = text.split("\r\n")
for line in lines:
	s = line
	s = s.replace("|", "")
	s = re.sub(r"《#.+?》", "", s)
	s = re.sub(r"[#.+?]", "", s)
	tokens = t.tokenize(s)
	# 必要な語句だけを対象とする - 5
	r = []
	for tok in tokens:
		if tok.base_form == "*":
			w = tok.surface
		else:
			w = tok.base_form
		ps = tok.part_of_speech
		hinsi = ps.split(",")[0]
		if hinsi in ["名詞"]:
			if w != "こと" and w !="の" and w != "ん" and w != "ほう" and w != "さん" and w != "よう":
				r.append(w)
	rl = (" ".join(r)).strip()
	results.append(rl)
	# print(rl)

# 書き込み先テキストを開く - 6
# text_file = "text_2.txt"
# with open(text_file, "w", encoding="utf-8") as fp:
	# fp.write("\n".join(results))
    
# word2vecでモデル作成 - 7
# data = word2vec.LineSentence(text_file)
# model = word2vec.Word2Vec(data, window=1, hs=1, min_count=1, sg=1) #, size=100
# model.save("text_2.model")
# print("ok")
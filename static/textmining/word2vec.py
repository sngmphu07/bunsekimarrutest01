# word2vec.py
# ベクトル変換ツールword2vecをインポート - 1
from gensim.models import Word2Vec
from janome.analyzer import Analyzer
from janome.charfilter import *
from janome.tokenfilter import *

# 類似する語句を表示 - 2
model = Word2Vec.load("text_2.model")
for word in ["システム"]:
	words = model.wv.most_similar(positive=[word])
	result = [w[0] for w in words]
	#print(word, "=", ",".join(result))

text_file = "text_3.txt"
result = word + " = " + ",".join(result)
with open(text_file, "w", encoding="utf-8") as fp:
	fp.write(result)
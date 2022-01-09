# https://colab.research.google.com/#create=true
!pip install tensorflow_hub tensorflow_text pandas_ods_reader csv

'''
Load sentences from ods
'''
import numpy as np
from pandas_ods_reader import read_ods

base_path = "input.ods"
sheet_index = 0
df = read_ods(base_path, sheet_index, headers=False)
sheetArray = np.array(df)

'''
Get sentences from ods
'''

sentenceHeader = sheetArray[0][0]
sentences = [i[0] for i in sheetArray[1:]]

'''
Convert sentences to embeddings
'''
import tensorflow_hub as hub
import tensorflow_text

embed = hub.load("https://tfhub.dev/google/universal-sentence-encoder-multilingual/3")
embedding = embed(sentences)

X = np.array(embedding.numpy().tolist())

embeddingLen = len(X[0])
embeddingHeaders = [sentenceHeader+'{}'.format(i) for i in range(0, embeddingLen)]

outputHeaders = np.hstack((embeddingHeaders, sheetArray[0][1:]))
outputDataRows = [np.hstack((row, sheetArray[(idx+1)][1:])) for idx, row in enumerate(X)]

outputData = np.vstack([outputHeaders, outputDataRows])

'''
Write result to CSV
'''
import csv

with open("output.csv", "w") as f:
    writer = csv.writer(f)
    writer.writerows(outputData)
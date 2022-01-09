# https://colab.research.google.com/#create=true
!pip install tensorflow_hub tensorflow_text pandas_ods_reader deep-translator

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
Translate
'''

from deep_translator import GoogleTranslator
translator = GoogleTranslator(source='auto', target='en')
translatedSentences = [translator.translate(i) for i in sentences]

'''
Convert sentences to embeddings
'''
import tensorflow_hub as hub
import tensorflow_text

encoder = hub.KerasLayer("https://tfhub.dev/google/sentence-t5/st5-large/1")
embedding = encoder(translatedSentences)

X = np.array(embedding)[0]

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
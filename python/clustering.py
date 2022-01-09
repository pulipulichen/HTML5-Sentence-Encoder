# https://colab.research.google.com/#create=true
!pip install tensorflow_hub tensorflow_text pandas_ods_reader pyexcel-ods

'''
Load sentences from ods
'''
import numpy as np
from pandas_ods_reader import read_ods

base_path = "input.ods"
sheet_index = 0
df = read_ods(base_path, sheet_index, headers=True)
sentences = np.array(df)

'''
Convert sentences to embeddings
'''
import tensorflow_hub as hub
import tensorflow_text

embed = hub.load("https://tfhub.dev/google/universal-sentence-encoder-multilingual/3")
embedding = embed(sentences)

X = np.array(embedding.numpy().tolist())

'''
Determine optimal k of clustering
'''
from yellowbrick.cluster import KElbowVisualizer
from sklearn.cluster import KMeans

model = KMeans()
visualizer = KElbowVisualizer(model
  , k=(2,7)  # k is range of number of clusters.
  , metric='calinski_harabasz'
  , timings= True)
visualizer.fit(X) # Fit data to visualizer
visualizer.show() # Finalize and render figure

'''
Clustering sentences
'''
clf = KMeans(
    n_clusters=visualizer.elbow_value_, # Set optimal k
)
clf.fit_predict(X)
print(clf.labels_)  # Print the result of clusters

'''
Write result to ODS
'''
from pyexcel_ods import save_data
from collections import OrderedDict

# Convert 1D array to 2D array
row = np.array(['cluster'])
for x in clf.labels_:
  row = np.vstack([row,[x]])

data = OrderedDict()
data.update({"data": row})
save_data("output.ods", data)
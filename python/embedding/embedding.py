# pip3 install --quiet tensorflow
# pip3 install --quiet tensorflow_text

import numpy as np

from pandas_ods_reader import read_ods

base_path = "input.ods"
sheet_index = 1

df = read_ods(base_path, 1, headers=True)
df.drop(df.columns[len(df.columns)-1], axis=1, inplace=True)
X = np.array(df)

from yellowbrick.cluster import KElbowVisualizer
from sklearn.cluster import KMeans
model = KMeans()
# k is range of number of clusters.
visualizer = KElbowVisualizer(model, k=(2,7), metric='silhouette', timings= True)
visualizer.fit(X)        # Fit data to visualizer
visualizer.show()        # Finalize and render figure

clf = KMeans(
    n_clusters=visualizer.elbow_value_,
)

clf.fit_predict(X)
clf.cluster_centers_
clf.labels_
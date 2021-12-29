import numpy as np

from pandas_ods_reader import read_ods

base_path = "input.ods"
sheet_index = 1

df = read_ods(base_path, 1, headers=True)
df.drop(df.columns[len(df.columns)-1], axis=1, inplace=True)
X = np.array(df)

from sklearn.neighbors import LocalOutlierFactor
clf = LocalOutlierFactor(n_neighbors=2)
clf.fit_predict(X)
clf.negative_outlier_factor_
import pandas as pd
import numpy as np


filas = 200
columnas = 2
data = np.random.rand(filas, columnas)*50
df = pd.DataFrame(data, columns=['bloque1', 'bloque2'])



print(df)
print(df['bloque1'])
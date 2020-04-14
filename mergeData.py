import pandas as pd

left = pd.read_csv("cas_pub.csv", sep=";", encoding="ISO-8859-1")
right = pd.read_csv("temoignages_pub.csv", sep=";", encoding="ISO-8859-1")

merged = pd.merge(left, right, how='left', on=['id_cas','cas_numEtude'])
merged.to_csv("cas&temoignages.csv", index=False)


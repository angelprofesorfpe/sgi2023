# -*- coding: utf-8 -*-
"""
Created on Wed Jun  7 18:00:15 2023

@author: Alumno
"""

import networkx as nx
import matplotlib.pyplot as plt


taxonomia = nx.DiGraph()


taxonomia.add_node("Cnidaria")
taxonomia.add_node("Scyphozoa")
taxonomia.add_node("Cubozoa")
taxonomia.add_node("Hydrozoa")
taxonomia.add_node("Aurelia")
taxonomia.add_node("Chrysaora")
taxonomia.add_node("Cyanea")


taxonomia.add_edge("Cnidaria", "Scyphozoa")
taxonomia.add_edge("Cnidaria", "Cubozoa")
taxonomia.add_edge("Cnidaria", "Hydrozoa")
taxonomia.add_edge("Scyphozoa", "Aurelia")
taxonomia.add_edge("Cubozoa", "Chrysaora")
taxonomia.add_edge("Hydrozoa", "Cyanea")


pos = nx.spring_layout(taxonomia)
nx.draw_networkx(taxonomia, pos=pos, with_labels=True, node_size=1000, node_color='lightblue', font_size=10, font_weight='bold', arrowsize=20)
plt.axis('off')
plt.show()

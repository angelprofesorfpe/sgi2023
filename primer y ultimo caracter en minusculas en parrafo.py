# -*- coding: utf-8 -*-
"""
Created on Thu Jun 15 20:48:53 2023

@author: Alumno
"""

parrafo = input("Introduce un párrafo: ")

# Dividir el párrafo en palabras
palabras = parrafo.split()

# Procesar cada palabra en el párrafo
resultado = []
for palabra in palabras:
    if len(palabra) > 1:
        palabra_modificada = palabra[0] + palabra[1:-1].upper() + palabra[-1]
        resultado.append(palabra_modificada)
    else:
        resultado.append(palabra)

# Unir las palabras en un nuevo párrafo
parrafo_modificado = ' '.join(resultado)

print("El párrafo con palabras en mayúscula, excepto la primera y la última palabra:")
print(parrafo_modificado)







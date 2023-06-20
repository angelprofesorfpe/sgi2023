# -*- coding: utf-8 -*-
"""
Created on Tue Jun 20 16:58:00 2023

@author: Alumno
"""

def invertir_caracteres(palabra):
    return palabra[::-1]

def obtener_palabras_de_cinco_caracteres(lista):
    palabras_de_cinco = []
    for palabra in lista:
        if len(palabra) == 5:
            palabras_de_cinco.append(invertir_caracteres(palabra))
    return palabras_de_cinco[::-1]

lista_ejemplo = ["aa", "b", "camiseta", "cacao", "platano", "cereza", "cacahuete","manos","caras"]
resultado = obtener_palabras_de_cinco_caracteres(lista_ejemplo)
resultado_invertido = resultado[::-1]
print("Las palabras de cinco caracteres con caracteres invertidos son:", resultado_invertido)
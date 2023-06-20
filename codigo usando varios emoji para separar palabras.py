# -*- coding: utf-8 -*-
"""
Created on Fri Jun 16 17:59:51 2023

@author: Alumno
"""

import random

cadena1 = input("Introduce una cadena de caracteres: ")

emoji_list = ["😊", "🔥", "🌟", "❤️", "🎉", "👍", "🐶", "🍕", "⚡", "🌺"]
emoji = ''.join(random.choices(emoji_list, k=10))

palabras_modificadas = []
for palabra in cadena1.split():
    palabra_modificada = ''.join([caracter.upper() if random.random() < 0.5 else caracter.lower() for caracter in palabra])
    palabras_modificadas.append(palabra_modificada)

cadena_modificada = emoji.join(palabras_modificadas)

print("La cadena con palabras y caracteres en mayúscula y minúscula:", cadena_modificada)
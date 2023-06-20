# -*- coding: utf-8 -*-
"""
Created on Fri Jun 16 16:51:10 2023

@author: Alumno
"""

import random

cadena1 = input("Introduce una cadena de caracteres: ")

cadena_modificada = ''.join([caracter.upper() if random.random() < 0.5 else caracter.lower() for caracter in cadena1])

print("La cadena con caracteres en mayúscula y minúscula:", cadena_modificada)
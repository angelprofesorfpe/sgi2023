# -*- coding: utf-8 -*-
"""
Created on Thu Jun 15 20:33:21 2023

@author: Alumno
"""

cadena1 = input(" introduce una cadena de caracteres: ")
mayusculas = cadena1[0] + cadena1[1:-1].upper() + cadena1[-1]
print("la cadena con caracteres en mayúscula, excepto el primero y el último:", mayusculas)
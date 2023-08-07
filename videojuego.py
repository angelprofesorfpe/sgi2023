import random
class personaje:
    def __init__(self,nombre,tipo,energia_max,poder):
        self.nombre=nombre
        self.tipo=tipo
        self.energia_max=energia_max
        self.poder=poder
        self.energia_actual=energia_max
        
    def atacar (self,objetivo):
        dano=random.ranint(1,self.poder)
        print(f"{self.nombre} ataca a {objetivo.nombre}causando un dano de..[{dano}")
        objetivo.reabre_dano(dano)
        
    def recibir_dano(self, cantidad):
        self.energia_actual-=cantidad
        if self.energia_actual<=0:
            print(f"{self.nombre} ha sido derrotado")
        else:
            print(f"{self.nombre}:energia_actual={self.energia_actual}")
            
class elfo(personaje):
    def __init__(self,nombre):
        super().__(nombre,"elfo",40,8)
    def usar_magia(self,objetivo):
        if self.energia_actual>=10:
            self.energia_actual-=10
            dano=random.randint(10,15)
            print(f"{self.nombre}usa magia contra{objetivo.nombre}dano=>")
            objetivo.recibe_dano(dano)
            
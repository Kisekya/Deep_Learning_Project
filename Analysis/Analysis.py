# Author Marina Boudin Coralie Muller

from numpy import*
from torch import*
from torchvision import*

# Fonctions

def read_the_file(name):
    my_file=[]
    file=open(name,"r")
    for lign in file.readlines():
        if not lign:
            break
        my_lign=lign.split(",")
        my_lign[1]=my_lign[1][0]
        my_file.append(my_lign)
        print(my_lign)
    file.close()
    return my_file

# Main

my_file="Race.csv"
my_data=read_the_file(my_file)
print(my_data)

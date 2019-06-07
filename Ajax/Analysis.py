# Author Marina Boudin Coralie Muller

import numpy
import torch
from copy import*
from torchvision import*

# Fonctions

def mean_absolute_error(actual_value,predicted_value,size_average=None,reduce=None,reduction='mean'):
    loss=torch.nn.L1Loss(size_average,reduce,reduction)
    output=loss(actual_value,predicted_value)
    return output

def mean_squarred_error(actual_value,predicted_value,size_average=None,reduce=None,reduction='mean'):
    loss=torch.nn.MSELoss(size_average,reduce,reduction)
    output=loss(actual_value,predicted_value)
    return output

def cross_entropy(actual_value,predicted_value,weight=None,size_average=None,ignore_index=-100,reduce=None,reduction='mean'):
    loss=torch.nn.CrossEntropyLoss(weight,size_average,ignore_index,reduce,reduction)
    output=loss(actual_value,predicted_value)
    return output

def kullback_leibler_divergence(actual_value,predicted_value,size_average=None,reduce=None,reduction='mean'):
    loss=torch.nn.KLDivLoss(size_average,reduce,reduction)
    output=loss(actual_value,property,predicted_value)
    return output

def binary_cross_entropy(actual_value,predicted_value,weight=None,size_average=None,reduce=None,reduction='mean'):
    loss=torch.nn.BCELoss(weight,size_average,reduce,reduction)
    output=loss(actual_value,predicted_value)
    return output

def hinge(actual_value,predicted_value,margin=1,size_average=None,reduce=None,reduction='mean'):
    loss=torch.nn.HingeEmbeddingLoss(margin,size_average,reduce,reduction)
    output=loss(actual_value,predicted_value)
    return output

def cosine(actual_value,predicted_value,margin=0.0,size_average=None,reduce=None,reduction='mean'):
    loss=torch.nn.CosineEmbeddingLoss(margin,size_average,reduce,reduction)
    output=loss(actual_value,predicted_value)
    return output

def poisson(actual_value,predicted_value,log_input=True,full=False,size_average=None,eps=(1*numpy.math.exp(-8)),reduce=None,reduction='mean'):
    loss=torch.nn.PoissonNLLLoss(log_input,full,size_average,eps,reduce,reduction)
    output=loss(actual_value,predicted_value)
    return output

def read_the_file(name):
    my_file=[]
    file=open(name,"r")
    for lign in file.readlines():
        if not lign:
            break
        lign=lign.split(",")
        my_lign=[]
        for element in lign:
            element=element.split()
            if len(element)!=0:
                try:
                    element=float(element[0])
                    my_lign.append(element)
                except ValueError:
                    my_lign.append(element[0])
        my_file.append(my_lign)
    file.close()
    return my_file

# Main

my_file="iris.csv"
my_data=read_the_file(my_file)
my_numerical_data=[]
for data in my_data:
    new_one=deepcopy(data)
    new_one.pop(0)
    my_numerical_data.append(new_one)
my_tensor=torch.tensor(my_numerical_data)

input=torch.randn(3,5,requires_grad=True)
target=torch.randn(3,5)
output=mean_absolute_error(input,target)
print(output)

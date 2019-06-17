# Author Marina Boudin Coralie Muller


from xml.dom import minidom
import sys

#######  Parse xml 

def parse():
    doc = minidom.parse('file.xml')
    # print (doc.toprettyxml()) # permit to look the xml 
    return doc
parse()


######### Browse the file and return lists of data

def DomParcours(doc):
    data=[]
    root = doc.documentElement
    for j in range(len(root.childNodes)): #### permit to browse and define the number of childnodes (dertermine size)
        if j%2==0: #eliminate the second run of childnodes
            continue
        else:
            attributes=root.childNodes[j].attributes   
            for i in attributes.values():
                try:
                    data=[float(x) for x in i.nodeValue[1:-1].split(",")] #Permit to converte string into integers
                except OSError as err:
                    print("OS error: {0}".format(err))
                except ValueError:
                    print("Could not convert data to an integer. Plase give a data with no string.")
                except:
                    print("Unexpected error:", sys.exc_info()[0])
                    raise
                print (data) 

                

        
doc=parse()
DomParcours(doc)
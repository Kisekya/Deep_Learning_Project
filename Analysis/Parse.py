from xml.dom import minidom

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
    tmp=0
    for j in range(len(root.childNodes)): #### permit to browse and define the number of childnodes (dertermine size)
        if j%2==0: #eliminate the second run of childnodes 
            continue
        else:
            attributes=root.childNodes[j].attributes   
            for i in attributes.values():
                data=[float(x) for x in i.nodeValue[1:-1].split(",")] #permet de cree liste de nombre avec liste str
                print (data) 
                

            


                    

    



        




doc=parse()
DomParcours(doc)
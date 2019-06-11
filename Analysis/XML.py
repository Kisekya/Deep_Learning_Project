from xml.dom import minidom

# doc= minidom.Document()
# root=doc.createElement('root')
# rootatt=doc.createAttribute('name')
# rootatt.nodeValue='foo'
# doc.appendChild(root)
# root.setAttributeNode(rootatt)
# comment=doc.createComment("Hello you")
# root.appendChild(comment)
# doc.toxml()
# print(doc.toprettyxml())

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

def create_XML(data):
    my_doc=minidom.Document()
    racine=my_doc.createElement('root')
    desc=my_doc.createAttribute('Description')
    desc.nodeValue="Begining of the datas"
    racine.setAttributeNode(desc)
    my_doc.appendChild(racine)
    for k in range(len(data)):
        name=my_doc.createElement("Data_"+str(k+1))
        valeur=my_doc.createAttribute("Lign")
        valeur.nodeValue=str(data[k])
        for i in range(len(data[k])):
            val=my_doc.createElement("Col_"+str(i))
            v=my_doc.createAttribute("Value")
            v.nodeValue=str(data[k][i])
            val.setAttributeNode(v)
            name.appendChild(val)
        name.setAttributeNode(valeur)
        racine.appendChild(name)
    my_doc.toxml()
    print(my_doc.toprettyxml())


if __name__=="__main__":
    data=read_the_file("Race.csv")
    create_XML(data)

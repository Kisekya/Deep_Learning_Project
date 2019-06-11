from xml.dom import minidom
import xmltodict

# with open('file.xml') as fd:
#     doc = xmltodict.parse(fd.read())
#     doc

def parse():
    doc = minidom.parse('file.xml')
    # print (doc.toprettyxml()) 
    return doc
parse()

def DomParcours(doc):
    root = doc.documentElement





    for element in root.getElementsByTagName('Value'):
        print (element.toprettyxml())
        


print(root)


doc=parse()
DomParcours(doc)
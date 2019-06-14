import cgi,cgitb

form = cgi.FieldStorage()

data=form.getvalue('my_data')

print("Content-type:text/html\r\n\r\n")
print("<body><p>%s</p></body>"%(data))

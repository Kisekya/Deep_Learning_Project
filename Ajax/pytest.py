# Author Marina Boudin Coralie Muller


from flask import Flask
app = Flask(__name__)
 
@app.route("/")
# def hello():
#     return "Welcome to Python Flask!"
 


# from flask import render_template
 
# @app.route('/')
def read_the_file():
    my_file=[]
    name="Race.csv"
    my_race =[]
    file=open(name,"r")
    for lign in file.readlines():
        if not lign:
            break
        my_lign=lign.split(",")
        my_lign[1]=my_lign[1][0]
        my_file.append(my_lign)
    for i in range(len(my_file)):
        if my_file[i][1] == '1':
            my_race.append(my_file[i][0])
            races = 'chien'
            my_race.append(races)
        elif my_file[i][1] == '2':
            my_race.append(my_file[i][0])
            races = 'chat'
            my_race.append(races)
    file.close()
    print ("coucou")
    print (my_race)
    coucou=""
    for k in my_race:
        coucou=coucou+"<p style=\"color:blue;\">"+k+"</p>"
    return coucou


    




# Main




if __name__ == "__main__":
    # my_file="Race.csv"
    # my_data=read_the_file(my_file)
    app.run()

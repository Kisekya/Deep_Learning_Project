from flask import Flask

app=Flask(__name__)
@app.route("/")
def main():
    return "coucou"

if __name__="__main__":
    main()
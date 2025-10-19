from flask import Flask, jsonify

app = Flask(__name__, static_url_path='/public', static_folder='public')

@app.get("/")
def index():
    return "Welcome to REST API!"

@app.get("/api/v1/cat")
def get_cat():
    cat = [{
        "cat_id": "7218",
        "name": "Pyarry",
        "birthdate": "2009-12-05",
        "weight": 8,
        "owner": "Sagar Sandesh",
        "image": "public/111.jpg"
    }]
    return jsonify(cat)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)
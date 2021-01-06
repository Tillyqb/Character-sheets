from flask import Flask, render_template, request, jsonify
from model import connect_to_db
from crud import create_user, check_user, validate_user

app=Flask(__name__)

@app.route("/")
def homepage():
  return render_template('root.html')

@app.route("/api/login", methods=["POST"])
def login(): 
    data = request.get_json()
    user_name = data['userName']
    passHash = data['password']

    if check_user(user_name) == False:
        print('bad email')
        return jsonify('bad email')
    else:
        if validate_user(user_name, passHash):
            print('Good login')
            return jsonify("Good login")
        else:
            print('bad password')
            return jsonify("bad password")

@app.route("/api/new-user", methods=["POST"])
def regiter():
    data = request.get_json()
    print(data)
    email = data['email']
    email2 = data['email2']
    passHash = data['passHash']
    passHashh2 = data['passHash2']
    f_name = data['fName']
    l_name = data['lName']
    user_name = data['userName']

    if check_user(email) == False:
        print('good email')
        if email == email2:
            print('emails match')
            if passHash == passHash2:
                print('passwords match')
                create_user(userName, passHash, email, f_name, l_name)
                return jsonify('good registaration')
            else:
                return jsonify('password mismatch')
        else:
            return jsonify('email mismatch')
    else:
        return jsonify('email in system')

if __name__ == "__main__":
  connect_to_db(app)
  app.run(debug=True, host='0.0.0.0')
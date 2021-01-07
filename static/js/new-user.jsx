function CreateUser(props) {
  let email = props.email
  let email2 = props.email2
  let fName = props.fName
  let lName = props.lName
  let userName = props.userName
  let password = props.password
  let password2 = props.password2

  const history = useHistory()
  
  function handleRegister(evt) {
    console.log('handleRegister is running');
    evt.preventDefault();
    
    const payload = {
      email: email,
      email2: email2,
      password: password,
      password2: password2,
      userName: userName,
      fName: fName,
      lName: lName
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers:{
        'Content-Type': 'application/json'
      }
    }

    fetch('/api/new-user', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data === 'good registaration') {
        props.setCurrentUser(userName)
        localStorage.setItem('currentUser', JSON.stringify(userName));
        props.setShowAlert(true)
        props.setAlertText('Account creation successfully, logged in.')
        props.setAlertType('success')
        props.setAlertButtonType('outline-success')
        history.push('/')
      } else if(data === 'email in system') {
        props.setShowAlert(True)
        props.setAlertText('That email is already in the system. \n Please either log in \n or use a different email.')
        props.setAlertType('warning')
        props.setAlertButtonType('ouline-warning')
      } else if(data === 'email mismatch') {
        props.setShowAlert(True)
        props.setAlertText("Emails don't match, please try again")
        props.setAlertType('warning')
        props.setAlertButtonType('ouline-warning')
      } else if(data === 'password mismatch') {
        props.setShowAlert(True)
        props.setAlertText("Emails don't match, please try again")
        props.setAlertType('warning')
        props.setAlertButtonType('ouline-warning')
      }
    })
  }

    function handlePassword2Change(evt) {
      evt.preventDefault()
      props.setPassword2(evt.target.value)
      console.log(evt.target.value)
    }

    function handlePasswordChange(evt) {
      evt.preventDefault()
      props.setPassword(evt.target.value)
      console.log(evt.target.value)
    }

    function handleLNameChange(evt) {
      evt.preventDefault()
      props.setLName(evt.target.value)
      console.log(evt.target.value)
    }
    
    function handleFNameChange(evt) {
      evt.preventDefault()
      props.setFName(evt.target.value)
      console.log(evt.target.value)
    }

    function handleUserNameChange(evt) {
      evt.preventDefault()
      props.setUserName(evt.target.value)
      console.log(evt.target.value)
    }

    function handleEmailChange(evt) {
      evt.preventDefault()
      props.setEmail(evt.target.value)
      console.log(evt.target.value)
    }

    function handleEmail2Change(evt) {
      evt.preventDefault()
      props.setEmail2(evt.target.value)
      console.log(evt.target.value)
    }

    

  return (
    <div className="base">
      <Router>
        <div>
          <nav>
            <Form onSubmit={handleRegister}>
              <Form.Group 
              controlId="formBasicEmail">
                <Form.Control className="text-entry" type="email" name="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail2">
                <Form.Control className="text-entry" type="email" name="email2" placeholder="Retype email" value={email2} onChange={handleEmail2Change} />
              </Form.Group>
              <Form.Group controlId="formBasicUserName">
                <Form.Control className="text-entry" name="userName" placeholder="Desired user name" value={userName} onChange={handleUserNameChange} />
              </Form.Group>
              <Form.Group controlId="formBasicFName">
                <Form.Control className="text-entry" type="string" name="fName" placeholder="First name" value={fName} onChange={handleFNameChange} />
              </Form.Group>
              <Form.Group controlId="formBasicLName">
                <Form.Control className="text-entry" type="string" name="lName" placeholder="Last name" value={lName} onChange={handleLNameChange} />
              </Form.Group>
              <Form.Group className="text-entry" controlId="formBasicPassword">
                <Form.Control type="password" name="password"  placeholder="Password" value={password} onChange={handlePasswordChange}></Form.Control>
              </Form.Group>
              <Form.Group className="text-entry" controlId="formBasicPassword2">
                <Form.Control type="password" name="password2"  placeholder="Retype Password" value={password2} onChange={handlePassword2Change}></Form.Control>
              </Form.Group>
              <Button className="button" varient="Primary" type="submit">
                Register
              </Button>
            </Form>
          </nav>
        </div>
      </Router>
    </div>
  )
}

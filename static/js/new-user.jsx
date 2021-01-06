function CreateUser(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email2, setEmail2] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [fName, setFName] = React.useState('');
  const [lName, setLName] = React.useState('');

  const history = useHistory()
  
  function handleRegister(evt) {
    console.log('handleRegister is running');
    evt.preventDefault();
    
    const payload = {
      email: email,
      email2: email2,
      passHash: password,
      passHash2: password2,
      userName: userName,
      fName: fName,
      lName: lName
    }

    console.log(payload)
    console.log(JSON.stringify(payload))
  

    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    console.log(payload)
    fetch('/api/new-user', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data === 'good registaration') {
        props.setShowAlert(true)
        props.setAlertText('Account created successfully, please log in')
        props.setAlertType('success')
        props.setAlertButtonType('outline-success')
        history.push('/login')
      } else if (data === 'email in system') {        
        props.setShowAlert(true)
        props.setAlertText('Email is already in use')
        props.setAlertType('danger')
        props.setAlertButtonType('outline-danger')
      } else if (data === 'email mismatch') {
        props.setShowAlert(true)
        props.setAlertText('Emails do not match')
        props.setAlertType('danger')
        props.setAlertButtonType('outline-danger')
      } else if (data === 'password mismatch') {
        props.setShowAlert(true)
        props.setAlertText('Passwords do not match')
        props.setAlertType('danger')
        props.setAlertButtonType('outline-danger')
      }
    }).catch(error => console.log('error in account creation', error))
  }

  function handleEmailChange(evt) 
  {
    evt.preventDefault()
    console.log(evt.target.value)
    setEmail(evt.target.value)
  }

  function handleEmail2Change(evt) 
  {
    evt.preventDefault()
    console.log(evt.target.value)
    setEmail2(evt.target.value)
  }

  function handleUserNameChange(evt)
  {
    evt.preventDefault()
    console.log(evt.target.Value)
    setUserName(evt.target.Value)
    console.log(userName)
  }

  function handleFNameChange(evt)
  {
    evt.preventDefault()
    console.log(evt.target.Value)
    setFName(evt.target.Value)
  }

  function handleLNameChange(evt)
  {
    evt.preventDefault()
    console.log(evt.target.Value)
    setLName(evt.target.Value)
  }

  function handlePasswordChange(evt) 
  {
    evt.preventDefault()
    console.log(evt.target.value)
    setPassword(evt.target.value)
  }

  function handlePassword2Change(evt) 
  {
    evt.preventDefault()
    console.log(evt.target.value)
    setPassword2(evt.target.value)
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

function LogIn(props) { 
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory()
  const [showLogin, setShowLogin] = React.useState(true);
  
  function handleLogin(evt) {
    console.log('handleLogin is running');
    evt.preventDefault();

    const payload = { 
      userName: userName,
      password: password
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: 
      {
        'Content-Type': 'application/json'
      }
    }

    fetch('/api/login', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data === 'Good login') {
        setShowLogin(false)
        props.setCurrentUser(userName)
        localStorage.setItem('currentUser', JSON.stringify(userName));
        props.setShowAlert(true)
        props.setAlertText('Logged in successfully')
        props.setAlertType('success')
        props.setAlertButtonType('outline-success')
        history.push('/')
      } else if (data === 'bad email') {
        props.setShowAlert(true)
        props.setAlertText('user name is not in our system')
        props.setAlertType('danger')
        props.setAlertButtonType('outline-danger')
      } else {
        props.setShowAlert(true)
        props.setAlertText('Email and password do not match')
        props.setAlertType('danger')
        props.setAlertButtonType('outline-danger')
      }
    }).catch(error => console.log('error in login', error))
  }

  function handleUserNameChange(evt) 
  {
    console.log(evt.target.value)
    setUserName(evt.target.value)
  }

  function handlePasswordChange(evt) 
  {
    setPassword(evt.target.value)
  }
  return (
    <div className="base">
      <Router>
        <div>
          <nav>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicUserName">
                <Form.Control className="text-entry" type="text" name="text" placeholder="Enter user name" value={userName} onChange={handleUserNameChange} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control className="text-entry" type="password" name="password"  placeholder="Password" value={password} onChange={handlePasswordChange}></Form.Control>
              </Form.Group>
            {(!showLogin ? 
              <Button className="button" varient="primary" type="submit">
                Log out and log in as a different user
              </Button>
            :
              <Button className="button" varient="Primary" type="submit">
                Login
              </Button>
            )}
            </Form>
            <Link className="clickylink" to="/new-user"> Click here to create a new account. </Link>
          </nav>
        </div>
      </Router>
    </div>
  )
}

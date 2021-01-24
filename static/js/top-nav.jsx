function TopNav(props){
  const history = useHistory()

  function handleLoginRedirect(evt){
    evt.preventDefault()
    history.push('/login');
  }

  function handleCreateUserRedirect(evt){
    evt.preventDefault()
    history.push('/new-user');
  }

  function handleLogout(evt){
    evt.preventDefault()
    props.setCurrentUser('')
    history.push('/')
  }

  function handleCharacterChangeRedirect(evt){
    evt.preventDefault()
    history.push('/')
  }

  function handleProfileRedirect(evt) {
    evt.preventDefault()
    history.push('/profile')
  }

  function handleHomeRedirect(evt) {
    evt.preventDefault()
    history.push("/")
  }

  function handleLogOut(evt) {
    evt.preventDefault()
    props.setShowAlert(true)
    props.setAlertText('Logged out successfully')
    props.setAlertType('warning')
    props.setAlertButtonType('outline-warning')
    localStorage.removeItem('currentUser')
    props.setCurrentUser(false)
    history.push('/');
  }

  return(
    <div>
        {props.currentUser ?
      <Navbar className="topNav" expand="lg">
        <div className="row">
          <div className="col-3 order-1">
            <Link className="clickylink" onClick={handleLogOut}>
              log out
            </Link>
            <Link className="clickylink" onClick={handleCharacterChangeRedirect}>
              Change Character
            </Link>
            <Link className="clickylink" onClick={handleCreateUserRedirect}>
              Create User
            </Link>
          </div>
          <div className="col-6  order-2">
            <div id="logoheader">Pathfinder</div>
            <div id="logo-text">Character Sheet</div>
          </div>
          <div className="col-3 order-4">
            <div>
              {props.player}
            </div>
            <Link className="clickylink" onClick={handleHomeRedirect}>
              Home
            </Link>
            <Link className="clickylink" onClick={handleProfileRedirect}>
              Profile
            </Link>
          </div> 
        </div>
      </Navbar>
        :  
      <Navbar className="topNav" expand="lg">
        <div className="row">
          <div className="col-3 order-1">
            <Link className="clickylink" onClick={handleLoginRedirect}>
              log in
            </Link>
            <Link className="clickylink" onClick={handleCharacterChangeRedirect}>
              Change Character
            </Link>
            <Link className="clickylink" onClick={handleCreateUserRedirect}>
              Create User
            </Link>
          </div>
          <div className="col-6  order-2">
            <div id="logoheader">Pathfinder</div>
            <div id="logo-text">Character Sheet</div>
          </div>
          <div className="col-3 order-3">
            <Link className="clickylink" onClick={handleHomeRedirect}>
              Home
            </Link>
          </div>
        </div>
      </Navbar>
      }
    </div>
);
}

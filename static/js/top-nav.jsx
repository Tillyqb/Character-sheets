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
  return(
    <div>
        {props.currentUser ?
      <Navbar className="topNav" expand="lg">
        <div className="row">
          <div className="col-1 order-1">
            <Button className="button" onClick={handleLoginRedirect}>
              log in
            </Button>
            <Button className="button" onClick={handleLogout}>
              log out
            </Button>
            <Button className="button" onClick={handleCharacterChangeRedirect}>
              Change Character
            </Button>
            <Button className="button" onClick={handleCreateUserRedirect}>
              Create User
            </Button>
          </div>
          <div className="col-3  order-2">
            <div id="logoheader">Pathfinder</div>
            <div id="logo-text">Character Sheet</div>
          </div>
          <div className="col-4 order-3">
            <div>
              {props.characterName}{props.alignment}
            </div>
            <div>
              {props.level}
            </div>
            <div>
              {props.race}{props.size}{props.gender}{props.age}
            </div>
          </div>
          <div className="col-4 order-4">
            <div>
              {props.player}
            </div>
            <div>
              {props.deity}{props.homeland}
            </div>
            <div>
              {props.height}{props.weight}{props.hair}{props.eyes}
            </div>
          </div> 
        </div>
      </Navbar>
        :  <Navbar className="topNav" expand="lg">
        <div className="row">
          <div className="col-1 order-1">
            <Button className="button" onClick={handleLoginRedirect}>
              log in
            </Button>
            <Button className="button" onClick={handleLogout}>
              log out
            </Button>
            <Button className="button" onClick={handleCharacterChangeRedirect}>
              Change Character
            </Button>
            <Button className="button" onClick={handleCreateUserRedirect}>
              Create User
            </Button>
          </div>
          <div className="col-3  order-2">
            <div id="logoheader">Pathfinder</div>
            <div id="logo-text">Character Sheet</div>
          </div>
        </div>
      </Navbar>
      }
    </div>
);
}

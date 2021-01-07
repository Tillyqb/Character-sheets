function Homepage() {
  return <div></div>
}

function App() {
  const [player, setPlayer] = React.useState('')
  const [characterName, setCharacterName] = React.useState('')
  const [alignment, setAlignment] = React.useState('')
  const [level, setLevel] = React.useState(0)
  const [race, setRace] = React.useState('')
  const [size, setSize] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [age, setAge] = React.useState(0)
  const [deity, setDeity] = React.useState('')
  const [homeland, setHomeland] = React.useState('')
  const [height, setHeight] = React.useState('')
  const [weight, setWeight] = React.useState('')
  const [hair, setHair] = React.useState('')
  const [eyes, setEyes] = React.useState('')
  const [showAlert, setShowAlert] = React.useState(false)
  const [alertText, setAlertText] = React.useState('')
  const [currentUser, setCurrentUser] = React.useState()
  const [alertType, setAlertType] = React.useState('')
  const [alertButtonType, setAlertButtonType] = React.useState('')
  const history = useHistory()

  React.useEffect(() => {
    let userFromStorage = localStorage.getItem('currentUser')
    if (userFromStorage) {
      setCurrentUser(JSON.parse(userFromStorage))
    }
  },[])

  function handleLogOut(evt) {
    evt.preventDefault()
    setShowAlert(true)
    setAlertText('Logged out successfully')
    setAlertType('warning')
    setAlertButtonType('outline-warning')
    localStorage.removeItem('currentUser')
    setCurrentUser(false)
    history.push('/');
  }

  function handleAlertDismissal(evt) {
    evt.preventDefault()
    setShowAlert(false)
  }

  return (      
    <div>
      
      <TopNav currentUser={currentUser} setCurrentUser={setCurrentUser} setAlertText={setAlertText} setAlertType={setAlertType} setAlertButtonType={setAlertButtonType} setShowAlert={setShowAlert}handleLogOut={handleLogOut} characterName={characterName} setCharacterName={setCharacterName} alignment={alignment} setAlignment={setAlignment} level={level} setLevel={setLevel} race={race} setRace={setRace} size={size} setSize={setSize} gender={gender} setGender={setGender} age={age} setAge={setAge} player={currentUser} deity={deity} setDeity={setDeity} homeland={homeland} setHomeland={setHomeland} height={height} setHeight={setHeight} weight={weight} setWeight={setWeight} hair={hair} setHair={setHair} eyes={eyes} setEyes={setEyes} />
      <div id="leftMargin">
        <Alert id="alert" role="alert" variant={alertType} show={showAlert}>
          <Alert.Heading>{alertText}</Alert.Heading>
          <Button onClick={handleAlertDismissal} variant={alertButtonType}>
            Dismiss
          </Button>
        </Alert>
      </div>
      <Switch>
        <Route path="/login">
          <LogIn currentUser={currentUser} setCurrentUser={setCurrentUser} setAlertText={setAlertText} setAlertType={setAlertType} setAlertButtonType={setAlertButtonType} setShowAlert={setShowAlert} />
        </Route>
        <Route path="/new-user">
          <CreateUser currentUser={currentUser} setCurrentUser={setCurrentUser} setAlertText={setAlertText} setAlertType={setAlertType} setAlertButtonType={setAlertButtonType} setShowAlert={setShowAlert} />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))
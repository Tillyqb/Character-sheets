function Homepage() {
  return <div></div>
}

function App() {
  const [age, setAge] = React.useState(0)
  const [alertButtonType, setAlertButtonType] = React.useState('');
  const [alertText, setAlertText] = React.useState('');
  const [alertType, setAlertType] = React.useState('');
  const [alignment, setAlignment] = React.useState('');
  const [campaign, setCampaign] = React.useState('');
  const [campaignList, setCampaignList] = React.useState('');
  const [characterName, setCharacterName] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState();
  const [deity, setDeity] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [email2, setEmail2] = React.useState('');
  const [eyes, setEyes] = React.useState('');
  const [fName, setFName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [hair, setHair] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [homeland, setHomeland] = React.useState('');
  const [level, setLevel] = React.useState(0);
  const [lName, setLName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [race, setRace] = React.useState('');
  const [selectedCampaign, setSelectedCampaign] = React.useState('')
  const [showAlert, setShowAlert] = React.useState(false);
  const [size, setSize] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  
  
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
          <CreateUser currentUser={currentUser} setCurrentUser={setCurrentUser} setAlertText={setAlertText} setAlertType={setAlertType} setAlertButtonType={setAlertButtonType} setShowAlert={setShowAlert} email={email} setEmail={setEmail} email2={email2} setEmail2={setEmail2} password={password} setPassword={setPassword} password2={password2} setPassword2={setPassword2} userName={userName} setUserName={setUserName} fName={fName} setFName={setFName} lName={lName} setLName={setLName} />
        </Route>
        <Route path="/profile">
          <UserProfile characterName={characterName} setCharacterName={setCharacterName} userName={userName} campaignList={campaignList} setCampaignList={setCampaignList} />
        </Route>
        <Route path="/create-character">
          <CreateCharacter characterName={characterName} setCharacterName={setCharacterName} campaign={campaign} setCampaign={setCampaign} campaignList={campaignList} setCampaignList={setCampaignList} selectedCampaign={selectedCampaign} setSelectedCampaign={setSelectedCampaign} />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))
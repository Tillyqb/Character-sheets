function UserProfile (props) {

  const [characterList, setCharacterList] = React.useState([]);
  const history = useHistory()

  function handleCreatCharacterRedirect(evt) {
    evt.preventDefault()

    const payload = {}

    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('/api/get-campaign-list', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      props.setCampaignList(data)
      history.push('/create-character')
    })  
  }

  function handleCharacterSelect(evt){
    props.setCurrentCharacter(evt.target.value)
  }

  function handleCharacterListGenderation() {
    const payload2 = {
      user:currentUser
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(payload2),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    
    fetch('/api/get-character-list', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setCharacterList(data)
      console.log(characterList)
    })
  }
  handleCharacterListGenderation

  return (
    <div>
      <div className="row">
        <div className="col-4 order-1">
          Welcome {props.userName}
        </div>
        <div className="col-4 order-2">
          <Link className="clickylink" onClick={handleCreatCharacterRedirect}>
            Create Character
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-4 order-1">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown">
              Select Character
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {props.characterList.map (character => (
              <Dropdown.Item onSelect={handleCharacterSelect} value={character}>
                {character}
              </Dropdown.Item>
            ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

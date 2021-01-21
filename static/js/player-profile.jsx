function UserProfile (props) {
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
        {/* <div className="col-4 order-3">
          <Dropdown>
            <Dropdown.Toggle variant="Dark">
              <Dropdown.Menu>
                {characters.map ((charcter) => (
                  <Dropown.Item
                    as={ItemGroup}
                    key={character}
                    title={character.name}
                    >
                      {character.name}
                    </Dropown.Item>
                  )
                )}
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
        </div> */}
      </div>
    </div>
  )
}
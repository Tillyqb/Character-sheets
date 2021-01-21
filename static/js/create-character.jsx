function CreateCharacter(props) {
  const history = useHistory()

  function handleCreateCharacter(evt){
    evt.preventDefault()
  }

  function handleCampaignChange(evt) {
    props.setCampaign(evt.target.value)
  }

  function handleCharacterNameChange(evt) {
    evt.preventDefault()
    props.setCharacterName(evt.target.value)
    console.log(evt.target.value)
  }

  return (
    <div>
      <Form onSubmit={handleCreateCharacter}>
        <div classname="row">
          <div className="col-4 order-1">
            <DropdownButton varient="Secondary" value="campaign" controlId="dropdownCampaign" title={props.selectedCampaign ? props.selectedCampaign : "Select campaign"}>
              {props.campaignList.map(
                (campaign) => (
                  <Dropdown.Item eventKey={campaign} onSelect={handleCampaignChange}>{campaign}</Dropdown.Item>
                )
              )} 
            </DropdownButton>
            <Form.Group controlId="formBasicCharacterName">
              <Form.Control className="text-entry" type="text" name="characterName" placeholder="Character Name" onChange={handleCharacterNameChange} />
            </Form.Group>
            <Button className="button" varient="Primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}
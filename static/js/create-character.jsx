function CreateCharacter(props) {
  const history = useHistory()

  function handleCreateCharacter(evt){
    evt.preventDefault()
  }

  function handleCampaignChange(evt) {
    evt.preventDefault()
    props.setCampaign(evt.target.value)
    console.log(evt.target.value)
  }

  function handleCharacterNameChange(evt) {
    evt.preventDefault()
    props.setCharacterName(evt.target.value)
    console.log(evt.target.value)
  }
  function handleStrengthChange(evt) {
    evt.preventDefault()
    props.set(evt.target.value)
    console.log(evt.target.value)
  }

  function handleDexChange(evt) {
    evt.preventDefault()
    props.seDex(evt.target.value)
    console.log(evt.target.value)
  }

  function handleConChange(evt) {
    evt.preventDefault()
    props.setCon(evt.target.value)
    console.log(evt.target.value)
  }

  function handleIntChange(evt) {
    evt.preventDefault()
    props.setInt(evt.target.value)
    console.log(evt.target.value)
  }

  function handleWisChange(evt) {
    evt.preventDefault()
    props.setWis(evt.target.value)
    console.log(evt.target.value)
  }

  function handleChaChange(evt) {
    evt.preventDefault()
    props.setCha(evt.target.value)
    console.log(evt.target.value)
  }

  function handleAcrobaticsChange(evt) {
    evt.preventDefault()
    props.setAcrobatics(evt.target.value)
    console.log(evt.target.value)
  }

  return (
    <div>
      <Form onSubmit={handleCreateCharacter}>
        <div classname="row">
          <Form.Group controlId="formBasicCharacterName">
            <div className="col-4 order-1">
              <Form.Control className="text-entry" type="text" name="characterName" placeholder="Character Name" onChange={handleCharacterNameChange} />
              <Form.Control className="text-entry" type="text" name="campaign" placeholder="Campaign" onChange={handleCampaignChange} />
              <Form.Control className="text-entry" type="text" name="strength" placeholder="Strength" onChange={handleStrengthChange} />
              <Form.Control className="text-entry" type="text" name="dex" placeholder="Dexterity" onChange={handleDexChange} />
              <Form.Control className="text-entry" type="text" name="con" placeholder="Constitution" onChange={handleConChange} />
              <Form.Control className="text-entry" type="text" name="int" placeholder="Intelligence" onChange={handleIntChange} />
              <Form.Control className="text-entry" type="text" name="wis" placeholder="Wisdom" onChange={handleWisChange} />
              <Form.Control className="text-entry" type="text" name="cha" placeholder="Charisma" onChange={handleChaChange} />
            </div>
            <div className="col-4 order-2">
              <Form.Control className="text-entry" type="text" name="acrobatics" placeholder="Acrobatics" onChange={handleAcrobaticsChange} />
            </div>
          </Form.Group>
        </div>
        <Button className="button" varient="Primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
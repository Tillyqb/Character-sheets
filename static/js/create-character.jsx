function CreateCharacter(props) {
  const history = useHistory()

  function handleCreateCharacter(evt){
    evt.preventDefault()
  }

//TODO: create dropdown for cmpaign
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

  function handleRaceChange(evt) {
    evt.preventDefault()
    props.setRace(evt.target.value)
    console.log(evt.target.value)
  }

  function handleGenderChange(evt) {
    evt.preventDefault()
    props.setGender(evt.target.value)
    console.log(evt.target.value)
  }
//TODO: create dropdown for size
  function handleSizeChange(evt) {
    evt.preventDefault()
    props.setSize(evt.target.value)
    console.log(evt.target.value)
  }

  function handleHeightChange(evt) {
    evt.preventDefault()
    props.setHeight(evt.target.value)
    console.log(evt.target.value)
  }

  function handleWeightChange(evt) {
    evt.preventDefault()
    props.setWeight(evt.target.value)
    console.log(evt.target.value)
  }

  function handleAgeChange(evt) {
    evt.preventDefault()
    props.setAge(evt.target.value)
    console.log(evt.target.value)
  }

//TODO: Create dropdowns for alignment
  function handleAlignmentChange(evt) {
    evt.preventDefault()
    props.setAlignment(evt.target.value)
    console.log(evt.target.value)
  }

  function handleDeityuChange(evt) {
    evt.preventDefault()
    props.setDeity(evt.target.value)
    console.log(evt.target.value)
  }

  function handleOccupationChange(evt) {
    evt.preventDefault()
    props.setOccupation(evt.target.value)
    console.log(evt.target.value)
  }

//TODO: Accomidate additional languages.

  return (
    <div>
      <Form onSubmit={handleCreateCharacter} expand="lg">
        <div classname="row">
          <div className="col-4 order-1">
            <Form.Group controlId="formBasicCharacterName">
              <Form.Control className="text-entry" type="text" name="characterName" placeholder="Character Name" onChange={handleCharacterNameChange} />
              <Form.Control className="text-entry" type="text" name="race" placeholder="Race" onChange={handleRaceChange} />
              <Form.Control className="text-entry" type="text" name="gender" placeholder="Gender" onChange={handleGenderChange} />
              <Form.Control className="text-entry" type="text" name="size" placeholder="Size" onChange={handleSizeChange} />
              <Form.Control className="text-entry" type="text" name="height" placeholder="Height" onChange={handleHeightChange} />
              <Form.Control className="text-entry" type="text" name="weight" placeholder="weight" onChange={handleWeightChange} />
              <Form.Control className="text-entry" type="text" name="age" placeholder="Age" onChange={handleAgeChange} />
              <Form.Control className="text-entry" type="text" name="alignment" placeholder="Alignment" onChange={handleAlignmentChange} />
              <Form.Control className="text-entry" type="text" name="diety" placeholder="diety" onChange={handleDeityuChange} />
              <Form.control className="text-entry" type="text" name="ocupation" placeholder="Background Occupation" onChange={handleOccupationChange} />
              <Form.control className="text-entry" type="text" name="language" placeholder="Language" onChange={handleLanguageChange} />
              <Form.Control className="text-entry" type="text" name="campaign" placeholder="Campaign" onChange={handleCampaignChange} />
              <Form.Control className="text-entry" type="text" name="strength" placeholder="Strength" onChange={handleStrengthChange} />
              <Form.Control className="text-entry" type="text" name="dex" placeholder="Dexterity" onChange={handleDexChange} />
              <Form.Control className="text-entry" type="text" name="con" placeholder="Constitution" onChange={handleConChange} />
              <Form.Control className="text-entry" type="text" name="int" placeholder="Intelligence" onChange={handleIntChange} />
              <Form.Control className="text-entry" type="text" name="wis" placeholder="Wisdom" onChange={handleWisChange} />
              <Form.Control className="text-entry" type="text" name="cha" placeholder="Charisma" onChange={handleChaChange} />
            </Form.Group>  
          </div>
          <div className="col-4 order-2">
            <Form.Group controlId="formBasicCharacterName">
              <Form.Control className="text-entry" type="text" name="acrobatics" placeholder="Acrobatics" onChange= {handleAcrobaticsChange} />
            </Form.Group>
          </div>
        </div>
        <Button className="button" varient="Primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
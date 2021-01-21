function CreateCharacter(props) {
  const history = useHistory()

  function handleCreateCharacter(evt){
    evt.preventDefault()

  }

  function handleCharacterNameChange(evt){
    evt.preventDefault()
    props.setCharacterName(evt.target.value)
    console.log(evt.target.value)
  }

  return (
    <div>
      <Form onSubmit={handleCreateCharacter}>
        <div classname="row">
          <div className="col-4 order-1">
            <Form.Group className="text-entry" type="text" name="characterName" placeholder="Character Name" onChange={handleCharacterNameChange} />
            <Button className="button" varient="Primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}
import {useState} from 'react'

import {v4 as uuid4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesBgContainer,
  MainHeading,
  NotesInputContainer,
  TitleInput,
  TextArea,
  TextContainer,
  AddButton,
  NotesItemContainer,
  NoNotesContainer,
  NoNotesImage,
  NoNotesHeading,
  Paragraph,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [notesItemsList, setNotesItemsList] = useState([])

  const object = {
    id: uuid4(),
    title,
    description,
  }

  const onChangeText = event => {
    setTitle(event.target.value)
  }

  const onChangeDescription = event => {
    setDescription(event.target.value)
  }

  const addButton = event => {
    event.preventDefault()
    setNotesItemsList(prevState => [...prevState, object])
    setTitle('')
    setDescription('')
  }

  return (
    <NotesBgContainer>
      <MainHeading>Notes</MainHeading>
      <NotesInputContainer onSubmit={addButton}>
        <TextContainer>
          <TitleInput
            type="text"
            placeholder="Title"
            onChange={onChangeText}
            value={title}
          />
        </TextContainer>
        <TextArea
          type="textarea"
          rows={10}
          placeholder="Take a Note..."
          onChange={onChangeDescription}
          value={description}
        />
        <br />
        <AddButton type="submit">Add</AddButton>
      </NotesInputContainer>
      {notesItemsList.length !== 0 ? (
        <NotesItemContainer>
          {notesItemsList.map(eachItem => (
            <NoteItem key={eachItem.id} notesItem={eachItem} />
          ))}
        </NotesItemContainer>
      ) : (
        <NoNotesContainer>
          <NoNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <Paragraph>Notes you add will appear here</Paragraph>
        </NoNotesContainer>
      )}
    </NotesBgContainer>
  )
}

export default Notes

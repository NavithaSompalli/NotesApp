import styled from 'styled-components'

export const NotesBgContainer = styled.div`
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
`

export const NotesInputContainer = styled.form`
  box-shadow: 2px 2px 5px 5px #d8d8d8;
  height: 250px;
  width: 600px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const TextContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`

export const TitleInput = styled.input`
  height: 40px;
  width: 400px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #475569;
  border: none;
  outline: none;
  padding: 10px;
`

export const TextArea = styled.textarea`
  height: 40px;
  width: 400px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #475569;
  border: none;
  outline: none;
  padding: 10px;
`

export const AddButton = styled.button`
  height: 40px;
  width: 100px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #d8d8d8;
  border: none;
  outline: none;
  padding: 10px;
  background-color: #4c63b6;
  border-radius: 5px;
  margin-top: 5px;
  align-self: flex-end;
  margin-right: 10px;
`
export const NotesItemContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: row;
  flex-wrap: wrap;
  width: 1000px;
`
export const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 250px;
  width: 600px;
`
export const NoNotesImage = styled.img`
  height: 80xp;
  width: 80px;
`
export const NoNotesHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: #1e293b;
  font-size: 20px;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  color: #475569;
`

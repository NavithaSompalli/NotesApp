import {NoteItemElement, Title, Descriptions} from './styledComponents'

const NoteItem = props => {
  const {notesItem} = props

  const {title, description} = notesItem

  return (
    <NoteItemElement>
      <Title>{title}</Title>
      <Descriptions>{description}</Descriptions>
    </NoteItemElement>
  )
}
export default NoteItem

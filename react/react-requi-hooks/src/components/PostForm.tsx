import { useState, ChangeEvent} from 'react'
import style from '../App.module.css'

type Props = {
    onAdd: (title: string, body: string) => void
}
export const PostForm = ({ onAdd } : Props) => {
    const [addTitleText, setAddTitleText] = useState('')
    const [addBodyText, setBodyText] = useState('')

    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value)
    }
    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBodyText(e.target.value)
    }

    const handleAddClick = () => {
        if(addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText)
        } else {
            alert('Preencha os campos')
        }
    }

    return (
        <fieldset className={style.formulario}>
            <legend>Adicionar novo Post</legend>
            <input type="text" 
              placeholder="Digite um titulo" 
              value={addTitleText} 
              onChange={handleAddTitleChange} />
            <textarea value={addBodyText} onChange={handleAddBodyChange} placeholder="Digite a mensagem"></textarea>
            <button onClick={handleAddClick}>Adicionar</button>
        </fieldset>
    )
}
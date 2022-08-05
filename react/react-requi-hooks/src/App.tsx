import {  ChangeEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import style from './App.module.css'
import { Movie } from './types/Movie'
import { Post } from './types/Post'
import { PostForm } from './components/PostForm'
import { PostItem } from './components/PostItem'
import { MovieItem } from './components/MovieItem'

import { useContagem } from './reducers/contagem'
import { usePeopleList } from './reducers/peopleList'

import { api } from './api'

function App() {
  
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoadind] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [nameInput, setNameInput] = useState('')

  useEffect( () => {
    loadPosts()
    loadMovies()
  }, [])

  const [contagem, contagemDispatch] = useContagem()
  const [list, dispatch] = usePeopleList()


  const handleAddPost = async(title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1)
    if(json.id) {
      alert('Post adicionado com sucesso!')
    } else {
      alert('Ocorreu algum erro')
    }
  }
  const loadMovies = async () => {
    try {
      setLoadind(true)
      let json = await api.getAllMovies()
      setLoadind(false)
      setMovies(json)
    } catch(e) {
      setLoadind(false)
      setMovies([])
      console.error(e)
    }
  }

  const loadPosts = async() => {
    setLoadind(true)
    let json = await api.getAllPosts()
    setPosts(json)
    setLoadind(false)
  }

  const handleAbbButton = () => {
    if(nameInput){
      dispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      })
      setNameInput('')
    }
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }
  const deletePerson = (id: string) => {
    dispatch({
      type: 'DEL',
      payload: { id }
    })
  }
  const handleOrderButton = () => {
    dispatch({
      type: 'ORDER'
    })
  }

  return (
    <div>
      <input type="text" value={nameInput} onChange={handleInputChange}/>
      <button onClick={handleAbbButton}>Adicionar</button>
      <hr />
      <button onClick={handleOrderButton}>Ordenar</button> <br />
      Lista de pessoas:
      <ul>
      {list.map((item, index) => (
        <li key={index}>{item.name} <button onClick={() => deletePerson(item.id) }>Deletar</button></li>
      ))}
      </ul>
      <hr />
      Contagem: {contagem.count}
      <hr />
      <button onClick={() => contagemDispatch({ type: 'ADD'}) }>Adicionar</button>
      <button onClick={() => contagemDispatch({ type: 'DEL'}) }>Remover</button>
      <button onClick={() => contagemDispatch({ type: 'RESET'}) }>Resetar</button>
      {loading && <div>Carregando...</div> }
      {!loading  &&
        <PostForm onAdd={handleAddPost} />
      }
      {!loading  && posts.length > 0 && 
        <>
          <div>Total de Posts: {posts.length} </div>
          <div>
              {posts.map((item, index) => (
                <PostItem data={item} key={index}/>
              ))}
            </div>
        </>  
      }
      
      {!loading  && movies.length > 0 &&
        <>
          <div>Total de filmes: {movies.length}</div>
          <div className={style.movies}>
            {movies.map((item, index) => (
              < MovieItem data ={item} key= {index}/>
            ))}
          </div>
        </>
      }
      {!loading && movies.length == 0 && 
        <div>Tente mais tarde novamente.</div>
      }

    </div>
  )
}

export default App



import { useState, useEffect } from 'react'
import s from './App.module.css'
import { api } from './api/api'
import { Card } from './components/card'
import logo from '../public/logo.png'

function App() {
  const [data, setData] = useState([])
  const [searchPage, setsearchPage] = useState("")
 

  useEffect(() =>{
    api.get(`/characters/?page=${searchPage}`).then((response) => {
      setData(response.data.items)
      console.log(response.data.items)
    }).catch((error) => {
      console.error("ERRO AO PROCURAR API", error)
    })
  }, [ searchPage])


  return(
    <>

    <img src={logo} className={s.logo}/>
    <main>
      <div className={s.input}>
      <input type="text" value={searchPage} onChange={(e) => setsearchPage(e.target.value)} placeholder={'1/6'}/>
      </div>
      <div className={s.wrapCard}>
        {data.map ((item, index) => {
          return(
            <div key={index}>
              <Card image={item.image} name={item.name} ki={item.ki}/>
            </div>
          )
        }

        )}

      </div>
    </main>
    </>
  )
  }


export default App
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import ImageInfo from './components/ImageInfo'
import Loading from './components/Loading'

function App() {

  //primer paso-- hacer una peticion asincronica con axios
  //segundo paso-- recibir la url con la key en usefetch desde
  //desde la importacion
  /**
   * tercer paso-- hacemos un useEffect para aquirir la informacion y que no haya bucles infintos
   * e integramos el segundo parametro que es donde tenemos resulta la url
   * que seria getApi, hacemos un componente y recibimos la informacion, y la enviamos 
   * como una prop al componente creado
   * 
   * cuarto paso-- hacemosun form para poder hacer la variacion de las fechas
   * quinto paso
   * 
   */
  

  const [inputValue, setInputValue] = useState('')
  const apiKey = 'zGGLYk9SdWXfqzhK4wS6j1Oxw93Xs5JbmLUB7GTi'
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inputValue}`
  const [infoApi, getApi, hasError, isloading] = useFetch(url)



  useEffect(() => {
    getApi()
  },[inputValue])

  console.log(infoApi)

  //funcionalidad del boton
  const inputDate = useRef()

  const handleDate = e => {
    e.preventDefault()
    setInputValue(inputDate.current.value.trim())
  }

  return (
    <div>
      {
        isloading ? (
          <Loading/>
        ) 
        : (
          <>
        <h2>NASA App</h2>
        <h1>
        BUSCA LA IMAGEN ASTRONOMICA DEL DIA
        </h1>
          <form onSubmit={handleDate}>
          <h3>ingresa una fecha</h3>
            <input ref={inputDate} className='input__search' placeholder="Search" type="text" />
          <button>
            <span class="transition"></span>
            <span class="gradient"></span>
            <span class="label">Search</span>
          </button>
          </form>
          {hasError 
          ? <h2>🚨Enter The Date in The Format Of YY-MM-DD <br /> <span>❌Star Date: 1995-07-10</span></h2>
            : (<ImageInfo
            infoApi={infoApi}
            />
          )}
          </>
        )}
    </div>
  )
}

export default App

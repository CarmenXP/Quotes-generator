import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import colors from './assets/components/utils/colors'
import QuoteBox from './assets/components/QuoteBox'
import Quotes from './assets/components/Quotes'

function App() {
  
  let getElement = arr =>{
    const getIndex = Math.floor(Math.random() * arr.length)
    return arr[getIndex]
  }
  let getAcolor = getElement(colors)
  let getAquote = getElement(quotes)

  const [quote, setQuote] = useState(getAquote)
  const [color, setColor] = useState(getAcolor)

  const getRandomElements =()=>{
    getAcolor = getElement(colors)
    getAquote = getElement(quotes)
    setColor(getAcolor)
    setQuote(getAquote)
  }
 
 
  return (
    <div className="App" style={{backgroundColor:color}}>
      <div className="contentQuote">
          <Quotes color ={color}/>
          <QuoteBox
            quote ={quote}
            color = {color}
            randomElements = {getRandomElements}
          />
      </div>

    </div>
  )
}

export default App

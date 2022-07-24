import React from 'react'


const QuoteBox = ({color, quote, randomElements}) => {
  return (
    <div className='box' style={{color:color}}>
      <p>{quote.quote}</p>
      <p>{quote.author}</p>
      <button onClick={randomElements} className="btnSend" style={{backgroundColor:color}}> &#62;</button>
    </div>
  )
}

export default QuoteBox
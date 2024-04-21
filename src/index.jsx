import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// importing component heading
import Heading from './Heading'
import Logic from './Logic'


ReactDOM.render(
  <div>
    <div>  
      {/* rendaring component */}
      <Heading />
    </div>
 <Logic />
  </div>
    ,
  document.getElementById('root')
)
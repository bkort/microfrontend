import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

window.renderFilters = (containerId, history) => {
  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    document.getElementById(containerId)
  )
}

window.unmountFilters = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}

import React from 'react' //core library, works with components
import ReactDOM from 'react-dom'// needs library to render to DOM
//create new compnents
//this compoent should create some HTML


const App = function () {
  return  <div>Hi!</div>
}

const App = () => {
  return <div>hello! </div>
}

// takes this component's generated HTML and puts it on the page

// when create compoennt, it makes a class of the component, think of the function app as a class 
 // this will actually makes an instance when run thru Babel
ReactDOM.render(<App />, document.querySelector('.container'))
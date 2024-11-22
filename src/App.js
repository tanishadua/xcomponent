import React from "react"
import Component from "./classComponent"
class App extends React.Component{
  render(){
    return(
      <div style={{fontFamily:"serif",marginLeft:"15px"}}>
        <Component diff={1}/>
      </div>
    )
  }
}
export default App
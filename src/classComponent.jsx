import React from "react"
class Component extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increaseCount = () => {
        this.setState((currState,currProps)=> {
         return {count : currState.count + currProps.diff}   
        })
    }
    decreaseCount = () => {
        this.setState((currState,currProps)=> {
            return {count : currState.count - currProps.diff}
        })
    }
    render(){
        return(
            <div>
                <h1>Counter App</h1>
                <p>Count: {this.state.count} </p>
                <button onClick={this.increaseCount}>Increment</button>
                <button onClick={this.decreaseCount}>Decrement</button>
            </div>
        )
    }
}
export default Component

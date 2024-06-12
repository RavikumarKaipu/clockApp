import {Component} from 'react'
import './App.css'
import Clock from './components/Clock'

class App extends Component{
  state={showClock:false,}

onToggleClick=()=>{
  this.setState(prevState=>{
    const {showClock}=this.state
    return{
      showClock:!showClock
    }
  })
}  


  render(){
    const {showClock}=this.state
    return(
      <div className='app-container'>
        <button onClick={this.onToggleClick} type='button' className='toggle-button'>{showClock?'Hide Clock':'Show Clock'}</button>
        {showClock&& <Clock/>}
      </div>
      
    )
  }
}

export default App
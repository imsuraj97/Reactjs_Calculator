import React , {Component} from 'react'
class Calculator extends Component {

    state={
      result:'0'
    }
  
    Reset(){
      this.setState({
        result:'0'
      })
    }
  
    Calculate(){
      const {result}=this.state
      this.setState({
        result:eval(result)
      })
    }
  
    changeValue(digit){
      const {result}=this.state
  this.setState({
    result:result=='0'?String(digit):result+digit
  })
    }
  
  render(){
      return (
        <div>
      
    <div>
        <button onClick={()=> this.changeValue(1)}>1</button>
        <button onClick={()=> this.changeValue(2)}>2</button>
        <button onClick={()=> this.changeValue(3)}>3</button>
        <button onClick={()=> this.changeValue('+')}>+</button>
    </div>
    <div>
        <button onClick={()=> this.changeValue(4)}>4</button>
        <button onClick={()=> this.changeValue(5)}>5</button>
        <button onClick={()=> this.changeValue(6)}>6</button>
    <   button onClick={()=> this.changeValue('-')}>-</button>
    </div>
    
    <div>
        <button onClick={()=> this.changeValue(7)}>7</button>
        <button onClick={()=> this.changeValue(8)}>8</button>
        <button onClick={()=> this.changeValue(9)}>9</button>
        <button onClick={()=> this.changeValue('*')}>*</button>
    </div>

    <div>
        <button onClick={()=> this.changeValue(0)}>0</button>
        <button onClick={()=> this.Reset()}>C</button>
        <button onClick={()=> this.changeValue('/')}>/</button>
  </div>
    
        <button  onClick={()=>this.Calculate()}>=</button>
    <input value={this.state.result}/>
      </div>
    )
  }
  }
  export default Calculator;
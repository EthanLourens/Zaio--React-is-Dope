import React from 'react';

class App extends React.Component{
  state = {
    name:''
  }
  changeName=(e)=>{
    this.setState({
      name:e.target.value
    });
  }
  render(){
    return (
      <div className="app-content" id="app">
        <form>
        <p>My name is {this.state.name}</p>
      <input type="text" onChange={this.changeName}/>
        </form>
      </div>
     
    );
  }
}

export default App;

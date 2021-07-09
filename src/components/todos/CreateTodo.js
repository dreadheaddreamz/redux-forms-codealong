import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ' ',
    }
  }

  handle = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleS = event => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }


  render() {
    return(
      <div>
        <form>
          <p>
            <label>Add Todo</label>
            <input type="text" onChange={this.handle} value = {this.state.text}/>
          </p>
            <input type="submit" onChange={event => this.handleS(event)}/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default connect()(CreateTodo);

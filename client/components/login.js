import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  render() {
    return (
    <div>
      <form onSubmit={this.props.handleLoginSubmit}>
        <input type="text" name="username" value={this.state.username} onChange={this.props.handleChange} />
        <input type="text" name="password" value={this.state.password} onChange={this.props.handleChange} />
      </form>
      <p>Don't have an account?</p> 
      <button onClick={this.props.handleSignUp}/>
    </div>
    )
  }
}
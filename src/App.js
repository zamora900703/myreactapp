import React, { Component } from 'react';
import UserList from './UserList';
import User from './User';
import UserForm from './UserForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={
      users: [
      {id: 1, name : "Adrian", email : "zamora.suazo@jeje.com"},
      {id: 2, name : "Anays", email : "anays@jeje.com"},
      {id: 2, name : "Titi", email : "titi@jejejej.com"}
      ]
    }
  }

  handlerOnAddUser(event){
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };

    this.setState({
      users: this.state.users.concat([user])
    });
  }
  render() {
    return (
      <div>
      <UserList users={this.state.users} />
      <UserForm onAddUser={this.handlerOnAddUser.bind(this)} />
      </div>
    );
  }
}

export default App;

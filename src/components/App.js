import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import TaskInput from './TaskInput'
import TaskList from './TaskList'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <TaskInput />
        <TaskList />
      </div>
    )
  }
}


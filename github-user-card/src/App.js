import './App.css';
import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';
import SearchBar from './components/SearchBar';
import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  state = {
    userObj: {},
    followerArr: [],
    followingArr: [],
    formValue: 'rkshockey',
    searchValue: ''
}

  componentDidMount(){
    axios.get('https://api.github.com/users/rkshockey')
      .then(res => {
        this.setState({
          ...this.state,
          userObj: res.data
        })
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.userObj !== this.state.userObj){
      axios.get(this.state.userObj.followers_url)
        .then(res => {
          this.setState({
            ...this.state,
            followerArr: res.data
          })
        })
        .catch(err => console.log(err));
      axios.get(`${this.state.userObj.url}/following`)
        .then(res => this.setState({
          ...this.state,
          followingArr: res.data
        }))
        .catch(err => console.log(err))
    }
  }

  handleChangeUser = (url) => {
    axios.get(url)
    .then(res => {
      this.setState({
        ...this.state,
        userObj: res.data
      })
    })
    .catch(err => console.log(err))
  }

  handleChangeForm = (value) => {
    this.setState({
      ...this.state,
      formBalue: value
    })
  }

  handleSearch = (value) => {
    this.handleChangeUser(`https://api.github.com/users/${value}`)
    this.setState({
      ...this.state,
      searchValue: ''
    })
  }

  handleChangeSearch = value => {
    this.setState({
      ...this.state,
      searchValue: value
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Github User Portfolio</h1>
        <SearchBar
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
          handleChangeSearch={this.handleChangeSearch} />
        <UserCard
          userObj={this.state.userObj}
          followingArr={this.state.followingArr} 
          formValue={this.state.formValue}
          handleChangeUser={this.handleChangeUser}
          handleChangeForm={this.handleChangeForm} />
        <FollowerList
          followerArr={this.state.followerArr}
          name={this.state.userObj.name}
          handleChangeUser={this.handleChangeUser} />
      </div>
    );
  }
}

export default App;

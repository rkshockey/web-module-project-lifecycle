import axios from 'axios'
import React, { Component } from 'react'

class FollowerCard extends Component {
    state = {
        followerSq: []
    }

    componentDidMount(){
        axios.get(this.props.follower.followers_url)
            .then(res => {
                this.setState({
                    ...this.state,
                    followerSq: res.data
                })
            })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.handleChangeUser(this.props.follower.url)
    }

    render(){
        return (
            <div className='follower-card'>
                <img src={this.props.follower.avatar_url} alt={this.props.follower.name} />
                <div className='follower-details'>
                    <h4>{this.props.follower.name ? this.props.follower.name : this.props.follower.login}</h4>
                    <p>{this.props.follower.login}</p>
                    <form>
                        <select>
                            <option>--Followers:--</option>
                            {this.state.followerSq.map(item => <option key={item.id}>{item.login}</option>)}
                        </select>
                    </form>
                    <button onClick={this.handleClick}>See More</button>
                </div>
            </div>
        )
    }
}

export default FollowerCard
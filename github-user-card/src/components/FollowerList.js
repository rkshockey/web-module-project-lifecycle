import React, { Component } from 'react';
import FollowerCard from './FollowerCard';

class FollowerList extends Component {
    render(){
        return (
            <div className='follower-container'>
                <h2>{this.props.name ? this.props.name : 'User'}'s Followers</h2>
                <div className='follower-list'>
                    {this.props.followerArr.map(item =>
                        <FollowerCard follower={item} key={item.id} handleChangeUser={this.props.handleChangeUser} />
                    )}
                </div>
            </div>
        )
    }
}

export default FollowerList
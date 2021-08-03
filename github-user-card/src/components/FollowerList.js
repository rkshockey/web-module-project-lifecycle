import React, { Component } from 'react';
import FollowerCard from './FollowerCard';

class FollowerList extends Component {
    render(){
        return (
            <div className='follower-list'>
                <p>FollowerList</p>
                <FollowerCard />
            </div>
        )
    }
}

export default FollowerList
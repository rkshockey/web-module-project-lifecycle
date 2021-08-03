import React from 'react'

function UserCard (props){
    const { userObj, followingArr, formValue, handleChangeUser, handleChangeForm } = props

    function handleChange (e){
        handleChangeForm(e.target.value);
        handleChangeUser(e.target.value);
    }

    return (
        <div className='user-card'>
            <img src={userObj.avatar_url} alt={userObj.name} />
                <div className='user-details'>
                <h3>{userObj.name}</h3>
                <p>{userObj.company ? userObj.company : 'No company'}, {userObj.location}</p>
                <a href={userObj.html_url}>{userObj.login}</a>
                <p>Hireable: {userObj.hireable ? 'Yes' : 'No'}</p>
                <form>
                    <select value={formValue} onChange={handleChange}>
                        <option value={userObj.url}>--Following:--</option>
                        {followingArr.map(item => <option value={item.url} key={item.id}>{item.login}</option>)}
                    </select>
                </form>
                <p>{userObj.bio}</p>
            </div>
        </div>
    )
}

export default UserCard
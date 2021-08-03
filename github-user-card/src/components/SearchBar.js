import React from 'react';

class SearchBar extends React.Component {

    handleChange = e => {
        this.props.handleChangeSearch(e.target.value)
    }

    handleClick = e => {
        e.preventDefault();
        this.props.handleSearch(this.props.searchValue)
    }

    render(){
        return (
            <div className='searchBar'>
                <form>
                    <input value={this.props.searchValue} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar
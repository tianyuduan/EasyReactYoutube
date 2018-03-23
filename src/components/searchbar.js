import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input/ >
// }
//adds class base method, more functionality, HAVE state
//functional components DO NOT have state

class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = {term: ''}; //ONLY IN CONSTRUCTOR U CAN MKAE STATE LIKE DES
  }

    render(){
      return(
        <div className='search-bar'>
          <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        </div>
      );
    }


    onInputChange(term) {
      // console.log(event.target.value);
      // console.log(this.state);
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

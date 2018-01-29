import React from 'react'

// const SearchBar = () => {
//     return <input/ >
// }
//adds class base method, more functionality, HAVE state
//functional components DO NOT have state

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {term: ''}; //ONLY IN CONSTRUCTOR U CAN MKAE STATE LIKE DES 
  }
    
    render(){
      return(
        <div>
          value={this.state.term}
          <input onChange={event => this.setState({term: event.target.value})} />
        </div>
      );
    }
    
    
    // onInputChange(event) {
    //   console.log(event.target.value);
    //   // console.log(this.state);
    // }
}

export default SearchBar;
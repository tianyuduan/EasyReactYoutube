import React from 'react' ;//core library, works with components
import ReactDOM from 'react-dom';// needs library to render to DOM
const API_KEY = 'AIzaSyAjFHzDVQxzIvBusG2ZPXzxHA3S8i4bfC0';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


//create new compnents
//this compoent should create some HTML


// const App = function () {
//   return  <div>Hi!</div>
// }

  class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        videos: [],
        selectedVideo: null
      };

      YTSearch({key: API_KEY, term: 'food'}, videos => {
        this.setState({ videos });
        // this.setState({videos: videos})
      });

    }
    render(){
      return(
        <div>
        <SearchBar />
        <VideoDetail />
        <VideoList videos={this.state.videos}/>
        </div>
      );
    }
  }

// takes this component'as generated HTML and puts it on the page

// when create compoennt, it makes a class of the component, think of the function app as a class
 // this will actually makes an instance when run thru Babel
ReactDOM.render(<App />, document.querySelector('.container'));

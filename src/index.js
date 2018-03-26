import React from 'react' ;//core library, works with components
import ReactDOM from 'react-dom';// needs library to render to DOM
const API_KEY = 'AIzaSyAjFHzDVQxzIvBusG2ZPXzxHA3S8i4bfC0';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';


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

      this.videoSearch('food');
    }

    videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0],
        });
      });
    }

    render() {

      // const videoSearch = _.debounce((term => {this.videoSearch(term) }, 300);

      const videoSearch = _.debounce((term) => {this.videoSearch(term);}, 300);
      return (
        <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
        </div>
      );
    }
  }

// takes this component'as generated HTML and puts it on the page

// when create compoennt, it makes a class of the component, think of the function app as a class
 // this will actually makes an instance when run thru Babel
ReactDOM.render(<App />, document.querySelector('.container'));

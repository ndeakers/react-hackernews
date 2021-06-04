import React from 'react';
import SearchForm from "./SearchForm";
import Story from "./Story";
import axios from "axios";

const API_URL = "https://hn.algolia.com/api";

/** StoryList
 * 
 * State:
 *  - stories [{story}, {story},...]
 * 
 * StoryList -> {SearchForm, Story}
 */
class StoryList extends React.Component {

  state = {stories:[]};

  async apiSearch(term) {
    const response = await axios.get(
      `${API_URL}/v1/search?query=${term}`);
    let hits = response.data.hits;
    let stories = hits.map((story) => ({title: story.title, url: story.url}));
    return stories;
  }

  //on mount run apiSearch to populate page
  async componentDidMount() {
    console.log("StoryList mount state", this.state);
    let stories = await this.apiSearch("react");
    this.setState({stories});
  }

  //new apiSearch with provided term
  async newSearchFromApi(term){
    console.log("newSearchFromApi term", term);
    let stories = await this.apiSearch(term);
    console.log("StoryList news function stories", stories);
    this.setState({stories});
  }

  rendersStoryList() {
    console.log("StoryList renderStoryList state", this.state.stories);
    return this.state.stories.map((story, idx) => <Story key={idx} story={story} />)
  }

  render() {
    return <div>
      <SearchForm search={(term) => this.newSearchFromApi(term)}/>
      {this.rendersStoryList()}
    </div>
  }
}

export default StoryList;
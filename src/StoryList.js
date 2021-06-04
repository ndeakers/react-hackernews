import React from 'react';
import SearchForm from "./SearchForm";
import Story from "./Story";
import axios from "axios";

const BASE_API_URL = "https://hn.algolia.com/api/v1";

/** StoryList
 * 
 * State:
 *  - stories [{story}, {story},...]
 * 
 * StoryList -> {SearchForm, Story}
 */
class StoryList extends React.Component {

  state = {stories:[]};
  
  //TODO: consider params argument + naming
  async apiSearch(term) {
    const response = await axios.get(
      `${BASE_API_URL}/search?query=${term}`);
    let hits = response.data.hits;
    let stories = hits.map((story) => ({title: story.title, url: story.url}));
    return stories;
  }

  //on mount run apiSearch to populate page + set default search term variable
  async componentDidMount() {
    console.log("StoryList mount state", this.state);
    const stories = await this.apiSearch("react");
    this.setState({stories});
  }

  //new apiSearch with provided term
  newSearchFromApi = async (term) => {
    console.log("newSearchFromApi term", term);
    const stories = await this.apiSearch(term);
    console.log("StoryList news function stories", stories);
    this.setState({stories});
  }

  renderStoryList() {
    console.log("StoryList renderStoryList state", this.state.stories);
    return this.state.stories.map((story, idx) => <Story key={idx} story={story} />)
  }

  render() {
    return <div>
      <SearchForm search={this.newSearchFromApi}/>
      {this.renderStoryList()}
    </div>
  }
}

export default StoryList;
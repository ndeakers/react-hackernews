import React from 'react';
import SearchForm from "./SearchForm";
import Story from "./Story"

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    console.log("StoryList Props", props);
  }

  rendersStoryList() {
    this.props.stories.map(story => <Story story={story} />)
  }

  render() {
    return <div>
      <SearchForm />
      {rendersStoryList()}
    </div>
  }
}

export default StoryList;
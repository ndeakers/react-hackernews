
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component() {

  state = [];

  async componentDidMount() {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=react `);
    let hits = response.data.hits;
    const linkInfo = hits.map(story => { story.title, story.url });
    this.setState(linkInfo);
  }

  render() {
    return (
      <div className="App" >
        <StoryList stories={this.state} />
      </div>
    )
  }
}

export default App;

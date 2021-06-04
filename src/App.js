import './App.css';
import React from 'react';
import StoryList from "./StoryList";
import 'bootstrap/dist/css/bootstrap.css';

/** App
 * 
 * App -> StoryList
 */
class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <StoryList />
      </div>
    )
  }
}

export default App;

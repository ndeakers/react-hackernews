import React from "react";
import Card from "react-bootstrap/Card";

/** Story
 * 
 * Props:
 *  - story {title, url}
 * 
 * StoryList -> Story
 */

class Story extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Card>
        <Card.Title>{this.props.story.title}</Card.Title>
        <Card.Body>
          <a href={this.props.story.url}>Read Here!</a>
        </Card.Body>
      </Card>
    </div>
  }
}

export default Story;
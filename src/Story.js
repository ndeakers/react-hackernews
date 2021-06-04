import React from "react";
import Card from "react-bootstrap/Card";
import Link from "react-router-dom";

class Story extends React.Component {
  constructor(props) {
    super(props);
    console.log("StoryList Props", props);
  }
  render() {
    return <div>
      <Card>
        <Card.Title>{this.props.story.title}</Card.Title>
        <Card.Body>
          <Link to={this.props.story.url}>Read Here!</Link>
        </Card.Body>
      </Card>
    </div>
  }
}

export default Story;
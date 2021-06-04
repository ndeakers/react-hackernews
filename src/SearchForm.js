import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/** SearchForm
 * 
 * State:
 *  - term
 * 
 * StoryList -> SearchForm
 * 
 */
class SearchForm extends React.Component {

  state = {term:""}

  handleChange(evt){
    console.log("form state", this.state);
    const { name, value } = evt.target;
    this.setState(formData => ({
      ...formData, [name]: value,}))
  }

  handleSubmit(evt){
    evt.preventDefault();
    console.log("form state submit", this.state.term);
    this.props.search(this.state.term);
    this.setState({term:""});
  }


  render() {
    return (
      <Form onSubmit={(evt) => this.handleSubmit(evt)} inline>
        <Form.Control value={this.state.term} 
                      onChange={(evt) => this.handleChange(evt)} 
                      name="term" 
                      type="text" 
                      placeholder="Search" 
                      className="mr-sm-2" />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
    )
  }
}

export default SearchForm;
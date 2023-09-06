import { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"],
  };

  getTags() {
    if (this.state.tags.length === 0) return <p>No tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleTags = () => {
    this.setState({ tags: ["tag1", "tag2"] });
  };

  render() {
    // this.setState({ tags: ["tag1", "tag4"] });
    return (
      <div>
        {this.state.tags.length === 0 && <p>No tags</p>}
        <ul onChange={this.handleTags}>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counter;

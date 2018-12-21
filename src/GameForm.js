import React, { Component } from "react";
import classnames from "classnames";

class GameForm extends Component {
  state = {
    title: "",
    cover: "",
    errors: {}
  };

  handleChange = e => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({ [e.target.name]: e.target.value, errors });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    let errors = {};

    if (this.state.title === "") errors.title = "Title cannot be empty";
    if (this.state.cover === "") errors.cover = "Cover cannot be empty";
    this.setState({ errors });
  };

  render() {
    const { title, cover } = this.state;

    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <h1>Add new game</h1>

          <div
            className={classnames("field", {
              error: !!this.state.errors.title
            })}
          >
            <label htmlFor="title">Title</label>
            <input
              name="title"
              value={title}
              onChange={this.handleChange}
              id="title"
            />
            <span>{this.state.errors.title}</span>
          </div>

          <div
            className={classnames("field", {
              error: !!this.state.errors.cover
            })}
          >
            <label htmlFor="cover">Cover URL</label>
            <input
              name="cover"
              value={cover}
              onChange={this.handleChange}
              id="cover"
            />
            <span>{this.state.errors.cover}</span>
          </div>

          <div className="field">
            {this.state.cover !== "" && (
              <img
                src={this.state.cover}
                alt="cover"
                className="ui small bordered image"
              />
            )}
          </div>

          <div className="field">
            <button className="ui primary button">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default GameForm;

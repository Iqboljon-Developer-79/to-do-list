import { Component } from "react";
import "./MovieAddForm.css";

class MovieAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }

  nameHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  ageHandler = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, views } = this.state;
    const { addMovie } = this.props;
    return (
      <div className="movie-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form
          className="add-form d-flex"
          onSubmit={(e) => addMovie(e, { name, viewers: views })}
        >
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino"
            name="name"
            onChange={this.changeHandlerInput}
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Nechchi marotaba ko'rilgan?"
            name="views"
            onChange={this.changeHandlerInput}
            value={views}
          />
          <button className="btn btn-outline-dark">Qo'shish</button>
        </form>
      </div>
    );
  }
}

export default MovieAddForm;

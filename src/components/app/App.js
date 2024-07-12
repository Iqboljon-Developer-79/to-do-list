import { Component } from "react";
import { v4 as uuid4 } from "uuid";

import "./App.css";
import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import AppFilter from "../app-filter/AppFilter";
import MovieList from "../movie-list/movieList";
import MovieAddForm from "../movie-add-form/MovieAddForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Empire of osman",
          viewers: 811,
          favourite: false,
          like: false,
          id: "1",
        },
        {
          name: "Ertugrul",
          viewers: 911,
          favourite: false,
          like: false,
          id: "2",
        },
        { name: "Omar", viewers: 1999, favourite: true, like: false, id: "3" },
      ],
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id != id),
    }));
  };

  addMovie = (e, movie) => {
    const newItem = {
      name: movie.name,
      viewers: movie.viewers,
      id: uuid4(),
      favourite: false,
    };
    e.preventDefault();
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };



  render() {
    const { data } = this.state;
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={data} onDelete={this.onDelete} />
          <MovieAddForm addMovie={this.addMovie} />
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./MovieListItem.css";

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
      like: false,
    };
  }

  favouriteHandler = () => {
    this.setState((prevState) => ({
      favourite: !prevState.favourite,
    }));
  };

  likeHandler = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { name, viewers } = this.props;
    const { favourite, like } = this.state;
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          favourite && "favourite"
        } ${like && "like"}`}
      >
        <span className="list-group-item-label" onClick={this.likeHandler}>
          {name}
        </span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={viewers}
        />
        <div className="d-flex justify-content-center align-self-center">
          <button className="btn-cookie" onClick={this.favouriteHandler}>
            <i className="fas fa-cookie btn-sm"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={this.props.onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

// const MovieListItem = ({ name, viewers, favourite }) => {
//   return (
//     <li
//       className={`list-group-item d-flex justify-content-between ${
//         favourite && "favourite"
//       }`}
//     >
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="number"
//         className="list-group-item-input"
//         defaultValue={viewers}
//       />
//       <div className="d-flex justify-content-center align-self-center">
//         <button className="btn-cookie">
//           <i className="fas fa-cookie btn-sm"></i>
//         </button>
//         <button className="btn-trash btn-sm">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };

export default MovieListItem;

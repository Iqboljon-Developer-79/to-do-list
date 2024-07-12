import "./movieList.css";
import MovieListItem from "../movie-list-item/MovieListItem";

const MovieList = ({ data, onDelete, favouriteHandler }) => {
  return (
    <ul className="content movie-list">
      {data.map((item) => (
        <MovieListItem
          {...item}
          key={item.id}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
};

export default MovieList;

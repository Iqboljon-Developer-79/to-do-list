import "./AppFilter.css";

const AppFilter = () => {
  return (
    <div className="btn-group mt-2">
      <button className="btn btn-dark" type="button">
        Barcha kinolar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Mashhur kinolar
      </button>
      <button className="btn btn-outline-dark" type="button">
        Eng ko'p ko'rilgan kinolar
      </button>
    </div>
  );
};

export default AppFilter;

const Loader = () => {
  return (
    <div className="loader_container">
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status" style={{width: "100px", height: "100px"}}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
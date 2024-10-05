
function Card(props) {
  return (
    <>
      <div className="card text-bg-success mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.content}
          </p>
        </div>
      </div>
      
    </>
  );
}

export default Card;

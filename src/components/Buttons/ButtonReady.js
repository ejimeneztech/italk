import "./ButtonReady.css";
export default function ButtonReady(props) {
  return (
    <div className="touch">
      <div>
        <img
          src={props.img}
          onClick={props.onClick}
          data-value1={props.url}
          data-value2={props.value}
        ></img>{" "}
      </div>
      <span className="touch-text">{props.name}</span>
    </div>
  );
}

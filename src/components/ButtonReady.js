import "./ButtonReady.css";
export default function ButtonReady(props) {
  return (
    <button onClick={props.onClick} value={props.value} data-value1={props.url}>
      <div>
      <img src={props.img}></img> </div>
      <span className="button-text">{props.value}</span>
    </button>
  );
}

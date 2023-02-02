import "./ButtonReady.css";
export default function ButtonReady(props) {
  return (
    <button onClick={props.onClick} value={props.value} data-value1={props.url}>
      {props.value}
    </button>
  );
}

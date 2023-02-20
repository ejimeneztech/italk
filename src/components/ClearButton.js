export default function ClearButton(props){


    return (
        <button type="button" className="btn btn-default btn-sm" onClick={props.onClick}>
          <span className="glyphicon glyphicon-remove"></span> Remove 
        </button>
    );
}
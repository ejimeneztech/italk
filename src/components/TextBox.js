import './TextBox.css';
import ClearButton from './ClearButton';


export default function Textbox(props){

   

    return (

        <div className="text-box">{props.text}<ClearButton onClick={props.clear} data-value1="" data-value2=""/></div>
    );
}
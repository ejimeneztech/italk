import './Filter.css';


export default function Filter(props){

    return (
        <div className='filter'>
        <button className = "myButton" onClick={props.click1}>
            <img src={require('./images/about.png')}  className="thumbnailImage" alt="about me"/>
            About Me</button>
        <button className = "myButton" onClick={props.click2}>
        <img src={require('./images/need.png')}  className="thumbnailImage" alt="Neccessities"/>
          Neccessities
        </button>
        <button className = "myButton" onClick={props.click3}>
        <img src={require('./images/activities.png')}  className="thumbnailImage" alt="Activities"/>
          Activities
        </button>
        </div>
    );
}
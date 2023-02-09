import './App.css';

export default function Component(props){
    return(
        <div className="info">
            <img src={props.src} className="identify_img"></img><br/>
            <div className="content">
            <p className="space name">📍 {props.name} <a href={props.googleMapsUrl} className="link1">View on Google Maps</a></p> 
            <h2 className="space"> {props.mon} </h2> <br/>
            <h5 className="space"> {props.date} </h5>
            <p className="space content"> {props.content} </p>
            </div>
        </div>
    )
}



 
import "../components/styles/Content.css";

function Content(props) {
  // return <p className="content-text" style={{ color: props.color }}>{props.text}</p>;
  return <p className="content-text" style={{ color: props.color, fontFamily: props.fontFamily }}>{props.text}</p>;
}

export default Content;

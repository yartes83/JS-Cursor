import './MainStyle.css';



function Main(props) {
    
    return (
        <div className="Main">
            <p className="epigraph">{props.data.witcherDescription}</p>
            <p className="epigraph">{props.data.witcherDescriptionTwo}</p>
            
            
            
        </div>
    );
}

export default Main;
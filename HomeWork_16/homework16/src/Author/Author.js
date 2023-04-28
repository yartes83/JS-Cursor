import './AuthorStyle.css';

function Author(props) {
    return (
        <div className="Author">
            <img src={props.data.authorPhoto} alt="Anjey Sapkovskiy"/>
            <p>{props.data.author}</p>
        
        </div>
    );
}

export default Author;
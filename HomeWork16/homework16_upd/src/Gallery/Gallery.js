import './GalleryStyle.css'
function Gallery(props) {
    return (
        <div className="Gallery">
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2uYouPnUETI?start=4"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
            
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WwCXw8m0PHI?start=17"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
            
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rOIwut95HMw?start=11"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
            
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/c0i88t0Kacs?start=17"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default Gallery;
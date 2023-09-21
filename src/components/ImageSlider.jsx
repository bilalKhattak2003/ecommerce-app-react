import { useState } from "react"
import "./ImageSlider.css"
const ImageSlider = ({images}) => {
    const [currentindex,setindex] = useState(0);
    
    const nextslide = () => {
        const newslide=(currentindex+1) % images.length;
        setindex(newslide);
    };
    
    const previousslide = () => {
        const prevslide=(currentindex-1 + images.length) % images.length;
        setindex(prevslide);
    };

    return (
<div className="slider">
    <img src={images[currentindex]} className="image" />
    <button onClick={previousslide} className="next">Next</button>
    <button onClick={nextslide}>Previous</button>
</div>

    );
};

export default ImageSlider
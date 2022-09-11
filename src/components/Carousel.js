import { useEffect, useState, } from "react";

const Carousel = ({posts}) => {
    const [current, setCurrent] = useState(0)
    const time = ["Past", "Present", "Future"];


    const items = posts.map((post, i) => {
        return(
        <div className="CarouselItem" style={{transform: `translateX(-${current%3 * 100}%)`, transitionDuration: ".9s", transitionTimingFunction:"ease-in-out"}}>
            <h2 style={{textDecoration: "underline"}}>{time[i]}</h2>
            <p>{post}</p>    
        </div>)
    })

    const circles = time.map((time, i) => {
        return (<div className={i==current?"Circle activate":"Circle"}  onClick={() => setCurrent(i)}></div>)
    })

    return (
        <div>
            <div className="Carousel">
                {items}
            </div>
            <div className="CircleHolder">
                {circles}
            </div>
            
        </div>
    )
}

export default Carousel
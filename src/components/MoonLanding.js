import background from "../images/SpaceDrawings/IndividualImages/background.png"
import stars from "../images/SpaceDrawings/IndividualImages/stars.png"
import flowers1 from "../images/SpaceDrawings/IndividualImages/flowers-1.png"
import flowers2 from "../images/SpaceDrawings/IndividualImages/flowers-2.png"
import flowers3 from "../images/SpaceDrawings/IndividualImages/flowers-3.png"
import flowers4 from "../images/SpaceDrawings/IndividualImages/flowers-4.png"
import flowers5 from "../images/SpaceDrawings/IndividualImages/flowers-5.png"
import moon from "../images/SpaceDrawings/IndividualImages/moon.png"
import laptop from "../images/SpaceDrawings/IndividualImages/laptop.png"
import lucas from "../images/SpaceDrawings/IndividualImages/lucas.png"






const MoonLanding = () => {
    return (
        <div className="MoonLanding">
            <img className="invis" src={background}></img>
            <img src={background}></img>
            <img className="stars" src={stars}></img>
            <img className="flowers-1" src={flowers1}></img>
            <img className="flowers-2" src={flowers2}></img>
            <img className="flowers-3" src={flowers3}></img>
            <img className="flowers-4" src={flowers4}></img>
            <img className="flowers-5" src={flowers5}></img>
            <img className="moon" src={moon}></img>
            <img className="lucas" src={lucas}></img>
            <img className="laptop" src={laptop}></img>
        </div>
    )
}

export default MoonLanding
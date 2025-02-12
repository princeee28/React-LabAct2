import ExploreCards from "./ExploreCards";
import { bestData } from "../bestData";

function Best() {
  return (
    <div className="">
        <p> Explore the best of Pinterest</p>
        <div className="card-grid">
          {bestData.map((best) => (
            <ExploreCards
            bestObj={best}
            key={best.name}
            />
          ))}
        </div>
        <div className="button-container">
          <button className="see">See more</button>
        </div>
    </div>
  )
}

export default Best;
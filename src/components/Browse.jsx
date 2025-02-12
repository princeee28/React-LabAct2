import CategCards from "./CategCards";
import { categData } from "../data";

function Browse() {
  return (
    <div className='browse-category'>
      <p> Browse by Category </p>
      <div className="category-grid">
      
      {categData.map((categ) => (
        <CategCards 
          categObj={categ} 
          key={categ.title} 
        />
      ))}
      

      </div>
      <div className="button-container">
        <button className="see">See more</button>
      </div>
    </div>
  )
}

export default Browse;
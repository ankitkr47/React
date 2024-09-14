import resData from "../utils/mockData"
import { CardComponent } from "./CardComponent"
import { useState } from "react"

export const HeroSection = () => {

    const [restaurantData, setrestaurantData] = useState(resData);
    // console.log(resData, restaurantData);
    return (
      <div className="hero-section">
        <div className="hero-section-1">
                <div className="search">Search</div>
                <button className="filter" onClick={() => {    //? event takes callback function wrap under {}
                    // console.log("filters")

                    const filerResData = resData.filter((item) => {
                        return item.info.avgRating > 4.4;
                    })
                    console.log(filerResData,"-------------------------------------filterResData")
                    setrestaurantData(filerResData);

                }}>Filter Top Rated Restaurants</button>
        </div>
        {/* restaurant section with cards */}
        <div>
          <h2>Restaurants near you</h2>
          <div className="card-sections">
            {restaurantData.map((item) => {
              return (
                <CardComponent
                  key={item?.info?.id}  /* important to pass key(unique) */
                  name={item?.info?.name}
                  rating={item?.info?.avgRating}
                  cusine={item?.info?.cuisines}
                  delivery_time={item?.info?.sla?.deliveryTime}
                  cloudinaryImageId = {item?.info?.cloudinaryImageId}
                />
              )
            })}
            
          </div>
          
        </div>
      </div>
      
    )
  }
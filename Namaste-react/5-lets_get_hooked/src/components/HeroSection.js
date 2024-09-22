// import resData from "../utils/mockData";
import { CardComponent } from "./CardComponent";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";


export const HeroSection = () => {

  const [restaurantData, setrestaurantData] = useState([]); //? always define hooks inside the component/function
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([])

  const getRestaurants = async () => {
    const Data = await fetch(SWIGGY_URL);
    const data = await Data.json();
    setrestaurantData(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    // setFilteredData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    // console.log("Get Restaurants method of useEffect called")
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  if (restaurantData.length === 0) {
    return (
      <Shimmer/>
    )
  }
  // console.log(filteredData ," Filtered data");

  return (
    <div className="hero-section">
      <div className="hero-section-1">
        <div className="search">

          <input type="text" placeholder="Search" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }}></input>

          <button onClick={() => {
            const searchedRestaurants = restaurantData.filter((item) => {
              return item.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            // console.log(searchedRestaurants)
            setFilteredData(searchedRestaurants);
            // console.log(filteredData, "filteredData");
          }}>Search</button>

        </div>
        <button
          className="filter"
          onClick={() => {
            //? event takes callback function wrap under {}

            const filerResData = restaurantData.filter((item) => {
              return item.info.avgRating > 4.4;
            });
            // console.log(filerResData,"-------------------------------------filterResData")
            setFilteredData(filerResData);
            // console.log(filteredData ," Filtered data");

          }}
        >
          Filter Top Rated Restaurants
        </button>
      </div>
      {/* restaurant section with cards */}
      <div>
        <h2>Restaurants near you</h2>
        <div className="card-sections">
          {
            (filteredData.length > 0) ?
              filteredData.map((item) => {
                return (
                  <CardComponent
                    key={item?.info?.id} /* important to pass key(unique) */
                    name={item?.info?.name}
                    rating={item?.info?.avgRating}
                    cusine={item?.info?.cuisines}
                    delivery_time={item?.info?.sla?.deliveryTime}
                    cloudinaryImageId={item?.info?.cloudinaryImageId}
                  />
                );
              })
            :
              restaurantData.map((item) => {
            return (
              <CardComponent
                key={item?.info?.id} /* important to pass key(unique) */
                name={item?.info?.name}
                rating={item?.info?.avgRating}
                cusine={item?.info?.cuisines}
                delivery_time={item?.info?.sla?.deliveryTime}
                cloudinaryImageId={item?.info?.cloudinaryImageId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

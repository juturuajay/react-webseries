import RestaurantCard from "./RestaurantCard";

import { useState } from "react";

import resList from "../utils/mockData";
const Body = () =>{

    const [listofRestaurants, setListofRestaurants]  = useState(resList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={ () =>{
                    const filteredList = listofRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListofRestaurants(filteredList)
                    
                }}
                >
                    Top rated restaurant
                </button>
            </div>
            <div className="res-container">
               {
                listofRestaurants.map( (restaurant) =>(
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>))
               }
            </div>
        </div>
    )
}

export default Body;
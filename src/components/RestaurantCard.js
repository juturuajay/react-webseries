import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>  
         <img className="res-logo"
             alt="res-logo" 
          src={CDN_URL + resData.data.cloudinaryImageId}/>
          <h4>{resData.data.name} <br /><br/>
          {resData.data.cuisines.join(",")}<br /><br/>
          ₹{resData.data.costForTwo/100} for two<br /> {resData.data.avgRating} stars</h4>
          
        </div>
    )
}



export default RestaurantCard;
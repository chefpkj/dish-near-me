import { useEffect, useState } from "react";
import {alt_IMG_CDN_URL, IMG_CND_URL} from "../constants"
import { MenuShimmer } from "./shimmer UI";
import { useParams } from "react-router-dom";
import useRestaurant from "../../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
const RestaurantMenu=()=>{
  
    const res_Id=useParams();
    const restaurant=useRestaurant(res_Id);
    const restaurantInfo=restaurant?.data?.cards[0]?.card?.card?.info;
    const restaurantMenuList=restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    //  restaurantMenuList?.map((items)=>{
    //       console.log(items?.card?.card?.itemCards[0]?.card.info.name);
    //  }) 


    if(restaurantInfo!=undefined)  {
      console.log(restaurantMenuList);
    // for(i=1;i<restaurantMenuList.length;i++){
    //   if(restaurantMenuList[i]?.card?.card?.itemCards!=undefined){
    //     (restaurantMenuList[i]?.card?.card.itemCards).map((items)=>{
    //       console.log(items?.card.info.name);
    //     })
    //   }
    // }
  }
   
  // }
  // let pkj=0;

  const dispatch=useDispatch();

  const handleAddItem=(itemName)=>{
    dispatch(addItem(itemName));
    
  };

    return restaurantInfo === undefined? 
      <MenuShimmer />:
      // <MenuShimmer />
       
      <div>
        <div className="restaurant_body_menu">
          <div>
          <h1>{restaurantInfo?.name}</h1>
          <ul>
          <li><h3>{restaurantInfo?.cuisines.join(", ")}</h3></li>
          <li><h3>{restaurantInfo?.locality}, {restaurantInfo?.city}</h3></li>
          <li><h3>Rating: {restaurantInfo?.avgRating} (Total {restaurantInfo?.totalRatingsString})</h3></li>
          </ul>
          </div>
          <img src={IMG_CND_URL + restaurantInfo?.cloudinaryImageId}></img>
          
        </div>
         
        

         <div className="restaurant_body_menu_dishes">
           <ul><h3>Menu</h3></ul>
              <div>
               {(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards)?.map((items) => {
                let ITEMCARDS=items?.card?.card?.itemCards;
                if(ITEMCARDS!=undefined)
                { 
                  return (
                  <li className="pkj_li" key={items?.card?.card?.itemCards[0]?.card?.info?.id}>
                    
                    
                    {items?.card?.card?.itemCards[0]?.card?.info?.name}
                    
                  <div className="jaya">
                  <img src={IMG_CND_URL + items?.card?.card?.itemCards[0]?.card?.info?.imageId} alt=" loading image..."/>
                  <div className="tagg" onClick={()=>handleAddItem(items?.card?.card?.itemCards[0]?.card?.info)}>Add+</div>
                  </div>
                   </li>
                  );
                } 
               })}
             </div>  
             </div>
         
       </div> 
    ;
}
export default RestaurantMenu;







// obj[]=restaurant?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[iterate];

// in this obj array skip the first element 



// object.card.card.itemCards[]
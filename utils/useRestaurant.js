import { useState,useEffect } from "react";

const useRestaurant=(res_Id)=>{
    const [restaurant,setRestaurant]=useState(null);
    useEffect(()=>{
        getRestaurantMenu();
    },[]);

    async function getRestaurantMenu(){
        const tempData=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5043999&lng=77.3317246&restaurantId="+res_Id.id);
        const data=await tempData.json();
        console.log(data);
        setRestaurant(data);
    }
    
    return restaurant;

}
export default useRestaurant;



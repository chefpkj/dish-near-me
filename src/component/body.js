import { IMG_CND_URL } from "../constants";
import { useState, useEffect } from "react";
import { ShimmerUI } from "./shimmer UI";
import { Link } from "react-router-dom";

const RestrauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwoString,
  locality,
  area
}) => {
  return (
    <div className="restaurant_card">
      <img src={IMG_CND_URL + cloudinaryImageId} />
      {(name.length<24)?(<h3>{name}</h3>):<h3>{name.substring(0,23)}...</h3>}
      <div className="restaurant_card_menu">
      {(cuisines.length>2)?(<p>{cuisines[0]}, {cuisines[1]}...</p>):(<p>{cuisines.join(", ")}</p>)}
      <p>{costForTwoString}</p>
      </div>
      <div class="line"></div> 
      {((locality.length+area.length)<34)?(<p class="restaurant_address">{locality}, {area}</p>):(<p class="restaurant_address">{area}</p>)}
    </div>
  );
};

function getData(searchTxt, allLinks) {
  return allLinks.filter((link) =>
    link?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase()));
}

const Body = () => {
  const [isLoaded,setIsLoaded]=useState(false);
  const [searchTxt, SetSearchTxt] = useState();
  const [filteredRestaurant, SetFilteredRestaurant] = useState([]);
  const [AllRestaurant, SetAllRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5280352&lng=88.36590830000002&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    SetAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    SetFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setIsLoaded(true);
    console.log(json);
  }

  return isLoaded ? (
    <>

      
      <div className="wrapper">   {/* searchFunctionality */}
            <div>
            <img className="search-icon" onClick={(e) => {SetFilteredRestaurant(getData(searchTxt, AllRestaurant));}} alt="Search" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
            </div>
            <div>
            <input className="search" id="search-btn" placeholder="Search" autoComplete="off" type="text" value={searchTxt} onChange={(e)=>(SetSearchTxt(e.target.value) )} onKeyDown={(e) => {
              if(e.key == "Enter"){
                  return SetFilteredRestaurant(getData(searchTxt, AllRestaurant));
              }   
              }}/>   
            </div>
      </div>  


      <div className="containerBody">
        {filteredRestaurant?.length===0?<h1>NO waYYY!!</h1>:filteredRestaurant?.map((rest) => {
          // return <RestrauntCard {...rest.data} key={rest.data.id} />;
          return <Link to={"/restaurant/"+rest.data.id} style={{textDecoration: 'none'}} key={rest.data.id}><RestrauntCard {...rest.data} key={rest.data.id} /></Link> ;
        })}
      </div>
    </>
  ):<ShimmerUI/>;
};

export default Body;

import Skeleton,{SkeletonTheme} from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css";
import { IMG_CND_URL } from "../constants";
import Search from "./search"
export const ShimmerUI=()=>{
    return(
        <>
        <Search/>
         <div className="containerBody">
            <SkeletonTheme highlightColor="#F2F2F2" >
            <div className="shimmerRestaurant_card">
                <div className="shimmerRestaurant_img"><Skeleton height={214} /></div>
                <h3><Skeleton/></h3>
                <p><Skeleton/></p>
            </div>
            <div className="shimmerRestaurant_card">
                <div className="shimmerRestaurant_img"><Skeleton height={214} /></div>
                <h3><Skeleton/></h3>
                <p><Skeleton/></p>
            </div>
            <div className="shimmerRestaurant_card">
                <div className="shimmerRestaurant_img"><Skeleton height={214} /></div>
                <h3><Skeleton/></h3>
                <p><Skeleton/></p>
            </div>
            <div className="shimmerRestaurant_card">
                <div className="shimmerRestaurant_img"><Skeleton height={214} /></div>
                <h3><Skeleton/></h3>
                <p><Skeleton/></p>
            </div>
            <div className="shimmerRestaurant_card">
                <div className="shimmerRestaurant_img"><Skeleton height={214} /></div>
                <h3><Skeleton/></h3>
                <p><Skeleton/></p>
            </div>
            <div className="shimmerRestaurant_card">
                <div className="shimmerRestaurant_img"><Skeleton height={214} /></div>
                <h3><Skeleton/></h3>
                <p><Skeleton/></p>
            </div>
            <div className="shimmerRestaurant_card">
                <div className="shimmerRestaurant_img"><Skeleton height={214} /></div>
                <h3><Skeleton/></h3>
                <p><Skeleton/></p>
            </div>
            <div className="shimmerRestaurant_card">
                <div className="shimmerRestaurant_img"><Skeleton height={214} /></div>
                <h3><Skeleton/></h3>
                <p><Skeleton/></p>
            </div>
            </SkeletonTheme> 

         </div>
        </>
    
    )
}

export const MenuShimmer = () => {
    return (
      <div>
        <SkeletonTheme highlightColor="#d6d1d1" >
           <div className="menuShimmer">
            <div className="menuShimmerInnerMenu"> 
              <h1><Skeleton /></h1>
           <ul>
           <li><h3><Skeleton /></h3></li>
           <li><h3><Skeleton /></h3></li>
           <li><h3><Skeleton /></h3></li>
           </ul></div>
            {/* <img src={IMG_CND_URL + "vwwcw3xrikkdw8feba3p"}></img> */}
            
              <Skeleton height={320} width={508} borderRadius={35}/>
              
           
         </div>
         <div className="menuShimmer_list">
         <h1><Skeleton width={80}/></h1>
         <h1><Skeleton width={600} height={100}/></h1>
         <h1><Skeleton width={600} height={100}/></h1>
         <h1><Skeleton width={600} height={100}/></h1>
         <h1><Skeleton width={600} height={100}/></h1>
         <h1><Skeleton width={600} height={100}/></h1>
         <h1><Skeleton width={600} height={100}/></h1>
         <h1><Skeleton width={600} height={100}/></h1>
         </div>
        
         
         </SkeletonTheme>
    </div>
    )
  }

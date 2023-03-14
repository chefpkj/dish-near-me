import { useSelector } from "react-redux";
import clap from "../assets/img/clap.gif"

// const AfterUi=()=>{
    
  
//     return (
//      <>  </>
//     )

// }

const CartPage=()=>{
    const totalItems=useSelector(store=>store.cart);
    
    

    return (
        <>
         <div className="vimal">
           <div className="restaurant_body_menu_dishes">
            <ul><h3 className="cartMenu">Cart Items</h3></ul>
              <div>
               {(totalItems.items)?.map((items) => {
                
                  return (
                  <li className="pkj_li" key={items?.id}>
                    {items?.name}
                  <div className="jaya">₹ {items.price/100}</div>
                   </li>
                  );
               })}
               {/* {totalItems.total && <h1>Messages:</h1>} */}
               <b>{totalItems.total==0 ? " No items" : <li className="pkj_li" >
                    Total :
                  <div className="jaya">₹ {totalItems.total/100}</div>
                   </li>  }
                   </b>

              </div>  
            </div>
            {/* <AfterUi/> */}
          </div>
        </>
    );
}

export default CartPage;

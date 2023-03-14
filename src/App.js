import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body";
import Footer from "./component/footer";
import Login from "./component/Login";
import Error from "./component/Error";
import Contact from "./component/contactUs";
import RestaurantMenu from "./component/restaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../utils/store";
import CartPage from "./component/cart";



const AppLayout=()=>{
  return (
    
    <Provider store={store}>
    <Header/>
    <Outlet/>
    <Footer/>
    </Provider>
    
  )
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<CartPage/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

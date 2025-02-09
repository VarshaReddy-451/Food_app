import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import RestaurantCard from "./components/RestaurantCard";
import {useState,useContext,useEffect} from "react";
import UserContext from "./utilis/UserContext.js";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
//import About from "./components/About.js"
import ContactUs from "./components/ContactUs.js" 
import Error from "./components/Error.js"
import RestaurantMenu from "./components/RestaurantMenu";
import {Provider} from "react-redux"
import appStore from  "./utilis/appStore.js"
//import Category from "./components/Category.js";
const About = lazy(() => import("./components/About"));
  const Category = lazy(() => import("./components/Category.js"));

const AppLayout = () => {
  
const [userName,setUserName]=useState()
useEffect(()=>{
  const data={
    name:"Varsha"
  };
  setUserName(data.name)
},[])
    return (
      <Provider store={appStore}>
        <UserContext.Provider value={{loggedUser:userName}}>
   
   <div className="app">
       <Header />
       <Outlet />
       <Footer />
   </div>
 </UserContext.Provider>

      </Provider>
      
    );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        
        path:"/",
        element:<Body/>
      },
      {

        path:"/About",
        element:<About/>
      },
      {
        path:"/ContactUs",
        element:<ContactUs/>
      },
      {
        path:"/Category",
        element: <Suspense fallback={<div>Loading Category...</div>}>
        <Category />
    </Suspense>
      },
     {
        path:"/Restaurant/:resid",
        element:<RestaurantMenu/>
      }

    ],
    errorElement:<Error/>
  }
]) 

// Mount the React App
const root = ReactDOM.createRoot(document.getElementById("div1"));
root.render(<RouterProvider router={appRouter} />);


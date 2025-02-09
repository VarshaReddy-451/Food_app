import {ICON_LOGO} from "../utilis/constants.js"
import {Link} from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus.js";
import Category from "./Category.js";
import UserContext from "../utilis/UserContext"
import { useContext } from "react";
import {useSelector} from "react-redux"
const Header = () => {
    const onlineStatus=useOnlineStatus();
    const data=useContext(UserContext)
    console.log(data);
    const cartItems =useSelector((store)=>store.cart.items)
    console.log(cartItems)

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={ICON_LOGO} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                    <li><Link to="/category">category</Link></li>
                    <li><i className="fas fa-shopping-cart">({cartItems.length} items)</i></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
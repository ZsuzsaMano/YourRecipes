import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Sidebar } from './Sidebar';
import Searchbar from '../components/Searchbar';
import { RecipeContext } from '../context/RecipeContext';
import { LoginContext } from '../context/LoginContext';

const Navbar = (props) => {
    const { sidebar, setSidebar } = useContext(RecipeContext);
    const { name, isLoggedin, signOut } = useContext(LoginContext);

    const showsideBar = () => setSidebar(!sidebar);
    return (
      <div className="navbar">
      <div className="navbar__menu">
      <button  className="menu-bars">
        <FaIcons.FaBars onClick={showsideBar}/>
      </button>
<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
<ul className="nav-menu-items" onClick={showsideBar}>
<li className="navbar-toggle">
<button  className="menu-bars">
<AiIcons.AiOutlineClose/>
</button>
</li>
{Sidebar.map((item, index)=> {
      return (
        <li key={index} className={item.cName}>
      <NavLink exact to={item.path} activeStyle = {{ textDecoration: 'underline' }}>
    {item.icon} <span>{item.title}</span>
</NavLink>
    </li>
      );
    })}
</ul>
</nav>
</div>
        <Searchbar/>

      {isLoggedin ? <p className="login__button" onClick={signOut}>Logout</p>
         : <Link to="login" className="login__button">Login</Link>}

     </div>

    );
  };

export default Navbar;

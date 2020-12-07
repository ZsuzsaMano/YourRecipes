import React from 'react';

const Navbar = ({ query, updateQuery }) => {
  return (
    <div className="navbar">
    <button className="bookmarksBtn">Bookmarks</button>
     <form  className = "search-form">
      <input className = "search-bar" type ="text" placeholder = "search..." value={query} onChange={updateQuery}/>
     </form>
     <button className="favoritsBtn">Favorites</button>
     </div>

  );
};

export default Navbar;

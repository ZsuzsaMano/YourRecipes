import React from 'react';

const Navbar = ({ getSearch, search, updateSearch }) => {
  return (
    <div className="navbar">
    <button className="bookmarksBtn">My Bookmarks</button>
     <form onSubmit={getSearch} className = "search-form">
      <input className = "search-bar" type ="text" value={search} onChange={updateSearch}/>
      <button type="submit" className = "search-button"> Search </button>
     </form>
     <button className="favoritsBtn">My Favorites</button>
     </div>

  );
};

export default Navbar;

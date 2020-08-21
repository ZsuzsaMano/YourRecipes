import React, {useState} from 'react';


const ToggleBookmark = () => {

  const [selected, toggleSelected]=useState(false);



  return(
<svg className={`toggleBookmark ${selected ? "toggleBookmark-active" : ""}`} onClick={()=>toggleSelected(!selected)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.568.075c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702zm-.824 7.925s1.522-8-3.335-8h-.409v12l-2.5-2.634-2.5 2.634v-12h-3v24h20v-13c0-3.419-5.247-3.745-8.256-3z"/></svg>
  )
}

export default ToggleBookmark;

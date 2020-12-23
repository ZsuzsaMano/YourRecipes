import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';

export const Sidebar = [
  { title: 'Home',
  path: '/',
  icon: <AiIcons.AiFillHome/>,
  cName: 'nav-text', },
{ title: 'MyRecipes',
  path: '/myrecipes',
  icon: <GiIcons.GiCook/>,
  cName: 'nav-text private', },
{ title: 'Chat',
  path: '/chat',
  icon: <BsIcons.BsChatDots/>,
  cName: 'nav-text private', },
{ title: 'Login',
  path: '/login',
  icon: <AiIcons.AiOutlineLogin/>,
  cName: 'nav-text', },
];

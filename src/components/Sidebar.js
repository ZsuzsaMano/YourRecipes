import React from 'react';
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'


export const Sidebar = [
  {title: 'Home',
path:'/',
icon: <AiIcons.AiFillHome/>,
cName:'nav-text',},
{title: 'Recipe',
path:'/recipe',
icon: <GiIcons.GiCook/>,
cName:'nav-text',},
{title: 'Chat',
path:'/chat',
icon: <BsIcons.BsChatDots/>,
cName:'nav-text',},
{title: 'Login',
path:'/login',
icon: <AiIcons.AiOutlineLogin/>,
cName:'nav-text',},
]

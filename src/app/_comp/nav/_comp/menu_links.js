'use client'
import css from './menu_links.module.css'

import {Facebook_Messenger_Fab} from "iconview/svgs/Facebook_Messenger_Fab";


import {useState} from "react";
import {Bell_Fas} from "iconview/svgs/Bell_Fas";
import {Grid_Round_Fas} from "iconview/svgs/Grid_Round_Fas";
import Image from "next/image";
import profile_pic from "../../../../../public/imgs/profile_picture.jpeg";

import {useRouter} from "next/navigation";
import {Arrow_Right_From_Bracket_Fas} from "iconview/svgs/Arrow_Right_From_Bracket_Fas";



export default function Menu_links(){
	
	const router  = useRouter()
	const pro_pic = <Image className={css.menu_icons} style={{height: "100%", borderRadius: "100px"}} height="100px" width="100%" src={profile_pic} alt="Profile Picture" />
	
	const icon = [
		{name: "grid", icon: <Grid_Round_Fas />, link: "/"},
		{name: "messenger", icon: <Facebook_Messenger_Fab />, link: "/"},
		{name: "bell", icon: <Bell_Fas />, link: "/"},
		{name: "logout", icon: <Arrow_Right_From_Bracket_Fas />, link: "/login"},
		{name: "profile", icon: pro_pic, link: "/nazmul"},
	]
	
	const [isOpen, setOpen] = useState(null)
	
	const menuLinks = icon.map((menu, index) => {
		const isActive = isOpen === menu.name
		return <li
			key={index}
			onClick={() => {isActive? setOpen(null) : setOpen(menu.name); router.push(menu.link) } }
			className={`${css.menu_icons} ${isActive && css.active_menu}`}>
			{menu.icon}
		</li>
	})
	
	return(
		<ul className={css.menu_links}>
			{menuLinks}
		</ul>
	)
}
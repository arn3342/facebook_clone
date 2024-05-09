'use client'

import css from "./nav_links.module.css";

import {House_Far} from "iconview/svgs/House_Far";
import {House_Fas} from "iconview/svgs/House_Fas";
import {Video_Fas} from "iconview/svgs/Video_Fas";
import {Video_Far} from "iconview/svgs/Video_Far";
import {Store_Far} from "iconview/svgs/Store_Far";
import {Store_Fas} from "iconview/svgs/Store_Fas";
import {Circle_User_Fas} from "iconview/svgs/Circle_User_Fas";
import {Circle_User_Far} from "iconview/svgs/Circle_User_Far";
import {Gamepad_Far} from "iconview/svgs/Gamepad_Far";
import {Gamepad_Fas} from "iconview/svgs/Gamepad_Fas";
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";


export default function NavLinks(){
	
	const router = useRouter()
	const path = usePathname()
	
	const icon = [
		{name: "Home", solid: <House_Far/>, fill: <House_Fas/>, link: "/"},
		{name: "Videos", solid: <Video_Far/>, fill: <Video_Fas/>, link: "/"},
		{name: "Marketplace", solid: <Store_Far/>, fill: <Store_Fas/>, link: "/"},
		{name: "Groups", solid: <Circle_User_Far/>, fill: <Circle_User_Fas/>, link: "/"},
		{name: "Games", solid: <Gamepad_Far/>, fill: <Gamepad_Fas/>, link: "/"},
	]
	
	const [activeLink, setActiveLink] = useState(0)
	
	const navLinks = icon.map((icon, index) => {
		const isActive = activeLink === index && path === "/"
		return <li
			key={index}
			onClick={() => {setActiveLink(index); router.push(icon.link)}}
			className={`${css.nav_icons} ${isActive && css.active_link}`}>
			{isActive ? icon.fill : icon.solid}
		</li>
	})
	
	return(
		<ul className={css.nav_links}>
			{navLinks}
		</ul>
	)
}
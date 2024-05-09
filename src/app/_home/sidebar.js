import Button from "@/app/_comp/button/button";
import Image from "next/image";
import css from './sidebar.module.css'

import profile_pic from "/public/imgs/profile_picture.jpeg";
import {User_Group_Fad} from "iconview/svgs/User_Group_Fad";
import {Clock_Rotate_Left_Fad} from "iconview/svgs/Clock_Rotate_Left_Fad";
import {Angle_Down_Fad} from "iconview/svgs/Angle_Down_Fad";
import {Newspaper_Fad} from "iconview/svgs/Newspaper_Fad";
import {Floppy_Disks_Fad} from "iconview/svgs/Floppy_Disks_Fad";
import {User_Group_Simple_Fad} from "iconview/svgs/User_Group_Simple_Fad";
import {Video_Fad} from "iconview/svgs/Video_Fad";
import {Store_Fad} from "iconview/svgs/Store_Fad";

const pic_icon = <div className={css.profile_img} >
	<Image src={profile_pic} alt="Profile Picture" />
</div>


export default function Sidebar(){
	
	const sidebar_links = [
		{title: "Friends", icon: <User_Group_Fad size="25px" color="green" />, link: "#"},
		{title: "Memories", icon: <Clock_Rotate_Left_Fad size="25px" color="green" />, link: "#"},
		{title: "Saved", icon: <Floppy_Disks_Fad size="25px" color="green" />, link: "#"},
		{title: "Groups", icon: <User_Group_Simple_Fad size="25px" color="green" />, link: "#"},
		{title: "Videos", icon: <Video_Fad size="25px" color="green" />, link: "#"},
		{title: "Marketplaces", icon: <Store_Fad size="25px" color="green" />, link: "#"},
		{title: "Feed", icon: <Newspaper_Fad size="25px" color="green" />, link: "#"},
		{title: "See more", icon: <Angle_Down_Fad size="25px" color="green" />, link: "#"},
	]
	
	const sidebar_link = sidebar_links.map((link, index) => <Button key={index} className={css.sidebar_btn} link title={link.title} icon={link.icon} />)
	
	return(
		<div className={css.sidebar_container}>
			<Button className={css.sidebar_btn} link title="Nazmul Hossain" icon={pic_icon} />
			{sidebar_link}
		</div>
	)
}


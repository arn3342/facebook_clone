
import profile_pic from "/public/imgs/profile_picture.jpeg";
import cover_pic from "/public/imgs/cover.jpeg";

import css from './sidebar.module.css'
import Button from "@/app/_comp/button/button";
import Image from 'next/image'

const pic_icon = <div className={css.profile_img} >
	<Image src={profile_pic} alt="Profile Picture" />
</div>

const peoples = [
	{name : "Muhammad Ali", pic: pic_icon },
	{name : "Ali Ibn Abi Talib", pic: pic_icon },
	{name : "Umer Bin Khattab", pic: pic_icon },
	{name : "Khalid ibn Walid", pic: pic_icon },
	{name : "Muhammad bin Qasim", pic: pic_icon },
	{name : "Abu Muslim", pic: pic_icon },
	{name : "Tariq bin ziyad", pic: pic_icon },
	{name : "Mahmud of Ghazni", pic: pic_icon },
	{name : "Salauddin Ayyubi", pic: pic_icon },
	{name : "Sultan Mehmed II", pic: pic_icon },
]


const chatLists = peoples.map( (people, index) => <Button key={index} className={css.sidebar_btn} link title={people.name} icon={people.pic} />)

export default function ChatsSidebar(){
	
	return(
		<div className={css.sidebar_container}>
			<span className={css.right_title_padding}>Contacts</span>
			{chatLists}
		</div>
	)
}



import profile_pic from "/public/imgs/profile_picture.jpeg";
import cover_pic from "/public/imgs/cover.jpeg";

import css from './sidebar.module.css'
import Button from "@/app/_comp/button/button";
import Image from 'next/image'

const pic_icon = <div className={css.profile_img} >
	<Image src={profile_pic} alt="Profile Picture" />
</div>

const cover_comp = <div className={css.profile_img} >
	<Image src={cover_pic} alt="Profile Picture" />
</div>


export default function Sponsor(){
	
	return(
		<div className={css.sidebar_container}>
			<span className={css.right_title_padding}>Sponsor</span>
			<Button className={css.right_sidebar} link title="Nazmul Hossain  Software Engineer" icon={pic_icon} />
			<Button className={css.right_sidebar} link title="Turkey, Istanbul. Hagia Sophia" icon={cover_comp} />
		</div>
	)
}


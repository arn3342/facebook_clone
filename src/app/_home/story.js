import css from './story.module.css'
import Image from "next/image";

import cover from "/public/imgs/cover.jpeg";
import pro_pic from '/public/imgs/profile_picture.jpeg'
import {Plus_Far} from "iconview/svgs/Plus_Far";



export default function Story(){
	return(
		<div className={css.story_container}>
			
			<div className={css.story_box}>
				<Image className={css.create_story} src={cover} alt="Profile Picture" />
				<Image className={css.top_img} src={pro_pic} alt="Profile Picture" />
				
				<Plus_Far className={css.bottom_icon} size="15px" />
				<span className={css.bottom_create_story}>Create Story</span>
			
			</div>
			
			<div className={css.story_box}>
				<Image className={css.profile_img} src={cover} alt="Profile Picture" />
				<Image className={css.top_img} src={pro_pic} alt="Profile Picture" />
				
				<span className={css.bottom_name}>Nazmul Hossain</span>
				
			</div>
			<div className={css.story_box}>
				<Image className={css.profile_img} src={cover} alt="Profile Picture" />
				<Image className={css.top_img} src={pro_pic} alt="Profile Picture" />
				
				<span className={css.bottom_name}>Nazmul Hossain</span>
				
			</div>
			
			<div className={css.story_box}>
				<Image className={css.profile_img} src={cover} alt="Profile Picture" />
				<Image className={css.top_img} src={pro_pic} alt="Profile Picture" />
				
				<span className={css.bottom_name}>Nazmul Hossain</span>
			
			</div>
			
			<div className={css.story_box}>
				<Image className={css.profile_img} src={cover} alt="Profile Picture" />
				<Image className={css.top_img} src={pro_pic} alt="Profile Picture" />
				
				<span className={css.bottom_name}>Nazmul Hossain</span>
			
			</div>
			
			<div className={css.story_box}>
				<Image className={css.profile_img} src={cover} alt="Profile Picture" />
				<Image className={css.top_img} src={pro_pic} alt="Profile Picture" />
				
				<span className={css.bottom_name}>Nazmul Hossain</span>
			
			</div>
		</div>
	)
}
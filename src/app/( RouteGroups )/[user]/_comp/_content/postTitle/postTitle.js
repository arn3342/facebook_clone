import css from './postTitle.module.css'
import profile_pic from '/public/imgs/profile_picture.jpeg'
import Button from "@/app/_comp/button/button";
import Image from "next/image";
import {Ellipsis_Far} from "iconview/svgs/Ellipsis_Far";

export default function PostTitle(){
	return(
		<div className={css.title_flex}>
			
			<div className={css.info_flex}>
				<div className={css.profile_img} >
					<Image src={profile_pic} alt="Profile Picture" />
				</div>
				<div className={css.title_info}>
					<span className={css.name}>Nazmul Hossain</span>
					<span>10h</span>
				</div>
			</div>
			
			<Button link icon={<Ellipsis_Far />} />
		
		</div>
	)
}
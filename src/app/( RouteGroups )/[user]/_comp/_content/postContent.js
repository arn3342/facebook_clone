import css from './postContent.module.css'
import Image from "next/image";
import profile_pic from '/public/imgs/profile_picture.jpeg'
import Button from "@/app/_comp/button/button";
import {Flag_Fad} from "iconview/svgs/Flag_Fad";
import {Video_Arrow_Up_Right_Fad} from "iconview/svgs/Video_Arrow_Up_Right_Fad";
import {File_Image_Fad} from "iconview/svgs/File_Image_Fad";

export default function PostContent(){
	return(
		<div className={css.post_container}>
			<div className={css.post_flex}>
				
				<div className={css.post_form}>
					<Image src={profile_pic} alt="Profile Picture" />
					<form action="" className={css.input_form}>
						<input type="text" placeholder="What's on your mind?"/>
					</form>
				</div>
				<hr/>
				<div className={css.post_button}>
					<Button link title="Live Video" icon={<Video_Arrow_Up_Right_Fad color="#3bde32" size="20px" />} />
					<Button link title="Photo/video" icon={<File_Image_Fad color="#097aff" size="20px" />} />
					<Button link title="Life event" icon={<Flag_Fad color="#0ff679" size="20px" />} />
				</div>
			</div>
		</div>
	)
}
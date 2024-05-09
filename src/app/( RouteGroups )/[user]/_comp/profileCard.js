import css from './profileCard.module.css'
import Image from "next/image";
import profile_pic from '/public/imgs/profile_picture.jpeg'
import Button from "@/app/_comp/button/button";
import {Plus_Fas} from "iconview/svgs/Plus_Fas";
import {Pen_Fas} from "iconview/svgs/Pen_Fas";
import {Chevron_Down_Fas} from "iconview/svgs/Chevron_Down_Fas";
import {Ellipsis_Fas} from "iconview/svgs/Ellipsis_Fas";

export default function ProfileCard(){
	
	return(
		<section className={css.profile_card}>
			
			<div className={css.profile_flex}>
				
				<div className={css.user_info}>
					
					<div className={css.user_img}>
						<Image src={profile_pic} alt="Profile Picture" />
					</div>
					
					<div className={css.user_name}>
						<h3 >Nazmul Hossain</h3>
						<span>279 friends • 461 following</span>
					</div>
					
				</div>
				
				<div className={css.user_info_btn}>
					<Button primary title={"Add to story"} icon={<Plus_Fas />} />
					<Button second title={"Edit profile"} icon={<Pen_Fas />} />
					<Button second icon={<Chevron_Down_Fas />} />
				</div>
				
			</div>
			
			<br/> <hr/>
			
			<div className={css.links_flex}>
				
				<div className={css.user_links}>
					<Button isActive link title={"Posts"}  />
					<Button link title={"About"}  />
					<Button link title={"Friends"}  />
					<Button link title={"Photos"}  />
					<Button link title={"Videos"}  />
					<Button link title={"Check-ins"}  />
					<Button link title={"More"}  />
				</div>
				
				<div className={css.user_opt_btn}>
					<Button second icon={<Ellipsis_Fas />}  />
				</div>
			
			</div>
		
		</section>
	)
}
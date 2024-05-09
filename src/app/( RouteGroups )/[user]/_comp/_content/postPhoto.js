import css from './post_videos.module.css'
import PostTitle from "@/app/( RouteGroups )/[user]/_comp/_content/postTitle/postTitle";
import PostBottom from "@/app/( RouteGroups )/[user]/_comp/_content/postBottom/postBottom";
import Image from "next/image";
import istanbul from '/public/imgs/cover.jpeg'

export default function PostPhoto(){
	return(
		<div className={css.post_container}>
			<div className={css.post_flex}>
				
				<PostTitle />
				
				<span>Hello This is an simple Images</span>
				
				<div className={css.post_img}>
					<Image src={istanbul} alt="istanbul image" width="100%" />
				</div>
				
				<PostBottom />
			</div>
		</div>
	)
}
import css from './post_videos.module.css'
import PostTitle from "@/app/( RouteGroups )/[user]/_comp/_content/postTitle/postTitle";
import PostBottom from "@/app/( RouteGroups )/[user]/_comp/_content/postBottom/postBottom";

export default function PostVideos(){
	return(
		<div className={css.post_container}>
			<div className={css.post_flex}>
				
				<PostTitle />
				<span>Hello World</span>
				<PostBottom />
			</div>
		</div>
	)
}
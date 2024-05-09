import PostContent from "@/app/( RouteGroups )/[user]/_comp/_content/postContent";
import PostVideos from "@/app/( RouteGroups )/[user]/_comp/_content/postVideos";
import PostPhoto from "@/app/( RouteGroups )/[user]/_comp/_content/postPhoto";


export default function ProfileContent(){
	return(
		<div>
			<PostContent/>
			<PostVideos />
			<PostPhoto />
		</div>
	)
}
import Profile_intro from "@/app/( RouteGroups )/[user]/_comp/_profile_comp/profile_intro";
import ProfilePhotos from "@/app/( RouteGroups )/[user]/_comp/_profile_comp/profile_photos";

export default function ProfileSidebar(){
	return(
		<div>
			<Profile_intro/>
			<ProfilePhotos/>
		</div>
	)
}
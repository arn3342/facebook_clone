import Cover from "./_comp/cover";
import css from './page.module.css'
import ProfileCard from "./_comp/profileCard";
import ProfileSidebar from "@/app/( RouteGroups )/[user]/_comp/profileSidebar";
import ProfileContent from "@/app/( RouteGroups )/[user]/_comp/_content/profileContent";

export default function ProfilePage(){

	return(
		<section>
			<div className={css.profile_container}>
				<div className={css.profile_area}>
					<Cover/>
					<ProfileCard/>
				</div>
			</div>
			
			<div className={css.profile_body_container}>
				<div className={css.profile_body}>
					
					<div className={css.short_area}>
						<div className={css.profile_sidebar}>
							<ProfileSidebar />
						</div>
						
						<div className={css.profile_content}>
							<ProfileContent/>
						</div>
					</div>
					
				</div>
			</div>
			
		</section>
	)
}
import css from './profile_intro.module.css'
import Button from "@/app/_comp/button/button";
import {Briefcase_Fas} from "iconview/svgs/Briefcase_Fas";
import Link from "next/link";
import {Location_Dot_Fas} from "iconview/svgs/Location_Dot_Fas";
import {Skype_Bsr} from "iconview/svgs/Skype_Bsr";
import {Globe_Americas_Bsr} from "iconview/svgs/Globe_Americas_Bsr";


export default function Profile_intro(){
	
	const bio_links = [
		{title: "CEO & Founder", org: "Belivup Technology Limited", icon: <Briefcase_Fas /> },
		{title: "Full Stack Software Engineer", org: "Upwork", icon: <Briefcase_Fas /> },
		{title: "UX & UI Designer", org: "Upwork", icon: <Briefcase_Fas /> },
		{title: "Graphics Designer", org: "Upwork", icon: <Briefcase_Fas /> },
		{title: "From", org: "Jessore, Khulna, Bangladesh", icon: <Location_Dot_Fas /> },
	]
	
	const bio_social = [
		{title: "nhronju", icon: <Skype_Bsr /> },
		{title: "Belivup.com", icon: <Globe_Americas_Bsr /> },
		{title: "design24hr.com", icon: <Globe_Americas_Bsr /> },
		{title: "dev.nazmul.co", icon: <Globe_Americas_Bsr /> }
	]
	
	const bioLink = bio_links.map((bio, index) => {
		return <div key={index} className={css.bio_links}>
			{bio.icon}
			<span>{bio.title} at <Link className={css.bio_link} href={'#'}> {bio.org} </Link> </span>
		</div>
	})
	
	const bio_social_link = bio_social.map((bio, index) => {
		return <div key={index} className={css.bio_links}>
			{bio.icon}
			<span><Link className={`${css.bio_link} ${css.bio_web_link}`} href={'#'}> {bio.title} </Link> </span>
		</div>
	})
	
	return(
		<div className={css.intro_container}>
			<div className={css.intro_flex}>
				<span className="mini_title">Intro</span>
				<span className={css.sub_title}>احب الله اكثر من كل شئ</span>
				<Button second title="Edit bio" />
				
				{bioLink}
				
				<div className={css.bio_links}>
					<Location_Dot_Fas />
					<span>Followed by 184 people</span>
				</div>
				
				{bio_social_link}
				
				<Button second title="Edit details" />
				<Button second title="Add hobies" />
				<Button second title="Add featured" />
			</div>
		</div>
	)
}
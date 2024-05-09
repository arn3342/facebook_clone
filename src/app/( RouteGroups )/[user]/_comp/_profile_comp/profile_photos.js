import css from './profile_photos.module.css'
import profile_pic from '/public/imgs/profile_picture.jpeg'
import istanbul from '/public/imgs/cover.jpeg'
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/_comp/button/button";

export default function ProfilePhotos(){
	
	const photoLists = [
		{title: "CEO & Founder", src: profile_pic },
		{title: "CEO & Founder", src: istanbul },
		{title: "CEO & Founder", src: profile_pic },
		{title: "CEO & Founder", src: istanbul },
		{title: "CEO & Founder", src: profile_pic },
	
	]
	
	
	const photoList = photoLists.map((photo, index) => {
		return <Image key={index} src={photo.src}  alt={photo.title} />
	})
	

	
	return(
		<div className={css.photos_container}>
			<div className={css.photos_flex}>
				
				<div className={css.title_flex}>
					<span className="mini_title">Photos</span>
					<Button link title="show all photos" href={"#"}/>
				</div>
				<div className={css.photo_grid} >
					{photoList}
				</div>
			
			</div>
		</div>
	)
}
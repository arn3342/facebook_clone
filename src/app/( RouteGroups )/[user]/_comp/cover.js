import Image from "next/image";
import css from './cover.module.css'
import coverImage from '/public/imgs/cover.jpeg'

export default function Cover(){
	return(
		<section>
			<div className={css.image_container}>
				<Image className={css.cover_img} src={coverImage} alt="Cover Image" />
			</div>
		</section>
	)
}
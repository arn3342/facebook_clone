import css from './postBottom.module.css'
import Button from "@/app/_comp/button/button";
import {Thumbs_Up_Fad} from "iconview/svgs/Thumbs_Up_Fad";
import {Comment_Captions_Fad} from "iconview/svgs/Comment_Captions_Fad";
import {Share_Fad} from "iconview/svgs/Share_Fad";
import {Face_Grin_Fad} from "iconview/svgs/Face_Grin_Fad";
import {Heart_Fad} from "iconview/svgs/Heart_Fad";
import {Face_Tired_Fad} from "iconview/svgs/Face_Tired_Fad";
import {Face_Flushed_Fad} from "iconview/svgs/Face_Flushed_Fad";


export default function PostBottom(){
	return(
		<>
			<div className={css.button_flex}>
				
				<Button link title="Live" icon={<Thumbs_Up_Fad color="#3bde32" size="20px" />} />
				<div className={css.likeShow}>
					<Button link icon={<Thumbs_Up_Fad color="black" size="20px" />} />
					<Button link icon={<Face_Grin_Fad color="black" size="20px" />} />
					<Button link icon={<Heart_Fad color="black" size="20px" />} />
					<Button link icon={<Face_Tired_Fad color="black" size="20px" />} />
					<Button link icon={<Face_Flushed_Fad color="black" size="20px" />} />
				</div>
				<Button link title="Comments" icon={<Comment_Captions_Fad color="#097aff" size="20px" />} />
				<Button link title="Share" icon={<Share_Fad color="#0ff679" size="20px" />} />
				
				
				
			</div>
		</>
	)
}
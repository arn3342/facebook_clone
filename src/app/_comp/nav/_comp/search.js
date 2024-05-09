import css from './search.module.css'
import {Magnifying_Glass_Fas} from "iconview/svgs/Magnifying_Glass_Fas";

export default function Search(){
	
	return(
		<div className={css.search_container}>
			<input type="text" placeholder="Search Facebook" className={css.search_input} />
			<Magnifying_Glass_Fas size="14px" color={"#b0b3b8"} className={css.search_icon} />
		</div>
	)
}
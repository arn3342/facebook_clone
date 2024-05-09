import css from './button.module.css'

export default function Button({title,icon, isActive, primary, second, link, className, ...rest}){
	return(
		<button {...rest} className={` ${css.main_btn} ${className} ${primary? css.primary_btn : second? css.second_btn : link? css.btn_link : "" } ${isActive? css.btn_link_active : ''}`}>
			{icon}{title}
		</button>
	)
}
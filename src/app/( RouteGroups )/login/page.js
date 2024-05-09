import LoginForm from "./_comp/login";
import css from './loginPage.module.css'

import Image from "next/image";
import fb_Logo from '/public/facebook.svg'

export const metadata = {
	title: 'Facebook – log in or sign up',
	description: 'Facebook – log in or sign up',
}



export default function Login(){
	
	return(
		<>
			<section className={css.main_section}>
				<div className={css.grid_container}>
					<div className={css.left_text}>
						<Image className={css.logo} src={fb_Logo} alt="Facebook Logo" />
						<h4>Connect with friends and the world around you on Facebook.</h4>
					</div>
					
					<div>
						<LoginForm />
					</div>
				</div>
			</section>
		</>
	)
}
import Main_Logo from "./_comp/Main_Logo";
import css from './nav.module.css'
import Search from "./_comp/search";
import NavLinks from "./_comp/nav_links";
import Menu_links from "@/app/_comp/nav/_comp/menu_links";

export default function NavBar(){
	return(
		<section className={css.nav_fixed}>
			<header className={css.nav_area}>
				
				<div className={css.logo_search}>
					<Main_Logo/>
					<Search/>
				</div>
				
				<div className={css.nav_container}>
					<NavLinks />
				</div>
				
				<div className={css.menu_container}>
					<Menu_links/>
				</div>
				
			</header>
		</section>
	)
}
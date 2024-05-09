

import css from './sidebar.module.css'
import Sponsor from "@/app/_home/sponsor";
import ChatsSidebar from "@/app/_home/chats_sidebar";


export default function RightSidebar(){
	
	
	return(
		<div className={css.sidebar_container}>
			<Sponsor />
			<ChatsSidebar />
		</div>
	)
}


'use client'

import {Facebook_Fab} from "iconview/svgs/Facebook_Fab";
import { useRouter } from 'next/navigation'


export default function (){
	
	const router = useRouter()
	
	return(
		<Facebook_Fab className={"main_logo"} color="#1366ff" size="40px" onClick={() => router.push("/")} />
	)
}
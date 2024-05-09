'use client'

import css from './login.module.css'
import Link from "next/link";
import {useState} from "react";
import {Eye_Fas} from "iconview/svgs/Eye_Fas";
import {Eye_Slash_Fas} from "iconview/svgs/Eye_Slash_Fas";
import {useRouter} from "next/navigation";



export default function LoginForm(){
	
	const router = useRouter()
	
	const [data, setData] = useState({email: "", password: ""})
	const [emptyErr, setEmptyErr] = useState({ email:false, password: false })
	const [showPass, setShowPass] = useState(false)
	
	const showErr = { border: "1px solid red" }
	const icon = showPass? <Eye_Fas className={css.showPass} onClick={ () => setShowPass(!showPass)} /> : <Eye_Slash_Fas size="17px" className={css.showPass} onClick={() => setShowPass(!showPass)} />
	
	
	function handleData(e){
		
		setEmptyErr({ email: false, password: false })
		
		setData({
			...data, [e.target.name] : e.target.value
		})
	}
	
	function handleLogin(e){
		
		e.preventDefault()
		
		let emailErr  = !data.email
		let passwordErr = !data.password
		
		setEmptyErr({email: emailErr, password: passwordErr})
		
		if (!emailErr && !passwordErr){
			router.push("/nazmul")
		}
		
	}
	
	return(
		<div className={css.form_container}>
			<form className={css.form} action="" onSubmit={handleLogin} >
				<input name="email" style={emptyErr.email? showErr : {} }  onChange={handleData} type="email" placeholder="Email or phone number" value={data.email}/>
				<div className={css.password_input}>
					<input name="password" style={emptyErr.password? showErr : {} }  onChange={handleData} type={showPass? 'text' : 'password'} placeholder="Password" value={data.password}/>
					{icon}
				</div>
				<input type="submit" value="Log in" className={css.login_btn} />
				
				<Link className={css.forgetPass} href={"/"} > Forget Password </Link>
				<hr className={css.login_hr}/>
				
				<button className={css.create_account}> Create an Account </button>
			
			</form>
		</div>
	)
}
import logo from "../assets/img/flame-118 max.png"
const Login=()=>{
    return (
<div className="body_login">      
  <div className="login_container" id="login_container">
	<div className="form-container sign-up-container">
		<div className="form">
			<h1>Create Account</h1>
			<div className="social-container">
				    <a href="https://github.com/login" className="social"><img src="https://img.icons8.com/ios-filled/50/null/github.png"/></a>
					<a href="https://shorturl.at/otvA5" className="social"><img src="https://img.icons8.com/color/48/null/google-logo.png"/></a>
					<a href="https://www.linkedin.com/login" className="social"><img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png"/></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</div>
	</div>
	<div className="form-container sign-in-container">
		<div className="form">
			<h1>Sign in</h1>
			<div className="social-container">
                    <a href="https://github.com/login" className="social"><img src="https://img.icons8.com/ios-filled/50/null/github.png"/></a>
					<a href="https://shorturl.at/otvA5" className="social"><img src="https://img.icons8.com/color/48/null/google-logo.png"/></a>
					<a href="https://www.linkedin.com/login" className="social"><img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png"/></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</div>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={() => {
                    const container = document.getElementById('login_container');
                    container.classList.remove("right-panel-active");}}>Sign In
                </button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Namaste!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={() => {
                    const container = document.getElementById('login_container');
                    container.classList.add("right-panel-active");}}>Sign Up
                </button>
			</div>
		</div>
	</div>
  </div> 
  <div className="icon_login">
  <img src={logo}></img>
  </div>
</div>)
}
export default Login;
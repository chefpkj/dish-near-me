import icon from "../assets/img/contactUs max.png"
const Login=()=>{
    return (
        <>  
            <div className="login_body">

            
            <div className="contact_container" id="login_container">
                <div className="form">
		      	<h1>Contact Us</h1>
		     	<input type="email" id="email"
       pattern=".+@globex\.com" size="30" required="true" placeholder="Enter your Name" />
			    <input type="password" placeholder="Enter a valid email address" />
			    <textarea type="text"></textarea>
                <button>Submit</button>
                </div>
            </div>  
            <div className="contact_icon">
            <img src={icon} />
            </div>
            
            </div>
           
        </>
        );
}
export default Login
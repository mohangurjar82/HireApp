const Header = (props) => {
	userSignout = () => {
	    fetch('http://localhost:3000/user_logout', {
	      method: 'GET',
	    }).then((response) => {return response.json()})
	    .then((res)=>{
	    	console.log(res)
	    })
	}

    return(
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		    <div class="navbar-header">
		      <a href="/"><img className="imgStyle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgIVv0XVxtZYUlmmylD1f9-Ld0dmA6ntgrsUf28idtZgrUVC2" alt="logo"/></a>
		    </div>
		    <ul class="navbar-nav mr-auto">
		      <li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
		      <li class="nav-item active"><a class="nav-link" href="/marketing/career_managment">Career Managment</a></li>
		      <li class="nav-item active"><a class="nav-link" href="/marketing/social_recruitment">Social Recruitment</a></li>
		      <li class="nav-item active"><a class="nav-link" href="/marketing/project_solution">Project Solution</a></li>
		      <li class="nav-item active"><a class="nav-link" href="#" onClick={this.userSignout.bind(this)}>Signout</a></li>
		    </ul>
		  </div>
		</nav>

    )
}

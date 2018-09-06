class PreRegistration extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email: "",
      phone: "",
      errors: {},
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  
  onChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  isValid(data) {
    let errors = {};
    if (!data.email) {
      errors.email = "enter your email."
    }
    if (!data.phone) {
      errors.phone = "enter your phone."
    }

    this.setState({errors: errors})

    return errors ? true : false
  }

  onSubmit() {
    if (this.isValid(this.state)) {
      const { email, phone } = this.state;
      let body = JSON.stringify({data: {email: email, phone: phone} })

      fetch('http://localhost:3000/pre_registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body,
      }).then((response) => {

      })
    }
  }

  render(){
    const {errors} = this.state;
    const { pre_registration } = this.props;

    markup = ""

    if (pre_registration) {
      return(
        <div className="container">
          <h3>Already PreRegistered</h3>
          <p>Id : {pre_registration.id}</p>
          <p>Email : {pre_registration.email}</p>
          <p>Phone : {pre_registration.phone}</p>
          <p>CallTime : {pre_registration.goodTimeToCall}</p>
        </div>
      )
    } else {
      return(
      <div className="container">
        <h2>Pre Registraion form</h2>
        <form action="#" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"  onChange={this.onChange}/>
            <span>{ errors.email }</span>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Phone:</label>
            <input type="text" class="form-control" id="phone" placeholder="Enter Phone Number" name="phone" onChange={this.onChange}/>
            <span>{ errors.phone }</span>
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
      )
    }

    return(
      {markup}
    )      
  }
}

import React, {Component} from "react";

class ContactMe extends Component {
    
    constructor(props) {
        super(props);

        this.state = {name: "", email: "", message: ""};
    }
    
    handleChange = event => {
        event.preventDefault();
        if(event.target.id == "name") {
            this.state.name = event.target.value;
        }

        else if (event.target.id == "email") {
            this.state.email = event.target.value;
        }

        else if (event.target.id == "message") {
            this.state.message = event.target.value;
        }

    }

    submitForm = (event) => {
        alert("Hello " + this.state.name + ", your message was sent successfully!" );
        
    }

    render(){
    
    return(
        <div>
        
            <div>
            <h1> Contact Information: </h1>
            <h3> Email: bryansantos9797@gmail.com </h3>
            </div>

            <form id = "msg">
                <h4> Name: </h4>
                <input type = "text" id = "name" onChange = {this.handleChange}/>

                <br/>

                <h4> Email: </h4>
                <input type = "text" id = "email" onChange = {this.handleChange}/>

                <br/>

                <h4> Short Message: </h4>
                <input type = "text" id = "message" onChange = {this.handleChange}
                />
                
                <br/>
                
                <button onClick = {this.submitForm} style = {{height:55,width:70, marginTop:50}}> Submit </button>

            </form>
        


        </div>

    );
    }
}

export default ContactMe
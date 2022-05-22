import React from "react";

class ErrorBound extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasErr : false
        }
    }
    
    componentDidCatch(err, info){
        this.setState({hasErr : true})
    }
    render(){
        if (this.state.hasErr){
            return <h1>Ooops...!!!! not nice !</h1>
        }
        return this.props.children
    }
        
    
}
export default ErrorBound
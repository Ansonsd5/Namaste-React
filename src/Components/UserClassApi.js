import React from 'react'

class UserClassApi extends React.Component{
constructor(props){
    super(props)
}

componentDidMount(){
    console.log("Child did mount");
}

render(){
    return <h1>Api Call in classComponent</h1>
}

}

export default UserClassApi;
import React from 'react'

class UserClassApi extends React.Component{
    constructor(props) {
    super(props)
}

// async componentDidMount(){
//     const data = await fetch("https://api.github.com/users/Ansonsd5");
//     const jsonData =await data.json();
//     console.log(jsonData);
// }
async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ansonsd5")
    
    console.log(data);
}
render(){
    return (<h1>Api Call in classComponent</h1>)
}

}

export default UserClassApi;
import React, { Component } from "react";

class UserList extends Component{
render(){
  
const {usersWhoLikedMovie, users} = this.props;
  
  if(!usersWhoLikedMovie || usersWhoLikedMovie ==='0' )
    return <p>None of the current users liked this movie.</p>;
  
  const listofItems = usersWhoLikedMovie.map(id=>(
    <li key = {id}>
        {users[id].name}                          
    </li>
  ));

  return <ul>{listofItems}</ul>;

	}
}

export default UserList;
import React, {Component} from "react";
import MovieCard from './MovieCard'




class Dashboard extends Component{
render(){

	const {usersByMovies, movies, users}= this.props;
  
  	const movieCards= Object.keys(movies).map(id =>(
    <MovieCard
      key={id}
      users={users}
      usersWhoLikedMovie={usersByMovies[id]}
      movieInfo={movies[id]}                            
      />
    ));

return <ul>{movieCards}</ul>;
}
}

export default Dashboard;
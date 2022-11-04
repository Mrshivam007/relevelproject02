import {Link} from 'react-router-dom';
const Movies = () => {
    return ( 
        <>
        <div class="card" style={{width: "18rem", marginLeft: "10vh",marginTop: "8vh"}}>
  <img src="movie1.jpg" class="card-img-top"/>
  <Link to="/ticket"><h5 class="card-title">The Forever Purge</h5></Link>
  <div class="card-body">
    <p class="card-text">Action/Horror/Thriller</p>
  </div>
</div>
        <div class="card" style={{width: "18rem", marginLeft: "60vh",marginTop: "-76vh"}}>
  <img src="movie2.jpg" class="card-img-top" alt="..."/>
  <Link to="/ticket"><h5 class="card-title">Reminiscencia</h5></Link>
  <div class="card-body">
    <p class="card-text">Mystry/Romantic/Sci-Fi</p>
  </div>
</div>
        </>
     );
}
 
export default Movies;
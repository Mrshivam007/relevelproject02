import {Link} from 'react-router-dom';
const Home = () => {
    return ( 
        <div>
            <div class="alert alert-light" role="alert" style={{borderColor: "black", margin: "20px", textAlign: "initial"}}>
        
        <h2 style={{color: "black", fontWeight: "bold"}}>Now Showing </h2>
        <Link to="/movies"><h4 style={{color: "red", textAlign: "end", marginTop: "-7vh"}}>In Cinemas near you - </h4> </Link>                                                                                              
      </div>
          
        </div>
     );
}
 
export default Home;
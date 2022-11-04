const Header = () => {
    return ( 
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mbook</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <input class="form-control me-2" type="search " placeholder="Search for Movies, Events, Plays, Sports and Activity" aria-label="Search "style={{paddingRight: "70vh", paddingLeft: "6vh"}} />
        <p style={{color: "white", paddingLeft: "71vh"}}>Mumbai</p>
        <img src='profile.png' style={{height: "5vh", paddingLeft: "6vh"}}></img>
        <p style={{color: "white", width: "-webkit-fill-available"}}>Hi, Abhisek</p>
       
      </ul>
      
    </div>
  </div>
</nav>
        </div>
     );
}
 
export default Header;

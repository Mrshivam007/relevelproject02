const Ticket = () => {
    return ( 
        <>
        <h2 style={{textAlign: "initial"}}>Choose No. of Seats:</h2>
        <form class="d-flex" role="search" style={{width: "30rem"}}>
        <input class="form-control me-2" type="search" placeholder="Select number of seats" aria-label="Search" />
        <button class="btn btn-outline-danger" type="submit">Reset</button>
      </form>
        </>
     );
}
 
export default Ticket;
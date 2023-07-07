import '../Style/style.css'
const Header = () => {
    return ( 
    <div id='top'>
   <header>
        <div class="logo">
           
        </div>
        <nav class="navbar">
            <ul>
                <li><a href="#Home" class="active">Home</a></li>
                <li><a href="#About">Packages</a></li>
                <li><a href="#Teacher">About Us</a></li>
                <li><a href="#Review">Contact</a></li>
                <li><a href="#Review">Reviews</a></li>
            <button className='bookbtn'>Book Now</button>
            </ul>
          
        </nav>
        <div class="fas fa-bars"></div>
    </header>
   


    </div>
     );
}
 
export default Header;
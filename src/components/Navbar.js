import React from 'react'
import Select from 'react-select';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import '../sidenav.css';
import ReactFlagsSelect from "react-flags-select";
const Navbar = () => {
      const locationPath=decodeURI(useLocation().pathname).substring(9,11).toUpperCase();
      // console.log(locationPath);
 const [selected, setSelected] = useState(locationPath);
 const [search,setSearch]=useState("entertainment");

 const Navigate=useNavigate();
 const openNav=()=>{
      document.querySelector('.sidenav').style.width="250px";
}
const closeNav=()=>{
      document.querySelector('.sidenav').style.width="0px";

} 
 const changeCountry=(code)=>{
      //  console.log(code);
       setSelected(code);
      //  console.log('clicked');
      // $('.flag').attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png");
      
      setTimeout(()=>{
            Navigate(`/country/${code.toLowerCase()}`);
      },2500)
 }
  return (
     <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
       <div className="container-fluid">
           <a href="#" className="navbar-brand">𝔹𝕦𝕫𝕫ℕ𝕖𝕨𝕤</a>
           <div className="collapse navbar-collapse">
                 <ul className="navbar-nav">
                       <li className="nav-item"><a href={`/country/${selected.toLowerCase()}`} className="nav-link">Home</a></li>
                       <div className="dropdown nav-item">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                              </a>
                              <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/category/headlines">General</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/category/movie">Movies</a></li>
                                    <li><a className="dropdown-item" href="/category/football">Football</a></li>
                                    <li><a className="dropdown-item" href="/category/technology">Technology</a></li>
                                    <li><a className="dropdown-item" href="/category/science">Science</a></li>
                                    <li><a className="dropdown-item" href="/category/sports">Sports</a></li>
                                    <li><a className="dropdown-item" href="/category/business">Business</a></li>
                                    <li><a className="dropdown-item" href="/category/health">Health</a></li>
                                    <li><a className="dropdown-item" href="/category/weather">Weather</a></li>
                                    <li><a className="dropdown-item" href="/category/bbc">BBC</a></li>
                                    <li><a className="dropdown-item" href="/category/new york">New York Times</a></li>
                              </ul>
                            
                       </div>
                       
                 </ul>
           {/* <li className='countrySelector' style={{float:'right',cursor:'pointer'}}>
                            <img onClick={changeCountry} className="flag" style={{width:23}} src="https://images.emojiterra.com/twitter/v13.1/512px/1f1ee-1f1f3.png"/>
            </li> */}
                <div className="search ms-auto">
                        <input type="text" className='form-control' id='search' placeholder='Search here' onChange={(e)=>setSearch(e.target.value)} onKeyPress={(e)=>e.key=="Enter"?Navigate(`/category/${search}`):''} />
                </div>
           </div>
           <ReactFlagsSelect
                              className='me-auto'
                              id='country'
                              countries={["AR","AU","BR","CA","CN","EG","FR","DE","HK","IN","IL","IT","JP","KR","MY","MX","NZ","NG","SA","LK","SG","ZA","ES","UA","GB","US"]}
                              value={selected}
                              selected={selected}
                              onSelect={changeCountry}
                              searchPlaceholder="Select countries"
             />;

           <div className='sidebar mx-3'>
                  <span style={{fontSize:30,cursor:'pointer',color:'white'}} onClick={openNav}>&#9776;</span>
                  <div className="sidenav">
                        <a href="#" className='closebtn' onClick={closeNav}>&times;</a>
                        <br />
                        <li className="nav-item"><a href={`/country/${selected.toLowerCase()}`} className="nav-link">Home</a></li>
                       <div className="dropdown nav-item">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                              </a>
                              <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="/category/headlines">General</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/category/movie">Movies</a></li>
                                    <li><a className="dropdown-item" href="/category/football">Football</a></li>
                                    <li><a className="dropdown-item" href="/category/technology">Technology</a></li>
                                    <li><a className="dropdown-item" href="/category/science">Science</a></li>
                                    <li><a className="dropdown-item" href="/category/sports">Sports</a></li>
                                    <li><a className="dropdown-item" href="/category/business">Business</a></li>
                                    <li><a className="dropdown-item" href="/category/health">Health</a></li>
                                    <li><a className="dropdown-item" href="/category/weather">Weather</a></li>
                                    <li><a className="dropdown-item" href="/category/bbc">BBC</a></li>
                                    <li><a className="dropdown-item" href="/category/new york">New York Times</a></li>
                              </ul>

                       </div>
                       <br />
                       <div className="search ms-auto">
                        <input type="text" className='form-control' id='search' placeholder='' onChange={(e)=>setSearch(e.target.value)} style={{height:50,width:200,marginLeft:30}} />
                        <br />
                        <button className='btn btn-outline-light' style={{height:50,marginLeft:30}} onClick={(e)=>Navigate(`/category/${search}`)} >SEARCH</button>
                       </div>
                  </div>
            </div> 
       </div>
     </nav>
  )
}

export default Navbar
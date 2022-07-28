import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import Navbar from './Cnavbar';
// import JSDOM from 'react-jsdom'
// const { Readability } = require('@mozilla/readability');

const Cnews = () => {
      // console.log('cnav')
      const path=decodeURI(useLocation().pathname);
      const pathname=path.substring(path.lastIndexOf("2022"));
      console.log(pathname);
      const code=decodeURI(useLocation().pathname);
      const cat=code.substring(code.lastIndexOf("ry")+3,code.lastIndexOf("/"));
      console.log(cat)
    const [data,setData]=useState([]);
    useEffect(()=>{
          axios.get(`https://news-app-serverside.herokuapp.com/api/category/${cat}`)
               .then(res=>res.data.articles.map((a)=>a.publishedAt==pathname?setData(a):''))
            
            },[code])
     
  return (
    <div className='news-section'>
          <Navbar />
          <br />
         {data!==null?
          <div className="container" style={{border:'1px solid #949191',borderRadius:'6px'}}>
          <h3 onLoad={()=>console.log('loaded')} className='title'>{data.title}</h3>
          <span className='pa' style={{fontSize:'13px',fontWeight:'bold'}}>Published at {pathname.substring(0,10)}, {pathname.substring(11,16)} by {data.author==""?'Uknown':data.author}</span><br />
          <img  className="img" style={{width:'100%',cursor:'pointer'}} src={data.urlToImage} alt="" />
          <span className='desc' style={{fontSize:12}}>{data.description}</span><br /><hr />
          <span className='content' style={{}}>{data.content} <a href={data.url}>Read More.</a> </span>
      </div>
      :'no' 
        }
    </div>
  )
}

export default Cnews
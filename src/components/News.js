import React from 'react'

import axios from 'axios'
import { useState,useEffect } from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


import '../preloader.css'

const News = () => {
 //getting country code by route
 const Navigate=useNavigate();
 let locationPath=decodeURI(useLocation().pathname).substring(9).toUpperCase();
      // console.log(locationPath);
if(locationPath==":ID")
   {
         locationPath="IN"
   }
  const [data,setData]=useState([]);
//  const loadingProblem=()=>{
//        Navigate('/country/in')
//  }
  useEffect(()=>{
        
//   axios.get(`https://newsapi.org/v2/top-headlines?country=${locationPath.toLowerCase()}&apiKey=7b6a254dc14a40b090044ba88edad736`)
//   .then(response=>setData(response.data.articles));
 
  axios.get(`https://news-app-serverside.herokuapp.com/api/country/${locationPath.toLowerCase()}`)
  .then(response=>setData(response.data.articles));
 
  },[locationPath])
 
  return (
        <main className='news'>
                  <div className="container">
                  {/* <div className="row"> */}
                  <ResponsiveMasonry columnsCountBreakPoints={{100:1,340:2,768:3}}>
                  <Masonry>
                  
                        {data==""?
                         <div className="main-circle">
                               <div className="circle"></div>
                                {/* <div className="center" style={{margin:'auto',textAlign:'center',marginTop:'55vh'}}>
                                  <span style={{color:'red',cursor:'pointer',fontSize:'11px'}} onClick={loadingProblem}>Doesn't Load?</span>
                                </div> */}
                         </div>
                        :data.map(singleData=>{
                          return <div className="py-2 px-1" key={Math.random()}>
                                <div className="card img-fluid" style={{width:'100%'}}>
                                    <img src={singleData.urlToImage} className="card-img-top" alt="..." style={{width:'100%',cursor:'pointer'}} />
                                    <div className="card-body">
                                          <h5 className="card-title">{singleData.title}</h5>
                                          <span style={{fontSize:'10px'}}>Published at {singleData.publishedAt.substring(0,10)}, {singleData.publishedAt.substring(11,16)} by {singleData.author==""?'Uknown':singleData.author} <span style={{backgroundColor:'#666464',color:'#fff',padding:4,cursor:'pointer',borderRadius:2}}>{singleData.source.name}</span> </span><br />
                                          <span className='card-desc'>{singleData.description}</span><br />
                                          <a href={`/country/${locationPath}/headlines/${singleData.publishedAt}`} className="btn btn-primary">Read More..</a>
                                    </div>
                                    </div>
                          </div>
                        }
                        )}
                  </Masonry>
                  </ResponsiveMasonry>
                  {/* </div> */}
                  </div>
        </main>
  )
}

export default News
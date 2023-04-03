import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../config/config";
import "./Carousel.css"
const Carousel= ({media_type,id}) => {
  const handleOnDragStart = (e) => e.preventDefault();
  const [credit,setCredit]=useState();
  const fetchCredits=async()=>{
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    setCredit(data.cast);
   // console.log(data);

}
useEffect(()=>{
    fetchCredits();
},[]);
 const responsive = {
   0: {
     items: 3,
   },
   512: {
     items: 5,
   },
   1024: {
     items: 7,
   },
 };
  return (
    <AliceCarousel
      autoPlay
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      mouseTracking
    >
      
     
      {credit &&
        credit?.map((c) => (
          <div className="CarouselItem">
            <img
              src={c?.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
              alt={c?.name}
              onDragStart={handleOnDragStart}
              className="carousel_Img"
            />
            <b className="carousel_Text">{c?.name}</b>
          </div>
        ))}
    </AliceCarousel>
  );
};
export default Carousel

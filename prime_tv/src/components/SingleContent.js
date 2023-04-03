import React from 'react'
import "./SingleContent.css"
import { img_300, unavailable } from '../config/config'
import { Badge } from "@mui/material";
import ConModal from './Modal/ConModal';
const SingleContent = ({id,poster,title,date,media_type,vote_average}) => {
  return (
    <ConModal media_type={media_type} id={id}>
        <Badge badgeContent={vote_average.toFixed(2)} color={vote_average>6 ? "primary":"secondary"} />
        <img className="poster" src={poster?`${img_300}/${poster}`:unavailable} alt={title}/>
        <b className="title">{title}</b>
        <span className="wa">{
            media_type==="tv"?"TV Series":"Movie"}</span>
        <span className="wa">{date}</span>
    </ConModal>
  )
}

export default SingleContent

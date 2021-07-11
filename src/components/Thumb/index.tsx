import React from "react";

import { Image } from "./Thumb.styles";
interface IThumb {
  image?: string,
  movieId: number | string,
  clickable: boolean
}
const Thumb = ({image, movieId, clickable}:IThumb) => (
  <div>
    <Image src={image} alt='movie-thumb'/>
  </div>
)

export default Thumb
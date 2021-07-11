import React, {useState} from 'react'
import API from '../services/API'
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
// Components
import HeroImage from './HeroImage'
import Grid from './Grid'
import Thumb from './Thumb'
// Hooks
import {useHomeFetch} from '../hooks/useHomeFetch'
// Image
import NoImage from '../images/no_image.jpeg'
import { useEffect } from 'react'

const Home = () => {
  const {state, loading, error}  = useHomeFetch()
  console.log('state :>> ', state);
  return (
      <>
      {state.results[0] &&
        <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0]?.backdrop_path}`} title={state.results[0].original_title} text={state.results[0].overview}/>
      }
      <Grid header='Popular Movies'>
        {state.results.map(movie => (
          <Thumb key={movie.id} clickable image={movie.poster_path ?
            IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
          }
           movieId={movie.id}
          ></Thumb>
        ))}
      </Grid>
      </>
    )
}

export default Home
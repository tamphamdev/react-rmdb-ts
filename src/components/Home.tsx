import React, {useState} from 'react'
import API from '../services/API'
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
// Components
import HeroImage from './HeroImage'
// Hooks
import {useHomeFetch} from '../hooks/useHomeFetch'
// Image
import NoImage from '../../images/no_image.jpeg'
import { useEffect } from 'react'

const Home = () => {
  const {state, loading, error}  = useHomeFetch()
  console.log('state :>> ', state);
  return (
      <>
      {state.results[0] &&
        <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0]?.backdrop_path}`} title={state.results[0].original_title} text={state.results[0].overview}/>
      }
      </>
    )
}

export default Home
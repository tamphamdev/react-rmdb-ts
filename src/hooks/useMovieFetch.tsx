import  {useState, useEffect,useCallback} from 'react'
import API from '../services/API'

export const useMovieFetch = (movieId:string| number) => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const fetchMovie = async () => {
    try {
      setLoading(true)
      setError(false)

      const movie = await API.fetchMovie(movieId)
      const credits = await API.fetchCredits(movieId)

      const directors = credits.crew.filter(
        (member:any) => member.job === 'Director'
      )
      setState({
        ...movie,
        actors: credits.cast,
        directors
      })
      setLoading(false)
    }catch(error) {
      setError(true)
    }
  }

  useEffect(() => {

    fetchMovie()
  },[movieId])

  return {state, loading, error}
}
import API from "../services/API"
import { useState, useEffect } from "react"

interface IState {
  page: number,
  results:any[],
  total_pages: number,
  total_results: number

}
const initialState:IState = {
  page:0,
  results: [],
  total_pages: 0,
  total_results: 0
}

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovies = async ( searchTerm:any = "" ,page:number,) => {
    try {
      setError(false)
      setLoading(true)

      const movies = await API.fetchMovies(searchTerm,page)

      setState(prev => ({
        ...movies,
        results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }))
    } catch(error) {
      setError(true)

    }
    setLoading(false)
  }
  // Initial render
  useEffect(() => {
    fetchMovies("",1)
  },[])

  return {state, loading, error}

}
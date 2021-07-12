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
  const [searchTerm, setSearchTerm]  = useState('')
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  console.log('searchTerm :>> ', searchTerm);
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
  // Initial and search
  useEffect(() => {
    setState(initialState)
    fetchMovies(searchTerm,1)
  },[searchTerm])

  useEffect(() => {
    if(!isLoadingMore) return

    fetchMovies( searchTerm,state.page + 1,)
    setIsLoadingMore(false)

  },[isLoadingMore,searchTerm, state.page])

  return {state, loading, error,searchTerm, setSearchTerm,setIsLoadingMore}

}
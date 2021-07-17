import { type } from 'os'
import { SEARCH_BASE_URL, SESSION_ID_URL, POPULAR_BASE_URL,
API_URL, API_KEY, REQUEST_TOKEN_URL, LOGIN_URL} from '../config'

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}
// Types
export type Movie = {
  backdrop_path: string,
  id: number,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  title: string,
  vote_average: number,
  vote_count: number,
  budget: number,
  runtime: number,
  revenue: number,
  release_date: string,
}

export type Movies =  {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number,
}

export type Cast =  {
 character: string,
 credit_id: string,
 name: string,
 profile_path:string,
}
export type Crew =  {
 job: string,
 name: string,
 credit_id: string,
}

export type Credits =  {
  id: number,
  cast: Cast[],
  crew: Crew[],
}

const apiSetting = {
  fetchMovies: async (searchTerm: string, page: number):Promise<Movies> => {
    const endPoint: string = searchTerm ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`

    return await (await fetch(endPoint)).json()
  },

  fetchMovie: async (movieId: string| number):Promise<Movie> => {
    const endPoint: string = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

    return await (await fetch(endPoint)).json()
  },

  fetchCredits: async (movieId:  number): Promise<Credits> => {
    const creditsEndpoint: string = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`

    return await (await fetch(creditsEndpoint)).json()
  },

  getRequestToken: async ():Promise<string> =>  {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json()
    return reqToken.request_token
  },

  authenticate: async ( requestToken: string, username: string, password : any) => {
    const bodyData  = {
      username,
      password,
      request_token: requestToken
    }

    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json()

    if(data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({request_token :requestToken})
        })
      ).json()

      return sessionId
    }

  },

  rateMovie: async (sessionId:string, movieId: number | string, value: any) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`

    const rating  = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({value})
      })
    ).json()

    return rating
  }
}

export default apiSetting
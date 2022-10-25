import {useEffect} from 'react'
import './App.css';
const API_URL='http://www.omdbapi.com?apikey=272965d2'

function App() {
    const searchMovies=async(title)=>{
      const response=await fetch(`${API_URL}&s=${title}`)
      const data=await response.json();
      console.log(data.Search)
    }
useEffect(()=>{
 searchMovies('spiderman')
},[]);
  return (
    <div>App</div>
  )
}

export default App
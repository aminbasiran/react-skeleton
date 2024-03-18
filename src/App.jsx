import { useState,useEffect } from 'react'
import './App.css'
import Articles from './components/Articles'
import axios from 'axios'
import SkeletonLoader from './components/SkeletonLoader'

function App() {

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data with setTimeout
      setTimeout(async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setArticles(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }

        finally{
          setIsLoading(false)
        }
      }, 2000); // Change the delay time as needed
    };

    fetchData();
  }, []);
    
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div className='flex flex-col gap-4'>
      <h1>React-Skeleton-Loading</h1>
      <h2>The purpose of this SPA is to practice on how to implement skeleton loading and react code splitting.</h2>
      {articles && <Articles articles={articles}/>}
      {isLoading && <SkeletonLoader amount={6}/>}
      
    </div>
  )
}

export default App

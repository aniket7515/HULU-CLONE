
import React from 'react'
import "./Results.css"
import VideoCard from'./VideoCard'
import movies from './movies'
// import axios from './axios'
// import requests from './requests';

function Results() {
    

    // useEffect(() => {
    //     async function fetchData(){
    //         const request=await axios.get(requests.fetchTrending);
    //         setMovies(request.data.results);
    //         return request;

    //     }

    //     fetchData();
    // }, [])

    function createCard(movies) {
        return <VideoCard key={movies.id} image={movies.img} about={movies.about} title={movies.title} likes={movies.likes}/>
    }




    return (
        <div className="results">
            {/* {movies.map((movie)=>{ 
                 <VideoCard movie={movie}/>

            })} */}
            {movies.map(createCard)}
          
              
          
           
            
        </div>
    )
}

export default Results

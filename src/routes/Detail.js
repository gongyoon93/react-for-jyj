import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";

function Detail(){
    const {params} = useParams();
    const [loading,setLoading] = useState(true);
    const [movieDetail,setMovieDetail] = useState({});
    const getMovieDetail = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${params}`)).json();
        setMovieDetail(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovieDetail();
    },[])
    return (
        <div>{loading ? (<h1>loading...</h1>) : (<div>
            <img src={movieDetail.medium_cover_image} alt={movieDetail.title}/>
        <h2>{movieDetail.title}</h2>
        <p>{movieDetail.summary}</p>
        <ul>
          {movieDetail.genres.map((g,index) => <li key={index}>{g}</li>)}
        </ul>
            </div>)
        }</div>
    );
}
export default Detail;  
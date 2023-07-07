import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import Logo from "../assets/dummy.png";

export const MovieDetail = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const movieImage = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Logo;
    const movieDetailUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=21a87642d86308535445f416e659fd49`;
    useEffect(() => {
        async function fetchMovieDetail() {
            const response = await fetch(movieDetailUrl);
            const jsonData = await response.json();
            setMovie(jsonData);
        };
        fetchMovieDetail();
    }, [movieDetailUrl]);
    useTitle(movie.title);
    return (
        <main>
            <section className="flex justify-around flex-wrap py-5 max-sm:px-5">
                <div className="max-w-sm">
                    <img src={movieImage} alt="movie" className="rounded border-black dark:border-white border-4" />
                </div>
                <div className="max-w-2xl text-gray-700 text-md sm:text-lg dark:text-white py-2 max-sm:py-4">
                    <h1 className="font-bold text-3xl sm:text-4xl lg:text-left">{movie.title}</h1>
                    <p className="my-4">{movie.overview}</p>
                    <p className="my-7 flex flex-wrap gap-2">
                        {movie?.genres && movie.genres.map((movie) => (
                            <span key={movie.id} className="mr-2 border border-black rounded dark:border-gray-600 p-2">{movie.name}</span>
                        ))}
                    </p>
                    <div className="flex items-center my-3">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-gray-900 dark:text-white">{movie.vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className="text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
                    </div>
                    <p className="my-4">
                        <span className="font-bold">Runtime: </span>
                        <span>{movie.runtime} min.</span>
                    </p>
                    <p className="my-4">
                        <span className="font-bold">Budget: </span>
                        <span>{movie.budget}</span>
                    </p>
                    <p className="my-4">
                        <span className="font-bold">Revenue: </span>
                        <span>{movie.revenue}</span>
                    </p>
                    <p className="my-4">
                        <span className="font-bold">Release Date: </span>
                        <span>{movie.release_date}</span>
                    </p>
                    <p className="my-4">
                        <span className="font-bold">IMDB Code: </span>
                        <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
                    </p>
                </div>
            </section>
        </main>
    )
}
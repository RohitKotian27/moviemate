import { Link } from 'react-router-dom';
import Logo from '../assets/dummy.png';

export const MovieCard = ({ movie }) => {
    const movieImage = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Logo;
    return (
        <div className="max-w-xss sm:max-w-xs bg-white dark:bg-slate-800 m-3">
            <Link to={`/movie/${movie.id}`}>
                <img className="border-4 dark:border-white border-gray-800 rounded-sm" src={movieImage} alt="" />
            </Link>
            <div className="py-2 px-1">
                <Link to={`/movie/${movie.id}`}>
                    <h5 className="mb-2 text-md sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                </Link>
            </div>
        </div>
    )
}
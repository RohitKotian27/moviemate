import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, PageNotFound, Search } from '../pages';

export const AllRoutes = () => {
    return (
        <div className='dark:bg-slate-800'>
            <Routes>
                <Route exact path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
                <Route exact path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
                <Route exact path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
                <Route exact path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
                <Route exact path="movie/:id" element={<MovieDetail />} />
                <Route exact path="search" element={<Search apiPath="search/movie" />} />
                <Route exact path="*" element={<PageNotFound title="Page not found"/>} />
            </Routes>
        </div>
    )
}
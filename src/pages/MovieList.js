import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({apiPath, title}) => {
    const movieList = useFetch(apiPath);
    useTitle(title);
    return (
        <main>
            <section className="py-3 sm:py-7">
                <div className="flex justify-center flex-wrap">
                    {movieList?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            </section>
        </main>
    )
}
import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { useSearchParams } from "react-router-dom";

export const Search = ({apiPath}) => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q');
    const movieList = useFetch(apiPath, searchQuery);
    useTitle(`Search results for ${searchQuery}`);
    return (
        <main>
            <section className="px-4 pt-2">
                <p className="text-xl sm:text-3xl dark:text-white">{movieList.length ? `Results for ${searchQuery}` : `Sorry!!! No results found`}</p>
            </section>
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
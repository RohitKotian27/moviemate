import PageNotFoundImage from "../assets/page-not-found.png";
import {Link} from 'react-router-dom';
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = ({title}) => {
    const pageTitle = useTitle(title);
    return (
        <main>
            <section className="flex justify-center py-7">
                <div className="text-center font-bold text-gray-900 dark:text-white max-w-xs">
                    <h1 className="text-7xl mb-2">404</h1>
                    <p className="text-xl mb-4">page not found</p>
                    <img className="mb-5" src={PageNotFoundImage} alt="Page not found" />
                    <Link to="/">
                        <button className="rounded bg-sky-600 text-white p-3.5">Back to Home</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
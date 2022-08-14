import './SearchImage.css';
import useApi from "../../Hooks/use-api";
import React, {useEffect, useState} from "react";
import ImageGrid from "../ImageGrid/ImageGrid";


export default function SearchImage() {
    const api = useApi();
    const [query, setQuery] = useState();
    const [results, setResults] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (query && query.length > 2) {
            api.get('/', {q: query, image_type: 'photo'})
                .then(setResults)
                .catch(setError);
        } else if (query === "") {
            setResults({ hits: [] });
        }
    }, [query]);

    return <div>
        <div>{error}</div>
        <form>
            <input
                id="searchbar"
                className="container px-4 border-solid border-2 border-sky-500 rounded-lg my-3"
                name="query"
                placeholder="Search ..."
                onChange={e => setQuery(e.target.value)}/>
        </form>
        {results && <ImageGrid images={results.hits}/>}
    </div>
}
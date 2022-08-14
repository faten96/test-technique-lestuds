import useApi from "../../Hooks/use-api";
import {useEffect, useState} from "react";
import ImageGrid from "../ImageGrid/ImageGrid";


export default function SearchImage() {
    const api = useApi();
    const [query, setQuery] = useState();
    const [results, setResults] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (query && query.length > 2) {
            api.get('/', { q: query, image_type: 'photo' })
                .then(setResults)
                .catch(setError);
        }
    }, [query]);

    return <div>
        <form>
            <label htmlFor="query">Query</label>
            <input name="query" placeholder="Flower, color ..." onChange={e => setQuery(e.target.value)}/>
        </form>
        <ImageGrid images={results.hits} />
    </div>
}
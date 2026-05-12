import { useQuery } from "@tanstack/react-query";

export default function useCachedQuery(category) {
    async function getStuff() {
        const apiKey = "QXAGgEjsqNQ1GJhRMxVJQLXCjK9c0PLhHt2HEiyDJGIO6zFo";
        const endpoint = `https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?api-key=${apiKey}`
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error("fejl")
        }
        const json = await response.json();
        console.log(json)
        return json;
    }



    const { data, isPending, error } = useQuery({
        queryKey: ["times"],
        queryFn: getStuff,
        staleTime: 1000 * 60 * 10
    });

    return { data, isPending, error }
}
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Layout from "../components/layout/layout";
import useCachedQuery from "../hooks/use-cached-query";
import Detail from "../components/detail/detail";


const showSports = localStorage.getItem("sports") || "true";
console.log(showSports);

async function getTimes() {
    let result = fetch("https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=QXAGgEjsqNQ1GJhRMxVJQLXCjK9c0PLhHt2HEiyDJGIO6zFo")
    let times = (await result).json()
    return times
}


export default function Home() {
    const { data: sportsData, isPending: sportsIsPending, error: sportsError } = useCachedQuery("sports");
    const { data: businessData, isPending: businessIsPending, error: businessError } = useCachedQuery("business");
    const { data: healthData, isPending: healthIsPending, error: healthError } = useCachedQuery("health")
    const { data: travelData, isPending: travelIsPending, error: travelError } = useCachedQuery("travel")
    const { data: europeData, isPending: europeIsPending, error: europeError } = useCachedQuery("europe")



    return (
        <>
            {!europeIsPending && <Detail category={"Europe"} articles={europeData.results} />}
            {!healthIsPending && <Detail category="Health" articles={healthData.results} />}
            {!sportsIsPending && <Detail category="Sports" articles={sportsData.results} />}
            {!travelIsPending && <Detail category="Travel" articles={travelData.results} />}
            {!businessIsPending && <Detail category="Business" articles={businessData.results} />}
        </>
    );

}


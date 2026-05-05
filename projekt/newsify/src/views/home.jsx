import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/header/header";
import Health from "../components/health/health";
import News from "../components/health/news";
import Sport from "../components/Sport/sport";
import Travel from "../components/Travel/travel";
import Footer from "../components/footer/footer";
import useFetchData from "../hooks/usefetch";
import useCachedFetchData from "../hooks/use-cached-fetch";
import { useQuery } from "@tanstack/react-query";


async function getTimes() {
    let result = fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=QXAGgEjsqNQ1GJhRMxVJQLXCjK9c0PLhHt2HEiyDJGIO6zFo")
    let times = (await times).json()
    return pokemon
}


export default function Home() {

    const { data, isPending, error } = useQuery({
        queryKey: ["times"],
        queryFn: getTimes,
        staleTime: 1000 * 60 * 10
    })

    data && console.log(data)

    // const { data, pending, error } = useCachedFetchData(
    //     "Times",
    //     "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=QXAGgEjsqNQ1GJhRMxVJQLXCjK9c0PLhHt2HEiyDJGIO6zFo")


    // // https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=QXAGgEjsqNQ1GJhRMxVJQLXCjK9c0PLhHt2HEiyDJGIO6zFo
    // const { copyright, num_results } = data ?? {}

    // data && console.log(data);


    return (
        <>
            {/* {data.copyright && <h2>{data.copyright}</h2>} */}
            <div className="links">
                <Link to="News">News</Link>
                <Link to="Home">Home</Link></div>
            <Header />
            <Health >
                {data && data.results.map((result) => {
                    if (result.section === "Well") return (

                        <News title={result.title} desc={result.abstract} img={result.media[0]["media-metadata"][2].url} />
                    )
                })
                }
            </Health>
            <Sport>
                {data && data.results.map((result) => {
                    if (result.section === "Opinion") return (

                        <News title={result.title} desc={result.abstract} img={result.media[0]["media-metadata"][2].url} />
                    )
                })
                }
            </Sport>
            <Footer />{<span className="copyright">{data?.copyright}</span>}
        </>
    )

}

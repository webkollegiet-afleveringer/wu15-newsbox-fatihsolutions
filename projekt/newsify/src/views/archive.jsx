import { Link } from "react-router-dom"
import ArticleCard from "../components/article-card"

export default function Archive() {

    const archive =
        JSON.parse(localStorage.getItem("archive")) || []

    return (

        <>
            <Link to="/">Home</Link>

            <h1>Archived News</h1>

            {archive.map(article => (

                <ArticleCard
                    article={article}
                />

            ))}

        </>

    )

}
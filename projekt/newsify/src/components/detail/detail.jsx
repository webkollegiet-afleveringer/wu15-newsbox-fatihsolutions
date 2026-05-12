import { useRef, useState } from "react";
import "./detail.scss"
import ArticleCard from "../article-card";


export default function Detail({ category, articles = [] }) {

    return (
        <details>


            <summary className="summary_heading">
                <div className="summary_left">
                    <img src="/newsify_logo_3.png" alt="" />
                    {category}
                </div>

                <img src="/feather_chevron-down.svg" alt="" />
            </summary>

            {articles?.map(article => (
                <ArticleCard article={article} />

            ))}

        </details>
    )

}




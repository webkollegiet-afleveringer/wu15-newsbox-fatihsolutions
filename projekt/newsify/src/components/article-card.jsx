import { useRef, useState } from "react";



export default function ArticleCard({ article }) {



    const articleRef = useRef();
    const [diff, setDiff] = useState(0)


    function handleTouchStart(event) {
        console.log("start", event.touches[0].screenX);
        setDiff(event.touches[0].screenX);


    }
    function handleTouchEnd(event) {
        console.log("end", event.changedTouches[0].screenX);
        if (diff > event.changedTouches[0].screenX) {
            const distance = diff - event.changedTouches[0].screenX;
            articleRef.current.style.transform = `translateX(-${distance}px)`;
            const archive = JSON.parse(localStorage.getItem("archive")) || []
            archive.push(article)
            localStorage.setItem("archive", JSON.stringify(archive))
        } else {
            articleRef.current.style.transform = "translateX(0)";
        }
    }





    return (
        <div className="bookmark-main">
            <article ref={articleRef} className="news-card" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} key={article.title}>
                {article.multimedia?.length && <img src={article.multimedia[0].url} alt="" />}
                <div className="news-content">
                    <h2 className="news-title">{article.title}</h2>
                    <p className="news-desc">{article.abstract}</p>
                </div>


            </article>
            <div className="bookmark">
                <img src="/feather_bookmark.svg" alt="" />
            </div>
        </div>

    )
}
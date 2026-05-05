export default function News({ title, desc, img }) {
    return (
        <article className="news-card">
            <img src={img} className="news-img " alt="news" />
            <div className="news-content">
                <h1 className="news-title">{title}</h1>
                <p className="news-desc">{desc}</p>
            </div>

        </article>
    )
}
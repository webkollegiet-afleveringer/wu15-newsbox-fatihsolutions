import "./health.scss"
import News from "./news"

export default function Travel() {
    return (

        <details>
            <summary className="health">
                <div className="health__logo">
                    <img src="/newsify_logo_3.png" alt="" />
                    <p>Travel</p></div>
                <img src="/feather_chevron-down.svg" alt="" />
            </summary>
            <News />

        </details>
    )
};






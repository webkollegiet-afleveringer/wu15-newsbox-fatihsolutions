import { Children } from "react"
import "./health.scss"
import News from "./news"

export default function Health({ children }) {
    return (

        <details>
            <summary className="health">
                <div className="health__logo">
                    <img src="/newsify_logo_3.png" alt="" />
                    <p>Health</p></div>
                <img src="/feather_chevron-down.svg" alt="" />
            </summary>
            {children}

        </details>
    )
};






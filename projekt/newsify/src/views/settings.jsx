import "./settings.scss"
import "../components/detail/detail.scss"

export default function Settings() {
    function inputHandler(event) {
        console.log(event.target.checked);
        localStorage.setItem(event.target.dataset.category, event.target.checked)
    }

    const categories = [
        { name: "Europe" },
        { name: "Health" },
        { name: "Sport" },
        { name: "Business" }


    ]

    return (
        <>
            <h1 className="header_settings" >Settings</h1>
            <h2 className="subheading_settings">Categories</h2>
            {categories.map(category => (
                <div className="settings-active">
                    <div className="settings-category">
                        <img className="settings-img" src="/newsify_logo_3.png" alt="" />
                        <p>{category.name}</p>
                    </div>
                    <label className="switch">
                        <input type="checkbox" className="switch_input"
                            defaultChecked={category.enabled} />
                        <div className="switch_control"></div>
                    </label>


                </div>

            ))}
            <p>Sports<input type="checkbox" data-category="sports" onInput={inputHandler} /></p>
            <p>Health<input type="checkbox" data-category="health" onInput={inputHandler} /></p>
        </>
    )
}
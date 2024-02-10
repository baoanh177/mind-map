import "./loader.css"

function Loader() {
    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader

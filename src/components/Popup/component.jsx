import "./style.scss"

function Popup({content = "Some text", icon = "i" , className }) {
    function ShowMessage() {
        let popup = document.getElementById(`${className}`);
        popup.classList.toggle("show");
    }


    return <div className="popup" onClick={ShowMessage}>{icon}
        <span className="popuptext" id={className} dangerouslySetInnerHTML={{__html: content }}></span>
    </div>
}

export default Popup
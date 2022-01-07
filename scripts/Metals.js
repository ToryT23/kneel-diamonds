import { getMetals, setMetal } from "./database.js"


const metals = getMetals()



// to click and store values , in the metals . save as a property of this object
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

// remember radio buttons have addEventListeners, that state a change in the dom will take place.
// i used event as our parameter. targert returns whatever item we clicked on, that has the name === "" 
// the window alert will allow a description as well as the target value clicked on.
//document.addEventListener(
//    "change",
//    (event) => {
//        if(event.target.name === "metal"){
//        window.alert(`user chose metal ${event.target.value}`)
//        }
//    }
//)


export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}


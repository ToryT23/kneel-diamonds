import { getOrders } from "./database.js"
import { getMetals, getSizes, getStyles } from "./database.js"

// the buildOrderListItem should contain the metals, styles, and sizes
// these must be imported from database.js
// get theMetals, styles, sizes
// 
const buildOrderListItem = (order) => {
    const metals = getMetals()
  // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const styles = getStyles()

// Remember that the function you pass to find() must return true/false
const foundStyles = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
    const sizes = getSizes()
const foundSizes = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)
// use this logic to add up all of the items together to come up with a total price 
const totalPrice = foundMetal.price + foundStyles.price + foundSizes.price

// keep your order.id and totalPrice.toFixed(2) in between the HTML
    return `<li>
        Order #${order.id} cost $${totalPrice.toFixed(2)}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

 // a map function has an argue followed by a functions that contains
 // also this is an implicit function, meaning it doesnt require a return or {} curly brackets
 // listItems is gonna require us to map through our orders to return buildOrderListItem
 // we must call buildOrderListItem with the parameter called from .map
    const listItems = orders.map( (order) => buildOrderListItem(order))

    html += listItems.join("")
    html += "</ul>"

    return html
}


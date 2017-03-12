export default function (text = 'corrupto') {
    const element = document.createElement('h1')
    element.setAttribute('class', 'boneco')

    element.innerHTML = text

    return element
}
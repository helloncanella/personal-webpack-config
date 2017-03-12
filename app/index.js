import component from './component'
import './main.scss'
// document.body.appendChild(component())

let demoComponent = component()

document.body.appendChild(demoComponent)

if (module.hot) {

    module.hot.accept('./component', () => {
        const nextComponent = component()
        document.body.replaceChild(nextComponent, demoComponent)

        demoComponent = nextComponent
    })

}
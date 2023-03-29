import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function getOrCreateElementById(id: string): HTMLElement {
    let element = document.getElementById(id)

    if (!element) {
        const newElement = document.createElement('div')
        newElement.setAttribute('id', id)
        element = newElement
    }

    return element
}

const Portal: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const elementRef = useRef(getOrCreateElementById('portal-root'))

    useEffect(() => {
        document.body.appendChild(elementRef.current)

        return () => {
            elementRef.current.remove()
        }
    }, [])

    return createPortal(children, elementRef.current)
}

export default Portal

import {useEffect} from 'react';
import ReactDOM from'react-dom'

export const PortalModal = (props) => {
    useEffect(() => {
        document.body.style.overflow = props.isActive ? 'hidden' : 'scroll'
    }, [props.isActive])
    return  ReactDOM.createPortal(
         props.children,
         props.domNode
    )
}

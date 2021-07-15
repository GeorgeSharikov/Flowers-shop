import {useEffect} from 'react';
import ReactDOM from'react-dom'

export const PortalModal = (props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'scroll'
        }
    }, [])
    return ReactDOM.createPortal(
         props.children,
        document.getElementById('root').appendChild(document.createElement('div'))
    )
}

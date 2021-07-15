import React, {useEffect} from 'react';
import ReactDOM from'react-dom'

export const PortalModal = (props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, [])
    return ReactDOM.createPortal(
         props.children,
         document.getElementById('root')
    )
}

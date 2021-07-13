import React from 'react'

class ErrBoundary extends React.Component {
    state = {
        hasError: false,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            console.error('Error', this.state.errorInfo)
            return(
                <h1>Some thing went wrong</h1>
            )
        }
        return this.props.children
    }
}

export const ErrorBoundary = ErrBoundary
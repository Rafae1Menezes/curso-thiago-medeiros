import React from "react"
import './Loading.css'

const Loading = ({ visible }) => {

    return (
        <>
            {visible === true ? 'Carregando...' : ''}
        </>
    )
}
export default Loading
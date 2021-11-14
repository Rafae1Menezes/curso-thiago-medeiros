import React from "react"

import Header from '../partials/Header'
import Nav from '../partials/Nav'

const Template = ({ activePage, children, onChangePage, pages }) => {
    return(
        <>
            <Nav 
                pages={pages}
                onChangePage={onChangePage}
            />
            
            <Header titulo={pages[activePage].text} />

            {children}
        </>
    )
}

export default Template
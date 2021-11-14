import React from "react"

const Nav = ({pages, onChangePage}) => {

    const namePages = Object.keys(pages)

    return (
        <nav>
            {
                
                namePages.map( name => 
                <button onClick={() => onChangePage(name)}>{pages[name].text}</button>  
                )
            }
        </nav>
    )
}

export default Nav
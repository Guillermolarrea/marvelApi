import React from 'react'
import Cards from '../../Cards/Cards'
import NavBar from '../../NavBar/NavBar'

function Home({avenger, search}) {
    console.log(avenger)

    return (
        <div>
            <div>
                {<NavBar avenger= {avenger}/>}
            </div>
            <div>
                {<Cards avenger= {avenger} search={search} />}
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import { Divider, Header } from 'semantic-ui-react'

import img404 from '../images/404.jpg'

const Page404 = () => {
    return (
        <div>
            <Divider horizontal>
                    <Header as="h2">Not Found</Header>
                </Divider>

            <div style={{textAlign: "center"}}>
                <p>This isn't where I parked my car...</p>
                <img src={img404} alt="Panic Fry" style={{width:"350px"}} />
            </div>
        </div>
    )
}

export default Page404
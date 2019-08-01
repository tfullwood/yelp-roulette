import React from 'react'
import { Divider, Header } from 'semantic-ui-react'

const About = () => {
    return (
        <div>
            <Divider horizontal>
                    <Header as='h2'>Contact</Header>
                </Divider>

            <p>Yeah this is just a placeholder page. I guess you could contact me on <a href="https://www.linkedin.com/in/trevorfullwood/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
        </div>
    )
}

export default About
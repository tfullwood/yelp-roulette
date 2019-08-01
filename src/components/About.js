import React from 'react'
import { Divider, Header } from 'semantic-ui-react'

const About = () => {
    return (
        <div>
            <Divider horizontal>
                    <Header as='h2'>About</Header>
                </Divider>

            <p>A relatively simple React application for my portfolio. Built with React, Redux, and a small Express server. You can view the project source on <a target="_blank" rel="noopener noreferrer" href="https://github.com/tfullwood/yelp-roulette">Github</a>.</p>
        </div>
    )
}

export default About
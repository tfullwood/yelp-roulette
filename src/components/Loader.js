import React from 'react'
import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react'

const Loader = (props) => {
    return (
        <Dimmer active={props.status}>
            <SemanticLoader size="massive">Loading...</SemanticLoader>
        </Dimmer>
    )
}

export default Loader
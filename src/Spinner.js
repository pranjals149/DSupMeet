import React from 'react';
import { Loader, Dimmer } from "semantic-ui-react";

const Spinner = () => (
    <Dimmer active>
        <Loader size = 'huge' content = { 'Fetching your Application. Please Wait ...' } />
    </Dimmer>
)

export default Spinner;
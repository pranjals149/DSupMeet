import React from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

class MessagesHeader extends React.Component {
    render() {
        return (
            <Segment clearing>
                    {/* channel title */}
                <Header fluid='true' as='h2' floated='left' style={{marginBottom: 0}}>
                    <span>
                    Category
                    <Icon name={'hourglass start'} color='black' />
                    </span>
                    <Header.Subheader> Users</Header.Subheader>
                </Header>
                    {/* search messages */}
                <Header floated='right'>
                    <Input size='mini' 
                        Icon='search'
                        name='searchTerm'
                        placeholder='Search Messages'
                    />
                </Header>
            </Segment>
        )
    }
}

export default MessagesHeader;
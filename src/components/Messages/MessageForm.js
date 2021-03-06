import React from 'react';
import { Segment, Button, Input } from "semantic-ui-react";
import firebase from '../../firebase';
import FileModal from './FileModal';

class MessageForm extends React.Component {
    state={
        message: '',
        channel: this.props.currentChannel,
        user: this.props.currentUser,
        loading: false,
        errors: [],
        modal: false
    }

    openModal = () => this.setState({ modal: true })

    closeModal = () => this.setState({ modal: false })

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    createMessage = () => {
        const message = {
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            user: {
                id: this.state.user.uid,
                name: this.state.user.displayName,
                avatar: this.state.user.photoURL
            },
            content: this.state.message
        }
        return message;
    }

    sendMessage = () => {
        const { messagesRef } = this.props;
        const { message, channel } = this.state;
        if (message) {
            this.setState({ loading: true })
            messagesRef
                .child(channel.id)
                .push()
                .set(this.createMessage())
                .then(() => {
                    this.setState({ loading: false, message: '', errors: [] })
                })
                .catch(err => {
                    console.error(err);
                    this.setState({
                        loading: false,
                        errors: this.state.errors.concat(err)
                    })
                })
        } else {
            this.setState({
                errors: this.state.errors.concat({message: 'Enter a message'})
            })
        }
    }
    
    render() {
        const { errors, message, loading, modal } = this.state;
        return (
            <Segment className='message__form'>
                <Input 
                    fluid
                    name='message'
                    onChange={this.handleChange}
                    value={message}
                    style={{marginBottom: '0.7em'}}
                    label={<Button icon={'add'} />}
                    labelPosition='left'
                    className={
                        errors.some(error => error.message.includes('message')) ? 'error' : ''
                    }
                    placeholder='Write your message'
                />
                <Button.Group icon widths='2'>
                    <Button 
                        onClick={this.sendMessage}
                        color='blue'
                        disabled={loading}
                        content='Add Reply'
                        labelPosition='left'
                        icon='edit outline'
                    />
                    <Button 
                        color='green'
                        onClick={this.openModal}
                        content='Upload Media'
                        labelPosition='right'
                        icon='upload'
                    />
                    <FileModal 
                        modal={modal}
                        closeModal={this.closeModal}
                    />
                </Button.Group>
            </Segment>
        )
    }
}

export default MessageForm;
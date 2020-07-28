import React from "react";
import { Modal, Input, Button, Icon } from "semantic-ui-react";

class FileModal extends React.Component {
    render() {
        const { modal, closeModal } = this.props;

        return (
            <Modal basic open={modal} onClose={closeModal}>
                <Modal.Header>Select a media to upload</Modal.Header>
                    <Modal.Content>
                        <Input 
                            fluid
                            label='File types supported: jpg, png'
                            name='file'
                            type='file'
                        />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button 
                            color='green'
                            inverted
                        >
                            <Icon name='checkmark box' /> Send
                        </Button> 
                        <Button 
                            color='red'
                            inverted
                            onClick={closeModal}
                        >
                            <Icon name='remove' /> Cancel
                        </Button> 
                    </Modal.Actions>
            </Modal>
        )
    }
}

export default FileModal;
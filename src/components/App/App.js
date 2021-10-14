import { Component } from 'react';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';


class App extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }))
  }

  render() {
    const { showModal } = this.state;
      return (
        <Container>
          <button type="button" onClick={this.toggleModal}>Open Modal</button>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <>
                <button type="button" onClick={this.toggleModal}>Close Modal</button>
              </>
            </Modal>)
  }
    </Container>
  )
  }
}

export default App;

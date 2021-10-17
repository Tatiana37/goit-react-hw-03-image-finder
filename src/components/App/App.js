import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPictures } from '../../services/PixabayAPI';
import Container from '../Container/Container';
import Searchbar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';


class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    pictures: [],
    loading: false,
    showModal: false,
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.fetchSearch()
        .catch(err => console.log(err))
        .finally(() => this.setState({ loading: false }));
      
    }
    
  }

  fetchSearch() {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    return getPictures(searchQuery, page).then(pictures => {
      this.setState(prev => ({
        pictures: [...prev.pictures, ...pictures],
        page: prev.page + 1,
      }));
    });
  }



  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }))
  }
  
  handleFormSubmit = searchQuery => {
    this.setState({
      page: 1, 
      searchQuery, 
      pictures: []
    });
  }
  
  
handleLoadMoreClick =()=>{
  this.setState({loading:true});
  this.fetchSearch()
  .then(()=>{
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  })
  .catch((err)=> console.log(err))
  .finally(() => this.setState({loading: false }));
}


  render() {
    const { loading, pictures, showModal } = this.state;
      return (
        <Container>
          <ToastContainer/>
          <Searchbar onSubmit={this.handleFormSubmit}/>
          <ImageGallery pictures={pictures} />
          {!loading && pictures[0] && <Button onClick={this.handleLoadMoreClick}/>}
          
          {/* <button type="button" onClick={this.toggleModal}>Open Modal</button> */}
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

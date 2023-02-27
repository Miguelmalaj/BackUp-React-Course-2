import React, { Component, Fragment } from 'react'
import Header from './components/Header';
import Clock from './components/Clock';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 4,
      post: {},
      message: 'Lifecycle',
      showClock: true
    };
    console.log('constructor');
  }

  async componentDidMount() {
    //peticiones http
    /* fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data)) */
    const { id } = this.state
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    //actualización del estado
    this.setState({ post: data })
    //asignación de eventos
    window.addEventListener('scroll', () => console.log('SCROLL'))

    console.log('componentdidmount');
  }

  handlerId = () => {
    this.setState({ id: this.state.id + 1 })
  }

  handlerMessage = () => {
    this.setState({ message: "Lifecycle cambiado" })
  }

  handlerUpdate = () => {
    this.forceUpdate()
  }

  handlerClock = () => {
    this.setState({ showClock: !this.state.showClock })
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  async componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.id, this.state.id);
    console.log('UPDATE');
    if (prevState.id !== this.state.id) {
      const { id } = this.state
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await res.json();
      //actualización del estado
      this.setState({ post: data })

    }
  }

  render() {
    console.log('render');

    const { post } = this.state;
    return (
      <>
        <Header title={this.state.message} />
        {this.state.showClock && <Clock />}
        
        <div>
          {/* {
          posts.map(post=>(
            <Fragment key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </Fragment>
          ))
        } */}
          <>
            <button onClick={this.handlerId}>Next ID</button>
            <button onClick={this.handlerMessage}>Change Header</button>
            <button onClick={this.handlerUpdate}>Force Update</button>
            <button onClick={this.handlerClock}>
              {
                this.state.showClock ?
                "Hide Clock"
                :
                "Show Clock"
              }
            </button>
            <h2>post con id: {this.state.id}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        </div>
      </>
    );
  }
}

export default App;

import uuid from 'react-uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import  React,{ Component } from 'react';
import './App.css';
class App extends Component{
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false,

  };
  handleChange=(e)=>{
    this.setState({
      item: e.target.value
    })
      console.log('handle change')    
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={
      id:this.state.id,
      title:this.state.item
    }
    const updatedItems=[...this.state.items,newItem]
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    },
    
    );
    
  };
  ClearList=()=>{ 
    this.setState({
      items:[]
    });  
  }
  handleEdit= id =>{
    const filteredItems=this.state.items.filter(item=>item.id !==id);
    const selectedItem=this.state.items.find(item=>item.id === id);
    console.log(selectedItem);
    this.setState({
      items:filteredItems,
      item:selectedItem.title,
      id:id,
      editItem:true

    }); 

  };
  handleDelete=(id)=>{
    const filteredItems=this.state.items.filter(item=>item.id !==id);
    this.setState({
      items:filteredItems
    });    
  };
  render(){
    console.log(this.state);
  return (
    
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Todo-App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" id="searchTxt" aria-label="Search"/>
                </form>
            </div>
        </div>
    </nav>
    <div className='container'>
       <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
              <h3 className='text-capitalize text-center'> 
              
              Todo App using React
              
              <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit} 
              editItem={this.state.editItem}
              />
              <TodoList
              items={this.state.items}
              ClearList={this.ClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              
              />
              </h3>
          </div>  
        </div>
        <figure class="my-5 text-center">
            <div class="my-5">
                <blockquote class="blockquote">
                    <p>“From start to finish, a to-do list is what you need.”
                    </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    <cite title="Source Title">Anonymous</cite>
                </figcaption>
            </div>
        </figure>
    </div>
    <footer class="text-center text-lg-start text-white mt-10">
      <section class="d-flex justify-content-between p-4">
            <div class="me-5">
              <span>Get connected with me on social networks:</span>
            </div>
            <div>
                  
              
                <a href="https://mayuriweb.netlify.app/" class="text-white me-4">
                  <i class="fa fa-google  "></i>
                </a>
                <a href="https://www.youtube.com/channel/UCqzo9230kipqRye4DfdabZg" class="text-white me-4">
                  <i class="fa fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/in/mayuri-narute-556995216/" class="text-white me-4">
                  <i class="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/MayuriNarute" class="text-white me-4">
                  <i class="fa fa-github"></i>
                </a>
            </div>
      </section>
    </footer>

    </>
  );
  }
}

export default App;


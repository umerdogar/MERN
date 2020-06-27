import React, { Component } from 'react';
import axios from 'axios';

import './App.css';


class App extends Component {

state={
  title:'',
  body:'',
  posts:[]
}

componentDidMount =() =>{
  this.getBlogPost();
};


//displaying data from server on rontend
getBlogPost = () =>{
  axios.get('/api/name')
  .then((response)=>{
    const data = response.data;
    this.setState({posts:data});
    console.log('data haas been recieved')
  })
  .catch(()=>{
    alert('error recieving data');
  });
}



handleChange =({target}) => {
  const {name,value} = target;
  this.setState({[name]:value});
};


resetUserInputs = () => {
  this.setState({
    body:'',
    title:'',
    
  });
};


displayBlogPost = (posts) => {

  if(!posts.length) return null;

  return posts.map((post,index)=>
    <div key={index} className="blog-post-display">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

submit = (event) => {
  event.preventDefault();

  const payload ={
    title:this.state.title,
    body: this.state.body
  };

  axios({
    url:'api/save',
    method:'POST',
    data:payload
  })


  .then(()=>{
    console.log('Data has sent to server');
    this.resetUserInputs();
    this.getBlogPost()
  })
  .catch(()=>{
    console.log('internal server error');
  });
};

  render() {
    console.log('state',this.state);
    return (
      <div className="app">
          <h2>Welcome to my app</h2>
      

        <form onSubmit={this.submit}>
        <div className="form-input">
          <input type="text"
          name="title"
          value={this.state.titleS}
          placeholder='title'
          onChange={this.handleChange}
          /> 
        </div>
        <div className="form-input">
          <textarea name="body" cols="30" 
          rows="10" value={this.state.body}
           placeholder='body'
           onChange={this.handleChange}/>
        </div>
        <button>Submit</button>
        </form>
        <div className="blog-post">
          {this.displayBlogPost(this.state.posts)}
        </div>
        </div>
    );
  }
}

export default App;
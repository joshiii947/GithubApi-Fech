    import React from 'react';
    import logo from './logo.svg';
    import './App.css';
    import 'bootstrap/dist/css/bootstrap.min.css';


    class App extends React.Component{
      constructor(props){
        super(props)
          this.state=({
            users: {},  
            user:'joshiii',
            total:1        
          })
        }

        fetchData=()=>{
          fetch(`https://api.github.com/search/users?q=${this.state.user}`)
          .then(res=>res.json())
          .then(
            (result)=>{
              this.setState({
                users: result
              });
            },
            (error)=>{
              this.setState({
                total:0
              })
            }
          )
        }
 
        componentDidMount(){
            this.fetchData()
        }   

        changeUser=(e)=>{
          e.preventDefault()
          this.setState({
            user:e.target.value
          })
        }

        checkUser=(e)=>{
             e.preventDefault();
             this.fetchData()
      }              
             
        render(){

                 const userProfiles=()=>{
                        return this.state.users.items && this.state.users.items.map((item,index)=>{
                            return <div className="card col-sm-3 flip-card" >
                              <div className="flip-card-inner">
                                    {<img src={item.avatar_url} className="imageBox"/>}
                                    <p>Name:{item.login}</p>
                              </div> 
                              <div className="flip-card-back">
                                  <div className="card-body">
                                        <h5 className="card-title">Name:{item.login}</h5>
                                          <h5 className="card-title">Github profile:{item.html_url}</h5>
                                     <a href={item.url} className="btn btn-primary">View git profile</a>
                                 </div>                          
                              </div>                                             
                            </div>     
                        })
                 }

                  
                     return(
                    
                      <div>
                     <div className="main">
                     <header className="jumbotron d-none d-sm-block">
                         <div className="container">
                             <div className="row row- ">
                                   <div className="col-12 col-sm-6 ">
                                       <h1>GITHUB USER INFORMATION</h1>
                  <div>
                     <div className="container h-100 ">
                                 <div className="col-10 col-md-8 col-lg-8 ">
                                   <form className="form-example" id="change" onSubmit={this.checkUser}>
                                           <div className="form-group" >
                                               <label htmlFor="username">GITHUB USER NAME</label>
                                               <input type="text" className="form-control username" onChange={this.changeUser}/>
                                           </div> 
                                           <button type="submit" className="btn btn-primary btn-customized" >SEARCH</button>
                                   </form>
  
                                 </div>
                               
                         </div>
                    </div>                     
                  </div>
                        <div className="col-12 col-sm">
                      </div>
                     </div>
                   </div>
                  </header>
                 </div>
                <div className="container">

                  <div className="column">

                      <div className="row userWidth">
                        {userProfiles()}
                      </div>  
                </div>

                </div>
               
            </div>    

            );
            
        }

    };


    export default App;

import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Loader from './loader';
class App extends React.Component{
  /*  constructor(props){
        super(props);

        this.state={lat: null, errorMsg : ''};
        
    }*/
    state={lat: null, errorMsg : ''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({lat : position.coords.latitude});
            },
            (err)=>{
                this.setState({errorMsg:err.message})
            }
        );
    }

    renderContent(){
        if(this.state.errorMsg&&!this.state.lat){
            return <div>Error : {this.state.errorMsg}</div>
        }
        if(!this.state.errorMsg&&this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        
            return <Loader />;
    }
    /*componentdidMount(){ ekdach hot//it is recommended
        console.log('reendere!');
    }
    componentDidUpdate(){ every time when data changes
        console.log('update');
    }
    componentWillUnmount()- cleanUp   */
    render(){
       
        return(
            <div className="border-red">
                   {this.renderContent()} 
                   <div>
                        Latitude: {this.state.lat}<br/>
                        Error : {this.state.errorMsg}
                    </div>
            </div>

        );   
        
        
    }
}
/*
class App extends React.Component{
    state={time:new Date().toLocaleTimeString()};

    componentDidMount(){
        setInterval(()=>{
            this.setState({time:new Date().toLocaleTimeString()});
        },1000);
    }
    render(){
        return(
            <div>
                The current time is: {this.state.time}
                </div>
        );
    }
}*/
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
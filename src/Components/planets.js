import React , {Component} from 'react';
import './planet.css';
// import earth from './Earth.jpg';
// import '../Assets';
import earth from './Earth.jpg';
import mercury from './Mercury.jpg';
import venus from './Venus.jpg';
import ceres from './Ceres.jpg'
import haumea from './Haumea.jpg';
import jupiter from './Jupiter.jpg'
import makemake from './Makemake.jpg';
import mars from './Mars.jpg';
import eris from './Eris.jpg';
import pluto from './Pluto.jpg';
import saturn from './Saturn.jpg';
import favourite from './favourite.png';


var planets = [{"id":"mercury","isFavourite":false,"name":"Mercury","image":mercury},{"id":"venus","isFavourite":false,"name":"Venus","image":venus},{"id":"earth","isFavourite":false,"name":"Earth","image":earth},{"id":"mars","isFavourite":false,"name":"Mars","image":mars},{"id":"ceres","isFavourite":false,"name":"Ceres","image":ceres},{"id":"jupiter","isFavourite":false,"name":"Jupiter","image":jupiter},{"id":"saturn","isFavourite":false,"name":"Saturn","image":saturn},{"id":"pluto","isFavourite":false,"name":"Pluto","image":pluto},{"id":"haumea","isFavourite":false,"name":"Haumea","image":haumea},{"id":"makemake","isFavourite":false,"name":"Makemake","image":makemake},{"id":"eris","isFavourite":false,"name":"Eris","image":eris}];
// var imgPath =[earth,mercury,venus,ceres,haumea,jupite,makemake,mars,eris,pluto,saturn];
class PlanetScreen extends React.Component{
    constructor(){
        super();
        this.favouriteList = [];
        this.state = {
            favouriteTabList :[],
            isFavouriteTab : false,
            isPlanetTab: true
            
          };
    }

    
    handleClick(planetName) {
        // console.log('this is:', this);
        console.log(planetName);

        let i = '',flag = 0;
        if(this.favouriteList.length == 0){
                  
        this.favouriteList.push(planetName);
        console.log(this.favouriteList);
        this.setState({  favouriteTabList:this.favouriteList});
        }
    for (i = 0; i < this.favouriteList.length; i++) {
        if (this.favouriteList[i] === planetName) {
            flag+=1;
        }
    }

    if((flag === 0) && (this.favouriteList.length > 0)){
        this.favouriteList.push(planetName);          
        
        console.log(this.favouriteList);
        this.setState({  favouriteTabList:this.favouriteList});

    }

    
    // console.log(favouriteTabList);
        
      }


      tabClick(tabState){

        if(tabState == 'planet'){
            this.setState({  isPlanetTab: true});
            this.setState({  isFavouriteTab: false});
        }else if(tabState == 'favourite'){
            this.setState({  isPlanetTab: false});
            this.setState({  isFavouriteTab: true});
        }
            

        

      }

     
        
    render()
    
    {
        
        const listItems = planets.map((planet) =>
       

        <div className="info-box"><img className="planet-images"src={planet.image} /><span className={planet.name}>{planet.name}</span><button className="view-button" onClick={() => this.handleClick(planet.name)}>Add to Favorites</button></div>
    );


//     const favItems = this.state.favouriteTabList.map((key,value) =>       
//     <div><li key={key}>{value}</li></div>
    
// );
// console.log(this.state.favouriteTabList);
        // console.log('print enter');
        console.log(this.state.favouriteTabList)
        console.log(typeof(this.state.favouriteTabList))
        return (
            
            <div className ="main-container"> 
            <div className="tab-container"><div className="tabs">
                <div className="tab1" onClick={() => this.tabClick('planet')}><div className="tab-name">Planets</div></div>
                <div className="tab2" onClick={() => this.tabClick('favourite')}><div  className="tab-name">My favorites</div></div>
                </div></div>

            { this.state.isPlanetTab ? <div className="planet-container" >{listItems}</div>  : ''}
            {this.state.isFavouriteTab ?<div className="fav-container" >{this.state.favouriteTabList.map((value) =>{

           return  <div className = "fav-box"><span>{value}</span><img className="fav-image"src={favourite} /></div>})
            }</div> : ''}
           
            
            </div>
        );
    }
} 

export default PlanetScreen;
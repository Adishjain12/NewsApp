import React, { Component } from "react";
import Loading from "./Loading";
import NewItem from "./NewItem";
import PropTypes from 'prop-types'

export class News extends Component {
static defaultProps={
  country:'in',
  pageSize:6,
  category:'general'
}
static propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.string,
  category:PropTypes.string
}

CapitalizeFirstLetter=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1
    }
    document.title=`${this.CapitalizeFirstLetter(this.props.category)}-NewsMonkey`;
  }
  
  async update(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d5e7a7f3138b4d73b56fdf01cecd22a2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
  }
  async componentDidMount(){
    this.update();
  }

  handlepreviousclick= async()=>{
    this.setState({page:this.state.page-1});
    this.update();
  }
  handlenextclick= async ()=>{
    
    this.setState({page:this.state.page+1});
    this.update();
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'35px 0px'}}>NewsMonkey - Top {this.CapitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading&&<Loading/>}
        <div className="row">
           {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>  
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick}>&larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;

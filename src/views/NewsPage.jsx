import React from "react";
// reactstrap components
import {
 Pagination,
 PaginationItem,
 PaginationLink
} from "reactstrap";
// core components
import NewsArticle from '../components/NewsArticle';
import services from '../services.js';
import Sidebar from 'components/Sidebar/Sidebar';
class NewsPage extends React.Component {
  services= new services();
    constructor(props) {
        super(props);
    this.state = {
        articles:[],
        apiError: "",
        sectionSelection:'all',
        offset:0
      }
    
  }
  handlePagination=(filter)=>{
    console.log("filter123:",filter);
    this.setState(prevState => {
      return {offset: filter == 'first' ? 0:filter == 'previous'&& this.state.offset>=20 ? prevState.offset - 20:
      filter==='next'&& this.state.offset!=480?prevState.offset + 20:filter==='last'?480:0}
   },()=>{
     this.fetchNews(this.state.sectionSelection,this.state.offset);
    })      
  }  
  handleFilter = async(selectedFilter) => {
   
    console.log("datachild:",selectedFilter);
    this.setState({sectionSelection:selectedFilter})
    this.setState({offset:0},()=>{this.fetchNews(selectedFilter,this.state.offset)})    
     
    }
 fetchNews= async(filter,offset)=>{
  this.setState({articles:[]})
    await this.services.getNews(filter,offset).then((resp)=>{
    console.log("resppp:",resp);
    this.setState({articles:resp.results})
  })
 }
componentDidMount() {
  console.log("mountfired");
  this.fetchNews(this.state.sectionSelection,this.state.offset)
}


  render() {
    console.log("loging:",this.state.sectionSelection);
    return (
      <>
      <Sidebar
          callbackFromNews={this.handleFilter}
        />
        <div className="content">         
        {this.state.articles
          ? this.state.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "No News"}
        </div>
        <div className="pagination-wrapper">
          <Pagination variant="dark" size="lg" aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink first onClick={() => this.handlePagination("first")}></PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous onClick={() => this.handlePagination("previous")}></PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next onClick={() => this.handlePagination("next")}></PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last onClick={() => this.handlePagination("last")}></PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      </>
    );
  }
}

export default NewsPage;

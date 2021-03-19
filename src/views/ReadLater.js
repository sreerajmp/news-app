import React from "react";

// reactstrap components
import {
    Card,
    CardSubtitle,
    CardHeader,
    CardText,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Button,
    CardImg,
    Col,
} from "reactstrap";
import NewsArticle from '../components/NewsArticle';

class ReadLater extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        articles:[]
      }
    
  }

  savedArticles({ data }) {
    return (
      <div className="news">
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardBody>
        <Col >
      <CardHeader>#{data.section}</CardHeader> 
      <CardTitle tag="h3">{data.title}</CardTitle>
      <CardSubtitle tag="h6">{data.byline}</CardSubtitle>
      <CardText tag="h4">{data.abstract}</CardText>
      <CardText>
            <small className="text-muted">{data.first_published_date}</small>
        </CardText>
      <Button  onClick={()=>window.open(data.url)} > Read full article</Button>
      <CardFooter className="text-muted">Source:{data.source}</CardFooter>
      </Col>
      </CardBody>
      </Card> 
      </div>
    );
  }
  componentDidMount() {
      console.log("read:",localStorage.getItem('urls'));
    this.setState({articles:JSON.parse(localStorage.getItem('urls'))},()=>{console.log("sd:",this.state.articles);})
}
  render() {
      
    return (
      <>
        <div className="content">
        {this.state.articles
          ? this.state.articles.map((news) => (
              <this.savedArticles data={news} key={news.url} />
            ))
          : "No News"}
        </div>
      </>
    );
  }
}

export default ReadLater;
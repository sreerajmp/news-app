import React from "react";
import {
  Card,
  CardSubtitle,
  CardHeader,
  CardText,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  Col,
} from "reactstrap";
class NewsArticle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      apiError: ""
    }
  }
  
  readLater=async(url)=>{
    var urls=JSON.parse(localStorage.getItem("urls"))||[]
    urls.push(url)
    localStorage.setItem("urls",JSON.stringify(urls))
    console.log(url);
    console.log("urlsx",urls);
  }
  componentDidMount() {
    this.setState({data:this.props.data})
  }

  render(){
    var {data}=this.state
  return (
    <div >
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
      <Button onClick={()=>this.readLater(data)} > Read later</Button>
      <CardFooter className="text-muted">Source:{data.source}</CardFooter>
      </Col>
      <Col >
      <img className="card-img-right"  src={data.multimedia?data.multimedia[0].url:''} alt="" />
      </Col>
      </CardBody>
      </Card>   
      
      
    </div>
  );
  }
}

export default NewsArticle;

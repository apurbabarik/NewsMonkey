import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title = `NEWSMONKEY-${this.capitalizeFLetter(
      this.props.category
    )}`;
  }
  capitalizeFLetter(string) {
    return string.toUpperCase(string);
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=72a24f60921743ec9df3cd7373b3d490&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(10);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(50)
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async() => {
    this.setState({page:this.state.page+1 });
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=72a24f60921743ec9df3cd7373b3d490&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      <>
        <h2 className="text-center myHead">{`NEWSMONKEY-TOP  ${this.capitalizeFLetter(
          this.props.category
        )} HEADLINES`}</h2>
        {this.state.loading && <Spinner/> }
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    myTitle={element.title ? element.title : ""}
                    desc={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={
                      !element.urlToImage
                        ? "https://www.livemint.com/lm-img/img/2023/12/30/1600x900/Vedanta_Dividend_stocks_2023_PPF__SSYinterest_rate_1703917106077_1703917106374.jpg"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={
                      !element.source.name ? "THE WEEK" : element.source.name
                    }
                  />
                  
                </div>
              );
            })}
          </div>
          </div>
          
        </InfiniteScroll>
        </>
    );
  }
}

export default News;

import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let { myTitle,desc,imageUrl,newsUrl,author,time,source}=this.props
    return (
      <div className="card" style={{width: "15rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span className="badge rounded-pill text-bg-danger">{source}</span>
    <h5 className="card-title">{myTitle}</h5>
    <p className="card-text">{desc}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"HT News Desk":author} {!time?" 2024-01-02T12:23:56Zk":new Date(time).toGMTString()} mins ago</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more..</a>
  </div>
</div>
    )
  }
}

export default NewsItem
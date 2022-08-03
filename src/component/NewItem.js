import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{margin:'25px'}}><div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
              <span className=" badge rounded-pill bg-secondary" >
                {source}
              </span></div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
            }
            alt=""
          ></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By <b>{author ? author : "unknown"}</b> on{" "}
                <b>{new Date(date).toGMTString()}</b>
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;

import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{margin:'25px'}}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
            }
            alt=""
          ></img>
          <div className="card-body">
            <h5 className="card-title">{title} 
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary" style={{zIndex:'1'}}>
                {source}
              </span>
          </h5>
            
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

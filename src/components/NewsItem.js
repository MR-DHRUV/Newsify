import React from 'react'
import './Newsitem.css'

const NewsItem = (props)=> {

    return (
        <div className='my-5 mx-3 item-div' >
            <div className="card my-card">
                <img src={props.imageUrl} className="card-img-top my-img" alt="Hang On ! Its Loading" height="160vh" />
                <div className="card-body">
                    <h5 className="card-title heading">{props.title} ..<br/></h5>
                    <p className="card-text"><small>Source: {props.source}</small></p>
                    <p className="card-text">{props.description} ...</p>
                    <p className="card-text"><small>By {props.author} on {props.publishedAt}  </small></p>
                    <a href={props.newsUrl} target="_blank" rel='noopener noreferrer' className="btn btm-sm btn-dark my-1 read-more">Read More</a>
                </div>
            </div>
        </div>
    )
}

// You cannot change props while state can be changed
export default NewsItem




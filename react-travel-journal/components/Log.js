import React from 'react';


function Log(props) {
    // console.log(props.item)
    return(
        <section className='main--body'> 
        <div className="log-info">
        <div className="image"><img src={props.item.imageUrl} /></div>
        <div className="details">
        <i className="fa-solid fa-location-dot"></i>
        <span className="country">{props.item.location}</span> 
        <a className="link" href={props.item.googleMapsUrl}>View on Google Maps</a>
        <h1 className="site--name">{props.item.title}</h1>
        <h5 className="duration">{props.item.startDate} - {props.item.endDate}</h5>
        <p>{props.item.description}</p>
        </div>
        <hr />
        </div>
        </section>
    )
}

export default Log;
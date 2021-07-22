import React from 'react'

const CarouselItemContent = (props) => {
    return (
        <div>
            <h3 className="mb-0">{props.paper_title}
                &nbsp;&nbsp;(<span className="text-primary">{props.paper_year}</span>)
            </h3>
            <p className="lead mb-5">
                <span className="text-primary"><b> {props.authors[0]} </b></span>
                {
                    props.authors.slice(1).map((author_name, key) => {
                        return author_name
                    })
                }
            </p>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div id="image-div">
                            <img src={props.image_path}
                                alt=""
                                id="image-tag"/>
                        </div>
                        <div className="text-center">
                            {
                                Object.keys(props.buttons).map((key, index) => ( 
                                    <a href={props.buttons[key]} className="btn btn-primary" role="button" id="button-margin"> {key} </a>
                                ))
                            }
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="col-md d-none d-sm-block" id="desc-style">
                        <p className="lead mb-5"> {props.description} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselItemContent

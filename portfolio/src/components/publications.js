import React from 'react'
import data from '../data/publications.json';

const Publications = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="publications">
            <div className="w-100">
                <div className="container">
                    <div id="demo1" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            {
                                data["papers"].map((item, key) =>
                                    <li data-target="#demo1" data-slide-to={key}></li>        
                                )
                            }
                        </ul>
                        <div className="carousel-inner">
                            {
                               
                                data["papers"].map((item, key) => 
                                    {
                                        var call_name=""
                                        if (key === 0){
                                            call_name = "carousel-item active";
                                        }
                                        else {
                                            call_name = "carousel-item";
                                        }
                                        return <div className={call_name}>
                                            <h3 className="mb-0">{item["name"]}
                                                &nbsp;&nbsp;(<span className="text-primary">{item["conference_year"]}</span>)
                                            </h3>
                                            <p className="lead mb-5">
                                                <span className="text-primary"><b> {item["authors"][0]} </b></span>
                                                {
                                                    item["authors"].slice(1).map((author_name, key) => {
                                                        return author_name
                                                    })
                                                }
                                            </p>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col">
                                                        <div id="image-div">
                                                            <img src={item["image"]}
                                                                alt=""
                                                                id="image-tag"/>
                                                        </div>
                                                        <div className="text-center">
                                                            {
                                                                Object.keys(item["buttons"]).map((key, index) => ( 
                                                                    <a href={item["buttons"][key]} className="btn btn-primary" role="button" id="button-margin"> {key} </a>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col d-none d-sm-block" id="desc-style">
                                                        <p className="lead mb-5"> {item["description"]} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    }
                                )
                            }
                        </div>
                        <a className="carousel-control-prev" href="#demo1" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo1" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publications

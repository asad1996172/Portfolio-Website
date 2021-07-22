import React from 'react'
import data from '../../../data/projects.json';
import CarouselItemContent from '../projects/carousel_item_content';
import Carousel from 'react-bootstrap/Carousel';


const Projects = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
            <div className="w-100">
                <div className="container">
                    <ul class="nav nav-pills">
                        <li>
                            <a class="btn btn-primary" role="button" data-toggle="pill" href="#web_dev" id="subject_style">
                                Web Development</a>
                        </li>
                        <li class="active">
                            <a class="btn btn-primary" role="button" data-toggle="pill" href="#data_science" id="subject_style">
                                Data Science</a>
                        </li>
                        <li>
                            <a class="btn btn-primary" role="button" data-toggle="pill" href="#mob_dev" id="subject_style">
                                Mobile Development</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="web_dev" class="tab-pane active">
                            <Carousel id="carousel_style">   
                                {
                                    data["projects"]["web_dev"].map((item, key) => 
                                        {
                                            return <Carousel.Item>
                                                        <CarouselItemContent 
                                                            project_name={item["name"]} 
                                                            project_short_desc={item["short_desc"]}
                                                            project_desc={item["description"]}
                                                            image_path={item["image"]}
                                                            buttons={item["buttons"]}
                                                        />
                                                    </Carousel.Item>
                                        }
                                    )
                                }
                            </Carousel>
                        </div>
                        <div id="data_science" class="tab-pane fade">
                            <Carousel id="carousel_style">   
                                {
                                    data["projects"]["data_science"].map((item, key) => 
                                        {
                                            return <Carousel.Item>
                                                        <CarouselItemContent 
                                                            project_name={item["name"]} 
                                                            project_short_desc={item["short_desc"]}
                                                            project_desc={item["description"]}
                                                            image_path={item["image"]}
                                                            buttons={item["buttons"]}
                                                        />
                                                    </Carousel.Item>
                                        }
                                    )
                                }
                            </Carousel>
                        </div>
                        <div id="mob_dev" class="tab-pane fade">
                            <Carousel id="carousel_style">   
                                {
                                    data["projects"]["mob_dev"].map((item, key) => 
                                        {
                                            return <Carousel.Item>
                                                        <CarouselItemContent 
                                                            project_name={item["name"]} 
                                                            project_short_desc={item["short_desc"]}
                                                            project_desc={item["description"]}
                                                            image_path={item["image"]}
                                                            buttons={item["buttons"]}
                                                        />
                                                    </Carousel.Item>
                                        }
                                    )
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Projects

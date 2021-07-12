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
                                data["papers"].map((item, key) => (
                                    <li data-target="#demo1" data-slide-to={key}></li>        
                                ))
                            }
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h3 className="mb-0">A Girl Has No Name: Automated Authorship Obfuscation using Mutant-X
                                    (<span className="text-primary">PoPETs 2019</span>)
                                </h3>
                                <p className="lead mb-5">
                                    <span className="text-primary"><b> Asad Mahmood,  </b></span>
                                    Faizan Ahmed,
                                    Zubair Shafiq, 
                                    Padmini Srinivasan 
                                    and Fareed Zaffar
                                </p>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div id="image-div">
                                                <img src="/assets/img/mutant-X.png"
                                                    alt=""
                                                    id="image-tag"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="https://petsymposium.org/2019/files/papers/issue4/popets-2019-0058.pdf" className="btn btn-primary" role="button" id="button-margin"> paper </a>
                                                <a href="https://github.com/asad1996172/Mutant-X" className="btn btn-primary" role="button" id="button-margin"> code </a>
                                                <a href="https://www.slideshare.net/secret/aKHVXj8PXiMm2" className="btn btn-primary" role="button" id="button-margin"> slides </a>
                                            </div>
                                        </div>
                                        <div className="col" id="desc-style">
                                            <p className="lead mb-5"> Stylometric authorship attribution aims to identify an anonymous or disputed document’s author by examining its writing style. The development of powerful machine learning based stylometric authorship attribution methods presents a serious privacy threat for individuals such as journalists and activists who wish to publish anonymously. To counter these, in this paper, we presented an automated authorship obfuscation tool called Mutant-X which uses genetic algorithms (GAs) and sentiment preserving word embeddings. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <h3 className="mb-0">A Girl Has A Name: Detecting Authorship Obfuscation
                                    (<span className="text-primary">ACL 2020</span>)
                                </h3>
                                <p className="lead mb-5">
                                    <span className="text-primary"><b> Asad Mahmood,  </b></span>
                                    Zubair Shafiq, 
                                    and Padmini Srinivasan
                                </p>

                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div id="image-div">
                                                <img src="/assets/img/obfuscation_detection.png"
                                                    alt=""
                                                    id="image-tag"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="https://www.aclweb.org/anthology/2020.acl-main.203.pdf" className="btn btn-primary" role="button" id="button-margin"> paper </a>
                                                <a href="https://github.com/asad1996172/Obfuscation-Detection" className="btn btn-primary" role="button" id="button-margin"> code </a>
                                                <a href="https://www.slideshare.net/AsadMahmood34/a-girl-has-a-name-detecting-authorship-obfuscation-1" className="btn btn-primary" role="button" id="button-margin"> slides </a>
                                            </div>
                                        </div>
                                        <div className="col" id="desc-style">
                                            <p className="lead mb-5"> Authorship attribution aims to identify the author of a text based on the stylometric analysis. Authorship obfuscation, on the other hand, aims to protect against authorship attribution by modifying a text’s style. In this paper, we evaluate the stealthiness of state-of-the-art authorship obfuscation methods under an adversarial threat model. We show that the existing authorship obfuscation methods are not stealthy as their obfuscated texts can be identified with an average F1 score of 0.87. The reason for the lack of stealthiness is that these obfuscators degrade text smoothness, as ascertained by neural language models, in a detectable manner. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <h3 className="mb-0">Twitter Bots and Gender Detection using Tf-idf
                                    (<span className="text-primary">CLEF 2019</span>)
                                </h3>
                                <p className="lead mb-5">
                                    <span className="text-primary"><b> Asad Mahmood  </b></span>
                                    and Padmini Srinivasan
                                </p>

                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div id="image-div">
                                                <img src="/assets/img/twitterbots.png"
                                                    alt=""
                                                    id="image-tag"/>
                                            </div>
                                            <div className="text-center">
                                                <a href="http://www.dei.unipd.it/~ferro/CLEF-WN-Drafts/CLEF2019/paper_253.pdf" className="btn btn-primary" role="button" id="button-margin"> paper </a>
                                            </div>
                                        </div>
                                        <div className="col" id="desc-style">
                                            <p className="lead mb-5"> This paper presents a model that can perform bots and gender detection on Twitter using just the tweets from the respective Twitter user. We show that a simple frequency based approach with a machine learning algorithm i.e., SVM can achieve high accuracy if the preprocessing is done right. In English language. our model detects bots with an accuracy of 91% and gender with an accuracy of 82%. Main strength of this model is its simplicity along-with the ease with which it can be used with other languages. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

import React from 'react';
// import fiel from '../component/logo.jpg';
import './Project.css';

const Project = () => {
    return (

        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={require('../component/logo.jpg')} alt='not attach' height={50} width={50} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>



                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require('../component/nature1.jpg')} alt='not attach' height={'500px'} width={'100%'} />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require('../component/nature3.jpg')} alt='not attach' height={'500px'} width={'100%'} />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require('../component/nature4.jpg')} alt='not attach' height={'500px'} width={'100%'} />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <div class="card-group ">
                <div class="card mt-5">
                    <img src={require('../component/zahid.jpg')} class="card-img-top " alt="..." style={{ height: "200px", width: "200px" }} />
                    <div class="card-body">
                        <h5 class="card-title">Mohd Zahid</h5>
                        <p class="card-text">Hello My Name is Mohd Zahid I am a MERN Stack Develor of EasyEdulab Private Limited Company which is Situated of the Lucknow My team member is filly Support to learn and easy.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card mt-5">
                    <img src={require('../component/raj.jpg')} class="card-img-top" alt="..." style={{ height: "200px", width: "200px" }} />
                    <div class="card-body">
                        <h5 class="card-title">Mohd Sajid</h5>
                        <p class="card-text">Hello My Name is Mohd Sajid I am a PHP Develor of Accenture Private Limited Company which is Situated of the Lucknow My team member is filly Support to learn and easy.</p>
                        <p class="card-text"><small class="text-muted">Last updated 60 mins ago</small></p>
                    </div>
                </div>
                <div class="card mt-5 px-40">
                    <img src={require('../component/ali.jpg')} class="card-img-top " alt="..." style={{ height: "200px", width: "200px" }} />
                    <div class="card-body">
                        <h5 class="card-title">Mohd Adnan</h5>
                        <p class="card-text">Hello My Name is Mohd Adnan I am a PHP Develor of Yasham Private Limited Company which is Situated of the Raipur My team member is filly Support to learn and easy.</p>
                        <p class="card-text"><small class="text-muted">Last updated 45 mins ago</small></p>
                    </div>
                </div>
            </div>
            <iframe style={{ height: "300px", width: "100%" }} className="mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.984288288392!2d81.03043141451975!3d26.872240268301525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be36f1cdc6819%3A0xdd80538ea28b01ab!2sEasyEdulab!5e0!3m2!1sen!2sin!4v1658224229512!5m2!1sen!2sin"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



        </header>

    )
}

export default Project
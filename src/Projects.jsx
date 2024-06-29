import React from 'react';
import './project.css'


const Project = () => {
    return (
        <div className='project-page'>
            <div>
                <img className='project-img' src="../public/project.png" alt="" />
            </div>
            <div className='buttons'>
                <button>Bathroom</button>
                <button>Bed Room</button>
                <button>Kitchan</button>
                <button>Living Area</button>
            </div>
            <div className='project-cards'>
                <div className='project-card'>
                    <img className='project-img-card' src="../public/1.png" alt="" />
                    <div className='main-cards'>
                        <div className='cards-text'>
                            <h1>Minimal Bedroom</h1>
                            <p>Minimal / Bedroom</p>
                        </div>
                        <img src="../public/pj.svg" alt="" />

                    </div>
                </div>

                <div className='project-card'>
                    <img className='project-img-card' src="../public/2.png" alt="" />
                    <div className='main-cards'>
                        <div className='cards-text'>
                            <h1>Minimal Bedroom</h1>
                            <p>Minimal / Bedroom</p>
                        </div>
                        <img src="../public/pj.svg" alt="" />

                    </div>
                </div>

                <div className='project-card'>
                    <img className='project-img-card' src="../public/3.png" alt="" />
                    <div className='main-cards'>
                        <div className='cards-text'>
                            <h1>Minimal Bedroom</h1>
                            <p>Minimal / Bedroom</p>
                        </div>
                        <img src="../public/pj.svg" alt="" />

                    </div>
                </div>

                <div className='project-card'>
                    <img className='project-img-card' src="../public/4.png" alt="" />
                    <div className='main-cards'>
                        <div className='cards-text'>
                            <h1>Minimal Bedroom</h1>
                            <p>Minimal / Bedroom</p>
                        </div>
                        <img src="../public/pj.svg" alt="" />

                    </div>
                </div>

               


            </div>


        </div>
    );
};

export default Project;
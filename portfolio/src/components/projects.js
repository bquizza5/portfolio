import React, { useEffect, useState } from 'react'
import axios from 'axios'
import placeholder from '../images/placeholder.png'
import pitchBlack from '../images/pitchBlack.png'
import waterMyPlants from '../images/watermyplants.png'

const Projects = () => {
    const [projects, setProjects] = useState()

    useEffect(() => {
        axios
            .get('backendendpoint')
            .then(res => {
                setProjects(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='projectList'>
                {/* {projects.map((project) => {
                    return <div></div>
                })} */}
                <div className='project'>
                    <img className='projectImg' src={pitchBlack}></img>
                    <div>
                    <h2>Pitch Black</h2>
                    <p>
                    Pitch Black is a multi-user-dungeon game with a simple GUI.
                     I played a fundamental part in building the front-end movement
                      functionality and I assisted in designing the database.
                    </p>
                    <p>Django | 0auth2 | React | React-Router | Axios</p>
                    <div>Repo - Deployment</div>
                    </div>
                </div>
                <div className='project'>
                    <img className='projectImg' src={waterMyPlants}></img>
                    <div>
                    <h2>Water My Plants</h2>
                    <p>
                    Water My Plants is a web app that helps you keep track 
                    of your plant watering schedule. I participated by building 
                    controllers, services, and models for our back-end Spring server.
                    </p>
                    <p>Java Spring | 0auth2 | Heroku</p>
                    <div>Repo</div>
                    </div>
                </div>
                <div className='project'>
                    <img className='projectImg' src={placeholder}></img>
                    <div>
                    <h2>project 1</h2>
                    <p>
                        description: the project description the project description
                         the project description the project description the project
                          description the project description
                    </p>
                    <p>Technologies</p>
                    <div>links</div>
                    </div>
                </div>
                <div className='project'>
                    <img className='projectImg' src={placeholder}></img>
                    <div>
                    <h2>project 1</h2>
                    <p>
                        description: the project description the project description
                         the project description the project description the project
                          description the project description
                    </p>
                    <p>Technologies</p>
                    <div>links</div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Projects;
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import placeholder from '../images/placeholder.png'

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
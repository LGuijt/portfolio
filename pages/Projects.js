import { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("https://worthy-whisper-750d814f5c.strapiapp.com/api/projects?populate=*")
            .then((response) => response.json())
            .then((data) => setProjects(data.data));
    }, []);
    return (
        <div className="project-content">
            <h1>My Projects</h1>
            <div className="projects">
                    {projects.map((project) => 
                    <div key={project.id} className="project-item">
                        <p className='projects-name'>{project.Name}</p>
                        <p className='projects-date'>{project.Date}</p>
                        <p className='projects-text'>{project.Description}</p>
                        <img src={project.CoverImage.url}></img>
                        <div className='projects-talents'>
                            <ul>
                                {project.talent.map((talent) => <li key={talent.id}>{talent.Name}</li>)}
                            </ul>
                        </div>
                        <Link to={`/projects/${project.id}`}>Read more</Link>
                    </div>
                    )
                    }
            </div>
        </div>
    );
}
export default Projects;
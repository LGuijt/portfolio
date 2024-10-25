import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectPage = () => {
    const { Id } = useParams();
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("https://worthy-whisper-750d814f5c.strapiapp.com/api/projects?populate=*")
            .then((response) => response.json())
            .then((data) => setProjects(data.data));
    }, []);
    return (
        <div className="content">
            <Link to="/projects" className="project-link"> Back to projects</Link>
            <div className="projects">
                {projects.map((project) => project.id == Id &&
                    <div key={project.id} className="projectpage">
                        <p className="project-name">{project.Name}</p>
                        <p className="project-date">{project.Date}</p>
                        <p className="project-text">{project.Description}</p>
                        <div className="img-container">
                            {project.Media.map((media) => <img key={media.id} src={media.url}></img>)}
                        </div>
                        <div className="project-talent">
                            <ul>
                                {project.talent.map((talent) => <li key={talent.id}>{talent.Name}</li>)}
                            </ul>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default ProjectPage;
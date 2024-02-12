import "../App.css";

const ProjectList = ({ projects }) => {
    return (
        <ul className="list" >
            {projects.map((project, index) => (
                <li key={index} className="item">
                    <img
                        src={project.img}
                        alt={project.category}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ProjectList;
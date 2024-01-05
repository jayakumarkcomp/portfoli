import React, {useState} from 'react'
import './index.css'

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState({
    projectName: '',
    projectLink: '',
    projectDescription: '',
  })
  const [projects, setProjects] = useState([])

  const handleInputChange = e => {
    const {name, value} = e.target
    setProjectDetails(prevDetails => ({...prevDetails, [name]: value}))
  }

  const handleAddProject = () => {
    if (
      projectDetails.projectName.trim() !== '' &&
      projectDetails.projectLink.trim() !== '' &&
      projectDetails.projectDescription.trim() !== ''
    ) {
      setProjects(prevProjects => [...prevProjects, projectDetails])
      setProjectDetails({
        projectName: '',
        projectLink: '',
        projectDescription: '',
      })
    }
  }

  return (
    <div>
      <div>
        <h2>Add a Project</h2>
        <div className="project-form">
          <label htmlFor="projectName" className="project-name">
            Project Name:
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={projectDetails.projectName}
            onChange={handleInputChange}
            className="praject-name-input"
          />

          <label htmlFor="projectLink" className="project-link">
            Project Link:
          </label>
          <input
            type="text"
            id="projectLink"
            name="projectLink"
            value={projectDetails.projectLink}
            onChange={handleInputChange}
            className="project-link-input"
          />

          <label htmlFor="projectDescription" className="project-desc">
            Project Description:
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={projectDetails.projectDescription}
            onChange={handleInputChange}
            className="project-desc-textarea"
          ></textarea>

          <button onClick={handleAddProject} className="add-button">
            Add
          </button>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1436"
          height="112"
          viewBox="0 0 1436 112"
          fill="none"
          className="yellow-vector"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 83.9182L59.8333 74.594C119.667 65.2697 239.333 46.6212 359 48.9523C478.667 51.2833 598.333 74.594 718 74.594C837.667 74.594 957.333 51.2833 1077 34.9659C1196.67 18.6485 1316.33 9.32425 1376.17 4.66212L1436 0V111.891H1376.17C1316.33 111.891 1196.67 111.891 1077 111.891C957.333 111.891 837.667 111.891 718 111.891C598.333 111.891 478.667 111.891 359 111.891C239.333 111.891 119.667 111.891 59.8333 111.891H0V83.9182Z"
            fill="#FDC435"
          />
        </svg>
      </div>

      <div className="project-view">
        <h2 className="project-title">Projects View</h2>
        <div className="each-project">
          {projects.map((project, index) => (
            <div key={index} className="each-item">
              <h3 className="user-praject-name">{project.projectName}</h3>
              <p>
                Link:{' '}
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.projectLink}
                </a>
              </p>
              <p className="user-project-desc">{project.projectDescription}</p>
              <button className="view-button">View Project</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

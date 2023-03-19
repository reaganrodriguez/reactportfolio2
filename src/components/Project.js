
import { useParams ,useNavigate} from 'react-router-dom';
import projectsData from '../jsonfile/projects.json';

const Project = () => {
    const navigate=useNavigate();
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found.</div>;   
  }

  const { title, deployedLink, githubLink, imageUrl, description, techStack } = project;

  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={`${title} screenshot`} />
      <p>{description}</p>
      <p>Deployed link: <a href={deployedLink} target="_blank" >{deployedLink}</a></p>
      <p>GitHub link: <a href={githubLink} target="_blank" >{githubLink}</a></p>
      <p>Tech stack: {techStack.join(', ')}</p>
      <button onClick={()=> navigate('/projects')}>Goto Projects page</button>
    </div>
  );
};
 
export default Project;

import {Link} from 'react-router-dom'

const Projects = () => {
    return(
        <div className="projects-container">

            <h2>Projects</h2>
            <div className="projects">
                <Link to='https://regal-tanuki-9c1a67.netlify.app' style={{textDecoration:'none'}}>
                    <div className="project">
                        <h3>Star Wars Trivia</h3>
                    </div>
                </Link>
                
                <Link to='https://creative-strudel-0cfd0a.netlify.app' style={{textDecoration:'none'}}>
                    <div className="project">
                        <h3>Hangman</h3>
                    </div>
                </Link>
                
                <Link to='https://starlit-cupcake-b53836.netlify.app' style={{textDecoration:'none'}}>
                    <div className="project">
                        <h3>Blog App</h3>
                    </div>
                </Link>
                
            </div>
            
        </div>
    )
}

export default Projects
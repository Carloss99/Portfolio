import {Link} from 'react-router-dom'

const Projects = () => {
    return(
        <div className="projects-container" >

            <h2 class='text-center text-2xl'>Projects</h2>
            <div className="projects" class='flex justify-around w-1/2 mx-auto my-10'>
                <Link to='https://regal-tanuki-9c1a67.netlify.app' >
                    <div className="project" class='h-60 w-40 px-5 py-20 border-2 boder-black border-blue-300 text-center rounded-2xl  hover:bg-blue-300'>
                        <h3>Star Wars Trivia</h3>
                    </div>
                </Link>
                
                <Link to='https://creative-strudel-0cfd0a.netlify.app' >
                    <div className="project" class='h-60 w-40 px-5 py-20 border-2 boder-black border-blue-300 text-center rounded-2xl  hover:bg-blue-300'>
                        <h3>Hangman</h3>
                    </div>
                </Link>
                
                <Link to='https://starlit-cupcake-b53836.netlify.app' >
                    <div className="project" class='h-60 w-40 px-5 py-20 border-2 boder-black border-blue-300 text-center rounded-2xl  hover:bg-blue-300'>  
                        <h3>Blog App</h3>
                    </div>
                </Link>
                
            </div>
            
        </div>
    )
}

export default Projects
import {Link} from 'react-router-dom'

const Projects = () => {

    const projectStyle = 'h-60 w-40 py-20 border-4 border-zinc-200  text-center rounded-2xl bg-zinc-400 hover:bg-blue-600 font-bold text-white'

    return(
        <div className="projects-container" >

            <h2 class='text-center text-2xl'>Projects</h2>
            <div className="projects" class='flex justify-around w-3/4 mx-auto my-10'>
                <Link to='https://regal-tanuki-9c1a67.netlify.app' >
                    <div className="project" class={projectStyle}>
                        <h3>Star Wars Trivia</h3>
                    </div>
                </Link>
                
                <Link to='https://creative-strudel-0cfd0a.netlify.app' >
                    <div className="project" class={projectStyle}>
                        <h3>Hangman</h3>
                    </div>
                </Link>
                
                <Link to='https://starlit-cupcake-b53836.netlify.app' >
                    <div className="project" class={projectStyle}>  
                        <h3>Blog App</h3>
                    </div>
                </Link>

                <Link to='https://wonderful-wisp-ad741f.netlify.app/'>
                    <div className="project" class={projectStyle}>
                        <h3>Daytracker</h3>
                    </div>
                </Link>
                
            </div>
            
        </div>
    )
}

export default Projects
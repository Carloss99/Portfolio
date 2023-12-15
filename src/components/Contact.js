import {Link} from 'react-router-dom'


const Contact = () =>{
    return(
        <div class='my-20'>
            <h2 class='text-center text-2xl py-10 my-32 mx-auto border-y-2 w-3/4'>Contact</h2>
            <ul class='flex justify-between w-1/4 m-auto text-lg'>
                <Link to='https://www.linkedin.com/in/carlosfigueroa99'><li class='hover:text-2xl'>LinkedIn</li></Link>
                <Link to='https://github.com/Carloss99'><li class='hover:text-2xl'>Github</li></Link>

            </ul>
        </div>
    )
}

export default Contact
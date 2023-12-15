const Header = () => {
    
    const backgroundImage = {
       'position':'relative',
        'backgroundImage':"url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'backgroundPosition':'center',
        'backgroundSize':'cover',
        'opacity':'0.5',
        'filter':'blur(1px)',
        'backgroundColor':'black'
    }

    const quote = {
        'position':'absolute',
        'top':'20%',
        'left':'10%',
    }


    return (
        <div class='bg-black relative'>
            <div className='header' class=' h-screen flex justify-center items-center' style={backgroundImage}>
            
            </div>
            <div class='text-white text-center text-3xl w-1/2  font-bold leading-10' style={quote}>My name is Carlos Figueroa. I am a Full Stack Developer on a journey to build and develop fast , efficient and user-friendly websites.</div>
            
        </div>
        
    )
}

export default Header


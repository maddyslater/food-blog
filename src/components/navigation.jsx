import { NavLink } from 'react-router-dom'
import '../stylesheet.css'

const Navigation = (props) => {
    return (
        <div className="nav-bar">
            <h3 className="nav-name">DartGrub</h3>
            <nav className="nav-pages">
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link' to="/blogcarousel">Blog</NavLink>
                <NavLink className='nav-link' to="/blogscroll">All Posts</NavLink>
                <NavLink className='nav-link' to="/posts/new">Add Post</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;
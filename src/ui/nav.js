import { useLocation } from 'react-router-dom';

export default function Nav() {
    const location = useLocation();
    const { pathname } = location;
    const isHome = pathname === '/';

    return (
        <div className='nav'>
            <span><a href='/' className={isHome ? 'current-path' : null}>Home</a></span>
            <span><a href='/list' className={isHome ? null : 'current-path'}>List</a></span>
        </div>
    );
}

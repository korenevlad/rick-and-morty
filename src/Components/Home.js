import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { internalPaths } from '../InternalPaths';

export const Home = () => {
    return(
        <div className="container-fluid">
            <div className="row h-50">
                <h1 className="text-center pt-3">Welcome!</h1>
                <div className='col text-center'>
                    <div>
                        <NavLink to={internalPaths.personages}>
                            {({isActive}) =>
                                <button
                                    className={`btn btn-lg ${isActive ? "btn-outline-info" : "btn-outline-light"}`}
                                    style={{ width: '150px', height: '50px' }}>
                                    Characters
                                </button> 
                            }
                        </NavLink>
                    </div>
                    <div className='pt-1'>
                        <NavLink to={internalPaths.locations}>
                            {({isActive}) =>
                                <button
                                    className={`btn btn-lg ${isActive ? "btn-outline-info" : "btn-outline-light"}`}
                                    style={{ width: '150px', height: '50px' }}>
                                    Location
                                </button> 
                            }
                        </NavLink>
                    </div>
                    <div className='pt-1'>
                        <NavLink to={internalPaths.episodes}>
                            {({isActive}) =>
                                <button
                                    className={`btn btn-lg ${isActive ? "btn-outline-info" : "btn-outline-light"}`}
                                    style={{ width: '150px', height: '50px' }}>
                                    Episodes
                                </button> 
                            }
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="row h-50">
                <Outlet/>
            </div>
            <div className="pt-3"></div>
        </div>
    );
}
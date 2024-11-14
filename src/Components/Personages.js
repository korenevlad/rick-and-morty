import dataCharacters from '../Data/characters.json';
import { NavLink, Outlet } from 'react-router-dom';
import { internalPaths } from '../InternalPaths';

export const Personages = () => {
    return (
        <div className="col-8 pt-2">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="row row-cols-4">
                            {
                                dataCharacters.map((item) => {
                                    return(
                                        <div className="col text-center pt-3">
                                            <NavLink 
                                                to={internalPaths.personage(item.id)}
                                                state={item}
                                            >
                                                {({isActive}) =>
                                                    <button
                                                        className={`btn ${isActive ? "btn-info" : "btn-secondary"}`}
                                                        style={{ width: '150px', height: '100px' }}>
                                                        {item.name}
                                                    </button> 
                                                }
                                            </NavLink>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Outlet />
                </div> 
            </div>
        </div>
    );
}
import dataEpisodes from '../data/episode.json';
import { Link, Outlet } from 'react-router-dom';

export const Episodes = () => {
    return (
        <div className="col-8 pt-2">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="row row-cols-4">
                            {
                                dataEpisodes.map((item) => {
                                    return(
                                        <div className="col text-center pt-3">
                                            <Link 
                                                to={`/episodes/${item.id}`}
                                                state={item}
                                            >
                                                <button type="button" class="btn btn-secondary btn" style={{ width: '150px', height: '100px' }}>
                                                    {item.name}
                                                </button>
                                            </Link>
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
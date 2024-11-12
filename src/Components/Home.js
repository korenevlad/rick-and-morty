import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Home = () => {
    return(
        <div className="container-fluid">
            <div className="row h-50">
                <h1 className="text-center pt-3">Welcome!</h1>
                <div className='col text-center'>
                    <div>
                        <Link to="/personages">
                            <button className="btn btn-outline-light btn-lg" style={{ width: '150px', height: '50px' }}>Персонажи</button>
                        </Link>
                    </div>
                    <div className='pt-1'>
                        <Link to="/locations">
                            <button className="btn btn-outline-light btn-lg" style={{ width: '150px', height: '50px' }}>Локации</button>
                        </Link>
                        
                    </div>
                    <div className='pt-1'>
                        <Link to="/episodes">
                            <button className="btn btn-outline-light btn-lg" style={{ width: '150px', height: '50px' }}>Эпизоды</button>
                        </Link>
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
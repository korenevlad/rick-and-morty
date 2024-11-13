import { useLocation } from 'react-router-dom';

export const LocationDetails = () => {
    const location = useLocation();
    const {name, type, dimension, created} = location.state;
    return (
        <>
            <div className="col-4 text-center pt-3">
                <div class="card border-light mb-3">
                    <div class="card-header">Card Of Location</div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="badge bg-dark rounded-pill text-start">Name:</span>
                                <div className="text-end">{name}</div>
                            </li>
                            {type && 
                                (<li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="badge bg-dark rounded-pill text-start">Type:</span>
                                    <div className="text-end">{type}</div>
                                </li>)
                            }
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="badge bg-dark rounded-pill text-start">Dimension:</span>
                                <div className="text-end">{dimension}</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="badge bg-dark rounded-pill text-start">Created:</span>
                                <div className="text-end">{created}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
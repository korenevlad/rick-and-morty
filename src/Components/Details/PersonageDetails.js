import { useLocation } from 'react-router-dom';

export const PersonageDetails = () => {
    const location = useLocation();
    const {name, status, species, type, gender, image, created} = location.state;
    return (
        <>
            <div className="col-4 text-center pt-3">
                
                <div class="card border-light mb-3">
                    <div class="card-header">Card Of Personage</div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <img src={`${image}`} style={{ width: '220px', height: '220px' }} />
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="badge bg-dark rounded-pill text-start">Name:</span>
                                <div className="text-end">{name}</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="badge bg-dark rounded-pill text-start">Status:</span>
                                <div className="text-end">{status}</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="badge bg-dark rounded-pill text-start">Species:</span>
                                <div className="text-end">{species}</div>
                            </li>
                            {type && 
                                (<li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="badge bg-dark rounded-pill text-start">Type:</span>
                                    <div className="text-end">{type}</div>
                                </li>)
                            }
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="badge bg-dark rounded-pill text-start">Gender:</span>
                                <div className="text-end">{gender}</div>
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
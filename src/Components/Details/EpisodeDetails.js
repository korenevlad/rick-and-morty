import { useParams } from 'react-router-dom';
import dataCharacters from '../../Data/episode.json';

export const EpisodeDetails = () => {
    const {id} = useParams();
    const {name, air_date, episode, created} = dataCharacters.find(item => item.id == id)
    return (
        <>
            <div className="col-4 text-center pt-3">
                <div class="card border-light mb-3">
                    <div class="card-header">Card Of Episode</div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="badge bg-dark rounded-pill text-start">Name:</span>
                                <div className="text-end">{name}</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="badge bg-dark rounded-pill text-start">Air date:</span>
                                <div className="text-end">{air_date}</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="badge bg-dark rounded-pill text-start">Episode:</span>
                                <div className="text-end">{episode}</div>
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
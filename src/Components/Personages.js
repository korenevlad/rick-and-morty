import dataCharacters from '../data/characters.json'

export const Personages = () => {
    return (
        <div className="col-8 pt-2">
            <div className="container">
                <div className="row">
                        <div className="col-8">
                            <div className="row row-cols-4">
                                {
                                    dataCharacters.map((item, index) => {
                                        return(
                                            <div className="col text-center pt-3">
                                                <button type="button" class="btn btn-secondary btn" style={{ width: '150px', height: '100px' }}>
                                                    {item.name}
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-4 text-center pt-3"><h5>Information about the character</h5></div>     {/* убрать тут  */}
                </div> 
            </div>
        </div>
    );
}
import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <div className="col-lg-6 mb-4">
                <LastMovieInDb/>
            </div>
            
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <div className="col-lg-6 mb-4">
                <GenresInDb/>
            </div>

        </div>
    )
}

export default ContentRowCenter;
import React from 'react';

const Info = ({info}) => {
    const {strArtistThumb, strGenre, strBiographyES} = info;
    if(Object.keys(info).length === 0) return null;

    return (  
        <div className="card border-light">
            <div className="card-header bg-primary text.light font-weight-bold">
                Información artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="logo artista"></img>
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>                
            </div>
        </div>
    );
}
 
export default Info;
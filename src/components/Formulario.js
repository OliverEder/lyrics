import React, { useState} from 'react';

const Formulario = ({guardarBusquedaletra}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista:"",
        cancion:"",
    });
    const [error, guardarError] = useState(false);
    const {artista, cancion} = busqueda;
    //funcion para leer el contenido delos input
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda, 
            [e.target.name] : e.target.value
        });
    }

    //Consultar las API
    const buscarInformacion = e => {
        e.preventDefault();
        if(artista.trim() === "" || cancion.trim() === ""){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarBusquedaletra(busqueda);
    }

    return ( 
        <div className="bg-info">
            <div className="container">
                {error ? <p className="alert alert-danger text-center p-2">
                    Todos los cambios son obligatorios
                </p>: null}
                <div className="row">
                    
                    <form
                        onSubmit={buscarInformacion} 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">
                                Buscador letras de canciones
                            </legend>
                            <div className="row"> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;
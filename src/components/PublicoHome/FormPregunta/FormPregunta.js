import React from 'react';
import * as firebase from 'firebase';

const FormPregunta = ({nombreOrador, idOrador}) => {
    const submit = e => {
        console.log("submit");
        e.preventDefault();
        var mensaje = document.getElementById('pregutnaPublico').value;
        var mensajeRef = firebase.database().ref(idOrador.idOrador).child("preguntas");
        let nuevoMensaje = mensajeRef.push();
        nuevoMensaje.set({
            pregunta: mensaje
        });
    };

    return (
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="textarea1">Realiza tu pregunta a {nombreOrador} </label>
                <input className="form-control" type="text" id="pregutnaPublico" placeholder="Escribe tu pregunta" required />
            </div>
            <button className="btn btn-primary">Enviar</button>
        </form>
    );
};

export default FormPregunta;

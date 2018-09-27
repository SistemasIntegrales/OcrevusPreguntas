import React from 'react';
import * as firebase from 'firebase';

const FormPregunta = ({nombreOrador, idOrador, onNewQuestion}) => {
    const submit = e => {
        console.log("submit");
        e.preventDefault();
        onNewQuestion();
        var mensaje = document.getElementById('pregutnaPublico').value;
        var mensajeRef = firebase.database().ref(idOrador.idOrador).child("preguntas");
        let nuevoMensaje = mensajeRef.push();
        nuevoMensaje.set({
            pregunta: mensaje
        });
        document.getElementById('pregutnaPublico').value = "";
    };

    return (
        <form onSubmit={submit}>
            <div className="form-group">
                {/*<h1 htmlFor="textarea1">Realiza tu pregunta a {nombreOrador} </h1>*/}
                <input className="form-control" type="text" id="pregutnaPublico" placeholder="Escribe tu pregunta" required />
            </div>
            <button className="btn btn-primary">Enviar</button>
        </form>
    );
};

export default FormPregunta;

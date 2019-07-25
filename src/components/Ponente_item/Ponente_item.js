import React from 'react';
import './Ponente_item.css';
import {Link} from "react-router-dom";

//const VideoListItem = (props) => {
const PonenteItem = ({origen, ponente, onPonenteSelect}) => {
  if (origen === "orador") {
    console.log(`Id del orador en turno ${ponente.id}`);
    const oradorEnTurno = ponente.id;
    const orador2 = oradorEnTurno+"";
    console.log(oradorEnTurno);
    console.log(orador2);
    return (
      <li
        onClick={
          () => onPonenteSelect(ponente)
        }
        className="list-group-item">
        <Link to={{
          pathname: `/oradores/${ponente.nombre}`,
          state: ponente.id
        }}>{ponente.nombre}</Link>
      </li>
    );
  } else {
    console.log("ID ponente", ponente.id);
    return (
      <li
        onClick={
          () => onPonenteSelect(ponente)
        }
        className="list-group-item"
      >
        <Link
          to={{
            pathname: `/preguntar/${ponente.nombre}`,
            state:{
              idOrador: ponente.id
            }
          }}
        >
          {ponente.nombre}
        </Link>
      </li>
    );
  }
};

export default PonenteItem;

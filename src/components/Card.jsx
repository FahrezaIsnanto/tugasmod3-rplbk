import React from "react";
import { useEffect } from "react";
import "./Card.css";

export default function Card(props) {
  useEffect(() => {
    console.log("kepanggil");
    //alert("Kartu nama ditampilkan");
  }, []);
  return (
    <div className="card">
      <div className="container">
        <h4>{props.nama}</h4>
        <p>Kelompok {props.kelompok}</p>
      </div>
    </div>
  );
}

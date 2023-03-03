import React from "react";

function Card({ mock }) {
  const { imagem, nome, descricao, preco } = mock;

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        border: "2px solid orange",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
      }}
    >
      <img
        src={imagem}
        alt={nome}
        style={{ width: "100%", height: "auto", borderRadius: "10px 10px 0 0" }}
      />
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 style={{ textAlign: "center" }}>{nome}</h3>
        <button
          style={{
            backgroundColor: "orange",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            marginTop: "10px",
          }}
          onClick={() => console.log(`Adicionando ${nome} ao carrinho.`)}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Card;

import React from "react";

const Nav = () => {
  return (
    <div
      style={{
        backgroundColor: "orange",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "35px",
        fontWeight: "bold",
        fontSize: "22px",
      }}
    >
      <img
        src="dnc-logo.svg"
        alt="Logo"
        style={{ width: "200px", marginRight: "10px", position: "absolute" }}
      />
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1rem",
          marginLeft: "13rem",
        }}
      >
        <li style={{ marginRight: "10px" }}>
          <a
            href="/variedades"
            style={{ color: "white", textDecoration: "none" }}
          >
            Variedades
          </a>
        </li>
        <li style={{ marginRight: "10px" }}>
          <a href="/lanches" style={{ color: "white", textDecoration: "none" }}>
            Lanches
          </a>
        </li>
        <li style={{ marginRight: "10px" }}>
          <a href="/pizzas" style={{ color: "white", textDecoration: "none" }}>
            Pizzas
          </a>
        </li>
        <li style={{ marginRight: "10px" }}>
          <a href="/doces" style={{ color: "white", textDecoration: "none" }}>
            Doces
          </a>
        </li>
        <li style={{ marginRight: "10px" }}>
          <a
            href="/promocoes"
            style={{ color: "white", textDecoration: "none" }}
          >
            Promoções
          </a>
        </li>
      </ul>
      <div
        style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
      >
        <a
          href="/minhas-compras"
          style={{ color: "white", textDecoration: "none" }}
        >
          Minhas Compras
        </a>
        <img
          src="cart.png"
          alt="Carrinho de Compras"
          style={{ width: "70px", marginRight: "5px" }}
        />
      </div>
    </div>
  );
};

export default Nav;

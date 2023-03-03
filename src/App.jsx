import React, { useState } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import { mock } from "./mock";

function App() {
  // Estado para controlar o item selecionado para exibir o modal
  const [selectedItem, setSelectedItem] = useState(null);

  // Função para atualizar o item selecionado quando clicado
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <Nav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "8rem",
          marginTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        {mock.map((item) => (
          <div key={item.id} onClick={() => handleItemClick(item)}>
            {/* Renderiza o componente de card passando as informações do item como props */}
            <Card mock={item} />
          </div>
        ))}
      </div>

      {/* Renderiza o modal se um item foi selecionado */}
      {selectedItem && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.imagem}
              alt={selectedItem.nome}
              style={{ borderRadius: "10px", border: "2px solid orange" }}
            />
            <div style={{ marginLeft: "20px" }}>
              <h2>{selectedItem.nome}</h2>
              <div
                style={{
                  borderBottom: "1px solid orange",
                  paddingBottom: "10px",
                  maxWidth: "265px",
                  marginBottom: "10px",
                }}
              ></div>
              <p>{selectedItem.descricao}</p>
              <h3
                style={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  fontSize: "25px",
                }}
              >
                {selectedItem.preco}
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "50px",
                }}
              >
                <button
                  onClick={handleCloseModal}
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    border: "none",
                    width: "200px",
                    fontSize: "1.2rem",
                    marginRight: "20px",
                  }}
                >
                  Continuar Comprando
                </button>
                <button
                  style={{
                    backgroundColor: "gray",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    width: "200px",
                    fontSize: "1.2rem",
                  }}
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

'use client'
import Image from "next/image";
import Banner from "/public/banner.png";
import { useState } from "react";
import estilos from "./page.module.css";
import {
  filtrarProdutos,
  buscarProdutos,
  produtosEntradas,
} from "./servico";
import Cards from "../componentes/Cards";
import Categorias from "../componentes/Categorias";
import CampoDeBusca from "../componentes/CampoDeBusca";

export default function Home() {
   
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
  const [botaoClicado, setBotaoClicado] = useState ("Entradas");

  const HandleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 3 && setDadosFiltrados(buscarProdutos(textoDigitado));
    setBotaoClicado("");
  }

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
  };

  return (
    <>
      <header className={estilos.estilos_topo}>
        <Image src={Banner} alt="banner"/>
        <div>
          <h1>
            RESTAURANT
          </h1>
          <p>
            De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados.
          </p>
        </div>
      </header>
      <main className={estilos.container_principal}>
        <Categorias 
          handleFiltro={handleFiltro}
          botaoClicado={botaoClicado}
        />

        <CampoDeBusca
          textoBuscaDigitado={textoBuscaDigitado}
          HandleBusca={HandleBusca}
        />

        <section className={estilos.secao_cards}>
          <h2>Cardápio</h2>
          <div className={estilos.container_cards}>
            {dadosFiltrados.map((produto) => (
              <Cards key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      </main>
    
    </>
  );
}

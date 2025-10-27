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
    <div>
 
    </div>
  );
}

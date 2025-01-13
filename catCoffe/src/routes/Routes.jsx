import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Login } from '../pages/login/Login';
import { Home } from '../pages/home/Home';
import { Cadastro } from '../pages/cadastro/Cadastro';
import { Carrinho } from '../pages/carrinho/Carrinho';
import { Produtos } from '../pages/produtos/Produtos';
import { NotFound } from '../pages/notFound/NotFound'; 
import { Sobre } from '../pages/sobre/Sobre';
import { Descricao } from '../pages/descricao/Descricao';

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="carrinho" element={<Carrinho />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="sobre" element={<Sobre/>}/>
        <Route path="descriçao" element={<Descricao/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

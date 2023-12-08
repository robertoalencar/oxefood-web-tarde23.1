import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormFornecedor from './views/fornecedor/FormFornecedor';
import ListFornecedor from './views/fornecedor/ListFornecedor';
import Home from './views/home/Home';
import FormLogin from './views/login/FormLogin';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import { ProtectedRoute } from './views/util/ProtectedRoute';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <FormLogin/> } />
                
                <Route
                    path="/home"
                    element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                    }
                />
                
                <Route
                    path="/list-cliente"
                    element={
                        <ProtectedRoute>
                            <ListCliente />
                        </ProtectedRoute>
                    }
                />
                
                <Route
                    path="/form-cliente"
                    element={
                    <ProtectedRoute>
                        <FormCliente />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-fornecedor"
                    element={
                    <ProtectedRoute>
                        <FormFornecedor />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-fornecedor"
                    element={
                    <ProtectedRoute>
                        <ListFornecedor />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-produto"
                    element={
                    <ProtectedRoute>
                        <FormProduto />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-produto"
                    element={
                    <ProtectedRoute>
                        <ListProduto />
                    </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    )
}

export default Rotas
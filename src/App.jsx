import React from 'react';

import Card from './components/layout/Card';
import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';

// A Forma mais reduzida e uma função	
export default () => (
	<div class="App">
		<h1>Fundamentos React(Arrow)</h1>
		<div className='Cards'>		
				<Card titulo="#08 - Condicional" color="#982395">
					<ParOuImpar numero={20} />
					<UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
					{/* <UsuarioInfo usuario={{ email: 'fe@email.com' }}></UsuarioInfo>
					<UsuarioInfo usuario={{}}></UsuarioInfo>
					<UsuarioInfo /> */}
				</Card>	
				<Card titulo="#07 - Desafio Repetição" color="#FF4C65">
					<TabelaProdutos />
				</Card>		
				<Card titulo="#06 - Repetição" color="#FF4C65">
					<ListaAlunos />
				</Card>					
				<Card titulo="#05 - Componente com Filhos" color="#00C8F8">
					<Familia sobrenome="Ferreira">
						<FamiliaMembro nome="Pedro" />
						<FamiliaMembro nome="Ana" />
						<FamiliaMembro nome="Gustavo" />
					</Familia>
				</Card>
				<Card titulo="#04 - Desafios Aleatório" color="#FA6900">
					<Aleatorio min={10} max={60} />
				</Card>
				<Card titulo="#03 - Fragmento" color="#E94C6F">
					<Fragmento />
				</Card>

				<Card titulo="#02 - Com Parametro" color="#E8B71A">
					<ComParametros
						titulo="Situação do Aluno"
						aluno="Pedro" nota={3} />
				</Card>
				
				<Card titulo="#01 - Primeiro Componente" color="#588C73">
					<Primeiro></Primeiro>
				</Card>
			</div>		
	</div>
);
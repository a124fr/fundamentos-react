import React from 'react';

import Card from './components/layout/Card';
import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from './components/basicos/Familia';

// A Forma mais reduzida e uma função	
export default () => (
	<div className="App">
		<h1>Fundamentos React(Arrow)</h1>
		<div className='Cards'>			
				{/* <Card titulo="Componente com Filhos" color="">
				
				</Card> */}
				<Card titulo="#05 - Componente com Filhos" color="#00C8F8">
					<Familia sobrenome="Ferreira" />
				</Card>
				<Card titulo="Desafios Aleatório" color="#FA6900">
					<Aleatorio min={10} max={60} />
				</Card>
				<Card titulo="Fragmento" color="#E94C6F">
					<Fragmento />
				</Card>

				<Card titulo="Com Parametro" color="#E8B71A">
					<ComParametros
						titulo="Situação do Aluno"
						aluno="Pedro" nota={3} />
				</Card>
				
				<Card titulo="Primeiro Componente" color="#588C73">
					<Primeiro></Primeiro>
				</Card>
			</div>		
	</div>
);
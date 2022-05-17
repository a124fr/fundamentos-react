import React from 'react';

import Card from './components/layout/Card';
import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

// A Forma mais reduzida e uma função	
export default () => (
	<div class="App">
		<h1>Fundamentos React(Arrow)</h1>
		<div className='Cards'>			
				<Card titulo="Desafios Aleatório">
					<Aleatorio min={10} max={60} />
				</Card>
				<Card titulo="Fragmento">
					<Fragmento />
				</Card>

				<Card titulo="Com Parametro">
					<ComParametros
						titulo="Situação do Aluno"
						aluno="Pedro" nota={3} />
				</Card>
				
				<Card titulo="Primeiro Componente">
					<Primeiro></Primeiro>
				</Card>
			</div>		
	</div>
);
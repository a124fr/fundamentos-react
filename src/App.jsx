import React from 'react';

import Card from './components/layout/Card';

import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

// A Forma mais reduzida e uma função	
export default () => (
	<div>
		<h1>Fundamentos React(Arrow)</h1>
		<Card titulo="Exemplo de Card"></Card>
		<Aleatorio min={10} max={60} />
		<Primeiro></Primeiro>
		<ComParametros
			titulo="Situação do Aluno"
			aluno="Pedro" nota={3} />
		<Fragmento />
	</div>
);
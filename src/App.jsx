import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';

// A Forma mais reduzida e uma função
export default _ =>
	<div>
		<h1>Fundamentos React(Arrow)</h1>
		<Primeiro></Primeiro>
		<ComParametros
			titulo="Situação do Aluno"
			aluno="Pedro" nota={3} />
		<Fragmento />
	</div>
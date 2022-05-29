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
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

// A Forma mais reduzida e uma função	
export default () => (
	<div className="App">
		<h1>Fundamentos React(Arrow)</h1>
		<div className='Cards'>	
				<Card titulo="#13 - Desafio Gerar Numeros Mega Sena" color="#424242">
					<Mega />
				</Card>	
				<Card titulo="#12 - Contador" color="#424242">
					<Contador numeroInicial={20} passoInicial={5} />
				</Card>			
				<Card titulo="#11 - Componente Controlado" color="#8BAD39">
					<Input />
				</Card>
				<Card titulo="#10 - Comunicação Indireata" color="#8BAD39">
					<IndiretaPai />
				</Card>
				<Card titulo="#09 - Comunicação Direata" color="#59323C">
					<DiretaPai />
				</Card>
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
import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Header from './components/header';
import Card from './components/Card';

export default function App() {
  return (
    <View style={estilo.container}>
      
      <Header></Header>
      <Card 
        porcentagem = '45%'
        titulo = 'Leitura' 
        imagem = 'https://eabeditora.siterapido.rs/wp-content/uploads/sites/155/2023/03/o-que-compoe-o-preco-de-um-livro-no-brasil-vista-frontal-de-livros-empilhados-e-escadas-para-o-dia-da-educacao-scaled.jpg'
        descricao = 'aos sabados costumo ler por um bom tempo'
        > 
       </Card>
      <Card 
       porcentagem = '11%'
       titulo = 'Tarefas' 
       imagem = 'https://img.freepik.com/vetores-premium/pessoas-limpando-a-casa-familia-sala-de-estar-filha-mae-fazendo-trabalhos-domesticos-domestico-criancas-adulto-conceito-de-vetor-ostentoso-de-limpeza-juntos-tarefas-domesticas-em-casa-ilustracao-limpa-trabalho-domestico_53562-14447.jpg'
       descricao = 'Todos os dias costumo tirar uma parcela do meu dia para fazer tarefas de casa'
      ></Card>
      <Card 
       titulo = 'Lazer'
       porcentagem = '100%' 
       imagem = 'https://img.freepik.com/vetores-premium/pessoas-no-parque-da-cidade-estilo-de-vida-ativo-ilustracao-de-lazer-ao-ar-livre_169479-129.jpg'
       descricao = 'por uma boa parte da minha semana tiro meus momentos para o lazer'
      ></Card>
      <Card 
       titulo = 'alimentação'
       porcentagem = '50%' 
       imagem = 'https://img.freepik.com/vetores-premium/mulher-sorridente-e-comida-saudavel-conceito-de-ilustracao-vetorial-de-alimentacao-saudavel_263366-640.jpg'
       descricao = 'O dia todo comendo'
      ></Card>
      <Card 
       titulo = 'Treino para ser profissional de FreeFire'
       porcentagem = '500%' 
       imagem = 'https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-jogos-online-com-computador_23-2148534483.jpg'
       descricao = 'Amo jogar jogos'
      ></Card>
      <Card 
       titulo = 'Dormir'
       porcentagem = '200%' 
       imagem = 'https://img.freepik.com/vetores-gratis/mulher-que-sofre-de-ilustracao-vetorial-plana-de-insonia-pessoa-feminina-deprimida-e-triste-deitada-na-cama-com-os-olhos-abertos-e-incapaz-de-dormir-a-noite-disturbio-do-sono-fadiga-conceito-sem-dormir_74855-25408.jpg'
       descricao = 'Descansar né, que o homem não é de ferro'
      ></Card>

      <Card 
       titulo = 'Dormir'
       porcentagem = '200%' 
       imagem = 'https://img.freepik.com/vetores-gratis/mulher-que-sofre-de-ilustracao-vetorial-plana-de-insonia-pessoa-feminina-deprimida-e-triste-deitada-na-cama-com-os-olhos-abertos-e-incapaz-de-dormir-a-noite-disturbio-do-sono-fadiga-conceito-sem-dormir_74855-25408.jpg'
       descricao = 'Descansar né, que o homem não é de ferro'
      ></Card>

      <h1>teste</h1>

    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  },
});

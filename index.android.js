import React from 'react';

import {
  TouchableOpacity,
  Text,
  View,
  AppRegistry,
  Image,
  StyleSheet
} from 'react-native';

const novaFrase = () => {

  let frases = [
    "Sua luta não termina quando sentir cansaço, mas sim quando atingir o sucesso tão merecido.",
    "Você não só tem o direito de ser feliz como também tem a obrigação de lutar para alcançar a felicidade.",
    "Não perca a motivação só porque as coisas não estão correndo como o previsto. Adversidade gera sabedoria e é isso que levará você ao sucesso.",
    "Encare o que fez de errado com motivação, pois é isso que o ajudará a fazer certo da próxima vez.",
    "As pessoas dizem frequentemente que a motivação não dura. Bem, nem o banho - e é por isso que ele é recomendado diariamente.",
    "A motivação não acontece por acaso, como tudo na vida você tem de batalhar para a alcançar.",
    "Há dias que você tem que ir para a frente só com o que você tem na mão, não dá para esperar pela motivação.",
    "Às vezes um pouco de motivação ajuda a superar os maiores desafios.",
    "A vida tanto lhe pode dar o melhor como o pior, mas é você quem escolhe aquilo que vai permanecer ou ficar para trás.",
    "Assim como os pássaros, precisamos aprender a superar os desafios que nos são apresentados, para alçarmos voos mais altos.",
    "Sonhos existem para serem realizados, por isso não olhe para trás nem escute palavras de desânimo!",
    "Já experimentou acreditar em você? Tente! Você não faz ideia do que é capaz.",
    "O poder está dentro de você, na sua mente, pois se acreditar que consegue não haverá obstáculo capaz de impedir o seu sucesso.",
    "Se quer viver uma vida feliz, amarre-se a uma meta, não a pessoas nem a coisas.",
    "Nunca desista porque encontrou um obstáculo! Os desafios são o tempero da vida!",
    "Com determinação e foco no sucesso todos os sonhos vão se realizar.",
    "Aquilo que você está vivendo, o peso que você está carregando, não é nada comparado à alegria que está esperando por você!",
    "Tudo que você precisa para começar a realizar seus sonhos é confiar em você, e lutar sem ter medo de falhar.",
    "Você não verá qualquer tipo de dificuldade à sua frente se mantiver seu olhar focado nos objetivos que deseja realmente conquistar!",
    "Teste os seus limites, enfrente os seus medos e não deixe que nada impeça você de pelo menos tentar!",
    "Você é mais forte e mais capaz do que imagina, e a conquista dos seus objetivos depende apenas de você!",
    "A melhor maneira de melhorar o padrão de vida está em melhorar o padrão de pensamento.",
    "Alcançar o que se deseja dá trabalho, mas não pare de lutar porque está cansado; pare apenas quando tiver triunfado!",
    "Façamos da interrupção um caminho novo. Da queda um passo de dança, do medo uma escada, do sonho uma ponte, da procura um encontro!",
    "Aquele que tentou e não conseguiu, é superior àquele que não tentou.",
    "Trabalhe por uma causa, e não por aplausos. Trabalhe para expressar o melhor de você, e não para impressionar.",
    "Não se desanime diante dos obstáculos, eles são sempre uma oportunidade de você sair mais forte de uma situação."
  ]

  let numAle = Math.random();
  let numSrc = Math.floor(numAle * frases.length);

  alert(frases[numSrc]);
}

const App = () => {
  
  const {
    principal,
    botao,
    textoBotao
  } = Styles;

  return(
    <View style={principal}>
      <Image source={ require("./imgs/logo.png") } />
      <TouchableOpacity 
        onPress={novaFrase}
        style={botao}
      >
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  botao:{
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 8,
    paddingBottom: 11,
    borderRadius: 3,
    backgroundColor: "#538530"
  },
  textoBotao: {
    color: "#FFF",
    fontWeight: "100",
    fontSize: 20
  },
});

AppRegistry.registerComponent('frasesDoDia', () => App);

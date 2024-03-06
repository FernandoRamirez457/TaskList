import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Task from './Task';
import Header from './header';
import useIsMobile from './mobile';


const App = () => {
  const dados = [
    { 
      title_task: 'Dormir',
      photoUrl: './imgs/img_dormir.jpg',
      descricao: 'Uma pausa merecida para reabastecer suas energias, seu corpo e mente.',
      TempInvestido: '49hrs',
      color: '#FC65A6'
    },
    {
      title_task: 'Curso de DS',
      photoUrl: './imgs/img_ds.jpg',
      descricao: 'Tempo dedicado ao curso de DS, buscando aproveitar ao máximo cada momento para estudos e criação de resumos completos.',
      TempInvestido: '37hrs',
      color: '#009E54'
    },
    {
      title_task: 'Ir para ETEC',
      photoUrl: './imgs/img_etec.png',
      descricao: 'É o momento de ir para a Etec, onde dedico-me ao aprimoramento dos conhecimentos do ensino médio e do curso de informática.',
      TempInvestido: '30hrs',
      color: '#FF7A21'
    },
    {
      title_task: 'Refeições',
      photoUrl: './imgs/img_refeicao.png',
      descricao: 'Momento crucial do dia, restaurando as energias através das refeições.',
      TempInvestido: '9hrs',
      color: '#FAC012'
    },
    {
      title_task: 'Estudar',
      photoUrl: './imgs/img_estudar.jpg',
      descricao: 'Momento do dia reservado para estudar novos conteúdos e revisitar, momento para realizar atividades importantes.',
      TempInvestido: '35hrs',
      color: '#00A4D1'
    },
    {
      title_task: 'Jogar pra Relaxar',
      photoUrl: './imgs/img_jogar.jpg',
      descricao: 'Momento para relaxar e descontrair, aproveitando momentos de lazer com jogos durante os fins de semana.',
      TempInvestido: '8hrs',
      color: '#7048C2'
    }
  ];

  const criarViewsTasks = () => {
    const viewsTasks = [];

    // Dividir os dados em grupos de dois
    for (let i = 0; i < dados.length; i += 2) {
      const tasks = [];
      
      // Criar componentes Task para cada grupo de duas tarefas
      for (let j = i; j < Math.min(i + 2, dados.length); j++) {
        tasks.push(
          <Task
            key={j}
            title_task={dados[j].title_task}
            descript={dados[j].descricao}
            photoUrl={dados[j].photoUrl}
            time={dados[j].TempInvestido}
            color={dados[j].color}
          />
        );
      }

      // Adicionar os componentes Task dentro de um View container_task
      viewsTasks.push(
        <View key={i} style={[styles.container_task, isMobile && styles.mobile_task]}>
          {tasks}
        </View>
      );
    }

    return viewsTasks;
  };


  const isMobile = useIsMobile();


  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Tarefas Semanais</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Renderizar as Views com as tarefas agrupadas */}
        {criarViewsTasks(dados, isMobile)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    margin: 20,
    fontWeight: 'bold'
  },
  container_task: {
    flexDirection: 'row',
    margin: 0
  },
  mobile_task: {
    flexDirection: 'column',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

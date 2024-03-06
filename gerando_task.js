import Task from './Task';
import useIsMobile from './mobile';

const isMobile = useIsMobile();

const dados = [
    { title_task: 'Tarefa 1' },
    { title_task: 'Tarefa 2' },
    { title_task: 'Tarefa 3' },
    { title_task: 'Tarefa 4' },
    // Adicione quantas tarefas quiser
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

export default criarViewsTasks
const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: {
        color: "red",
        especialidade: "Cardiologista",
        setor: "Pronto Atendimento",
        hospital: "Hospital Vera Cruz Maria de sá",
        profissional: "Dr Luiz Carlos",
      },
    },
    "task-2": {
      id: "task-2",
      content: {
        color: "red",
        especialidade: "Cardiologista",
        setor: "Pronto Atendimento",
        hospital: "Hospital Vera Cruz Maria de sá",
        profissional: "Dr Marcelo Carlos",
      },
    },
    "task-3": {
      id: "task-3",
      content: {
        color: "red",
        especialidade: "Cardiologista",
        setor: "Pronto Atendimento",
        hospital: "Hospital Vera Cruz Maria de sá",
        profissional: "Dr João Mario",
      },
    },
    "task-4": {
      id: "task-4",
      content: {
        color: "red",
        especialidade: "Cardiologista",
        setor: "Pronto Atendimento",
        hospital: "Hospital Vera Cruz Maria de sá",
        profissional: "Dr Nicolas Cage",
      },
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "Done",
      taskIds: ["task-1"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1"],
};

export default initialData;

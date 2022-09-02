import { v4 as uuidv4 } from "uuid";
import React from "react";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Botao";
import style from "./Formulario.module.scss";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "Tarefa",
    tempo: "00:00:000",
  };
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        ...this.state,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    this.setState({ tarefa: "Tarefa", tempo: "00:00:00" });
  }
  render() {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            value={this.state.tarefa}
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            }
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            id="tempo"
            step="1"
            min="00:00:00"
            max="01:30:00"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}

export default Formulario;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Botao from "../Botao";
import { ITarefa } from "../../types/tarefas";
import style from "./Formulario.module.scss";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export default function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState<string>("Tarefa");
  const [tempo, setTempo] = useState<string>("00:00:00");

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((prev) => [
      ...prev,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa("Tarefa");
    setTempo("00:00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
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
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

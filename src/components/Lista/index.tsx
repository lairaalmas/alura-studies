import React from "react";
import Item from "./Item";
import style from "./Lista.module.scss";

const Lista = function () {
  const tarefas = [
    { tarefa: "React", tempo: "02:00:00" },
    { tarefa: "Javascript", tempo: "01:00:00" },
    { tarefa: "Typescript", tempo: "03:00:00" },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default Lista;

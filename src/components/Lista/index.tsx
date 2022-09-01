import React from "react";
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
        {tarefas.map(
          (
            item,
            i // parenteses pra ja retornar
          ) => (
            <li key={i} className={style.item}>
              <h3>{item.tarefa}</h3>
              <p>{item.tempo}</p>
            </li>
          )
        )}
      </ul>
    </aside>
  );
};

export default Lista;

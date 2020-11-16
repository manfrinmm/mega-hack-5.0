import React from "react";

import "./styles.css";

export interface Teacher {
  id: number;
  avatar: string;
  biography: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
export interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="Sua foto" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.biography}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a href={`"https://wa.me/${teacher.whatsapp}"`}>Entrar em contato</a>
      </footer>
    </article>
  );
};

export default TeacherItem;

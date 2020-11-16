import React, {
  useState,
  FormEvent,
  useMemo,
  useCallback,
  ChangeEvent,
} from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg";
import avatarImage from "../../assets/images/avatar.png";

import "./styles.css";
import TextArea from "../../components/TextArea";
// import Select from "../../components/Select";
import api from "../../services/api";

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState<File>();
  const [whatsapp, setWhatsapp] = useState("");
  const [biography, setBiography] = useState("");

  //   const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [messageBtn, setMessageBtn] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  // function addNewScheduleItem() {
  //     setScheduleItems([
  //         ...scheduleItems,
  //         {
  //             week_day: 0,
  //             from: "",
  //             to: ""
  //         }
  //     ]);
  // }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {
          ...scheduleItem,
          [field]: value,
        };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    setMessageBtn("Enviando...");

    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        biography,
        // subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        history.push("/success");
      })
      .catch(() => {
        setMessageBtn("Verifique seus dados");
      });

    console.log({
      name,
      avatar,
      whatsapp,
      biography,
      //   subject,
      cost,
      scheduleItems,
    });
  }

  const handleUploadAvatar = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        setAvatar(event.target.files[0]);
      }
    },
    []
  );

  const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : avatarImage;
  }, [avatar]);

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível mais um atendimento"
        description="Agora você deve preencher o formulário"
        to="/home"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Cliente</legend>

            <div id="input-file">
              <span
                className="avatar-image"
                style={{ backgroundImage: `url(${preview})` }}
              />
              <input
                id="file"
                name="avatar"
                type="file"
                accept=".png, .jpeg, .jpg"
                onChange={handleUploadAvatar}
              />
              <label className="upload-label" htmlFor="file">
                Adicionar foto
              </label>
            </div>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Serviço</legend>

            {/* <Select
                            name="subject"
                            label="Serviço"
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                            options={[
                                { value: "Corte", label: "Corte" },
                                { value: "Escova", label: "Escova" },
                                { value: "Coloração", label: "Coloração" },
                                {
                                    value: "Sobrancelhas",
                                    label: "Sobrancelhas"
                                },
                                { value: "Maquiagem", label: "Maquiagem" },
                                { value: "Penteado", label: "Penteado" },
                                { value: "Selagem", label: "Selagem" },
                                { value: "Progressiva", label: "Progressiva" }
                            ]}
                        /> */}
            <Input
              name="cost"
              label="Valor total somente números"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
            <TextArea
              name="bio"
              label="Observações"
              value={biography}
              onChange={(e) => {
                setBiography(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horário
              {/* <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button> */}
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  {/* <Select
                                        name="week-day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={(e) =>
                                            setScheduleItemValue(
                                                index,
                                                "week_day",
                                                e.target.value
                                            )
                                        }
                                        options={[
                                            { value: "0", label: "Domingo" },
                                            {
                                                value: "1",
                                                label: "Segunda-feira"
                                            },
                                            {
                                                value: "2",
                                                label: "Terça-feira"
                                            },
                                            {
                                                value: "3",
                                                label: "Quarta-feira"
                                            },
                                            {
                                                value: "4",
                                                label: "Quinta-feira"
                                            },
                                            {
                                                value: "5",
                                                label: "Sexta-feira"
                                            },
                                            { value: "6", label: "Sábado" }
                                        ]}
                                    /> */}
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">{messageBtn || "Salvar cadastro"}</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;

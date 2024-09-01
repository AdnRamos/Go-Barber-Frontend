"use client";
import { useEffect, useState } from "react";
import style from "./admissao.module.scss";
import { Service } from "@/interfaces/barbeiroInterface";
import { getAllServicos } from "@/api/servicos/getAllServicos";
import { useMutation } from "react-query";

interface DadosBarbeiroProps {
  formik: any;
  editar: boolean;
  hrefAnterior: string;
}

const DadosAdmissao: React.FC<DadosBarbeiroProps> = ({ formik, editar }) => {
  const [servicosDisponiveis, setServicosDisponiveis] = useState<Service[]>([]);
  const [servicosSelecionadosId, setServicosSelecionadosId] = useState<number[]>([]);

  useEffect(() => {
    fetchServicos();
  }, []);

  useEffect(() => {
    if (formik.values.services) {
      const selectedServicesIds = formik.values.services.map((service: Service) => service.id);
      setServicosSelecionadosId(selectedServicesIds);
    }
  }, [formik.values.services]);

  const { mutate: fetchServicos } = useMutation(() => getAllServicos(0, 100), {
    onSuccess: (res) => {
      setServicosDisponiveis(res.data.content);
    },
    onError: (error: unknown) => {
      console.error("Erro ao recuperar os serviços:", error);
    },
  });

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedIds = selectedOptions.map((option) => parseInt(option.value, 10));

    const updatedSelections = [...servicosSelecionadosId];

    selectedIds.forEach((id) => {
      const index = updatedSelections.indexOf(id);
      if (index > -1) {
        // Remove o serviço se já estiver selecionado
        updatedSelections.splice(index, 1);
      } else {
        // Adiciona o serviço se não estiver selecionado
        updatedSelections.push(id);
      }
    });

    setServicosSelecionadosId(updatedSelections);
    formik.setFieldValue("idServices", updatedSelections);
  };

  return (
    <>
      <div className={style.container__ContainerForm_form_threePartsContainer}>
        <div>
          <label htmlFor="salary">Salario</label>
          <input
            id="salary"
            className={style.container__ContainerForm_form_input}
            name="salary"
            placeholder="Não informado"
            onBlur={formik.handleBlur}
            value={formik.values.salary}
            disabled={!editar}
            onChange={editar ? formik.handleChange : undefined}
          />
        </div>

        <div>
          <label htmlFor="admissionDate">Data de Admissão </label>
          <input
            id="admissionDate"
            className={style.container__ContainerForm_form_input}
            name="admissionDate"
            type="date"
            placeholder="Não informado"
            onBlur={formik.handleBlur}
            value={formik.values.admissionDate}
            disabled={!editar}
            onChange={editar ? formik.handleChange : undefined}
          />
        </div>

        <div>
          <label htmlFor="workload">Jornada de Trabalho</label>
          <input
            id="workload"
            className={style.container__ContainerForm_form_input}
            name="workload"
            placeholder="Não informado"
            value={formik.values.workload}
            disabled={!editar}
            onChange={editar ? formik.handleChange : undefined}
          />
        </div>

        <div>
          <label htmlFor="start">Inicio de Expediente </label>
          <input
            id="start"
            className={style.container__ContainerForm_form_input}
            name="start"
            placeholder="Não informado"
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
            value={formik.values.start}
            disabled={!editar}
          />
        </div>

        <div>
          <label htmlFor="end">Fim de Expediente </label>
          <input
            id="end"
            className={style.container__ContainerForm_form_input}
            name="end"
            placeholder="Não informado"
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
            value={formik.values.end}
            disabled={!editar}
          />
        </div>
      </div>
      <div>
        <label htmlFor="services">Serviços</label>
        {editar ? (
          <div className={style.container__ContainerForm_form_halfContainer}>
            <select
              id="services"
              name="services"
              multiple
              className={style.container__ContainerForm_form_input}
              value={servicosSelecionadosId.map(String)}
              onChange={handleServiceChange}
            >
              {servicosDisponiveis.map((servico) => (
                <option key={servico.id} value={String(servico.id)}>
                  {servico.name}
                </option>
              ))}
            </select>
            {servicosSelecionadosId.length > 0 && (
              <div className={style.selectedServices}>
                <h4>Serviços Selecionados:</h4>
                <p>{servicosSelecionadosId.map(id => servicosDisponiveis.find(service => service.id === id)?.name).join(", ")}</p>
              </div>
            )}
            {formik.touched.services && formik.errors.services ? (
              <span className={style.form__error}>{formik.errors.services}</span>
            ) : null}
          </div>
        ) : (
          <p className={style.selectedServices}>
            {servicosSelecionadosId.map(id => servicosDisponiveis.find(service => service.id === id)?.name).join(", ")}
          </p>
        )}
        {formik.touched.services && formik.errors.services ? (
          <span className={style.form__error}>{formik.errors.services}</span>
        ) : null}
      </div>
    </>
  );
};

export default DadosAdmissao;

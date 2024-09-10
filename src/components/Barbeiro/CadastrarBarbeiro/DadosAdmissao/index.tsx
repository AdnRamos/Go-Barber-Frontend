"use client";
import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { NumericFormat } from "react-number-format"; // Se estiver usando a versão mais recente
import style from "./admissao.module.scss";
import { Service } from "@/interfaces/barbeiroInterface";
import { getAllServicos } from "@/api/servicos/getAllServicos";
import { useMutation } from "react-query";

interface DadosBarbeiroProps {
  formik: any;
}

const DadosAdmissao: React.FC<DadosBarbeiroProps> = ({ formik }) => {
  const [servicosDisponiveis, setServicosDisponiveis] = useState<Service[]>([]);
  const [servicosSelecionados, setServicosSelecionados] = useState<number[]>([]);

  useEffect(() => {
    fetchServicos();
  }, []);

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

    const updatedSelections = [...servicosSelecionados];

    selectedIds.forEach((id) => {
      const index = updatedSelections.indexOf(id);
      if (index > -1) {
        updatedSelections.splice(index, 1);
      } else {
        updatedSelections.push(id);
      }
    });

    setServicosSelecionados(updatedSelections);
    formik.setFieldValue("idServices", updatedSelections);
  };

  return (
    <>
      <div className={style.container__ContainerForm_form_threePartsContainer}>
        <div>
          <label htmlFor="salary">Salário</label>
          {/* Usando formatação monetária para o campo de salário */}
          <NumericFormat
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}  // Garantimos que haverá duas casas decimais
            fixedDecimalScale={true}  // Garante que o número de casas decimais será fixo
            prefix="R$ "
            className={style.container__ContainerForm_form_input}
            id="salary"
            name="salary"
            value={formik.values.salary}
            onValueChange={(values) =>
              formik.setFieldValue("salary", values.floatValue)
            }
            required
          />
        </div>
        {formik.touched.salary && formik.errors.salary ? (
          <span className={style.form__error}>{formik.errors.salary}</span>
        ) : null}

        <div>
          <label htmlFor="admissionDate">Data de admissão</label>
          <input
            className={style.container__ContainerForm_form_input}
            id="admissionDate"
            name="admissionDate"
            type="date"
            placeholder={formik.values.admissionDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.admissionDate}
            required
          />
          {formik.touched.admissionDate && formik.errors.admissionDate ? (
            <span className={style.form__error}>{formik.errors.admissionDate}</span>
          ) : null}
        </div>

        <div>
          <label htmlFor="workload">Jornada de Trabalho</label>
          <InputMask
            mask="99"
            className={style.container__ContainerForm_form_input}
            id="workload"
            name="workload"
            placeholder="00h"
            value={formik.values.workload}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.workload && formik.errors.workload ? (
            <span className={style.form__error}>{formik.errors.workload}</span>
          ) : null}
        </div>
      </div>
      
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="start">Início de Expediente</label>
          <InputMask
            mask="99:99"
            className={style.container__ContainerForm_form_input}
            id="start"
            name="start"
            placeholder="00:00"
            value={formik.values.start}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.start && formik.errors.start ? (
            <span className={style.form__error}>{formik.errors.start}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="end">Fim de Expediente</label>
          <InputMask
            mask="99:99"
            className={style.container__ContainerForm_form_input}
            id="end"
            name="end"
            placeholder="00:00"
            value={formik.values.end}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.end && formik.errors.end ? (
            <span className={style.form__error}>{formik.errors.end}</span>
          ) : null}
        </div>
      </div>
      
      <div>
        <label htmlFor="services">Serviços</label>
        <select
          id="services"
          name="services"
          multiple
          className={style.container__ContainerForm_form_input}
          value={servicosSelecionados.map(String)}
          onChange={handleServiceChange}
        >
          {servicosDisponiveis.map((servico) => (
            <option key={servico.id} value={servico.id}>
              {servico.name}
            </option>
          ))}
        </select>
        {formik.touched.services && formik.errors.services ? (
          <span className={style.form__error}>{formik.errors.services}</span>
        ) : null}
      </div>

      {servicosSelecionados.length > 0 && (
        <div className={style.selectedServices}>
          <h4>Serviços Selecionados:</h4>
          <ul>
            {servicosSelecionados.map((id) => {
              const service = servicosDisponiveis.find((s) => s.id === id);
              return service ? <li key={id}>{service.name}</li> : <li key={id}>Serviço não encontrado</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default DadosAdmissao;

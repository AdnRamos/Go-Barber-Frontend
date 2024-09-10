"use client";
import InputMask from "react-input-mask"; // Para aplicar máscaras
import { NumericFormat } from "react-number-format"; 
import style from "./admissao.module.scss";
import { Service } from "@/interfaces/barbeiroInterface";

interface DadosBarbeiroProps {
  formik: any;
  editar: boolean;
  servicosSelecionadosId: number[];
  servicosDisponiveis: Service[];
  hrefAnterior: string;
  handleServiceChange: any;
}

const DadosAdmissao: React.FC<DadosBarbeiroProps> = ({ formik, editar, servicosSelecionadosId, servicosDisponiveis, handleServiceChange }) => {

  return (
    <>
      <div className={style.container__ContainerForm_form_threePartsContainer}>
        <div>
          <label htmlFor="salary">Salário</label>
          <NumericFormat
            id="salary"
            className={style.container__ContainerForm_form_input}
            name="salary"
            placeholder="R$ 0.000,00"
            value={formik.values.salary}
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale={true}
            prefix="R$ "
            disabled={!editar}
            onValueChange={(values) =>
              editar && formik.setFieldValue("salary", values.floatValue)
            }
          />
        </div>

        <div>
          <label htmlFor="admissionDate">Data de Admissão</label>
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
          <InputMask
            id="workload"
            mask="99"
            className={style.container__ContainerForm_form_input}
            name="workload"
            placeholder="00h"
            value={formik.values.workload}
            disabled={!editar}
            onChange={editar ? formik.handleChange : undefined}
          />
        </div>

        <div>
          <label htmlFor="start">Início de Expediente</label>
          <InputMask
            mask="99:99"
            id="start"
            className={style.container__ContainerForm_form_input}
            name="start"
            placeholder="00:00"
            value={formik.values.start}
            disabled={!editar}
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
          />
        </div>

        <div>
          <label htmlFor="end">Fim de Expediente</label>
          <InputMask
            mask="99:99"
            id="end"
            className={style.container__ContainerForm_form_input}
            name="end"
            placeholder="00:00"
            value={formik.values.end}
            disabled={!editar}
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>

      <div>
        {editar ? (
          <div className={style.container__ContainerForm_form_halfContainer}>
            <div>
              <label htmlFor="services">Serviços</label>
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
            </div>
            {servicosSelecionadosId.length > 0 && (
              <div className={style.selectedServices}>
                <h4>Serviços Selecionados:</h4>
                <p>
                  {servicosSelecionadosId
                    .map((id) => servicosDisponiveis.find((service) => service.id === id)?.name)
                    .join(", ")}
                </p>
              </div>
            )}
            {formik.touched.services && formik.errors.services ? (
              <span className={style.form__error}>{formik.errors.services}</span>
            ) : null}
          </div>
        ) : (
          ""
        )}
        {formik.touched.services && formik.errors.services ? (
          <span className={style.form__error}>{formik.errors.services}</span>
        ) : null}
      </div>
    </>
  );
};

export default DadosAdmissao;

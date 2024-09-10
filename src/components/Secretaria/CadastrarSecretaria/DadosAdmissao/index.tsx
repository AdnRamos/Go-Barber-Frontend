import InputMask from "react-input-mask";
import { NumericFormat } from "react-number-format"; // Se estiver usando a versão mais recente
import style from "./admissao.module.scss";

interface DadosSecretariaProps {
  formik: any;
}

const DadosAdmissao: React.FC<DadosSecretariaProps> = ({ formik }) => {

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
     
      
    </>
  );
};

export default DadosAdmissao;

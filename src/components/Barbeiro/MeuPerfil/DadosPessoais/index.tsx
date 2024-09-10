"use client";
import InputMask from "react-input-mask"; // Para aplicar máscaras
import style from "./promocao.module.scss";

interface DadosBarbeiroProps {
  formik: any;
  editar: boolean;
  hrefAnterior: string;
}

const DadosPessoais: React.FC<DadosBarbeiroProps> = ({ formik, editar }) => {
  return (
    <>
      <div className={style.container__ContainerForm_form_halfContainer}>
        {/* Campo Nome */}
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            className={style.container__ContainerForm_form_input}
            name="name"
            placeholder="Nome não informado"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={editar ? formik.handleChange : undefined}
            disabled={!editar}
          />
          {formik.touched.name && formik.errors.name ? (
            <span className={style.form__error}>{formik.errors.name}</span>
          ) : null}
        </div>

        {/* Campo Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className={style.container__ContainerForm_form_input}
            name="email"
            placeholder="Email não informado"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={editar ? formik.handleChange : undefined}
            disabled={!editar}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className={style.form__error}>{formik.errors.email}</span>
          ) : null}
        </div>

        {/* Campo Telefone (contato) */}
        <div>
          <label htmlFor="contato">Telefone</label>
          <InputMask
            mask="99999999999"
            id="contato"
            className={style.container__ContainerForm_form_input}
            name="contato"
            placeholder="Telefone não informado"
            value={formik.values.contato}
            onBlur={formik.handleBlur}
            onChange={editar ? formik.handleChange : undefined}
            disabled={!editar}
          />
          {formik.touched.contato && formik.errors.contato ? (
            <span className={style.form__error}>{formik.errors.contato}</span>
          ) : null}
        </div>

        {/* Campo CPF */}
        <div>
          <label htmlFor="cpf">CPF</label>
          <InputMask
            mask="99999999999""
            id="cpf"
            className={style.container__ContainerForm_form_input}
            name="cpf"
            placeholder="CPF não informado"
            value={formik.values.cpf}
            onBlur={formik.handleBlur}
            onChange={editar ? formik.handleChange : undefined}
            disabled={!editar}
          />
          {formik.touched.cpf && formik.errors.cpf ? (
            <span className={style.form__error}>{formik.errors.cpf}</span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default DadosPessoais;

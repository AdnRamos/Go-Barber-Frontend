"use client"
import InputMask from "react-input-mask";

import style from "./promocao.module.scss";

interface DadosSecretariaProps {
  formik: any;
}


const DadosPessoais: React.FC<DadosSecretariaProps> = ({ formik }) => {

  return (
    <div className={style.container__ContainerForm_form_halfContainer}>
      <div>
        <label htmlFor="name">Nome</label>

        <input
          className={style.container__ContainerForm_form_input}
          id="name"
          name="name"
          placeholder={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          required
        />
      </div>
      {formik.touched.name && formik.errors.name ? (
        <span className={style.form__error}>{formik.errors.name}</span>
      ) : null}

      <div>
        <label htmlFor="email">Email</label>

        <input
          className={style.container__ContainerForm_form_input}
          id="email"
          name="email"
          placeholder={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <span className={style.form__error}>{formik.errors.email}</span>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Senha</label>

        <input
          className={style.container__ContainerForm_form_input}
          id="password"
          name="password"
          type="password"
          placeholder={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <span className={style.form__error}>{formik.errors.email}</span>
        ) : null}
      </div>

      <div>
        <label htmlFor="contato">Telefone</label>
        <InputMask
          mask="99999999999"  // Máscara para telefones celulares
          className={style.container__ContainerForm_form_input}
          id="contato"
          name="contato"
          placeholder="(00) 00000-0000"
          value={formik.values.contato}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.contato && formik.errors.contato ? (
          <span className={style.form__error}>{formik.errors.contato}</span>
        ) : null}
      </div>

      <div>
        <label htmlFor="cpf">CPF</label>
        <InputMask
          mask="99999999999""  // Máscara para CPF
          className={style.container__ContainerForm_form_input}
          id="cpf"
          name="cpf"
          placeholder="000.000.000-00"
          value={formik.values.cpf}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.cpf && formik.errors.cpf ? (
          <span className={style.form__error}>{formik.errors.cpf}</span>
        ) : null}
      </div>
    </div>
  )
}


export default DadosPessoais;
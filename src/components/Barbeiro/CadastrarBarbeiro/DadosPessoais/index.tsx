"use client";
import style from "./promocao.module.scss";
import InputMask from "react-input-mask";

interface DadosBarbeiroProps {
  formik: any;
}

const DadosPessoais: React.FC<DadosBarbeiroProps> = ({ formik }) => {
  console.log(formik.values); // Para depurar e verificar os valores

  return (
    <div className={style.container__ContainerForm_form_halfContainer}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          className={style.container__ContainerForm_form_input}
          id="name"
          name="name"
          placeholder="Nome"
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
          placeholder="Email"
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
          placeholder="Senha"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          required
        />
        {formik.touched.password && formik.errors.password ? (
          <span className={style.form__error}>{formik.errors.password}</span>
        ) : null}
      </div>

      <div>
        <label htmlFor="contato">Telefone</label>
        <InputMask
          mask="99999999999"  // Máscara para telefones celulares
          className={style.container__ContainerForm_form_input}
          id="contato"
          name="contato"
          placeholder="00000000000"
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
          mask="99999999999"  // Máscara para CPF
          className={style.container__ContainerForm_form_input}
          id="cpf"
          name="cpf"
          placeholder="00000000000"
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
  );
};

export default DadosPessoais;

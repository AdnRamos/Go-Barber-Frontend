"use client";
import InputMask from "react-input-mask"; // Para aplicar máscaras
import style from "./endereco.module.scss";

interface DadosBarbeiroProps {
  formik: any;
  editar: boolean;
  hrefAnterior: string;
}

const DadosEndereco: React.FC<DadosBarbeiroProps> = ({ formik, editar }) => {
  return (
    <>
      <div className={style.container__ContainerForm_form_threePartsContainer}>
        {/* Campo CEP */}
        <div>
          <label htmlFor="address.cep">CEP</label>
          <InputMask
            mask="99999999"
            className={style.container__ContainerForm_form_input}
            id="address.cep"
            name="address.cep"
            placeholder="00000000"
            value={formik.values.address.cep}
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
            disabled={!editar}
          />
          {formik.touched.address?.cep && formik.errors.address?.cep ? (
            <span className={style.form__error}>{formik.errors.address?.cep}</span>
          ) : null}
        </div>

        {/* Campo Rua */}
        <div>
          <label htmlFor="address.street">Rua</label>
          <input
            className={style.container__ContainerForm_form_input}
            id="address.street"
            name="address.street"
            placeholder="Não informado"
            value={formik.values.address.street}
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
            disabled={!editar}
          />
          {formik.touched.address?.street && formik.errors.address?.street ? (
            <span className={style.form__error}>{formik.errors.address?.street}</span>
          ) : null}
        </div>

        {/* Campo Número */}
        <div>
          <label htmlFor="address.number">Número</label>
          <input
            className={style.container__ContainerForm_form_input}
            id="address.number"
            name="address.number"
            placeholder="Não informado"
            value={formik.values.address.number}
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
            disabled={!editar}
          />
          {formik.touched.address?.number && formik.errors.address?.number ? (
            <span className={style.form__error}>{formik.errors.address?.number}</span>
          ) : null}
        </div>

        {/* Campo Bairro */}
        <div>
          <label htmlFor="address.neighborhood">Bairro</label>
          <input
            className={style.container__ContainerForm_form_input}
            id="address.neighborhood"
            name="address.neighborhood"
            placeholder="Não informado"
            value={formik.values.address.neighborhood}
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
            disabled={!editar}
          />
          {formik.touched.address?.neighborhood && formik.errors.address?.neighborhood ? (
            <span className={style.form__error}>{formik.errors.address?.neighborhood}</span>
          ) : null}
        </div>

        {/* Campo Cidade */}
        <div>
          <label htmlFor="address.city">Cidade</label>
          <input
            className={style.container__ContainerForm_form_input}
            id="address.city"
            name="address.city"
            placeholder="Não informado"
            value={formik.values.address.city}
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
            disabled={!editar}
          />
          {formik.touched.address?.city && formik.errors.address?.city ? (
            <span className={style.form__error}>{formik.errors.address?.city}</span>
          ) : null}
        </div>

        {/* Campo Estado */}
        <div>
          <label htmlFor="address.state">Estado</label>
          <input
            className={style.container__ContainerForm_form_input}
            id="address.state"
            name="address.state"
            placeholder="Não informado"
            value={formik.values.address.state}
            onChange={editar ? formik.handleChange : undefined}
            onBlur={formik.handleBlur}
            disabled={!editar}
          />
          {formik.touched.address?.state && formik.errors.address?.state ? (
            <span className={style.form__error}>{formik.errors.address?.state}</span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default DadosEndereco;

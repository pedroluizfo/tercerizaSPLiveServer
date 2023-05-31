import React, { useState } from "react";
import { Button, Img, Input, Text, TextArea } from "components";
import "../../styles/font.css";
import * as yup from "yup";
import { mask } from 'remask';
import { useFormik } from 'formik';
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { FlexBox } from "components/flex-box";
import { H6 } from "components/Typography";
import sejaParceiroApi from "utils/api/sejaParceiro";



const ContatoForm = (props) => {
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }
  
  const handleFormSubmit = async (values) => {

    handleOpen()

    sejaParceiroApi.create({ name: values.name, email: values.email, phone: values.phone, message: values.message }).then((data) => {
      console.log(data)

    })
   

  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });
  return (
    <>
    {!open ?
     <>
     <form onSubmit={handleSubmit}>
        <div className={props.className}>
          <div className="flex flex-col items-center justify-center sm:px-5 px-6 w-auto">
            <Text
              className="font-arboria mt-10 font-normal text-deep_orange_A400 tracking-[4.00px] w-auto"
              as="h5"
              variant="h5"
            >
              {props?.sejaparceiro}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="font-arboria text-blue_gray_900 text-center w-auto"
                  variant="body4"
                >
                  {props?.nome}
                </Text>
                <TextField
                  mb={1.5}
                  fullWidth
                  name="name"
                  type="text"
                  onBlur={handleBlur}
                  variant="outlined"
                  placeholder="Nome Completo"
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="font-arboria text-blue_gray_900 text-center w-auto"
                  variant="body4"
                >
                  {props?.email}
                </Text>
                <TextField
                  mb={1.5}
                  fullWidth
                  name="email"
                  type="email"
                  onBlur={handleBlur}
                  variant="outlined"
                  placeholder="exemplo@email.com"
                  onChange={handleChange}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="font-arboria text-blue_gray_900 text-center w-auto"
                  variant="body4"
                >
                  {props?.telefone}
                </Text>
                <TextField
                  mb={1.5}
                  fullWidth
                  onBlur={handleBlur}
                  name="phone"
                  variant="outlined"
                  placeholder="(xx) xxxxx-xxxx"
                  value={number}
                  onChange={e => {
                    values.phone = mask(e.target.value, "(99) 99999-9999");
                    setNumber(mask(e.target.value, "(99) 99999-9999"));
                    if(values.phone.length == 15){
                      values.isPhone = true;
                      
                    }else{
                      values.isPhone = false;
                    }
                   
                  }}
                  error={!!touched.phone && !!errors.phone || !!touched.isPhone && !!errors.isPhone }
                  helperText={touched.phone && errors.phone || touched.isPhone && errors.isPhone }
                  
                />
    
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="font-arboria text-blue_gray_900 text-center w-auto"
                  variant="body4"
                >
                  {props?.mensagem}
                </Text>
                <TextField
                  mb={1.5}
                  fullWidth
                  name="message"
                  type="message"
                  variant="outlined"
                  placeholder="Mensagem"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  minRows="4"
                  maxRows="6"
                  multiline
                  value={values.message}
                  style={{ marginBottom: '1.5rem' }}
                  error={!!touched.message && !!errors.message}
                  helperText={touched.message && errors.message}
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-start justify-start w-auto">
                <FormControlLabel
                  name="agreement"
                  className="agreement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  control={
                    <Checkbox
                      size="small"
                      color="secondary"
                      checked={values.agreement || false}
                    />
                  }
                  label={
                    <FlexBox
                      flexWrap="wrap"
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      Aceite os
                      <a href="/termosdeuso" target="_blank" rel="noreferrer noopener">
                        <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
                          Termos & Condições
                        </H6>
                      </a>
                    </FlexBox>
                  }
                />
              </div>
            </div>
            <Button
              type={"submit"}
              className="cursor-pointer font-arboria font-normal min-w-[168px] text-base text-blue_gray_900 text-center"
              shape="CircleBorder20"
              size="md"
              variant="FillYellow700"
            >
              {props?.entre_em_contato}
            </Button>
          </div>
        </div>
        
      </form>
    </>
      :
      <>
      <div className="absolute flex flex-col gap-2 items-center justify-start left-[4%] sm:px-5 px-6 top-[35%] w-auto">
            <Text
              className="font-normal leading-[50.00px] text-center text-deep_orange_A400 tracking-[4.00px]"
              as="h5"
              variant="h5"
            >
              <>
                Obrigado pelo envio, <br />
                em breve entraremos <br />
                em contato!
              </>
            </Text>
            <Img
              src="images/img_logoprincipallaranja_blue_gray_900.svg"
              className="h-6 w-[157px]"
              alt="logoprincipalla"
            />
          </div>
      </>
      }
      
      
    </>
    
  );
};

ContatoForm.defaultProps = {
  sejaparceiro: "Seja parceiro!",
  nome: "Nome:",
  email: "E-mail:",
  telefone: "Telefone:",
  mensagem: "Mensagem:",
  aceitoostermos: "Aceito os termos de uso",
  entre_em_contato: "Entre em contato!",
};

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  isPhone: false,
  agreement: false,
};
const formSchema = yup.object().shape({
  name: yup.string().required("*Campo Obrigatório"),
  email: yup.string().required("*Campo Obrigatório"),
  phone: yup.string().required("*Campo Obrigatório"),
  message: yup.string().required("*Campo Obrigatório"),
  isPhone: yup.bool().test("isPhone",
  "*Preencha o telefone corretamente",
  (value) => value === true).required("Preencha o telefone corretamente"),

  agreement: yup.bool().test("agreement",
    "Você tem que aceitar os termos e condições!",
    (value) => value === true).required("Você tem que aceitar os termos e condições!"),

});
export default ContatoForm;

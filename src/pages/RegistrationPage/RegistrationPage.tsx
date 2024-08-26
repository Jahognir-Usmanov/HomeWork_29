// import "./RegistrationPage.scss";
import { Input, Button, Heading, RegistrationInfo } from "../../components/UI";
import { SCRegistrationPage } from "./RegistrationPage.styled";
import RegForm from "../../components/RegForm";
import { useRegDataMutation } from "../../store/api/authApi";

export const RegistrationPage = () => {
  return (
    <SCRegistrationPage>
      <Heading variant={"h1"} text={"Регистрация"} />
      <RegForm />
      <RegistrationInfo
        linkText={"Aвторизоваться"}
        hasAccountText={"У вас есть аккаунт?"}
        authWithText={"Зарегистрироваться с помощью"}
      />
    </SCRegistrationPage>
  );
};
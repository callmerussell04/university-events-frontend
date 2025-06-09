import ForgotUsernameForm from "../components/auth/form/ForgotUsernameForm";


const ForgotUsernamePage = () => {
    return (
        <>
            <div className="container-lg table-responsive">
                <h2 className="text-center display-6 my-4">Восстановление пароля</h2>
                <ForgotUsernameForm></ForgotUsernameForm>
            </div>
        </>
    );
};

export default ForgotUsernamePage;
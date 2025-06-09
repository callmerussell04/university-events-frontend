import ResetPasswordForm from "../components/auth/form/ResetPasswordForm";


const ResetPasswordPage = () => {
    return (
        <>
            <div className="container-lg table-responsive">
                <h2 className="text-center display-6 my-4">Восстановление пароля</h2>
                <ResetPasswordForm></ResetPasswordForm>
            </div>
        </>
    );
};

export default ResetPasswordPage;
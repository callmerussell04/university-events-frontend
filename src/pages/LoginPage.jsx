import LoginForm from "../components/auth/form/LoginForm";


const LoginPage = () => {
    return (
        <>
            <div className="container-lg table-responsive">
                <h2 className="text-center display-6 my-4">Вход</h2>
                <LoginForm></LoginForm>
            </div>
        </>
    );
};

export default LoginPage;
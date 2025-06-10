import { Link } from 'react-router-dom';
import { Telegram, Instagram, Twitter } from 'react-bootstrap-icons';


const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="container-fluid p-3">
            <div className="row fs-5">
                <div className="col-sm-6">
                <h4 className="">Университет.<br/>Культурно-массовые мероприятия</h4>
                </div>
                <div className="col-sm-6 text-end d-flex flex-column justify-content-center">
                <p className="m-0">
                    © {year} Университет
                    <br />
                    Все права защищены
                </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

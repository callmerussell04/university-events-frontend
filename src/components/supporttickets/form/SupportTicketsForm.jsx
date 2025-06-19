import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';
import Select from '../../input/Select.jsx';

const SupportTicketsForm = ({ supportticket, handleChange }) => {

    return (
        <>
             <div className="form-group">
                <label htmlFor="userMessage">Текст обращения</label>
                <textarea
                    name='userMessage'
                    id='userMessage'
                    value={supportticket.userMessage}
                    onChange={handleChange}
                    disabled
                    rows="5"
                    className="form-control" 
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="operatorReply">Ответ</label>
                <textarea
                    name='operatorReply'
                    id='operatorReply'
                    value={supportticket.operatorReply}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-control"
                    maxLength={500}
                ></textarea>
            </div>
        </>
    );
};

SupportTicketsForm.propTypes = {
    supportticket: PropTypes.object,
    handleChange: PropTypes.func,
};

export default SupportTicketsForm;

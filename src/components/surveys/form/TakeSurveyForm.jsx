import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';
import Select from '../../input/Select.jsx';

const TakeSurveyForm = ({ survey, answers, onAnswerChange }) => {

    return (
        <>
            <div className='d-flex flex-column justify-content-start'>
                {
                    survey.questions.map((question) => {
                        const answerObj = answers.find(a => a.questionId === question.id);
                        const value = answerObj ? answerObj.text : '';
                        return (
                        <div className='d-flex' key={question.id}>
                            {question.options && question.options.length > 0 ? (
                                <div>
                                    <label className="fw-bold mb-2">{question.text}</label>
                                    {question.options.map((option) => (
                                        <div key={option.id} className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name={`answer-${question.id}`}
                                                id={`q${question.id}-option${option.id}`}
                                                value={option.id}
                                                checked={answerObj?.optionId === option.id}
                                                onChange={() => onAnswerChange({questionId: question.id, optionId: option.id})}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor={`q${question.id}-option${option.id}`}>
                                                {option.text}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <Input
                                    name={`answer-${question.id}`}
                                    value={value}
                                    label={question.text}
                                    onChange={(e) => onAnswerChange({questionId: question.id, text: e.target.value})}
                                    type='text'
                                    required
                                />
                            )}
                        </div>
                    );
                    })    
                }
            </div>
        </>
    );
};

TakeSurveyForm.propTypes = {
    survey: PropTypes.object,
    handleChange: PropTypes.func,
};

export default TakeSurveyForm;

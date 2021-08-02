import React from 'react'
import { Form, Field } from 'react-final-form';
import { composeValidators, MaxLength, required } from '../../../utilites/validators/validators';
import { Element } from '../../common/Forms/Forms';
import css from './TextInput.module.css'

let TextInput = (props) => {
	const Textarea = Element('textarea')
	return (
		<Form onSubmit={props.onSubmit}>
			{({ handleSubmit, submitting, pristine }) => (
				<form onSubmit={handleSubmit}>
					<div className={css.dialogs__textinput}>
						<div className={css.dialogs__messageBlock}><Field className={css.dialogs__textarea} name={"sendMessage"} component={Textarea} placeholder={"Message..."}
							validate={composeValidators(required, MaxLength(150))} /></div>
						{/* <textarea name='Send message' className={css.dialogs__textarea} wrap="hard"
							placeholder="Message..." value={props.newMessageText} onChange={onMessageChange} /> */}
						<div className={css.dialogs__svg}>
							<button /*  onClick={onSendMessage} */ className={css.dialogs__button} type='submit' disabled={submitting || pristine}>
								<svg className={css.dialogs__send} xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448.011 448.011">
									<path d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4
				l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472
				l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"/>
								</svg>
							</button>
						</div>
					</div >
				</form>
			)}
		</Form>
	);
}

export default TextInput;
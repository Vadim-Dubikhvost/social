import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../Redux/auth-reducer';
import { composeValidators, required } from '../../utilites/validators/validators';
import { Element } from '../common/Forms/Forms';
import css from './Login.module.css';

let LoginForm = ({ onSubmit, failedAuth, errorMessage }) => {
	const Input = Element('input');
	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit, submitting, pristine }) => (
				<form onSubmit={handleSubmit}>
					<div className="login-page__login">
						<Field className={css.login__userlogin + ' ' + css.login__input} name={"login"} component={Input} placeholder={"Login"} validate={composeValidators(required,)} />
					</div>
					<div className="login-page__password">
						<Field className={css.login__userpass + ' ' + css.login__input} type={"password"} name={"password"} component={Input} placeholder={"Password"} validate={composeValidators(required,)} />
					</div>
					<div className="login-page__remember">
						<Field className={css.login__remember} name={"rememberMe"} component={"input"} type={"checkbox"} />Remember me
					</div>
					{failedAuth && <span>{errorMessage}</span>}
					<div className="login-page__button">
						<button className={css.login__btn} type='submit' disabled={submitting || pristine}>Login</button>
					</div>
				</form>
			)}
		</Form>
	);
}

let Login = (props) => {

	let onSubmit = async (formData) => {
		props.login(formData.login, formData.password, formData.rememberMe);
		formData.login = formData.password = formData.rememberMe = undefined;
	}

	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return (
		<div className={css.login}>
			<div className={css.login__header}>Login</div>
			<LoginForm onSubmit={onSubmit} errorMessage={props.errorMessage} failedAuth={props.failedAuth} />
		</div>
	)
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		errorMessage: state.auth.errorMessage,
		failedAuth: state.auth.failedAuth
	}
}

let LoginContainer = connect(mapStateToProps, { login })(Login);

export default LoginContainer;
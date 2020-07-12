/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import './index.scss';

import { useHistory } from 'react-router-dom';

import Background from '../../Components/Background/index';
import Button from '../../Elements/Button';
import Input from '../../Elements/Input';

import * as Routes from '../../assets/js/Routes';
import { Welcome } from '../../assets/js/Alerts';
import User from '../../constants/firebase/user/user';


const Register = () => {
	const history = useHistory();

	const [step, setStep] = React.useState(1);
	const [user, setUser] = React.useState('');

	const [name, setName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = useState('');

	const [check, setCheck] = React.useState(false);

	const goBack = () => {
		setName('');
		setLastName('');
		setEmail('');
		setCheck(false);
		setStep(1);
	};

	const register = () => {

		if (check) {
			User.createUserDatabase(null, email, "local", password, () => {
				User.createInformation(name, lastName, user, check);
			})
			if(User.uid !== ""){
				User.createInformation(name, lastName, user, check);
			}
		}

		setName("");
		setLastName("");
		setEmail("");
		setCheck(false)
		setStep(1)
		setUser("")
		setPassword("")
		Welcome()

		history.push(Routes.HOME)
	}

	useEffect(() => {
		setPassword("")
		console.log(User)
		User.event.getEvent("updateUser", () => {
			setEmail(User.email);
		})
		User.event.getEvent("updateType", () => {
			if (User.accountType === "githup") {
				setPassword(undefined);
			}
		})

	}, []);

	return (
		<main className="Register">

			<Background />
			{step === 1
				? (
					<article className="Register__form">
						<h1 className="Register__form__title">Registro</h1>
						<p className="Register__form__subtitle">Te invitamos a ser parte de la plataforma más solidaria del mundo, conectamos estudiantes</p>

						<div className="Register__form__options">
							<h3 className="Register__form__options__title">Escoge una opción</h3>
							<div />
							<div onClick={() => setUser('student')} className={user === 'student' ? 'Register__form__options__card Register__form__options__card-active' : 'Register__form__options__card'}>
								<figure>
									<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0)">
											<path
												d="M2.29688 16.879L5.49417 18.7596C6.2691 18.1022 7.21966 17.6852 8.22825 17.5594L30.827 14.7832C31.4037 14.7124 31.9286 15.1222 31.9994 15.6989C32.0703 16.2761 31.6605 16.8009 31.0833 16.8718L8.48502 19.6485C8.14506 19.6927 7.81434 19.7923 7.50673 19.9438L30.9457 33.7585L59.595 16.879L30.9457 0L2.29688 16.879Z"
												fill="#D0D0D0"
												className={user === 'student' ? 'fill-active' : ''}
											/>
											<path
												d="M30.4116 35.8861L9.91113 23.8092V34.7583C9.91113 37.6537 12.4141 40.4684 16.7782 42.4804C21.2511 44.3985 26.0789 45.3511 30.9457 45.2756C35.812 45.3516 40.6398 44.399 45.1127 42.4804C49.4773 40.4684 51.9802 37.6537 51.9802 34.7583V23.8092L31.4803 35.8861C31.1506 36.0802 30.7413 36.0802 30.4116 35.8861Z"
												fill="#D0D0D0"
												className={user === 'student' ? 'fill-active' : ''}
											/>
											<path d="M6.75665 57.8964L4.6532 46.3274L0.446289 59.9999L6.75665 57.8964Z" fill="#D0D0D0" />
											<path
												d="M7.80822 43.1722C7.80617 41.839 6.96294 40.6522 5.70477 40.2106V22.7795C5.70785 22.3369 5.80439 21.8999 5.98875 21.4972C6.29174 20.8189 6.82428 20.2694 7.49291 19.9448L5.48805 18.7606C4.94319 19.2228 4.49744 19.7913 4.17904 20.4306C3.80467 21.1573 3.60696 21.962 3.60131 22.7795V40.2106C2.09253 40.7483 1.22722 42.332 1.59029 43.8922C1.95388 45.4523 3.42979 46.4912 5.02073 46.3068C6.61167 46.123 7.8113 44.7739 7.80822 43.1722Z"
												fill="#D0D0D0"
												className={user === 'student' ? 'fill-active' : ''}
											/>
										</g>
										<defs>
											<clipPath id="clip0">
												<rect width="60" height="60" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</figure>
								<p>Soy estudiante</p>
							</div>

							<div onClick={() => setUser('honor')} className={user === 'honor' ? 'Register__form__options__card Register__form__options__card-active' : 'Register__form__options__card'}>
								<figure>
									<svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0)">
											<path
												d="M30.0655 29.3839C34.1023 29.3839 37.5979 27.936 40.454 25.0795C43.3101 22.2234 44.758 18.7287 44.758 14.6915C44.758 10.6556 43.3101 7.16051 40.4535 4.30347C37.597 1.44783 34.1019 0 30.0655 0C26.0282 0 22.5336 1.44783 19.6775 4.30394C16.8214 7.16004 15.373 10.6551 15.373 14.6915C15.373 18.7287 16.8214 22.2238 19.6779 25.0799C22.5345 27.9356 26.0296 29.3839 30.0655 29.3839Z"
												fill="#D0D0D0"
												className={user === 'honor' ? 'fill-active' : ''}
											/>
											<path
												d="M55.7732 46.9059C55.6908 45.7172 55.5242 44.4207 55.2789 43.0515C55.0313 41.6721 54.7125 40.368 54.3309 39.1762C53.9367 37.9443 53.4006 36.7277 52.7379 35.5619C52.05 34.3519 51.2421 33.2983 50.3355 32.4313C49.3875 31.5242 48.2268 30.7949 46.8846 30.263C45.5471 29.7338 44.0648 29.4658 42.4792 29.4658C41.8565 29.4658 41.2543 29.7213 40.0913 30.4785C39.3755 30.9453 38.5383 31.4851 37.6038 32.0822C36.8047 32.5913 35.7222 33.0684 34.3851 33.5003C33.0806 33.9224 31.7561 34.1364 30.4488 34.1364C29.1415 34.1364 27.8175 33.9224 26.5116 33.5003C25.1759 33.0688 24.0934 32.5918 23.2952 32.0827C22.3696 31.4912 21.5319 30.9513 20.8054 30.478C19.6438 29.7208 19.0411 29.4653 18.4184 29.4653C16.8323 29.4653 15.3505 29.7338 14.0135 30.2635C12.6722 30.7945 11.511 31.5237 10.5621 32.4317C9.65598 33.2992 8.84759 34.3524 8.16067 35.5619C7.49841 36.7277 6.96228 37.9438 6.56763 39.1766C6.18647 40.3685 5.86768 41.6721 5.62009 43.0515C5.37482 44.4188 5.20821 45.7158 5.12584 46.9073C5.04486 48.0745 5.00391 49.2859 5.00391 50.5094C5.00391 53.6936 6.01614 56.2714 8.01221 58.1725C9.98361 60.0485 12.5921 61.0002 15.7643 61.0002H45.1361C48.3083 61.0002 50.9159 60.049 52.8877 58.1725C54.8843 56.2728 55.8965 53.6945 55.8965 50.5089C55.896 49.2798 55.8546 48.0675 55.7732 46.9059Z"
												fill="#D0D0D0"
												className={user === 'honor' ? 'fill-active' : ''}
											/>
										</g>
										<defs>
											<clipPath id="clip0">
												<rect width="61" height="61" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</figure>
								<p>Soy donante</p>
							</div>
							<Button title="Regresar" type="secundary" data="default" redirect={Routes.INDEX} />
							<div onClick={() => setStep(2)}>
								<Button title="Continuar" type={user !== '' ? 'active' : 'disabled'} data="default" />
							</div>
						</div>
					</article>
				)
				: step === 2
					? (
						<article className="Register__form">
							<h1 className="Register__form__title">{user === 'student' ? 'Estudiante' : user === 'honor' ? 'Donante' : ''}</h1>
							<p className="Register__form__subtitle">Te invitamos a ser parte de la plataforma más solidaria del mundo, conectamos estudiantes</p>
							<Input title="Nombre" value={name} placeholder="Aquí va tu nombre" exportValue={setName} />
							<Input title="Apellido" value={lastName} placeholder="Aquí va tu apellido" exportValue={setLastName} />
							<Input title={user === 'student' ? 'Correo Institucional' : user === 'honor' ? 'Correo electrónico' : ''} value={email} type="email" placeholder="Aquí va tu correo electrónico" exportValue={setEmail} />
							{
								password !== undefined && <Input title="Contraseña" type="password" placeholder="Escribe aquí tu contraseña" exportValue={setPassword} />

							}
							<label className="Register__form__check">
								<input type="checkbox" onChange={() => setCheck(!check)} />
								{' '}
								<span>
									Leí y acepto los
                  					<a href="#">Términos y Condiciones</a>
								</span>
							</label>

							<div className="Register__form__buttons">
								<div onClick={goBack}>
									<Button title="Regresar" type="secundary" data="default" />
								</div>

								<div onClick={register}>
									<Button
										title="Registrar"
										type={user === 'student' ? name !== '' && lastName !== '' && email !== '' && check ? 'active' : 'disabled'
											: user === 'honor' ? name !== '' && lastName !== '' && email !== '' && check ? 'active' : 'disabled' : ''}
										data="default"
									/>
								</div>
							</div>

						</article>
					)
					: ''}

		</main>
	);
};

export default Register;

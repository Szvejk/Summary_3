import { Card } from './Card';

import React, { useState, useEffect } from 'react';
import styles from './Cards.module.css';

const Form = () => {
	const cards = [
		{
			id: 1,
			imgSrc:
				'https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
			name: 'Zigniew',
			surname: 'Herbert',
			street: 'TestStreet',
			postCode: '00-123',
			town: 'Town',
			subRegion: 'Region',
			phoneNumber: '+48 123 456 789',
		},
		{
			id: 2,
			imgSrc:
				'https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
			name: 'Henryk',
			surname: 'Sienkiewicz',
			street: 'TestStreet',
			postCode: '00-123',
			town: 'Town',
			subRegion: 'Region',
			phoneNumber: '+48 123 456 789',
		},
		{
			id: 3,
			imgSrc:
				'https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
			name: 'Wisława',
			surname: 'Szymborska',
			street: 'TestStreet',
			postCode: '00-123',
			town: 'Town',
			subRegion: 'Region',
			phoneNumber: '+48 123 456 789',
		},
	];

	const [litera, setLitera] = useState('');
	const [foundUsers, setFoundUsers] = useState(cards);

	const filterList = () => {
		const filterList = foundUsers.filter((item) =>
			item.name.toLowerCase().includes(litera.toLowerCase())
		);
		if (litera !== '') {
			setFoundUsers(filterList);
		} else {
			setFoundUsers(cards);
		}
	};

	useEffect(() => {
		filterList();
	}, [litera]);

	return (
		<>
			<div className={styles.formula}>
				<div className={styles.input}>
					<input
						type='text'
						value={litera}
						placeholder='wpisz coś'
						className={styles.pickLitera}
						onChange={(e) => {
							setLitera(e.target.value);
						}}
					/>
					<button className={styles.submit}>Submit</button>
				</div>
			</div>

			{foundUsers.map((el) => (
				<Card
					imgSrc={el.imgSrc}
					// key={el.id}
					name={el.name}
					key={el.name}
					surname={el.surname}
					street={el.street}
					postCode={el.postCode}
					town={el.town}
					subRegion={el.subRegion}
					phoneNumber={el.phoneNumber}
				/>
			))}
		</>
	);
};

export default Form;

// export taka sama nazwa jak nazwa pliku, w export ustalamy jak cos bedzie wygladac\

// Do strony na której znajdują się karty z danymi klientów (Cards - zestaw zadań do komponentów) dodaj formularz u góry który umożliwi wyszukiwanie klienta po jego imieniu.

// ### Podpowiedź

// Do realizacji zadania przyda się osobny stan, który przechowa frazę wyszukiwaną i filtr

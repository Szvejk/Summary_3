import React from 'react';
import styles from './card.module.css';

interface CardProps {
	// powinny byc z malej litery
	// card: React.ReactNode;

	imgSrc: string;
	name: string;
	surname: string;
	street: string;
	postCode: string;
	town: string;
	subRegion: string;
	phoneNumber: string;
}

export const Card = ({
	imgSrc,
	name,
	surname,
	street,
	postCode,
	town,
	subRegion,
	phoneNumber,
}: CardProps) => {
	return (
		<div className={styles.card}>
			<div style={{ margin: '50px' }}>
				<img
					src={imgSrc}
					alt='img'
					style={{ width: '200px', height: '200px' }}
				/>
			</div>

			<div className={styles.cardFlex}>
			<div style={{ margin: '40px 50px' } }>
				<p>
					Imie nazwisko:{name} {surname}
				</p>
				<p>
					Ulica i kod pocztowy:{street} {postCode}
				</p>
				<p>Miasto:{town}</p>
				<p>Województwo: {subRegion}</p>
				<p>Numer telefonu {phoneNumber}</p>
				</div>
			</div>
		</div>
	);
};

// import react from react, typy reactowe kiedy, render
// do pozycjonowania elementów, gdy przekazujemy children
// return = gdy chcemy by element sie wyswieltil

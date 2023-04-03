import React from 'react';
import styles from './aside.module.css';

interface AsideProps {
	// powinny byc z malej litery
	// card: React.ReactNode;
	linkName: string;
	link: string;
	icon: React.ReactNode;
}

export const AsideLink=({
	linkName,
	link,
	icon,
}:AsideProps) => {

	
return(
	<div className={styles.aside}>
			<p>linkName:{linkName}</p>
			<p>link:{link}</p>
			<p>icon:{icon}</p>
		</div>
)
}
// Zrób export function Aside()

// I ten komponent do App wrzuć


// Stwórz routing aplikacji (bazując na poprzednich zadaniach). Potrzebne będą:
// * /clients -> podstrona z danymi kontaktowymi klientów
// * /clients/add -> podstrona na dodawanie klientów
// * /clients/:id -> podstrona na detale klienta,
// * /clients/:id/edit -> podstrona na edycję klienta,
// * /orders - > podstrona na wszystkie zamowienia,
// * /orders/:id -> podstrona na podgląd pojedynczego zamowienia,
// * /orders/add -> podstrona na dodawanie zamowien,
// * /invoices - > podstrona na faktury,
// Route clients, orders, invoices zalinkuj w AsideMenu z poprzednich zadań
import { FaAdn } from 'react-icons/fa';
import { FaAndroid } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { AsideLink } from './AsideLink';
import styles from './aside.module.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './assets/pages/Home';
import Clients from './assets/pages/Clients';
import Invoices from './assets/pages/Invoices';
import Orders from './assets/pages/Orders';

const menuData = [
	{
		linkName: 'Clients',
		link: '/clients',
		icon: <FaAdn />,
	},
	{
		linkName: 'Orders',
		link: '/orders',
		icon: <FaAndroid />,
	},
	{
		linkName: 'Facture',
		link: '/invoices',
		icon: <FaAngellist />,
	},
	{
		linkName: 'Posts',
		link: '/posts',
		icon: <FaBehance />,
	},
];
const Aside = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<>
			<div className={styles.wrapper}>
				<button
					className={styles.menu}
					onClick={() => setOpenMenu((prev) => !prev)}
				>
					Menu{' '}
				</button>{' '}
				{openMenu && (
					<div className={styles.aside}>
						{menuData.map((el) => (
							<AsideLink
								key={el.link}
								linkName={el.linkName}
								link={el.link}
								icon={el.icon}
							/>
						))}

						<Link to='/' className={styles.menuLink}>
							Home{' '}
						</Link>
						<Link to='/clients' className={styles.menuLink}>
							Clients{' '}
						</Link>
						<Link to='/orders' className={styles.menuLink}>
							Orders{' '}
						</Link>
						<Link to='/invoices' className={styles.menuLink}>
							Invoices{' '}
						</Link>
					</div>
				)}
			</div>
		</>
	);
};

export default Aside;

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

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import styles from './App.module.css';
import { First } from './First';
import { Gallery } from './Gallery';
import { Card } from './Card';
import Aside from './Aside';
import Form from './Cards';
import { Footer } from './Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './assets/pages/Home';
import Clients from './assets/pages/Clients';
import Invoices from './assets/pages/Invoices';
import Orders from './assets/pages/Orders';
import React from 'react';

import ClientADD from './assets/pages/ClientAdd';
import ClientEditId from './assets/pages/ClientEditId';
import ClientId from './assets/pages/ClientId';

function App() {
	return (
		<>
			<div className={styles.app}>
				<div className={styles.wrapfor}>
					<Aside />
					<Form />
				</div>

		
				{/* <Footer/> */}
				{/* <div className='card'>
				<Gallery>
					{names.map((el, index) => (
						<First key={el.name + index} text={el.name} age={el.age} />
					))}
				</Gallery>

				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p> */}
				{/* <Card imgSrc= {singleData.imgSrc} name={singleData.name} surname={singleData.surname} street={singleData.street} postCode={singleData.postCode} town= {singleData.town} subRegion={singleData.subRegion} phoneNumber = {singleData.phoneNumber} /> */}
			</div>
		</>
	);	
	}	
	<div className={styles.menu}>
					<Router>
					
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/clients' element={<Clients />} />
							<Route path='/orders' element={<Orders />} />
							<Route path='/invoices' element={<Invoices />} />
							<Route path='*' element={<h1>Page not found</h1>} />
						</Routes>
					</Router>
	// 			</div>


export default App;
// tylko w app

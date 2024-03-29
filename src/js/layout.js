import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import { CharDetails } from "./views/charDetails";
import { PlanetsDetails } from "./views/planetsDetails";
import { VehicleDetails } from "./views/vehicleDetails";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="charDetails/:id" element={<CharDetails />} />
						<Route path="planetsDetails/:id" element={<PlanetsDetails />} />
						<Route path="vehicleDetails/:id" element={<VehicleDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);


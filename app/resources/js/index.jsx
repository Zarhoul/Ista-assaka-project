import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/assets/home/Home'
import FiliereList from './components/pages/assets/filieres/FiliereList'
import NewsList from './components/pages/assets/news/NewsList'
import Login from './components/auth/Login'
import DashboardAdmin from './components/admin/DashboardAdmin'
import NoPage from './components/pages/assets/nopage/NoPage'
import UsersSection from './components/admin/assets/section/usersSection/UsersSection'
import ListStagiaire from './components/admin/assets/section/usersSection/stagiaires/ListStagiaire'
import ProfilStagiaire from './components/admin/assets/section/usersSection/stagiaires/ProfilStagiaire'
import ListFormateur from './components/admin/assets/section/usersSection/formateurs/ListFomateur'
import ProfilFormateur from './components/admin/assets/section/usersSection/formateurs/ProfilFormateur'
import EditFormateur from './components/admin/assets/section/usersSection/formateurs/EditFomateur'
import ListConseilleur from './components/admin/assets/section/usersSection/conseilleurs/ListConseilleur'
import ProfilConseilleur from './components/admin/assets/section/usersSection/conseilleurs/ProfilConseilleur'
import EditConseilleur from './components/admin/assets/section/usersSection/conseilleurs/EditConseilleur'
import ApplicationSection from './components/admin/assets/section/applicationSection/ApplicationSection'
import ListFiliere from './components/admin/assets/section/applicationSection/filieres/ListFiliere'
import AddFiliere from './components/admin/assets/section/applicationSection/filieres/AddFiliere'
import DetailsFiliere from './components/admin/assets/section/applicationSection/filieres/DetailsFiliere'
import EditFiliere from './components/admin/assets/section/applicationSection/filieres/EditFiliere'
import ListNews from './components/admin/assets/section/applicationSection/news/ListNews'
import DetailsNew from './components/admin/assets/section/applicationSection/news/DetailsNew'
import EditNew from './components/admin/assets/section/applicationSection/news/EditNew'
import FormInfos from './components/admin/assets/section/applicationSection/infos/FormInfos'
import ListDoc from './components/admin/assets/section/documentsSection/ListDoc'
import DetailsDoc from './components/admin/assets/section/documentsSection/DetailsDoc'
import ProfilSection from './components/admin/assets/section/settingsSection/ProfilAdmin/ProfilSection'
import EditProfil from './components/admin/assets/section/settingsSection/ProfilAdmin/EditProfil'
import ImportSection from './components/admin/assets/section/settingsSection/ImportData/ImportSection'
import NewsDetails from './components/pages/assets/news/NewsDetails'
import InfosDetails from './components/pages/assets/infos/InfosDetails'

import '../css/app.css';

function App(){
	return <BrowserRouter>
		<Routes>
			{/* <Route path="/dashboard" element={<Dashboard/>}/> */}
			{/* <Route path="/auth" element={<Auth/>}/> */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/infos" element={<InfosDetails />} />
            <Route path="/filieres" element={<FiliereList />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/news/newDetails" element={<NewsDetails />} />
            <Route path="/login" element={<Login />} />            
            {/* <Route path="espaceStagiaire" element={<EspaceStagiaire />} /> */}
            <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
            <Route path="/dashboardAdmin/users" element={<UsersSection />} />
            <Route path="/dashboardAdmin/users/ListStagiaires" element={<ListStagiaire />} />
            <Route path="/dashboardAdmin/users/ListStagiaires/ProfilStagiaire/:id" element={<ProfilStagiaire />} />
            <Route path="/dashboardAdmin/users/ListFormateurs" element={<ListFormateur />} />
            <Route path="/dashboardAdmin/users/ListFormateurs/ProfilFormateur/:id" element={<ProfilFormateur />} />
            <Route path="/dashboardAdmin/users/ListFormateurs/EditFormateur/:id" element={<EditFormateur />} />
            <Route path="/dashboardAdmin/users/ListConseilleurs" element={<ListConseilleur />} />
            <Route path="/dashboardAdmin/users/ListConseilleurs/ProfilConseilleur/:id" element={<ProfilConseilleur />} />
            <Route path="/dashboardAdmin/users/ListConseilleurs/EditConseilleur/:id" element={<EditConseilleur />} />
            <Route path="/dashboardAdmin/application" element={<ApplicationSection />} />
            <Route path="/dashboardAdmin/application/filieres" element={<ListFiliere />} />
            <Route path="/dashboardAdmin/application/filieres/addFiliere" element={<AddFiliere />} />
            <Route path="/dashboardAdmin/application/filieres/detailsFiliere/:id" element={<DetailsFiliere />} />
            <Route path="/dashboardAdmin/application/filieres/editFiliere/:id" element={<EditFiliere />} />
            <Route path="/dashboardAdmin/application/news" element={<ListNews />} />
            <Route path="/dashboardAdmin/application/news/detailsNew/:id" element={<DetailsNew />} />
            <Route path="/dashboardAdmin/application/news/editNew/:id" element={<EditNew />} />
            <Route path="/dashboardAdmin/application/infos" element={<FormInfos />} />
            <Route path="/dashboardAdmin/documents" element={<ListDoc />} />
            <Route path="/dashboardAdmin/documents/details/:id" element={<DetailsDoc />} />
            <Route path="/dashboardAdmin/profil/:id" element={<ProfilSection />} />
            <Route path="/dashboardAdmin/profil/editProfil/:id" element={<EditProfil />} />
            <Route path="/dashboardAdmin/importData" element={<ImportSection />} />

			{/* <Route path="/dahshboard" element={<Dashboard/>}/>
			<Route path="auth" element={<Auth/>}/>
			<Route path="*" element={<div>not found</div>}/> */}
		</Routes>
	</BrowserRouter>
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

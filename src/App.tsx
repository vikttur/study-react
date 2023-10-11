import contacts from './contacts.json'
import './App.css';

const contact = contacts[2]
const { name, email, phone, favorite, owner } = contact;

const App = () => (
	<div className="App">
		<h2>CONTACTS</h2>
		<ul>
			<li>{name}</li>
			<li>{email}</li>
			<li>{phone}</li>
			<li>{favorite}</li>
			<li>{owner}</li>
		</ul>
	</div>
);

export default App;

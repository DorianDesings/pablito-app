import UserRow from './components/UserRow/UserRow';
import UsersList from './components/UsersList/UsersList';

const App = () => (
	<>
		<h1>Pablito App</h1>

		<UsersList>
			<UserRow />
		</UsersList>
	</>
);

export default App;

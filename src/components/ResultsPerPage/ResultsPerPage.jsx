const ResultsPerPage = ({ resultsPerPage, setResultsPerPage }) => (
	<select
		value={resultsPerPage}
		onChange={e => setResultsPerPage(Number(e.target.value))}
	>
		<option value='5'>5</option>
		<option value='10'>10</option>
		<option value='15'>15</option>
		<option value='20'>20</option>
	</select>
);

export default ResultsPerPage;

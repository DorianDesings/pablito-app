const ResultsPerPage = ({ resultsPerPage, setResultsPerPage, setPage }) => (
	<select
		value={resultsPerPage}
		onChange={e => {
			setResultsPerPage(Number(e.target.value));
			setPage(1);
		}}
	>
		<option value='5'>5</option>
		<option value='10'>10</option>
		<option value='15'>15</option>
		<option value='20'>20</option>
	</select>
);

export default ResultsPerPage;

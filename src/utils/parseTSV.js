const parseTSV = (tsvText) => {
  const rows = tsvText.split(/\r?\n/); // Split CSV into rows by detecting the \r and \n characters
  const headers = rows[0].split('\t'); // Extract headers assuming first row is header row
  const data = []; // Initialize array to store parsed data

  console.log("Parsing TSV Data...");

  for(let i = 1; i < rows.length; i++){ // ensure we're starting at rows[1] instead of rows[0] b/c those are our headers
      const rowData = rows[i].split('\t'); // Establishing the rows with an array by splitting via ',' characters
      const rowObject = {};
      for(let j = 0; j < headers.length; j++){
          rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
  }
  console.log('TSV Parsing Complete.');
  return data;
}

export { parseTSV };
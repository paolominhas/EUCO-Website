import { useState, useEffect } from 'react';

// This uses a public csv file that you can publish on the web with Google sheets
// In the Google Sheet, go to File > Share > Publish to web.
// Select the "Sheet1" (or whatever specific tab) and "Comma-separated values (.csv)".
// Click Publish and copy the link generated.
const DEFAULT_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS_ZGAlSzhm9wryY9FijW82vIfUZFut2mm5_RXI0pqij2prHArPvfAr4lEhegQhATCb35mNNw1a4Sst/pub?gid=0&single=true&output=csv"; 
/* It is also possible to use an API key for more security but this is not critical right now
   The "API" method (More robust, requires API Key)
   If you prefer this, uncomment the lines below and use the fetch logic for API.
   const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID';
   const API_KEY = 'YOUR_GOOGLE_API_KEY';
*/

// --- ROBUST CSV PARSER ---
const parseCSVLine = (text) => {
  const result = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        cell += '"';
        i++; 
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(cell);
      cell = '';
    } else {
      cell += char;
    }
  }
  result.push(cell);
  return result;
};

export const useGoogleSheet = (customUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the custom URL if provided, otherwise use the default
  const urlToFetch = customUrl || DEFAULT_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Reset loading state when URL changes
      try {
        const response = await fetch(urlToFetch);
        const csvText = await response.text();
        
        const lines = csvText.split(/\r\n|\n/);
        
        if (lines.length === 0) {
          setLoading(false);
          return;
        }
        
        // Extract Headers
        const headers = parseCSVLine(lines[0]).map(h => h.trim());
        
        // Process Rows
        const formattedData = lines.slice(1).map(line => {
          if (!line || line.trim() === '') return null;

          const values = parseCSVLine(line);

          const obj = headers.reduce((acc, header, index) => {
            const val = values[index] ? values[index].trim() : '';
            acc[header] = val; 
            return acc;
          }, {});
          
          return obj;
        }).filter(item => item !== null);

        // --- THE FIX IS HERE ---
        // Instead of checking for specific columns like 'Title' or 'Date',
        // we just check if the row object exists.
        setData(formattedData);
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Google Sheet:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [urlToFetch]);

  return { data, loading, error };
};
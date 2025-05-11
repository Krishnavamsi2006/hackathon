const API_URL = import.meta.env.VITE_API_URL;

export const fetchJournals = async () => {
  const response = await fetch(`${API_URL}/api/journals`);
  if (!response.ok) throw new Error('Failed to fetch journals');
  return response.json();
};

export const createJournal = async (journalData) => {
  const response = await fetch(`${API_URL}/api/journals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(journalData),
  });
  if (!response.ok) throw new Error('Failed to create journal');
  return response.json();
};

export const fetchSubmissions = async () => {
  const response = await fetch(`${API_URL}/api/submissions`);
  if (!response.ok) throw new Error('Failed to fetch submissions');
  return response.json();
};

export const createSubmission = async (submissionData) => {
  const response = await fetch(`${API_URL}/api/submissions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(submissionData),
  });
  if (!response.ok) throw new Error('Failed to create submission');
  return response.json();
};
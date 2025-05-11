import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import Dashboard from './pages/Dashboard';
import JournalList from './pages/journals/JournalList';
import JournalDetail from './pages/journals/JournalDetail';
import CreateJournal from './pages/journals/CreateJournal';
import EditJournal from './pages/journals/EditJournal';
import Profile from './pages/Profile';
import PremiumPage from './pages/PremiumPage';
import SubmissionPage from './pages/submissions/SubmissionPage';
import SubmissionsList from './pages/submissions/SubmissionsList';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/journals" element={<JournalList />} />
            <Route path="/journals/:id" element={<JournalDetail />} />
            <Route path="/create-journal" element={<CreateJournal />} />
            <Route path="/edit-journal/:id" element={<EditJournal />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="/submit-paper" element={<SubmissionPage />} />
            <Route path="/submissions" element={<SubmissionsList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
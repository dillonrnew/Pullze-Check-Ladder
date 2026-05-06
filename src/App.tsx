// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TourneysPage from './pages/TourneysPage';
import TeamsPage from './pages/TeamsPage';
import SubmissionPage from './pages/SubmissionPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import EditOldScoresPage from './pages/EditOldScoresPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/" element={<TourneysPage />} />

        <Route
          path="/tourney/:tournamentId"
          element={<TeamsPage />}
        />

        <Route
          path="/submit/:tournamentId/:teamId"
          element={<SubmissionPage />}
        />

        <Route
          path="/admin"
          element={<AdminDashboardPage />}
        />
        <Route
          path="/admin/edit-old-scores"
          element={<EditOldScoresPage />}
        />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </Router>
    </ErrorBoundary>
  );
}

export default App;

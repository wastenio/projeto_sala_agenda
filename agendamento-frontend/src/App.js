import React, { useState } from 'react';
import CalendarView from './components/CalendarView';
import SalaFormModal from './components/SalaFormModal';
import SalaList from './components/SalaList';
import NavbarMenu from './components/NavbarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentView, setCurrentView] = useState('agendamentos');
  const [showSalaForm, setShowSalaForm] = useState(false);

  return (
    <div>
      <NavbarMenu
        onShowAgendamentos={() => setCurrentView('agendamentos')}
        onShowSalas={() => setCurrentView('salas')}
      />

      <div className="container mt-4">
        {currentView === 'agendamentos' && <CalendarView />}
        {currentView === 'salas' && (
          <>
            <div className="d-flex justify-content-end mb-3">
              <button
                className="btn btn-primary"
                onClick={() => setShowSalaForm(true)}
              >
                + Nova Sala
              </button>
            </div>
            <SalaList />
          </>
        )}
      </div>

      <SalaFormModal
        show={showSalaForm}
        onHide={() => setShowSalaForm(false)}
        onSaved={() => window.location.reload()}
      />
    </div>
  );
}

export default App;

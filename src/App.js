import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>GETİR PANEL TEAM</PageTitle>
        <div className={styles.app__wrapper}>
          <AppContent />
          <AppHeader />
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: '1.3rem',
          },
        }}
      />
    </>
  );
}

export default App;

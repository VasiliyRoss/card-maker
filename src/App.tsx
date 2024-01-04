import React from 'react';
import Editor from './components/Editor/Editor';
import Header from './components/Header/Header';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Editor />
        </div>
    );
}

export default App;

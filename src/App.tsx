import React from 'react';
import Editor from './components/editor/Editor';
import Header from './components/header/Header';
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

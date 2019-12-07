import React from 'react';
import './Content.scss';
import RootRouter from '../../views/RootRouter';

const Content = () => (
    <main className="main">
        <div className="container">
            <RootRouter />
        </div>
    </main>
)

export default Content;
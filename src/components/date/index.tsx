'use client';
import React, { useState, useEffect } from 'react';
import styles from './date.module.css';

export default function DateDisplay() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const weekday = today.toLocaleString('default', { weekday: 'long' });
        const month = today.toLocaleString('default', { month: 'short' });
        const day = today.getDate();
        const year = today.getFullYear();

        const formattedDate = `${weekday}, ${month} ${day}, ${year}`;
        setCurrentDate(formattedDate);
    }, []);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Hoje</span>
            <span className={styles.subtitle}>{currentDate}</span>
        </div>
    );
}

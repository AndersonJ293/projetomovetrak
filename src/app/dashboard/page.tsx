import NavBar from '@/components/navbar';
import styles from './dashboard.module.css';

export default function DashBoard() {
	return (
		<div className={styles.container}>
			<NavBar />
		</div>
	);
}

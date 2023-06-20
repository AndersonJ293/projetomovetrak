import NavBar from '@/components/navbar';
import styles from './dashboard.module.css';
import Date from '@/components/date';
import SearchBar from '@/components/searchBar';
import UserHeader from '@/components/userHeader';

export default function DashBoard() {
	return (
		<>
			<NavBar />
			<div className={styles.container}>
				<div className={styles.headerLine}>
					<Date />
					<SearchBar />
					<UserHeader />
				</div>
			</div>
		</>
	);
}

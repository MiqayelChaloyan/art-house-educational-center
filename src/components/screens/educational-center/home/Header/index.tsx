import { FC } from 'react';

import styles from './styles.module.sass';
import Slider from '../Slider';

type MainProps = {
	data: any
};

const Header: FC<MainProps> = ({ data }) => {
	return (
		<div id='header' className={styles.screen}>
			<div className={styles.main}>
				<Slider data={data} />
			</div>
		</div>
	);
};

export default Header;

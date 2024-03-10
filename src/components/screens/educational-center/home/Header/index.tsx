import { FC } from 'react';

import Slider from '../Slider';

import { EDUCATIONAL_CENTER_DEFAULT } from '../../../../../../sanity/sanity-queries/educational-center';

import styles from './styles.module.sass';

type Props = {
	data: EDUCATIONAL_CENTER_DEFAULT[]
};

const Header: FC<Props> = ({ data }) => {
	return (
		<div id='header' className={styles.screen}>
			<div className={styles.main}>
				<Slider data={data} />
			</div>
		</div>
	);
};

export default Header;

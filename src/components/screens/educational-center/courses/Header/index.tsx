import { FC } from 'react';

import MainSlider from '../Slider';

import { EDUCATIONAL_CENTER_COURSES } from '../../../../../../sanity/sanity-queries/educational-center';

import styles from './style.module.sass';


type Props = {
	course: EDUCATIONAL_CENTER_COURSES
};


const Header: FC<Props> = ({ course }) => {
	return (
		<div id='header' className={styles.screen}>
			<div className={styles.main}>
				<MainSlider course={course}/>
			</div>
		</div>
	);
};

export default Header;

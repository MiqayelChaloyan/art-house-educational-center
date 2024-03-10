import { FC, useEffect } from 'react';

import { useAppDispatch } from '@/hooks/useStore';
import { closeModal } from '@/store/stateModalSlice';

import Layout from '@/components/layout/layouts/educational-center/layout';

import MainScreen from './MainScreen';

import { EDUCATIONAL_CENTER_COURSES } from '../../../../../sanity/sanity-queries/educational-center';

import styles from './styles.module.sass';

type PriceListProps = {
	course: EDUCATIONAL_CENTER_COURSES[]
	isError: boolean
}


const PriceList: FC<PriceListProps> = ({ course, isError }) => {	
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(closeModal());
	}, []);

	return (
		<Layout headerPosition='fixed'>
			<div className={styles.column}/>
			<MainScreen course={course} isError={isError}/>
		</Layout>
	);
};

export default PriceList;












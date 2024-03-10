import { FC, useEffect } from 'react';

import { useAppDispatch } from '@/hooks/useStore';
import { closeModal } from '@/store/stateModalSlice';

import Layout from '@/components/layout/layouts/educational-center/layout';

import MainScreen from './MainScreen';

import { EDUCATIONAL_CENTER_CO_WORKERS } from '../../../../../sanity/sanity-queries/educational-center';

import styles from './styles.module.sass';

type CoWorkersProps = {
	data: EDUCATIONAL_CENTER_CO_WORKERS[]
	isError: boolean
};

const CoWorkers: FC<CoWorkersProps> = ({ data, isError }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(closeModal());
	}, []);

	return (
		<Layout headerPosition='fixed'>
			<div className={styles.column} />
			<MainScreen data={data} isError={isError} />
		</Layout>
	);
};

export default CoWorkers;
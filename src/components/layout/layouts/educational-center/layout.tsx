import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Meta from '@/components/seo/educational-center-meta';
import Modal from '@/components/layout/layouts/educational-center/Modal';

import Header from './Header';
import Footer from './Footer';
import CoursesModal from './Modal/courses';
import RightMenu from './RightMenu';
import BottomMenu from './BottomMenu';

import { getCourses } from '../../../../../sanity/services/educational-center-service/courses';
import { EDUCATIONAL_CENTER_COURSES } from '../../../../../sanity/sanity-queries/educational-center';

// import ModalLoading from './LoadingModal';

interface Props {
	children: React.ReactNode
	headerPosition?: 'fixed' | 'sticky'
};

const color = 'var(--color-black)';

const EducationalCenterLayout: React.FC<Props> = ({ children, headerPosition }) => {
	const [courses, setCourses] = useState<EDUCATIONAL_CENTER_COURSES[]>([]);
	const { i18n } = useTranslation();

	useEffect(() => {
		const fetchData = async () => {
			const data = await getCourses(i18n.language);
			setCourses(data);
		};

		fetchData();
	}, [i18n.language]);

	return (
		<Meta>
			<div className="wrapper" style={{ backgroundColor: color }}>
				<RightMenu />
				<BottomMenu />
				<div className="wrapper-content">
					<Header typePosition={`${headerPosition === 'fixed' ? 'fixed' : 'sticky'}`} />
					<main className="wrapper-main">{children}</main>
				</div>
				<Footer courses={courses} />
			</div>
			<Modal>
				<CoursesModal courses={courses} />
			</Modal>
			{/* <ModalLoading/> */}
		</Meta>
	);
};

export default EducationalCenterLayout;

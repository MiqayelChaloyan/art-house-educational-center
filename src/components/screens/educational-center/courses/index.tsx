import { FC, memo, useEffect } from 'react';

import MainScreen from './Header';
import About from './About';
import VideoPlayer from './CourseProcess';
import StudentWork from './StudentWork';

import { useAppDispatch } from '@/hooks/useStore';
import { closeModal } from '@/store/stateModalSlice';

import PriceList from './PriceList';
import Layout from '@/components/layout/layouts/educational-center/layout';

type CoursePageProps = {
    course: any;
    isError: boolean,
}

const CoursePage: FC<CoursePageProps> = ({ course, isError }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => dispatch(closeModal()), 1);
    }, [course]);
    
    return (
        <Layout headerPosition='fixed'>
            <MainScreen course={course} />
            <About course={course}/>
            <VideoPlayer course={course} />
            <StudentWork course={course} />
            <PriceList course={course} />
        </Layout>
    );
};

export default memo(CoursePage);
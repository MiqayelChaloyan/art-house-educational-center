import { FC } from 'react';

import { EDUCATIONAL_CENTER_COURSES } from '../../../sanity/sanity-queries/educational-center';
import { getCourses } from '../../../sanity/services/educational-center-service/courses';

import PageNotFoundError from '@/components/screens/404';
import PriceList from '@/components/screens/educational-center/price-list';


type PriceListProps = {
    course: EDUCATIONAL_CENTER_COURSES[]
    isError: boolean
}


const PriceListPage: FC<PriceListProps> = ({ course, isError }) => {
    
    if (isError) {
        return <PageNotFoundError/>;
    }

    return (<PriceList course={course} isError={isError} />);
};

export async function getServerSideProps(context: any) {
    const { locale } = context;

    try {
        const course = await getCourses(locale);

        return {
            props: {
                course,
                isError: false,
            },
        };
    } catch (error) {
        return {
            props: {
                course: {},
                isError: true,
            },
        };
    }
}

export default PriceListPage;
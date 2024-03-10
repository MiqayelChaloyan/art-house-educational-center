import React, { memo } from 'react';

// import { NextSeo } from 'next-seo';
import { GetServerSidePropsContext } from 'next';

import CoursePage from '@/components/screens/educational-center/courses';

import { urlFor } from '../../../sanity/imageUrlBuilder';
import { getCourseBySlug } from '../../../sanity/services/educational-center-service/courses';
import PageNotFoundError from '@/components/screens/404';

type CourseProps = {
    course: any
    isError: boolean
};

const Course = ({ course, isError }: CourseProps) => {
            
    if (isError || !course[0]) {
        return <PageNotFoundError />;
    };
    
    const urlForSeo = urlFor(course[0].course_main[0].image)
        .auto('format')
        .fit('max')
        .url();        

    return (
        <>
            {/* <NextSeo
                title={course[0].course_name}
                description={course[0].about_us_content}
                canonical='https://art-training-center.vercel.app/'
                openGraph={{
                    url: `https://art-training-center.vercel.app/course/${course[0].slug}`,
                    title: course[0].course_name,
                    description: course[0].about_us_content,
                    images: [
                        {
                            url: urlForSeo || '',
                            width: 500,
                            height: 500,
                            alt: course[0].course_main[0].image.alt,
                        },
                    ],
                    siteName: 'ART Training Center',
                    type: 'website',
                    locale: 'en'
                }}
            /> */}
            <CoursePage course={course[0]} isError={isError} />
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { locale, query: { slug } } = context;

    try {
        const course = await getCourseBySlug(slug as string, locale as string);

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
};

export default memo(Course);

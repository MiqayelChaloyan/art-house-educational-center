import { FC, memo } from 'react';

import CoWorkers from '@/components/screens/educational-center/co-workers';
import PageNotFoundError from '../404/index';

import { getCoWorkers } from '../../../sanity/services/educational-center-service/co-workers';

import { EDUCATIONAL_CENTER_CO_WORKERS } from '../../../sanity/sanity-queries/educational-center';

type CoWorkersProps = {
	data: EDUCATIONAL_CENTER_CO_WORKERS[]
	isError: boolean
}

const COWorkersPage: FC<CoWorkersProps> = ({ data, isError }) => {

    if (isError) {
        return <PageNotFoundError/>;
    }

	return (<CoWorkers data={data} isError={isError}/>);
};

export async function getServerSideProps(context: any) {
    const { locale } = context;
    
    try {
        const data = await getCoWorkers(locale);
        return {
            props: {
                data,
                isError: false,
            },
        };
    } catch (error) {
        return {
            props: {
                data: {},
                isError: true,
            },
        };
    }
}

export default memo(COWorkersPage);

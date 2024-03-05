import { FC, memo } from 'react';

import Home from '@/components/screens/art-house/home';
import PageNotFoundError from '@/components/screens/404';

import { ART_HOUSE_HOME } from '../../sanity/sanity-queries/art-house';
import { fetchArtHouseHomeData } from '../../sanity/services/art-house-service';

type HomePageProps = {
  data: ART_HOUSE_HOME
  isError: boolean
};

const HomePage: FC<HomePageProps> = ({ data, isError }) => {

  if (isError || !data) {
    return <PageNotFoundError />;
  };

  return (<Home data={data} isError={isError} />);
};

export const getServerSideProps = async (context: any) => {
  const { locale } = context;

  try {
    const data = await fetchArtHouseHomeData(locale);

    return {
      props: {
        data: data[1],
        isError: false,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
        isError: true,
      },
    };
  }
};

export default memo(HomePage);

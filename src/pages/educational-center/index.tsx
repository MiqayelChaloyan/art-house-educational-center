import { FC } from "react";
import PageNotFoundError from "@/components/screens/404";
import { getHomeData } from "../../../sanity/services/educational-center-service/about-us";
import { EDUCATIONAL_CENTER_DEFAULT } from "../../../sanity/sanity-queries/educational-center";
import EducationalCenterHome from "@/components/screens/educational-center/home";


type HomePageProps = {
    data: EDUCATIONAL_CENTER_DEFAULT[]
    isError: boolean
  };

  
const EducationalCenterPage: FC<HomePageProps> = ({ data, isError }) => {
    
    if (isError || !data) {
        return <PageNotFoundError />;
      };

    return <EducationalCenterHome data={data} isError={false}/>
};

export const getServerSideProps = async (context: any) => {
    const { locale } = context;
  
    try {
      const data = await getHomeData(locale);
  
      return {
        props: {
          data: data,
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

export default EducationalCenterPage;
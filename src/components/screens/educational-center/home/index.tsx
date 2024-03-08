import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Header from "./Header";
import { FC, useEffect } from "react";
import { useAppDispatch } from "@/hooks/useStore";
import { closeModal } from "@/store/stateModalSlice";
import About from "./About";
import VideoPlayer from "./VideoPlayer";
import { EDUCATIONAL_CENTER_DEFAULT } from "../../../../../sanity/sanity-queries/educational-center";
import CookingCourses from "./CookingCourses";
import Progress from "./Progress";
import Specialists from "./Specialists";
import OurRating from "./OurRating";


type Props = {
    data: EDUCATIONAL_CENTER_DEFAULT[]
    isError: boolean,
};

const EducationalCenterHome: FC<Props> = ({ data, isError }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(closeModal());
    }, []);

    return (
        <Layout headerPosition='fixed'>
            <Head>
                <title>Educational Center</title>
                <meta name='description' content='Educational Center' />
            </Head>
            <Header data={data} />

            <About data={data} />
            <VideoPlayer data={data} />
            <CookingCourses data={data} />  
            <Progress data={data} />
            
            <Specialists data={data} />
            <OurRating data={data} />
        </Layout>
    )
}

export default EducationalCenterHome;
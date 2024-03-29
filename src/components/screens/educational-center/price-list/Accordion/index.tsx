import React, { FC, memo, useState } from 'react';

import Panel from '../AccordionItem';

import { EDUCATIONAL_CENTER_COURSES } from '../../../../../../sanity/sanity-queries/educational-center';

import styles from './style.module.sass';


type Props = {
    course: EDUCATIONAL_CENTER_COURSES[]
};


const Accordion: FC<Props> = ({ course }) => {
    const [activeTab, setActiveTab] = useState<number | null>(null);

    const activateTab = (index: number) => {
        setActiveTab((prev) => (prev === index ? -1 : index));
    };

    return (
        <div className={styles.accordion} role='tablist'>
            {course.map((panel: any, index: number) => (
                <Panel
                    key={panel._id}
                    activeTab={activeTab}
                    index={index}
                    {...panel}
                    name={panel.course_name}
                    svg={panel.svg}
                    alt={panel.svg.alt}
                    list={panel.price_list}
                    activateTab={() => activateTab(index)}
                />
            ))}
        </div>
    );
};

export default memo(Accordion);

import { FC, memo } from 'react';

import Container from '@/components/components/container';

import Branch from '@/components/ui/branch';
import Carousel from '@/components/ui/swiper';

import { ART_HOUSE_HOME } from '../../../../../../sanity/sanity-queries/art-house';

import styles from './styles.module.sass';

type Props = {
    data: ART_HOUSE_HOME
};

const Branches: FC<Props> = ({ data }) => {
    const cards = data.our_websites.map((item: any) => <Branch key={item.slug} item={item} />);

    return (
        <div id='branches' className={styles.container}>
            <Container>
                <div className={styles.cards}>
                    {cards}
                </div>
                <div className={styles.slider}>
                    <Carousel cards={cards} />
                </div>
            </Container>
        </div>
    );
};

export default memo(Branches);
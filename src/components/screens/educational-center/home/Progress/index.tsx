import { FC, memo } from 'react';



import styles from './styles.module.sass';
import ProgressItem from '@/components/ui/progress';
import Container from '@/components/components/container';
import { EDUCATIONAL_CENTER_DEFAULT } from '../../../../../../sanity/sanity-queries/educational-center';

type Props = {
    data: EDUCATIONAL_CENTER_DEFAULT[]
};

const Progress: FC<Props> = ({ data }) => {
    const uploadProgress = data[0].progress_section.slice(0, 4);

    const items = uploadProgress.map((item: any) => {
        return (
            <div key={item.slug} className={styles.column}>
                <ProgressItem value={0} quantity={item.quantity} />
                <p className={styles.title}>{item.title}</p>
            </div>
        );
    });

    return (
        <div id='circle-progress' className={styles.container}>
            <Container>
                <div className={styles.row}>
                    {items}
                </div>
            </Container>
        </div>
    );
};

export default memo(Progress);

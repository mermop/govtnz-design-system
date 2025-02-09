import React from 'react';
import Container from '@govtnz/ds/build/react-ts/FlexContainer';
import Row from '@govtnz/ds/build/react-ts/FlexRow';
import Column from '@govtnz/ds/build/react-ts/FlexColumn';
import Layout, { GatsbyPageProps } from './layout';
import SEO from './seo';
import GetInTouch from './GetInTouch';

type Props = {
    title: string;
    pageProps: GatsbyPageProps;
    PageContent: Function;
};

const CommunityPage = ({ title, pageProps, PageContent }: Props) => {
    return (
        <Layout>
            <SEO
                title={title}
                keywords={[title, `design system`, `new zealand government`]}
            />
            <Container width="fixed">
                <Row>
                    <Column xs="12" sm="12" md="9" lg="8" mdOffset="1" lgOffset="1">
                        <PageContent {...pageProps} name={title} />
                        <GetInTouch title={title} />
                    </Column>
                </Row>
            </Container>
        </Layout>
    );
};

export default CommunityPage;

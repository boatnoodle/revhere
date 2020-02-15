import { FunctionComponent } from 'react';
import { Layouts } from '../components/Layout';
import { LandingPage } from '../containers/landing-page';
const Index: FunctionComponent = () => {
    return (
        <Layouts>
            <LandingPage />
        </Layouts>
    );
};
export default Index;

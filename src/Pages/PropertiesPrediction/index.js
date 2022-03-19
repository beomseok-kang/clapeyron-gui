import { Route } from 'react-router-dom';

import PageHeader from '../../Components/shared/PageHeader';
import Page from '../../Components/shared/Page';
import Models from './Models';
import Properties from './Properties';

function PropertiesPrediction({ match }) {

  return (
    <Page>
      <PageHeader title="Properties Prediction"/>
      <Route exact path={`${match.path}/models`} component={Models}/>
      <Route exact path={`${match.path}/properties`} component={Properties}/>
    </Page>
  );
}

export default PropertiesPrediction;
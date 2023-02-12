import Page from '../Components/shared/Page';
import PageHeader from '../Components/shared/PageHeader';
import PropertiesPredictionWrapper from '../Components/ui/PropertiesPrediction/PropertiesPredictionWrapper';

function PropertiesPrediction({ match }) {

  return (
    <Page>
      <PageHeader title="Properties Prediction"/>
      <PropertiesPredictionWrapper/>
    </Page>
  );
}

export default PropertiesPrediction;
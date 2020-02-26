// in App.js
import React, { useState, useEffect } from 'react';
import dataProviderFactory from 'container-admin/dataProvider';
import reviews from 'container-admin/reviews';

import { Admin, Resource } from 'react-admin';
import { ProvideAuth } from 'components/Authentication';
import { withApollo } from 'providers/web-client/with-apollo-client';
import { authProvider } from 'container-admin/authProvider';

const AdminPage = () => {
  const [dataProvider, setDataProvider] = useState();

  useEffect(() => {
    const fetchDataProvider = async () => {
      const dataProviderInstance = await dataProviderFactory();
      setDataProvider(() => dataProviderInstance);
    };

    fetchDataProvider();
  }, []);

  if (!dataProvider) {
    return <div>Loading</div>;
  }

  return (
    <ProvideAuth>
      <Admin title="Admin" dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="Reviews" {...reviews} />
      </Admin>
    </ProvideAuth>
  );
};

export default withApollo(AdminPage, { ssr: true });

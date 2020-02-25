// in App.js
import React, { useState, useEffect } from 'react';
import dataProviderFactory from 'container-admin/dataProvider';
import { Admin, Resource } from 'react-admin';

// import { PostCreate, PostEdit, PostList } from './posts';

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
    <Admin title="" dataProvider={dataProvider}>
      {/* <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} /> */}
    </Admin>
  );
};

export default AdminPage;

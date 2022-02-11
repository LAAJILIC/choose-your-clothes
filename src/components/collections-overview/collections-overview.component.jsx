import React, { useContext } from 'react';


import CollectionPreview from '../collection-preview/collection-preview.component';

import CollectionContext from '../../contexts/collections/collections.context';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const { collections } = useContext(CollectionContext);
  const { collection } = Object.keys(collections).map(key => collections[key]);
    return (
  <div className='collections-overview'>
    {collection.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);};

export default CollectionsOverview;

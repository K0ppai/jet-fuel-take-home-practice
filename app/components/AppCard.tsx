import React from 'react';
import AppCardHeader from './AppCardHeader';
import Medias from './Medias';

const AppCard = ({ category }: { category: object }) => {
  const { campaign_name, campaign_icon_url, pay_per_install, medias } = category as {
    campaign_name: string;
    campaign_icon_url: string;
    pay_per_install: string;
    medias: object[];
  };

  return (
    <div>
      <AppCardHeader
        name={campaign_name}
        icon={campaign_icon_url}
        payPerInstall={pay_per_install}
      />
      <Medias medias={medias} />
    </div>
  );
};

export default AppCard;

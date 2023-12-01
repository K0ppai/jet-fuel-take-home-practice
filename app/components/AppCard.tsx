import React from 'react';
import AppCardHeader from './AppCardHeader';

const AppCard = ({ category }: { category: object }) => {
  const { campaign_name, campaign_icon_url, pay_per_install } = category as {
    campaign_name: string;
    campaign_icon_url: string;
    pay_per_install: string;
  };

  return (
    <div>
      <AppCardHeader
        name={campaign_name}
        icon={campaign_icon_url}
        payPerInstall={pay_per_install}
      />
    </div>
  );
};

export default AppCard;

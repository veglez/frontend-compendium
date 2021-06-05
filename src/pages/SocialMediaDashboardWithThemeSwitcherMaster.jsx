import React from 'react';
import Styles from '@styles/SMDWTSM.module.scss';

import MyThemeProvider from '@components/SMDWTSM/theme/themeContext';
import PageContainer from '@components/SMDWTSM/PageContainer/PageContainer';

const SocialMediaDashboardWithThemeSwitcherMaster = () => {
  return (
    <MyThemeProvider>
      <PageContainer
        className={{
          container: Styles.container,
          overviewCards: Styles.overviewCards,
        }}
      />
    </MyThemeProvider>
  );
};

export default SocialMediaDashboardWithThemeSwitcherMaster;

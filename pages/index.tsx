import Head from 'next/head';

// Desktop Components
import HeaderDesktop from '../app/components/HeaderDesktop';
import FooterDesktop from '../app/components/FooterDesktop';
import WelcomeDesktop from '../app/sections/WelcomeDesktop';
import AboutMeDesktop from '../app/sections/AboutMeDesktop';
import ServicesDesktop from '../app/sections/ServicesDesktop';
import RequestBudgetDesktop from '../app/sections/RequestBudgetDesktop';

// Mobile Components
import HeaderMobile from '../app/components/HeaderMobile';
import FooterMobile from '../app/components/FooterMobile';
import WelcomeMobile from '../app/sections/WelcomeMobile';
import AboutMeMobile from '../app/sections/AboutMeMobile';
import ServicesMobile from '../app/sections/ServicesMobile';
import RequestBudgetMobile from '../app/sections/RequestBudgetMobile';

// Hook customizado
import { useIsMobile } from '../app/hooks/useIsMobile';
import Loading from '../app/components/Loading';

import styles from '../styles/pages/index.module.scss';

export default function Home() {
  const isMobile = useIsMobile();

  // Mostra loading até detectar o tipo de dispositivo
  if (isMobile === undefined) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Brunelly Baiocco - Arquitetura e Design de Interiores</title>
        <meta name="description" content="Transforme seu espaço em um ambiente de bem-estar com projetos únicos de arquitetura e design de interiores" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
        
        <div className={styles.content}>
          <main>
            {isMobile ? <WelcomeMobile /> : <WelcomeDesktop />}
            {isMobile ? <AboutMeMobile /> : <AboutMeDesktop />}
            {isMobile ? <ServicesMobile /> : <ServicesDesktop />}
            {isMobile ? <RequestBudgetMobile /> : <RequestBudgetDesktop />}
          </main>
          </div>
        
        {isMobile ? <FooterMobile /> : <FooterDesktop />}
      </div>
    </>
  );
}

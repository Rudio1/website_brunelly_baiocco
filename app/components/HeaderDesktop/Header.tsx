import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
  const router = useRouter();

  const scrollToAboutMe = (e: React.MouseEvent) => {
    e.preventDefault();
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById('aboutme') || document.getElementById('aboutme-mobile');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    } else {
      const element = document.getElementById('aboutme') || document.getElementById('aboutme-mobile');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById('services') || document.getElementById('services-mobile');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    } else {
      const element = document.getElementById('services') || document.getElementById('services-mobile');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.divheader}>
        <div className={styles.logo}>
          <Link href="/">
          <Image 
            src="/logo.svg" 
            alt="Brunelly Baiocco Arquitetura" 
            width={200} 
            height={48}
            priority
          />
          </Link>
        </div>
        </div>
        <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Início</Link>
        <a href="#aboutme" className={styles.navLink} onClick={scrollToAboutMe}>Sobre</a>
        <a href="#services" className={styles.navLink} onClick={scrollToServices}>Serviços</a>
        <Link href="/projetos" className={styles.navLink}>Projetos</Link>
        <Link href="/contato" className={styles.navLink}>Contato</Link>
        </nav>
      </header>
      <div className={styles.lineHeader} />
    </>
  );
} 
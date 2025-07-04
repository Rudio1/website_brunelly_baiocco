import Head from 'next/head';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';
import styles from '../../styles/pages/contato.module.scss';

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - Brunelly Baiocco</title>
        <meta name="description" content="Entre em contato com Brunelly Baiocco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <h1 className={styles.title}>
            Contato
          </h1>
          
          <div className={styles.content}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Entre em Contato</h2>
              <p className={styles.description}>
                Gostaria de saber mais sobre meu trabalho ou tem alguma dúvida? 
                Ficarei feliz em conversar com você!
              </p>
            </div>

            <div className={styles.contactForm}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className={styles.input}
                    required 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className={styles.input}
                    required 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Assunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className={styles.input}
                    required 
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    className={styles.textarea}
                    required 
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className={styles.contactMethods}>
              <h2 className={styles.sectionTitle}>Outras Formas de Contato</h2>
              <div className={styles.methods}>
                <div className={styles.method}>
                  <strong>Email:</strong> contato@brunellybaiocco.com
                </div>
                <div className={styles.method}>
                  <strong>Telefone:</strong> (11) 99999-9999
                </div>
                <div className={styles.method}>
                  <strong>WhatsApp:</strong> (11) 99999-9999
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 
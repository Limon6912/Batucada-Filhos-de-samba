import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const SocialButtons = () => {
  const phoneNumber = '1234567890'; 
  const message = 'Hola, quiero más información';

  return (
    <div style={styles.container}>
      <a
        href="https://www.facebook.com/samnbahilos"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...styles.button, backgroundColor: '#3b5998' }}
        aria-label="Facebook"
      >
        <FaFacebookF size={20} />
      </a>

      <a
        href="https://www.instagram.com/sambahilos"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...styles.button, backgroundColor: '#E1306C' }}
        aria-label="Instagram"
      >
        <FaInstagram size={20} />
      </a>

      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...styles.button, backgroundColor: '#25D366' }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: '10px',
    zIndex: 1000,
  },
  button: {
    color: 'white',
    borderRadius: '50%',
    padding: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease-in-out',
  },
};

export default SocialButtons;

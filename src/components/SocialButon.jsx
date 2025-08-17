
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  const phoneNumber = '1234567890'; 
  const message = 'Hola, quiero más información'; 

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.floatingButton}
      aria-label="Enviar mensaje por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};


const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    padding: '15px',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease-in-out',
  },
};


export default WhatsappButton;
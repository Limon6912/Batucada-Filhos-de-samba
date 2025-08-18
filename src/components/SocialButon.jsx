
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

import { LinkRedesSociales } from './LinkRedesSociales'

const SocialButtons = () => {
  const phoneNumber = '1234567890';
  const message = 'Hola, quiero más información';
  const sizeIcon = 25

  return (
    <div className='fixed sm:bottom-[60px] sm:right-[60px] flex sm:flex-col sm:gap-3 z-30000 justify-center bottom-0 w-full sm:w-auto'>

      <LinkRedesSociales href="https://www.facebook.com/filhosdesamba" target="_blank" color="bg-[#3b5998]">
        <FaFacebookF size={sizeIcon} />
      </LinkRedesSociales>


      <LinkRedesSociales
        color="bg-[#E1306C]"
        href="https://www.instagram.com/Batucada_FDS"
        target="_blank"
        aria-label="Instagram"
      >
        <FaInstagram size={sizeIcon} />
      </LinkRedesSociales>

      <LinkRedesSociales
        color="bg-[#075e54]"
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={sizeIcon} />
      </LinkRedesSociales>
    </div>
  );
};


export default SocialButtons;

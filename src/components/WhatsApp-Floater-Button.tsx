
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton = () => {
  const phoneNumber = '971544263686';
  const message = 'Hi, I have a question about your services.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex items-center group bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg overflow-hidden transition-all duration-300"
    >
      <div className="p-2 lg:p-4">
        <FaWhatsapp className="w-6 h-6" />
      </div>
      <span className="whitespace-nowrap max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 group-hover:pe-4 overflow-hidden transition-all duration-300 ">
        WhatsApp Us
      </span>
    </a>
  );
};

export default WhatsAppFloatingButton;

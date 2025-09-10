const API_BASE_URL = "http://192.168.0.105:8001/api";

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = "7298372846:AAG8e18_Kg_GoobvxWCRj1dGR30HonOewhE";
const TELEGRAM_CHAT_ID = "5050378120";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

/**
 * Fetches contact information from the API
 * @returns {Promise<Array>} Array of contact information objects
 */
export const fetchContactInfo = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/info/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching contact info:", error);
    throw error;
  }
};

/**
 * Fetches working hours from the API
 * @returns {Promise<Array>} Array of working hours objects
 */
export const fetchWorkingHours = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/hours/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching working hours:", error);
    throw error;
  }
};

/**
 * Formats working hours data for display
 * @param {Array} hoursData - Raw working hours data from API
 * @returns {Array} Formatted working hours information
 */
export const formatWorkingHours = (hoursData) => {
  if (!hoursData || !Array.isArray(hoursData)) {
    return [];
  }

  const dayNames = {
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота",
    sunday: "Воскресенье"
  };

  const shortDayNames = {
    monday: "Пн",
    tuesday: "Вт",
    wednesday: "Ср",
    thursday: "Чт",
    friday: "Пт",
    saturday: "Сб",
    sunday: "Вс"
  };

  return hoursData
    .sort((a, b) => a.order - b.order)
    .map(hour => ({
      id: hour.id,
      day: hour.day,
      dayName: dayNames[hour.day] || hour.day,
      shortDayName: shortDayNames[hour.day] || hour.day,
      openTime: hour.open_time,
      closeTime: hour.close_time,
      isClosed: hour.is_closed,
      order: hour.order
    }));
};

/**
 * Formats contact data for display
 * @param {Array} contactData - Raw contact data from API
 * @returns {Object} Formatted contact information
 */
export const formatContactData = (contactData) => {
  if (!contactData || !Array.isArray(contactData)) {
    return {
      email: null,
      phone: null,
      address: null,
    };
  }

  const formatted = {
    email: null,
    phone: null,
    address: null,
  };

  contactData.forEach((contact) => {
    if (contact.is_active) {
      switch (contact.contact_type) {
        case "email":
          formatted.email = {
            title: contact.title,
            value: contact.value,
            href: `mailto:${contact.value}`,
          };
          break;
        case "phone":
          formatted.phone = {
            title: contact.title,
            value: contact.value,
            href: `tel:${contact.value}`,
          };
          break;
        case "address":
          formatted.address = {
            title: contact.title,
            value: contact.value,
          };
          break;
        default:
          break;
      }
    }
  });

  return formatted;
};

/**
 * Sends a contact form message to Telegram bot
 * @param {Object} formData - Form data containing name, email, subject, and message
 * @returns {Promise<Object>} Response from Telegram API
 */
export const sendContactFormToTelegram = async (formData) => {
  try {
    const { name, email, subject, message } = formData;

    // Format the message for Telegram
    const telegramMessage = `
📧 *Новое сообщение с сайта*

👤 *Имя:* ${name}
📧 *Email:* ${email}
📝 *Тема:* ${subject || 'Не указана'}

💬 *Сообщение:*
${message}

⏰ *Время:* ${new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })}
    `.trim();

    const response = await fetch(TELEGRAM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Telegram API error: ${errorData.description || response.statusText}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
};

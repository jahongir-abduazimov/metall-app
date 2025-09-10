import { useState, useEffect } from "react";
import { fetchContactInfo, formatContactData, fetchWorkingHours, formatWorkingHours } from "@/services/contactApi";

/**
 * Custom hook to fetch and manage contact information and working hours
 * @returns {Object} Contact data, working hours, loading state, and error state
 */
export const useContactInfo = () => {
  const [contactData, setContactData] = useState(null);
  const [workingHours, setWorkingHours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContactInfo = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch both contact info and working hours in parallel
        const [contactData, hoursData] = await Promise.all([
          fetchContactInfo(),
          fetchWorkingHours()
        ]);

        const formattedContactData = formatContactData(contactData);
        const formattedHoursData = formatWorkingHours(hoursData);

        setContactData(formattedContactData);
        setWorkingHours(formattedHoursData);
      } catch (err) {
        setError(err.message);
        // Set fallback data in case of error
        setContactData({
          email: {
            title: "Email",
            value: "contact@example.com",
            href: "mailto:contact@example.com",
          },
          phone: {
            title: "+1 (234) 567-890",
            value: "+1 (234) 567-890",
            href: "tel:+1234567890",
          },
          address: {
            title: "123 Главная улица Город, Страна",
            value: "123 Главная улица Город, Страна",
          },
        });
        // Set fallback working hours
        setWorkingHours([
          { dayName: "Понедельник", shortDayName: "Пн", openTime: "09:00:00", closeTime: "18:00:00", isClosed: false },
          { dayName: "Вторник", shortDayName: "Вт", openTime: "09:00:00", closeTime: "18:00:00", isClosed: false },
          { dayName: "Среда", shortDayName: "Ср", openTime: "09:00:00", closeTime: "18:00:00", isClosed: false },
          { dayName: "Четверг", shortDayName: "Чт", openTime: "09:00:00", closeTime: "18:00:00", isClosed: false },
          { dayName: "Пятница", shortDayName: "Пт", openTime: "09:00:00", closeTime: "18:00:00", isClosed: false },
          { dayName: "Суббота", shortDayName: "Сб", openTime: "09:00:00", closeTime: "18:00:00", isClosed: true },
          { dayName: "Воскресенье", shortDayName: "Вс", openTime: "09:00:00", closeTime: "18:00:00", isClosed: true }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadContactInfo();
  }, []);

  return { contactData, workingHours, loading, error };
};

"use client";

import Container from "@/components/Container";
import React, { useState } from "react";
import { useContactInfo } from "@/hooks/useContactInfo";
import { sendContactFormToTelegram } from "@/services/contactApi";

const Contact = () => {
  const { contactData, workingHours, loading, error } = useContactInfo();

  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [submitMessage, setSubmitMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage("");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      await sendContactFormToTelegram(formData);
      setSubmitStatus("success");
      setSubmitMessage(
        "Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to format time from HH:MM:SS to HH:MM
  const formatTime = (timeString) => {
    if (!timeString) return "";
    return timeString.substring(0, 5); // Remove seconds
  };

  // Helper function to format working hours for display
  const formatWorkingHoursDisplay = (hours) => {
    if (!hours || hours.length === 0) return "Рабочие часы недоступны";

    const weekdays = hours.filter(
      (h) =>
        !h.isClosed &&
        ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(h.day)
    );
    const weekends = hours.filter((h) =>
      ["saturday", "sunday"].includes(h.day)
    );

    let display = "";

    if (weekdays.length > 0) {
      const firstWeekday = weekdays[0];
      const lastWeekday = weekdays[weekdays.length - 1];
      const openTime = formatTime(firstWeekday.openTime);
      const closeTime = formatTime(firstWeekday.closeTime);

      if (firstWeekday.shortDayName === lastWeekday.shortDayName) {
        display = `${firstWeekday.shortDayName}: ${openTime}–${closeTime}`;
      } else {
        display = `${firstWeekday.shortDayName}–${lastWeekday.shortDayName}: ${openTime}–${closeTime}`;
      }
    }

    const closedWeekends = weekends.filter((h) => h.isClosed);
    if (closedWeekends.length === 2) {
      display += " • Сб–Вс: Закрыто";
    } else if (closedWeekends.length === 1) {
      const closedDay = closedWeekends[0];
      display += ` • ${closedDay.shortDayName}: Закрыто`;
    }

    return display || "Рабочие часы недоступны";
  };

  return (
    <div>
      <section className="bg-[url('/intro-bg.png')] bg-cover bg-center bg-no-repeat w-full">
        <Container>
          <div className="h-[35vh] md:h-[50vh] flex items-end pt-[90px] pb-10">
            <div>
              <h1 className="text-white text-[40px] md:text-[56px] font-bold leading-tight">
                Контакты
              </h1>
              <p className="text-white/70 text-lg mt-3 max-w-3xl">
                Есть вопросы? Мы будем рады услышать от вас.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-blac">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Свяжитесь с нами</h2>
              <p className="text-black/80 mb-6">
                Заполните форму, и мы свяжемся с вами в ближайшее время.
              </p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-black/80" htmlFor="name">
                    Имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-black/10 border border-black/20 rounded-lg px-4 py-3 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/30"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-black/80" htmlFor="email">
                    Электронная почта
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-black/10 border border-black/20 rounded-lg px-4 py-3 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/30"
                    placeholder="ваш@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-black/80" htmlFor="subject">
                    Тема
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-black/10 border border-black/20 rounded-lg px-4 py-3 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/30"
                    placeholder="О чем это?"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-black/80" htmlFor="message">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-black/10 border border-black/20 rounded-lg px-4 py-3 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/30"
                    placeholder="Как мы можем помочь?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${
                    isSubmitting
                      ? "bg-black/50 cursor-not-allowed"
                      : "bg-black cursor-pointer hover:bg-black/70"
                  } text-white rounded-lg px-6 py-3 font-semibold transition`}
                >
                  {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">✅ {submitMessage}</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">❌ {submitMessage}</p>
                  </div>
                )}

                <p className="text-black/60 text-sm">
                  Сообщение будет отправлено в Telegram и мы свяжемся с вами в
                  ближайшее время.
                </p>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Контактная информация
              </h3>
              {loading ? (
                <div className="space-y-3 text-black/60">
                  <div className="animate-pulse">
                    Загрузка контактной информации...
                  </div>
                </div>
              ) : contactData ? (
                <ul className="space-y-3 text-black/80">
                  {contactData.email && (
                    <li>
                      <a
                        className="hover:underline"
                        href={contactData.email.href}
                      >
                        {contactData.email.value}
                      </a>
                    </li>
                  )}
                  {contactData.phone && (
                    <li>
                      <a
                        className="hover:underline"
                        href={contactData.phone.href}
                      >
                        {contactData.phone.value}
                      </a>
                    </li>
                  )}
                  {contactData.address && <li>{contactData.address.value}</li>}
                  <li className="pt-3 flex gap-4 text-sm">
                    <a className="underline" href="/privacy-policy">
                      Политика конфиденциальности
                    </a>
                    <a className="underline" href="/terms">
                      Условия
                    </a>
                  </li>
                </ul>
              ) : (
                <div className="space-y-3 text-black/60">
                  <div>Контактная информация недоступна</div>
                </div>
              )}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">Рабочие часы</h4>
                {loading ? (
                  <div className="animate-pulse text-black/60">
                    Загрузка рабочих часов...
                  </div>
                ) : (
                  <div className="text-black/70">
                    <p className="mb-2">
                      {formatWorkingHoursDisplay(workingHours)}
                    </p>
                    {workingHours && workingHours.length > 0 && (
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sm text-black/60 hover:text-black/80">
                          Подробное расписание
                        </summary>
                        <div className="mt-2 space-y-1 text-sm">
                          {workingHours.map((hour) => (
                            <div key={hour.id} className="flex justify-between">
                              <span>{hour.dayName}:</span>
                              <span>
                                {hour.isClosed
                                  ? "Закрыто"
                                  : `${formatTime(hour.openTime)}–${formatTime(
                                      hour.closeTime
                                    )}`}
                              </span>
                            </div>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;

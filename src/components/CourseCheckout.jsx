import React, { useState } from "react";
import { X, CreditCard, Calendar, Lock, CheckCircle } from "lucide-react";

const CourseCheckout = ({ course, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Ek olarak alan bazlı hata mesajları tutmak isteyebilirsin:
  const [fieldErrors, setFieldErrors] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const validateCardName = (value) => {
    // Sadece harfler, boşluklar ve bazı Türkçe karakterler:
    const regex = /^[a-zA-ZğüşöçİĞÜŞÖÇ\s]+$/u;
    if (!regex.test(value)) {
      return "İsim yalnızca harf ve boşluk içerebilir.";
    }
    return "";
  };

  const validateCardNumber = (value) => {
    // Boşluksuz 16 haneli sayı mı?
    const rawValue = value.replace(/\s/g, "");
    const regex = /^\d{16}$/;
    if (!regex.test(rawValue)) {
      return "Kart numarası 16 haneli sayısal değer olmalıdır.";
    }
    return "";
  };

  const validateExpiryDate = (value) => {
    // AA/YY formatı
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(value)) {
      return "Son kullanma tarihi AA/YY formatında olmalıdır (örnek: 04/25).";
    }
    // Geçerlilik kontrolü (opsiyonel):
    // Ay ve yıl kontrolü
    const [month, year] = value.split("/");
    const currentYear = new Date().getFullYear() % 100; // YY formatında yıl
    const currentMonth = new Date().getMonth() + 1; // 1-12
    const expMonth = parseInt(month, 10);
    const expYear = parseInt(year, 10);

    // Geçmiş bir tarih mi?
    if (
      expYear < currentYear ||
      (expYear === currentYear && expMonth < currentMonth)
    ) {
      return "Son kullanma tarihi geçmiş bir tarih olamaz.";
    }

    return "";
  };

  const validateCVV = (value) => {
    const regex = /^\d{3}$/;
    if (!regex.test(value)) {
      return "CVV 3 haneli sayısal bir değer olmalıdır.";
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cardName") {
      // İsim alanı: anında kontrol
      // Dilersen yalnızca blur eventinde kontrol edebilirsin.
      const errorMsg = validateCardName(formattedValue);
      setFieldErrors((prev) => ({ ...prev, cardName: errorMsg }));
    }

    if (name === "cardNumber") {
      // Yalnızca rakam ve boşluk
      formattedValue = formattedValue.replace(/[^\d]/g, "");
      // Format 4 haneli gruplar
      formattedValue = formattedValue.match(/.{1,4}/g)?.join(" ") || "";

      const errorMsg = validateCardNumber(formattedValue);
      setFieldErrors((prev) => ({ ...prev, cardNumber: errorMsg }));
    }

    if (name === "expiryDate") {
      // AA/YY formatında giriş denetimi (örn. 04/25)
      // Kullanıcının / yazmasını kolaylaştırmak için otomatik ekleme de yapabilirsin.
      let cleaned = formattedValue.replace(/[^\d]/g, "");
      if (cleaned.length > 4) cleaned = cleaned.slice(0, 4);
      if (cleaned.length >= 3) {
        formattedValue = cleaned.slice(0, 2) + "/" + cleaned.slice(2);
      } else {
        formattedValue = cleaned;
      }

      const errorMsg = validateExpiryDate(formattedValue);
      setFieldErrors((prev) => ({ ...prev, expiryDate: errorMsg }));
    }

    if (name === "cvv") {
      // Yalnızca rakam
      formattedValue = formattedValue.replace(/[^\d]/g, "");
      if (formattedValue.length > 3)
        formattedValue = formattedValue.slice(0, 3);

      const errorMsg = validateCVV(formattedValue);
      setFieldErrors((prev) => ({ ...prev, cvv: errorMsg }));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Tüm alanları son kez doğrula:
    const cardNameErr = validateCardName(formData.cardName);
    const cardNumberErr = validateCardNumber(formData.cardNumber);
    const expiryDateErr = validateExpiryDate(formData.expiryDate);
    const cvvErr = validateCVV(formData.cvv);

    if (cardNameErr || cardNumberErr || expiryDateErr || cvvErr) {
      setFieldErrors({
        cardName: cardNameErr,
        cardNumber: cardNumberErr,
        expiryDate: expiryDateErr,
        cvv: cvvErr,
      });
      setError("Lütfen formu hatasız şekilde doldurun.");
      setLoading(false);
      return;
    }

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStep(2);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {step === 1 ? "Kurs Satın Alma" : "Ödeme Başarılı"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>

        {step === 1 ? (
          <>
            {/* Course Summary */}
            <div className="p-4 bg-gray-50 dark:bg-gray-900">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <p>Eğitmen: {course.instructor}</p>
                <p>
                  Toplam Süre:{" "}
                  {course.topics.reduce(
                    (acc, topic) => acc + parseInt(topic.duration),
                    0
                  )}{" "}
                  saat
                </p>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-2">
                  Fiyat: {course.price} TL
                </p>
              </div>
            </div>

            {/* Payment Form */}
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-200 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Kart Üzerindeki İsim
                </label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
                {fieldErrors.cardName && (
                  <p className="text-red-600 text-sm">{fieldErrors.cardName}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Kart Numarası
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    maxLength="19"
                    className="w-full px-3 py-2 pl-10 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                  <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                {fieldErrors.cardNumber && (
                  <p className="text-red-600 text-sm">
                    {fieldErrors.cardNumber}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Son Kullanma Tarihi
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="AA/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      maxLength="5"
                      className="w-full px-3 py-2 pl-10 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  {fieldErrors.expiryDate && (
                    <p className="text-red-600 text-sm">
                      {fieldErrors.expiryDate}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    CVV
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      maxLength="3"
                      className="w-full px-3 py-2 pl-10 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  {fieldErrors.cvv && (
                    <p className="text-red-600 text-sm">{fieldErrors.cvv}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium 
                         disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {loading ? "İşleniyor..." : `${course.price} TL Öde`}
              </button>
            </form>
          </>
        ) : (
          // Success Message
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              Ödeme Başarılı!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Kurs erişiminiz başarıyla açıldı. Hemen öğrenmeye
              başlayabilirsiniz.
            </p>
            <button
              onClick={onClose}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Kursa Git
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCheckout;

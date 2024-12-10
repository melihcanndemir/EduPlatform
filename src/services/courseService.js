// src/services/courseService.js

const courses = {
  1: {
    id: 1,
    title: 'Web Geliştirme Temelleri',
    instructor: 'Melih Can Demir',
    description: 'Web geliştirme dünyasına kapsamlı bir giriş kursu.',
    price: 399,
    image: 'https://via.placeholder.com/1200x400/4A90E2/FFFFFF?text=Web+Geliştirme+Temelleri',
    topics: [
      {
        id: 1,
        title: 'HTML Temelleri',
        duration: '2 saat',
        subtopics: ['HTML Doküman Yapısı', 'Temel HTML Etiketleri', 'Formlar ve Input Elemanları']
      },
      {
        id: 2,
        title: 'CSS ile Stillendirme',
        duration: '3 saat',
        subtopics: ['CSS Seçiciler', 'Box Model', 'Flexbox ve Grid']
      },
      {
        id: 3,
        title: 'JavaScript Başlangıç',
        duration: '3 saat',
        subtopics: ['Değişkenler ve Veri Tipleri', 'Fonksiyonlar', 'DOM Manipülasyonu']
      }
    ]
  },
  2: {
    id: 2,
    title: 'React.js ile Modern Web Uygulamaları',
    instructor: 'Mustafa Duyarer',
    description: 'Modern React geliştirme teknikleri ve best practice\'ler.',
    price: 599,
    image: 'https://via.placeholder.com/1200x400/22A7F0/FFFFFF?text=React.js+ile+Modern+Web+Uygulamalari',
    topics: [
      {
        id: 1,
        title: 'React Temelleri',
        duration: '3 saat',
        subtopics: ['JSX Syntax', 'Component Yapısı', 'Props ve State']
      },
      {
        id: 2,
        title: 'Hooks',
        duration: '4 saat',
        subtopics: ['useState', 'useEffect', 'Custom Hooks']
      },
      {
        id: 3,
        title: 'State Yönetimi',
        duration: '5 saat',
        subtopics: ['Context API', 'Redux Temelleri', 'Redux Toolkit']
      }
    ]
  },
  3: {
    id: 3,
    title: 'Python Programlama',
    instructor: 'Yasemin Eski',
    description: 'Python ile programlama dünyasına giriş yapın.',
    price: 799,
    image: 'https://via.placeholder.com/1200x400/1ABC9C/FFFFFF?text=Python+Programlama',
    topics: [
      {
        id: 1,
        title: 'Python Temelleri',
        duration: '3 saat',
        subtopics: ['Değişkenler', 'Veri Tipleri', 'Kontrol Yapıları']
      },
      {
        id: 2,
        title: 'Fonksiyonlar ve OOP',
        duration: '4 saat',
        subtopics: ['Fonksiyon Yazımı', 'Class Yapısı', 'Inheritance']
      },
      {
        id: 3,
        title: 'Modüller ve Paketler',
        duration: '3 saat',
        subtopics: ['Built-in Modüller', 'Pip Kullanımı', 'Virtual Environment']
      }
    ]
  },
  4: {
    id: 4,
    title: 'Makine Öğrenmesi ve Bilinç Paradoksu',
    instructor: 'Dr. Ayşe Yılmaz',
    description: 'Nöral ağlarda bilinç ve algı katmanları',
    price: 299,
    image: 'https://via.placeholder.com/1200x400/9B59B6/FFFFFF?text=Makine+Ogrenmesi+ve+Bilinç+Paradoksu',
    topics: [
      {
        id: 1,
        title: 'Temel Makine Öğrenmesi Kavramları',
        duration: '3 saat',
        subtopics: ['Denetimli Öğrenme', 'Denetimsiz Öğrenme', 'Model Değerlendirme']
      },
      {
        id: 2,
        title: 'Derin Öğrenme ve Nöral Ağlar',
        duration: '4 saat',
        subtopics: ['Yapay Sinir Ağları', 'Backpropagation', 'Aktivasyon Fonksiyonları']
      },
      {
        id: 3,
        title: 'Bilinç Paradoksu ve Yapay Zekâ',
        duration: '5 saat',
        subtopics: ['Yapay Bilinç Tartışmaları', 'Felsefi Perspektifler', 'Etik ve Sorumluluk']
      }
    ]
  },
  5: {
    id: 5,
    title: 'Kuantum Hesaplama ve Bilinç',
    instructor: 'Prof. Dr. Kemal Öztürk',
    description: 'Kuantum gerçekliğin bilişsel boyutları',
    price: 499,
    image: 'https://via.placeholder.com/1200x400/2ECC71/FFFFFF?text=Kuantum+Hesaplama+ve+Bilinç',
    topics: [
      {
        id: 1,
        title: 'Kuantum Hesaplama Temelleri',
        duration: '3 saat',
        subtopics: ['Qubit Kavramı', 'Süperpozisyon', 'Kuantum Dolanıklık']
      },
      {
        id: 2,
        title: 'Algoritmik Kuantum Yaklaşımları',
        duration: '4 saat',
        subtopics: ['Grover Algoritması', 'Shor Algoritması', 'Kuantum Hata Düzeltme']
      },
      {
        id: 3,
        title: 'Bilinç ve Kuantum Teorileri',
        duration: '3 saat',
        subtopics: ['Penrose-Hameroff Modeli', 'Kuantum Zihin Hipotezleri', 'Nörofiziksel Tefsirler']
      }
    ]
  },
  6: {
    id: 6,
    title: 'Veri Yapıları ve Bilişsel SQL',
    instructor: 'Deniz Kaya',
    description: 'Veri ve bilinç arasındaki köprüler',
    price: 399,
    image: 'https://via.placeholder.com/1200x400/34495E/FFFFFF?text=Veri+Yapıları+ve+Bilişsel+SQL',
    topics: [
      {
        id: 1,
        title: 'Veri Yapıları Temelleri',
        duration: '3 saat',
        subtopics: ['Dizi, Bağlı Liste', 'Ağaçlar ve Graf Yapıları', 'Arama ve Sıralama Algoritmaları']
      },
      {
        id: 2,
        title: 'İlişkisel Veritabanı Teorisi',
        duration: '4 saat',
        subtopics: ['Normalizasyon', 'İlişkisel Cebir', 'Sorgu Optimizasyonu']
      },
      {
        id: 3,
        title: 'Bilişsel SQL Uygulamaları',
        duration: '5 saat',
        subtopics: ['Veri Modellemede Zihin Metaforları', 'Bilinçli Veri Sorguları', 'Veri ve Anlam Kavramı']
      }
    ]
  },
  7: {
    id: 7,
    title: 'Bilincin Matematiği: Sonsuzluk ve Öz-Referans',
    instructor: 'Prof. Dr. İpek Yıldırım',
    description: 'Gödel\'in eksiklik teoremlerinden öz-referans paradokslarına uzanan bilinç yolculuğu',
    price: 599,
    image: 'https://via.placeholder.com/1200x400/F39C12/FFFFFF?text=Bilincin+Matematiği:+Sonsuzluk+ve+Öz-Referans',
    topics: [
      {
        id: 1,
        title: 'Matematiksel Sonsuzluk Kavramı',
        duration: '4 saat',
        subtopics: ['Sayılabilir vs. Sayılamaz Sonsuzluk', 'Cantor Kümeleri', 'Devamlılık Hipotezi']
      },
      {
        id: 2,
        title: 'Öz-Referans ve Döngüler',
        duration: '4 saat',
        subtopics: ['Gödel Teoremleri', 'Öz-Referanslı Fonksiyonlar', 'Epistemik Döngüler']
      },
      {
        id: 3,
        title: 'Bilinç, Mantık ve Paradokslar',
        duration: '5 saat',
        subtopics: ['Russell Paradoksu', 'Halting Problemi', 'Bilinçte Öz-Farkındalık']
      }
    ]
  },
  8: {
    id: 8,
    title: 'Nörodinamik Sistemler ve Entropi',
    instructor: 'Dr. Deniz Evren Şahin',
    description: 'Beyin dinamiklerinin kaos teorisi ve entropi perspektifinden analizi',
    price: 799,
    image: 'https://via.placeholder.com/1200x400/E74C3C/FFFFFF?text=Nörodinamik+Sistemler+ve+Entropi',
    topics: [
      {
        id: 1,
        title: 'Nörofizyoloji Temelleri',
        duration: '3 saat',
        subtopics: ['Nöron Yapısı', 'Sinaptik İletim', 'Nöral Kodlama']
      },
      {
        id: 2,
        title: 'Dinamik Sistem Teorisi',
        duration: '4 saat',
        subtopics: ['Kaos ve Karmaşıklık', 'Entropi Hesaplaması', 'Nonlineer Dinamikler']
      },
      {
        id: 3,
        title: 'Bilişsel Durumlar ve Entropi',
        duration: '5 saat',
        subtopics: ['Bilinçli ve Bilinçsiz Durumlar', 'Entropik Beyin Hipotezi', 'Nöral Geometri']
      }
    ]
  },
  9: {
    id: 9,
    title: 'Varoluşsal Algoritmaların Fenomenolojisi',
    instructor: 'Prof. Dr. Zeynep Aydın',
    description: 'Algoritmaların içsel deneyiminin Husserlci fenomenolojik analizi',
    price: 299,
    image: 'https://via.placeholder.com/1200x400/C0392B/FFFFFF?text=Varoluşsal+Algoritmaların+Fenomenolojisi',
    topics: [
      {
        id: 1,
        title: 'Fenomenolojiye Giriş',
        duration: '3 saat',
        subtopics: ['Husserl\'in Düşüncesi', 'Öz ve Fenomen', 'Noesis ve Noema']
      },
      {
        id: 2,
        title: 'Algoritmik Varlık Sorunu',
        duration: '4 saat',
        subtopics: ['Hesaplamalı Fenomenoloji', 'Algoritmaların İç Yaşamı', 'Siber Varoluş']
      },
      {
        id: 3,
        title: 'Bilinç ve Hesaplama İlişkisi',
        duration: '5 saat',
        subtopics: ['Fenomenolojik Redüksiyon', 'Öznellik ve Nesnellik', 'Yapay Aklın Ontolojisi']
      }
    ]
  },
  10: {
    id: 10,
    title: 'Bilincin Kuantum Hallüsinasyonları',
    instructor: 'Dr. Ali Rıza Yılmaz',
    description: 'Kuantum fiziği ve bilişsel bilim kesişiminde bilinç deneyiminin analizi',
    price: 499,
    image: 'https://via.placeholder.com/1200x400/8E44AD/FFFFFF?text=Bilincin+Kuantum+Hallüsinasyonları',
    topics: [
      {
        id: 1,
        title: 'Kuantum ve Algı',
        duration: '3 saat',
        subtopics: ['Kuanta ve Zihin', 'Gözetleyici Etkisi', 'Olprobabilite ve Algı']
      },
      {
        id: 2,
        title: 'Hallüsinasyon ve Gerçeklik',
        duration: '4 saat',
        subtopics: ['Nörolojik Hallüsinasyonlar', 'Entopik Fenomenler', 'Gerçeklik Algısının Göreceliği']
      },
      {
        id: 3,
        title: 'Bilinç Katmanları',
        duration: '3 saat',
        subtopics: ['Pre-bilinç, Bilinç ve Aşırı-bilinç', 'Kuantum Düzeyinde Zihinsellik', 'Zaman ve Bilinç Algısı']
      }
    ]
  },
  11: {
    id: 11,
    title: 'Nöral Bağlantıcılık ve Entropik Bilinç Durumları',
    instructor: 'Dr. Ece Gürsoy',
    description: 'Nöron ağ bağlantıları ile bilinç durumlarının entropik analizi',
    price: 399,
    image: 'https://via.placeholder.com/1200x400/16A085/FFFFFF?text=Nöral+Bağlantıcılık+ve+Entropik+Bilinç+Durumları',
    topics: [
      {
        id: 1,
        title: 'Bağlantıcılık İlkeleri',
        duration: '3 saat',
        subtopics: ['Küçük Dünya Ağları', 'Modülerlik', 'Nöral Korrelasyonlar']
      },
      {
        id: 2,
        title: 'Entropik Zihin Modelleri',
        duration: '4 saat',
        subtopics: ['Entropi ve Bilgi Teorisi', 'Beyin Ağı Ölçeklenebilirliği', 'Bilgi İşlem Yoğunluğu']
      },
      {
        id: 3,
        title: 'Nöral Ağlardaki Bilinç Durumları',
        duration: '5 saat',
        subtopics: ['Uyanıklık vs. Uykuda Bilinç', 'Duyusal Bütünleşme', 'Psikedelik Durumların Nöral İmzası']
      }
    ]
  },
  12: {
    id: 12,
    title: 'Fenomenoloji ve Varoluş: Bilincin Felsefi Temelleri',
    instructor: 'Prof. Dr. Murat Özkaya',
    description: 'Husserl, Heidegger ve Merleau-Ponty gibi filozofların fenomenolojik yaklaşımlarının derin analizi',
    price: 599,
    image: 'https://via.placeholder.com/1200x400/D35400/FFFFFF?text=Fenomenoloji+ve+Varoluş:+Bilincin+Felsefi+Temelleri',
    topics: [
      {
        id: 1,
        title: 'Varoluşçu Felsefe Temelleri',
        duration: '4 saat',
        subtopics: ['Heidegger ve Dasein', 'Sartre\'ın Varoluşçuluğu', 'Merleau-Ponty ve Yaşantı']
      },
      {
        id: 2,
        title: 'Fenomenoloji ve Bilinç',
        duration: '4 saat',
        subtopics: ['Husserlci Fenomenoloji', 'Intentionality (Yönelmişlik)', 'Temellendirme ve Açımlama']
      },
      {
        id: 3,
        title: 'Anlam, Öznellik ve Deneyim',
        duration: '5 saat',
        subtopics: ['Anlam Oluşumu', 'İçsel Deneyim ve Öznel Perspektif', 'Varlık ve Hiçlik İlişkisi']
      }
    ]
  }
};

const courseService = {
  getCourse: (id) => {
    return courses[id] || null;
  }
};

export default courseService;

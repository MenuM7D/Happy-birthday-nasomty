import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// مكون للصفحة الرئيسية - البلورة السحرية
function HomePage() {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleCrystalClick = () => {
    setShowMessage(true);
  };

  const handleReadApology = () => {
    navigate('/birthday');
  };

  return (
    <div className="stage stage-0">
      <div className="stars"></div>
      <div className="magic-crystal-container">
        <div 
          className={`magic-crystal ${showMessage ? 'clicked' : ''}`}
          onClick={handleCrystalClick}
        >
          <div className="crystal-glow"></div>
          <div className="crystal-core">🔮</div>
          <div className="crystal-shine"></div>
        </div>
        {!showMessage && <p className="instruction">اضغطي على البلورة السحرية ✨</p>}
      </div>

      {showMessage && (
        <div className="message-overlay fade-in">
          <div className="apology-card">
            <div className="card-header">💔 اسف بحبك 💔</div>
            <div className="card-body">
              <p className="apology-text">
                اسف والله كنت مخططله من بدري كل حاجه اتلغبطت مره واحده والله انا مش وحش ومنستش عيد ميلادك ودي حاجه اكيده ممكن تكوني فكرتي فيا بطريقه وحشه بس محبتش ابوظ المفاجئه انا بحبك والله ومستحيل انسي اي حاجه حته لو في دماغي مليون حاجه اسف حاسك زمانك كرهاني دلوقتي بس والله منسيتو لحظه بس انا عامله مفاجئه ومتاكد انها هتفرحك يا نسومتي بعشقككك يا قمري💕✨
              </p>
            </div>
            <button className="read-button" onClick={handleReadApology}>
              قريت خلاص 💕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// مكون لصفحة عيد الميلاد - الكيكة
function BirthdayPage() {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleReadBirthday = () => {
    navigate('/hearts');
  };

  return (
    <div className="stage stage-1">
      <div className="vortex-container">
        <div className="vortex"></div>
        <div className="vortex-content">
          <div className="birthday-scene">
            <div className="birthday-cake" onClick={() => setShowMessage(true)}>
              🎂
              <div className="candles">
                <span className="candle">🕯️</span>
                <span className="candle">🕯️</span>
                <span className="candle">🕯️</span>
              </div>
            </div>
            <p className="cake-instruction">دوسي ع التورته يا عمري 🎂✨</p>
          </div>
        </div>
      </div>

      {showMessage && (
        <div className="message-overlay fade-in">
          <div className="word-sequence">
            <div className="love-word word-1">احبك ❤️</div>
            <div className="love-word word-2">اعشقك 💕</div>
            <div className="love-word word-3">بدمنك 💖</div>
          </div>
          <div className="envelope-container appear-after-words">
            <div className="envelope" onClick={() => setShowMessage('letter')}>
              <div className="envelope-flap"></div>
              <div className="envelope-body"></div>
              <p className="envelope-text">دوسي علي الظرف يا عمري 💌</p>
            </div>
          </div>
        </div>
      )}

      {showMessage === 'letter' && (
        <div className="message-overlay fade-in">
          <div className="letter-card">
            <div className="letter-header">💕 كل سنه وانتي طيبه 💕</div>
            <div className="letter-body">
              <p className="letter-text">
                امممممممممم كل سنه وانتي طيبه يا نسومتي بعشقكك يا قمري ربنا يخليكي ليا يا عيوني اجمل من يتم ال 19 مع اني زعلان اعععععع اكبر مني وهتزليني وكدا بس نو انا الكبير ليش دعوه ربنا يخليكي ليا يا حبيبتي تاني عيد ميلاد ليكي واحنا مع بعض ومش هيبقا الاخير يا عمري ومن هنا لاخر يوم في عمرنا هنفضل مع بعض ربنا يخليكي ليا وميحرمنيش منك يا قلبي ابدا ويخلينا لبعض وسند وحبايب بعض طول العمر امواححححححح يا ماما بعشقككك كل سنه وانتي طيبه يا اغلي ما ليا 💞✨
              </p>
            </div>
            <button className="read-button" onClick={handleReadBirthday}>
              قريت خلاص ❤️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// مكون لصفحة القلوب مع تصميم رومانسي جديد
function HeartsPage() {
  const [openedHearts, setOpenedHearts] = useState([]);
  const [showHeartMessage, setShowHeartMessage] = useState(null);
  const navigate = useNavigate();

  const heartMessages = [
    { text: "بحبك", emoji: "❤️✨", color: "#ff6b9d" },
    { text: "بعشقك", emoji: "❤️✨", color: "#c44569" },
    { text: "بدمنك", emoji: "❤️✨", color: "#f093fb" },
    { text: "ربنا يخليكي ليا", emoji: "💞✨", color: "#fa709a" },
    { text: "هابي بيرز داي يا عمري", emoji: "💕✨", color: "#ff6348" },
    { text: "امممممممممم امواححححححح", emoji: "💞✨", color: "#ff4757" },
    { text: "اي لوف يو وكدا", emoji: "❤️✨", color: "#ee5a6f" },
    { text: "هنجيب زين امتي بقا", emoji: "❤️✨", color: "#c44569" },
    { text: "اموت انا في مراتي وانا بفاجئها بحبك يا بت", emoji: "💕✨", color: "#f5576c" },
    { text: "احلي ماما ربنا يخليكي ليا", emoji: "💕✨", color: "#ff6b9d" }
  ];

  const handleHeartClick = (index) => {
    if (!openedHearts.includes(index)) {
      setOpenedHearts([...openedHearts, index]);
      setShowHeartMessage(index);
      setTimeout(() => {
        setShowHeartMessage(null);
      }, 3000);
    }
  };

  useEffect(() => {
    if (openedHearts.length === 10) {
      setTimeout(() => {
        navigate('/treasure');
      }, 2000);
    }
  }, [openedHearts, navigate]);

  return (
    <div className="stage stage-2">
      <div className="vortex-transition"></div>
      <div className="hearts-section">
        <h2 className="section-title romantic-title">دوسي علي القلوب يا حياتي 💕</h2>
        <div className="hearts-romantic-grid">
          {heartMessages.map((msg, index) => (
            <div
              key={index}
              className={`romantic-heart-container ${openedHearts.includes(index) ? 'opened' : ''}`}
              onClick={() => handleHeartClick(index)}
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="romantic-heart" style={{ '--heart-color': msg.color }}>
                <div className="heart-sparkles">✨</div>
                <div className="heart-icon-romantic">💖</div>
                <div className="heart-glow"></div>
              </div>
              {showHeartMessage === index && (
                <div className="romantic-message-popup" style={{ borderColor: msg.color }}>
                  <div className="message-content">
                    <p className="message-text">{msg.text}</p>
                    <p className="message-emoji">{msg.emoji}</p>
                  </div>
                  <div className="message-hearts">
                    <span>💕</span>
                    <span>💖</span>
                    <span>💕</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hearts-counter">
          <p>{openedHearts.length} / 10 قلوب 💕</p>
        </div>
      </div>
    </div>
  );
}

// مكون لصفحة الكنز
function TreasurePage() {
  const [nestingLevel, setNestingLevel] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [showHeartPrompt, setShowHeartPrompt] = useState(false);
  const navigate = useNavigate();

  const handleNestedHeartClick = () => {
    if (nestingLevel < 2) {
      setNestingLevel(nestingLevel + 1);
    } else {
      setShowMessage(true);
      setTimeout(() => {
        setShowHeartPrompt(true);
      }, 2000);
    }
  };

  const handleReadNested = () => {
    navigate('/red-hearts');
  };

  return (
    <div className="stage stage-3">
      <div className="vortex-transition"></div>
      <div className="treasure-section">
        {!showMessage && nestingLevel === 0 && (
          <div className="treasure-chest" onClick={handleNestedHeartClick}>
            <div className="chest-icon">💎</div>
            <p className="instruction treasure-instruction">افتحي الكنز يا حياتي 💎✨</p>
          </div>
        )}

        {nestingLevel > 0 && !showMessage && (
          <div className="nested-hearts">
            <div 
              className={`beating-heart level-${nestingLevel}`}
              onClick={handleNestedHeartClick}
            >
              {nestingLevel === 1 && '❤️'}
              {nestingLevel === 2 && '💕'}
            </div>
            {!showHeartPrompt && <p className="instruction">دوسي علي القلوب يا عمري 💖</p>}
          </div>
        )}

        {showMessage && (
          <div className="message-overlay fade-in">
            <div className="special-card">
              <div className="card-header">💖 اممم رسالة ليكي يا بنوتي 💖</div>
              <div className="card-body">
                <p className="special-text">
                  امممممممممم انتي فاكره الموقع خلص كدا اكيد لا بقولق دي مفاجئه يا بت يعني حاجه اسبيشال زي موعدتك امممممم كل سنه وانتي طيبه للمره التانيه يا قمري انا بحبك اوي بجد ومقدرش استغني ولا ابعد عنك يارب ميحرمنيش منك ابدا يا احلي ماما في الدنيا واحلي نسومتي في الدنيا واحلي كل حاجه في الدنيا يا عشقي وعقلي وقلبي يا احن واحلي ماما في الدنيا يالي مهما اتخنقما هتفضلي ماما وحياتي وعمري وقلبي وعقلي امواححححححح بدمنك يا ماما❤️✨
                </p>
              </div>
              {showHeartPrompt && (
                <p className="heart-prompt">دوسي علي القلوب يا عمري 💕</p>
              )}
              <button className="read-button" onClick={handleReadNested}>
                قريت خلاص 💕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// مكون لصفحة مطر القلوب الحمراء
function RedHeartsPage() {
  const navigate = useNavigate();

  const handleContinueToPhotos = () => {
    navigate('/photos');
  };

  return (
    <div className="stage stage-4">
      <div className="hearts-rain-container">
        <div className="hearts-rain">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="rain-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            >
              ❤️
            </div>
          ))}
        </div>
        <div className="funny-note">
          <p className="hearts-text">
            ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
          </p>
          <p className="funny-message">
            قلوب حمر كتير اهي عشان عارف انك بتقولي اننا مش بنبعت قلوب حمر كتير مش حرمك من حاجه 😂😂
          </p>
          <button className="continue-button" onClick={handleContinueToPhotos}>
            دوسي هنا وكملي يا قمري 💕
          </button>
        </div>
      </div>
    </div>
  );
}

// مكون لصفحة معرض الصور
function PhotosPage() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const navigate = useNavigate();

  const photos = [
    "https://i.postimg.cc/JhgSrkzD/file.jpg",
    "https://i.postimg.cc/XvhtjCYy/file.jpg",
    "https://i.postimg.cc/FRL87HYR/file.jpg",
    "https://i.postimg.cc/XJCmpYrX/file.jpg",
    "https://i.postimg.cc/xCzhc1XX/file.jpg",
    "https://i.postimg.cc/0QwFbyzS/file.jpg",
    "https://i.postimg.cc/3RvVdxkB/file.jpg",
    "https://i.postimg.cc/vBVkcZ40/file.jpg",
    "https://i.postimg.cc/LX1wn8Jw/file.jpg",
    "https://i.postimg.cc/6qxSRxZ0/file.jpg",
    "https://i.postimg.cc/kGPZ8PST/file.jpg"
  ];

  useEffect(() => {
    if (currentPhotoIndex < photos.length - 1) {
      const timer = setTimeout(() => {
        setCurrentPhotoIndex(currentPhotoIndex + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentPhotoIndex, photos.length]);

  const handlePhotosComplete = () => {
    navigate('/final');
  };

  return (
    <div className="stage stage-5">
      <div className="photo-gallery">
        <div className="cinema-frame">
          {photos.slice(0, currentPhotoIndex + 1).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Memory ${index + 1}`}
              className={`gallery-photo ${index === currentPhotoIndex ? 'active' : 'faded'}`}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ))}
        </div>
        <div className="photo-counter">
          <p>{currentPhotoIndex + 1} / {photos.length} 📸</p>
        </div>
        {currentPhotoIndex === photos.length - 1 && (
          <button className="continue-button fade-in" onClick={handlePhotosComplete}>
            دوسي هنا لسه في كمان 💕
          </button>
        )}
      </div>
    </div>
  );
}

// مكون لصفحة القلب النهائي
function FinalPage() {
  const navigate = useNavigate();

  const handleFinalClick = () => {
    navigate('/infinite');
  };

  return (
    <div className="stage stage-6">
      <div className="final-heart-container">
        <div className="big-heart">
          <p className="final-message">
            كل سنه وانتي طيبه يا كل ما ليا امواححححححح ❤️✨
          </p>
        </div>
        <button className="final-button" onClick={handleFinalClick}>
          الجزء الاخير دوسي بقا 💕
        </button>
      </div>
    </div>
  );
}

// مكون لصفحة الرسائل اللانهائية - تم إصلاحه
function InfinitePage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // إضافة رسائل تدريجياً
    const interval = setInterval(() => {
      setMessages(prev => {
        if (prev.length < 100) {
          return [...prev, {
            id: prev.length,
            text: "بحبك ❤️",
            top: Math.random() * 90,
            left: Math.random() * 90,
            delay: Math.random() * 2,
            size: 14 + Math.random() * 20,
            duration: 3 + Math.random() * 3
          }];
        }
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stage stage-7">
      <div className="infinite-love">
        <div className="infinite-overlay">
          <h1 className="infinite-title">بحبك للأبد 💕✨</h1>
        </div>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="love-message"
            style={{
              top: `${msg.top}%`,
              left: `${msg.left}%`,
              animationDelay: `${msg.delay}s`,
              fontSize: `${msg.size}px`,
              animationDuration: `${msg.duration}s`
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}

// المكون الرئيسي
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/birthday" element={<BirthdayPage />} />
          <Route path="/hearts" element={<HeartsPage />} />
          <Route path="/treasure" element={<TreasurePage />} />
          <Route path="/red-hearts" element={<RedHeartsPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/final" element={<FinalPage />} />
          <Route path="/infinite" element={<InfinitePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

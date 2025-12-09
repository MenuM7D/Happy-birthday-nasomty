import React, { useState, useEffect, useRef } from 'react';
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
            <div className="love-word word-2">بعشقك 💕</div>
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
    { text: "بحبك", emoji: "❤️✨", color: "#c77a88" },
    { text: "بعشقك", emoji: "❤️✨", color: "#9b5f6c" },
    { text: "بدمنك", emoji: "❤️✨", color: "#d4a5a5" },
    { text: "ربنا يخليكي ليا", emoji: "💞✨", color: "#a5697a" },
    { text: "هابي بيرز داي يا عمري", emoji: "💕✨", color: "#e8b4b8" },
    { text: "امممممممممم امواححححححح", emoji: "💞✨", color: "#c77a88" },
    { text: "اي لوف يو وكدا", emoji: "❤️✨", color: "#9b5f6c" },
    { text: "هنجيب زين امتي بقا", emoji: "❤️✨", color: "#d4a5a5" },
    { text: "اموت انا في مراتي وانا بفاجئها بحبك يا بت", emoji: "💕✨", color: "#a5697a" },
    { text: "احلي ماما ربنا يخليكي ليا", emoji: "💕✨", color: "#e8b4b8" }
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
        {/* تم إخفاء عداد القلوب */}
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
                animationDuration: `${4 + Math.random() * 4}s`
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

// مكون لصفحة معرض الصور مع موسيقى عيد الميلاد
function PhotosPage() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const audioRef = useRef(null);
  const [audioStarted, setAudioStarted] = useState(false);
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

  // تشغيل الموسيقى عند تحميل الصفحة
  useEffect(() => {
    if (!audioStarted && audioRef.current) {
      const playAudio = () => {
        audioRef.current.volume = 0.6;
        audioRef.current.play().catch(e => {
          console.log('Auto-play blocked, waiting for user interaction');
        });
        setAudioStarted(true);
      };
      
      // محاولة التشغيل التلقائي
      playAudio();
      
      // إضافة مستمع للتفاعل إذا فشل التشغيل التلقائي
      const handleInteraction = () => {
        if (audioRef.current && !audioStarted) {
          playAudio();
        }
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
      };
      
      document.addEventListener('click', handleInteraction);
      document.addEventListener('touchstart', handleInteraction);
      
      return () => {
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
      };
    }
  }, [audioStarted]);

  useEffect(() => {
    if (currentPhotoIndex < photos.length - 1) {
      const timer = setTimeout(() => {
        setCurrentPhotoIndex(currentPhotoIndex + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentPhotoIndex, photos.length]);

  const handlePhotosComplete = () => {
    // إيقاف الموسيقى عند الانتقال
    if (audioRef.current) {
      audioRef.current.pause();
    }
    navigate('/final');
  };

  return (
    <div className="stage stage-5">
      {/* عنصر الصوت */}
      <audio 
        ref={audioRef} 
        src="https://files.catbox.moe/dyhhld.mp3" 
        loop
        preload="auto"
      />
      
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
        {/* تم إخفاء عداد الصور */}
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

// مكون لصفحة الرسالة النهائية مع زر الوعد
function InfinitePage() {
  const [showPromiseResponse, setShowPromiseResponse] = useState(false);

  const handlePromiseClick = () => {
    setShowPromiseResponse(true);
    // الانتقال إلى واتساب بعد 3 ثواني
    setTimeout(() => {
      window.location.href = 'https://wa.me/201220864180';
    }, 3000);
  };

  return (
    <div className="stage stage-7">
      <div className="infinite-love">
        <div className="final-message-container">
          <div className="final-love-card">
            <div className="final-love-header">💕 رسالة ليكي يا بنوتي 💕</div>
            <div className="final-love-text">
              عايزك تعرفي اني مستحيل استغني عنك ومستحيل اقدر اعيش من غير يا نسومتي انتي كل حاجه بلنسبه ليا انتي ماما وانتي حبيبتي وانتي قلبي وانتي صحبتي وانتي بنتي وانتي تربيتي انتي كل حاجه ليا يا بنوتي لو هستغني عن الكون دا كلو بحالو مستحيل استغني عنك لحظه يا بنوتي انتي عشقي بحبككككك اوي اوي اوي يا كل ما ليا وعد متبعدين عني ابدا ابدا ابدا 
            </div>
            <button className="promise-button" onClick={handlePromiseClick}>
              وعد 💕
            </button>
          </div>
        </div>
      </div>

      {showPromiseResponse && (
        <div className="promise-overlay">
          <div className="promise-response-card">
            <div className="promise-response-text">
              وانا كمان بوعدك مستحيل ابعد عنك ابدا
            </div>
            <div className="promise-hearts">💕❤️💕</div>
          </div>
        </div>
      )}
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

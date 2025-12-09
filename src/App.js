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
        {!showMessage && <p className="instruction">دوسي علي البلورة السحريه دي يا قمري ✨</p>}
      </div>

      {showMessage && (
        <div className="message-overlay fade-in">
          <div className="apology-card">
            <div className="card-header">❤️ حقك عليا بحبك ❤️</div>
            <div className="card-body">
              <p className="apology-text">
                اسف والله كنت مخططله من بدري كل حاجه اتلغبطت مره واحده والله انا مش وحش ومنستش عيد ميلادك ودي حاجه اكيده ممكن تكوني فكرتي فيا بطريقه وحشه بس محبتش ابوظ المفاجئه انا بحبك والله ومستحيل انسي اي حاجه حته لو في دماغي مليون حاجه اسف حاسك زمانك كرهاني دلوقتي بس والله منسيتو لحظه بس انا عامله مفاجئه ومتاكد انها هتفرحك يا نسومتي بعشقككك يا قمري💕✨
              </p>
            </div>
            <button className="read-button" onClick={handleReadApology}>
              لو قرأتي خلاص دوسي هنا 💕
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
            <div className="love-word word-1">بحبك ❤️</div>
            <div className="love-word word-2">بعشقك 💕</div>
            <div className="love-word word-3">بدمنك 💖</div>
          </div>
          <div className="envelope-container appear-after-words">
            <div className="envelope" onClick={() => setShowMessage('letter')}>
              <div className="envelope-flap"></div>
              <div className="envelope-body">
                <div className="envelope-heart">💕</div>
              </div>
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
              قرأتي صح دوسي هنا بقا ❤️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// مكون لصفحة القلوب مع تصميم رومانسي جديد ومبتكر
function HeartsPage() {
  const [currentHeartIndex, setCurrentHeartIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const heartMessages = [
    { text: "بحبك", emoji: "❤️", color: "#ff6b8a", bgGradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
    { text: "بعشقك", emoji: "💕", color: "#e91e63", bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { text: "بدمنك", emoji: "💖", color: "#9c27b0", bgGradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)" },
    { text: "ربنا يخليكي ليا", emoji: "💞", color: "#e040fb", bgGradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)" },
    { text: "هابي بيرز داي يا عمري", emoji: "🎂", color: "#ff4081", bgGradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
    { text: "امممممممممم امواححححححح", emoji: "😘", color: "#f50057", bgGradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)" },
    { text: "اي لوف يو وكدا", emoji: "💋", color: "#c2185b", bgGradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)" },
    { text: "هنجيب زين امتي بقا", emoji: "👶", color: "#ad1457", bgGradient: "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)" },
    { text: "اموت انا في مراتي وانا بفاجئها بحبك يا بت", emoji: "💑", color: "#880e4f", bgGradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" },
    { text: "احلي ماما ربنا يخليكي ليا", emoji: "❤️‍🔥", color: "#d50000", bgGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" }
  ];

  const handleHeartClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setShowMessage(true);
    
    setTimeout(() => {
      setShowMessage(false);
      setTimeout(() => {
        if (currentHeartIndex < 9) {
          setCurrentHeartIndex(prev => prev + 1);
        } else {
          navigate('/treasure');
        }
        setIsAnimating(false);
      }, 500);
    }, 3500);
  };

  const currentMessage = heartMessages[currentHeartIndex];

  return (
    <div className="stage stage-2-new" style={{ background: currentMessage.bgGradient }}>
      {/* خلفية القلوب المتطايرة */}
      <div className="floating-hearts-bg-new">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="floating-heart-new"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              fontSize: `${15 + Math.random() * 20}px`
            }}
          >
            {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="hearts-stage-container">
        {/* عداد القلوب */}
        <div className="hearts-progress">
          {heartMessages.map((_, index) => (
            <div 
              key={index} 
              className={`progress-heart ${index < currentHeartIndex ? 'completed' : ''} ${index === currentHeartIndex ? 'current' : ''}`}
            >
              {index < currentHeartIndex ? '💕' : index === currentHeartIndex ? '💖' : '🤍'}
            </div>
          ))}
        </div>

        {/* القلب الرئيسي */}
        <div 
          className={`main-heart-container ${showMessage ? 'showing-message' : ''} ${isAnimating ? 'animating' : ''}`}
          onClick={handleHeartClick}
        >
          <div className="heart-glow-effect"></div>
          <div className="main-heart-emoji">
            {showMessage ? currentMessage.emoji : '💖'}
          </div>
          <div className="heart-sparkle-effects">
            <span className="sparkle s1">✨</span>
            <span className="sparkle s2">💫</span>
            <span className="sparkle s3">⭐</span>
            <span className="sparkle s4">✨</span>
          </div>
        </div>

        {/* رسالة القلب */}
        {showMessage && (
          <div className="heart-message-display">
            <div className="message-card-new" style={{ borderColor: currentMessage.color }}>
              <div className="message-emoji-large">{currentMessage.emoji}</div>
              <p className="message-text-new">{currentMessage.text}</p>
              <div className="message-decorations">
                <span>💕</span>
                <span>💖</span>
                <span>💕</span>
              </div>
            </div>
          </div>
        )}

        {/* رسالة التعليمات */}
        {!showMessage && (
          <p className="hearts-instruction">دوسي علي القلب يا عمري 💕</p>
        )}
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
            <div className="chest-icon">💍</div>
            <p className="instruction treasure-instruction">دوسي علي خاتم جوازنا يا عمري 💍✨</p>
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
              <div className="card-header">💖 بعشقك يا نسومتي 💖</div>
              <div className="card-body">
                <p className="special-text">
                  امممممممممم انتي فاكره الموقع خلص كدا اكيد لا بقولق دي مفاجئه يا بت يعني حاجه اسبيشال زي موعدتك امممممم كل سنه وانتي طيبه للمره التانيه يا قمري انا بحبك اوي بجد ومقدرش استغني ولا ابعد عنك يارب ميحرمنيش منك ابدا يا احلي ماما في الدنيا واحلي نسومتي في الدنيا واحلي كل حاجه في الدنيا يا عشقي وعقلي وقلبي يا احن واحلي ماما في الدنيا يالي مهما اتخنقنا هتفضلي ماما وحياتي وعمري وقلبي وعقلي امواححححححح بدمنك يا ماما❤️✨
                </p>
              </div>
              <button className="read-button" onClick={handleReadNested}>
                قرأتي دوسي هنا 💕
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
            ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
          </p>
          <p className="funny-message">
            قلوب حمر كتير اهي عشان عارف انك بتقولي اننا مش بنبعت قلوب حمر كتير مش حرمك من حاجه اهو حبيني بقا 😂😂
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
  const [showButton, setShowButton] = useState(false);
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
    "https://i.postimg.cc/kGPZ8PST/file.jpg",
    "https://i.postimg.cc/zf3L9VBk/file.jpg",
    "https://i.postimg.cc/cJ6KVrHX/file.jpg",
    "https://i.postimg.cc/q7gt9zRF/file.jpg",
    "https://i.postimg.cc/7LcCDwGK/file.jpg",
    "https://i.postimg.cc/DzDWFnJY/file.jpg",
    "https://i.postimg.cc/9fS4VCwW/file.jpg",
    "https://i.postimg.cc/25JqmrLk/file.jpg",
    "https://i.postimg.cc/CKtZYSnM/file.jpg",
    "https://i.postimg.cc/QMPBshKM/file.jpg",
    "https://i.postimg.cc/wM53hNfY/file.jpg",
    "https://i.postimg.cc/QCgVp74s/file.jpg",
    "https://i.postimg.cc/8cdshvKT/file.jpg",
    "https://i.postimg.cc/7h1bgzsw/file.jpg",
    "https://i.postimg.cc/T1jhrb7R/file.jpg",
    "https://i.postimg.cc/hv8h9my4/file.jpg",
    "https://i.postimg.cc/tJd7h6S4/file.jpg",
    "https://i.postimg.cc/5y5jwz7j/file.jpg",
    "https://i.postimg.cc/mk3hQ9XP/file.jpg",
    "https://i.postimg.cc/Y0Nj1Fn4/file.jpg",
    "https://i.postimg.cc/C5Cdj8Pf/file.jpg",
    "https://i.postimg.cc/G3vBw0cx/file.jpg",
    "https://i.postimg.cc/T2nyM8R9/file.jpg",
    "https://i.postimg.cc/dQG7PMq4/file.jpg",
    "https://i.postimg.cc/CMbZTyFv/file.jpg",
    "https://i.postimg.cc/XN9ZSMV1/file.jpg",
    "https://i.postimg.cc/fWY3n4w1/file.jpg",
    "https://i.postimg.cc/v851FRQp/file.jpg",
    "https://i.postimg.cc/Wp0DLRNL/file.jpg",
    "https://i.postimg.cc/pVK9bNW2/file.jpg",
    "https://i.postimg.cc/kMWV3rJm/file.jpg",
    "https://i.postimg.cc/BQsjJhbW/file.jpg",
    "https://i.postimg.cc/Ghr4bMt1/file.jpg",
    "https://i.postimg.cc/15P8yWXQ/file.jpg",
    "https://i.postimg.cc/Ghr4bMt3/file.jpg",
    "https://i.postimg.cc/PrhCd6JN/file.jpg",
    "https://i.postimg.cc/NfYKQNFy/file.jpg",
    "https://i.postimg.cc/8PD7Tycf/file.jpg",
    "https://i.postimg.cc/PrhCd6Jw/file.jpg",
    "https://i.postimg.cc/dtvhJW3G/file.jpg",
    "https://i.postimg.cc/sDyM3nx9/file.jpg",
    "https://i.postimg.cc/PrhCd6JW/file.jpg",
    "https://i.postimg.cc/yYPkxF3g/file.jpg",
    "https://i.postimg.cc/kXcBGxR8/file.jpg",
    "https://i.postimg.cc/Nf45F12m/file.jpg",
    "https://i.postimg.cc/kXcBGxRF/file.jpg",
    "https://i.postimg.cc/jdXL2znh/file.jpg",
    "https://i.postimg.cc/MKDvHyfD/file.jpg",
    "https://i.postimg.cc/ZKcCnrvH/file.jpg",
    "https://i.postimg.cc/tC5YJhnM/file.jpg",
    "https://i.postimg.cc/TY9p1r5s/file.jpg",
    "https://i.postimg.cc/nckCrv9N/file.jpg",
    "https://i.postimg.cc/3JBdNg0P/file.jpg",
    "https://i.postimg.cc/jSSC7LyZ/file.jpg",
    "https://i.postimg.cc/rwwzrK5f/file.jpg",
    "https://i.postimg.cc/wjj3m7Db/file.jpg",
    "https://i.postimg.cc/Z550dC6g/file.jpg",
    "https://i.postimg.cc/BnntKX2R/file.jpg",
    "https://i.postimg.cc/K884MRtd/file.jpg",
    "https://i.postimg.cc/T33hDpnz/file.jpg"
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
    } else {
      // عرض الزر بعد انتهاء الصور
      setTimeout(() => {
        setShowButton(true);
      }, 2000);
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
      {/* الثلوج الوردية والحمراء */}
      <div className="romantic-snow">
        {[...Array(40)].map((_, i) => (
          <div 
            key={i} 
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              opacity: 0.6 + Math.random() * 0.4,
              fontSize: `${8 + Math.random() * 12}px`
            }}
          >
            {['❄️', '💕', '✨', '💗', '❤️', '💖'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* عنصر الصوت */}
      <audio 
        ref={audioRef} 
        src="https://files.catbox.moe/dyhhld.mp3" 
        loop
        preload="auto"
      />
      
      <div className="photo-gallery">
        {/* رسالة تنويهية */}
        <div className="photo-notice">
          <p>متقفليش الموقع يا عمري لسه الموقع مخلصش 💕</p>
          <p>اسمعي الاغنيه واتفرجي عالصور وبعد حبة هيظهرلك زرار تدوسي عليه بعد ما الصور تخلص ✨</p>
        </div>

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
        {showButton && (
          <button className="continue-button fade-in" onClick={handlePhotosComplete}>
            دوسي هنا لسه في كمان بحبك 💕
          </button>
        )}
      </div>
    </div>
  );
}

// مكون لصفحة القلب النهائي - تصميم رومانسي جديد
function FinalPage() {
  const navigate = useNavigate();

  const handleFinalClick = () => {
    navigate('/infinite');
  };

  return (
    <div className="stage stage-6-new">
      {/* خلفية القلوب المتحركة */}
      <div className="floating-hearts-final">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i} 
            className="floating-heart-final"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              fontSize: `${12 + Math.random() * 18}px`
            }}
          >
            {['❤️', '💕', '💖', '💗', '💝', '✨'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="final-heart-container-new">
        {/* شكل القلب الكبير */}
        <div className="heart-shape-container">
          <div className="heart-shape">
            <div className="heart-inner-glow"></div>
            <div className="heart-content">
              <div className="heart-emoji-top">💖</div>
              <p className="final-message-new">
                كل سنه وانتي طيبه يا كل ما ليا
              </p>
              <p className="final-message-sub">امواححححححح</p>
              <div className="heart-decorations">
                <span>✨</span>
                <span>❤️</span>
                <span>✨</span>
              </div>
            </div>
          </div>
        </div>
        
        <button className="final-button-new" onClick={handleFinalClick}>
          اخر حاجه عارفك زهقتي دوسي بقا 💕
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
            <div className="final-love-header">💕 توعديني؟ 💕</div>
            <div className="final-love-text">
              عايزك تعرفي اني مستحيل استغني عنك ومستحيل اقدر اعيش من غيرك يا نسومتي انتي كل حاجه بلنسبه ليا انتي ماما وانتي حبيبتي وانتي قلبي وانتي صحبتي وانتي بنتي وانتي تربيتي انتي كل حاجه ليا يا بنوتي لو هستغني عن الكون دا كلو بحالو مستحيل استغني عنك لحظه يا بنوتي انتي عشقي بحبككككك اوي اوي اوي يا كل ما ليا وعد متبعديش عني ابدا ابدا ابدا 
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
              وانا كمان بوعدك مستحيل ابعد عنك ابداً ياتي
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

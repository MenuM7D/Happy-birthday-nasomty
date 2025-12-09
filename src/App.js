import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [stage, setStage] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [openedHearts, setOpenedHearts] = useState([]);
  const [showHeartMessage, setShowHeartMessage] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showPhotos, setShowPhotos] = useState(false);
  const [nestingLevel, setNestingLevel] = useState(0);

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

  const heartMessages = [
    { text: "بحبك", emoji: "❤️✨" },
    { text: "بعشقك", emoji: "❤️✨" },
    { text: "بدمنك", emoji: "❤️✨" },
    { text: "ربنا يخليكي ليا", emoji: "💞✨" },
    { text: "هابي بيرز داي يا عمري", emoji: "💕✨" },
    { text: "امممممممممم امواححححححح", emoji: "💞✨" },
    { text: "اي لوف يو وكدا", emoji: "❤️✨" },
    { text: "هنجيب زين امتي بقا", emoji: "❤️✨" },
    { text: "اموت انا في مراتي وانا بفاجئها بحبك يا بت", emoji: "💕✨" },
    { text: "احلي ماما ربنا يخليكي ليا", emoji: "💕✨" }
  ];

  // Stage 0: Magic Crystal
  const handleCrystalClick = () => {
    setShowMessage(true);
  };

  const handleReadApology = () => {
    setStage(1);
    setShowMessage(false);
  };

  // Stage 1: Birthday Transition
  const handleReadBirthday = () => {
    setStage(2);
    setShowMessage(false);
  };

  // Stage 2: Hearts Section
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
    if (openedHearts.length === 10 && stage === 2) {
      setTimeout(() => {
        setStage(3);
      }, 2000);
    }
  }, [openedHearts, stage]);

  // Stage 3: Treasure and Nested Hearts
  const handleNestedHeartClick = () => {
    if (nestingLevel < 2) {
      setNestingLevel(nestingLevel + 1);
    } else {
      setShowMessage(true);
    }
  };

  const handleReadNested = () => {
    setStage(4);
    setShowMessage(false);
    setNestingLevel(0);
  };

  // Stage 4: Red Hearts Rain
  const handleContinueToPhotos = () => {
    setStage(5);
    setShowPhotos(true);
  };

  // Stage 5: Photo Gallery
  useEffect(() => {
    if (showPhotos && currentPhotoIndex < photos.length - 1) {
      const timer = setTimeout(() => {
        setCurrentPhotoIndex(currentPhotoIndex + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentPhotoIndex, showPhotos, photos.length]);

  const handlePhotosComplete = () => {
    setStage(6);
  };

  // Stage 6: Final Heart Message
  const handleFinalClick = () => {
    setStage(7);
  };

  return (
    <div className="App">
      {/* Stage 0: Magic Crystal */}
      {stage === 0 && (
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
                <div className="card-header">💔 رسالة اعتذار 💔</div>
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
      )}

      {/* Stage 1: Transition to Birthday */}
      {stage === 1 && (
        <div className="stage stage-1">
          <div className="vortex-container">
            <div className="vortex"></div>
            <div className="vortex-content">
              <div className="birthday-scene">
                <div className="birthday-cake">
                  🎂
                  <div className="candles">
                    <span className="candle">🕯️</span>
                    <span className="candle">🕯️</span>
                    <span className="candle">🕯️</span>
                  </div>
                </div>
                <p className="cake-instruction">اضغطي على الطورطة 🎂✨</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cake Click Handler */}
      {stage === 1 && (
        <div className="birthday-cake-clickable" onClick={() => {
          setShowMessage(true);
        }}>
        </div>
      )}

      {/* Birthday Message */}
      {stage === 1 && showMessage && (
        <div className="message-overlay fade-in">
          <div className="word-sequence">
            <div className="love-word word-1">احبك ❤️</div>
            <div className="love-word word-2">اعشقك 💕</div>
            <div className="love-word word-3">ادمنك 💖</div>
          </div>
          <div className="envelope-container appear-after-words">
            <div className="envelope" onClick={() => setShowMessage('letter')}>
              <div className="envelope-flap"></div>
              <div className="envelope-body"></div>
              <p className="envelope-text">اضغطي لفتحه انه لكي 💌</p>
            </div>
          </div>
        </div>
      )}

      {/* Birthday Letter */}
      {stage === 1 && showMessage === 'letter' && (
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

      {/* Stage 2: Ten Hearts */}
      {stage === 2 && (
        <div className="stage stage-2">
          <div className="vortex-transition"></div>
          <div className="hearts-section">
            <h2 className="section-title">اضغطي على القلوب 💕</h2>
            <div className="hearts-grid">
              {heartMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`floating-heart ${openedHearts.includes(index) ? 'opened' : ''}`}
                  onClick={() => handleHeartClick(index)}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="heart-icon">💖</div>
                  {showHeartMessage === index && (
                    <div className="heart-message-popup">
                      <p>{msg.text} {msg.emoji}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Stage 3: Treasure and Nested Hearts */}
      {stage === 3 && (
        <div className="stage stage-3">
          <div className="vortex-transition"></div>
          <div className="treasure-section">
            {!showMessage && nestingLevel === 0 && (
              <div className="treasure-chest" onClick={handleNestedHeartClick}>
                <div className="chest-icon">🎁</div>
                <p className="instruction">افتحي الكنز 💎</p>
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
              </div>
            )}

            {showMessage && (
              <div className="message-overlay fade-in">
                <div className="special-card">
                  <div className="card-header">💖 رسالة خاصة 💖</div>
                  <div className="card-body">
                    <p className="special-text">
                      امممممممممم انتي فاكره الموقع خلص كدا اكيد لا بقولق دي مفاجئه يا بت يعني حاجه اسبيشال زي موعدتك امممممم كل سنه وانتي طيبه للمره التانيه يا قمري انا بحبك اوي بجد ومقدرش استغني ولا ابعد عنك يارب ميحرمنيش منك ابدا يا احلي ماما في الدنيا واحلي نسومتي في الدنيا واحلي كل حاجه في الدنيا يا عشقي وعقلي وقلبي يا احن واحلي ماما في الدنيا يالي مهما اتخنقما هتفضلي ماما وحياتي وعمري وقلبي وعقلي امواححححححح بدمنك يا ماما❤️✨
                    </p>
                  </div>
                  <button className="read-button" onClick={handleReadNested}>
                    قريت خلاص 💕
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Stage 4: Red Hearts Rain */}
      {stage === 4 && (
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
                كملي يا حبيبتي 💕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stage 5: Photo Gallery */}
      {stage === 5 && (
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
            {currentPhotoIndex === photos.length - 1 && (
              <button className="continue-button fade-in" onClick={handlePhotosComplete}>
                استمري 💕
              </button>
            )}
          </div>
        </div>
      )}

      {/* Stage 6: Final Heart Message */}
      {stage === 6 && (
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
      )}

      {/* Stage 7: Infinite I Love You */}
      {stage === 7 && (
        <div className="stage stage-7">
          <div className="infinite-love">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="love-message"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  fontSize: `${12 + Math.random() * 24}px`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              >
                بحبك ❤️
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

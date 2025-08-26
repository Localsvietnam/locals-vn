// apps/frontend/components/FontChecker.tsx
import { useEffect, useState } from 'react';

const FontChecker: React.FC = () => {
  const [fontStatus, setFontStatus] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const checkFonts = async () => {
      const fonts = [
        { name: 'Bahianita', family: 'Bahianita' },
        { name: 'iCielBC', family: 'iCielBC' },
        { name: 'Comfortaa', family: 'Comfortaa' },
        { name: 'Coolvetica', family: 'Coolvetica' },
        { name: 'iCielBC-Alt', family: 'iCielBC-Alt' },
        { name: 'Coolvetica-Alt', family: 'Coolvetica-Alt' },
        { name: 'Playfair Display', family: 'Playfair Display' },
        { name: 'Montserrat', family: 'Montserrat' },
        { name: 'Playwrite AR Guides', family: 'Playwrite AR Guides' },
        { name: 'Patrick Hand', family: 'Patrick Hand' },
      ];

      const status: {[key: string]: boolean} = {};

      for (const font of fonts) {
        try {
          // Check if font is available
          const isLoaded = document.fonts.check(`12px "${font.family}"`);
          status[font.name] = isLoaded;
          
          // If not loaded, try to load it
          if (!isLoaded) {
            await document.fonts.load(`12px "${font.family}"`);
            status[font.name] = document.fonts.check(`12px "${font.family}"`);
          }
        } catch (error) {
          status[font.name] = false;
          console.warn(`Font ${font.name} not available:`, error);
        }
      }

      setFontStatus(status);
    };

    checkFonts();
  }, []);

  if (Object.keys(fontStatus).length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50">
      <h4 className="font-bold mb-2">Font Status:</h4>
      {Object.entries(fontStatus).map(([font, loaded]) => (
        <div key={font} className={`${loaded ? 'text-green-400' : 'text-red-400'}`}>
          {font}: {loaded ? '✅ Loaded' : '❌ Not Available'}
        </div>
      ))}
    </div>
  );
};

export default FontChecker;

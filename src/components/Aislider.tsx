import React, { useEffect } from 'react';
import Github from '@/assets/black logo/Frame 20.png';
import claude from '@/assets/black logo/Frame 21.png';
import bolt from '@/assets/black logo/Frame 22.png';
import lovable from '@/assets/black logo/Frame 23.png';
import Va from '@/assets/black logo/Frame 24.png';
import Windsurf from '@/assets/black logo/Frame 25.png';
import chatGPT from '@/assets/black logo/Frame 26.png';
import replit from '@/assets/black logo/Frame 27.png';
import Gemini from '@/assets/black logo/Frame 28.png';
import cursor from '@/assets/black logo/Frame 29.png';
import vs_code from '@/assets/black logo/Frame 30.png';
const Aislider = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const companies = [
    { name: 'Github', logo: Github },
    { name: 'claude', logo: claude },
    { name: 'bolt', logo: bolt },
    { name: 'lovable', logo: lovable },
    { name: 'Va', logo: Va },
    { name: 'Windsurf', logo: Windsurf },
    { name: 'chatGPT', logo: chatGPT },
    { name: 'replit', logo: replit },
    { name: 'Gemini', logo: Gemini },
    { name: 'cursor', logo: cursor },
    { name: 'vs code', logo: vs_code },
  ];

  return (
    <section className="py-20 bg-background/70 ">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee-once whitespace-nowrap">

          {
            [...companies, ...companies].map((company, index) => (
              <div key={index} className="md:mx-5 flex justify-center opacity-100 transition-opacity">
                <div className=" flex justify-center">
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} width={160} height={80} className="max-h-20 max-w-[160px] object-contain" />
                  ) : (
                    <div className="text-xl font-bold text-muted-foreground">{company.name}</div>
                  )}
                </div>
              </div>
            ))

          }

        </div>
      </div>
    </section>
  );
};

export default Aislider;






'use client';
import { useEffect, useState, useRef, createRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { RiNextjsLine } from 'react-icons/ri';
import { RiReactjsLine } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandKotlin } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { DiDocker } from 'react-icons/di';
import { SiAwslambda } from 'react-icons/si';
import { SiAmazoncognito } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiCsswizardry } from 'react-icons/si';
import { TbHtml } from 'react-icons/tb';
import { TbBrandNodejs } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import { FaSwift } from 'react-icons/fa';
import { FaAndroid } from 'react-icons/fa';
import { TbBrandGraphql } from 'react-icons/tb';
import { SiAmazons3 } from 'react-icons/si';
import { SiAmazoneks } from 'react-icons/si';
import { TbCloudSearch } from 'react-icons/tb';

import Socialmedia from './components/Social';

// export const getStaticProps = async (context) => {
//   const response = await fetch(
//     'https://api.github.com/users/gurusubramaniam/repos'
//   );
//   const res = await response.json();
//   return {
//     props: {
//       res,
//     },
//   };
// };

export default function Home(res) {
  // Store refs for multiple sections in a single array
  const sections = ['About', 'Experience', 'Projects'];
  const sectionRefs = useRef(sections.map(() => createRef()));
  const [activeMenu, setActiveMenu] = useState('#About');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMenu(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    // Observe each section
    sectionRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const geTech = (company) => {
    const classnames = 'inline';
    switch (company) {
      case 'GL':
        return (
          <>
            <span className="flex mt-4">
              Tech &nbsp;
              <BiLogoTypescript className="inline mr-4" size={24} />
              <RiNextjsLine className="inline mr-4" size={24} />
              <RiReactjsLine className="inline mr-4" size={24} />
              <TbBrandJavascript className="inline mr-4" size={24} />
              <RiTailwindCssFill className="inline mr-4" size={24} />
              <TbBrandKotlin className="inline mr-4" size={24} />
              <DiDocker className="inline mr-4" size={32} />
              <FaJava className="inline mr-4" size={24} />
            </span>

            <span>
              AWS &nbsp;
              <SiAmazons3 className="inline mr-4" size={24} />
              <SiAmazoneks className="inline mr-4" size={24} />
              <TbCloudSearch className="inline mr-4" size={24} />
            </span>
          </>
        );
      case 'HY':
        return (
          <>
            <span className="flex mt-4">
              Tech &nbsp;
              <RiReactjsLine className="inline mr-4" size={24} />
              <TbBrandJavascript className="inline mr-4" size={24} />
              <TbBrandKotlin className="inline mr-4" size={24} />
              <DiDocker className="inline mr-4 bold" size={32} />
            </span>
            <span>
              AWS &nbsp;
              <SiAwslambda className="inline mr-4 bold" size={20} />
              <SiAmazoncognito className="inline mr-4" size={24} />
            </span>
          </>
        );
      case 'PPmgr':
        return (
          <>
            <span className="flex mt-4 block">
              Tech &nbsp;
              <TbHtml className="inline mr-4" size={24} />
              <TbBrandJavascript className="inline mr-4" size={24} />
              <SiCsswizardry className="inline mr-4" size={20} />
              <TbBrandNodejs className="inline mr-4" size={24} />
              <TbBrandGraphql className="inline mr-4" size={24} />
            </span>
            <span className="flex mt-2 block">
              Managed &nbsp;
              <FaJava className="inline mr-4" size={24} />
              <FaSwift className="inline mr-4" size={24} />
              <FaAndroid className="inline mr-4" size={20} />
            </span>
          </>
        );
      case 'PP':
        return (
          <span className="flex mt-4">
            Tech &nbsp;
            <TbHtml className="inline mr-4" size={24} />
            <TbBrandJavascript className="inline mr-4" size={24} />
            <SiCsswizardry className="inline mr-4" size={20} />
          </span>
        );
    }
  };
  const gradientText = (text) => {
    return (
      <span
        className="font-bold bg-gradient-to-r
    from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient">
        {text}
      </span>
    );
  };
  const setClass = (element) => {
    let linkClass =
      'nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 flex items-center py-3';
    console.log(activeMenu, element);
    if (activeMenu === element) {
      return linkClass + ' active';
    }
    return linkClass;
  };

  return (
    <div className="lg:flex lg:justify-between lg:mx-18 md:mx-12 lg:py-0 p-5">
      <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <header className="lg:justify-none">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Gurusubramaniam
          </h1>
          <span className="mt-3 text-lg font-medium tracking-tight sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient bg-300%">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                'I am a Software Engineer',
                1000,
                'I am an Engineering Leader',
                1000,
              ]}
              speed={75}
              repeat={Infinity}
            />
          </span>
        </header>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              <a href="#About" className={setClass('#About')}>
                <span className="nav-indicator h-px mr-4 bg-slate-500" />
                About
              </a>
            </li>
            <li>
              <a href="#Experience" className={setClass('#Experience')}>
                <span className="nav-indicator h-px mr-4 bg-slate-500" />
                Experience
              </a>
            </li>
            {/* <li>
              <a href="#Projects" className={setClass('#Projects')}>
                <span className="nav-indicator h-px mr-4 bg-slate-500" />
                Repositories
              </a>
            </li> */}
          </ul>
        </nav>
        <Socialmedia />
      </div>
      <div className="lg:w-1/2 lg:py-24 scroll-mt-16 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <section
          id="About"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          ref={sectionRefs.current[0]}>
          <p className="block">
            I've spent over {gradientText('18 years')} in the world of software
            engineering and development. My journey has taken me from hands-on
            {gradientText(' coding')} to leading global teams in creating
            innovative, large-scale digital solutions. I'm passionate about Web,
            cloud architecture and user-focused design, and I believe in using
            these tools to drive business growth and create meaningful{' '}
            {gradientText('user experiences')}. As a leader, I prioritize
            empathy, collaboration, and transparent communication to build{' '}
            {gradientText('high-performing teams')} that deliver results.
            Whether I'm reimagining a complex system or launching a new product,
            my goal is always the same: to make a positive impact in the tech
            world.{' '}
          </p>
          <p className="block mt-4">
            When I'm not working, you'll often find me diving into DIY{' '}
            {gradientText(
              'IoT projects, experimenting with Raspberry Pi and NodeMCU modules'
            )}
            , or even indulging in a bit of home renovation and gardening. I'm
            always exploring new ways to blend my technical skills with my
            creative interests. I'm excited to connect with you and explore how
            we can create something remarkable together.
          </p>
        </section>
        <section
          id="Experience"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          ref={sectionRefs.current[1]}>
          <div className="flex mb-10">
            <span className="flex-none w-25 h-14 mr-4 text-sm ">
              Nov 2023 - Sep 2024
            </span>
            <div className="grow text-sm">
              <span className="font-bold block">
                Greenlight Financial Technology - Remote, NC
              </span>
              <span className="font-semibold block">
                Senior Engineering Manager
              </span>
              {geTech('GL')}
            </div>
          </div>
          <div className="flex mb-10">
            <span className="flex-none w-25 h-14 mr-4 text-sm ">
              May 2023 - Oct 2023
            </span>
            <div className="grow text-sm">
              <span className="font-bold block">
                Hyphen - (Consultant) - Remote, CA
              </span>
              <span className="font-semibold block">
                Senior Engineering Manager
              </span>
              {geTech('HY')}
            </div>
          </div>
          <div className="flex mb-10">
            <span className="flex-none w-25 h-14 mr-4 text-sm ">
              Nov 2011 - May 2023
            </span>
            <div className="grow text-sm">
              <span className="font-bold block">PayPal Inc - San Jose, CA</span>
              <ul className="list-disc">
                <li>
                  <span className="font-semibold flex bloc pt-4">
                    Regulatory Change Management
                  </span>
                  <span className="font-semibold block">
                    Software Engineering Manager - Level 2
                  </span>
                  {geTech('PPmgr')}
                </li>
                <li>
                  <span className="font-semibold flex bloc pt-4">Shopping</span>
                  <span className="font-semibold block">
                    Software Engineering Manager - Level 2
                  </span>
                  {geTech('PPmgr')}
                </li>
                <li>
                  <span className="font-semibold flex bloc pt-4">
                    Consumer Onboarding
                  </span>
                  <span className="font-semibold block">
                    Software Engineering Manager - Level 2
                  </span>
                  {geTech('PPmgr')}
                </li>
                <li>
                  <span className="font-semibold flex bloc pt-4">
                    Consumer Onboarding
                  </span>
                  <span className="font-semibold block">
                    Member of Technical Staff
                  </span>
                  {geTech('PP')}
                </li>
                <li>
                  <span className="font-semibold flex bloc pt-4">
                    Consumer Onboarding/ Partner Onboarding
                  </span>
                  <span className="font-semibold block">
                    Senior Software engineer
                  </span>
                  {geTech('PP')}
                </li>
                <li>
                  <span className="font-semibold flex bloc pt-4">
                    Mobile Web Engineer
                  </span>
                  <span className="font-semibold block">
                    Senior User Interface Engineer
                  </span>
                  {geTech('PP')}
                </li>
                <li>
                  <span className="font-semibold flex bloc pt-4">
                    Team: Credit/Debit
                  </span>
                  <span className="font-semibold block">
                    Senior Software Engineer
                  </span>
                  {geTech('PP')}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex mb-10">
            <span className="flex-none w-25 h-14 mr-4 text-sm ">
              Nov 2006 - May 2011
            </span>

            <div className="grow text-sm">
              <span className="font-bold block">
                Computer Sciences Corporation, Chennai India
              </span>
              <ul className="list-disc">
                <li>
                  <span className="font-semibold flex bloc pt-4">
                    Client : Paypal
                  </span>
                  <span className="font-semibold block">
                    Senior Software Engineering
                  </span>
                  {geTech('CSC')}
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <section
          className="flex mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          id="Projects"
          ref={sectionRefs.current[2]}>
          {res}
        </section> */}
      </div>
    </div>
  );
}

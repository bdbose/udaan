import React, { useRef, useState } from 'react';
import './style.scss';
import { ReactComponent as Scroll } from '../../assets/scroll.svg';
import UdaanVideo from '../../assets/udaan.mp4';
import Slider from 'react-slick';
import { ReactComponent as BackArrow } from '../../assets/left-arrow.svg';
import { ReactComponent as NewArrow } from '../../assets/right-arrow.svg';
import { ReactComponent as Icon1 } from '../../assets/icon1.svg';
import { ReactComponent as Icon2 } from '../../assets/icon2.svg';
import { ReactComponent as Icon3 } from '../../assets/icon3.svg';
import { ReactComponent as Icon4 } from '../../assets/icon4.svg';
import { ReactComponent as Icon5 } from '../../assets/icon5.svg';
import { ReactComponent as Icon6 } from '../../assets/icon6.svg';
import { ReactComponent as Quote } from '../../assets/quote.svg';
import { ReactComponent as Fb } from '../../assets/fb.svg';
import { ReactComponent as Tweet } from '../../assets/tweet.svg';
import { ReactComponent as Yt } from '../../assets/yt.svg';
import { ReactComponent as Insta } from '../../assets/insta.svg';
import GanArn from '../../assets/ganesh_arnaal.png';
import AyusM from '../../assets/ayush_mah.png';
import PankSi from '../../assets/pankaj_singh.png';
import GanRama from '../../assets/ganesh_rama.png';

import Piyush from '../../assets/piyesh.png';
import Isha from '../../assets/Isha.png';
import Souvik from '../../assets/souvik.png';
import Vineet from '../../assets/vineet.png';
import Arjun from '../../assets/arjun.png';
import Harshad from '../../assets/harshad.png';
import Krishna from '../../assets/krishna.png';
import Ajay from '../../assets/ajay.png';
import Sanskar from '../../assets/sanskar.png';
import Yash from '../../assets/yash.png';
import Akanksha from '../../assets/akanksha.png';
import Bidipto from '../../assets/bd.png';
import Akshita from '../../assets/akshita.png';

import P1 from '../../assets/p1.png';
import P2 from '../../assets/p2.png';
import DemoDonation from '../../assets/demo-to-donate.gif';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../../component/Modal';
import { db } from '../../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

import HCVERMA from '../../assets/hcverma.png';
import SANKRANT from '../../assets/sankrant.png';
import SHAILENDRA from '../../assets/shailendra.png';

const Goals = [
  {
    icon: <Icon1 />,
    text: 'Web Platform with complete translation workbench',
  },
  {
    icon: <Icon2 />,
    text: 'Machine Learning models for translation and post editing to augment human translators',
  },
  {
    icon: <Icon3 />,
    text: 'Domain specific Linguistic resource (Dictionaries, translation memory) for efficient and consistent quality translation',
  },
  {
    icon: <Icon4 />,
    text: 'To setup parallel corpus in technical domain (>30,00,000 words) to speed up the translation and post editing research',
  },
  {
    icon: <Icon5 />,
    text: 'To translate and publish 500 books in native languages for engineering curriculum and make it accessible in cost effective manner',
  },
  {
    icon: <Icon6 />,
    text: 'Active ecosystem of seed translators, reviewer, proof readers around the platform',
  },
];

const Team = {
  tech: [
    {
      img: GanRama,
      name: 'Prof. Ganesh Ramakrishnan',
      desc: `Institute Chair Professor
Department of Computer Science and Engineering IIT Bombay`,
      link: 'https://www.cse.iitb.ac.in/~ganesh',
    },
    {
      img: PankSi,
      name: 'Pankaj Singh',
      desc: 'Director, Aify Innovation Labs',
      link: 'https://www.linkedin.com/in/pankaj-singh-b000894a/',
    },
    {
      img: AyusM,
      name: 'Ayush Maheshwari',
      desc: `Ekal Fellow and Phd student, Cse, 
IIT Bombay`,
      link: 'https://www.cse.iitb.ac.in/~ayusham',
    },
    {
      img: GanArn,
      name: 'Ganesh Arnaal',
      desc: `Linguistic expert and a pioneer in Indian language computing`,
      text: 'We at CSE, IIT-B have been working closely with Shri Ganesh Arnaal, a linguistic expert since 2013. He is a Chartered Accountant by qualification and he runs a boutique investment bank in Mumbai. His passion for Indian languages and Indian language computing brought him to CSC. His firm Bharat Bhasha Sanganan has developed a complete User Interface in HIndi for Open Office. Shri Arnaal has advocated the development of lexical resources and human aid to support machine translation. We would like to acknowledge his role in the development of our Udaan project. He has agreed to take up translation and post-edit work on technical books in Engineering.',
    },
  ],
  student: [
    {
      img: Piyush,
      name: 'Piyush Sharma',
      desc: `M.Tech, CSE`,
      link: 'https://www.cse.iitb.ac.in/~piyusharma/',
    },
    {
      img: Isha,
      name: 'Isha Panday',
      desc: `M.Tech, CSE`,
      link: 'https://www.cse.iitb.ac.in/~iishapandey/',
    },
    {
      img: Souvik,
      name: 'Souvik Pal',
      desc: `DD, CMINDS`,
      link: 'https://www.linkedin.com/in/souvik-pal-75b1b1178/',
    },
    {
      img: Vineet,
      name: 'Vineet Dorna',
      desc: `BTech, CSE`,
      link: 'https://www.cse.iitb.ac.in/~vineethdorna/',
    },
    {
      img: Arjun,
      name: 'Arjun Kashettiwar',
      desc: `BTech, CSE`,
      link: 'https://www.cse.iitb.ac.in/~arjunk/',
    },
    {
      img: Harshad,
      name: 'Harshad Ingole',
      desc: `BTech, CSE`,
      link: 'https://www.cse.iitb.ac.in/~harshadingole',
    },
    {
      img: Krishna,
      name: 'Krishnakant Bhatt',
      desc: `MS, CSE`,
      link: 'https://www.cse.iitb.ac.in/~kkbhatt/',
    },
    {
      img: Ajay,
      name: 'Ajay Ravindran',
      desc: `MTech, CSE`,
      link: 'https://www.linkedin.com/in/ajay-r-376673132',
    },
  ],
  intern: [
    {
      img: Sanskar,
      name: 'Sanskar  Sehgal',
      desc: 'Intern, IIT Bomabay',
      link: 'http://www.linkedin.com/in/sanskar-sehgal',
    },
    {
      img: Yash,
      name: 'Yash  Kadam',
      desc: 'Intern, IIT Bomabay',
      link: 'https://bit.ly/3z35NtP',
    },
    {
      img: Bidipto,
      name: 'Bidipto Bose',
      desc: 'Intern, IIT Bomabay',
      link: 'https://bdbose.tech/',
    },
    {
      img: Akanksha,
      name: 'Akanksha Mategaonkar',
      desc: 'Intern, IIT Bomabay',
      link: '#',
    },
    {
      img: Akshita,
      name: 'Akshita Shivani',
      desc: 'Intern, IIT Bomabay',
      link: '#',
    },
  ],
};

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NewArrow />,
    prevArrow: <BackArrow />,
  };
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const newsRef = useRef();
  const [toggle, setToggle] = useState(0);
  const addEmail = async () => {
    try {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const validator = re.test(String(newsRef.current.value).toLowerCase());
      if (!validator) {
        return alert('Please add a valid email!');
      }
      const arr = await getDoc(doc(db, 'Udaan', 'subscribers'));

      setDoc(doc(db, 'Udaan', 'subscribers'), {
        email: [...arr.data().email, newsRef.current.value.toLowerCase()],
      }).then((res) => {
        alert('Thank You!');
        newsRef.current.value = '';
      });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <Modal message={modalText} setOpen={setOpen} open={open} />
      <div className='home-wrapper'>
        <div className='hero-wrapper'>
          <h1>Project UDAAN</h1>
          <h2>"Breaking the Language Barrier in Education"</h2>
          <h3>
            Under the aegis of the office of{' '}
            <span>Alumni and Corporate Relations IIT Bombay</span>
          </h3>
          <p>
            The Udaan project enables translation of textbooks and learning
            materials in Engineering and all main streams of Higher learning,
            from English to Hindi and all Indian languages.{' '}
          </p>
          <div className='hero-btns'>
            <button
              className='donate'
              onClick={() => (window.location.href = '/#donation')}>
              Donate
            </button>
            <button
              className='subscribe'
              onClick={() => (window.location.href = '/#news-letter')}>
              Subscribe
            </button>
          </div>
          <Scroll />
        </div>

        <div className='project-detail-wrapper'>
          <video src={UdaanVideo} controls autoPlay muted />
          <div className='project-detail-container'>
            <h2>UDAAN - TRANSLATION WORKBENCH</h2>
            <span>Demonstration of our UDAAN translation tool.</span>
            <p>
              Our in-house translation workbench from efficient translation of
              documents in various Indian languages. We invite contributions
              from people interested in translating documents (either slides or
              text).
            </p>
            <div className='download-btn'>
              <a href='https://drive.google.com/drive/folders/1hCsvtcDMfgO_au8EAU5PPrPI5FbqgUME?usp=sharing'>
                Download
              </a>
              <a href='https://www.youtube.com/playlist?list=PLfL0bubCSMdzHx117x6c4mdi47ZjkTz7H'>
                Tutorial
              </a>
            </div>
          </div>
        </div>

        <div className='event-wrapper'>
          <Slider {...settings} autoplay={true} autoplaySpeed={2000}>
            <div className='event-container'>
              <div>
                <h2>Events</h2>
                <span>IIT Bombay launched project Udaan </span>
                <p>
                  On 14th September 2021 Prof. Ganesh Ramakrishnan (Institute
                  Chair Professor Department of Computer Science and Engineering
                  IIT Bombay) and his team, launched Project Udaan which was
                  inaugurated by Dr. K.Vijay Raghavan (Principal Scientific
                  Adviser, Government of India)
                </p>
              </div>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube-nocookie.com/embed/R9fLAgkUGH8'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen></iframe>
            </div>
            <div className='event-container'>
              <div>
                <h2>Events</h2>
                <span>Discussion on project Udaan with Garuda Books </span>
                <p>
                  On 14th September 2021 Discussion on project Udaan was held.
                  Where Mr. Sankarant Sanu addressed the problems regarding the
                  language barrier in the Indian education system and how
                  project Udaan is a breakthrough in this initiative
                </p>
              </div>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube-nocookie.com/embed/vroRNncHJw8'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen></iframe>
            </div>
          </Slider>
        </div>
        <div className='about-wrapper' id='about'>
          <h1>About</h1>
          <p>
            In India, every year, more than 1 crore students appear in CBSE,
            ICSE, and state board class 10th and 12th exams.
            <span>
              {' '}
              Out of these students, more than 65% students study in non-English
              medium schools.
            </span>{' '}
            Often, such students when join higher education institutes where the
            primary language of instruction is English, face language barriers.
            Even when they wish to understand the content from supplementary
            resources such as the internet or trying to keep up with
            contemporary research, they face the similar issue. We are leaving
            behind such potential minds.
          </p>
          <p>
            The lack of native language instruction also has a significant
            economic impact. Of the top twenty countries in GDP per capita, all
            of them use the language of the common people for higher and
            technical education. Most of these countries do not use English. In
            the bottom twenty economies, most of the countries are those which
            persist with a colonial language, not the mother tongue of the
            majority of people. The transition to mother tongue education
            requires significant investment in language infrastructure.
          </p>
          <div className='card-wrapper'>
            <div className='card'>
              <h1>Mission</h1>
              <span>
                To have textbooks resources with the entire engineering and
                medical curriculum translated into the many Indian languages.
              </span>
            </div>
            <div className='card'>
              <h1>Our Vision</h1>
              <span>
                BREAKING THE LANGUAGE BARRIER IN THE INDIAN HIGHER EDUCATION
                SYSTEM
              </span>
            </div>
          </div>
        </div>
        <div className='goal-wrapper'>
          <h1>Our Goals</h1>
          <div className='goal-container'>
            {Goals.map((i) => {
              return (
                <div className='goal-card'>
                  {i.icon}
                  <span>{i.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className='team-wrapper' id='teams'>
          <h1>Our Team</h1>
          <div className='team-container'>
            <h2>Technical Team</h2>
            <div className='tech-team-conatainer'>
              {Team.tech.map((i) => {
                if (i.text) {
                  return (
                    <div
                      className='team-card'
                      onClick={() => {
                        setOpen(true);
                        setModalText(i.text);
                      }}>
                      <img src={i.img} alt='' />
                      <h3>{i.name}</h3>
                      <span>{i.desc}</span>
                    </div>
                  );
                }
                return (
                  <a href={i.link}>
                    <div className='team-card'>
                      <img src={i.img} alt='' />
                      <h3>{i.name}</h3>
                      <span>{i.desc}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className='team-container'>
            <h2>Students</h2>
            <div className='student-team-conatainer'>
              {Team.student.map((i) => {
                return (
                  <a href={i.link}>
                    <div className='team-card student-card'>
                      <img src={i.img} alt='' />
                      <h3>{i.name}</h3>
                      <span>{i.desc}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className='team-container'>
            <h2>Interns</h2>
            <div className='student-team-conatainer'>
              {Team.intern.map((i) => {
                return (
                  <a href={i.link}>
                    <div className='team-card intern-card'>
                      <img src={i.img} alt='' />
                      <h3>{i.name}</h3>
                      <span>{i.desc}</span>
                    </div>
                  </a>
                );
              })}
            </div>
            <h2>Associated Publishers</h2>

            <div className='associate-wrapper'>
              <a href='https://www.garudaprakashan.com/about-us/'>
                <div className='associate-card'>
                  <img src={P1} alt='' />
                  <h3>Garuda Prakashan</h3>
                  <span>CEO, MD, Sankrant Sanu</span>
                </div>
              </a>
              <div className='associate-card'>
                <img src={P2} alt='' />
                <h3>Somayaji Arnaal Publishers</h3>
                <span>Founder, Ganesh Arnal</span>
              </div>
            </div>
          </div>
        </div>
        <div className='toggle-bar'>
          <h2
            className={toggle !== 0 && 'not-active'}
            onClick={() => {
              setToggle(0);
            }}>
            Indian Donars
          </h2>
          <h2
            className={toggle !== 1 && 'not-active'}
            onClick={() => {
              setToggle(1);
            }}>
            US Donars
          </h2>
        </div>
        {toggle ? (
          <div className='donation-wrapper' id='donation'>
            <h2>Donation</h2>
            <div className='donation-container'>
              <div className='donation-details'>
                <span>Willing to donate? </span>
                <h3>Here's how you can donate to strengthen our community</h3>
                <ul>
                  <li>
                    Follow the Donate button below to our donation portal to
                    donate through credit card or PayPal.
                  </li>
                  <li>Click on "Donate Now(USD)". </li>
                  <li>Select Project - "PROJECT UDAAN" in the pop up</li>
                  <li>
                    Enter the amount you wish to donate and click ‘Confirm’ and
                    then “Proceed”
                  </li>
                  <li>Enter your details in the form </li>
                  <li>
                    Click on "Proceed". You will be redirected to PayPal for the
                    payment
                  </li>
                </ul>
                <h6>
                  To Donate by check, bank wire transfer, crypto or with
                  appreciated securities.
                </h6>
                <button
                  className='donate'
                  onClick={() => {
                    window.location.href =
                      'https://acr.iitb.ac.in/donation/Donation';
                  }}>
                  Donate
                </button>
                <h6>You will be redirected to our donation portal.</h6>
              </div>
              <img src={DemoDonation} style={{ width: '50%' }} alt='' />
            </div>
          </div>
        ) : (
          <div className='donation-wrapper' id='donation'>
            <h2>Donation</h2>
            <div className='donation-container'>
              <div className='donation-details'>
                <span>Willing to donate? </span>
                <h3>Here's how you can donate to strengthen our community</h3>
                <ul>
                  <li>Follow the Donate button below to our donation portal</li>
                  <li>Enter the amount you wish to donate</li>
                  <li>Select Project - "PROJECT UDAAN"</li>
                  <li>Select your affiliation with the project.</li>
                  <li>Enter your details in the form.</li>
                  <li>
                    Click on "Donate". You will be redirected to select the mode
                    of payment
                  </li>
                </ul>
                <h6>
                  We support Online banking and UPI for now. Support to be
                  extended soon.
                </h6>
                <button
                  className='donate'
                  onClick={() => {
                    window.location.href =
                      'https://acr.iitb.ac.in/donation/Donation';
                  }}>
                  Donate
                </button>
                <h6>You will be redirected to our donation portal.</h6>
              </div>
              <img src={DemoDonation} style={{ width: '50%' }} alt='' />
            </div>
          </div>
        )}
        <div className='feature-wrapper'>
          <h1>Feature and News</h1>
          <div className='feature-container'>
            <div className='right-col'>
              <div className='news-card'>
                <img src='https://i.ibb.co/gy4Twn6/image.png' alt='' />
                <div>
                  <h4>
                    Artificial Intelligence breaks language barrier for tech edu
                  </h4>
                  <span>(15/09/2021 from Times of India)</span>
                  <a href='https://i.ibb.co/wdfLJ47/image.png'>Read</a>
                </div>
              </div>
              <div className='news-card'>
                <img src='https://i.ibb.co/wdfLJ47/image.png' alt='' />
                <div>
                  <h4>
                    IIT Bombay designs AI-based translation app to help students
                    from linguistic minorities
                  </h4>
                  <span>(14/09/2021 from Hindustan Times)</span>
                  <a href='https://www.hindustantimes.com/cities/mumbai-news/iit-bombay-designs-ai-based-translation-app-to-help-students-from-linguistic-minorities-101631632296794.html'>
                    Read
                  </a>
                </div>
              </div>
            </div>
            <div className='right-col'>
              <div className='news-card'>
                <img src='https://i.ibb.co/YysR8gb/image.png' alt='' />
                <div>
                  <h4>
                    IIT Bombay Professor and his team launch ‘Project Udaan,’ an
                    AI-based translation software ecosystem
                  </h4>
                  <span>(14/09/2021 from IITB official release)</span>
                  <a href='https://www.iitb.ac.in/en/breaking-news/iit-bombay-professor-and-his-team-launch-‘project-udaan’-ai-based-translation-software'>
                    Read
                  </a>
                </div>
              </div>
              <div className='news-card'>
                <img src='https://i.ibb.co/86ZWFN9/image.png' alt='' />
                <div>
                  <h4>
                    A project to translate engineering books into Hindi,
                    vernacular languages{' '}
                  </h4>
                  <span>(14/09/2021 from IANS life)</span>
                  <a href='https://ianslife.in/culture/project-translate-engineering-books-hindi-vernacular-languages'>
                    Read
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='related-projects-wrapper' id='related-projects'>
          <h1>Related Projects</h1>
          <Slider
            {...settings}
            dots={true}
            autoplay={true}
            autoplaySpeed={2000}>
            <div className='relate-container'>
              <img
                src='https://www.udaanproject.org/assets/img/marati_conversion.jpg'
                alt=''
              />
              <div className='related-card'>
                <h2>RUDDER</h2>
                <h3>cRoss lingUal viDeo anD tExt Retrieval.</h3>
                <p>
                  RUDDER consists of 492(to be updated) videos, with an average
                  length of 80 seconds and around 7 sentences describing every
                  video. A video is present in multiple languages namely HINDI,
                  TAMIL, MALAYALAM, URDU, KANNADA. (Note: All videos do not have
                  audio in every language mentioned earlier)
                </p>
                <button className='donate'>More Information</button>
              </div>
            </div>
            <div className='relate-container'>
              <img src='https://i.ibb.co/qMqVJDW/image.png' alt='' />
              <div className='related-card'>
                <h2>AKSHAR ANVESHINI</h2>
                <h3>
                  Optical Character Recognition (OCR) and Post-editing system
                  for the Sanskrit language.
                </h3>
                <p>
                  Inhouse OCR(Optical Character Recognition) model for the
                  digitization of Sanskrit books.It uses state of the art
                  technology that gives us 95.14% character level accuracy for
                  Sanskrit text.
                </p>
                <button
                  className='donate'
                  onClick={() =>
                    (window.location.href = 'https://www.cse.iitb.ac.in/~ocr/')
                  }>
                  More Information
                </button>
              </div>
            </div>
            <div className='relate-container'>
              <img src='https://i.ibb.co/sgTxML8/image.png' alt='' />
              <div className='related-card'>
                <h2>INDICOCR</h2>
                <h3>Optical Character Recognition for Indian Texts</h3>
                <p>
                  End-to-end framework for Error Detection and Corrections in
                  Indic-OCR
                </p>
                <button
                  className='donate'
                  onClick={() =>
                    (window.location.href =
                      'https://www.cse.iitb.ac.in/~rohitsaluja/project.html')
                  }>
                  More Information
                </button>
              </div>
            </div>
            <div className='relate-container'>
              <img src='https://i.ibb.co/4N5njjs/image.png' alt='' />
              <div className='related-card'>
                <h2>DECILE</h2>
                <h3>Data Efficient Machine Learning</h3>
                <p>
                  Data Efficient Learning with Less Data State of the art AI and
                  Deep Learning are very data hungry. This comes at significant
                  cost including larger resource costs (multiple expensive GPUs
                  and cloud costs), training times (often times multiple days),
                  and human labeling costs and time. Decile attempts to solve
                  this by answering the following question. Can we train state
                  of the art deep models with only a sample (say 5 to 10\%) of
                  massive datasets, while having neglibible impact in accuracy?
                  Can we do this while reducing training time/cost by an order
                  of magnitude, and/or significantly reducing the amount of
                  labeled data required?
                </p>
                <button
                  className='donate'
                  onClick={() =>
                    (window.location.href = 'https://decile.org/')
                  }>
                  More Information
                </button>
              </div>
            </div>
            <div className='relate-container'>
              <img src='https://i.ibb.co/2g8Ptpd/image.png' alt='' />
              <div className='related-card'>
                <h2>MALTA</h2>
                <h3>
                  Multi-Modal And Multi-Lingual Temporal Sentence Alignment
                </h3>
                <p>
                  For localizing sentences/captions in videos that leverages
                  both audio and video modalities and that can generalize to new
                  and possibly low-resource language settings.Moreover, it is a
                  rich new dataset, whose annotation is driven by both audio and
                  visual modalities and which is richer in the audio modality
                  than previous datasets.
                </p>
                <button
                  className='donate'
                  onClick={() =>
                    (window.location.href =
                      'https://www.cse.iitb.ac.in/~malta/index.html')
                  }>
                  More Information
                </button>
              </div>
            </div>
          </Slider>
        </div>
        <div className='publishers-wrapper' id='publications'>
          <h1>Publications</h1>
          <Slider {...settings} slidesPerRow={4}>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.cse.iitb.ac.in/~ganesh/papers/aaai2021.pdf')
              }>
              <h3>
                GLISTER: Generalization based Data Subset Selection for
                Efficient and Robust Learning
              </h3>
              <p>
                Krishnateja Killamsetty, Durga Sivasubramanian, Ganesh
                Ramakrishnan, Rishabh Iyer In Proceedings of The 35th AAAI
                Conference on Artificial Intelligence (AAAI 2021).
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.cse.iitb.ac.in/~ganesh/papers/aaai2021.pdf')
              }>
              <h3>
                Meta-Learning for Effective Multi-task and Multilingual
                Modelling
              </h3>
              <p>
                Ishan Tarunesh, Sushil Khyalia, Vishwajeet Kumar, Ganesh
                Ramakrishnan, Preethi Jyothi In Proceedings of The 16th
                Conference of the European Chapter of the Association for
                Computational Linguistics (EACL 2021)
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.isca-speech.org/archive/Interspeech_2020/pdfs/3157.pdf')
              }>
              <h3>Caption Alignment for Low Resource Audio-Visual Data</h3>
              <p>
                Vighnesh Reddy Konda, Mayur Warialani, Rakesh Prasanth Achari,
                Varad Bhatnagar, Jayaprakash Akula, Ganesh Ramakrishnan, Pankaj
                Singh, Gholamreza Haffari and Preethi Jyothi In Proceedings of
                The 21st INTERSPEECH Conference (Interspeech 2020), Shanghai,
                China.
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.isca-speech.org/archive/Interspeech_2020/pdfs/3157.pdf')
              }>
              <h3>
                OCR On-the-Go: Robust End-to-end Systems for Reading License
                Plates & Street Signs
              </h3>
              <p>
                Rohit Saluja, Ayush Maheshwari, Ganesh Ramakrishnan, Parag
                Chaudhuri and Mark Carman In Proceedings of The 15th
                International Conference on Document Analysis and Recognition
                (ICDAR 2019), Sydney, Australia.
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.cse.iitb.ac.in/~ganesh/papers/icdarost2019.pdf')
              }>
              <h3>
                StreetOCRCorrect: An Interactive Framework forOCR Corrections in
                Chaotic Indian Street Videos
              </h3>
              <p>
                Pankaj Singh, Bhavya Patwa, Rohit Saluja, Ganesh Ramakrishnan,
                Parag Chaudhuri and Mark Carman In Proceedings of The 2nd
                International Workshop on Open Services and Tools for Document
                Analysis, associated with the 15th International Conference on
                Document Analysis and Recognition (ICDAR-OST 2019), Sydney,
                Australia.
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.cse.iitb.ac.in/~ganesh/papers/wacv2019b.pdf')
              }>
              <h3>
                Learning From Less Data: Diversified Subset Selection and Active
                Learning in Image Classification Tasks
              </h3>
              <p>
                Vishal Kaushal, Rishabh Iyer, Anurag Sahoo, Khoshrav Doctor,
                Narasimha Raju, Ganesh Ramakrishnan Accepted paper at the 7th
                IEEE Winter Conference on Applications of Computer Vision
                (WACV), 2019, Hawaii, USA.
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.cse.iitb.ac.in/~ganesh/papers/icdar2019a.pdf')
              }>
              <h3>
                Sub-word Embeddings for OCR Corrections in Highly Fusional Indic
                Languages
              </h3>
              <p>
                Rohit Saluja, Mayur Punjabi, Mark Carman, Ganesh Ramakrishnan
                and Parag Chaudhuri In Proceedings of The 15th International
                Conference on Document Analysis and Recognition (ICDAR 2019),
                Sydney, Australia.
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.cse.iitb.ac.in/~ganesh/papers/wsc2018.pdf')
              }>
              <h3>
                Improving the learnability of classifiers for Sanskrit OCR
                corrections
              </h3>
              <p>
                Devaraja Adiga, Rohit Saluja, Vaibhav Agrawal, Ganesh
                Ramakrishnan, Parag Chaudhuri, K. Ramasubramanian and Malhar
                Kulkarni Proceedings of the 17th World Sanskrit Conference,
                Vancouver, 2018.
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.cse.iitb.ac.in/~pjyothi/files/IS18c.pdf')
              }>
              <h3>
                Time Aggregation Operators for Multi-label Audio Event Detection
              </h3>
              <p>
                Pankaj Joshi, Digvijaysingh Gautam, Ganesh Ramakrishnan and
                Preethi Jyothi In Proceedings of The 21st INTERSPEECH Conference
                (Interspeech 2018), Shanghai, China.
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/download/16911/15686#:~:text=We%20describe%20MultiSynth%2C%20a%20framework,generalizes%20over%20all%20the%20examples.')
              }>
              <h3>Synthesis of Programs from Multimodal Datasets</h3>
              <p>
                Shantanu Thakoor, Simoni Shah, Ganesh Ramakrishnan, Amitabha
                Sanyal In Proceedings of the 32nd AAAI Conference on Artificial
                Intelligence (AAAI-18), New Orleans, Louisiana, USA
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.cse.iitb.ac.in/~ganesh/papers/icdar17.pdf')
              }>
              <h3>Error Detection and Corrections in Indic OCR using LSTMs</h3>
              <p>
                Rohit Saluja, Devaraj Adiga, Parag Chaudhuri, Ganesh
                Ramakrishnan and Mark Carman International Conference on
                Document Analysis and Recognition (ICDAR) 2017, Kyoto, Japan.
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.cse.iitb.ac.in/~ganesh/papers/icdar-ost17.pdf')
              }>
              <h3>
                A Framework for Document Specific Error Detection and
                Corrections in Indic OCR
              </h3>
              <p>
                Rohit Saluja, Devaraj Adiga, Ganesh Ramakrishnan, Parag
                Chaudhuri and Mark Carman 1st International Workshop on Open
                Services and Tools for Document Analysis (ICDAR- OST) 2017,
                Kyoto, Japan.
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://ieeexplore.ieee.org/document/8270254')
              }>
              <h3>
                A Framework for Error Detection and Corrections in Sanskrit
              </h3>
              <p>
                Rohit Saluja, Devaraj Adiga, Parag Chaudhuri, Ganesh
                Ramakrishnan and Mark Carman Research and Innovation Symposium
                in Computing (RISC) 2017 (Most Admiring Poster Presentation
                Award), IIT-Bombay, India.
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.cse.iitb.ac.in/~ganesh/papers/pakdd16.pdf')
              }>
              <h3>
                Building Compact Lexicons for Cross-Domain SMT by mining
                near-optimal Pattern Sets
              </h3>
              <p>
                Pankaj Singh, Ashish Kulkarni, Himanshu Ojha, Vishwajeet Kumar,
                Ganesh Ramakrishnan In Proceedings of the 20th Pacific Asia
                Conference on Knowledge Discovery and Data Mining (PAKDD) 2016
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://www.aclweb.org/anthology/P15-1054.pdf')
              }>
              <h3>
                Summarizing Multi-Document Topic Hierarchies using Submodular
                Mixtures
              </h3>
              <p>
                Ramakrishna Bairi, Rishabh Iyer, Ganesh Ramakrishnan and Jeff
                Bilmes In Proceedings of the Annual Meeting of the Association
                for Computational Linguistics (ACL), Beijing, China, July - 2015
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() =>
                (window.location.href =
                  'https://dl.acm.org/doi/abs/10.1145/2815833.2816961')
              }>
              <h3>
                A Machine Assisted Human Translation System for Technical
                Documents.
              </h3>
              <p>
                Kumar, V., Kulkarni, A., Singh, P., Ramakrishnan, G., & Arnaal,
                G. In Proceedings of the 8th International Conference on
                Knowledge Capture (p. 33). ACM.
              </p>
            </div>
            <div
              className='pub-card'
              onClick={() => (window.location.href = 'http://grpr.in/emm')}>
              <h3>The English Medium Myth (2nd Edition)</h3>
              <p>Sankrant Sanu</p>
            </div>
          </Slider>
        </div>
        <div className='review-wrapper'>
          <h1>What they say?</h1>
          <Slider {...settings} dots={true}>
            <div className='quote-card'>
              <Quote id='quote' />
              <div className='quote-details'>
                <img src={HCVERMA} alt='' />
                <div className='quote-text'>
                  <h2>H C Verma</h2>
                  <h3>
                    Physicist and Professor emeritus of the Indian Institute of
                    Technology Kanpur.
                  </h3>
                  <p>
                    “Commendable initiative to translate technical books in
                    Indian languages, which has the potential to unlock the
                    intelligence and creativity among the young minds. Making
                    the material available to the young minds in their mother
                    tongue will be a very effective step towards developing this
                    emotional bond with the subject.”
                  </p>
                </div>
              </div>
            </div>
            <div className='quote-card'>
              <Quote id='quote' />
              <div className='quote-details'>
                <img src={SANKRANT} alt='' />
                <div className='quote-text'>
                  <h2>Sankrant Shanu</h2>
                  <h3>Founder of Garuda Prakashan and author.</h3>
                  <p>
                    “Even in premier institutes like IITs, I find that students
                    are struggling due to not having access to education in
                    their own language. Prof. Ganesh's project at IIT Bombay is
                    a major step in enabling a technology infrastructure for
                    rapid, high-quality translations.”
                  </p>
                </div>
              </div>
            </div>
            <div className='quote-card'>
              <Quote id='quote' />
              <div className='quote-details'>
                <img src={SHAILENDRA} alt='' />
                <div className='quote-text'>
                  <h2>Prof. Shailendra Mohan</h2>
                  <h3>
                    Director, Central Institute of Indian languages and Nodal
                    officer, National Translation Mission
                  </h3>
                  <p>
                    “In the context of the national education policy inaugurated
                    by the government of India all mother tongues are to be
                    taught in schools and colleges and the knowledge texts are
                    to be produced in all Indian languages. Therefore this
                    translation system is a step forward in this direction.”
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className='contact-wrapper' id='contact'>
          <div className='contact-container'>
            <h1>Contact Us</h1>
            <form>
              <h2>Enquiry</h2>
              <span>Name</span>
              <input type='text' required />
              <span>Email</span>
              <input type='email' required />
              <span>Category</span>
              <select>
                <option>Select</option>
              </select>
              <span>Message</span>
              <textarea />
              <button>Submit</button>
            </form>
          </div>
          <div className='contact-side'>
            <h3>Contact Information</h3>
            <p>
              Feel free to contact us anytime. We will get back to you as soon
              as possible.
            </p>
            <div className='contact-elements'>
              SI-A418, KReSIT, IIT-Bombay, Mumbai, Maharastra
            </div>
            <div className='contact-elements'>ganesh@cse.iitb.ac.in</div>
            <div className='contact-elements'>+91-022-25767728</div>
          </div>
        </div>
        <div className='newsletter-wrapper' id='news-letter'>
          <h1>Newsletter</h1>
          <p>
            Keep up with our latest news and events. Subscribe to our Newsletter
          </p>
          <div className='input-wrapper'>
            <input ref={newsRef} type='email' placeholder='Email' />
            <button onClick={addEmail}>Subscribe</button>
          </div>
        </div>
        <footer>
          <div className='left-col'>
            <ul>
              <h3>WHO WE ARE?</h3>
              <a href='/#about'>About</a>
              <a href='/#teams'>Our Team</a>
              <a href='/#realted-projects'>Related Projects</a>
              <a href='/#publications'>Publications</a>
            </ul>
            <ul>
              <h3>SUPPORT</h3>
              <a href='/#contact'>Contact Us</a>
              <a href='/#donation'>Donate</a>
            </ul>
          </div>
          <div className='right-col'>
            <h3>FOLLOW US ON</h3>
            <div>
              <a href='https://twitter.com/udaan_project'>
                <Insta />
              </a>
              <a href='/#'>
                <Fb />
              </a>
              <a href='https://twitter.com/udaan_project'>
                <Tweet />
              </a>
              <a href='https://www.youtube.com/channel/UClfK7iC8J7b22bj3GwAUaCw'>
                <Yt />
              </a>
            </div>
          </div>
        </footer>
        <section>
          <h2>Project UDAAN</h2>
          <div>
            <span>"Breaking the Language Barrier in Education"</span>
            <span style={{ color: '#fb5517' }}>
              Under the aegis of the office of Alumni and Corporate Relations
              IIT Bombay
            </span>
          </div>
          <hr />
          <div>
            <h4>Copyright © 2021 IIT Bombay</h4>
            <h4
              style={{
                marginRight: 0,
              }}>
              Don’t forget to give credits
            </h4>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

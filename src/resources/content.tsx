/* eslint-disable */
// @ts-nocheck
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Khiem",
  lastName: "Nguyen Huu",
  name: `Huu Khiem Nguyen`,
  role: "Information Technology Student @ University of Wollongong",
  avatar: "/images/avatar.jpg",
  email: "khiema8k99@gmail.com",
  location: "Australia/Sydney", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Vietnamese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/khiemhuu',
},
{
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/huu-khiem-nguyen-9a56a8197/',
},
{
    name: 'Personal Email',
    icon: 'email',
    link: 'mailto:khiem@khiemng.com',
},
{
    name: 'Work Email',
    icon: 'email',
    link: 'mailto:work@khiemng.com',
},
{
    name: 'Photography Instagram',
    icon: 'instagram',
    link: 'https://www.instagram.com/khiem.jpg/',
},
{
    name: 'Personal Instagram',
    icon: 'instagram',
    link: 'https://www.instagram.com/khiemnghuu',
},
{
    name: 'CV',
    icon: 'cv',
    link: 'https://drive.google.com/file/d/1pFOjQTe3eP59GluLWNkhlyh_JlVAtG9e/view?usp=sharing',
},
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Xin chào!</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Baselink</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Current Project
        </Text>
      </Row>
    ),
    href: "/work/baselink",
  },
  subline: (
    <>
    I am Khiem, Bachelor of Information Technology student at University of Wollongong, Australia. I am currently studying major in Website Design and Development, also doing photography as my hobby
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About Khiem`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: <>Xin chào, I am Khiem Nguyen Huu. I am from Vietnam 🇻🇳, living in Wollongong, New South Wales, Australia 🇦🇺. I am doing Bachelor of Information Technology (Dean's Scholar) majoring in Website Design and Development. I have a big passion with coding and doing photography.</>
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Full Stack Product Developer",
        timeframe: "Oct 2025 - Present",
        role: "Devika · Wollongong, New South Wales, Australia",
        achievements: [
          <>
            Developing full stack product solutions as part of the Devika team.
          </>,
        ],
        logo: "/images/logos/devika.jpg",
        link: "https://devika.com",
        tags: [
          { name: "Part-time", variant: "brand" },
          { name: "On-site", variant: "accent" },
        ],
        images: [],
      },
      {
        company: "EIS School of Computing and Information Technology Student Representative",
        timeframe: "Apr 2025 - Nov 2025",
        role: "School of Computing and Information Technology, Faculty of Engineering and Information Science, University of Wollongong",
        logo: "/images/logos/uow.svg",
        tags: [
          { name: "Volunteer", variant: "accent" },
        ],
        achievements: [
          <>
            Acted as a liaison between students and faculty, advocating for student interests and ensuring the student voice was consistently represented in school-level decisions.
          </>,
          <>
            Participated in bi-monthly School Committee meetings, contributing to discussions and presenting student feedback as a standing agenda item.
          </>,
          <>
            Maintained regular communication with the student body to gather insights, concerns, and suggestions, and conveyed these effectively to academic staff.
          </>,
          <>
            Collaborated with academic and administrative stakeholders to improve student experience, policies, and educational support services.
          </>,
          
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/studentrep.png",
            alt: "Student Representative",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Member of Faculty Education Committee",
        timeframe: "Jun 2025 - Nov 2025",
        role: "Faculty of Engineering and Information Science, University of Wollongong · Wollongong, New South Wales, Australia",
        logo: "/images/logos/uow.svg",
        tags: [
          { name: "Committee", variant: "brand" },
        ],
        achievements: [
          <>
            Representing student voice for student committee that improving learning and teaching experience in the Faculty of Engineering and Information Sciences (EIS).
          </>,
          <>
            Represent the voice of international students at the faculty level, contributing actively to education policy discussions and decision-making processes.
          </>,
          <>
            Attend and participate in committee meetings as a standing agenda item, delivering student feedback, concerns, and proposals to improve academic and student life.
          </>,
          <>
            Proactively engage with peers to gather diverse student perspectives and advocate for a more inclusive and supportive university experience.
          </>,
          <>
            Collaborate with faculty staff and working groups to enhance curriculum quality, student services, and learning environments across the faculty.
          </>,
          <>
            Foster strong relationships with university stakeholders to promote student-centred initiatives and continuous improvement.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Wollongong, Australia",
        description: <><strong>Major: Website Design and Development</strong>
        <br/>I am currently pursuing a Bachelor of Information Technology with a major in Website Design and Development. I have been fortunate to enroll in the Dean's Scholar program, an exclusive opportunity for high-achieving students, which has allowed me to connect with inspiring peers and industry professionals.
        </>,
      },
      {
        name: "Huynh Thuc Khang High School - Collège de Vinh",
        description: <>A8 Class of 2022
        <br /><span><strong>ACTIVITIES AND SOCIETY</strong> - Youth Union Program:
        <br />Former Head of the Design Department at Thunder Debate Club (TDC)
        <br />Former Head of the Design Department, Founder Team at HIGGS - Huynh Thuc Khang Science Club
        <br />Former Crew Member of the Design and Media Department at Phan Cinephilia Club
        <br />Former Vice President of Break Out Crew (Dance Club)
        <br />Former Head of the Media Department at Huynh Thuc Khang English Club (H.E.C)
        <br />Former Member of the Design Department at Youth Unity Model United Nations (YUMUN)</span></>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "UI/UX Design: Figma",
        description: (
          <>Able to design elements and prototype of Website and Software in Figma.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Web Technology: AWS, HTML, CSS, JavaScript, React, Typescript, Database",
        description: (
          <>Building the web application with HTML, CSS, JavaScript, Typescript. Also have a knowledge of AWS, serverless, and database.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Typescript",
            icon: "typescript",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Photography",
        description: <>Able to take photos with professional camera. Also have a knowledge of Photoshop, Lightroom, and other photo editing software.</>,
        images: [],
      },
    ],
  },
  awards: {
    display: true,
    title: "Awards & Certifications",
    items: [
      {
        title: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services (AWS)",
        date: "Issued Dec 2025 · Expires Dec 2028",
        description: <>Validates the ability to design and implement distributed systems on AWS, covering compute, networking, storage, and database services.</>,
        badge: "/images/badges/aws-saa.png",
        link: "https://www.credly.com/badges/cfe94d1e-fe45-4392-a8ea-830716bc3547/linked_in_profile",
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
        ],
      },
      {
        title: "Executive Dean's Merit List 2024",
        issuer: "Faculty of Engineering and Information Science, University of Wollongong",
        date: "Sep 2025",
        description: <>Achieving a Weighted Average Mark ranking in the top 5% of students in an undergraduate program that year.</>,
        images: [
          {
            src: '/images/projects/project-01/Dean24.jpeg',
            alt: "Dean's List 2024",
            width: 12,
            height: 16,
          },
        ],
      },
      {
        title: "Engineering and Information Sciences Scholars and Advanced Scholarship",
        issuer: "Faculty of Engineering and Information Sciences, University of Wollongong",
        date: "Sep 2024",
        description: <>Awarded for outstanding academic achievements within the Faculty of Engineering and Information Sciences. Recognizes excellence in the field of Information Technology and consistent performance in the program.</>,
        images: [
          {
            src: '/images/projects/project-01/Scholarship.jpeg',
            alt: 'Scholarship',
            width: 12,
            height: 16,
          },
        ],
      },
      {
        title: "Executive Dean's Merit List 2023",
        issuer: "Faculty of Engineering and Information Science, University of Wollongong",
        date: "Jul 2024",
        description: <>Recognized for achieving a Weighted Average Mark ranking in the top 5% of students in the undergraduate program. Highlights dedication and academic excellence in the field of Information Technology.</>,
        images: [
          {
            src: '/images/projects/project-01/Dean23.png',
            alt: "Dean's List 2023",
            width: 12,
            height: 16,
          },
        ],
      },
      {
        title: "UOW University Excellence Scholarship",
        issuer: "University of Wollongong",
        description: <>Scholarship awarded for academic excellence and outstanding performance throughout highschool portfolio. Supports and encourages students who demonstrate strong academic abilities.</>,
      },
      {
        title: "People's Choice Award",
        issuer: "University of Wollongong",
        date: "2024",
        description: <>The prize for the photography competition by UOW for encouraging sustainable environment protections (Sustainable snapshots: putting Country into focus photography competition 2024).</>,
        images: [
          {
            src: '/images/projects/project-01/Photo24.png',
            alt: "People's Choice Award",
            width: 12,
            height: 16,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "",
  description: `Read what ${person.name} has been up to recently.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: []
};

export { person, social, newsletter, home, about, blog, work, gallery };

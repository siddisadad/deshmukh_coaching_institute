/**
 * =============================================================================
 * EDIT THIS FILE TO UPDATE THE WEBSITE
 * =============================================================================
 * All public-facing copy, photos, faculty, courses, results, FAQs, and contact
 * details live here. Replace placeholder names, photos, statistics, and
 * contact information with verified institute data before launch.
 * =============================================================================
 */

export const site = {
  name: "Deshmukh Coaching Institute",
  shortName: "DCI",
  tagline: "Learn. Prepare. Achieve.",
  alternativeHeadline: "Your Success Starts With the Right Guidance.",
  url: "https://www.deshmukhcoaching.in",
  locale: "en_IN",
  foundedYear: 2016,
  logoText: {
    primary: "DESHMUKH",
    secondary: "COACHING INSTITUTE",
  },
  seo: {
    title:
      "Deshmukh Coaching Institute | School, Board & Competitive Exam Coaching",
    description:
      "Deshmukh Coaching Institute offers expert school coaching, board exam preparation, and competitive exam classes with experienced faculty, regular tests, and personal guidance. Learn. Prepare. Achieve.",
    keywords: [
      "Deshmukh Coaching Institute",
      "coaching classes",
      "best coaching institute",
      "coaching classes near me",
      "school coaching",
      "board exam coaching",
      "competitive exam coaching",
      "student coaching classes",
      "SSC coaching",
      "foundation course",
      "entrance exam coaching",
    ],
  },
  contact: {
    // Replace these placeholder details with the institute's actual information.
    addressLines: [
      "Shop No. 12, Knowledge Plaza",
      "Near City Library, [Your City]",
      "Maharashtra 400001, India",
    ],
    address: "Shop No. 12, Knowledge Plaza, Near City Library, [Your City], Maharashtra 400001, India",
    phoneDisplay: "+91 98765 43210",
    phone: "+919876543210",
    whatsappDisplay: "+91 98765 43210",
    whatsapp: "919876543210",
    email: "admissions@deshmukhcoaching.in",
    hours: "Monday – Saturday, 8:00 AM – 8:00 PM",
    hoursShort: "Mon–Sat · 8:00 AM – 8:00 PM",
    mapEmbedUrl: "",
    mapNote:
      "Add your Google Maps embed URL in src/content/site.ts (contact.mapEmbedUrl) to display a live map.",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  whatsappMessage:
    "Hello, I would like to enquire about courses at Deshmukh Coaching Institute.",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/faculty" },
  { label: "Results", href: "/results" },
  { label: "Facilities", href: "/facilities" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "Academic coaching with a results-first approach",
  headline: "Build Your Future With the Right Preparation.",
  supporting:
    "Deshmukh Coaching Institute provides expert guidance, structured learning, regular assessments, and personalized support to help students achieve their academic and competitive exam goals.",
  primaryCta: { label: "Explore Courses", href: "/courses" },
  secondaryCta: { label: "Book a Free Counselling Session", href: "/contact#enquiry" },
  chips: [
    "Structured learning plans",
    "Weekly tests & analysis",
    "Personal doubt support",
  ],
  image: {
    src: "/images/hero/classroom.jpg",
    alt: "Teacher guiding students during a focused classroom session at a coaching institute",
  },
  secondaryImage: {
    src: "/images/about/students.jpg",
    alt: "Students collaborating during a guided study session",
  },
  stats: [
    { value: 1000, suffix: "+", label: "Students Guided" },
    { value: 95, suffix: "%+", label: "Success Rate" },
    { value: 10, suffix: "+", label: "Expert Faculty" },
    { value: 10, suffix: "+", label: "Years of Excellence" },
  ],
};

export const trustItems = [
  "Experienced Faculty",
  "Regular Tests",
  "Personal Attention",
  "Doubt Solving",
  "Study Material",
  "Career Guidance",
] as const;

export const about = {
  heading: "About Deshmukh Coaching Institute",
  intro:
    "Deshmukh Coaching Institute is committed to quality education that builds strong fundamentals, exam-ready discipline, and the confidence to perform when it matters. We combine structured teaching, regular evaluation, and individual attention so every student can progress with clarity.",
  body: [
    "Our classrooms are designed for focused learning — not crowded lectures. Teachers explain concepts thoroughly, check understanding through practice, and stay available for doubts until the student is ready to move forward.",
    "Whether a student is strengthening school academics, preparing for board examinations, or targeting competitive tests, we create a plan around their goals, current level, and the time available.",
  ],
  image: {
    src: "/images/about/teacher.jpg",
    alt: "Educator teaching a concept at the board in a bright, modern classroom",
  },
  features: [
    {
      title: "Experienced Faculty",
      description: "Learn from knowledgeable and dedicated teachers.",
    },
    {
      title: "Personalized Guidance",
      description: "Identify individual strengths and areas for improvement.",
    },
    {
      title: "Result-Oriented Preparation",
      description: "Focused preparation strategies designed around student goals.",
    },
    {
      title: "Supportive Learning Environment",
      description: "A positive environment where students can ask questions and grow confidently.",
    },
  ],
  cta: { label: "Know More About Us", href: "/about" },
};

export const courses = [
  {
    slug: "school-academic-coaching",
    name: "School Academic Coaching",
    category: "School Coaching",
    image: {
      src: "/images/courses/school.jpg",
      alt: "Students participating in a school academic coaching class",
    },
    suitableClasses: "Classes 5 to 10",
    subjects: "Mathematics, Science, English, Social Science",
    duration: "Academic year / term-wise batches",
    summary:
      "Classes for students from different school levels with a strong focus on concepts, homework, revision, and examinations.",
    benefits: [
      "Concept-first teaching aligned with school syllabi",
      "Daily homework support and revision cycles",
      "Regular class tests to track understanding",
      "Individual attention for weaker topics",
    ],
    whoFor:
      "School students who want stronger fundamentals, better exam scores, and consistent academic habits throughout the year.",
    outcomes: [
      "Clearer understanding of core concepts",
      "Improved homework completion and class confidence",
      "Better performance in unit tests and term exams",
    ],
    modules: [
      "Diagnostic assessment and learning plan",
      "Concept classes with worked examples",
      "Practice worksheets and homework review",
      "Periodic tests and parent updates",
    ],
  },
  {
    slug: "ssc-board-examination",
    name: "SSC / Board Examination Preparation",
    category: "Board Preparation",
    image: {
      src: "/images/courses/exam.jpg",
      alt: "Student preparing notes and practice papers for board examinations",
    },
    suitableClasses: "Classes 9 to 12",
    subjects: "Core board subjects as per stream",
    duration: "8–12 months (exam-cycle batches)",
    summary:
      "Structured preparation for board examinations with revision plans and regular tests.",
    benefits: [
      "Syllabus-mapped revision calendars",
      "Board-pattern question practice",
      "Timed tests and answer-writing feedback",
      "Last-mile revision and doubt camps",
    ],
    whoFor:
      "Students targeting high board scores who need a disciplined revision plan, exam-pattern practice, and regular evaluation.",
    outcomes: [
      "Stronger answer presentation and time management",
      "Coverage of high-weight chapters with revision loops",
      "Confidence through mock board examinations",
    ],
    modules: [
      "Chapter completion with board-oriented notes",
      "Question-bank practice and PYQ analysis",
      "Full-length mock examinations",
      "Personalised score-improvement plan",
    ],
  },
  {
    slug: "competitive-exam-preparation",
    name: "Competitive Exam Preparation",
    category: "Competitive Exams",
    image: {
      src: "/images/courses/planning.jpg",
      alt: "Students working through competitive exam practice questions",
    },
    suitableClasses: "Classes 8 to 12 & repeaters",
    subjects: "Quantitative aptitude, reasoning, science, GK, exam-specific papers",
    duration: "6–18 months depending on target exam",
    summary:
      "Exam-focused coaching with practice questions, mock tests, strategy sessions, and performance analysis.",
    benefits: [
      "Strategy sessions for accuracy and speed",
      "Topic-wise practice and mixed mocks",
      "Detailed performance analysis after tests",
      "Mentor guidance for attempt planning",
    ],
    whoFor:
      "Students preparing for competitive and scholarship-style examinations who need structured practice and test analysis.",
    outcomes: [
      "Improved speed, accuracy, and exam temperament",
      "Clearer understanding of strengths and weak areas",
      "A repeatable test-taking strategy",
    ],
    modules: [
      "Foundation plus exam-pattern mapping",
      "Drill practice and sectional tests",
      "Full mocks with rank-style analysis",
      "Revision sprints before the exam window",
    ],
  },
  {
    slug: "foundation-program",
    name: "Foundation Program",
    category: "Foundation Courses",
    image: {
      src: "/images/courses/foundation.jpg",
      alt: "Teacher helping younger students build strong academic foundations",
    },
    suitableClasses: "Classes 6 to 9",
    subjects: "Mathematics, Science, English, Logical Reasoning",
    duration: "Year-long foundation batches",
    summary:
      "Build strong fundamentals in Mathematics, Science, English, and logical reasoning.",
    benefits: [
      "Age-appropriate conceptual depth",
      "Reasoning and problem-solving habits",
      "Language skills for academic writing",
      "Early exposure to higher-order questions",
    ],
    whoFor:
      "Middle-school students who want a strong base before board years and future competitive pathways.",
    outcomes: [
      "Secure fundamentals across core subjects",
      "Better logical thinking and reading comprehension",
      "Readiness for advanced academic tracks",
    ],
    modules: [
      "Core concept building",
      "Weekly reasoning and language labs",
      "Application worksheets",
      "Term assessments and parent review",
    ],
  },
  {
    slug: "entrance-exam-preparation",
    name: "Entrance Exam Preparation",
    category: "Entrance Preparation",
    image: {
      src: "/images/courses/science.jpg",
      alt: "Science and mathematics preparation for entrance examinations",
    },
    suitableClasses: "Classes 11, 12 & drop-year students",
    subjects: "Physics, Chemistry, Mathematics / Biology, and exam-specific papers",
    duration: "10–24 months (target-exam dependent)",
    summary:
      "Focused preparation programs for relevant entrance and competitive examinations.",
    benefits: [
      "Chapter-wise depth with entrance-level problems",
      "Regular mock tests in exam conditions",
      "Doubt clinics after every major test",
      "Study plans that respect board + entrance load",
    ],
    whoFor:
      "Senior students aiming for entrance examinations who need rigorous practice, analysis, and balanced board support.",
    outcomes: [
      "Stronger problem-solving at entrance difficulty",
      "Better time allocation across papers",
      "A documented improvement trajectory",
    ],
    modules: [
      "Concept classes and advanced problem sets",
      "Board–entrance dual planning",
      "Mock series with detailed solutions",
      "Personal mentoring checkpoints",
    ],
  },
] as const;

export const subjects = [
  { name: "Mathematics", blurb: "Concepts, practice, and exam-ready problem solving.", icon: "Calculator", tone: "royal" },
  { name: "Science", blurb: "Clear explanations with application-based learning.", icon: "Atom", tone: "teal" },
  { name: "Physics", blurb: "From fundamentals to numerical mastery.", icon: "Zap", tone: "amber" },
  { name: "Chemistry", blurb: "Theory, reactions, and structured revision.", icon: "FlaskConical", tone: "rose" },
  { name: "Biology", blurb: "Diagrams, concepts, and high-yield recall.", icon: "Leaf", tone: "green" },
  { name: "English", blurb: "Grammar, comprehension, and writing skills.", icon: "BookOpen", tone: "indigo" },
  { name: "Reasoning", blurb: "Logical thinking for competitive papers.", icon: "Brain", tone: "violet" },
  { name: "General Knowledge", blurb: "Current affairs and static GK made usable.", icon: "Globe", tone: "sky" },
  { name: "Computer Science", blurb: "Fundamentals, logic, and practical skills.", icon: "Monitor", tone: "slate" },
] as const;

export const whyChoose = [
  {
    title: "Expert Faculty",
    description: "Learn from experienced and passionate educators.",
    icon: "GraduationCap",
  },
  {
    title: "Small Batch Sizes",
    description: "Better interaction and individual attention.",
    icon: "Users",
  },
  {
    title: "Regular Tests",
    description: "Frequent assessments to measure progress.",
    icon: "ClipboardCheck",
  },
  {
    title: "Doubt Solving",
    description: "Dedicated support for difficult concepts.",
    icon: "MessageCircleQuestion",
  },
  {
    title: "Comprehensive Study Material",
    description: "Well-structured notes, practice papers, and revision resources.",
    icon: "NotebookText",
  },
  {
    title: "Performance Tracking",
    description: "Monitor student progress and identify areas for improvement.",
    icon: "LineChart",
  },
  {
    title: "Parent Updates",
    description: "Keep parents informed about attendance and academic performance.",
    icon: "Bell",
  },
  {
    title: "Career Guidance",
    description: "Help students understand academic and career opportunities.",
    icon: "Compass",
  },
] as const;

export const learningSteps = [
  { n: "01", title: "Understand", text: "Build strong conceptual foundations." },
  { n: "02", title: "Practice", text: "Solve problems and apply concepts." },
  { n: "03", title: "Test", text: "Regular tests and mock examinations." },
  { n: "04", title: "Analyze", text: "Identify mistakes and improvement areas." },
  { n: "05", title: "Improve", text: "Personalized revision and continuous guidance." },
] as const;

export const results = {
  heading: "Results That Inspire Confidence",
  note: "Placeholder results for demonstration. Replace with verified student outcomes before public launch.",
  stats: [
    { value: 1000, suffix: "+", label: "Students Guided" },
    { value: 95, suffix: "%+", label: "Success Rate" },
    { value: 500, suffix: "+", label: "High Scorers" },
    { value: 100, suffix: "+", label: "Top Performers" },
  ],
  highlights: [
    { title: "95% in Board Examination", detail: "Sample board result highlight", year: "2025" },
    { title: "Top Rank in Competitive Examination", detail: "Sample competitive rank highlight", year: "2025" },
    { title: "District-Level Topper", detail: "Sample district-level achievement", year: "2024" },
    { title: "90%+ Academic Score", detail: "Sample academic score cluster", year: "2025" },
    { title: "Science Stream Distinction", detail: "Sample Class 12 science result", year: "2025" },
    { title: "Mathematics Olympiad Qualifier", detail: "Sample olympiad qualifier", year: "2024" },
    { title: "Consistent Improvement Trajectory", detail: "Sample progress-from-baseline story", year: "2025" },
    { title: "Scholarship Examination Success", detail: "Sample scholarship result", year: "2024" },
  ],
};

export const achievers = [
  {
    name: "Aarav Deshmukh",
    exam: "Class 10",
    score: "96.8%",
    achievement: "Board Examination",
    year: "2025",
    initials: "AD",
    quote: "Regular tests showed me exactly what to revise next.",
  },
  {
    name: "Ananya Patil",
    exam: "Class 12",
    score: "94.5%",
    achievement: "Science Stream",
    year: "2025",
    initials: "AP",
    quote: "Doubt sessions made Science feel manageable again.",
  },
  {
    name: "Vihaan Joshi",
    exam: "Class 10",
    score: "95.2%",
    achievement: "Board Examination",
    year: "2025",
    initials: "VJ",
    quote: "The revision plan kept board preparation organised.",
  },
  {
    name: "Isha Kulkarni",
    exam: "Class 12",
    score: "93.1%",
    achievement: "Commerce Stream",
    year: "2024",
    initials: "IK",
    quote: "Teachers explained the method, not only the answer.",
  },
  {
    name: "Rohan Sharma",
    exam: "Competitive Exam",
    score: "AIR highlight*",
    achievement: "State-level qualifier",
    year: "2025",
    initials: "RS",
    quote: "Mock analysis improved both speed and accuracy.",
  },
  {
    name: "Meera Nair",
    exam: "Class 9",
    score: "92.4%",
    achievement: "Annual Examination",
    year: "2025",
    initials: "MN",
    quote: "Small batches meant I could ask every question.",
  },
] as const;

export const announcements = [
  "Admissions open for the upcoming academic session",
  "Book a free counselling session to choose the right course",
  "Regular tests with parent progress updates",
  "Placeholder highlight: 95%+ sample success rate — replace with verified results",
];

export const admissionSteps = [
  { n: "01", title: "Enquire", text: "Share class, goals, and preferred timing through the form, call, or WhatsApp." },
  { n: "02", title: "Counselling", text: "Meet an academic counsellor and map the right course, batch, and study load." },
  { n: "03", title: "Enrol", text: "Confirm start date, timetable, and the first-month learning plan." },
  { n: "04", title: "Begin", text: "Attend orientation, receive material, and start concept classes with a clear target." },
];

export const parentPartnership = {
  heading: "Built For Students. Trusted By Parents.",
  text: "Parents stay informed without turning every test into conflict. We share attendance, performance, and the next academic focus in plain language.",
  points: [
    {
      title: "Attendance visibility",
      text: "Know whether the student is present and consistent through the week.",
    },
    {
      title: "Test reports",
      text: "See scores alongside the topics that need revision, not only a percentage.",
    },
    {
      title: "Counsellor access",
      text: "Speak with the team when batch, workload, or stream choices need a decision.",
    },
    {
      title: "A clear next step",
      text: "Every review ends with what to practise at home and what we will cover in class.",
    },
  ],
};

export const batchSchedule = {
  heading: "Batch Timings",
  note: "Placeholder timetable. Replace with your published hours, days, and centre-specific batches.",
  rows: [
    { course: "School Academic Coaching", days: "Mon – Sat", time: "4:30 PM – 6:30 PM" },
    { course: "SSC / Board Preparation", days: "Mon – Sat", time: "6:45 PM – 8:45 PM" },
    { course: "Foundation Program", days: "Tue, Thu, Sat", time: "5:00 PM – 7:00 PM" },
    { course: "Competitive Exam Preparation", days: "Mon – Fri", time: "7:00 AM – 9:00 AM" },
    { course: "Entrance Exam Preparation", days: "Weekend + selected weekdays", time: "As per counselling" },
  ],
};

export const faculty = [
  {
    slug: "rahul-sharma",
    name: "Dr. Rahul Sharma",
    subject: "Mathematics",
    qualification: "M.Sc., B.Ed.",
    experience: "12+ Years Experience",
    intro:
      "Focuses on conceptual clarity and step-wise problem solving so students can attempt both school and competitive questions with confidence.",
    image: { src: "/images/faculty/rahul.jpg", alt: "Placeholder portrait for Dr. Rahul Sharma" },
  },
  {
    slug: "priya-patil",
    name: "Prof. Priya Patil",
    subject: "Science",
    qualification: "M.Sc., B.Ed.",
    experience: "10+ Years Experience",
    intro:
      "Explains scientific ideas with experiments, diagrams, and exam-oriented practice, helping students connect theory with application.",
    image: { src: "/images/faculty/priya.jpg", alt: "Placeholder portrait for Prof. Priya Patil" },
  },
  {
    slug: "amit-deshpande",
    name: "Mr. Amit Deshpande",
    subject: "Physics",
    qualification: "M.Sc. Physics",
    experience: "9+ Years Experience",
    intro:
      "Builds numerical strength and exam temperament through guided practice, error analysis, and regular concept checks.",
    image: { src: "/images/faculty/amit.jpg", alt: "Placeholder portrait for Mr. Amit Deshpande" },
  },
  {
    slug: "neha-kulkarni",
    name: "Ms. Neha Kulkarni",
    subject: "English",
    qualification: "M.A. English, B.Ed.",
    experience: "8+ Years Experience",
    intro:
      "Strengthens grammar, comprehension, and writing so students communicate clearly in board papers and interviews.",
    image: { src: "/images/faculty/neha.jpg", alt: "Placeholder portrait for Ms. Neha Kulkarni" },
  },
] as const;

export const facilities = {
  heading: "A Better Environment for Better Learning",
  gallery: [
    { src: "/images/facilities/classroom.jpg", alt: "Modern classroom arranged for focused coaching batches", label: "Modern classrooms" },
    { src: "/images/facilities/smartboard.jpg", alt: "Digital teaching tools used during concept explanation", label: "Smart boards" },
    { src: "/images/facilities/study.jpg", alt: "Quiet study area for independent practice and revision", label: "Study areas" },
    { src: "/images/facilities/library.jpg", alt: "Reference books and reading space in the institute library", label: "Library" },
    { src: "/images/facilities/computer-lab.jpg", alt: "Computer lab for digital learning and practice modules", label: "Computer lab" },
    { src: "/images/facilities/doubt.jpg", alt: "Teacher resolving student doubts in a small-group session", label: "Doubt-solving sessions" },
    { src: "/images/facilities/test-room.jpg", alt: "Quiet room used for regular tests and mock examinations", label: "Test rooms" },
    { src: "/images/facilities/activity.jpg", alt: "Students collaborating during an academic activity session", label: "Student activities" },
    { src: "/images/facilities/group.jpg", alt: "Peer learning and group discussion in a supervised setting", label: "Collaborative learning" },
  ],
  cards: [
    { title: "Smart Classrooms", text: "Visual explanations that make complex topics easier to retain." },
    { title: "Modern Study Material", text: "Notes, worksheets, and revision sets mapped to each course." },
    { title: "Dedicated Doubt Sessions", text: "Time reserved for questions, not squeezed into leftover minutes." },
    { title: "Regular Assessments", text: "A test culture that measures progress and guides the next plan." },
    { title: "Peaceful Learning Environment", text: "Spaces designed for concentration, not distraction." },
    { title: "Student Support", text: "Academic mentoring and counsellor access when students need direction." },
  ],
};

export const testimonials = [
  {
    name: "Sanjana Mehta",
    role: "Student",
    rating: 5,
    quote:
      "Deshmukh Coaching Institute helped me understand concepts that I previously found difficult. The regular tests and personal guidance made a huge difference.",
    initials: "SM",
  },
  {
    name: "Rajesh Patil",
    role: "Parent",
    rating: 5,
    quote:
      "We chose this institute for the discipline and communication. Teachers share progress honestly, and my child now studies with a clearer plan.",
    initials: "RP",
  },
  {
    name: "Kavya Iyer",
    role: "Student",
    rating: 5,
    quote:
      "Doubt sessions are the reason I improved. I could ask the same question more than once without feeling rushed, and the practice papers felt exam-like.",
    initials: "KI",
  },
  {
    name: "Anita Deshmukh",
    role: "Parent",
    rating: 5,
    quote:
      "The counselling conversation helped us pick the right batch. The institute feels organised, respectful, and serious about results — which is what we wanted.",
    initials: "AD",
  },
] as const;

export const counselling = {
  heading: "Not Sure Which Course Is Right For You?",
  text: "Talk to our academic counsellor and find the right preparation plan based on your goals.",
  primaryCta: { label: "Book Free Counselling", href: "/contact#enquiry" },
  secondaryCta: { label: "Call Us Now", href: "tel:+919876543210" },
};

export const admission = {
  heading: "Admissions Open",
  text: "Enroll now for the upcoming academic session.",
  primaryCta: { label: "Apply Now", href: "/enroll" },
  secondaryCta: { label: "Talk to Counsellor", href: "/contact#enquiry" },
};

export const faqs = [
  {
    q: "Which classes do you provide coaching for?",
    a: "We offer school academic coaching from middle school through senior secondary, along with board, foundation, entrance, and competitive exam programmes. Share your current class during counselling and we will recommend a suitable batch.",
  },
  {
    q: "Which subjects are covered?",
    a: "Core offerings include Mathematics, Science, Physics, Chemistry, Biology, English, Reasoning, General Knowledge, and Computer Science. Subject combinations depend on the selected course and class.",
  },
  {
    q: "Do you provide study material?",
    a: "Yes. Students receive structured notes, practice worksheets, and revision resources designed around the course plan. Additional practice sets are shared before tests and examinations.",
  },
  {
    q: "Are regular tests conducted?",
    a: "Yes. Class tests, topic tests, and mock examinations are a core part of our method. Results are reviewed so students know what to revise next.",
  },
  {
    q: "Do you offer doubt-solving sessions?",
    a: "Yes. Dedicated doubt sessions are scheduled so students can clarify difficult concepts without waiting for the next chapter to begin.",
  },
  {
    q: "How can I book a counselling session?",
    a: "Use the enquiry form on this website, call the institute number, or message us on WhatsApp. A counsellor will help you choose a course, batch, and preparation plan.",
  },
  {
    q: "What are the batch timings?",
    a: "Morning, afternoon, and evening batches are planned around school hours. Exact timings vary by course and are confirmed during admission counselling. Replace this answer with your published timetable.",
  },
  {
    q: "How can I enroll?",
    a: "Complete the enquiry or enrolment form, attend a counselling conversation, and confirm the batch. Our team will share fee details, start dates, and document requirements during that conversation.",
  },
] as const;

export const blogs = [
  {
    slug: "exam-preparation-tips",
    category: "Exam Preparation Tips",
    title: "A Calm, Practical Plan for the Last 60 Days Before Exams",
    description: "How to organise revision, mocks, and sleep so effort converts into marks.",
    image: { src: "/images/blog/exam-tips.jpg", alt: "Student reviewing notes while preparing for upcoming examinations" },
    date: "12 June 2026",
    content: [
      "The final two months before an examination are not the time to collect more books. They are the time to convert what you already know into reliable marks. A simple weekly rhythm works better than last-minute intensity.",
      "Start with a syllabus grid. Mark each chapter as strong, average, or weak. Strong chapters need short, timed revision. Average chapters need mixed practice. Weak chapters need teacher support and a smaller, high-yield list rather than a full re-teach.",
      "Schedule two mock papers each week in exam conditions. After every mock, spend equal time analysing mistakes: concept gaps, careless errors, and time-management issues. Improvement comes from that analysis, not from the number of papers attempted.",
      "Protect sleep and short breaks. Tired students reread the same page without retaining it. A 45–50 minute study block followed by a short walk is more productive than a five-hour blur.",
    ],
  },
  {
    slug: "study-techniques",
    category: "Study Techniques",
    title: "Study Techniques That Actually Stick in Class and at Home",
    description: "Active recall, spaced practice, and error logs — methods students can use tomorrow.",
    image: { src: "/images/blog/study.jpg", alt: "Notebooks and study materials arranged for focused independent learning" },
    date: "28 May 2026",
    content: [
      "Highlighting a textbook feels productive, but it rarely builds exam memory. The methods that work are less glamorous: closing the book and trying to reproduce a method, teaching a concept aloud, and returning to the same problem after two days.",
      "Keep an error log. Every wrong question gets a one-line note: why it went wrong and what you will do differently. Review the log before the next test. This turns mistakes into a personal syllabus.",
      "Mix subjects in a day rather than blocking an entire weekend on one chapter. Interleaving keeps attention higher and prepares the mind for papers that jump between topics.",
      "Ask for help early. A 10-minute doubt session this week is cheaper than a confused month. Bring the exact step where you got stuck — teachers can then correct the method, not just the final answer.",
    ],
  },
  {
    slug: "board-exam-updates",
    category: "Board Exam Updates",
    title: "How to Read Board Exam Updates Without Panic",
    description: "A checklist for syllabus notices, paper pattern changes, and revision priorities.",
    image: { src: "/images/blog/board.jpg", alt: "Classroom setting associated with board examination preparation" },
    date: "9 May 2026",
    content: [
      "Board-related announcements can create noise. Treat every update as a document to verify, not a rumour to forward. Confirm the source, the class, and the academic year before changing your plan.",
      "If a paper pattern changes, practise the new format immediately with one short paper. Familiarity reduces fear more effectively than extra theory. If internal assessment weightage shifts, start collecting that evidence early rather than in the final week.",
      "Use official circulars and your subject teacher’s interpretation together. Students often miss small but scoring instructions: word limits, choice patterns, or compulsory sections.",
      "Replace this article with institute-specific board guidance once your academic team publishes verified updates for the current year.",
    ],
  },
  {
    slug: "competitive-exam-updates",
    category: "Competitive Exam Updates",
    title: "Building a Competitive Exam Routine Alongside School",
    description: "How to balance school tests, coaching homework, and mock analysis without burnout.",
    image: { src: "/images/blog/competitive.jpg", alt: "Students in a classroom preparing with competitive exam discipline" },
    date: "21 April 2026",
    content: [
      "Competitive preparation fails when it is treated as extra work piled on top of an already full school day. It succeeds when school learning and entrance practice share the same concept map.",
      "Protect one deep-work slot on weekdays and a longer mock slot on weekends. The rest of the week should be lighter: flash revision, formula sheets, and error-log review.",
      "Track accuracy before speed. Students who chase timer records too early collect careless mistakes. Once accuracy is stable, add timed sections.",
      "Share official notification dates with your counsellor so the mock calendar matches the real exam window. Update this page with verified exam calendars when they are released.",
    ],
  },
  {
    slug: "career-guidance",
    category: "Career Guidance",
    title: "Choosing a Stream With Evidence, Not Pressure",
    description: "A parent–student conversation framework for Class 10 and Class 12 decisions.",
    image: { src: "/images/blog/career.jpg", alt: "Counsellor and family discussing academic planning at a desk" },
    date: "2 April 2026",
    content: [
      "Stream selection is a planning decision, not a personality test. Look at three inputs: consistent subject performance, genuine curiosity during study, and the kind of work the student is willing to practise for years.",
      "A two-week trial of extra problems in a subject often reveals more than a single counselling hour. If the student avoids the practice, the stream may look attractive in theory and exhausting in reality.",
      "Parents can help by asking better questions: What part of this subject feels satisfying? Which chapters feel like a grind even after support? What does a typical week look like in this pathway?",
      "Deshmukh Coaching Institute offers academic counselling to map current scores, interests, and timelines. Replace this article with institute-specific pathway notes when you publish them.",
    ],
  },
  {
    slug: "student-success-stories",
    category: "Student Success Stories",
    title: "What Consistent Improvers Have in Common",
    description: "Patterns we see when students move from average scores to reliable high performance.",
    image: { src: "/images/blog/success.jpg", alt: "Students celebrating academic progress after a guided preparation cycle" },
    date: "18 March 2026",
    content: [
      "Dramatic overnight jumps are rare. The students who inspire confidence usually show a quieter pattern: they attend, they attempt, they review, and they return to weak chapters without drama.",
      "They treat tests as information. A low score is a map, not a verdict. They sit with the teacher, isolate two or three recurring errors, and practise those until the pattern breaks.",
      "They keep parents in the loop without turning every mark into a conflict. A short weekly summary — attendance, test score, next focus — keeps home support constructive.",
      "The stories on this website are illustrative until verified student permissions and results are added. When you publish real achiever stories, include the year, exam, and the student’s approved quote.",
    ],
  },
] as const;

export const formOptions = {
  classes: ["Class 5–8", "Class 9", "Class 10", "Class 11", "Class 12", "Repeater / Other"],
  batches: ["Weekday morning", "Weekday afternoon", "Weekday evening", "Weekend", "To be advised"],
} as const;

export const footer = {
  blurb: "Learn. Prepare. Achieve.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Faculty", href: "/faculty" },
    { label: "Results", href: "/results" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

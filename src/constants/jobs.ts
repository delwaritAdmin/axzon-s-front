export interface Job {
  id: string;
  title: string;
  location: string;
  salary: number;
  description: string;
  type: 'On-site' | 'Remote' | 'Hybrid';
  schedule: 'Full-time' | 'Part-time' | 'Contract' | 'Temporary' | 'Volunteer' | 'Internship';
  experienceLevel: 'Internship' | 'Entry level' | 'Associate' | 'Mid-senior level' | 'Director' | 'Executive';
  datePosted: Date;
  aboutTheJob: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Home Health Aide',
    location: 'Valley Stream, NY',
    salary: 40000,
    description: 'Axzons Homecare is looking for a compassionate Home Health Aide to join our team in Valley Stream.',
    type: 'On-site',
    schedule: 'Full-time',
    experienceLevel: 'Entry level',
    datePosted: new Date('2024-05-09'),
    aboutTheJob: 'As a Home Health Aide at Axzons Homecare, you will provide essential care and support to clients in their homes. This role is perfect for individuals who are passionate about making a difference in people\'s lives and have a strong desire to work in healthcare.',
    responsibilities: [
      'Assist clients with daily living activities such as bathing, dressing, and grooming',
      'Prepare and serve nutritious meals according to dietary restrictions',
      'Perform light housekeeping duties to maintain a clean and safe environment',
      'Monitor and record client\'s condition and report any changes to the supervisor',
      'Provide companionship and emotional support to clients',
      'Assist with medication reminders as directed by the care plan',
      'Accompany clients to medical appointments when necessary'
    ],
    qualifications: [
      'High school diploma or equivalent',
      'Completion of a state-approved Home Health Aide training program',
      'Current Home Health Aide certification',
      'Valid driver\'s license and reliable transportation',
      'Excellent communication and interpersonal skills',
      'Physical ability to assist clients with mobility',
      'Compassionate and patient demeanor'
    ],
    benefits: [
      'Competitive hourly rate starting at $17-18.50 per hour',
      'Health and dental insurance options',
      '401(k) retirement plan with company match',
      'Paid time off and holiday pay',
      'Flexible scheduling options',
      'Ongoing training and career development opportunities',
      'Recognition programs for outstanding performance'
    ]
  },
  {
    id: '2',
    title: 'Registered Nurse - Home Care',
    location: 'Atlanta, GA',
    salary: 75000,
    description: 'Axzons Homecare is seeking an experienced Registered Nurse to provide skilled nursing care to patients in their homes.',
    type: 'Hybrid',
    schedule: 'Full-time',
    experienceLevel: 'Mid-senior level',
    datePosted: new Date('2024-08-09'),
    aboutTheJob: 'Join our team of dedicated healthcare professionals as a Registered Nurse in our home care division. In this role, you will have the opportunity to provide personalized, high-quality care to patients in the comfort of their own homes, making a significant impact on their health and well-being.',
    responsibilities: [
      'Assess patients\' health conditions and develop comprehensive care plans',
      'Administer medications, treatments, and procedures as prescribed by physicians',
      'Educate patients and their families on disease management and preventive health measures',
      'Collaborate with interdisciplinary teams to ensure optimal patient care',
      'Maintain accurate and detailed medical records',
      'Monitor patients\' progress and adjust care plans as needed',
      'Provide wound care and other specialized treatments',
      'Supervise and mentor Licensed Practical Nurses and Home Health Aides'
    ],
    qualifications: [
      'Current Registered Nurse license in the state of Georgia',
      'Bachelor\'s degree in Nursing (BSN) preferred',
      'Minimum of 3 years of experience in home health or related field',
      'Strong clinical skills and knowledge of home care regulations',
      'Excellent assessment and critical thinking skills',
      'Proficiency in electronic health records systems',
      'Valid driver\'s license and reliable transportation',
      'Ability to work independently and as part of a team'
    ],
    benefits: [
      'Competitive salary with potential for performance-based bonuses',
      'Comprehensive health, dental, and vision insurance',
      '401(k) retirement plan with generous company match',
      'Paid time off and sick leave',
      'Continuing education reimbursement',
      'Professional liability insurance coverage',
      'Flexible scheduling options',
      'Career advancement opportunities'
    ]
  },
  {
    id: '3',
    title: 'Physical Therapist',
    location: 'New Brunswick, NJ',
    salary: 85000,
    description: 'Axzons Homecare is looking for a skilled Physical Therapist to provide rehabilitation services to patients in their homes.',
    type: 'On-site',
    schedule: 'Full-time',
    experienceLevel: 'Mid-senior level',
    datePosted: new Date('2024-10-09'),
    aboutTheJob: 'As a Physical Therapist with Axzons Homecare, you will play a crucial role in helping patients regain their mobility, strength, and independence. This position offers the opportunity to work one-on-one with patients in their home environment, providing personalized care and making a significant impact on their quality of life.',
    responsibilities: [
      'Evaluate patients\' physical conditions and develop tailored treatment plans',
      'Perform hands-on therapy techniques to improve patients\' mobility and function',
      'Teach patients and caregivers exercises and techniques for continued care',
      'Use specialized equipment to assist in patient rehabilitation',
      'Monitor and document patients\' progress, adjusting treatment plans as needed',
      'Collaborate with other healthcare professionals to ensure comprehensive care',
      'Educate patients on injury prevention and overall wellness',
      'Maintain accurate and detailed patient records'
    ],
    qualifications: [
      'Doctor of Physical Therapy (DPT) degree from an accredited program',
      'Current Physical Therapist license in the state of New Jersey',
      'Minimum of 1-2 years of experience in home health care or outpatient setting',
      'Strong knowledge of physical therapy principles and practices',
      'Excellent interpersonal and communication skills',
      'Ability to work independently and manage time effectively',
      'Proficiency in documentation and electronic health records',
      'Valid driver\'s license and reliable transportation'
    ],
    benefits: [
      'Competitive salary commensurate with experience',
      'Health, dental, and vision insurance',
      '401(k) retirement plan with company match',
      'Paid time off and holidays',
      'Continuing education allowance',
      'Licensure reimbursement',
      'Flexible scheduling options',
      'Opportunity for career growth and specialization'
    ]
  }
];
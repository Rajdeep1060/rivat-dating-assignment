export type ScreenId = 
  | 'splash'
  | 'hero'
  | 'sense'
  | 'problem'
  | 'step1'
  | 'step2'
  | 'step3'
  | 'stories'
  | 'faq';

export interface ScreenMetadata {
  id: ScreenId;
  title: string;
  subtitle: string;
  theme: 'light' | 'dark' | 'gradient';
  bgClass: string;
}

export const SCREENS: ScreenMetadata[] = [
  { id: 'splash', title: 'Rivet', subtitle: 'Splash', theme: 'light', bgClass: 'from-[#FFFDF9] via-[#FFEBF4] to-[#FF007A]' },
  { id: 'hero', title: 'Better Introductions', subtitle: 'Brought to you by people', theme: 'light', bgClass: 'bg-[#FAF9F7]' },
  { id: 'sense', title: 'Chemistry', subtitle: 'Some people just make sense', theme: 'light', bgClass: 'bg-[#FAF9F7]' },
  { id: 'problem', title: 'The Problem', subtitle: 'Every love story had witnesses', theme: 'dark', bgClass: 'bg-gradient-to-b from-[#180010] via-[#0D000C] to-[#5A002E]' },
  { id: 'step1', title: 'Step 1', subtitle: 'Profile that feels like you', theme: 'light', bgClass: 'bg-[#FAF9F7]' },
  { id: 'step2', title: 'Step 2', subtitle: 'Let people spot chemistry', theme: 'light', bgClass: 'bg-[#FAF9F7]' },
  { id: 'step3', title: 'Step 3', subtitle: 'Promising pairs become introductions', theme: 'dark', bgClass: 'bg-[#120D18]' },
  { id: 'stories', title: 'Real Stories', subtitle: 'Real people, Real lives', theme: 'gradient', bgClass: 'bg-gradient-to-br from-[#FF007A] via-[#E1006A] to-[#8A0041]' },
  { id: 'faq', title: 'FAQ', subtitle: 'Got a question? Most do!', theme: 'light', bgClass: 'bg-[#FAF9F7]' },
];

// Tambahkan kata 'type' di sini 👇
import type { Highlight } from '../components/LimeEmailViewer';

export const limeExampleData: { text: string; highlights: Highlight[] } = {
  text: "re : craig - thanks for the feedback . i ' ve received similar reports from other research customers on various non - recurring and on - going projects elena has been able to help out on . the most recent member of a long line of rice mba candidates who have \" made a difference \" in our research efforts , elena will be staying with us throughout this next ( her final ) year . she ' ll be working the morning shift . please let us know if she , or any other member of our group can assist you in any way . - mike",
  highlights: [
    { word: 'research', weight: 0.0497, type: 'legitimate' },
    { word: 'thanks', weight: 0.0357, type: 'legitimate' },
    { word: 'research', weight: 0.0497, type: 'legitimate' },
    { word: 'thanks', weight: 0.0357, type: 'legitimate' },
    { word: 'member', weight: -0.0354, type: 'phishing' },
    { word: 'similar', weight: 0.0209, type: 'legitimate' },
    { word: 'candidates', weight: 0.0203, type: 'legitimate' },
    { word: 'working', weight: 0.0175, type: 'legitimate' },
    { word: 'difference', weight: 0.0169, type: 'legitimate' },
    { word: 'know', weight: 0.0161, type: 'legitimate' },
    { word: 'assist', weight: -0.0160, type: 'phishing' },
    { word: 'going', weight: 0.0149, type: 'legitimate' },
    { word: 'year', weight: 0.0128, type: 'legitimate' },
    { word: 'recent', weight: 0.0125, type: 'legitimate' },
    { word: 'let', weight: 0.0121, type: 'legitimate' },
    { word: 'group', weight: 0.0104, type: 'legitimate' },
    { word: 'mike', weight: 0.0103, type: 'legitimate' }
  ]
};
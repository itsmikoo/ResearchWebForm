// Tambahkan kata 'type' di sini 👇
import type { Highlight } from '../components/LimeEmailViewer';

export const tutorialEmailData: { text: string; highlights: Highlight[] } = {
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

// 2. Data 10 Soal Asli dari Colab
export interface EmailQuestionData {
  id: number;
  text: string;
  highlights: Highlight[];
}

export const emailData: EmailQuestionData[] = [
  {
    id: 1, // Index 3036: Hospital (Class 1)
    text: "i ' m in hospital ! ! ! i ' ve had a burst appendix and pneumonia . call debbie for details on 936 - 321 - 8836 ( home ) or 936 - 499 - 4996 ( cell ) or me directly on 713 - 598 - 0732 ( but i share a room with someone , so we may disturb them . . . . steve - - - - - - - - - - - - - - - - - tel : 713 - 345 - 8980 cell : 713 - 598 - 0732",
    highlights: [
      { word: 'steve', weight: 0.233, type: 'legitimate' },
      { word: 'tel', weight: 0.168, type: 'phishing' },
      { word: 'room', weight: 0.152, type: 'legitimate' },
      { word: 'directly', weight: 0.126, type: 'legitimate' },
      { word: 'details', weight: 0.108, type: 'phishing' },
      { word: 'hospital', weight: 0.103, type: 'phishing' },
      { word: 'share', weight: 0.096, type: 'phishing' },
      { word: 'cell', weight: 0.094, type: 'legitimate' },
      { word: 'home', weight: 0.051, type: 'phishing' },
      { word: 've', weight: 0.003, type: 'legitimate' },
      { word: 'them', weight: 0.002, type: 'legitimate' }
    ]
  },
  {
    id: 2, // Index 1710: Viagra (Class 1)
    text: "re : without a perscription - viagra / phentermine / propecia / zyban yotgy royal meds your online pharmacy · click here your online pharmacy for fda approved drugs through a online consultation . no more embarrassing doctor visits , we offers confidential ordering online . take advantage of some of best prices available on the internet ! we offer the widest range of drugs available through online ordering . such as : less than $ 7 . 00 per dose viagra intended for men with erectile dysfunction ( ed ) , it helps most men to get and keep an erection when they get sexually excited . no need to go through embarrassing , stressful situation anymore , you can now get viagra from the comfort of your home . click here phentermine obesity weight loss drug . it enables people to burn more fat doing nothing , stimulating your nervous system . you will feel the difference ! it will give you more energy , you will become more active ! it ' s an appetite suppressant , you ' ll burn fat easier and eat less . it is a both safe and effective treatment to lose weight . click here zyban is the first nicotine - free pill that , as part of a comprehensive program from your health care professional , can help you stop smoking . its prescription medicine available only from your health care professional for smokers 18 and older . click here propecia is a medical breakthrough . the first pill that effectively treats male pattern hair loss on the vertex ( at top of head ) and anterior mid - scalp area . click here unsubscribe information : this email is intended to be a benefit to the recipient . if you would like to opt - out and not receive any more marketing information please click on the following link http : / / 194 . 44 . 46 . 21 / remove . php . your address will be removed within 24 hrs . we sincerely apologize for any inconvenience . - - - - this sf . net email is sponsored by : jabber - the world ' s fastest growing real - time communications platform ! don ' t just im . build it in ! http : / / www . jabber . com / osdn / xim spamassassin - sightings mailing list",
    highlights: [
      { word: 'click', weight: 0.00102, type: 'phishing' },
      { word: 'viagra', weight: 0.00101, type: 'phishing' },
      { word: 'professional', weight: 0.00085, type: 'phishing' },
      { word: 'pharmacy', weight: 0.00085, type: 'phishing' },
      { word: 'lose', weight: 0.00081, type: 'phishing' },
      { word: 'http', weight: 0.00078, type: 'phishing' },
      { word: 'medical', weight: 0.00076, type: 'phishing' },
      { word: 'opt', weight: 0.00067, type: 'phishing' },
      { word: 'marketing', weight: 0.00065, type: 'phishing' },
      { word: 'energy', weight: 0.00027, type: 'legitimate' },
      { word: 'obesity', weight: 0.00016, type: 'legitimate' },
      { word: 'take', weight: 0.00013, type: 'legitimate' },
      { word: 'will', weight: 0.00013, type: 'legitimate' },
      { word: 'growing', weight: 0.00012, type: 'legitimate' },
      { word: 'im', weight: 0.00011, type: 'legitimate' }
    ]
  },
  {
    id: 3, // Index 1599: Royal Meds (Class 1)
    text: "Royal Meds your online pharmacy NO Physician's Consultation Fee that's a saving of $125. We Offer The Widest Range Of Prescription Drugs Available Through Online Ordering. Your online pharmacy for FDA approved drugs through a online consultation. No more embarrassing doctor visits, we offers confidential ordering online. Take advantage of some of best prices available on the Internet! We offer the widest range of drugs available through online ordering. By using Internet Technology, we allow you to get what you need anonymously and conveniently. All packages shipped via FedEx in plain packaging to protect your privacy. Click here to see how Royal Meds can help you VIAGRA only $7 per dose and discounts on refills. Viagra (Sexual) Intended for men with erectile dysfunction (ED), it helps most men to get and keep an erection when they get sexually excited. No need to go through embarrassing, stressful situation anymore, you can now get Viagra from the comfort of your home. Click Here Phentermine (Weight-Loss) Obesity weight loss drug. It enables people to burn more fat doing nothing, stimulating your nervous system. You will feel the difference! It will give you more energy, you will become more active! It's an appetite suppressant, you'll burn fat easier and eat less. It is a both safe and effective treatment to lose weight. Click Here Zyban (Stop Smoking) is the first nicotine-free pill that, as part of a comprehensive program from your health care professional, can help you stop smoking. Its prescription medicine available only from your health care professional for smokers 18 and older. Click Here PROPECIA (Hair Loss) is a medical breakthrough. The first pill that effectively treats male pattern hair loss on the vertex (at top of head) and anterior mid-scalp area. Click Here Celebrex (Pain-Relief) Provides relief from the pain and inflammation suffered by those who have adult rheumatoid arthritis. It was introduced to the United States in early 1999. It is the number one arthritis medication used in the United States. Clebrex basically reduces the pain arthritis sufferers have. They then can go through daily activities like standing, walking, lying down, sitting up and climbing stairs much easier. Click Here Valtrex (Treatment for Herpes) suppresses future genital herpes outbreaks for those diagnosed with the disease. It is a once-a-day prescription medication that works by disrupting the virus from reproducing itself. There is no cure for genital herpes but Valtrex helps stall the virus from spreading through the body. Taking Valtrex has effectively stalled herpes for up to one year. The recommended dosage for Valtrex is one gram, once a day. Valtrex should only by used by adults with regular immune systems. Click Here Unsubscribe Information: This email is intended to be a benefit to the recipient. If you would like to opt-out and not receive any more marketing information please click here . Your address will be removed within 24hrs. We sincerely apologize for any inconvenience.ggtqgvmmpykgbwgf",
    highlights: [
      { word: 'click', weight: 0.00072, type: 'phishing' },
      { word: 'viagra', weight: 0.00054, type: 'phishing' },
      { word: 'prescription', weight: 0.00053, type: 'phishing' },
      { word: 'meds', weight: 0.00052, type: 'phishing' },
      { word: 'professional', weight: 0.00049, type: 'phishing' },
      { word: 'weight', weight: 0.00047, type: 'phishing' },
      { word: 'smoking', weight: 0.00045, type: 'phishing' },
      { word: 'loss', weight: 0.00043, type: 'phishing' },
      { word: 'pain', weight: 0.00043, type: 'phishing' },
      { word: 'virus', weight: 0.00041, type: 'phishing' },
      { word: 'marketing', weight: 0.00039, type: 'phishing' },
      { word: 'used', weight: 0.00020, type: 'legitimate' },
      { word: 'year', weight: 0.00016, type: 'legitimate' },
      { word: 'address', weight: 0.00013, type: 'legitimate' },
      { word: 'doing', weight: 0.00004, type: 'legitimate' }
    ]
  },
  {
    id: 4, // Index 1422: Long distance (Class 1)
    text: "Hi: Have you been paying too much for your home or business long distance? Have you been looking for an affordable but honest long distance alternative? We are offering Fiber optic Long distance for as low as $9.95 per month! Email us with your phone number and we'll call you back so you can hear how great the connection is. Six plans to choose from including a travel plan. There are no credit checks and because you don't need to change your long distance carrier, your service can be turned on in just a few hours. Distributors needed! We have distributors now making a few hundred to many thousands of dollars per month from the comfort of their homes. Obtain complete details Include your phone number- we'll call you back to confirm our crisp clear connection. To be removed: click here2032UFYD2-959lOlR2290WEYy6-444nUHE5892loyf3-037iQUI9771WgxC8-113WmiB1248QRl70--DeathToSpamDeathToSpamDeathToSpam-- ------------------------------------------------------- This sf.net email is sponsored by:ThinkGeek Welcome to geek heaven. http://thinkgeek.com/sf _______________________________________________ Spamassassin-Sightings mailing list Spamassassin-Sightings@lists.sourceforge.net https://lists.sourceforge.net/lists/listinfo/spamassassin-sightings",
    highlights: [
      { word: 'sightings', weight: 0.044, type: 'phishing' },
      { word: 'click', weight: 0.026, type: 'phishing' },
      { word: 'deathtospamdeathtospamdeathtospam', weight: 0.023, type: 'phishing' },
      { word: 'distance', weight: 0.022, type: 'legitimate' },
      { word: 'email', weight: 0.020, type: 'phishing' },
      { word: 'low', weight: 0.018, type: 'phishing' },
      { word: 'removed', weight: 0.018, type: 'phishing' },
      { word: 'number', weight: 0.015, type: 'legitimate' },
      { word: 'hours', weight: 0.014, type: 'phishing' },
      { word: 'choose', weight: 0.013, type: 'phishing' },
      { word: 'spamassassin', weight: 0.012, type: 'legitimate' },
      { word: 'list', weight: 0.012, type: 'legitimate' },
      { word: 'long', weight: 0.011, type: 'phishing' },
      { word: 'plan', weight: 0.010, type: 'legitimate' },
      { word: 'll', weight: 0.009, type: 'legitimate' }
    ]
  },
  {
    id: 5, // Index 1993: EMM System (Class 1)
    text: "Greetings!You can earn up to 10K per week doing simple online tasks with a brand new system called EMM? It blows MLM away:No selling... No recruiting... No explaining or answering difficult questions... No 3-way calling... No begging friends and family... No rejection... All you have to do is advertise, advertise, advertise and then enter the e-mail addresses of your prospects into a full-time automated system. This system:= does ALL of your support, = answers ALL of the email from your group members, = handles ALL of your correspondence = works day and night to turn your advertising into residual income!It is absolutely phenomenal!To get the full details, please put \"Send EMM Info\" in subject line, then send to the address below:mailto:tim1@btamail.net.cn?subject=Send_EMM_InfoThank You! PS: Removal Instruction - Just click below and send. mailto:ma5s@yahoo.com?subject=Remove_Please 9779kl5",
    highlights: [
      { word: 'click', weight: 0.037, type: 'phishing' },
      { word: 'removal', weight: 0.028, type: 'phishing' },
      { word: 'brand', weight: 0.022, type: 'phishing' },
      { word: 'called', weight: 0.021, type: 'legitimate' },
      { word: 'earn', weight: 0.020, type: 'phishing' },
      { word: 'questions', weight: 0.020, type: 'legitimate' },
      { word: 'send', weight: 0.020, type: 'phishing' },
      { word: 'simple', weight: 0.018, type: 'phishing' },
      { word: 'calling', weight: 0.017, type: 'phishing' },
      { word: 'addresses', weight: 0.017, type: 'phishing' },
      { word: 'email', weight: 0.016, type: 'phishing' },
      { word: 'does', weight: 0.016, type: 'legitimate' },
      { word: 'income', weight: 0.016, type: 'phishing' },
      { word: 'doing', weight: 0.013, type: 'legitimate' },
      { word: 'difficult', weight: 0.012, type: 'legitimate' }
    ]
  },
  {
    id: 6, // Index 358: Spanish (Class 0)
    text: "interesting hola a todos . my name is uriel bautista . soy de huatulco y los oigo frecuentemente , y kisiera saber ke si es la direccion correcta del programa tribuna libre . disculpen es la primera vez ke les escribo y por favor saluden a la familia martinez bautista - . el programa esta interesante . . . . . . . . . . . . . . . . . felicidades . . . . . . . . . . . . . . . . . . pd . respondanme el correo por favor para poder contactarnos mas frecuentemente . tlmsn . más útil cada día haz clic aquí",
    highlights: [
      { word: 'la', weight: 0.495, type: 'legitimate' },
      { word: 'es', weight: 0.230, type: 'phishing' },
      { word: 'interesting', weight: 0.182, type: 'legitimate' },
      { word: 'para', weight: 0.151, type: 'phishing' },
      { word: 'por', weight: 0.135, type: 'phishing' },
      { word: 'el', weight: 0.125, type: 'phishing' },
      { word: 'les', weight: 0.103, type: 'legitimate' },
      { word: 'los', weight: 0.086, type: 'phishing' },
      { word: 'del', weight: 0.080, type: 'legitimate' },
      { word: 'favor', weight: 0.022, type: 'phishing' },
      { word: 'my', weight: 0.007, type: 'phishing' },
      { word: 'correcta', weight: 0.007, type: 'legitimate' },
      { word: 'de', weight: 0.006, type: 'phishing' },
      { word: 'kisiera', weight: 0.005, type: 'legitimate' },
      { word: 'saber', weight: 0.004, type: 'legitimate' }
    ]
  },
  {
    id: 7, // Index 3457: Bloomfield (Class 0)
    text: "fw : bloomfield to gallup pigging fyi - i spoke with john sturn yesterday and he is coordinating the pigging of the sj lateral to see if the efficiency of the drag reducing agent will increase . he says the pig run will not interrupt scheduled flows on the pipe . if the efficiency of the sj lateral does not increase from the pig run , then operations will look to reapply the dra . kim . - - - - - original message - - - - - from : jolly , rich sent : thursday , september 20 , 2001 3 : 59 pm to : sturn , john cc : asante , ben ; mcchane , bob ; roensch , david ; schoolcraft , darrell ; watson , kimberly ; alters , dennis subject : re : bloomfield to gallup pigging thanks john monday october 1 will work for me . rj from : john sturn on 09 / 20 / 2001 03 : 45 pm cdt to : ben asante / et & s / enron , rich jolly / et & s / enron @ enron , bob mcchane / npng / enron , david roensch / et & s / enron @ enron , darrell schoolcraft / et & s / enron cc : kimberly watson / et & s / enron , dennis alters / fgt / enron subject : bloomfield to gallup pigging to recap past conversations , bloomfield to gallup flow efficiency has decreased since application of the drag reducing agent last february . it is planned to try and raise the flow efficiency by running a pig . if this does not restore the flow efficiency and capacity , re - application of the dra will be considered . how does pigging bloomfield to gallup the first week in october sound ? darrell pointed out that would provide a week ' s run time on the gallup unit and be after a rotor inspection scheduled for september 29 . i suggest the teams ensure a pig is ready and make any other preparations necessary to run the pig . the afternoon of monday , october 1 , a conference call would be held . if there were no complications with gallup or any other issues , the pig run would be scheduled for wednesday or thursday . if you see any problems with this or have any other suggestions , please let me know . also please let me know if having the conference call at 2 : 00 p . m . , cst , monday , october 1 , would work for you , and if not , then what time would be good . i will plan on sending out the conference number and code next monday , september 24 . thanks , john",
    highlights: [
      { word: 'enron', weight: 0.00094, type: 'legitimate' },
      { word: 'monday', weight: 0.00093, type: 'legitimate' },
      { word: 'september', weight: 0.00089, type: 'legitimate' },
      { word: 'john', weight: 0.00087, type: 'legitimate' },
      { word: 'thanks', weight: 0.00086, type: 'legitimate' },
      { word: 'does', weight: 0.00083, type: 'legitimate' },
      { word: 'run', weight: 0.00081, type: 'legitimate' },
      { word: 'thursday', weight: 0.00075, type: 'legitimate' },
      { word: 'original', weight: 0.00073, type: 'legitimate' },
      { word: 'conference', weight: 0.00070, type: 'legitimate' },
      { word: 'et', weight: 0.00068, type: 'legitimate' },
      { word: 'agent', weight: 0.00066, type: 'phishing' },
      { word: 'watson', weight: 0.00025, type: 'phishing' },
      { word: 'that', weight: 0.00021, type: 'phishing' },
      { word: 'good', weight: 0.00013, type: 'phishing' }
    ]
  },
  {
    id: 8, // Index 370: GMM (Class 0)
    text: "re : fw : gmm - 30 mar 2001 jeff , the newsletter is addressed to a wide audience in enron , not exclusively one group . we are providing forward interest rate foreign exchange curves to multiple units of enron to revalue our assets . maureen and gwen spend of lot of time answering questions regarding countries like argentina , korea , brazil , etc . the newsletter can be used as a reference in answering many of those questions . vince from : jeffrey a shankman / enron @ enronxgate on 04 / 02 / 2001 01 : 52 pm to : vince j kaminski / hou / ect @ ect cc : subject : fw : gmm - 30 mar 2001 this report is not great . i only like the g - 7 bank info and the weekly economic table . any thoughts ? jeff - - - - - original message - - - - - from : koepke , gwyn on behalf of maureen raymond / lon / ect @ enron sent : monday , april 02 , 2001 11 : 05 am to : hickerson , gary ; shahi , pushkar ; stuart , william ; delage , darren ; su , ellen ; martina angelova / lon / ect @ ect ; mcfarland , trena ; hess , jurgen ; kaminski , vince ; fraser , jennifer ; mehrer , anna ; sgibner @ enron . com ; gmcclel @ enron . com ; staley , stuart ; harora @ enron . com ; boyt , eric ; dallmann , shane ; armstrong , aaron ; allario , john ; reed , andrea v . ; joverdy @ enron . com ; mead , paul ; sherriff , john ; harper , richard ; mcgowan , kevin ; reck , daniel ; beyer , michael ; ruffcorn , kevin ; hudler , cindy ; ruane , mark ; heu , mog ; mcleish , alex ; mahoney , chris ; whalley , greg ; alkhayat , alhamd ; haggerty , john ; beck , sally ; profir , diana ; kristal , yana ; clara carrington / hou / ect @ enron ; jshankm @ enron . com ; foti , david ; ferlic , suzanne ; mckeever , tom ; thorn , terence ; dupre , david ; boettcher , thomas ; farmer , michael ; hutchinson , michael ; gold , joe ; fraser , bridget ; dwivedi , vikas ; raghavan , suresh ; bhavna pandya / hou / ect @ enron ; hill , andrew ; lawyer , larry ; egmcontent ; ibarra , felipe ; nordstrom , mary subject : gmm - 30 mar 2001 please find attached this week ' s global markets monitor , dated march 30 . maureen raymond - castaneda and gwyn koepke",
    highlights: [
      { word: 'enron', weight: 0.00347, type: 'legitimate' },
      { word: 'vince', weight: 0.00292, type: 'legitimate' },
      { word: 'john', weight: 0.00236, type: 'legitimate' },
      { word: 'ect', weight: 0.00222, type: 'legitimate' },
      { word: 'questions', weight: 0.00220, type: 'legitimate' },
      { word: 'kevin', weight: 0.00210, type: 'legitimate' },
      { word: 'monday', weight: 0.00200, type: 'legitimate' },
      { word: 'sally', weight: 0.00165, type: 'legitimate' },
      { word: 'david', weight: 0.00163, type: 'legitimate' },
      { word: 'kaminski', weight: 0.00159, type: 'legitimate' },
      { word: 'greg', weight: 0.00152, type: 'legitimate' },
      { word: 'gary', weight: 0.00135, type: 'legitimate' },
      { word: 'bank', weight: 0.00093, type: 'phishing' },
      { word: 'jennifer', weight: 0.00084, type: 'phishing' },
      { word: 'anna', weight: 0.00074, type: 'phishing' }
    ]
  },
  {
    id: 9, // Index 151: AEP (Class 0)
    text: "conflict with aep / cp & l over tex - mex presidential permit no action needed on your part , but just in case you hear something through the grapevine , here is current situation : summary - aep / cp & l have economic interests in the brownsville area which are best served if we do not locate our tie in brownsville public utility board ' s ( bpub ' s ) service territory and bpub does not obtain the system upgrades which would be justified by our tie . - aep is trying to stall our presidential permit application and to coerce us into moving the tie onto their system . - bpub sees this as an attack on their interests and is planning to challenge aep . - 5 mou ' s have been signed with customers and discussions are continuing with 12 others , who have all been met and have expressed interest . - we are optimistic that the pp will be issued and standard ercot treatments will prevail , but we will likely be delayed to sometime early next year . history - enron filed presidential permit ( pp ) application - cp & l ( owned by aep ) intervened against the application and raised some technical issues - doe asked enron and cp & l / aep to meet and resolve issues - meeting occurred between enron and cp & l / aep . general technical solutions were identified , with specific solutions to be determined through a sps study . - enron drafted a letter outlining the points covered in our meeting with cp & l / aep , intending to have the letter signed by both of us and forwarded to doe , requesting that doe proceed with issuing the pp . - ap & l / aep refused to sign the letter and are now arguing that an sps scheme is not sufficient for the proposed tie location ( although aep operates under sps elsewhere within ercot , they argue that ours is a special case . independent opinion ( and our own ) is that there is little merit to the cp & l / aep position ) . - aep have told us that if we move the tie to a location west of brownsville ( on aep ' s proposed line expansion ) , that they would drop all opposition . - aep / cp & l have since approached the ercot board arguing that cost studies should be done on alternate tie locations and the system cost impact thereof . - aep / cp & l have submitted to the ercot board that enron should be responsible for any costs associated building the tie at anything other than the least - cost ( system perspective ) location . current status - brownsville ( bpub ) are incensed at aep / cp & l ' s behaviour and are planning the following actions : - making submission to ercot that : - bpub informed ercot of the project 14 months ago and no further studies or committee reviews by ercot should be necessary . - no changes to current ercot procedures should be contemplated and the tie should be viewed as a firm , native bpub load - bpub lawyer is drafting letter to go to aep demanding that aep honor their previous agreement with bpub to be supportive of bpub projects . - bpub ceo , engineer and lawyer will visit puc - t next week to make the case that no special arrangements should be made with regard to enron or bpub needing to pick up additional system costs - at this point , bpub is highly motivated and is striking out with an aggressive representation of their position as there are implications for them which go beyond the current project . furthermore , there is little love lost between bpub and aep . - although moving to the aep - proposed location would remove aep as an obstacle , we would lose the work done to date preparing with bpub and would probably make an enemy of bpub . - bob franks ( regulatory ) , scott laidlaw ( engineering / technical ) and myself are coordinating with bracewell patterson ( regulatory advisors ) on enron ' s strategy and level of support for bpub .",
    highlights: [
      { word: 'enron', weight: 0.034, type: 'legitimate' },
      { word: 'meeting', weight: 0.011, type: 'legitimate' },
      { word: 'pp', weight: 0.009, type: 'legitimate' },
      { word: 'case', weight: 0.008, type: 'legitimate' },
      { word: 'planning', weight: 0.008, type: 'legitimate' },
      { word: 'summary', weight: 0.008, type: 'legitimate' },
      { word: 'issues', weight: 0.008, type: 'legitimate' },
      { word: 'building', weight: 0.007, type: 'legitimate' },
      { word: 'project', weight: 0.007, type: 'legitimate' },
      { word: 'aep', weight: 0.006, type: 'phishing' },
      { word: 'location', weight: 0.005, type: 'phishing' },
      { word: 'lose', weight: 0.005, type: 'phishing' },
      { word: 'remove', weight: 0.002, type: 'phishing' },
      { word: 'solutions', weight: 0.002, type: 'phishing' },
      { word: 'current', weight: 0.002, type: 'phishing' }
    ]
  },
  {
    id: 10, // Index 2748: Steve Cohen (Class 0)
    text: "question from steve cohen , negotiation skills company please see steve ' s e - mail below for more details . if you are interested in participating , please let me know , or contact steve cohen directly at tnsc @ negotiationskills . com , or 978 . 927 . 6775 . thanks , grace - - - - - original message - - - - - dear grace , i hope your summer is giving you some opportunities to enjoy nice weather . we ' ve had an interesting inquiry from a national business publication ; they ' re looking for stories about people who ' ve been through our negotiation courses who feel the course played a significant role in their professional - - or personal lives . can you think of anyone from enron / portland who might be interested in being interviewed ? please give my regards to the ' gang ' . i look forward to working with you again . cordially , steve - - steven p . cohen the negotiation skills company , inc . p . o . box 172 pride ' s crossing , ma 01965 + 1 978 927 6775 fax + 1 978 921 4447 www . negotiationskills . com",
    highlights: [
      { word: 'enron', weight: 0.057, type: 'legitimate' },
      { word: 'steve', weight: 0.044, type: 'legitimate' },
      { word: 'thanks', weight: 0.037, type: 'legitimate' },
      { word: 'interesting', weight: 0.031, type: 'legitimate' },
      { word: 'question', weight: 0.022, type: 'legitimate' },
      { word: 'working', weight: 0.020, type: 'legitimate' },
      { word: 'think', weight: 0.018, type: 'legitimate' },
      { word: 'hope', weight: 0.018, type: 'legitimate' },
      { word: 'know', weight: 0.017, type: 'legitimate' },
      { word: 'lives', weight: 0.017, type: 'legitimate' },
      { word: 'professional', weight: 0.025, type: 'phishing' },
      { word: 'company', weight: 0.017, type: 'phishing' },
      { word: 'skills', weight: 0.017, type: 'phishing' },
      { word: 'personal', weight: 0.016, type: 'phishing' },
      { word: 'interested', weight: 0.015, type: 'phishing' }
    ]
  }
];
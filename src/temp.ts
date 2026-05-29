export interface IGToken {
  word: string;
  score: number;
}

export interface Word2VecEmailData {
  id: number;
  text: string; // 👈 Add the text property here
  explainingTowards: "phishing" | "safe";
  tokens: IGToken[];
}

// 1. Data Dummy Khusus untuk Tutorial
export const tutorialW2VData: Word2VecEmailData = {
  id: 0,
  text: `RE: Craig - Thanks for the feedback. 

I've received similar reports from other research customers on various non-recurring and on-going projects Elena has been able to help out on. 

The most recent member of a long line of Rice MBA candidates who have "made a difference" in our research efforts, Elena will be staying with us throughout this next (her final) year. She'll be working the morning shift. 

Please let us know if she, or any other member of our group can assist you in any way. 

- Mike`,
  explainingTowards: "safe",
  tokens: [
    /* Keep your existing tutorial tokens here */
    { word: "re", score: 0.0 },
    { word: ":", score: 0.0 },
    { word: "craig", score: 0.0 },
    // ...
  ],
};

// 2. Data 10 Soal Asli Word2Vec
export const word2vecData: Word2VecEmailData[] = [
  {
    id: 1,
    text: `I'm in hospital!!! 

I've had a burst appendix and pneumonia. Call Debbie for details on 936-321-8836 (home) or 936-499-4996 (cell) or me directly on 713-598-0732 (but I share a room with someone, so we may disturb them....

Steve
----------------
Tel: 713-345-8980
Cell: 713-598-0732`,
    explainingTowards: "safe",
    tokens: [
      /* Keep your existing id: 1 tokens here */
    ],
  },
  {
    id: 2,
    text: `RE: Without a prescription - Viagra / Phentermine / Propecia / Zyban 

Yotgy Royal Meds Your Online Pharmacy
· Click Here for FDA approved drugs through an online consultation.

No more embarrassing doctor visits, we offer confidential ordering online. Take advantage of some of best prices available on the internet! We offer the widest range of drugs available through online ordering. Such as:

Less than $7.00 per dose Viagra intended for men with erectile dysfunction (ED), it helps most men to get and keep an erection when they get sexually excited. No need to go through embarrassing, stressful situation anymore, you can now get Viagra from the comfort of your home. Click Here

Phentermine obesity weight loss drug. It enables people to burn more fat doing nothing, stimulating your nervous system. You will feel the difference! It will give you more energy, you will become more active! It's an appetite suppressant, you'll burn fat easier and eat less. It is a both safe and effective treatment to lose weight. Click Here

Zyban is the first nicotine-free pill that, as part of a comprehensive program from your health care professional, can help you stop smoking. Its prescription medicine available only from your health care professional for smokers 18 and older. Click Here

Propecia is a medical breakthrough. The first pill that effectively treats male pattern hair loss on the vertex (at top of head) and anterior mid-scalp area. Click Here

Unsubscribe Information: 
This email is intended to be a benefit to the recipient. If you would like to opt-out and not receive any more marketing information please click on the following link http://194.44.46.21/remove.php. Your address will be removed within 24 hrs. We sincerely apologize for any inconvenience.`,
    explainingTowards: "phishing",
    tokens: [
      /* Keep your existing id: 2 tokens here */
    ],
  },
  {
    id: 3,
    text: `Royal Meds - Your online pharmacy
NO Physician's Consultation Fee that's a saving of $125. We Offer The Widest Range Of Prescription Drugs Available Through Online Ordering.

Your online pharmacy for FDA approved drugs through a online consultation.
No more embarrassing doctor visits, we offer confidential ordering online.
Take advantage of some of best prices available on the Internet!

By using Internet Technology, we allow you to get what you need anonymously and conveniently. All packages shipped via FedEx in plain packaging to protect your privacy. Click here to see how Royal Meds can help you:

VIAGRA only $7 per dose and discounts on refills.
Intended for men with erectile dysfunction (ED), it helps most men to get and keep an erection when they get sexually excited. No need to go through embarrassing, stressful situation anymore, you can now get Viagra from the comfort of your home. Click Here

Phentermine (Weight-Loss)
Obesity weight loss drug. It enables people to burn more fat doing nothing, stimulating your nervous system. You will feel the difference! It will give you more energy, you will become more active! It's an appetite suppressant, you'll burn fat easier and eat less. It is a both safe and effective treatment to lose weight. Click Here

Zyban (Stop Smoking)
Is the first nicotine-free pill that, as part of a comprehensive program from your health care professional, can help you stop smoking. Its prescription medicine available only from your health care professional for smokers 18 and older. Click Here

PROPECIA (Hair Loss)
Is a medical breakthrough. The first pill that effectively treats male pattern hair loss on the vertex (at top of head) and anterior mid-scalp area. Click Here

Celebrex (Pain-Relief)
Provides relief from the pain and inflammation suffered by those who have adult rheumatoid arthritis. It was introduced to the United States in early 1999. It is the number one arthritis medication used in the United States. Celebrex basically reduces the pain arthritis sufferers have. They then can go through daily activities like standing, walking, lying down, sitting up and climbing stairs much easier. Click Here

Valtrex (Treatment for Herpes)
Suppresses future genital herpes outbreaks for those diagnosed with the disease. It is a once-a-day prescription medication that works by disrupting the virus from reproducing itself. There is no cure for genital herpes but Valtrex helps stall the virus from spreading through the body. Taking Valtrex has effectively stalled herpes for up to one year. The recommended dosage for Valtrex is one gram, once a day. Valtrex should only by used by adults with regular immune systems. Click Here`,
    explainingTowards: "phishing",
    tokens: [
      /* Keep your existing id: 3 tokens here */
    ],
  },
  {
    id: 4,
    text: `Hi: 

Have you been paying too much for your home or business long distance? Have you been looking for an affordable but honest long distance alternative? 

We are offering Fiber optic Long distance for as low as $9.95 per month! Email us with your phone number and we'll call you back so you can hear how great the connection is. Six plans to choose from including a travel plan. 

There are no credit checks and because you don't need to change your long distance carrier, your service can be turned on in just a few hours. 

Distributors needed! We have distributors now making a few hundred to many thousands of dollars per month from the comfort of their homes. Obtain complete details. Include your phone number - we'll call you back to confirm our crisp clear connection. 

To be removed: click here2032UFYD2-959lOlR2290WEYy6-444nUHE5892loyf3-037iQUI9771WgxC8-113WmiB1248QRl70`,
    explainingTowards: "phishing",
    tokens: [
      /* Keep your existing id: 4 tokens here */
    ],
  },
  {
    id: 5,
    text: `Greetings!

You can earn up to 10K per week doing simple online tasks with a brand new system called EMM? It blows MLM away:
No selling... 
No recruiting... 
No explaining or answering difficult questions... 
No 3-way calling... 
No begging friends and family... 
No rejection... 

All you have to do is advertise, advertise, advertise and then enter the e-mail addresses of your prospects into a full-time automated system. 

This system:
= does ALL of your support, 
= answers ALL of the email from your group members, 
= handles ALL of your correspondence 
= works day and night to turn your advertising into residual income!

It is absolutely phenomenal! To get the full details, please put "Send EMM Info" in subject line, then send to the address below:
mailto:tim1@btamail.net.cn?subject=Send_EMM_Info

Thank You! 

PS: Removal Instruction - Just click below and send. 
mailto:ma5s@yahoo.com?subject=Remove_Please 9779kl5`,
    explainingTowards: "phishing",
    tokens: [
      /* Keep your existing id: 5 tokens here */
    ],
  },
  {
    id: 6,
    text: `Interesting.

Hola a todos my name is [Name].

...de y los y saber ke si es la direccion del programa libre es la primera vez ke les y por favor a la familia martinez el programa esta.

PD: el correo por favor para poder mas m s til cada d a haz clic aqu`,
    explainingTowards: "phishing",
    tokens: [
      /* Keep your existing id: 6 tokens here */
    ],
  },
  {
    id: 7,
    text: `Subject: FW: Bloomfield to Gallup pigging

FYI - I spoke with John Sturn yesterday and he is coordinating the pigging of the SJ lateral to see if the efficiency of the drag reducing agent will increase. 

He says the pig run will not interrupt scheduled flows on the pipe. 

If the efficiency of the SJ lateral does not increase from the pig run, then operations will look to reapply the DRA. 

Kim. 

-----Original Message-----
From: Jolly, Rich 
Sent: Thursday, September 20, 2001 3:59 PM 
To: Sturn, John 
Cc: Asante, Ben; Mcchane, Bob; Roensch, David; Schoolcraft, Darrell; Watson, Kimberly; Alters, Dennis 
Subject: RE: Bloomfield to Gallup pigging 

Thanks John. Monday, October 1 will work for me. 

RJ 

-----Original Message-----
From: John Sturn 
Sent: Thursday, September 20, 2001 3:45 PM CDT 
To: Ben Asante/ET&S/Enron; Rich Jolly/ET&S/Enron@Enron; Bob Mcchane/NPNG/Enron; David Roensch/ET&S/Enron@Enron; Darrell Schoolcraft/ET&S/Enron 
Cc: Kimberly Watson/ET&S/Enron; Dennis Alters/FGT/Enron 
Subject: Bloomfield to Gallup pigging 

To recap past conversations, Bloomfield to Gallup flow efficiency has decreased since application of the drag reducing agent last February. 

It is planned to try and raise the flow efficiency by running a pig. 

If this does not restore the flow efficiency and capacity, re-application of the DRA will be considered.`,
    explainingTowards: "safe",
    tokens: [
      /* Keep your existing id: 7 tokens here */
    ],
  },
  {
    id: 8,
    text: `Subject: RE: FW: GMM - 30 Mar 2001 

Jeff, 

The newsletter is addressed to a wide audience in Enron, not exclusively one group. We are providing forward interest rate foreign exchange curves to multiple units of Enron to revalue our assets. 

Maureen and Gwen spend a lot of time answering questions regarding countries like Argentina, Korea, Brazil, etc. The newsletter can be used as a reference in answering many of those questions. 

Vince 

-----Original Message-----
From: Jeffrey A Shankman / Enron @ ENRONXGATE 
Sent: 04/02/2001 01:52 PM 
To: Vince J Kaminski / HOU / ECT @ ECT 
Subject: FW: GMM - 30 Mar 2001 

This report is not great. I only like the G-7 bank info and the weekly economic table. 
Any thoughts? 
Jeff `,
    explainingTowards: "safe",
    tokens: [
      /* Keep your existing id: 8 tokens here */
    ],
  },
  {
    id: 9,
    text: `Conflict with AEP / CP&L over Tex-Mex presidential permit.

No action needed on your part, but just in case you hear something through the grapevine, here is the current situation: 

SUMMARY 
- AEP / CP&L have economic interests in the Brownsville area which are best served if we do not locate our tie in Brownsville Public Utility Board's (BPUB's) service territory and BPUB does not obtain the system upgrades which would be justified by our tie. 
- AEP is trying to stall our presidential permit application and to coerce us into moving the tie onto their system. 
- BPUB sees this as an attack on their interests and is planning to challenge AEP. 
- 5 MOUs have been signed with customers and discussions are continuing with 12 others, who have all been met and have expressed interest. 
- We are optimistic that the PP will be issued and standard ERCOT treatments will prevail, but we will likely be delayed to sometime early next year. `,
    explainingTowards: "safe",
    tokens: [
      /* Keep your existing id: 9 tokens here */
    ],
  },
  {
    id: 10,
    text: `FW: Complaint Department

This is another FYI from my contact at Lyondell. There is another message from him to follow this one. Thanks, Jackie.

Forwarded by Jackie Young / HOU / ECT on 03/28/2001 10:00 AM
John S Allen on 03/27/2001 05:00 PM
To: Gregory W Wilson
cc: Roger W Ken, Jackie Young, Greg Mason, Anthony J
Subject: FW: Complaint Department

What a mess.

Original Message
From: John S Allen
Sent: Tuesday, March 27, 2001 4:00 PM
To: Travis E Graham
Subject: Complaint Department

I hear from Midcon this afternoon via voice mail. I understand that they were not too happy that they had relief valves blowing out, being that they were coming in with a fixed baseload of for today, and LCR had not notified that our present requirement couldn't handle that much.

I understand from Utilities this afternoon that the baseload with Midcon was cut due to LCR's limited requirements. I was also notified this evening that the planned maintenance on HPL has been extended through tomorrow, with Midcon again scheduled to come in with the baseload.

Thanks,
John S Allen
Lyondell-Citgo Refining LP
john.allen@lyondell-citgo.com`,
    explainingTowards: "safe",
    tokens: [
      /* Keep your existing id: 10 tokens here */
    ],
  },
];

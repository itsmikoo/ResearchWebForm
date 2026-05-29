import type { Highlight } from "../components/LimeEmailViewer";

export const tutorialEmailData: { text: string; highlights: Highlight[] } = {
  text: `RE: Craig - Thanks for the feedback. 

I've received similar reports from other research customers on various non-recurring and on-going projects Elena has been able to help out on. 

The most recent member of a long line of Rice MBA candidates who have "made a difference" in our research efforts, Elena will be staying with us throughout this next (her final) year. She'll be working the morning shift. 

Please let us know if she, or any other member of our group can assist you in any way. 

- Mike`,
  highlights: [
    { word: "research", weight: 0.0497, type: "legitimate" },
    { word: "thanks", weight: 0.0357, type: "legitimate" },
    { word: "research", weight: 0.0497, type: "legitimate" },
    { word: "thanks", weight: 0.0357, type: "legitimate" },
    { word: "member", weight: -0.0354, type: "phishing" },
    { word: "similar", weight: 0.0209, type: "legitimate" },
    { word: "candidates", weight: 0.0203, type: "legitimate" },
    { word: "working", weight: 0.0175, type: "legitimate" },
    { word: "difference", weight: 0.0169, type: "legitimate" },
    { word: "know", weight: 0.0161, type: "legitimate" },
    { word: "assist", weight: -0.016, type: "phishing" },
    { word: "going", weight: 0.0149, type: "legitimate" },
    { word: "year", weight: 0.0128, type: "legitimate" },
    { word: "recent", weight: 0.0125, type: "legitimate" },
    { word: "let", weight: 0.0121, type: "legitimate" },
    { word: "group", weight: 0.0104, type: "legitimate" },
    { word: "mike", weight: 0.0103, type: "legitimate" },
  ],
};

export interface EmailQuestionData {
  id: number;
  text: string;
  highlights: Highlight[];
}

export const emailData: EmailQuestionData[] = [
  {
    id: 1,
    text: `I'm in hospital!!! 

I've had a burst appendix and pneumonia. Call Debbie for details on 936-321-8836 (home) or 936-499-4996 (cell) or me directly on 713-598-0732 (but I share a room with someone, so we may disturb them....

Steve
----------------
Tel: 713-345-8980
Cell: 713-598-0732`,
    highlights: [
      { word: "steve", weight: 0.233, type: "legitimate" },
      { word: "tel", weight: 0.168, type: "phishing" },
      { word: "room", weight: 0.152, type: "legitimate" },
      { word: "directly", weight: 0.126, type: "legitimate" },
      { word: "details", weight: 0.108, type: "phishing" },
      { word: "hospital", weight: 0.103, type: "phishing" },
      { word: "share", weight: 0.096, type: "phishing" },
      { word: "cell", weight: 0.094, type: "legitimate" },
      { word: "home", weight: 0.051, type: "phishing" },
      { word: "ive", weight: 0.003, type: "legitimate" }, // Adjusted from "ve"
      { word: "them", weight: 0.002, type: "legitimate" },
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
This email is intended to be a benefit to the recipient. If you would like to opt-out and not receive any more marketing information please click on the following link http://194.44.46.21/remove.php. Your address will be removed within 24 hrs. We sincerely apologize for any inconvenience.

----
This sf.net email is sponsored by: Jabber - the world's fastest growing real-time communications platform! Don't just IM. Build it in! 
http://www.jabber.com/osdn/ximspamassassin-sightingsmailinglist`,
    highlights: [
      { word: "click", weight: 0.00102, type: "phishing" },
      { word: "viagra", weight: 0.00101, type: "phishing" },
      { word: "professional", weight: 0.00085, type: "phishing" },
      { word: "pharmacy", weight: 0.00085, type: "phishing" },
      { word: "lose", weight: 0.00081, type: "phishing" },
      { word: "http", weight: 0.00078, type: "phishing" },
      { word: "medical", weight: 0.00076, type: "phishing" },
      { word: "optout", weight: 0.00067, type: "phishing" }, // Adjusted from "opt"
      { word: "marketing", weight: 0.00065, type: "phishing" },
      { word: "energy", weight: 0.00027, type: "legitimate" },
      { word: "obesity", weight: 0.00016, type: "legitimate" },
      { word: "take", weight: 0.00013, type: "legitimate" },
      { word: "will", weight: 0.00013, type: "legitimate" },
      { word: "growing", weight: 0.00012, type: "legitimate" },
      { word: "im", weight: 0.00011, type: "legitimate" },
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
Suppresses future genital herpes outbreaks for those diagnosed with the disease. It is a once-a-day prescription medication that works by disrupting the virus from reproducing itself. There is no cure for genital herpes but Valtrex helps stall the virus from spreading through the body. Taking Valtrex has effectively stalled herpes for up to one year. The recommended dosage for Valtrex is one gram, once a day. Valtrex should only by used by adults with regular immune systems. Click Here

Unsubscribe Information:
This email is intended to be a benefit to the recipient. If you would like to opt-out and not receive any more marketing information please click here. Your address will be removed within 24hrs. We sincerely apologize for any inconvenience.ggtqgvmmpykgbwgf`,
    highlights: [
      { word: "click", weight: 0.00072, type: "phishing" },
      { word: "viagra", weight: 0.00054, type: "phishing" },
      { word: "prescription", weight: 0.00053, type: "phishing" },
      { word: "meds", weight: 0.00052, type: "phishing" },
      { word: "professional", weight: 0.00049, type: "phishing" },
      { word: "weight", weight: 0.00047, type: "phishing" },
      { word: "smoking", weight: 0.00045, type: "phishing" },
      { word: "loss", weight: 0.00043, type: "phishing" },
      { word: "pain", weight: 0.00043, type: "phishing" },
      { word: "virus", weight: 0.00041, type: "phishing" },
      { word: "marketing", weight: 0.00039, type: "phishing" },
      { word: "used", weight: 0.0002, type: "legitimate" },
      { word: "year", weight: 0.00016, type: "legitimate" },
      { word: "address", weight: 0.00013, type: "legitimate" },
      { word: "doing", weight: 0.00004, type: "legitimate" },
    ],
  },
  {
    id: 4,
    text: `Hi: 

Have you been paying too much for your home or business long distance? Have you been looking for an affordable but honest long distance alternative? 

We are offering Fiber optic Long distance for as low as $9.95 per month! Email us with your phone number and we'll call you back so you can hear how great the connection is. Six plans to choose from including a travel plan. 

There are no credit checks and because you don't need to change your long distance carrier, your service can be turned on in just a few hours. 

Distributors needed! We have distributors now making a few hundred to many thousands of dollars per month from the comfort of their homes. Obtain complete details. Include your phone number - we'll call you back to confirm our crisp clear connection. 

To be removed: click here2032UFYD2-959lOlR2290WEYy6-444nUHE5892loyf3-037iQUI9771WgxC8-113WmiB1248QRl70

--DeathToSpamDeathToSpamDeathToSpam-- 
------------------------------------------------------- 
This sf.net email is sponsored by: ThinkGeek Welcome to geek heaven. http://thinkgeek.com/sf 
_______________________________________________ 
Spamassassin-Sightings mailing list 
Spamassassin-Sightings@lists.sourceforge.net 
https://lists.sourceforge.net/lists/listinfo/spamassassin-sightings`,
    highlights: [
      { word: "sightings", weight: 0.044, type: "phishing" },
      { word: "click", weight: 0.026, type: "phishing" },
      {
        word: "deathtospamdeathtospamdeathtospam",
        weight: 0.023,
        type: "phishing",
      },
      { word: "distance", weight: 0.022, type: "legitimate" },
      { word: "email", weight: 0.02, type: "phishing" },
      { word: "low", weight: 0.018, type: "phishing" },
      { word: "removed", weight: 0.018, type: "phishing" },
      { word: "number", weight: 0.015, type: "legitimate" },
      { word: "hours", weight: 0.014, type: "phishing" },
      { word: "choose", weight: 0.013, type: "phishing" },
      { word: "spamassassin", weight: 0.012, type: "legitimate" },
      { word: "list", weight: 0.012, type: "legitimate" },
      { word: "long", weight: 0.011, type: "phishing" },
      { word: "plan", weight: 0.01, type: "legitimate" },
      { word: "ill", weight: 0.009, type: "legitimate" }, // Adjusted from "ll" to match "we'll"
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
    highlights: [
      { word: "click", weight: 0.037, type: "phishing" },
      { word: "removal", weight: 0.028, type: "phishing" },
      { word: "brand", weight: 0.022, type: "phishing" },
      { word: "called", weight: 0.021, type: "legitimate" },
      { word: "earn", weight: 0.02, type: "phishing" },
      { word: "questions", weight: 0.02, type: "legitimate" },
      { word: "send", weight: 0.02, type: "phishing" },
      { word: "simple", weight: 0.018, type: "phishing" },
      { word: "calling", weight: 0.017, type: "phishing" },
      { word: "addresses", weight: 0.017, type: "phishing" },
      { word: "email", weight: 0.016, type: "phishing" },
      { word: "does", weight: 0.016, type: "legitimate" },
      { word: "income", weight: 0.016, type: "phishing" },
      { word: "doing", weight: 0.013, type: "legitimate" },
      { word: "difficult", weight: 0.012, type: "legitimate" },
    ],
  },
  {
    id: 6, //213
    text: `RE: Saturday. 

Here new and good day: I tried to call your 3 three time but your phone is not available. I think you did a mistake during filling the form. 

Anyway, your mortgagge request # 8136 was appproved with 3.6, please reenter your info here and we will start asap. 

Thank you, 
Lavern Horton 
ljmej`,
    highlights: [
      { word: "request", weight: 0.252, type: "legitimate" },
      { word: "saturday", weight: 0.2028, type: "legitimate" },
      { word: "info", weight: -0.1722, type: "phishing" },
      { word: "think", weight: 0.1721, type: "legitimate" },
      { word: "mistake", weight: -0.1628, type: "phishing" },
      { word: "asap", weight: 0.1556, type: "legitimate" },
      { word: "good", weight: -0.1273, type: "phishing" },
      { word: "tried", weight: -0.0862, type: "phishing" },
      { word: "time", weight: 0.0731, type: "legitimate" },
      { word: "new", weight: -0.0598, type: "phishing" },
      { word: "available", weight: -0.0512, type: "phishing" },
      { word: "phone", weight: -0.0292, type: "phishing" },
      { word: "thank", weight: 0.0284, type: "legitimate" },
      { word: "form", weight: -0.0211, type: "phishing" },
      { word: "day", weight: 0.0144, type: "legitimate" },
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

If this does not restore the flow efficiency and capacity, re-application of the DRA will be considered. 

How does pigging Bloomfield to Gallup the first week in October sound? 

Darrell pointed out that would provide a week's run time on the Gallup unit and be after a rotor inspection scheduled for September 29. 

I suggest the teams ensure a pig is ready and make any other preparations necessary to run the pig. 

The afternoon of Monday, October 1, a conference call would be held. 

If there were no complications with Gallup or any other issues, the pig run would be scheduled for Wednesday or Thursday. 

If you see any problems with this or have any other suggestions, please let me know. 

Also please let me know if having the conference call at 2:00 p.m. CST, Monday, October 1, would work for you, and if not, then what time would be good. 

I will plan on sending out the conference number and code next Monday, September 24. 

Thanks,
John`,
    highlights: [
      { word: "monday", weight: 0.001, type: "legitimate" },
      { word: "enron", weight: 0.001, type: "legitimate" },
      { word: "september", weight: 0.001, type: "legitimate" },
      { word: "run", weight: 0.001, type: "legitimate" },
      { word: "john", weight: 0.001, type: "legitimate" },
      { word: "october", weight: 0.001, type: "legitimate" },
      { word: "thanks", weight: 0.001, type: "legitimate" },
      { word: "does", weight: 0.001, type: "legitimate" },
      { word: "scheduled", weight: 0.001, type: "legitimate" },
      { word: "thursday", weight: 0.001, type: "legitimate" },
      { word: "says", weight: 0.001, type: "legitimate" },
      { word: "flow", weight: 0.001, type: "legitimate" },
      { word: "et", weight: 0.001, type: "legitimate" },
      { word: "agent", weight: 0.0, type: "phishing" },
      { word: "watson", weight: 0.0, type: "phishing" },
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
Jeff 

-----Original Message-----
From: Koepke, Gwyn on behalf of Maureen Raymond / LON / ECT @ Enron 
Sent: Monday, April 02, 2001 11:05 AM 
To: Hickerson, Gary; Shahi, Pushkar; Stuart, William; Delage, Darren; Su, Ellen; Martina Angelova / LON / ECT @ ECT; McFarland, Trena; Hess, Jurgen; Kaminski, Vince; Fraser, Jennifer; Mehrer, Anna; sgibner@enron.com; gmcclel@enron.com; Staley, Stuart; harora@enron.com; Boyt, Eric; Dallmann, Shane; Armstrong, Aaron; Allario, John; Reed, Andrea V.; joverdy@enron.com; Mead, Paul; Sherriff, John; Harper, Richard; McGowan, Kevin; Reck, Daniel; Beyer, Michael; Ruffcorn, Kevin; Hudler, Cindy; Ruane, Mark; Heu, Mog; McLeish, Alex; Mahoney, Chris; Whalley, Greg; Alkhayat, Alhamd; Haggerty, John; Beck, Sally; Profir, Diana; Kristal, Yana; Clara Carrington / HOU / ECT @ Enron; jshankm@enron.com; Foti, David; Ferlic, Suzanne; McKeever, Tom; Thorn, Terence; Dupre, David; Boettcher, Thomas; Farmer, Michael; Hutchinson, Michael; Gold, Joe; Fraser, Bridget; Dwivedi, Vikas; Raghavan, Suresh; Bhavna Pandya / HOU / ECT @ Enron; Hill, Andrew; Lawyer, Larry; EGMContent; Ibarra, Felipe; Nordstrom, Mary 
Subject: GMM - 30 Mar 2001 

Please find attached this week's Global Markets Monitor, dated March 30. 

Maureen Raymond-Castaneda and Gwyn Koepke`,
    highlights: [
      { word: "enron", weight: 0.00347, type: "legitimate" },
      { word: "vince", weight: 0.00292, type: "legitimate" },
      { word: "john", weight: 0.00236, type: "legitimate" },
      { word: "ect", weight: 0.00222, type: "legitimate" },
      { word: "questions", weight: 0.0022, type: "legitimate" },
      { word: "kevin", weight: 0.0021, type: "legitimate" },
      { word: "monday", weight: 0.002, type: "legitimate" },
      { word: "sally", weight: 0.00165, type: "legitimate" },
      { word: "david", weight: 0.00163, type: "legitimate" },
      { word: "kaminski", weight: 0.00159, type: "legitimate" },
      { word: "greg", weight: 0.00152, type: "legitimate" },
      { word: "gary", weight: 0.00135, type: "legitimate" },
      { word: "bank", weight: 0.00093, type: "phishing" },
      { word: "jennifer", weight: 0.00084, type: "phishing" },
      { word: "anna", weight: 0.00074, type: "phishing" },
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
- We are optimistic that the PP will be issued and standard ERCOT treatments will prevail, but we will likely be delayed to sometime early next year. 

HISTORY 
- Enron filed Presidential Permit (PP) application.
- CP&L (owned by AEP) intervened against the application and raised some technical issues.
- DOE asked Enron and CP&L/AEP to meet and resolve issues.
- Meeting occurred between Enron and CP&L/AEP. General technical solutions were identified, with specific solutions to be determined through an SPS study. 
- Enron drafted a letter outlining the points covered in our meeting with CP&L/AEP, intending to have the letter signed by both of us and forwarded to DOE, requesting that DOE proceed with issuing the PP. 
- CP&L/AEP refused to sign the letter and are now arguing that an SPS scheme is not sufficient for the proposed tie location.
- AEP have told us that if we move the tie to a location west of Brownsville (on AEP's proposed line expansion), that they would drop all opposition. 
- AEP/CP&L have since approached the ERCOT board arguing that cost studies should be done on alternate tie locations.
- AEP/CP&L have submitted to the ERCOT board that Enron should be responsible for any costs associated building the tie at anything other than the least-cost location. 

CURRENT STATUS 
- Brownsville (BPUB) are incensed at AEP/CP&L's behaviour and are planning the following actions: 
  - Making submission to ERCOT that BPUB informed ERCOT of the project 14 months ago and no further studies should be necessary. 
  - BPUB lawyer is drafting a letter to go to AEP demanding that AEP honor their previous agreement to be supportive of BPUB projects. 
  - BPUB CEO, engineer and lawyer will visit PUC-T next week to make the case.
- At this point, BPUB is highly motivated and is striking out with an aggressive representation of their position. There is little love lost between BPUB and AEP. 
- Although moving to the AEP-proposed location would remove AEP as an obstacle, we would lose the work done to date preparing with BPUB and would probably make an enemy of BPUB. 
- Bob Franks (Regulatory), Scott Laidlaw (Engineering/Technical) and myself are coordinating with Bracewell Patterson (Regulatory advisors) on Enron's strategy and level of support for BPUB.`,
    highlights: [
      { word: "enron", weight: 0.034, type: "legitimate" },
      { word: "meeting", weight: 0.011, type: "legitimate" },
      { word: "pp", weight: 0.009, type: "legitimate" },
      { word: "case", weight: 0.008, type: "legitimate" },
      { word: "planning", weight: 0.008, type: "legitimate" },
      { word: "summary", weight: 0.008, type: "legitimate" },
      { word: "issues", weight: 0.008, type: "legitimate" },
      { word: "building", weight: 0.007, type: "legitimate" },
      { word: "project", weight: 0.007, type: "legitimate" },
      { word: "aep", weight: 0.006, type: "phishing" },
      { word: "location", weight: 0.005, type: "phishing" },
      { word: "lose", weight: 0.005, type: "phishing" },
      { word: "remove", weight: 0.002, type: "phishing" },
      { word: "solutions", weight: 0.002, type: "phishing" },
      { word: "current", weight: 0.002, type: "phishing" },
    ],
  },
  {
    id: 10,
    text: `Question from Steve Cohen, Negotiation Skills Company

Please see Steve's e-mail below for more details. If you are interested in participating, please let me know, or contact Steve Cohen directly at tnsc@negotiationskills.com, or 978.927.6775. 

Thanks, 
Grace 

-----Original Message-----
Dear Grace, 

I hope your summer is giving you some opportunities to enjoy nice weather. We've had an interesting inquiry from a national business publication; they're looking for stories about people who've been through our negotiation courses who feel the course played a significant role in their professional -- or personal lives. 

Can you think of anyone from Enron / Portland who might be interested in being interviewed? Please give my regards to the 'gang'. I look forward to working with you again. 

Cordially, 
Steve 

-- 
Steven P. Cohen 
The Negotiation Skills Company, Inc. 
P.O. Box 172 
Pride's Crossing, MA 01965 
+1 978 927 6775 
Fax +1 978 921 4447 
www.negotiationskills.com`,
    highlights: [
      { word: "enron", weight: 0.057, type: "legitimate" },
      { word: "steve", weight: 0.044, type: "legitimate" },
      { word: "thanks", weight: 0.037, type: "legitimate" },
      { word: "interesting", weight: 0.031, type: "legitimate" },
      { word: "question", weight: 0.022, type: "legitimate" },
      { word: "working", weight: 0.02, type: "legitimate" },
      { word: "think", weight: 0.018, type: "legitimate" },
      { word: "hope", weight: 0.018, type: "legitimate" },
      { word: "know", weight: 0.017, type: "legitimate" },
      { word: "lives", weight: 0.017, type: "legitimate" },
      { word: "professional", weight: 0.025, type: "phishing" },
      { word: "company", weight: 0.017, type: "phishing" },
      { word: "skills", weight: 0.017, type: "phishing" },
      { word: "personal", weight: 0.016, type: "phishing" },
      { word: "interested", weight: 0.015, type: "phishing" },
    ],
  },
];

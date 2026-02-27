const CourseDay = require("../models/CourseDay");

const day33SectionTwoContentEn = `Computer Class Day 33: MS PowerPoint Animation Tab

This document provides detailed notes on the Animation (and Transition) features in MS PowerPoint based on the Part-5 tutorial by GULAB GURU.

1. Introduction to Animations

The Animation Tab is often considered the "soul" of a presentation as it controls how the audience experiences the flow of information.

[00:00:19]

2. Slide Transitions

Transitions are effects that occur when moving from one slide to the next.

Applying a Transition: Select a slide and click on any transition effect in the gallery.

[00:04:11]

Removing a Transition: Select the slide and choose "No Transition."

[00:06:23]

Preview: Click the "Preview" button to see how the transition looks before presenting.

[00:04:20]

Transition Settings:

[00:07:45]

Transition Sound: Add sound effects (like applause, wind, or camera clicks) that play during the transition.

Transition Speed: Set the speed of the effect to Slow, Medium, or Fast.

[00:08:40]

Apply to All: Use this to make all slides in your presentation use the same transition, sound, and speed settings.

[00:09:16]

3. Advance Slide Settings

This group determines how you move to the next slide during a presentation.

[00:10:34]

On Mouse Click: The next slide only appears when you click the mouse or press a key.

Automatically After: The slide advances automatically after a specific number of seconds/minutes.

Tip: To make a "video-like" photo slideshow, uncheck "On Mouse Click," set a time (e.g., 2 seconds), and click Apply to All.

[00:12:04]

4. Custom Animations (For Text & Objects)

Unlike transitions (which apply to the whole slide), Custom Animations apply to specific elements like text boxes, images, or shapes.

[00:14:05]

A. The Four Types of Effects

[00:15:54]

Entrance: Controls how the object "enters" the slide (e.g., Fly In, Fade, Zoom).

Emphasis: Changes the object while it is on the slide to draw attention (e.g., Change Font Color, Grow/Shrink, Spin).

[00:20:41]

Exit: Controls how the object "leaves" the slide (e.g., Fly Out, Disappear).

[00:22:03]

Motion Paths: Moves the object along a specific pre-defined or custom-drawn path.

[00:22:55]

B. Managing Animations

Add Effect: Select an object, click "Add Effect," and choose from the categories above.

[00:15:54]

Animation Pane: The side window that lists all animations on the current slide in order. You can reorder or remove them here.

[00:18:09]

Speed & Timing: For each animation, you can set the speed (Very Slow to Very Fast) and when it starts (On Click, With Previous, or After Previous).

[00:18:30]

C. Motion Path Customization

[00:27:30]

Preset Paths: Circles, Spirals, Springs, etc.

Draw Custom Path: Use the "Curve" or "Freeform" tool to draw exactly where you want an object to move.

[00:29:20]

Path Editing: You can drag the points of a path to change its shape or destination.

[00:28:30]

5. Adding Sounds to Animations

You can add specific sounds to individual text or image animations:

Right-click the animation in the Custom Animation pane.

Select Effect Options.

Choose a sound from the "Sound" dropdown menu.

[00:23:32]

Key Shortcuts

Start Slideshow: F5

[00:06:38]

Exit Slideshow: Esc

[00:07:05]

Open PPT: Win + R -> powerpnt`;

const day33SectionTwoContentMr = `Computer Class Day 33: MS PowerPoint Animation Tab (मराठी)

या धड्यात MS PowerPoint मधील Animation आणि Transition टॅबचे सविस्तर स्पष्टीकरण आहे (GULAB GURU – Part‑5 वर आधारित).

1. Animations ची ओळख

Animation Tab प्रेझेंटेशनचा "प्राण" मानला जातो. प्रेक्षकांना मजकूर, चित्रे आणि कल्पना कशा क्रमाने आणि कशा स्टाईलमध्ये दिसतील हे इथे ठरते. [00:00:19]

2. Slide Transitions

Transition म्हणजे एका स्लाइडवरून पुढच्या स्लाइडवर जाताना दिसणारा इफेक्ट.

Transition लावणे: स्लाइड निवडा → Transition गॅलरीमधून कोणताही इफेक्ट क्लिक करा. [00:04:11]

Transition काढणे: स्लाइड निवडा → "No Transition" निवडा. [00:06:23]

Preview: 'Preview' बटणावर क्लिक करून तो इफेक्ट कसा दिसेल ते बघा. [00:04:20]

Transition Settings: [00:07:45]

- Transition Sound: स्लाइड बदलताना टाळ्या, वारा, कॅमेरा क्लिक असे साऊंड लावू शकता.
- Transition Speed: Slow / Medium / Fast वेग निवडा. [00:08:40]
- Apply to All: निवडलेला Transition, Sound आणि Speed सर्व स्लाइडसना एकाच वेळी लागू करतो. [00:09:16]

3. Advance Slide Settings

प्रेझेंटेशन दरम्यान पुढच्या स्लाइडवर कसे जायचे हे या गटातून ठरवता येते. [00:10:34]

- On Mouse Click: माऊस क्लिक किंवा की दाबल्यावरच पुढची स्लाइड येते.
- Automatically After: दिलेल्या सेकंद/मिनिटांनंतर स्लाइड आपोआप पुढे जाते.

Tip: फोटो स्लाइडशो "व्हिडिओ" सारखा चालवायचा असल्यास 'On Mouse Click' चे चिन्ह काढा, उदा. 2 सेकंद वेळ द्या आणि 'Apply to All' करा. [00:12:04]

4. Custom Animations (Text आणि Objects साठी)

Transition पूर्ण स्लाइडवर लागू होतो; Custom Animation मात्र विशिष्ट ऑब्जेक्टवर (टेक्स्ट बॉक्स, चित्र, shape इ.) लागू होतो. [00:14:05]

A. चार मुख्य इफेक्ट प्रकार [00:15:54]

- Entrance: ऑब्जेक्ट स्लाइडवर कसा "येईल" (Fly In, Fade, Zoom इ.).
- Emphasis: आधीपासून दिसत असलेल्या ऑब्जेक्टवर लक्ष वेधण्यासाठी बदल (रंग बदल, Grow/Shrink, Spin इ.). [00:20:41]
- Exit: ऑब्जेक्ट स्लाइडवरून कसा "जाईल" (Fly Out, Disappear इ.). [00:22:03]
- Motion Paths: ऑब्जेक्ट ठरावीक Path ने फिरवणे (रेडी‑मेड किंवा स्वतः काढलेला). [00:22:55]

B. Animations Management

- Add Effect: ऑब्जेक्ट निवडा → 'Add Effect' → योग्य श्रेणी आणि इफेक्ट निवडा. [00:15:54]
- Animation Pane: बाजूला दिसणाऱ्या पॅनमध्ये त्या स्लाइडवरील सर्व Animations क्रमाने दिसतात; इथेच क्रम बदलू किंवा इफेक्ट काढू शकतो. [00:18:09]
- Speed & Timing: प्रत्येक Animation साठी वेग (Very Slow ते Very Fast) आणि Start सेटिंग (On Click / With Previous / After Previous) ठरवू शकता. [00:18:30]

C. Motion Paths चे कस्टमायझेशन [00:27:30]

- Preset Paths: Circle, Spiral, Spring इ. तयार Paths.
- Draw Custom Path: Curve किंवा Freeform वापरून हवा तसा मार्ग काढा. [00:29:20]
- Path Editing: Path वरच्या points ड्रॅग करून मार्ग किंवा शेवटचे ठिकाण बदलू शकता. [00:28:30]

5. Animations सोबत Sound लावणे [00:23:32]

एखाद्या टेक्स्ट किंवा चित्राच्या Animation ला विशिष्ट Sound लावण्यासाठी:
- Animation Pane मध्ये त्या Animation वर Right‑Click करा.
- 'Effect Options' निवडा.
- 'Sound' ड्रॉपडाऊन मधून हवा तो Sound निवडा.

Key Shortcuts (महत्वाचे शॉर्टकट)

- Start Slideshow (सुरुवातीपासून): F5 [00:06:38]
- Exit Slideshow: Esc [00:07:05]
- PowerPoint उघडणे: Win + R → powerpnt`;

const day34SectionTwoContentEn = `Computer Class Day 34: MS PowerPoint Slide Show Tab 

This document provides detailed notes on the features of the Slide Show Tab in MS PowerPoint, as explained in the Part-6 tutorial by GULAB GURU.

1. Start Slide Show Group

This group controls how you initiate the presentation for your audience.

From Beginning (Shortcut: F5): Starts the presentation from the very first slide, regardless of which slide you are currently editing. 

$$00:01:51$$

From Current Slide (Shortcut: Shift + F5): Starts the presentation from the slide you have currently selected. This is useful for testing specific parts of your deck. 

$$00:03:00$$

Custom Slide Show: Allows you to create a specific sequence of slides. 

$$00:04:09$$

Example: If you have 10 slides but only want to show slides 1, 3, and 5 to a specific audience, you can create a "Custom Show" with just those slides.

2. Set Up Group

These tools help you configure how the presentation behaves and which slides are visible.

Set Up Slide Show: Opens a dialog box for advanced configurations: 

$$00:06:40$$

Loop continuously until 'Esc': The presentation will restart from the beginning automatically after the last slide until you press the Escape key.

Show Type: Choose between "Full Screen" or "Windowed" (Individual Window) mode.

Show Slides: Select a range (e.g., show only slides 1 to 4).

Hide Slide: Allows you to keep a slide in your file but skip it during the actual presentation. Hidden slides appear "dimmed" in the sidebar with a slash through the slide number. 

$$00:09:50$$

Rehearse Timings: A practice mode that records how long you spend on each slide. 

$$00:11:35$$

PowerPoint tracks the time spent per slide and total time.

Upon exiting, you can save these timings to have the presentation advance automatically based on your rehearsal.

Record Narration: Use this to record your voice/audio directly into the presentation. 

$$00:15:12$$

Use Rehearsed Timings: A checkbox that enables or disables the automatic slide advancement you recorded during your rehearsal. 

$$00:14:05$$

3. Monitors Group

Settings for how the presentation is displayed on external screens or projectors. 

$$00:15:40$$

Resolution: You can set the screen resolution (e.g., 1080p). It is generally recommended to keep this at "Use Current Resolution" for the best compatibility.

Presenter View: (Mentioned as related to monitor setup) Allows the speaker to see notes and upcoming slides on one screen while the audience sees only the current slide on the projector.

Key Shortcuts Summary

F5: Start from the beginning.

Shift + F5: Start from the current slide.

Esc: Exit the slide show.`;

const day35SectionTwoContentEn = `Computer Class Day 35: MS PowerPoint Review Tab

This document provides detailed notes on the features of the Review Tab in MS PowerPoint, as explained in the Part-7 tutorial by GULAB GURU.

1. Proofing Group

These tools help ensure your presentation is professional and error-free.

Spelling (Shortcut: F7): [00:00:42]

Automatically detects misspelled words (indicated by a red zigzag line).

Options:

Change/Change All: Replaces the error with a suggested correct spelling.

Ignore/Ignore All: Removes the warning if you know the spelling is correct (common for names).

Add to Dictionary: Adds the word to the internal dictionary so it is never marked as an error again. [00:04:33]

Research: Search for definitions or information related to a selected word (requires internet). [00:06:12]

Thesaurus: Find synonyms (words with similar meanings) for a selected word. [00:07:07]

2. Language & Translation

Translate: [00:07:31]

Translates words, sentences, or entire paragraphs into different languages (e.g., English to Hindi).

Note: An internet connection is required for this feature to work. [00:09:00]

Language: Set the default proofing language for the spelling checker. [00:09:13]

3. Comments Group

Used for collaboration and feedback during the review process. [00:09:51]

New Comment: Add a sticky note to a specific slide or object to provide feedback. [00:10:51]

Edit Comment: Modify an existing note.

Delete: Remove the selected comment or all comments in the presentation. [00:13:08]

Previous/Next: Quickly navigate through the comments in the deck. [00:13:20]

Show/Hide Markup: Toggle the visibility of the comment icons on the slides. [00:13:51]

4. Protect Group (Security)

Protect Presentation: [00:14:18]

Restrict permissions using digital rights or passwords.

How to Add a Password (via Save As): [00:15:19]

Go to Save As.

Click the Tools button near the Save button.

Select General Options.

Set a "Password to open" and/or a "Password to modify".

Re-enter passwords to confirm and save.

Read-Only Mode: If a user knows the "Open" password but not the "Modify" password, they can open the file as "Read-Only" to view it without making changes. [00:16:55]

Important Takeaways

Collaboration: Comments are essential when multiple people are working on the same file.

Accuracy: Always run a Spelling check before finalizing a presentation.

Security: Use the "General Options" under Save As to password-protect sensitive data.`;

const day35SectionTwoContentMr = `Computer Class Day 35: MS PowerPoint Review Tab (मराठी)

या धड्यात MS PowerPoint मधील Review टॅबचे फीचर्स समजावले आहेत (GULAB GURU – Part‑7 वर आधारित).

1. Proofing Group

या गटातील साधने प्रेझेंटेशन प्रोफेशनल आणि चुका‑मुक्त ठेवण्यासाठी मदत करतात.

Spelling (Shortcut: F7) [00:00:42]

- चुकीचे शब्द ओळखून त्यांच्या खाली लाल झिगझॅग रेषा दाखवते.

मुख्य पर्याय:

- Change / Change All: चुकीचा शब्द सुचवलेल्या योग्य शब्दाने बदलतो.
- Ignore / Ignore All: नावांसारख्या शब्दांचे स्पेलिंग योग्य असेल तर इशारा काढून टाकतो.
- Add to Dictionary: निवडलेला शब्द इंटरनल डिक्शनरीत कायमचा जोडतो; पुढे तो चुकीचा म्हणून दाखवला जात नाही. [00:04:33]

Research: निवडलेल्या शब्दाबद्दल अर्थ/माहिती शोधण्यासाठी (इंटरनेट लागते). [00:06:12]

Thesaurus: निवडलेल्या शब्दासाठी समानार्थी (Synonyms) शब्द शोधतो. [00:07:07]

2. Language आणि Translation

Translate [00:07:31]

- शब्द, वाक्य किंवा पूर्ण परिच्छेद दुसऱ्या भाषेत (उदा. English → Hindi) अनुवाद करतो.
- हे फीचर वापरण्यासाठी इंटरनेट कनेक्शन आवश्यक आहे. [00:09:00]

Language: Spelling Checker कोणत्या भाषेचा वापर करेल (Proofing Language) ते सेट करते. [00:09:13]

3. Comments Group

एकाच प्रेझेंटेशनवर अनेक लोक काम करत असताना प्रतिक्रिया देण्यासाठी हा गट वापरतात. [00:09:51]

- New Comment: कोणत्याही स्लाइडवर किंवा ऑब्जेक्टवर स्टिकी‑नोट सारखा कमेंट लावता येतो. [00:10:51]
- Edit Comment: आधीचा कमेंट बदलणे.
- Delete: निवडलेला कमेंट किंवा सर्व कमेंट्स काढून टाकणे. [00:13:08]
- Previous / Next: प्रेझेंटेशनमधील वेगवेगळ्या कमेंट्समध्ये पटकन पुढे‑मागे जाणे. [00:13:20]
- Show/Hide Markup: स्लाइडवर दिसणारे कमेंट आयकॉन्स दाखवणे किंवा लपवणे. [00:13:51]

4. Protect Group (Security)

Protect Presentation [00:14:18]

- फाइलवर पासवर्ड किंवा Rights वापरून परवानग्या मर्यादित करता येतात.

Save As मधून Password कसा लावायचा? [00:15:19]

1) Save As डायलॉग उघडा.
2) Save बटणाजवळील Tools बटण क्लिक करा.
3) General Options निवडा.
4) "Password to open" आणि/किंवा "Password to modify" टाइप करा.
5) पासवर्ड पुन्हा टाइप करून कन्फर्म करा आणि फाइल सेव्ह करा.

Read‑Only Mode: ज्या युजरकडे फक्त "Open" पासवर्ड आहे पण "Modify" पासवर्ड नाही, तो फाइल Read‑Only मोडमध्ये उघडून बघू शकतो पण बदल करू शकत नाही. [00:16:55]

महत्त्वाचे निष्कर्ष (Important Takeaways)

- Collaboration: एकाच फाइलवर टीममध्ये काम करताना Comments खूप उपयोगी ठरतात.
- Accuracy: प्रेझेंटेशन फायनल करण्यापूर्वी नेहमी Spelling Check (F7) चालवा.
- Security: संवेदनशील डेटा असलेल्या प्रेझेंटेशनसाठी Save As → Tools → General Options मधून पासवर्ड लावणे सुरक्षित आहे.`;

const day34SlideShowNotesEn = `This document provides detailed notes on the features of the Slide Show Tab in MS PowerPoint, as explained in the Part-6 tutorial by GULAB GURU.

1. Start Slide Show Group

This group controls how you initiate the presentation for your audience.

From Beginning (Shortcut: F5): Starts the presentation from the very first slide, regardless of which slide you are currently editing. [00:01:51]

From Current Slide (Shortcut: Shift + F5): Starts the presentation from the slide you have currently selected. This is useful for testing specific parts of your deck. [00:03:00]

Custom Slide Show: Allows you to create a specific sequence of slides. [00:04:09]

Example: If you have 10 slides but only want to show slides 1, 3, and 5 to a specific audience, you can create a "Custom Show" with just those slides.

2. Set Up Group

These tools help you configure how the presentation behaves and which slides are visible.

Set Up Slide Show: Opens a dialog box for advanced configurations: [00:06:40]

Loop continuously until 'Esc': The presentation will restart from the beginning automatically after the last slide until you press the Escape key.

Show Type: Choose between "Full Screen" or "Windowed" (Individual Window) mode.

Show Slides: Select a range (e.g., show only slides 1 to 4).

Hide Slide: Allows you to keep a slide in your file but skip it during the actual presentation. Hidden slides appear "dimmed" in the sidebar with a slash through the slide number. [00:09:50]

Rehearse Timings: A practice mode that records how long you spend on each slide. [00:11:35]

PowerPoint tracks the time spent per slide and total time.

Upon exiting, you can save these timings to have the presentation advance automatically based on your rehearsal.

Record Narration: Use this to record your voice/audio directly into the presentation. [00:15:12]

Use Rehearsed Timings: A checkbox that enables or disables the automatic slide advancement you recorded during your rehearsal. [00:14:05]

3. Monitors Group

Settings for how the presentation is displayed on external screens or projectors. [00:15:40]

Resolution: You can set the screen resolution (e.g., 1080p). It is generally recommended to keep this at "Use Current Resolution" for the best compatibility.

Presenter View: (Mentioned as related to monitor setup) Allows the speaker to see notes and upcoming slides on one screen while the audience sees only the current slide on the projector.

Key Shortcuts Summary

F5: Start from the beginning.

Shift + F5: Start from the current slide.

Esc: Exit the slide show.`;

const day34SectionTwoContentMr = `Computer Class Day 34: MS PowerPoint Slide Show Tab (मराठी)

या धड्यात MS PowerPoint मधील Slide Show टॅबचे फीचर्स समजावले आहेत (GULAB GURU – Part‑6 वर आधारित).

1. Start Slide Show गट

हा गट प्रेझेंटेशन प्रेक्षकांसमोर कसे सुरू करायचे ते नियंत्रित करतो.

- From Beginning (Shortcut: F5): कोणतीही स्लाइड एडिट होत असली तरी स्लाइड नंबर 1 पासून प्रेझेंटेशन सुरू होते. [00:01:51]
- From Current Slide (Shortcut: Shift + F5): सध्या निवडलेल्या स्लाइडपासूनच स्लाइडशो सुरू करतो – विशिष्ट भाग तपासण्यासाठी खूप उपयोगी. [00:03:00]
- Custom Slide Show: निवडक स्लाइड्सचा स्वतंत्र शो तयार करता येतो. [00:04:09]

उदा.: 20 स्लाइड्स असताना फक्त 1, 5 आणि 10 नंबरच्या स्लाइड्स दाखवायच्या असतील तर या स्लाइड्सचा एक Custom Show तयार करा.

2. Set Up गट

प्रेझेंटेशन कसे वागेल, कोणत्या स्लाइड्स दाखवायच्या/लपवायच्या हे सेट करण्यासाठी हा गट वापरला जातो.

- Set Up Slide Show: अॅडव्हान्स सेटिंग्स साठी डायलॉग बॉक्स उघडतो. [00:06:40]
- Loop continuously until 'Esc': शेवटची स्लाइड संपल्यानंतर प्रेझेंटेशन पुन्हा आपोआप पहिल्या स्लाइडपासून सुरू होते; Esc दाबेपर्यंत हे चालू राहते.
- Show Type: Full Screen (पूर्ण स्क्रीन) किंवा Windowed (वेगळ्या विंडोमध्ये) मोड निवडा.
- Show Slides: फक्त काही स्लाइड्स दाखवायच्या असतील तर त्यांच्या रेंज (उदा. 1 ते 4) निवडा.
- Hide Slide: स्लाइड फाइलमध्ये ठेवूनही प्रेझेंटेशनदरम्यान ती स्किप करता येते. हिडन स्लाइड थंबनेलवर नंबरच्या जवळ स्लॅश आणि हलके (dimmed) दिसते. [00:09:50]

- Rehearse Timings: सराव मोड; प्रत्येक स्लाइडवर तुम्ही किती वेळ थांबलात ते रेकॉर्ड होते. [00:11:35]
  - PowerPoint प्रति‑स्लाइड वेळ आणि एकूण वेळ नोंदवतो.
  - बाहेर पडल्यानंतर हे Timings सेव्ह केले तर स्लाइड्स सरावातील वेळेनुसार आपोआप पुढे सरकतात.

- Record Narration: तुमचा आवाज/कॉमेंटरी थेट प्रेझेंटेशनमध्ये रेकॉर्ड करण्यासाठी. [00:15:12]
- Use Rehearsed Timings: हे चेकबॉक्स ऑन असल्यावर Rehearse Timings मधील वेळेनुसार स्लाइड्स Auto Advance होतात; ऑफ केल्यावर परत Manual क्लिकनेच पुढे जातात. [00:14:05]

3. Monitors गट

बाह्य स्क्रीन, प्रोजेक्टर इत्यादीवर प्रेझेंटेशन कसे दिसेल हे इथे सेट केले जाते. [00:15:40]

- Resolution: स्क्रीन रिझॉल्यूशन (उदा. 1080p) ठरवते. साधारणपणे 'Use Current Resolution' ठेवणे सर्वात compatible ठरते.
- Presenter View: ट्रेनर/स्पीकरला त्यांच्या मॉनिटरवर Notes आणि पुढची स्लाइड दिसते, तर प्रेक्षकांना फक्त सध्याची स्लाइड प्रोजेक्टरवर दिसते.

Key Shortcuts सारांश

- F5: सुरुवातीपासून स्लाइडशो सुरू.
- Shift + F5: सध्याच्या स्लाइडपासून स्लाइडशो सुरू.
- Esc: स्लाइडशो बंद करून एडिटिंग व्यू मध्ये परत येण्यासाठी.`;

const day33ExamQuestions = [
  {
    questionEn:
      "What is the primary difference between a 'Slide Transition' and a 'Custom Animation'?",
    questionMr:
      "What is the primary difference between a 'Slide Transition' and a 'Custom Animation'?",
    options: [
      {
        textEn:
          "Custom Animations happen between slides, while Transitions happen on click.",
        textMr:
          "Custom Animations happen between slides, while Transitions happen on click."
      },
      {
        textEn:
          "Transitions apply to the entire slide appearing, while Custom Animations apply to specific objects like text or images.",
        textMr:
          "Transitions apply to the entire slide appearing, while Custom Animations apply to specific objects like text or images."
      },
      {
        textEn:
          "Transitions are only for text, while Custom Animations are for images.",
        textMr:
          "Transitions are only for text, while Custom Animations are for images."
      },
      {
        textEn:
          "Transitions can have sound, but Custom Animations cannot.",
        textMr:
          "Transitions can have sound, but Custom Animations cannot."
      }
    ],
    correctIndex: 1
  },
  {
    questionEn:
      "You have selected a 'Fade' transition for your first slide. How can you quickly apply this same effect, speed, and sound to every single slide in your presentation?",
    questionMr:
      "You have selected a 'Fade' transition for your first slide. How can you quickly apply this same effect, speed, and sound to every single slide in your presentation?",
    options: [
      {
        textEn: "Use the 'Format Painter' tool.",
        textMr: "Use the 'Format Painter' tool."
      },
      {
        textEn: "Manually select each slide and click 'Fade'.",
        textMr: "Manually select each slide and click 'Fade'."
      },
      {
        textEn:
          "Click the 'Apply to All' button in the Transition to This Slide group.",
        textMr:
          "Click the 'Apply to All' button in the Transition to This Slide group."
      },
      {
        textEn: "Press Ctrl + A and then F5.",
        textMr: "Press Ctrl + A and then F5."
      }
    ],
    correctIndex: 2
  },
  {
    questionEn:
      "If you want to create a photo slideshow that plays automatically like a video without you pressing any keys, which setting must you adjust?",
    questionMr:
      "If you want to create a photo slideshow that plays automatically like a video without you pressing any keys, which setting must you adjust?",
    options: [
      {
        textEn: "Uncheck 'On Mouse Click' and check 'Automatically After'.",
        textMr: "Uncheck 'On Mouse Click' and check 'Automatically After'."
      },
      {
        textEn: "Set the Transition Speed to 'Slow'.",
        textMr: "Set the Transition Speed to 'Slow'."
      },
      {
        textEn: "Choose a 'Motion Path' for the slide.",
        textMr: "Choose a 'Motion Path' for the slide."
      },
      {
        textEn: "Use the 'Rehearse Timings' feature only.",
        textMr: "Use the 'Rehearse Timings' feature only."
      }
    ],
    correctIndex: 0
  },
  {
    questionEn:
      "Which of the four Custom Animation types is designed to draw attention to an object that is already visible on the slide (e.g., making it spin or change color)?",
    questionMr:
      "Which of the four Custom Animation types is designed to draw attention to an object that is already visible on the slide (e.g., making it spin or change color)?",
    options: [
      { textEn: "Motion Path", textMr: "Motion Path" },
      { textEn: "Exit", textMr: "Exit" },
      { textEn: "Emphasis", textMr: "Emphasis" },
      { textEn: "Entrance", textMr: "Entrance" }
    ],
    correctIndex: 2
  },
  {
    questionEn:
      "Where can you view a list of all animations on the current slide, reorder them, and adjust their timing?",
    questionMr:
      "Where can you view a list of all animations on the current slide, reorder them, and adjust their timing?",
    options: [
      { textEn: "The Design Tab", textMr: "The Design Tab" },
      { textEn: "The Animation Pane", textMr: "The Animation Pane" },
      { textEn: "The Slide Sorter View", textMr: "The Slide Sorter View" },
      { textEn: "The Quick Access Toolbar", textMr: "The Quick Access Toolbar" }
    ],
    correctIndex: 1
  },
  {
    questionEn:
      "You want an image to move in a specific, irregular pattern that isn't a straight line or circle. Which tool should you use?",
    questionMr:
      "You want an image to move in a specific, irregular pattern that isn't a straight line or circle. Which tool should you use?",
    options: [
      { textEn: "Emphasis -> Spin", textMr: "Emphasis -> Spin" },
      { textEn: "Entrance -> Fly In", textMr: "Entrance -> Fly In" },
      {
        textEn: "Draw Custom Path -> Curve/Freeform",
        textMr: "Draw Custom Path -> Curve/Freeform"
      },
      { textEn: "Transition -> Morph", textMr: "Transition -> Morph" }
    ],
    correctIndex: 2
  },
  {
    questionEn:
      "How do you add a sound effect (like a 'Whoosh') to a specific text animation (e.g., when a bullet point flies in)?",
    questionMr:
      "How do you add a sound effect (like a 'Whoosh') to a specific text animation (e.g., when a bullet point flies in)?",
    options: [
      {
        textEn: "It is not possible to add sound to custom animations.",
        textMr: "It is not possible to add sound to custom animations."
      },
      { textEn: "Change the Transition Sound.", textMr: "Change the Transition Sound." },
      { textEn: "Insert -> Sound", textMr: "Insert -> Sound" },
      {
        textEn:
          "Right-click the animation in the Animation Pane and select 'Effect Options'.",
        textMr:
          "Right-click the animation in the Animation Pane and select 'Effect Options'."
      }
    ],
    correctIndex: 3
  },
  {
    questionEn:
      "Which key would you press to immediately stop a running slideshow and return to the editing view?",
    questionMr:
      "Which key would you press to immediately stop a running slideshow and return to the editing view?",
    options: [
      { textEn: "F5", textMr: "F5" },
      { textEn: "Spacebar", textMr: "Spacebar" },
      { textEn: "Enter", textMr: "Enter" },
      { textEn: "Esc", textMr: "Esc" }
    ],
    correctIndex: 3
  },
  {
    questionEn:
      "What does the 'Preview' button in the Animation tab allow you to do?",
    questionMr:
      "What does the 'Preview' button in the Animation tab allow you to do?",
    options: [
      {
        textEn:
          "See how the animations and transitions will look on the current slide without starting the full show.",
        textMr:
          "See how the animations and transitions will look on the current slide without starting the full show."
      },
      {
        textEn: "Save the presentation automatically.",
        textMr: "Save the presentation automatically."
      },
      {
        textEn: "View all slides in a grid.",
        textMr: "View all slides in a grid."
      },
      {
        textEn: "Print a draft of the slides.",
        textMr: "Print a draft of the slides."
      }
    ],
    correctIndex: 0
  },
  {
    questionEn:
      "If you want two animations to happen at the exact same time (e.g., text fades in while a picture spins), which Start setting should you use?",
    questionMr:
      "If you want two animations to happen at the exact same time (e.g., text fades in while a picture spins), which Start setting should you use?",
    options: [
      { textEn: "After Next", textMr: "After Next" },
      { textEn: "With Previous", textMr: "With Previous" },
      { textEn: "On Click", textMr: "On Click" },
      { textEn: "After Previous", textMr: "After Previous" }
    ],
    correctIndex: 1
  }
];

const day34ExamQuestions = [
  {
    questionEn:
      "Which keyboard shortcut starts the presentation from the very first slide, regardless of which slide is currently selected?",
    questionMr:
      "कोणता कीबोर्ड शॉर्टकट, सध्या कोणतीही स्लाइड निवडलेली असली तरी, प्रेझेंटेशन पहिल्या स्लाइडपासून सुरू करतो?",
    options: [
      { textEn: "Ctrl + S", textMr: "Ctrl + S" },
      { textEn: "Shift + F5", textMr: "Shift + F5" },
      { textEn: "F5", textMr: "F5" },
      { textEn: "Esc", textMr: "Esc" }
    ],
    correctIndex: 2
  },
  {
    questionEn:
      "If you are editing Slide 10 and want to preview the presentation starting specifically from Slide 10, which feature should you use?",
    questionMr:
      "तुम्ही Slide 10 एडिट करत आहात आणि प्रेझेंटेशनची झलक थेट Slide 10 पासून पाहायची आहे. कोणते फीचर वापराल?",
    options: [
      { textEn: "From Beginning", textMr: "From Beginning" },
      { textEn: "Custom Slide Show", textMr: "Custom Slide Show" },
      { textEn: "Rehearse Timings", textMr: "Rehearse Timings" },
      { textEn: "From Current Slide", textMr: "From Current Slide" }
    ],
    correctIndex: 3
  },
  {
    questionEn:
      "You have a presentation with 20 slides, but for a specific meeting, you only want to show slides 1, 5, and 10 without deleting the others. What is the best tool for this?",
    questionMr:
      "तुमच्याकडे २० स्लाइडचे प्रेझेंटेशन आहे, पण एका मीटिंगसाठी फक्त स्लाइड 1, 5 आणि 10 दाखवायच्या आहेत (इतर स्लाइड्स डिलीट न करता). यासाठी कोणते साधन सर्वात योग्य आहे?",
    options: [
      { textEn: "Custom Slide Show", textMr: "Custom Slide Show" },
      { textEn: "Hide Slide", textMr: "Hide Slide" },
      { textEn: "Set Up Slide Show", textMr: "Set Up Slide Show" },
      { textEn: "Rehearse Timings", textMr: "Rehearse Timings" }
    ],
    correctIndex: 0
  },
  {
    questionEn:
      "In the 'Set Up Slide Show' dialog, which option would you select to make the presentation repeat automatically after the last slide?",
    questionMr:
      "'Set Up Slide Show' डायलॉग मध्ये कोणता पर्याय निवडल्यावर शेवटची स्लाइड संपल्यानंतर प्रेझेंटेशन आपोआप पुन्हा सुरू होते?",
    options: [
      { textEn: "Show without narration", textMr: "Show without narration" },
      { textEn: "Show without animation", textMr: "Show without animation" },
      {
        textEn: "Present in Window",
        textMr: "Present in Window"
      },
      {
        textEn: "Loop continuously until 'Esc'",
        textMr: "Loop continuously until 'Esc'"
      }
    ],
    correctIndex: 3
  },
  {
    questionEn: "What happens when you apply the 'Hide Slide' feature to a slide?",
    questionMr: "'Hide Slide' फीचर एखाद्या स्लाइडवर लावल्यावर काय होते?",
    options: [
      {
        textEn:
          "The slide remains in the file but is skipped during the presentation.",
        textMr:
          "स्लाइड फाइलमध्ये राहते पण स्लाइडशो दरम्यान ती स्किप होते (दाखवली जात नाही)."
      },
      {
        textEn: "The slide is permanently deleted from the file.",
        textMr: "ती स्लाइड फाइलमधून कायमची डिलीट होते."
      },
      {
        textEn: "The slide appears black and white during the presentation.",
        textMr: "स्लाइडशो दरम्यान ती स्लाइड काळ्या‑पांढऱ्या रंगात दिसते."
      },
      {
        textEn: "The slide is moved to the end of the presentation.",
        textMr: "ती स्लाइड प्रेझेंटेशनच्या शेवटी हलवली जाते."
      }
    ],
    correctIndex: 0
  },
  {
    questionEn:
      "What is the primary purpose of the 'Rehearse Timings' feature?",
    questionMr:
      "'Rehearse Timings' फीचरचा मुख्य उपयोग काय आहे?",
    options: [
      { textEn: "To check for spelling errors.", textMr: "स्पेलिंगच्या चुका शोधण्यासाठी." },
      {
        textEn: "To record your voice over the slides.",
        textMr: "स्लाइड्सवर आपला आवाज (व्हॉइसओव्हर) रेकॉर्ड करण्यासाठी."
      },
      {
        textEn: "To record the time spent on each slide to automate advancement.",
        textMr:
          "प्रत्येक स्लाइडवर किती वेळ थांबतो ते रेकॉर्ड करून स्लाइड्स आपोआप पुढे जाण्यासाठी."
      },
      {
        textEn: "To change the resolution of the slide show.",
        textMr: "स्लाइडशोचे रिझॉल्यूशन बदलण्यासाठी."
      }
    ],
    correctIndex: 2
  },
  {
    questionEn:
      "Which tool would you use to add a voiceover or audio commentary directly to your presentation?",
    questionMr:
      "प्रेझेंटेशनमध्ये थेट व्हॉइसओव्हर किंवा ऑडिओ कॉमेंटरी रेकॉर्ड करण्यासाठी कोणते साधन वापराल?",
    options: [
      { textEn: "Custom Slide Show", textMr: "Custom Slide Show" },
      { textEn: "Rehearse Timings", textMr: "Rehearse Timings" },
      { textEn: "Record Narration", textMr: "Record Narration" },
      { textEn: "Hide Slide", textMr: "Hide Slide" }
    ],
    correctIndex: 2
  },
  {
    questionEn:
      "Which view allows the speaker to see notes and the upcoming slide on their screen while the audience only sees the current slide?",
    questionMr:
      "कोणत्या View मध्ये स्पीकरला आपल्या स्क्रीनवर Notes आणि पुढची स्लाइड दिसते, तर प्रेक्षकांना फक्त सध्याची स्लाइड दिसते?",
    options: [
      { textEn: "Slide Sorter View", textMr: "Slide Sorter View" },
      { textEn: "Presenter View", textMr: "Presenter View" },
      { textEn: "Normal View", textMr: "Normal View" },
      { textEn: "Reading View", textMr: "Reading View" }
    ],
    correctIndex: 1
  },
  {
    questionEn:
      "In the Monitors group, what is the recommended setting for 'Resolution' for best compatibility?",
    questionMr:
      "Monitors गटामधील 'Resolution' सेटिंगमध्ये सर्वात जास्त compatible कोणता पर्याय ठेवणे सुचवले जाते?",
    options: [
      { textEn: "1920x1080", textMr: "1920x1080" },
      { textEn: "Lowest Possible", textMr: "Lowest Possible" },
      { textEn: "Use Current Resolution", textMr: "Use Current Resolution" },
      { textEn: "640x480", textMr: "640x480" }
    ],
    correctIndex: 2
  },
  {
    questionEn:
      "Which key is universally used to exit a slide show and return to the PowerPoint editor?",
    questionMr:
      "स्लाइडशो बंद करून परत PowerPoint एडिटरमध्ये येण्यासाठी नेहमी कोणती key वापरतात?",
    options: [
      { textEn: "Esc", textMr: "Esc" },
      { textEn: "Spacebar", textMr: "Spacebar" },
      { textEn: "Enter", textMr: "Enter" },
      { textEn: "F5", textMr: "F5" }
    ],
    correctIndex: 0
  }
];

const day35ExamQuestions = [
  {
    questionEn:
      "Which visual indicator does PowerPoint use to alert you of a potential spelling error in your text?",
    questionMr:
      "मजकुरात स्पेलिंगची शक्य तितकी चूक आहे हे दाखवण्यासाठी PowerPoint कोणता व्हिज्युअल इशारा वापरतो?",
    options: [
      { textEn: "A yellow highlight", textMr: "पिवळा हायलाइट" },
      { textEn: "A red zigzag line", textMr: "लाल झिगझॅग रेषा" },
      { textEn: "A blue double underline", textMr: "निळी डबल अंडरलाइन" },
      { textEn: "A green wavy line", textMr: "हिरवी वेव्ही रेषा" }
    ],
    correctIndex: 1
  },
  {
    questionEn:
      "Which keyboard shortcut can you press to immediately launch the Spelling check feature?",
    questionMr:
      "Spelling Check लगेच सुरू करण्यासाठी कोणता कीबोर्ड शॉर्टकट दाबाल?",
    options: [
      { textEn: "Ctrl + S", textMr: "Ctrl + S" },
      { textEn: "Alt + F4", textMr: "Alt + F4" },
      { textEn: "F5", textMr: "F5" },
      { textEn: "F7", textMr: "F7" }
    ],
    correctIndex: 3
  },
  {
    questionEn:
      "You want to find a word that has a similar meaning to 'happy' to vary your vocabulary. Which tool in the Review tab should you use?",
    questionMr:
      "शब्दसंग्रह बदलण्यासाठी तुम्हाला 'happy' या शब्दासारखा अर्थ असलेला दुसरा शब्द हवा आहे. Review टॅबमधील कोणते साधन वापराल?",
    options: [
      { textEn: "Spelling", textMr: "Spelling" },
      { textEn: "Translate", textMr: "Translate" },
      { textEn: "Thesaurus", textMr: "Thesaurus" },
      { textEn: "Research", textMr: "Research" }
    ],
    correctIndex: 2
  },
  {
    questionEn:
      "What is a mandatory requirement for using the 'Translate' feature in PowerPoint?",
    questionMr:
      "PowerPoint मधील 'Translate' फीचर वापरण्यासाठी कोणती अट अनिवार्य आहे?",
    options: [
      { textEn: "You must save the file first.", textMr: "फाईल आधी सेव्ह केलेली असावी." },
      {
        textEn: "You must be in Slide Show mode.",
        textMr: "तुम्ही Slide Show मोडमध्ये असणे आवश्यक आहे."
      },
      {
        textEn: "You must select the entire slide.",
        textMr: "संपूर्ण स्लाइड सिलेक्ट केलेली असावी."
      },
      {
        textEn: "You must have an internet connection.",
        textMr: "इंटरनेट कनेक्शन असणे आवश्यक आहे."
      }
    ],
    correctIndex: 3
  },
  {
    questionEn:
      "You are reviewing a colleague's presentation and want to suggest a change without altering the actual slide content. Which feature should you use?",
    questionMr:
      "तुम्ही सहकाऱ्याचे प्रेझेंटेशन तपासत आहात आणि स्लाइडचा मूळ मजकूर न बदलता बदल सुचवायचा आहे. कोणते फीचर वापराल?",
    options: [
      { textEn: "Edit Slide", textMr: "Edit Slide" },
      { textEn: "New Comment", textMr: "New Comment" },
      { textEn: "Text Box", textMr: "Text Box" },
      { textEn: "Protect Presentation", textMr: "Protect Presentation" }
    ],
    correctIndex: 1
  },
  {
    questionEn:
      "How can you temporarily hide the comment icons on your slides so you can see the clean design?",
    questionMr:
      "स्लाइडवरील Comment आयकॉन्स तात्पुरते लपवून स्वच्छ डिझाइन पाहायचे असल्यास काय कराल?",
    options: [
      {
        textEn: "Use the 'Show/Hide Markup' toggle.",
        textMr: "'Show/Hide Markup' टॉगल वापरा."
      },
      { textEn: "Close the Review tab.", textMr: "Review टॅब बंद करा." },
      { textEn: "Delete all comments.", textMr: "सर्व Comments डिलीट करा." },
      { textEn: "Turn off the computer.", textMr: "कॉम्प्युटर बंद करा." }
    ],
    correctIndex: 0
  },
  {
    questionEn:
      "Where exactly do you go to set a password for opening or modifying your PowerPoint file?",
    questionMr:
      "PowerPoint फाईल उघडण्यासाठी किंवा बदलण्यासाठी पासवर्ड सेट करण्यासाठी नेमके कुठे जाल?",
    options: [
      { textEn: "Insert > Security", textMr: "Insert > Security" },
      { textEn: "Design > Format Background", textMr: "Design > Format Background" },
      { textEn: "Review Tab > Protect Presentation", textMr: "Review > Protect Presentation" },
      {
        textEn: "Save As > Tools > General Options",
        textMr: "Save As > Tools > General Options"
      }
    ],
    correctIndex: 3
  },
  {
    questionEn:
      "If you set a 'Password to modify' but share the 'Password to open' with a user, what will their experience be if they don't know the modify password?",
    questionMr:
      "\"Password to modify\" सेट केले आहे आणि फक्त \"Password to open\" इतरांना दिला आहे. वापरकर्त्याला Modify पासवर्ड माहिती नसेल तर त्यांचा अनुभव कसा असेल?",
    options: [
      {
        textEn: "They can edit and save changes normally.",
        textMr: "ते फाईलमध्ये हवे तसे बदल करून सेव्ह करू शकतात."
      },
      {
        textEn: "They cannot open the file at all.",
        textMr: "ते फाईल अजिबात उघडू शकत नाहीत."
      },
      {
        textEn: "The file will delete itself.",
        textMr: "फाईल आपोआप डिलीट होईल."
      },
      {
        textEn: "They can open the file as 'Read-Only'.",
        textMr: "ते फाईल 'Read‑Only' मोडमध्ये उघडू शकतात."
      }
    ],
    correctIndex: 3
  },
  {
    questionEn:
      "What is the function of the 'Add to Dictionary' option in the Spelling tool?",
    questionMr:
      "Spelling साधनामधील 'Add to Dictionary' या पर्यायाचे कार्य काय आहे?",
    options: [
      {
        textEn: "It ignores the error just for this one session.",
        textMr: "तो फक्त या सत्रासाठी चूक दुर्लक्षित करतो."
      },
      {
        textEn: "It translates the word into another language.",
        textMr: "तो शब्द इतर भाषेत अनुवादित करतो."
      },
      {
        textEn:
          "It adds the word to the internal database so it is never marked as an error again.",
        textMr:
          "तो शब्द इंटरनल डिक्शनरीमध्ये जोडतो, त्यामुळे पुढे तो चूक म्हणून दाखवला जात नाही."
      },
      {
        textEn: "It corrects the spelling of the word automatically.",
        textMr: "तो शब्दाचे स्पेलिंग आपोआप दुरुस्त करतो."
      }
    ],
    correctIndex: 2
  },
  {
    questionEn:
      "Which button allows you to jump sequentially from one piece of feedback to the next in a presentation?",
    questionMr:
      "प्रेझेंटेशनमधील एका कमेंट/Feedback वरून पुढच्या कमेंटकडे क्रमाने जाण्यासाठी कोणते बटण वापरता?",
    options: [
      { textEn: "New Comment", textMr: "New Comment" },
      { textEn: "Research", textMr: "Research" },
      { textEn: "Show Markup", textMr: "Show Markup" },
      { textEn: "Next Comment", textMr: "Next Comment" }
    ],
    correctIndex: 3
  }
];

const ensureCourseDays = async () => {
  await CourseDay.updateOne(
    { dayNumber: 33 },
    {
      $set: {
        "subsections.0.videoUrl":
          "https://youtu.be/b0lMv8De0fs?si=bOD9MkSy3INNkjHx",
        "subsections.1.contentEn": day33SectionTwoContentEn,
        "subsections.1.contentMr": day33SectionTwoContentMr,
        "exam.questions": day33ExamQuestions
      }
    }
  );
  await CourseDay.updateOne(
    { dayNumber: 34 },
    {
      $set: {
        "subsections.0.videoUrl":
          "https://youtu.be/c4qhyp0TvnM?si=Qqtcobd33TCozYRT",
        "subsections.1.contentEn": day34SectionTwoContentEn,
        "subsections.1.contentMr": day34SectionTwoContentMr,
        "exam.questions": day34ExamQuestions
      }
    }
  );
  await CourseDay.updateOne(
    { dayNumber: 35 },
    {
      $set: {
        "subsections.0.videoUrl":
          "https://youtu.be/bW5Uzq_5fwQ?si=77BhdkcJsDyikviD",
        "subsections.1.contentEn": day35SectionTwoContentEn,
        "subsections.1.contentMr": day35SectionTwoContentMr,
        "exam.questions": day35ExamQuestions
      }
    }
  );
  const count = await CourseDay.countDocuments();
  if (count >= 50) {
    await CourseDay.updateOne(
      { dayNumber: 2 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/rWMcD2QAk4Q?si=rd7DFr9g3BXZNXUg" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 2 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day 2: Basic Operations & Customization\n\n1. Opening Programs & Applications [00:00:58]\n\nThere are multiple ways to open a program:\n\nDesktop Icons: Move the cursor to the icon and Double-Click (left mouse button).\n\nRight-Click Method: Right-click the icon and select Open from the menu.\n\nTaskbar: For apps pinned to the taskbar, a Single-Click is sufficient.\n\nStart Menu: Click the Start button (bottom-left), find the app in the list, and click to open.\n\nSearch Bar: Type the name of the program in the search bar to find and open it quickly.\n\n2. Window Management [00:01:23]\n\nEvery open program window has three essential buttons in the top-right corner:\n\nMinimize (-): Hides the window and sends it to the taskbar. Click the taskbar icon to bring it back.\n\nMaximize/Restore (Square): Expands the window to full screen. If already full screen, it becomes \"Restore Down\" to return to the previous size.\n\nClose (X): Exits the program.\n\nResizing: To manually resize, hover the cursor over the edge or corner of the window until it turns into a double-arrow, then click and drag.\n\n3. Creating Desktop Shortcuts [00:03:15]\n\nTo keep frequently used files or apps on the desktop:\n\nApps: Start Menu -> Right-click the app -> More -> Open File Location. In the folder that opens, right-click the file -> Send to -> Desktop (create shortcut).\n\nFolders: Right-click on the desktop -> New -> Shortcut -> Browse for the folder/file -> Finish.\n\n4. Managing Desktop Icons [00:04:56]\n\nIf system icons like \"This PC\" or \"Recycle Bin\" are missing:\n\nRight-click the desktop -> Personalize.\n\nGo to Themes -> Desktop icon settings.\n\nCheck the boxes for the icons you want to show and click OK.\n\nResizing Icons: Right-click desktop -> View -> Select Large, Medium, or Small icons.\n\n5. Creating Folders [00:05:36]\n\nFolders help organize files:\n\nRight-click on a blank area of the desktop -> New -> Folder.\n\nType a name and press Enter.\n\n6. The \"Refresh\" Myth [00:06:26]\n\nNote: Refreshing the desktop (Right-click -> Refresh) does not speed up your computer.\n\nIt is used to update the screen display to reflect recent changes (like a renamed file or a newly moved icon).\n\n7. Taskbar Customization [00:06:56]\n\nPinning Apps: Search for an app -> Right-click -> Pin to taskbar.\n\nMoving Taskbar: Right-click taskbar -> Taskbar settings. Under \"Taskbar location on screen,\" choose Left, Top, Right, or Bottom.\n\nChanging Color: Settings -> Personalization -> Colors. Choose a theme color and ensure \"Start, taskbar, and action center\" is checked (Note: Windows must be in Dark Mode for this to apply).\n\n8. Themes and Wallpapers [00:10:36]\n\nWallpaper: Right-click desktop -> Personalize -> Choose a picture or browse for your own.\n\nThemes: Go to Themes in the personalization menu to change the overall look (colors, background, and sounds) of Windows at once.\n\nSummary of Day 2: Focused on navigating the Windows interface and personalizing the workspace for better productivity.",
          "subsections.1.contentMr":
            "Computer Class Day 2: Basic Operations & Customization\n\n१. प्रोग्राम आणि अॅप्स उघडणे [00:00:58]\n\nप्रोग्राम उघडण्यासाठी अनेक पद्धती आहेत:\n\nDesktop Icons: आयकॉनवर माऊस नेऊन डाव्या बटणाने Double‑Click करा.\n\nRight‑Click Method: आयकॉनवर Right‑Click करा आणि मेनू मधून Open निवडा.\n\nTaskbar: टास्कबारवर पिन केलेल्या अॅपसाठी Single‑Click पुरेसा आहे.\n\nStart Menu: खालच्या डावीकडे असलेला Start बटण क्लिक करा, यादीत अॅप शोधा आणि क्लिक करून उघडा.\n\nSearch Bar: शोध पट्टीत प्रोग्रामचे नाव टाइप करा आणि पटकन उघडा.\n\n२. Window Management [00:01:23]\n\nप्रत्येक उघडलेल्या विंडोच्या वरच्या उजव्या कोपऱ्यात तीन बटणे असतात:\n\nMinimize (-): विंडो लपवून टास्कबारवर पाठवते. टास्कबार आयकॉनवर क्लिक केल्यावर पुन्हा दिसते.\n\nMaximize/Restore (Square): विंडो पूर्ण स्क्रीन करते. आधीच पूर्ण स्क्रीन असेल तर Restore Down करून पूर्वीच्या आकारात आणते.\n\nClose (X): प्रोग्राम बंद करते.\n\nResizing: विंडोचा कडा/कोपरा धरून (डबल‑अॅरो दिसल्यावर) क्लिक करून ड्रॅग करा.\n\n३. Desktop Shortcuts तयार करणे [00:03:15]\n\nवारंवार वापरलेले फाइल/अॅप्स डेस्कटॉपवर ठेवण्यासाठी:\n\nApps: Start Menu -> अॅपवर Right‑Click -> More -> Open File Location. उघडलेल्या फोल्डरमध्ये फाइलवर Right‑Click -> Send to -> Desktop (create shortcut).\n\nFolders: डेस्कटॉपवर Right‑Click -> New -> Shortcut -> फोल्डर/फाइल Browse करा -> Finish.\n\n४. Desktop Icons व्यवस्थापन [00:04:56]\n\n\"This PC\" किंवा \"Recycle Bin\" असे सिस्टम आयकॉन्स दिसत नसतील तर:\n\nडेस्कटॉपवर Right‑Click -> Personalize.\n\nThemes -> Desktop icon settings.\n\nहवे असलेल्या आयकॉनचे बॉक्स निवडा आणि OK करा.\n\nResizing Icons: डेस्कटॉपवर Right‑Click -> View -> Large, Medium किंवा Small icons निवडा.\n\n५. Folders तयार करणे [00:05:36]\n\nफाइल्स व्यवस्थित ठेवण्यासाठी फोल्डर तयार करा:\n\nडेस्कटॉपवरील मोकळ्या जागेवर Right‑Click -> New -> Folder.\n\nनाव टाइप करा आणि Enter दाबा.\n\n६. \"Refresh\" बाबत गैरसमज [00:06:26]\n\nटीप: डेस्कटॉप Refresh केल्याने संगणक वेगवान होत नाही.\n\nतो फक्त स्क्रीनवरील बदल दाखवण्यासाठी वापरला जातो (उदा. फाइलचे नाव बदलले किंवा आयकॉन हलवले).\n\n७. Taskbar Customization [00:06:56]\n\nPinning Apps: अॅप शोधा -> Right‑Click -> Pin to taskbar.\n\nMoving Taskbar: टास्कबारवर Right‑Click -> Taskbar settings. \"Taskbar location on screen\" मध्ये Left/Top/Right/Bottom निवडा.\n\nChanging Color: Settings -> Personalization -> Colors. थीम कलर निवडा आणि \"Start, taskbar, and action center\" चेक करा (टीप: हे दिसण्यासाठी Windows Dark Mode मध्ये असणे आवश्यक आहे).\n\n८. Themes आणि Wallpapers [00:10:36]\n\nWallpaper: डेस्कटॉपवर Right‑Click -> Personalize -> चित्र निवडा किंवा Browse करा.\n\nThemes: Personalization मधील Themes मध्ये जाऊन एकाच वेळी रंग, बॅकग्राउंड आणि साऊंड्स बदलू शकता.\n\nDay 2 सारांश: Windows इंटरफेस वापरणे आणि कामासाठी सोयीचे कस्टमायझेशन करणे यावर लक्ष केंद्रित केले.",
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 2 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "You want to launch Google Chrome, which is pinned to your taskbar. How should you click the icon to open it?",
              questionMr: "टास्कबारवर पिन केलेला Google Chrome उघडायचा आहे. तो उघडण्यासाठी आयकॉनवर कसे क्लिक करावे?",
              options: [
                { textEn: "Double-click the icon quickly", textMr: "आयकॉनवर झटपट डबल-क्लिक करा" },
                { textEn: "Click and drag the icon to the desktop", textMr: "आयकॉन डेस्कटॉपवर ड्रॅग करा" },
                { textEn: "Single-click the icon with the left mouse button", textMr: "डाव्या माऊस बटणाने आयकॉनवर एकदा क्लिक करा" },
                { textEn: "Right-click and select 'Open'", textMr: "Right-click करून 'Open' निवडा" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "A program window is currently filling the entire screen. You want to see the desktop behind it without closing the program. Which button in the top-right corner should you use?",
              questionMr: "प्रोग्राम विंडो संपूर्ण स्क्रीन भरते आहे. प्रोग्राम बंद न करता मागे डेस्कटॉप पहायचा आहे. वरच्या उजव्या कोपऱ्यात कोणते बटण वापरावे?",
              options: [
                { textEn: "Restore Down (Square)", textMr: "Restore Down (Square)" },
                { textEn: "Minimize (-)", textMr: "Minimize (-)" },
                { textEn: "Close (X)", textMr: "Close (X)" },
                { textEn: "Refresh", textMr: "Refresh" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You inadvertently deleted the 'Recycle Bin' icon from your desktop. Where within the Settings menu should you go to restore it?",
              questionMr: "डेस्कटॉपवरून 'Recycle Bin' आयकॉन चुकून हटवला. तो परत आणण्यासाठी Settings मेनूमध्ये कुठे जावे?",
              options: [
                { textEn: "Personalize > Taskbar", textMr: "Personalize > Taskbar" },
                { textEn: "Personalize > Themes > Desktop icon settings", textMr: "Personalize > Themes > Desktop icon settings" },
                { textEn: "Apps > Default Apps", textMr: "Apps > Default Apps" },
                { textEn: "System > Display > Layout", textMr: "System > Display > Layout" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Your computer seems to be lagging slightly. A friend suggests you right-click the desktop and hit 'Refresh' to speed it up. Is this advice correct?",
              questionMr: "संगणक थोडा धीमा वाटतो. मित्र म्हणतो डेस्कटॉपवर right-click करून 'Refresh' दाबल्याने वेग वाढतो. हा सल्ला बरोबर आहे का?",
              options: [
                { textEn: "Yes, Refresh clears the RAM and makes the processor faster.", textMr: "होय, Refresh रॅम साफ करते आणि प्रोसेसर वेगवान करते." },
                { textEn: "No, Refresh is only used to change the desktop wallpaper.", textMr: "नाही, Refresh फक्त वॉलपेपर बदलण्यासाठी वापरतात." },
                { textEn: "Yes, but you must do it at least three times in a row.", textMr: "होय, पण ते एका ओळीत तीन वेळा करावे लागते." },
                { textEn: "No, Refresh only updates the display to show recent changes like renamed files.", textMr: "नाही, Refresh फक्त नाव बदललेल्या फाइल्स सारखे बदल दाखवण्यासाठी डिस्प्ले अपडेट करते." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You use Microsoft Excel daily. What is the most efficient way to keep it accessible on the bottom bar of your screen at all times?",
              questionMr: "तुम्ही दररोज Microsoft Excel वापरता. तो नेहमी स्क्रीनच्या खालच्या बारवर ठेवण्याचा सर्वात चांगला मार्ग कोणता?",
              options: [
                { textEn: "Open Excel and never close it", textMr: "Excel उघडा आणि कधी बंद करू नका" },
                { textEn: "Right-click the taskbar and select 'Lock the taskbar'", textMr: "टास्कबारवर right-click करून 'Lock the taskbar' निवडा" },
                { textEn: "Search for Excel, right-click it, and select 'Pin to taskbar'", textMr: "Excel शोधा, right-click करून 'Pin to taskbar' निवडा" },
                { textEn: "Drag the Excel icon from the Start menu to the center of the screen", textMr: "Start मेनूमधून Excel आयकॉन स्क्रीन मध्यभागी ड्रॅग करा" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You want to move your taskbar from the bottom of the screen to the right side. What is the first step?",
              questionMr: "टास्कबार खालून उजवीकडे हलवायचा आहे. पहिली पायरी काय?",
              options: [
                { textEn: "Right-click the desktop and select 'Display settings'", textMr: "डेस्कटॉपवर right-click करून 'Display settings' निवडा" },
                { textEn: "Go to Personalize > Colors", textMr: "Personalize > Colors वर जा" },
                { textEn: "Click and drag the taskbar immediately", textMr: "टास्कबार ताबडतोब क्लिक करून ड्रॅग करा" },
                { textEn: "Right-click the taskbar and open 'Taskbar settings'", textMr: "टास्कबारवर right-click करून 'Taskbar settings' उघडा" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You are trying to create a shortcut for a specific application on your desktop. After opening the 'File Location' of the app, what is the next step?",
              questionMr: "डेस्कटॉपवर एखाद्या अॅपचा shortcut तयार करायचा आहे. अॅपचे 'File Location' उघडल्यानंतर पुढची पायरी काय?",
              options: [
                { textEn: "Drag the file into the Recycle Bin", textMr: "फाइल Recycle Bin मध्ये ड्रॅग करा" },
                { textEn: "Right-click and select 'Properties'", textMr: "Right-click करून 'Properties' निवडा" },
                { textEn: "Double-click the file to open it", textMr: "फाइल उघडण्यासाठी डबल-क्लिक करा" },
                { textEn: "Right-click the file, select 'Send to', then 'Desktop (create shortcut)'", textMr: "फाइलवर right-click करून 'Send to' नंतर 'Desktop (create shortcut)' निवडा" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You want to organize several scattered files into a single location on your desktop. How do you create a new container for them?",
              questionMr: "डेस्कटॉपवर विखुरलेल्या अनेक फाइल्स एकाच ठिकाणी ठेवायच्या आहेत. त्यांसाठी नवीन फोल्डर कसे तयार करावा?",
              options: [
                { textEn: "Click the Start button and type 'New Folder'", textMr: "Start बटण क्लिक करून 'New Folder' टाइप करा" },
                { textEn: "Right-click a blank area and select 'View'", textMr: "मोकळ्या जागेवर right-click करून 'View' निवडा" },
                { textEn: "Right-click a blank area, select 'New', then 'Folder'", textMr: "मोकळ्या जागेवर right-click करून 'New' नंतर 'Folder' निवडा" },
                { textEn: "Select the files and press Delete", textMr: "फाइल्स निवडा आणि Delete दाबा" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You are trying to change the color of your taskbar and Start menu in Settings > Personalization > Colors, but the option is greyed out. What is likely the issue?",
              questionMr: "Settings > Personalization > Colors मध्ये टास्कबार आणि Start मेनूचा रंग बदलायचा आहे, पण पर्याय greyed out आहे. समस्या काय असू शकते?",
              options: [
                { textEn: "You have too many apps pinned to the taskbar", textMr: "टास्कबारवर खूप अॅप्स पिन केले आहेत" },
                { textEn: "You need to restart your computer first", textMr: "आधी संगणक रीस्टार्ट करावा लागेल" },
                { textEn: "Your desktop background is too bright", textMr: "डेस्कटॉप बॅकग्राउंड खूप उजळ आहे" },
                { textEn: "Windows is in Light Mode, and the color setting requires Dark Mode", textMr: "Windows Light Mode मध्ये आहे; रंग सेटिंगसाठी Dark Mode लागतो" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "To manually resize an open window, where should you place your mouse cursor?",
              questionMr: "उघडलेली विंडो स्वतः आकार बदलण्यासाठी माऊस कर्सर कुठे ठेवावा?",
              options: [
                { textEn: "On the edge or corner of the window until a double-arrow appears", textMr: "विंडोच्या कडेवर किंवा कोपऱ्यावर जोपर्यंत डबल-अॅरो दिसत नाही तोपर्यंत" },
                { textEn: "On the title bar at the very top", textMr: "अगदी वरच्या title bar वर" },
                { textEn: "On the taskbar icon", textMr: "टास्कबार आयकॉनवर" },
                { textEn: "In the center of the window", textMr: "विंडोच्या मध्यभागी" }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 1 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #1: Basic Computer Course Script\n\n[00:41] What You Will Learn Today\nThis is the first video of our computer training course. By the end of this lesson, you will know:\n- How to turn a computer on and off.\n- How to open programs and manage windows (minimize, maximize, close).\n- What the Start Menu and Taskbar are.\n- How to connect a laptop or computer to the internet.\n- The purpose of various Desktop Icons.\n\n[01:15] Hardware Introduction\nLet’s look at the computer setup:\na. UPS (Uninterruptible Power Supply): This is a battery backup. If the power goes out, the UPS provides temporary electricity so you can save your work. It also protects your PC from voltage fluctuations.\nb. Computer Cabinet (CPU Case): People often call this the \"CPU,\" but the CPU is actually a chip inside it. This cabinet houses the motherboard, RAM, hard disk, and power supply.\nc. Monitor: Also known as the display.\nd. Keyboard & Mouse: The mouse has a left button, a right button, and a scroll wheel for moving up and down on a page.\n\n[03:02] How to Start the Computer\na. Connect the UPS power cord to the wall socket and switch it on.\nb. Press the Power Button on the front of the UPS.\nc. Press the Power Button on the computer cabinet (the yellow button in this video).\nd. Turn on the Monitor power button.\ne. Wait for the \"booting\" process to finish until you see the home screen.\n\n[04:12] Understanding the Desktop\nThe first screen you see is the Desktop.\n- Icons: The small pictures on the left are shortcuts to programs like Chrome or folders. You can add or delete these.\n- Taskbar: The long bar at the bottom.\n- Start Button: The Windows icon on the bottom left. Clicking it opens the Start Menu.\n\n[05:48] Power Options\nInside the Start Menu, click the Power icon to see:\n- Sleep Mode: Turns off the display and uses very little power. Press any key to \"wake\" it up.\n- Shut Down: Completely turns off the computer.\n- Restart: Closes all apps and reboots the system. Note: Always save your data before restarting.\n\n[06:58] Search & Task View\n- Search Box: Located next to the Start button. Use it to find files, apps, or settings on your PC or the web.\n- Task View: Shows all currently open windows. You can also create a \"New Desktop\" here to organize different tasks.\n\n[08:28] System Tray & Internet\n- Hidden Icons: The small arrow shows background programs.\n- Battery: Shows your charge percentage.\n- Network/Internet: Click the globe/Wi‑Fi icon. Select your Wi‑Fi name, click Connect, enter your password, and click Next to access the internet.\n- Volume: A slider to adjust or mute your speakers.\n\n[11:03] Notification Area & Action Center\n- Notification Area: Shows system alerts.\n- Action Center: Contains quick settings like Battery Saver, Bluetooth, Night Light, and Screen Snip.\n- Brightness: Use the slider at the bottom of the Action Center to adjust the light level.\n\n[12:48] Conclusion & Homework\nThat’s it for Day 1! Rewatch this video if you need to clarify anything. In the next class, we will learn how to add/remove icons and pin apps to the taskbar.\nPractice Questions (Answer in the comments):\n- What is the technical name for the computer's home screen?\n- What do we call the button used to turn the computer on?\n- What is the bar at the bottom of the desktop called?\nGoodbye, and see you in the next class!",
          "subsections.1.contentMr":
            "Computer Class Day #1: Basic Computer Course Script\n\nWhat You Will Learn Today\nThis is the first video of our computer training course. By the end of this lesson, you will know:\n- संगणक सुरू आणि बंद कसा करायचा.\n- प्रोग्राम कसे उघडायचे आणि विंडो मॅनेज कशी करायची.\n- Start Menu आणि Taskbar म्हणजे काय.\n- इंटरनेटशी कनेक्ट कसे व्हायचे.\n- Desktop Iconsचा उपयोग काय आहे.\n\nHardware Introduction\nचला संगणकाचा सेटअप पाहूया:\n1. UPS (Uninterruptible Power Supply): वीज गेली तरी काही काळ बॅकअप मिळतो आणि काम सेव्ह करता येते. तसेच व्होल्टेज बदलांपासून संरक्षण मिळते.\n2. Computer Cabinet (CPU Case): CPU चिप आत असते; या कॅबिनेटमध्ये मदरबोर्ड, RAM, हार्ड डिस्क आणि पॉवर सप्लाय असतो.\n3. Monitor: स्क्रीन/डिस्प्ले.\n4. Keyboard & Mouse: माऊसला left/right बटणे आणि scroll wheel असते.\n\nHow to Start the Computer\n1. UPSचा प्लग सॉकेटला लावून स्विच ऑन करा.\n2. UPSचा Power Button दाबा.\n3. CPU कॅबिनेटचा Power Button दाबा.\n4. मॉनिटरचा Power Button चालू करा.\n5. बूटिंग पूर्ण होईपर्यंत थांबा.\n\nUnderstanding the Desktop\nDesktop ही पहिली स्क्रीन आहे.\n- Icons: डावीकडील आयकॉन्स हे प्रोग्राम/फोल्डर शॉर्टकट्स आहेत.\n- Taskbar: खालील लांब पट्टी.\n- Start Button: डावीकडील Windows आयकॉन.\n\nPower Options\nStart Menu मध्ये Power आयकॉनवर क्लिक केल्यावर:\n- Sleep Mode: स्क्रीन बंद होते आणि कमी वीज वापरली जाते.\n- Shut Down: संगणक पूर्ण बंद होतो.\n- Restart: सिस्टम पुन्हा सुरू होते. (टिप: डेटा सेव्ह करूनच.)\n\nSearch & Task View\n- Search Box: Start बटणाजवळ; apps, files, settings शोधण्यासाठी.\n- Task View: उघडलेल्या विंडोज दाखवतो आणि New Desktop तयार करता येतो.\n\nSystem Tray & Internet\n- Hidden Icons: छोटा arrow लपलेले प्रोग्राम दाखवतो.\n- Battery: चार्ज टक्केवारी दाखवते.\n- Network/Internet: Wi‑Fi/ग्लोब आयकॉनवरून इंटरनेट कनेक्ट करा.\n- Volume: आवाज कमी‑जास्त करण्यासाठी.\n\nNotification Area & Action Center\n- Notification Area: सिस्टम अलर्ट्स दाखवतो.\n- Action Center: Battery Saver, Bluetooth, Night Light, Screen Snip यांसारखे Quick Settings.\n- Brightness: स्लायडरने स्क्रीनचा उजेड बदलता येतो.\n\nConclusion & Homework\nDay 1 इथे संपला! गरज असल्यास व्हिडिओ पुन्हा पहा. पुढच्या क्लासमध्ये आयकॉन्स add/remove आणि टास्कबारला pin करणे शिकू.\nसराव प्रश्न:\n- संगणकाच्या home screen ला काय म्हणतात?\n- संगणक सुरू करण्यासाठी कोणते बटण वापरतात?\n- डेस्कटॉपच्या खालच्या पट्टीला काय म्हणतात?\nपुढच्या क्लासमध्ये भेटू!"
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 3 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/UUuRuWc-Tw4?si=eyY9WnhQA8jOxysd" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 3 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #3 - File & Folder Management\n\nVideo Title: Computer Class Day #3 - कंप्यूटर चलाना सीखें - Basic Computer Course in Hindi\nChannel: EasyTech Class\nDuration: 11:30\n\n1. Introduction to File Explorer\n\nFile Explorer (formerly known as Windows Explorer) is the primary tool used to manage and organize files and folders on a computer.\n\nHow to Open File Explorer:\n- Desktop: Double-click on \"This PC\" or \"My Computer\". [00:01:11]\n- Taskbar: Click the folder icon on the taskbar. [00:01:23]\n- Start Menu: Search for \"File Explorer\" in the Start menu search bar. [00:01:36]\n- Shortcut Key: Press Windows + E. [00:01:43]\n\n2. Interface Overview [00:01:51]\n\nToolbar (Quick Access): Located at the top left. Allows you to add/remove common buttons like Undo, Redo, and Delete. [00:02:02]\n\nRibbon: The large menu area containing tabs like File, Home, Share, and View.\nHide/Show Ribbon: Use the arrow on the top right or press Ctrl + F1. [00:02:44]\n\nNavigation Buttons:\n- Back/Forward: Move between previously visited folders. [00:02:50]\n- Up Arrow: Move up one level in the folder hierarchy. [00:03:31]\n\nAddress Bar: Displays the current folder path (address). [00:04:13]\n\nSearch Bar: Used to find specific files or folders within the current location. [00:04:31]\n\nNavigation Pane: The left-side list showing Quick Access, This PC, and Drives. [00:04:59]\n\n3. Organizing Files and Folders\n\nChanging Views & Sorting [00:05:35]\n- Layout: Go to the View tab to change the icon size (Extra Large, Large, Medium, List, Details).\n- Sorting: Use the \"Sort by\" option to organize files by Name, Date, Type, or Size. [00:06:01]\n\nBasic Actions:\n- Open: Double-click the file/folder or right-click and select Open. [00:06:34]\n- Create Folder: Click the \"New Folder\" icon in the Home tab/Toolbar. [00:06:46] Shortcut: Ctrl + Shift + N. [00:07:06]\n- Rename: Select the file and click Rename in the Home tab. [00:09:30] Shortcut: Press F2. [00:09:44] Or click the name twice slowly (not a double-click). [00:09:50]\n\n4. Copying, Moving, and Deleting [00:07:12]\n\nKey Concepts:\n- Copy: Keeps the file in the original location and creates a duplicate in the new one.\n- Cut (Move): Removes the file from the original location and places it in the new one.\n\nActions & Shortcuts:\n- Copy: Ctrl + C | Home > Copy\n- Cut: Ctrl + X | Home > Cut\n- Paste: Ctrl + V | Home > Paste\n- Delete: Delete key | Home > Delete\n\nSelection Techniques [00:08:16]:\n- Multiple Files: Click and drag the mouse cursor over the files.\n- Specific Files: Hold Ctrl while clicking individual files.\n- Select All: Press Ctrl + A. [00:08:56]\n\n5. Storage and Drives [00:10:04]\n\nThis PC: Clicking this in the Navigation Pane shows all connected storage devices.\n\nC: Drive: Usually the primary drive where the Operating System and most files are stored.\n\nExternal Drives: Any connected Pen Drives, Hard Disks, or DVDs will appear here. [00:10:23]\n\nTip: Practice these shortcuts and navigation techniques daily to become faster and more efficient at using your computer!",
          "subsections.1.contentMr":
            "Computer Class Day #3 - File & Folder Management\n\nव्हिडिओ शीर्षक: Computer Class Day #3 - कंप्यूटर चलाना सीखें - Basic Computer Course in Hindi\nचॅनेल: EasyTech Class\nकालावधी: 11:30\n\n१. File Explorer ची ओळख\n\nFile Explorer (पूर्वी Windows Explorer) संगणकावरील फाइल आणि फोल्डर व्यवस्थापित आणि संघटित करण्यासाठी वापरलेले मुख्य साधन आहे.\n\nFile Explorer कसे उघडावे:\n- Desktop: \"This PC\" किंवा \"My Computer\" वर डबल-क्लिक करा. [00:01:11]\n- Taskbar: टास्कबारवरील फोल्डर आयकॉनवर क्लिक करा. [00:01:23]\n- Start Menu: Start मेनू शोध पट्टीत \"File Explorer\" शोधा. [00:01:36]\n- Shortcut Key: Windows + E दाबा. [00:01:43]\n\n२. इंटरफेस विहंगावलोकन [00:01:51]\n\nToolbar (Quick Access), Ribbon, Navigation Buttons, Address Bar, Search Bar, Navigation Pane यांचा वापर.\n\n३. फाइल आणि फोल्डर व्यवस्थापन\n\nView बदलणे, Sorting, नवीन फोल्डर (Ctrl+Shift+N), Rename (F2).\n\n४. कॉपी, मूव आणि डिलीट [00:07:12]\n\nCopy: Ctrl+C, Cut: Ctrl+X, Paste: Ctrl+V, Delete: Delete key. अनेक फाइल निवड: Ctrl+क्लिक किंवा Ctrl+A.\n\n५. स्टोरेज आणि ड्राइव्ह्स [00:10:04]\n\nThis PC, C: ड्राइव्ह, बाह्य ड्राइव्ह्स.\n\nटीप: या शॉर्टकट्स आणि नेव्हिगेशन तंत्रांचा दररोज सराव करा!"
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 3 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "You need to quickly open File Explorer without using the mouse. Which keyboard shortcut should you press?",
              questionMr: "माऊस न वापरता File Explorer झटपट उघडण्यासाठी कोणता कीबोर्ड शॉर्टकट दाबावा?",
              options: [
                { textEn: "Windows + E", textMr: "Windows + E" },
                { textEn: "Ctrl + F", textMr: "Ctrl + F" },
                { textEn: "Ctrl + E", textMr: "Ctrl + E" },
                { textEn: "Alt + F4", textMr: "Alt + F4" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You want to move a file from your 'Downloads' folder to your 'Documents' folder so that it no longer exists in 'Downloads'. Which command sequence is correct?",
              questionMr: "'Downloads' फोल्डरमधील फाइल 'Documents' मध्ये हलवायची आहे जेणेकरून ती 'Downloads' मध्ये राहणार नाही. योग्य क्रम कोणता?",
              options: [
                { textEn: "Cut (Ctrl + X) then Paste (Ctrl + V)", textMr: "Cut (Ctrl + X) नंतर Paste (Ctrl + V)" },
                { textEn: "Copy (Ctrl + C) then Paste (Ctrl + V)", textMr: "Copy (Ctrl + C) नंतर Paste (Ctrl + V)" },
                { textEn: "Rename (F2) then Enter", textMr: "Rename (F2) नंतर Enter" },
                { textEn: "Delete then Undo", textMr: "Delete नंतर Undo" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which specific area of the File Explorer interface allows you to navigate one level up in the folder hierarchy?",
              questionMr: "File Explorer मध्ये फोल्डर पद्धतीत एक स्तर वर जाण्यासाठी कोणता भाग वापरता येतो?",
              options: [
                { textEn: "The Up Arrow button", textMr: "The Up Arrow button" },
                { textEn: "The Refresh button", textMr: "The Refresh button" },
                { textEn: "The Search Bar", textMr: "The Search Bar" },
                { textEn: "The Details Pane", textMr: "The Details Pane" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You have a file selected and want to quickly rename it without right-clicking. Which function key do you press?",
              questionMr: "फाइल निवडलेली आहे आणि right-click न करता झटपट rename करायचे आहे. कोणती function key दाबावी?",
              options: [
                { textEn: "F5", textMr: "F5" },
                { textEn: "F1", textMr: "F1" },
                { textEn: "F2", textMr: "F2" },
                { textEn: "F12", textMr: "F12" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You are organizing a project and need to create a new folder immediately. What is the keyboard shortcut?",
              questionMr: "प्रकल्प व्यवस्थित करत आहात आणि त्वरित नवीन फोल्डर तयार करायचा आहे. कीबोर्ड शॉर्टकट कोणता?",
              options: [
                { textEn: "Alt + New", textMr: "Alt + New" },
                { textEn: "Ctrl + Alt + F", textMr: "Ctrl + Alt + F" },
                { textEn: "Ctrl + N", textMr: "Ctrl + N" },
                { textEn: "Ctrl + Shift + N", textMr: "Ctrl + Shift + N" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which part of the File Explorer window shows the path of the current folder and lets you jump to a specific location by typing?",
              questionMr: "File Explorer मध्ये सध्याच्या फोल्डरचा मार्ग कोणता भाग दाखवतो आणि टाइप करून ठिकाणावर जाता येते?",
              options: [
                { textEn: "The Ribbon", textMr: "The Ribbon" },
                { textEn: "The Status Bar", textMr: "The Status Bar" },
                { textEn: "The Navigation Pane", textMr: "The Navigation Pane" },
                { textEn: "The Address Bar", textMr: "The Address Bar" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "If you want to view your files with detailed information like 'Date modified' and 'Size', which tab in the Ribbon should you click?",
              questionMr: "'Date modified' आणि 'Size' सारखी तपशीलासह फाइल्स पाहण्यासाठी Ribbon मधील कोणता टॅब क्लिक करावा?",
              options: [
                { textEn: "Share", textMr: "Share" },
                { textEn: "View", textMr: "View" },
                { textEn: "Home", textMr: "Home" },
                { textEn: "File", textMr: "File" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What is the primary function of the 'C: Drive' shown in 'This PC'?",
              questionMr: "'This PC' मध्ये दिसणाऱ्या 'C: Drive' चे मुख्य कार्य काय आहे?",
              options: [
                { textEn: "It is solely for external backups.", textMr: "ते फक्त बाह्य बॅकअपसाठी आहे." },
                { textEn: "It stores the Operating System and most files.", textMr: "तेथे Operating System आणि बहुतेक फाइल्स असतात." },
                { textEn: "It is only used for playing DVDs.", textMr: "ते फक्त DVD चालवण्यासाठी वापरतात." },
                { textEn: "It is a temporary folder that deletes files on restart.", textMr: "ते रीस्टार्टवर फाइल्स हटवणारे तात्पुरते फोल्डर आहे." }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You want to select every single file in the current folder to move them all at once. What is the fastest way?",
              questionMr: "सध्याच्या फोल्डरमधील सर्व फाइल्स एकाच वेळी हलवण्यासाठी निवडायच्या आहेत. सर्वात जलद मार्ग कोणता?",
              options: [
                { textEn: "Hold Shift and click each file one by one.", textMr: "Shift दाबून प्रत्येक फाइलवर एक एक क्लिक करा." },
                { textEn: "Press Alt + S", textMr: "Alt + S दाबा" },
                { textEn: "Right-click and select 'Refresh'", textMr: "Right-click करून 'Refresh' निवडा" },
                { textEn: "Press Ctrl + A", textMr: "Ctrl + A दाबा" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "How can you hide or show the Ribbon menu at the top of File Explorer if you want more screen space?",
              questionMr: "अधिक स्क्रीन जागा हवी असल्यास File Explorer मधील Ribbon मेनू कसे लपवायचा/दाखवायचा?",
              options: [
                { textEn: "Click the 'Close' button", textMr: "'Close' बटण क्लिक करा" },
                { textEn: "Double-click the scroll bar", textMr: "स्क्रोल बारवर डबल-क्लिक करा" },
                { textEn: "Press Ctrl + F1", textMr: "Ctrl + F1 दाबा" },
                { textEn: "Press Ctrl + Alt + Delete", textMr: "Ctrl + Alt + Delete दाबा" }
              ],
              correctIndex: 2
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 4 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/FtFAAGkMLsY?si=p9iglMg5IcWFO8GW" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 4 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Keyboard: Keys and Functions Notes\n\nThis document provides a summary of the Basic Computer Course video regarding keyboard layouts, key types, and their specific functions.\n\n1. Keyboard Layouts\n\nMost Common: QWERTY layout (named after the first six alphabet keys).\n\nOther Layouts: AZERTY, Dvorak, Colemak, etc.\n\n2. Key Categories and Functions\n\nA. Special Multimedia Keys\n\nLocated at the very top (in some keyboards), these allow for quick actions:\n- Volume +/-: Control audio levels.\n- Play/Pause: Control media playback.\n- Home/Mail: Open the web browser homepage or email client.\n\nB. Function Keys (F1 - F12)\n\nF1: Opens the Help and Support window for the active program. [00:03:00]\nF2: Used to Rename a selected file, folder, or icon. [00:03:15]\nF3: Activates the Search feature in many applications or web pages. [00:03:31]\nF4: Repeats the last action in some programs; Alt + F4 closes the active window. [00:03:49]\nF5: Refreshes or reloads a webpage/folder. [00:04:09]\nF6: Selects the Address Bar in web browsers. [00:04:28]\nF7: Opens Spelling and Grammar check in MS Office apps. [00:04:39]\nF8: Used to access the Boot Menu during computer startup. [00:04:52]\nF9: Used to Send Email in Microsoft Outlook. [00:05:06]\nF10: Activates the Menu Bar of an open application. [00:05:14]\nF11: Toggles Full Screen mode in web browsers. [00:05:30]\nF12: Opens the Save As dialog box in MS Office. [00:05:46]\n\nC. System & Control Keys\n\nEscape (Esc): Cancels or stops a process, exits full screen, or closes dialog boxes. [00:02:39]\nPrint Screen (PrtSc): Captures the entire screen to the clipboard. [00:06:06]\nScroll Lock: In Excel, it allows scrolling the sheet without changing the selected cell. [00:06:34]\nModifier Keys (Ctrl, Alt, Shift): Used in combination with other keys (e.g., Ctrl+C for copy). [00:08:06]\nWindows Key: Opens the Start menu.\nContext Menu Key: Functions like a Right-Click on a mouse. [00:08:52]\n\nD. Typing & Editing Keys\n\nBackspace: Deletes the character to the left of the cursor. [00:07:29]\nDelete: Deletes the character to the right of the cursor or deletes selected items. [00:10:26]\nEnter: Moves the cursor to the next line or acts as an \"OK\" button. [00:07:52]\nCaps Lock: Toggles uppercase letters (check the indicator light). [00:09:11]\nTab: Moves the cursor several spaces forward or switches between fields. [00:09:28]\nSpacebar: Inserts a single space between characters.\n\nE. Navigation Keys\n\nHome: Moves the cursor to the beginning of a line or the top of a webpage. [00:10:09]\nEnd: Moves the cursor to the end of a line or bottom of a webpage. [00:10:45]\nPage Up / Page Down: Scrolls up or down by one full screen page. [00:10:50]\nArrow Keys: Move the cursor up, down, left, or right. [00:11:04]\nInsert: Toggles \"Overwrite\" mode where new text replaces existing text. [00:09:43]\n\nF. Numeric Keypad\n\nLocated on the right side for quick number entry.\nNum Lock: When ON, it types numbers; when OFF, it acts as navigation keys (arrows, Home, End). [00:11:18]\n\nNote: Always check the indicator lights on your keyboard for Caps Lock, Num Lock, and Scroll Lock status.",
          "subsections.1.contentMr":
            "Computer Keyboard: Keys and Functions Notes\n\nकीबोर्ड लेआउट, की प्रकार आणि कार्ये यावर मूलभूत संगणक कोर्स व्हिडिओचा सारांश.\n\n१. Keyboard Layouts\n\nसर्वात सामान्य: QWERTY लेआउट (पहिल्या सहा अक्षर कींच्या नावावर).\n\nइतर: AZERTY, Dvorak, Colemak इ.\n\n२. Key Categories and Functions\n\nA. Special Multimedia Keys – व्हॉल्यूम +/-, Play/Pause, Home/Mail.\n\nB. Function Keys (F1–F12)\nF1: Help; F2: Rename; F3: Search; F4: Last action / Alt+F4 बंद; F5: Refresh; F6: Address Bar; F7: Spelling; F8: Boot Menu; F9: Outlook मेल; F10: Menu Bar; F11: Full Screen; F12: Save As.\n\nC. System & Control Keys\nEsc: रद्द/बंद; PrtSc: स्क्रीन कॅप्चर; Scroll Lock: Excel मध्ये स्क्रोल; Ctrl/Alt/Shift: मोडिफायर; Windows Key: Start मेनू; Context Menu Key: Right-Click सारखे.\n\nD. Typing & Editing Keys\nBackspace: डावीकडील वर्ण हटवते; Delete: उजवीकडील वर्ण/निवड हटवते; Enter: नवी ओळ/OK; Caps Lock: अप्परकेस; Tab: पुढे जागा/फील्ड; Spacebar: स्पेस.\n\nE. Navigation Keys\nHome: ओळ/पृष्ठ सुरुवात; End: ओळ/पृष्ठ शेवट; Page Up/Down: एक पृष्ठ स्क्रोल; Arrow Keys: वर/खाल/डावे/उजवे; Insert: Overwrite मोड.\n\nF. Numeric Keypad\nउजवीकडे संख्या प्रवेश. Num Lock: ON असता अंक, OFF असता नेव्हिगेशन की.\n\nटीप: Caps Lock, Num Lock आणि Scroll Lock साठी कीबोर्डवरील इंडिकेटर लाइट्स तपासा."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 4 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "You have selected a file on your desktop and want to quickly change its name without right-clicking. Which function key should you press?",
              questionMr: "डेस्कटॉपवरील फाइल निवडली आहे आणि right-click न करता झटपट नाव बदलायचे आहे. कोणती function key दाबावी?",
              options: [
                { textEn: "F3", textMr: "F3" },
                { textEn: "F1", textMr: "F1" },
                { textEn: "F5", textMr: "F5" },
                { textEn: "F2", textMr: "F2" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You are typing a document and notice you made a mistake on the character immediately to the LEFT of your blinking cursor. Which key should you press to remove it?",
              questionMr: "तुम्ही दस्तऐवज टाइप करत आहात आणि कर्सरच्या डावीकडील अक्षर चुकीचे आहे. ते काढण्यासाठी कोणती key दाबावी?",
              options: [
                { textEn: "Backspace", textMr: "Backspace" },
                { textEn: "Insert", textMr: "Insert" },
                { textEn: "Esc", textMr: "Esc" },
                { textEn: "Delete", textMr: "Delete" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You want to close the currently active window or application immediately using a keyboard shortcut. Which combination should you use?",
              questionMr: "कीबोर्ड शॉर्टकटने सध्याची विंडो किंवा अॅप ताबडतोब बंद करायची आहे. कोणता संयोग वापरावा?",
              options: [
                { textEn: "Alt + F4", textMr: "Alt + F4" },
                { textEn: "Shift + F5", textMr: "Shift + F5" },
                { textEn: "Ctrl + C", textMr: "Ctrl + C" },
                { textEn: "F11", textMr: "F11" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "What happens when the 'Num Lock' key is switched OFF?",
              questionMr: "'Num Lock' key बंद केल्यावर काय होते?",
              options: [
                { textEn: "The keyboard types only in uppercase.", textMr: "कीबोर्ड फक्त अप्परकेसमध्ये टाइप करतो." },
                { textEn: "The numeric keypad acts as navigation keys.", textMr: "न्यूमेरिक कीपॅड नेव्हिगेशन की म्हणून काम करतो." },
                { textEn: "The screen stops scrolling.", textMr: "स्क्रीन स्क्रोल होणे थांबते." },
                { textEn: "The numeric keypad types numbers.", textMr: "न्यूमेरिक कीपॅड अंक टाइप करतो." }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You are working in a web browser and want to quickly highlight the text in the address bar to type a new URL. Which function key does this?",
              questionMr: "ब्राउझरमध्ये नवा URL टाइप करण्यासाठी address bar मधील मजकूर झटपट हायलाइट करायचा आहे. कोणती function key वापरावी?",
              options: [
                { textEn: "F1", textMr: "F1" },
                { textEn: "F6", textMr: "F6" },
                { textEn: "F11", textMr: "F11" },
                { textEn: "F5", textMr: "F5" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "In Microsoft Word, you want to open the 'Save As' dialog box directly to save your document with a new name. Which key should you press?",
              questionMr: "Microsoft Word मध्ये दस्तऐवज नव्या नावाने सेव्ह करण्यासाठी 'Save As' डायलॉग बॉक्स थेट उघडायचा आहे. कोणती key दाबावी?",
              options: [
                { textEn: "Home", textMr: "Home" },
                { textEn: "F1", textMr: "F1" },
                { textEn: "F12", textMr: "F12" },
                { textEn: "F7", textMr: "F7" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which key would you press to capture an image of your entire screen to the clipboard?",
              questionMr: "संपूर्ण स्क्रीनची प्रतिमा क्लिपबोर्डवर कॅप्चर करण्यासाठी कोणती key दाबावी?",
              options: [
                { textEn: "Scroll Lock", textMr: "Scroll Lock" },
                { textEn: "Pause/Break", textMr: "Pause/Break" },
                { textEn: "Insert", textMr: "Insert" },
                { textEn: "Print Screen (PrtSc)", textMr: "Print Screen (PrtSc)" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You are editing a long line of text and want to jump your cursor immediately to the very beginning of that line. Which key do you use?",
              questionMr: "लांब ओळ संपादित करत आहात आणि कर्सर त्या ओळीच्या अगदी सुरुवातीला नेऊ इच्छिता. कोणती key वापरावी?",
              options: [
                { textEn: "Tab", textMr: "Tab" },
                { textEn: "End", textMr: "End" },
                { textEn: "Page Up", textMr: "Page Up" },
                { textEn: "Home", textMr: "Home" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "A key on your keyboard has two symbols printed on it: a number at the bottom and a symbol at the top. How do you type the top symbol?",
              questionMr: "कीबोर्डवरील एका कीवर खाली अंक आणि वर चिन्ह छापले आहे. वरचे चिन्ह कसे टाइप करावे?",
              options: [
                { textEn: "Toggle Caps Lock on.", textMr: "Caps Lock चालू करा." },
                { textEn: "Hold Shift and press the key.", textMr: "Shift दाबून की दाबा." },
                { textEn: "Hold Alt and press the key.", textMr: "Alt दाबून की दाबा." },
                { textEn: "Hold Ctrl and press the key.", textMr: "Ctrl दाबून की दाबा." }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which of the following keys is commonly used to cancel a dialog box, stop a loading page, or exit full-screen mode?",
              questionMr: "डायलॉग बॉक्स रद्द करणे, लोड होणारे पृष्ठ थांबवणे किंवा पूर्ण स्क्रीन मोडमधून बाहेर पडणे यासाठी कोणती key वापरतात?",
              options: [
                { textEn: "Enter", textMr: "Enter" },
                { textEn: "Backspace", textMr: "Backspace" },
                { textEn: "Tab", textMr: "Tab" },
                { textEn: "Esc (Escape)", textMr: "Esc (Escape)" }
              ],
              correctIndex: 3
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 5 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/CI9OySCfKBk?si=56wMxVMH4KREVM8v" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 5 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #5: Create, Save & Edit Files\n\nThis video covers the fundamental tasks of working with files (Text files, Documents, and Spreadsheets) in a Windows environment.\n\n1. Working with Text Files (Notepad)\n\nNotepad is a basic text editor available in all Windows versions, ideal for simple notes and documents without complex formatting.\n\nKey Menu Options:\n\nFile Menu:\n- New (Ctrl + N): Create a fresh file.\n- New Window (Ctrl + Shift + N): Open a second Notepad window.\n- Open (Ctrl + O): Open an existing saved file.\n- Save (Ctrl + S) vs. Save As: Use 'Save' to update an existing file; use 'Save As' to save a new file or rename an existing one to a new location. [00:02:24]\n\nEdit Menu (Essential Shortcuts): [00:04:13]\n- Undo (Ctrl + Z): Reverse the last action.\n- Cut (Ctrl + X): Remove selected text and put it on the clipboard.\n- Copy (Ctrl + C): Copy selected text to the clipboard.\n- Paste (Ctrl + V): Place clipboard text at the cursor position.\n- Find (Ctrl + F): Search for specific words.\n- Replace (Ctrl + H): Search for a word and replace it with another. [00:07:08]\n- Select All (Ctrl + A): Select every character in the document.\n- Time/Date (F5): Instantly insert the current system time and date. [00:08:23]\n\nFormat Menu:\n- Word Wrap: Ensures text stays within the window boundaries instead of continuing on one long horizontal line.\n- Font: Allows changing font style and size for the entire document (Notepad does not support per-word formatting). [00:09:03]\n\n2. Working with Documents (MS Word)\n\nMS Word is an advanced word processor that allows for rich formatting, images, and tables. [00:10:46]\n\nFormatting Basics:\n- Styles: Easily create Titles or Headings.\n- Font Group: Change font style, size, color, and apply Bold (B), Italic (I), or Underline (U).\n- Alignment: Center Alignment (Ctrl + E) useful for titles. [00:12:48] Also supports Left, Right, and Justify.\n- Bullets/Numbering: For creating structured lists.\n- Insert Tab: Add pictures (from device or online) and tables. [00:13:22]\n\n3. Working with Spreadsheets (MS Excel)\n\nExcel is used for data entry, accounting, and analysis. [00:14:12]\n\nBasic Terminology: [00:14:35]\n- Cell: The individual boxes where data is entered (e.g., A1, B2).\n- Spreadsheet/Worksheet: A grid made of many cells.\n- Workbook: The entire Excel file (which can contain multiple sheets).\n- Formula: Equations used for calculations.\n\nInterface & Navigation:\n- Navigation: Use Arrow keys to move between cells. [00:15:29]\n- Quick Access Toolbar: Shortcuts for Save, Undo, and Redo.\n- Name Box: Displays the address of the currently selected cell (e.g., A1). [00:16:35]\n- Formula Bar: Used to view or enter data and formulas into cells. [00:16:42]\n- Columns & Rows: Columns are identified by Letters (A, B, C...); Rows are identified by Numbers (1, 2, 3...).\n\nSummary of Shared Shortcuts:\n- Create New: Ctrl + N\n- Open File: Ctrl + O\n- Save File: Ctrl + S\n- Select All: Ctrl + A\n- Undo: Ctrl + Z\n- Cut: Ctrl + X\n- Copy: Ctrl + C\n- Paste: Ctrl + V\n- Find: Ctrl + F\n- Replace: Ctrl + H",
          "subsections.1.contentMr":
            "Computer Class Day #5: Create, Save & Edit Files\n\nWindows मध्ये फाइल्स (Text, Documents, Spreadsheets) सह काम करण्याच्या मूलभूत कार्यांवर व्हिडिओ.\n\n१. Text Files (Notepad)\n\nNotepad: सर्व Windows मध्ये असलेला साधा टेक्स्ट एडिटर. File: New (Ctrl+N), New Window (Ctrl+Shift+N), Open (Ctrl+O), Save (Ctrl+S), Save As. Edit: Undo (Ctrl+Z), Cut (Ctrl+X), Copy (Ctrl+C), Paste (Ctrl+V), Find (Ctrl+F), Replace (Ctrl+H), Select All (Ctrl+A), Time/Date (F5). Format: Word Wrap, Font.\n\n२. MS Word\n\nरिच फॉर्मॅटिंग, चित्रे, टेबल्स. Styles, Font Group (B/I/U), Alignment (Ctrl+E केंद्र), Bullets/Numbering, Insert: pictures आणि tables.\n\n३. MS Excel\n\nडेटा एंट्री, अकाउंटिंग, विश्लेषण. Cell (A1, B2), Worksheet, Workbook, Formula. Arrow keys, Quick Access Toolbar, Name Box, Formula Bar. Columns: A,B,C... Rows: 1,2,3...\n\nसामायिक शॉर्टकट्स: Ctrl+N (New), Ctrl+O (Open), Ctrl+S (Save), Ctrl+A (Select All), Ctrl+Z (Undo), Ctrl+X (Cut), Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+F (Find), Ctrl+H (Replace)."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 5 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "You are working on an existing document named 'Draft.txt'. You want to keep 'Draft.txt' exactly as it is, but save your current changes into a new file named 'Final.txt'. Which command should you use?",
              questionMr: "'Draft.txt' जसेच ठेवून सध्याचे बदल नवीन फाइल 'Final.txt' मध्ये सेव्ह करायचे आहेत. कोणती कमांड वापरावी?",
              options: [
                { textEn: "New Window", textMr: "New Window" },
                { textEn: "Open (Ctrl + O)", textMr: "Open (Ctrl + O)" },
                { textEn: "Save As", textMr: "Save As" },
                { textEn: "Save (Ctrl + S)", textMr: "Save (Ctrl + S)" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "In Notepad, you notice that your text continues on one long line and forces you to scroll horizontally to read it. Which feature should you enable to fix this?",
              questionMr: "Notepad मध्ये मजकूर एक लांब ओळीत चालतो आणि वाचण्यासाठी आडवे स्क्रोल करावे लागते. हे सुधारण्यासाठी कोणती सुविधा चालू करावी?",
              options: [
                { textEn: "Status Bar", textMr: "Status Bar" },
                { textEn: "Page Setup", textMr: "Page Setup" },
                { textEn: "Font Size", textMr: "Font Size" },
                { textEn: "Word Wrap", textMr: "Word Wrap" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You need to quickly insert the current date and time into your Notepad document. Which function key is the shortcut for this?",
              questionMr: "Notepad दस्तऐवजात सध्याची तारीख आणि वेळ झटपट घालायची आहे. यासाठी कोणती function key शॉर्टकट आहे?",
              options: [
                { textEn: "F1", textMr: "F1" },
                { textEn: "F12", textMr: "F12" },
                { textEn: "F5", textMr: "F5" },
                { textEn: "F3", textMr: "F3" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You have written a Title in MS Word and want to position it perfectly in the middle of the page. Which shortcut should you use?",
              questionMr: "MS Word मध्ये शीर्षक लिहिले आहे आणि ते पृष्ठाच्या अगदी मध्यात ठेवायचे आहे. कोणता शॉर्टकट वापरावा?",
              options: [
                { textEn: "Ctrl + L", textMr: "Ctrl + L" },
                { textEn: "Ctrl + E", textMr: "Ctrl + E" },
                { textEn: "Ctrl + J", textMr: "Ctrl + J" },
                { textEn: "Ctrl + R", textMr: "Ctrl + R" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "In Excel, what is the specific term for the individual box where you enter data, such as the intersection of column A and row 1?",
              questionMr: "Excel मध्ये डेटा प्रवेश करण्याच्या वैयक्तिक बॉक्सला काय म्हणतात, उदा. column A आणि row 1 चा छेदनबिंदू?",
              options: [
                { textEn: "Cell", textMr: "Cell" },
                { textEn: "Workbook", textMr: "Workbook" },
                { textEn: "Formula", textMr: "Formula" },
                { textEn: "Spreadsheet", textMr: "Spreadsheet" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You realize you accidentally deleted a crucial paragraph. Which shortcut will immediately bring it back?",
              questionMr: "चुकून महत्त्वाचा परिच्छेद हटवला. तो ताबडतोब परत आणण्यासाठी कोणता शॉर्टकट वापरावा?",
              options: [
                { textEn: "Ctrl + Z", textMr: "Ctrl + Z" },
                { textEn: "Ctrl + Y", textMr: "Ctrl + Y" },
                { textEn: "Ctrl + X", textMr: "Ctrl + X" },
                { textEn: "Ctrl + S", textMr: "Ctrl + S" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You want to find every instance of the word 'Color' in a document and change it to 'Colour'. Which shortcut opens the tool to do this?",
              questionMr: "दस्तऐवजात 'Color' ची प्रत्येक जागा शोधून 'Colour' ने बदलायची आहे. हे करण्याचे साधन कोणता शॉर्टकट उघडते?",
              options: [
                { textEn: "Ctrl + P", textMr: "Ctrl + P" },
                { textEn: "Ctrl + F", textMr: "Ctrl + F" },
                { textEn: "Ctrl + H", textMr: "Ctrl + H" },
                { textEn: "Ctrl + R", textMr: "Ctrl + R" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "In the Excel interface, where should you look to see the specific address (e.g., A1) of the currently selected cell?",
              questionMr: "Excel मध्ये सध्याच्या निवडलेल्या सेलचा पत्ता (उदा. A1) कुठे दिसतो?",
              options: [
                { textEn: "Name Box", textMr: "Name Box" },
                { textEn: "Formula Bar", textMr: "Formula Bar" },
                { textEn: "Status Bar", textMr: "Status Bar" },
                { textEn: "Ribbon", textMr: "Ribbon" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You want to move a paragraph from the top of the page to the bottom. Which sequence of commands achieves this?",
              questionMr: "परिच्छेद पृष्ठाच्या वरून खाली हलवायचा आहे. हे कोणत्या कमांडच्या क्रमाने होते?",
              options: [
                { textEn: "Cut (Ctrl + X) then Paste (Ctrl + V)", textMr: "Cut (Ctrl + X) नंतर Paste (Ctrl + V)" },
                { textEn: "Select All (Ctrl + A) then Delete", textMr: "Select All (Ctrl + A) नंतर Delete" },
                { textEn: "Copy (Ctrl + C) then Paste (Ctrl + V)", textMr: "Copy (Ctrl + C) नंतर Paste (Ctrl + V)" },
                { textEn: "Find (Ctrl + F) then Replace", textMr: "Find (Ctrl + F) नंतर Replace" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "If you want to apply a specific font style (like Bold or Italic) to only ONE specific word in Notepad, what happens?",
              questionMr: "Notepad मध्ये फक्त एका शब्दाला Bold किंवा Italic लावायचे असल्यास काय होते?",
              options: [
                { textEn: "The entire document changes to that font style.", textMr: "संपूर्ण दस्तऐवज त्या फॉन्ट स्टाइलमध्ये बदलतो." },
                { textEn: "Notepad asks you to save as a Word document first.", textMr: "Notepad आधी Word दस्तऐवज म्हणून सेव्ह करण्यास सांगतो." },
                { textEn: "The word is highlighted.", textMr: "तो शब्द हायलाइट होतो." },
                { textEn: "Only that word changes.", textMr: "फक्त तो शब्द बदलतो." }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 6 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/YH5vJ8J7ADc?si=UTHvKtx4UXsZj8Gk" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 6 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #6: Compose & Send Emails\n\nThis guide covers everything you need to know about using Gmail, from basic navigation to advanced email features and professional communication.\n\n1. Getting Started\n\nTo use email, you first need an active internet connection and a Gmail account.\n\nInternet Connection: Connect via Wi-Fi or mobile hotspot. [00:01:44]\n\nAccessing Gmail: Go to gmail.com and sign in with your email address and password. [00:02:12]\n\nTwo-Step Verification: If enabled, you will need to verify your account via your phone for extra security. [00:02:51]\n\n2. Navigating the Gmail Interface\n\nLabels (Folders): Gmail uses \"Labels\" instead of traditional folders to organize emails. Common ones include Inbox, Sent, Drafts, and Trash. [00:03:14]\n\nThe Sidebar: You can expand or collapse the sidebar labels by clicking the three horizontal lines (hamburger menu) at the top left. [00:04:06]\n\nSearch Box: Use the search bar at the top to find specific emails by keywords or sender names quickly. [00:04:13]\n\nSettings & Apps: Access account settings via the gear icon and other Google tools (Drive, Photos, etc.) via the 9-dot grid icon. [00:04:34]\n\n3. Managing Your Inbox\n\nWhen you select an email (by clicking the checkbox next to it), several icons appear:\n\nArchive: Removes the email from the Inbox but keeps it in your account for later search. [00:07:08]\n\nReport Spam: Moves suspicious emails to the Spam folder. [00:07:15]\n\nDelete (Trash): Moves emails to the Trash. They are automatically deleted forever after 30 days. [00:10:34]\n\nSnooze: Temporarily removes an email from your inbox and brings it back at a scheduled time/date. [00:07:42]\n\nStarring: Click the star icon to give an email special status, making it easy to find in the \"Starred\" label. [00:05:42]\n\n4. Composing an Email [00:10:40]\n\nClick the \"Compose\" button to start a new message.\n\nTo: Enter the primary recipient's email address.\n\nCC (Carbon Copy): Used to send a copy to someone for their information. Other recipients can see who is CC'd. [00:11:07]\n\nBCC (Blind Carbon Copy): Used to send a copy without other recipients knowing. This is useful for privacy. [00:11:14]\n\nSubject: A short summary of what the email is about.\n\nFormatting: Use the \"A\" icon at the bottom to change fonts, colors, bolding, or alignment. [00:12:24]\n\n5. Attachments & Extras\n\nAttach Files: Use the paperclip icon to upload documents or images from your computer. [00:12:51]\n\nInsert Links: Use the link icon to turn text into a clickable URL. [00:13:06]\n\nConfidential Mode: Prevents the recipient from forwarding, copying, printing, or downloading the email. [00:13:45]\n\n6. Replying & Forwarding [00:14:22]\n\nReply: Use this to send a message back to the sender.\n\nForward: Use this to send the current email thread to a new recipient. [00:14:55]",
          "subsections.1.contentMr":
            "Computer Class Day #6: Compose & Send Emails\n\nGmail वापर: नेव्हिगेशन ते ईमेल लिहिणे आणि पाठवणे.\n\n१. सुरुवात: इंटरनेट कनेक्शन, gmail.com वर साइन इन, Two-Step Verification.\n\n२. Gmail इंटरफेस: Labels (Inbox, Sent, Drafts, Trash), साइडबार (hamburger मेनू), Search Box, Settings (gear), Google apps (9-dot grid).\n\n३. इनबॉक्स व्यवस्थापन: निवडल्यावर दिसणारी आयकॉन्स – Archive, Report Spam, Delete (Trash – 30 दिवसांनी कायम हटते), Snooze, Starred.\n\n४. ईमेल लिहिणे: Compose, To/CC/BCC, Subject, फॉर्मॅटिंग (A आयकॉन).\n\n५. अटॅचमेंट्स: पेपरक्लिप – फाइल जोडणे, लिंक आयकॉन – URL, Confidential Mode.\n\n६. Reply आणि Forward."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 6 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "You want to send an email to a large group of people who do not know each other, and you want to keep their email addresses private. Which field should you use?",
              questionMr: "अनेक लोकांना ईमेल पाठवायचे आहे, ते एकमेकांना ओळखत नाहीत आणि ईमेल पत्ते गोपनीय ठेवायचे आहेत. कोणते फील्ड वापरावे?",
              options: [
                { textEn: "BCC (Blind Carbon Copy)", textMr: "BCC (Blind Carbon Copy)" },
                { textEn: "Subject", textMr: "Subject" },
                { textEn: "Forward", textMr: "Forward" },
                { textEn: "CC (Carbon Copy)", textMr: "CC (Carbon Copy)" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You accidentally deleted an important email yesterday. Where can you find it before it is permanently removed?",
              questionMr: "काल चुकून महत्त्वाचा ईमेल डिलीट केला. कायम हटण्यापूर्वी तो कुठे सापडेल?",
              options: [
                { textEn: "Sent", textMr: "Sent" },
                { textEn: "Trash", textMr: "Trash" },
                { textEn: "Archive", textMr: "Archive" },
                { textEn: "Spam", textMr: "Spam" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which icon should you click if you want to send a file, such as a photo or document, along with your email?",
              questionMr: "ईमेलसोबत फोटो किंवा दस्तऐवज पाठवायचा असल्यास कोणता आयकॉन क्लिक करावा?",
              options: [
                { textEn: "Gear icon", textMr: "Gear icon" },
                { textEn: "Trash can icon", textMr: "Trash can icon" },
                { textEn: "Paperclip icon", textMr: "Paperclip icon" },
                { textEn: "Star icon", textMr: "Star icon" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What is the primary function of the 'Archive' button in Gmail?",
              questionMr: "Gmail मधील 'Archive' बटणाचे मुख्य कार्य काय आहे?",
              options: [
                { textEn: "It deletes the email permanently.", textMr: "तो ईमेल कायम डिलीट करतो." },
                { textEn: "It sends the email to the Spam folder.", textMr: "तो ईमेल Spam फोल्डरमध्ये पाठवतो." },
                { textEn: "It removes the email from the Inbox but keeps it searchable.", textMr: "तो ईमेल इनबॉक्समधून काढतो पण शोधण्यासाठी ठेवतो." },
                { textEn: "It forwards the email to another account.", textMr: "तो ईमेल दुसऱ्या अकाउंटवर फॉर्वर्ड करतो." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you receive an email with sensitive information and want to prevent the recipient from printing or forwarding it, which mode should you enable?",
              questionMr: "संवेदनशील माहितीचा ईमेल पाठवताना प्राप्तकर्ता प्रिंट किंवा फॉर्वर्ड करू शकू नये म्हणून कोणता मोड चालू करावा?",
              options: [
                { textEn: "Priority Mode", textMr: "Priority Mode" },
                { textEn: "Confidential Mode", textMr: "Confidential Mode" },
                { textEn: "Offline Mode", textMr: "Offline Mode" },
                { textEn: "Snooze Mode", textMr: "Snooze Mode" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You receive an email from a coworker and want to send the exact same email to your manager who was not included in the original message. Which action should you take?",
              questionMr: "सहकार्याकडून ईमेल आला आणि तोच ईमेल मॅनेजरला पाठवायचा आहे जो मूळ मेसेजमध्ये नव्हता. कोणती क्रिया करावी?",
              options: [
                { textEn: "Forward", textMr: "Forward" },
                { textEn: "Reply", textMr: "Reply" },
                { textEn: "Report Spam", textMr: "Report Spam" },
                { textEn: "Reply All", textMr: "Reply All" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "How long do emails stay in the Trash folder before Gmail automatically deletes them forever?",
              questionMr: "Gmail Trash फोल्डरमधील ईमेल किती दिवसांनंतर कायम डिलीट करतो?",
              options: [
                { textEn: "7 days", textMr: "7 days" },
                { textEn: "90 days", textMr: "90 days" },
                { textEn: "They are never deleted automatically.", textMr: "ते कधीही स्वयंचलित डिलीट होत नाहीत." },
                { textEn: "30 days", textMr: "30 days" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What is the purpose of the 'Subject' line in an email?",
              questionMr: "ईमेलमधील 'Subject' ओळीचा उद्देश काय आहे?",
              options: [
                { textEn: "To provide a short summary of what the email is about.", textMr: "ईमेल विषयाचा थोडक्यात सारांश देणे." },
                { textEn: "To write the main body of your message.", textMr: "मेसेजचा मुख्य मजकूर लिहिणे." },
                { textEn: "To attach files.", textMr: "फाइल्स अटॅच करणे." },
                { textEn: "To list the email addresses of the recipients.", textMr: "प्राप्तकर्त्यांचे ईमेल पत्ते सूचीबद्ध करणे." }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You are busy now but want to deal with a specific email tomorrow morning without leaving it cluttering your inbox. Which feature should you use?",
              questionMr: "आत्ता व्यस्त आहात पण उद्या सकाळी एक ईमेल हाताळायचा आहे, इनबॉक्स गर्दी न करता. कोणती सुविधा वापरावी?",
              options: [
                { textEn: "Label", textMr: "Label" },
                { textEn: "Snooze", textMr: "Snooze" },
                { textEn: "Delete", textMr: "Delete" },
                { textEn: "Star", textMr: "Star" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Unlike traditional folders, Gmail uses a system where you can apply multiple tags to a single email. What is this system called?",
              questionMr: "पारंपरिक फोल्डरच्या उलट, Gmail मध्ये एकाच ईमेलला अनेक टॅग लावता येतात. या प्रणालीला काय म्हणतात?",
              options: [
                { textEn: "Hashtags", textMr: "Hashtags" },
                { textEn: "Directories", textMr: "Directories" },
                { textEn: "Labels", textMr: "Labels" },
                { textEn: "Bins", textMr: "Bins" }
              ],
              correctIndex: 2
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 7 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/LWt0PYilMm0?si=4Rm0kXSbUgjFKkbM" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 7 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #7: Software Management & File Transfer\n\nThese notes are based on the final class of the Basic Computer Course series by EasyTech Class. The lesson focuses on two essential skills: managing software and transferring files between devices.\n\n1. Installing & Uninstalling Software\n\nEvery software has a specific purpose. While the installation process may vary slightly between programs, the fundamental steps remain similar.\n\nHow to Install Software\n\nThere are two primary ways to get software onto your computer:\n\nA. From CD/DVD\n\nInsert the disc into the computer's disk drive.\n\nOpen File Explorer and go to This PC.\n\nOpen the disk drive.\n\nLook for the Installer File (usually ends with a .exe extension).\n\nDouble-click to start the setup.\n\nB. From the Internet (Most Common)\n\nUse a browser (like Google Chrome) to search for the software (e.g., \"Download Notepad++ for Windows\").\n\nSafety Tips:\n\nOnly download from genuine/official websites to avoid malware.\n\nCheck System Requirements: Ensure the software version matches your system architecture (32-bit vs. 64-bit).\n\nDownload the .exe installer file.\n\nOpen the folder where the file was saved and double-click the installer.\n\nGeneral Installation Steps:\n\nUser Account Control: Click \"Yes\" when prompted.\n\nLicense Agreement: Read and click \"I Agree.\"\n\nInstallation Location: Choose the folder where the software will be stored (Default is usually C:\\Program Files).\n\nComponents: Select which features you want to install (e.g., creating a desktop shortcut).\n\nFinish: Click \"Install\" and then \"Finish\" once completed.\n\nHow to Uninstall Software\n\nIf you no longer need a program, you should uninstall it to free up space.\n\nClick the Start Button and go to Settings.\n\nClick on Apps (or Apps & Features).\n\nFind the software in the list, click the three dots (or the app itself), and select Uninstall.\n\nFollow the prompts to complete the removal.\n\nAlternative: You can often right-click a program directly in the Start Menu and select \"Uninstall.\"\n\n2. File Transfer (Computer to Mobile)\n\nThe video outlines the two easiest methods for transferring photos, videos, or documents between your PC and phone.\n\nMethod A: Using a USB Data Cable (Recommended)\n\nThis is the fastest and most reliable method for large files.\n\nConnect your phone to the computer using a USB cable.\n\nOn your Phone: A notification will appear. Select \"File Transfer\" or \"MTP\" mode.\n\nOn your Computer: Open File Explorer -> This PC.\n\nYour phone will appear as a drive. Open it to see \"Internal Storage.\"\n\nMoving Files:\n\nCopy: Select the file and press Ctrl + C.\n\nCut (Move): Select the file and press Ctrl + X.\n\nPaste: Go to the destination folder and press Ctrl + V.\n\nMethod B: Using Bluetooth\n\nGood for small files when a cable isn't available, but it is much slower.\n\nSending from PC to Phone:\n\nRight-click the file you want to send.\n\nSelect Send to -> Bluetooth device.\n\nSelect your paired phone from the list and follow the prompts on the phone to \"Accept.\"\n\nReceiving on PC from Phone:\n\nGo to Settings -> Bluetooth & Devices.\n\nClick on \"Send or receive files via Bluetooth\".\n\nSelect \"Receive files\".\n\nOn your phone, select the file and \"Share\" via Bluetooth to your PC.\n\nOnce received on the PC, choose a save location and click Finish.\n\nNote: This concludes the basic computer training series. For further learning, practicing these steps on your own computer is highly recommended.",
          "subsections.1.contentMr":
            "Computer Class Day #7: Software Management & File Transfer\n\nसॉफ्टवेअर व्यवस्थापन आणि फाइल ट्रान्सफर.\n\n१. सॉफ्टवेअर इंस्टॉल आणि अनइंस्टॉल\n\nइंस्टॉल: (A) CD/DVD – डिस्क घाला, File Explorer -> This PC -> ड्राइव्ह उघडा, .exe इंस्टॉलर डबल-क्लिक. (B) इंटरनेट – ऑफिशियल साइटवरून डाउनलोड, 32-bit/64-bit तपासा, .exe चालवा. स्टेप्स: UAC Yes, License I Agree, Location (C:\\Program Files), Components निवडा, Install -> Finish.\n\nअनइंस्टॉल: Start -> Settings -> Apps (Apps & Features) -> अॅप शोधा -> तीन ठिपके -> Uninstall. किंवा Start मेनूमध्ये अॅपवर right-click -> Uninstall.\n\n२. फाइल ट्रान्सफर (PC ते मोबाइल)\n\nMethod A – USB केबल: फोन USB ने जोडा, फोनवर \"File Transfer\"/MTP निवडा. PC वर This PC मध्ये फोन ड्राइव्ह दिसेल, Internal Storage उघडा. Ctrl+C (Copy), Ctrl+X (Cut), Ctrl+V (Paste).\n\nMethod B – Bluetooth: लहान फाइल्ससाठी. PC ते फोन: फाइलवर right-click -> Send to -> Bluetooth device -> फोन निवडा, Accept. फोन ते PC: Settings -> Bluetooth & Devices -> Send or receive files -> Receive files; फोनवर Share via Bluetooth -> PC.\n\nटीप: बेसिक कोर्स श्रृंखला संपली; सराव करणे चांगले."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 7 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "When installing software from a CD or DVD, which file extension should you look for to start the setup process?",
              questionMr: "CD किंवा DVD वरून सॉफ्टवेअर इंस्टॉल करताना सेटअप सुरू करण्यासाठी कोणते फाइल एक्सटेंशन शोधावे?",
              options: [
                { textEn: ".txt", textMr: ".txt" },
                { textEn: ".exe", textMr: ".exe" },
                { textEn: ".mp3", textMr: ".mp3" },
                { textEn: ".jpg", textMr: ".jpg" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which of the following is a critical safety tip mentioned when downloading software from the internet?",
              questionMr: "इंटरनेटवरून सॉफ्टवेअर डाउनलोड करताना कोणती महत्त्वाची सुरक्षा टीप दिली आहे?",
              options: [
                { textEn: "Download from any website that appears in search results.", textMr: "सर्च रिझल्टमध्ये दिसणाऱ्या कोणत्याही वेबसाइटवरून डाउनलोड करा." },
                { textEn: "Only download from genuine/official websites.", textMr: "फक्त खऱ्या/ऑफिशियल वेबसाइटवरून डाउनलोड करा." },
                { textEn: "Always download the smallest file size available.", textMr: "नेहमी उपलब्ध सर्वात लहान फाइल साइझ डाउनलोड करा." },
                { textEn: "Turn off your antivirus before downloading.", textMr: "डाउनलोड करण्यापूर्वी अँटीव्हायरस बंद करा." }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What should you check regarding System Requirements before downloading software?",
              questionMr: "सॉफ्टवेअर डाउनलोड करण्यापूर्वी System Requirements बाबत काय तपासावे?",
              options: [
                { textEn: "The color scheme of the website.", textMr: "वेबसाइटची रंग योजना." },
                { textEn: "If the software matches your system architecture (32-bit vs. 64-bit).", textMr: "सॉफ्टवेअर तुमच्या सिस्टम आर्किटेक्चरशी जुळतो का (32-bit vs. 64-bit)." },
                { textEn: "The internet speed required for download.", textMr: "डाउनलोडसाठी लागणारा इंटरनेट वेग." },
                { textEn: "If your monitor is 4K resolution.", textMr: "मॉनिटर 4K रिझोल्यूशनचा आहे का." }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What is the standard default location for installing software on a Windows computer?",
              questionMr: "Windows संगणकावर सॉफ्टवेअर इंस्टॉल करण्याचे सामान्य डिफॉल्ट स्थान काय आहे?",
              options: [
                { textEn: "C:\\Windows\\System32", textMr: "C:\\Windows\\System32" },
                { textEn: "C:\\Users\\Documents", textMr: "C:\\Users\\Documents" },
                { textEn: "C:\\Program Files", textMr: "C:\\Program Files" },
                { textEn: "D:\\Games", textMr: "D:\\Games" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which method is described as the fastest and most reliable for transferring large files between a PC and a phone?",
              questionMr: "PC आणि फोन दरम्यान मोठ्या फाइल्स ट्रान्सफर करण्यासाठी सर्वात वेगवान आणि विश्वासार्ह पद्धत कोणती?",
              options: [
                { textEn: "Bluetooth", textMr: "Bluetooth" },
                { textEn: "Cloud Storage", textMr: "Cloud Storage" },
                { textEn: "USB Data Cable", textMr: "USB Data Cable" },
                { textEn: "Email", textMr: "Email" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "When connecting a phone via USB, which mode must be selected on the phone to access files?",
              questionMr: "USB द्वारे फोन जोडताना फाइल्स ऍक्सेस करण्यासाठी फोनवर कोणता मोड निवडणे आवश्यक आहे?",
              options: [
                { textEn: "Charging Only", textMr: "Charging Only" },
                { textEn: "MIDI Mode", textMr: "MIDI Mode" },
                { textEn: "USB Tethering", textMr: "USB Tethering" },
                { textEn: "File Transfer / MTP", textMr: "File Transfer / MTP" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "If you want to move a file from your computer to your phone (removing it from the computer), which keyboard shortcut combination should you use?",
              questionMr: "संगणकावरून फोनवर फाइल हलवायची आहे (संगणकावरून काढून). कोणता कीबोर्ड शॉर्टकट वापरावा?",
              options: [
                { textEn: "Ctrl + X and Ctrl + V", textMr: "Ctrl + X आणि Ctrl + V" },
                { textEn: "Alt + F4", textMr: "Alt + F4" },
                { textEn: "Ctrl + C and Ctrl + V", textMr: "Ctrl + C आणि Ctrl + V" },
                { textEn: "Ctrl + Z and Ctrl + Y", textMr: "Ctrl + Z आणि Ctrl + Y" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "What is a necessary step on the computer before you can receive a file via Bluetooth from your phone?",
              questionMr: "फोनवरून Bluetooth द्वारे फाइल प्राप्त करण्यापूर्वी संगणकावर कोणती पायरी आवश्यक आहे?",
              options: [
                { textEn: "Open the Calculator app.", textMr: "Calculator अॅप उघडा." },
                { textEn: "Restart the computer.", textMr: "संगणक रीस्टार्ट करा." },
                { textEn: "Disable the internet connection.", textMr: "इंटरनेट कनेक्शन बंद करा." },
                { textEn: "Select 'Receive files' in Bluetooth settings.", textMr: "Bluetooth सेटिंग्जमध्ये 'Receive files' निवडा." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "To uninstall software, where should you navigate after clicking Settings?",
              questionMr: "सॉफ्टवेअर अनइंस्टॉल करण्यासाठी Settings क्लिक केल्यानंतर कुठे जावे?",
              options: [
                { textEn: "Devices > Printers", textMr: "Devices > Printers" },
                { textEn: "Apps (or Apps & Features)", textMr: "Apps (किंवा Apps & Features)" },
                { textEn: "System > Display", textMr: "System > Display" },
                { textEn: "Personalization > Background", textMr: "Personalization > Background" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What is an alternative way to uninstall a program without going through the Settings menu?",
              questionMr: "Settings मेनूशिवाय प्रोग्राम अनइंस्टॉल करण्याचा पर्यायी मार्ग कोणता?",
              options: [
                { textEn: "Drag the program window to the Recycle Bin.", textMr: "प्रोग्राम विंडो Recycle Bin मध्ये ड्रॅग करा." },
                { textEn: "Delete the desktop shortcut.", textMr: "डेस्कटॉप शॉर्टकट डिलीट करा." },
                { textEn: "Rename the program folder.", textMr: "प्रोग्राम फोल्डरचे नाव बदला." },
                { textEn: "Right-click the program in the Start Menu and select Uninstall.", textMr: "Start मेनूमध्ये प्रोग्रामवर right-click करून Uninstall निवडा." }
              ],
              correctIndex: 3
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 8 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/3xyGUrfAIHU?si=_rVs_NBj1EgPSodS" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 8 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #8: Windows Control Panel Guide\n\nThe Control Panel is a vital component of the Windows operating system that allows users to view and manipulate system settings and controls. It is the hub for managing both hardware and software configurations.\n\n1. How to Open the Control Panel\n\nThere are two primary methods to access the Control Panel:\n\nSearch Method: Type \"Control Panel\" in the Windows search bar and click open [00:01:01].\n\nRun Command: Press Windows + R, type control panel in the box, and press Enter [00:01:08].\n\n2. Viewing and Navigating Settings\n\nView Options: By default, settings are shown in Categories. You can change this to Large Icons or Small Icons using the \"View by\" dropdown in the top right corner [00:01:29].\n\nSearch Bar: Use the search bar within the Control Panel to find specific settings (e.g., searching for \"Date and Time\" to quickly adjust your clock) [00:01:38].\n\n3. Main Setting Categories\n\nSystem and Security [00:02:24]\n\nThis category handles the \"health\" and safety of your PC.\n\nSecurity and Maintenance: Check firewall status, virus protection, and resolve system issues.\n\nSystem: View your computer's RAM, processor info, and system specifications.\n\nPower Options: Manage battery settings and how your computer saves energy.\n\nFile History: Back up your data to an external drive.\n\nNetwork and Internet [00:03:18]\n\nNetwork Status: Check if you are connected to Wi-Fi/Ethernet, view signal quality, and internet speed.\n\nTroubleshooting: Use this section to fix common connection problems.\n\nHardware and Sound [00:03:53]\n\nDevices and Printers: See all hardware connected to your PC (mice, keyboards, printers). You can also add new devices here.\n\nSound: Manage audio inputs (microphones) and outputs (speakers).\n\nAutoPlay: Choose what happens when you insert a USB or disc.\n\nPrograms [00:04:30]\n\nUninstall a Program: View a list of all installed software and remove programs you no longer need.\n\nDefault Programs: Choose which browser (e.g., Chrome or Edge) opens by default when you click a link.\n\nUser Accounts [00:04:58]\n\nManage Accounts: Change your account password, change account types (Admin vs. Standard), or add/remove new users to the computer.\n\nAppearance and Personalization [00:05:26]\n\nTaskbar: Customize how the taskbar looks and behaves.\n\nEase of Access: Settings to make the computer easier to use, such as using a Screen Reader (Narrator).\n\nFile Explorer Options: Change how folders and files behave (e.g., choosing between single-click or double-click to open files) [00:05:53].\n\nClock and Region [00:06:06]\n\nDate/Time: Set the current time and time zone.\n\nRegion: Change the format for dates and currency based on your location.\n\nSummary: You do not need to memorize every single setting. The goal is to be familiar with these categories so you know where to look when you need to make a specific change to your computer's behavior.",
          "subsections.1.contentMr":
            "Computer Class Day #8: Windows Control Panel Guide\n\nControl Panel हार्डवेअर आणि सॉफ्टवेअर सेटिंग्ज व्यवस्थापित करण्याचे केंद्र आहे.\n\n१. Control Panel कसे उघडावे: Search बारमध्ये \"Control Panel\" टाइप करा किंवा Windows + R दाबून control panel टाइप करून Enter.\n\n२. सेटिंग्ज नेव्हिगेट करणे: View by – Categories / Large Icons / Small Icons. अंतर्गत शोध पट्टी – विशिष्ट सेटिंग्स शोधण्यासाठी (उदा. Date and Time).\n\n३. मुख्य श्रेण्या: System and Security (firewall, virus, System info, Power Options, File History); Network and Internet (Network Status, Troubleshooting); Hardware and Sound (Devices and Printers, Sound, AutoPlay); Programs (Uninstall a Program, Default Programs); User Accounts (password, Admin/Standard, नवीन वापरकर्ते); Appearance and Personalization (Taskbar, Ease of Access, File Explorer Options – single/double-click); Clock and Region (Date/Time, Region).\n\nसारांश: प्रत्येक सेटिंग मनात ठेवण्याची गरज नाही; या श्रेण्या ओळखल्यास बदल करताना कुठे बघायचे ते माहीत असते."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 8 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "Which keyboard shortcut combination opens the Run command box, which can be used to launch the Control Panel?",
              questionMr: "Control Panel लॉन्च करण्यासाठी वापरले जाणारे Run कमांड बॉक्स कोणता कीबोर्ड शॉर्टकट उघडतो?",
              options: [
                { textEn: "Shift + Delete", textMr: "Shift + Delete" },
                { textEn: "Windows + R", textMr: "Windows + R" },
                { textEn: "Alt + F4", textMr: "Alt + F4" },
                { textEn: "Ctrl + C", textMr: "Ctrl + C" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "If you cannot find a specific setting in the Category view, how can you change the layout to see all icons individually?",
              questionMr: "Category व्ह्यूमध्ये विशिष्ट सेटिंग सापडत नसल्यास सर्व आयकॉन्स वैयक्तिकरित्या दिसण्यासाठी लेआउट कसे बदलावा?",
              options: [
                { textEn: "Right-click on the desktop and select Properties.", textMr: "डेस्कटॉपवर right-click करून Properties निवडा." },
                { textEn: "Restart the computer.", textMr: "संगणक रीस्टार्ट करा." },
                { textEn: "Uninstall the Control Panel.", textMr: "Control Panel अनइंस्टॉल करा." },
                { textEn: "Use the 'View by' dropdown menu in the top right corner.", textMr: "वरच्या उजव्या कोपऱ्यातील 'View by' ड्रॉपडाउन मेनू वापरा." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which category should you navigate to if you want to check your computer's RAM and processor information?",
              questionMr: "संगणकाची RAM आणि प्रोसेसर माहिती तपासायची असल्यास कोणत्या श्रेणीत जावे?",
              options: [
                { textEn: "Programs", textMr: "Programs" },
                { textEn: "System and Security", textMr: "System and Security" },
                { textEn: "Hardware and Sound", textMr: "Hardware and Sound" },
                { textEn: "Network and Internet", textMr: "Network and Internet" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You bought a new printer. Which section in the Control Panel would you use to add it?",
              questionMr: "नवीन प्रिंटर आणला. तो जोडण्यासाठी Control Panel मधील कोणता विभाग वापरावा?",
              options: [
                { textEn: "Appearance and Personalization", textMr: "Appearance and Personalization" },
                { textEn: "Clock and Region", textMr: "Clock and Region" },
                { textEn: "User Accounts", textMr: "User Accounts" },
                { textEn: "Hardware and Sound", textMr: "Hardware and Sound" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which section allows you to choose which web browser opens automatically when you click a link?",
              questionMr: "लिंक क्लिक केल्यावर कोणता ब्राउझर स्वयंचलित उघडेल ते निवडण्याची परवानगी कोणता विभाग देतो?",
              options: [
                { textEn: "File Explorer Options", textMr: "File Explorer Options" },
                { textEn: "Default Programs", textMr: "Default Programs" },
                { textEn: "Power Options", textMr: "Power Options" },
                { textEn: "Ease of Access", textMr: "Ease of Access" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Where would you go to change your computer's login password?",
              questionMr: "संगणकाचा लॉगिन पासवर्ड बदलण्यासाठी कुठे जावे?",
              options: [
                { textEn: "User Accounts", textMr: "User Accounts" },
                { textEn: "Network and Internet", textMr: "Network and Internet" },
                { textEn: "Programs", textMr: "Programs" },
                { textEn: "System and Security", textMr: "System and Security" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "If you want to change the date format (e.g., from MM/DD/YYYY to DD/MM/YYYY), which category should you select?",
              questionMr: "तारीख फॉर्मॅट बदलायचा असेल (उदा. MM/DD/YYYY ते DD/MM/YYYY) तर कोणती श्रेणी निवडावी?",
              options: [
                { textEn: "Clock and Region", textMr: "Clock and Region" },
                { textEn: "Appearance and Personalization", textMr: "Appearance and Personalization" },
                { textEn: "System and Security", textMr: "System and Security" },
                { textEn: "Hardware and Sound", textMr: "Hardware and Sound" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which option under 'Appearance and Personalization' allows you to customize the behavior of the bar at the bottom of the screen?",
              questionMr: "'Appearance and Personalization' अंतर्गत स्क्रीनच्या खालच्या बारचे वर्तन कस्टमायझ करण्याचा पर्याय कोणता?",
              options: [
                { textEn: "Taskbar", textMr: "Taskbar" },
                { textEn: "Ease of Access Center", textMr: "Ease of Access Center" },
                { textEn: "File Explorer Options", textMr: "File Explorer Options" },
                { textEn: "Fonts", textMr: "Fonts" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You want to uninstall a software program you no longer use. Which category do you visit?",
              questionMr: "वापरत नसलेला सॉफ्टवेअर अनइंस्टॉल करायचा आहे. कोणत्या श्रेणीत जावे?",
              options: [
                { textEn: "Programs", textMr: "Programs" },
                { textEn: "User Accounts", textMr: "User Accounts" },
                { textEn: "System and Security", textMr: "System and Security" },
                { textEn: "Hardware and Sound", textMr: "Hardware and Sound" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which feature in the Control Panel helps you resolve common computer problems, such as internet connection issues?",
              questionMr: "Control Panel मधील कोणती सुविधा इंटरनेट कनेक्शन सारख्या सामान्य समस्या सोडवण्यात मदत करते?",
              options: [
                { textEn: "Troubleshooting", textMr: "Troubleshooting" },
                { textEn: "File History", textMr: "File History" },
                { textEn: "Device Manager", textMr: "Device Manager" },
                { textEn: "AutoPlay", textMr: "AutoPlay" }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 9 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/dpgNDXF3jmw?si=N4-CClA6opROtXQB" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 9 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #9: Ctrl A to Z Shortcut Keys\n\nKeyboard shortcuts allow you to perform tasks quickly without reaching for the mouse. This guide covers the standard \"Control\" (Ctrl) shortcuts used across Windows, Microsoft Office, and Web Browsers.\n\nThe Essential A to Z List\n\nShortcut | Primary Function (Word/General) | Other Uses (Excel/Browser)\n\nCtrl + A | Select All (text or files)\n\nCtrl + B | Bold selected text\n\nCtrl + C | Copy selected item/text\n\nCtrl + D | Font preferences (Word) | Bookmark (Browser) / Fill Down (Excel)\n\nCtrl + E | Center Align text\n\nCtrl + F | Find (search for text)\n\nCtrl + G | Go To (specific page/line)\n\nCtrl + H | Replace text | History (Browser)\n\nCtrl + I | Italicize text\n\nCtrl + J | Justify text (align both sides) | Downloads page (Browser)\n\nCtrl + K | Insert Hyperlink (add web link)\n\nCtrl + L | Left Align text\n\nCtrl + M | Indent paragraph from left\n\nCtrl + N | New Document/Window\n\nCtrl + O | Open an existing file\n\nCtrl + P | Print document/page\n\nCtrl + Q | Remove paragraph formatting | Close (Excel/PowerPoint)\n\nCtrl + R | Right Align text | Refresh page (Browser) / Fill Right (Excel)\n\nCtrl + S | Save file\n\nCtrl + T | Hanging Indent | New Tab (Browser)\n\nCtrl + U | Underline text\n\nCtrl + V | Paste (copied/cut item)\n\nCtrl + W | Close current window/tab\n\nCtrl + X | Cut (remove and move item)\n\nCtrl + Y | Redo (reverse an Undo)\n\nCtrl + Z | Undo (reverse last action)\n\nDetailed Explanations of Key Concepts\n\n1. The \"Big Three\": Cut, Copy, Paste\n\nCopy (Ctrl+C): Keeps the original text and puts a duplicate in the \"Clipboard.\"\n\nCut (Ctrl+X): Removes the original text and moves it to the \"Clipboard.\"\n\nPaste (Ctrl+V): Places whatever is in the \"Clipboard\" at the cursor's location.\n\n2. Alignment and Indentation (Word Processing)\n\nAlignment (E, L, R, J): Centers, aligns left, aligns right, or justifies text so edges are straight.\n\nIndentation (M, T): Ctrl+M moves the whole paragraph. Ctrl+T creates a \"Hanging Indent\" where only the lines after the first line are moved (common in bibliographies).\n\n3. Navigation and Browsing\n\nCtrl + N vs Ctrl + T: In a browser, N opens a whole new window, while T opens a new tab in the same window.\n\nCtrl + H vs Ctrl + J: Use H to see where you've been (History) and J to see what you've downloaded.\n\n4. Undo and Redo\n\nCtrl + Z (Undo): Your \"Time Machine.\" It reverses the very last mistake you made.\n\nCtrl + Y (Redo): If you \"Undo\" something by mistake, \"Redo\" brings it back.\n\nPro Tip: You don't need to memorize them all at once. Pick 2 or 3 that you use most often (like Save, Copy, and Paste) and start using them today!",
          "subsections.1.contentMr":
            "Computer Class Day #9: Ctrl A to Z Shortcut Keys\n\nकीबोर्ड शॉर्टकट्समुळे माऊस न सोडता कामे झटपट होतात. Windows, MS Office आणि ब्राउझरमध्ये वापरले जाणारे Ctrl शॉर्टकट्स.\n\nA ते Z यादी: Ctrl+A (Select All), B (Bold), C (Copy), D (Font/Bookmark/Fill Down), E (Center), F (Find), G (Go To), H (Replace/History), I (Italic), J (Justify/Downloads), K (Hyperlink), L (Left Align), M (Indent), N (New), O (Open), P (Print), Q (Remove format/Close), R (Right Align/Refresh/Fill Right), S (Save), T (Hanging Indent/New Tab), U (Underline), V (Paste), W (Close), X (Cut), Y (Redo), Z (Undo).\n\nमुख्य संकल्पना: (1) Cut/Copy/Paste – Clipboard वापर. (2) Alignment – E/L/R/J; Indent – M (पैरा), T (Hanging). (3) ब्राउझर: N=नवीन विंडो, T=नवीन टॅब; H=History, J=Downloads. (4) Undo (Z) आणि Redo (Y).\n\nटीप: एकदम सर्व लक्षात ठेवण्याची गरज नाही; Save, Copy, Paste सारखे 2–3 वापरून सुरुवात करा."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 9 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "Which shortcut key combination is used to select all text or files in the current window?",
              questionMr: "सध्याच्या विंडोमधील सर्व मजकूर किंवा फाइल्स निवडण्यासाठी कोणता शॉर्टकट वापरतात?",
              options: [
                { textEn: "Ctrl + S", textMr: "Ctrl + S" },
                { textEn: "Ctrl + P", textMr: "Ctrl + P" },
                { textEn: "Ctrl + A", textMr: "Ctrl + A" },
                { textEn: "Ctrl + X", textMr: "Ctrl + X" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you want to move a paragraph from one place to another (remove it from the original spot), which command should you use first?",
              questionMr: "पैरा एका जागेवरून दुसऱ्या जागी हलवायचा आहे (मूळ जागेवरून काढून). प्रथम कोणती कमांड वापरावी?",
              options: [
                { textEn: "Ctrl + C (Copy)", textMr: "Ctrl + C (Copy)" },
                { textEn: "Ctrl + X (Cut)", textMr: "Ctrl + X (Cut)" },
                { textEn: "Ctrl + V (Paste)", textMr: "Ctrl + V (Paste)" },
                { textEn: "Ctrl + D (Font)", textMr: "Ctrl + D (Font)" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You made a mistake and deleted a sentence. Which shortcut acts as a 'Time Machine' to reverse this action?",
              questionMr: "चुकून वाक्य डिलीट केले. ही क्रिया उलटवण्यासाठी 'Time Machine' म्हणून कोणता शॉर्टकट वापरतात?",
              options: [
                { textEn: "Ctrl + Y", textMr: "Ctrl + Y" },
                { textEn: "Ctrl + Z", textMr: "Ctrl + Z" },
                { textEn: "Ctrl + U", textMr: "Ctrl + U" },
                { textEn: "Ctrl + H", textMr: "Ctrl + H" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "In a web browser, what is the specific function of Ctrl + T?",
              questionMr: "वेब ब्राउझरमध्ये Ctrl + T चे विशिष्ट कार्य काय आहे?",
              options: [
                { textEn: "Opens a new tab", textMr: "नवीन टॅब उघडते" },
                { textEn: "Opens a new window", textMr: "नवीन विंडो उघडते" },
                { textEn: "Refreshes the page", textMr: "पृष्ठ रिफ्रेश करते" },
                { textEn: "Creates a hanging indent", textMr: "Hanging indent तयार करते" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which shortcut would you use to quickly find a specific word or phrase in a large document?",
              questionMr: "मोठ्या दस्तऐवजात विशिष्ट शब्द किंवा वाक्यांश झटपट शोधण्यासाठी कोणता शॉर्टकट वापरावा?",
              options: [
                { textEn: "Ctrl + O", textMr: "Ctrl + O" },
                { textEn: "Ctrl + G", textMr: "Ctrl + G" },
                { textEn: "Ctrl + S", textMr: "Ctrl + S" },
                { textEn: "Ctrl + F", textMr: "Ctrl + F" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What does Ctrl + K do in most applications?",
              questionMr: "बहुतेक अॅप्लिकेशनमध्ये Ctrl + K काय करते?",
              options: [
                { textEn: "Justifies the text", textMr: "मजकूर justify करते" },
                { textEn: "Italicizes the text", textMr: "मजकूर italic करते" },
                { textEn: "Closes the window", textMr: "विंडो बंद करते" },
                { textEn: "Inserts a Hyperlink", textMr: "Hyperlink घालते" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "If you are in a web browser and want to view your browsing history, which shortcut should you use?",
              questionMr: "ब्राउझरमध्ये ब्राउझिंग हिस्टरी पहायची असल्यास कोणता शॉर्टकट वापरावा?",
              options: [
                { textEn: "Ctrl + D", textMr: "Ctrl + D" },
                { textEn: "Ctrl + B", textMr: "Ctrl + B" },
                { textEn: "Ctrl + J", textMr: "Ctrl + J" },
                { textEn: "Ctrl + H", textMr: "Ctrl + H" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What happens when you press Ctrl + Y?",
              questionMr: "Ctrl + Y दाबल्यावर काय होते?",
              options: [
                { textEn: "It undoes your last action.", textMr: "शेवटची क्रिया undo होते." },
                { textEn: "It cuts the selected text.", textMr: "निवडलेला मजकूर cut होतो." },
                { textEn: "It centers the text.", textMr: "मजकूर मध्यात येतो." },
                { textEn: "It redos an action you previously undid.", textMr: "आधी undo केलेली क्रिया पुन्हा होते (redo)." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which shortcut allows you to print the current page or document?",
              questionMr: "सध्याचे पृष्ठ किंवा दस्तऐवज प्रिंट करण्याचा शॉर्टकट कोणता?",
              options: [
                { textEn: "Ctrl + V", textMr: "Ctrl + V" },
                { textEn: "Ctrl + O", textMr: "Ctrl + O" },
                { textEn: "Ctrl + P", textMr: "Ctrl + P" },
                { textEn: "Ctrl + R", textMr: "Ctrl + R" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Ctrl + J has two different common uses depending on the program. What are they?",
              questionMr: "Ctrl + J ला प्रोग्रामनुसार दोन वेगवेगळे सामान्य वापर आहेत. ते कोणते?",
              options: [
                { textEn: "Bold text (Word) / Bookmark page (Browser)", textMr: "Bold (Word) / Bookmark (Browser)" },
                { textEn: "Center text (Word) / New Tab (Browser)", textMr: "Center (Word) / New Tab (Browser)" },
                { textEn: "Italicize text (Word) / History (Browser)", textMr: "Italic (Word) / History (Browser)" },
                { textEn: "Justify text (Word) / Open Downloads (Browser)", textMr: "Justify (Word) / Downloads (Browser)" }
              ],
              correctIndex: 3
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 10 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/LlULwNT_Frg?si=9xH1_qAVH6N-xHi-" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 10 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #10: Complete Guide to the Recycle Bin\n\nThe Recycle Bin is a crucial part of the Windows operating system that acts as a safety net for deleted items. It allows you to recover files you might have deleted by mistake.\n\n1. What is the Recycle Bin?\n\nDefinition: A folder or location that temporarily stores deleted files and folders.\n\nFunction: When you delete a file normally, it isn't erased from the hard drive immediately; it is moved to the Recycle Bin.\n\nIcon: It looks like a trash can on your Desktop.\n\n2. Managing the Recycle Bin Icon\n\nIf the Recycle Bin icon is missing from your desktop, you can bring it back:\n\nGo to Settings -> Personalization.\n\nSelect Themes from the left sidebar.\n\nOn the right, click Desktop icon settings.\n\nCheck the box for Recycle Bin and click Apply/OK.\n\n3. Restoring (Recovering) Files\n\nIf you delete something and realize you need it back:\n\nImmediate Undo: Press Ctrl + Z immediately after deleting a file to bring it back without opening the bin.\n\nManual Restore:\n\nDouble-click the Recycle Bin icon.\n\nFind the file you want.\n\nRight-click the file and select Restore. (The file will return to its original location).\n\nRestore Multiple Files: Hold Ctrl while clicking files to select several at once, or press Ctrl + A to select all, then right-click -> Restore.\n\n4. Deleting Files Permanently\n\nOnce a file is deleted from the Recycle Bin, it cannot be easily recovered.\n\nEmptying the Bin: Right-click the Recycle Bin icon on the desktop and select Empty Recycle Bin.\n\nBypassing the Bin (Shift + Delete): To delete a file permanently without it ever going to the Recycle Bin, select the file and press Shift + Delete.\n\nAutomatic Deletion Settings:\n\nRight-click Recycle Bin -> Properties.\n\nSelect \"Don't move files to the Recycle Bin. Remove files immediately when deleted.\" (Note: This is risky and usually not recommended).\n\n5. Adjusting Storage Capacity\n\nWindows allocates a specific amount of space for the Recycle Bin (e.g., 2GB or 10GB). When it gets full, Windows automatically deletes the oldest files to make room for new ones.\n\nHow to increase space:\n\nRight-click Recycle Bin -> Properties.\n\nUnder Custom size, enter the desired amount in MB (e.g., 10240 MB for 10GB).\n\nClick Apply and OK.\n\nSummary: The Recycle Bin is your primary tool for preventing data loss from accidental deletions. Knowing how to restore files and manage its storage capacity ensures your important data stays safe.",
          "subsections.1.contentMr":
            "Computer Class Day #10: Complete Guide to the Recycle Bin\n\nRecycle Bin हटवलेल्या फाइल्ससाठी सुरक्षा जाळी म्हणून काम करते; चुकून हटवलेल्या फाइल्स परत आणता येतात.\n\n१. Recycle Bin काय आहे: हटवलेल्या फाइल आणि फोल्डर तात्पुरते ठेवणारी फोल्डर/स्थान. सामान्य Delete केल्यावर फाइल ताबडतोब हटत नाही, Recycle Bin मध्ये जाते. आयकॉन: डेस्कटॉपवर कचरापेटी सारखा.\n\n२. आयकॉन दिसत नसल्यास: Settings -> Personalization -> Themes -> Desktop icon settings -> Recycle Bin चेक करा -> Apply/OK.\n\n३. फाइल्स परत आणणे: ताबडतोब Ctrl+Z (Undo). किंवा Recycle Bin वर डबल-क्लिक -> फाइल शोधा -> Right-click -> Restore. अनेक फाइल्स: Ctrl धरून क्लिक किंवा Ctrl+A नंतर Right-click -> Restore.\n\n४. कायम डिलीट: Recycle Bin आयकॉनवर Right-click -> Empty Recycle Bin. बिना बिनशिवाय कायम डिलीट: फाइल निवडून Shift+Delete. Properties मधून \"Remove files immediately when deleted\" (धोकादायक, सामान्यतः ठेवू नये).\n\n५. स्टोरेज: Recycle Bin -> Properties -> Custom size (MB मध्ये, उदा. 10240 MB = 10GB) -> Apply/OK. बिन भरल्यावर जुन्या फाइल्स स्वयंचलित हटतात.\n\nसारांश: चुकीच्या डिलीटपासून डेटा सुरक्षित ठेवण्यासाठी Restore आणि स्टोरेज व्यवस्थापन ओळखा."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 10 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "What is the primary function of the Recycle Bin in the Windows operating system?",
              questionMr: "Windows मध्ये Recycle Bin चे मुख्य कार्य काय आहे?",
              options: [
                { textEn: "To permanently erase files from the hard drive immediately.", textMr: "हार्ड ड्राइव्हवरून फाइल्स ताबडतोब कायम पुसणे." },
                { textEn: "To organize files automatically based on file type.", textMr: "फाइल प्रकारानुसार फाइल्स स्वयंचलित व्यवस्थित करणे." },
                { textEn: "To compress files to save storage space.", textMr: "स्टोरेज वाचण्यासाठी फाइल्स कॉम्प्रेस करणे." },
                { textEn: "To temporarily store deleted files and folders as a safety net.", textMr: "सुरक्षा जाळी म्हणून हटवलेल्या फाइल्स आणि फोल्डर तात्पुरते ठेवणे." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "If the Recycle Bin icon is missing from your desktop, which Settings path should you follow to restore it?",
              questionMr: "डेस्कटॉपवरून Recycle Bin आयकॉन गायब असल्यास तो परत आणण्यासाठी कोणता Settings मार्ग अनुसरण करावा?",
              options: [
                { textEn: "Settings -> System -> Storage", textMr: "Settings -> System -> Storage" },
                { textEn: "Settings -> Personalization -> Themes -> Desktop icon settings", textMr: "Settings -> Personalization -> Themes -> Desktop icon settings" },
                { textEn: "Settings -> Apps -> Default Apps", textMr: "Settings -> Apps -> Default Apps" },
                { textEn: "Settings -> Update & Security -> Recovery", textMr: "Settings -> Update & Security -> Recovery" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which keyboard shortcut allows you to immediately undo a file deletion without opening the Recycle Bin?",
              questionMr: "Recycle Bin उघडल्याशिवाय फाइल डिलीट ताबडतोब undo करण्याचा कीबोर्ड शॉर्टकट कोणता?",
              options: [
                { textEn: "Shift + Delete", textMr: "Shift + Delete" },
                { textEn: "Ctrl + C", textMr: "Ctrl + C" },
                { textEn: "Ctrl + Z", textMr: "Ctrl + Z" },
                { textEn: "Alt + F4", textMr: "Alt + F4" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "How can you restore a specific file to its original location from the Recycle Bin?",
              questionMr: "Recycle Bin मधून विशिष्ट फाइल मूळ स्थानावर कशी परत आणावी?",
              options: [
                { textEn: "Right-click the file and select 'Restore'.", textMr: "फाइलवर right-click करून 'Restore' निवडा." },
                { textEn: "Double-click the file.", textMr: "फाइलवर डबल-क्लिक करा." },
                { textEn: "Drag the file to the Taskbar.", textMr: "फाइल टास्कबारवर ड्रॅग करा." },
                { textEn: "Select the file and press Delete.", textMr: "फाइल निवडून Delete दाबा." }
              ],
              correctIndex: 0
            },
            {
              questionEn: "What happens when you select a file and press 'Shift + Delete'?",
              questionMr: "फाइल निवडून 'Shift + Delete' दाबल्यावर काय होते?",
              options: [
                { textEn: "The file is permanently deleted, bypassing the Recycle Bin.", textMr: "फाइल कायम डिलीट होते, Recycle Bin वगळता." },
                { textEn: "The file is moved to the Recycle Bin.", textMr: "फाइल Recycle Bin मध्ये जाते." },
                { textEn: "The file is copied to the clipboard.", textMr: "फाइल क्लिपबोर्डवर कॉपी होते." },
                { textEn: "The file is renamed.", textMr: "फाइलचे नाव बदलते." }
              ],
              correctIndex: 0
            },
            {
              questionEn: "When the Recycle Bin reaches its allocated storage capacity, how does Windows handle new deleted files?",
              questionMr: "Recycle Bin वाटप केलेली क्षमता भरल्यावर Windows नवीन हटवलेल्या फाइल्सचे काय करते?",
              options: [
                { textEn: "It asks you to buy more cloud storage.", textMr: "अधिक क्लाउड स्टोरेज खरेदी करण्यास सांगते." },
                { textEn: "It archives the files into a zip folder.", textMr: "फाइल्स zip फोल्डरमध्ये आर्काइव्ह करते." },
                { textEn: "It stops you from deleting any more files.", textMr: "आणखी फाइल्स डिलीट करण्यापासून थांबवते." },
                { textEn: "It automatically deletes the oldest files to make room.", textMr: "जागा करण्यासाठी जुन्या फाइल्स स्वयंचलित डिलीट करते." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which unit of measurement is used when setting a custom size for the Recycle Bin storage capacity?",
              questionMr: "Recycle Bin स्टोरेज क्षमतेसाठी custom size सेट करताना कोणते माप वापरतात?",
              options: [
                { textEn: "Megabytes (MB)", textMr: "Megabytes (MB)" },
                { textEn: "Gigabytes (GB)", textMr: "Gigabytes (GB)" },
                { textEn: "Terabytes (TB)", textMr: "Terabytes (TB)" },
                { textEn: "Kilobytes (KB)", textMr: "Kilobytes (KB)" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "What is the risk of enabling the setting 'Don't move files to the Recycle Bin'?",
              questionMr: "'Don't move files to the Recycle Bin' सेटिंग चालू केल्याचा धोका काय आहे?",
              options: [
                { textEn: "Files will take up more space on the hard drive.", textMr: "फाइल्स हार्ड ड्राइव्हवर जास्त जागा घेतील." },
                { textEn: "The Recycle Bin icon will disappear.", textMr: "Recycle Bin आयकॉन अदृश्य होईल." },
                { textEn: "Files are removed immediately when deleted, making recovery difficult.", textMr: "डिलीट केल्यावर फाइल्स ताबडतोब काढल्या जातात, परत आणणे कठीण होते." },
                { textEn: "You will need to enter a password for every deletion.", textMr: "प्रत्येक डिलीटसाठी पासवर्ड टाइप करावा लागेल." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which key should you hold down to select multiple specific files in the Recycle Bin to restore them all at once?",
              questionMr: "Recycle Bin मधील अनेक विशिष्ट फाइल्स एकाच वेळी परत आणण्यासाठी निवडताना कोणती कळ दाबून ठेवावी?",
              options: [
                { textEn: "Alt", textMr: "Alt" },
                { textEn: "Shift", textMr: "Shift" },
                { textEn: "Ctrl", textMr: "Ctrl" },
                { textEn: "Tab", textMr: "Tab" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What is the visual appearance of the Recycle Bin icon on the desktop?",
              questionMr: "डेस्कटॉपवरील Recycle Bin आयकॉन कसा दिसतो?",
              options: [
                { textEn: "A magnifying glass.", textMr: "भिंग (magnifying glass)." },
                { textEn: "A blue 'e' symbol.", textMr: "निळा 'e' चिन्ह." },
                { textEn: "A folder with a zipper.", textMr: "झिपर असलेले फोल्डर." },
                { textEn: "A trash can.", textMr: "कचरापेटी (trash can)." }
              ],
              correctIndex: 3
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 11 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/Aq2zEvTJhR4?si=DrSxWZir-f3N4pg_" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 11 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #11: Mastering Notepad\n\nNotepad is a basic text editor included with all versions of Microsoft Windows. It is primarily used for creating and editing \"plain text\" files.\n\n1. Introduction to Notepad\n\nWhat it is: A simple program for plain text files.\n\nLimitations: It does not support inserting pictures, creating tables, or advanced formatting (like bolding only specific words).\n\nStrength: It is lightweight and perfect for quick notes, lists, or writing simple code.\n\nHow to Open Notepad\n\nMethod 1: Press Windows + R, type notepad, and press Enter.\n\nMethod 2: Type \"Notepad\" in the Windows search bar and click open.\n\n2. Basic File Operations\n\nSave: File -> Save. Choose your folder and file name.\n\nNew File: File -> New to start a fresh document.\n\nOpen: File -> Open to load a previously saved .txt file.\n\n3. Key Text Editing Commands\n\nThese can be found under the Edit menu or used via keyboard shortcuts:\n\nUndo (Ctrl + Z): Reverses your last action (e.g., if you accidentally delete text).\n\nCut (Ctrl + X): Removes selected text and saves it to the clipboard.\n\nCopy (Ctrl + C): Duplicates selected text to the clipboard.\n\nPaste (Ctrl + V): Places text from the clipboard at the cursor's location.\n\nDelete: Select text and press the Delete or Backspace key.\n\nSelect All (Ctrl + A): Selects every character in the document.\n\n4. Useful Features\n\nWord Wrap: Go to Format -> Word Wrap.\n\nOff: Text stays on one long line until you press Enter.\n\nOn: Text automatically moves to the next line when it reaches the edge of the window.\n\nFind (Ctrl + F): Search for a specific word in your document.\n\nReplace (Ctrl + H): Search for a word and replace it with another (e.g., replacing every instance of \"School\" with \"College\").\n\nTime/Date (F5): Automatically inserts the current system time and date into your notes.\n\n5. Basic Formatting & View\n\nFont Settings: Format -> Font. Here you can change the font style (e.g., Arial), font weight (Bold/Italic), and font size for the entire document.\n\nZoom: Zoom In: Ctrl + + | Zoom Out: Ctrl + - | Reset Zoom: Ctrl + 0\n\n6. Printing a Document\n\nPage Setup: File -> Page Setup. Choose paper size (e.g., A4), orientation (Portrait or Landscape), and adjust margins.\n\nPrint: File -> Print. Select your printer, the number of copies, and click Print.\n\nSummary: Notepad is an essential tool for every computer user. While simple, its features like 'Replace' and 'Word Wrap' make it highly efficient for managing plain text documents.",
          "subsections.1.contentMr":
            "Computer Class Day #11: Mastering Notepad\n\nNotepad Windows मध्ये असलेला साधा plain text एडिटर; चित्रे, टेबल किंवा वैयक्तिक शब्द फॉर्मॅटिंग सपोर्ट करत नाही, पण हलका आणि नोट्स/लिस्ट/साधा कोड लिहिण्यासाठी योग्य.\n\n१. उघडणे: Windows + R -> notepad -> Enter; किंवा Search बारमध्ये \"Notepad\" टाइप करा.\n\n२. फाइल ऑपरेशन्स: File -> Save / New / Open (.txt).\n\n३. एडिट कमांड्स: Undo (Ctrl+Z), Cut (Ctrl+X), Copy (Ctrl+C), Paste (Ctrl+V), Delete/Backspace, Select All (Ctrl+A).\n\n४. उपयुक्त सुविधा: Format -> Word Wrap (On/Off). Find (Ctrl+F), Replace (Ctrl+H), Time/Date (F5).\n\n५. फॉर्मॅट आणि View: Format -> Font (स्टाइल, Bold/Italic, साइझ). Zoom: Ctrl++ / Ctrl+- / Ctrl+0.\n\n६. प्रिंट: File -> Page Setup (पेपर साइझ, orientation, margins); File -> Print.\n\nसारांश: Replace आणि Word Wrap सारख्या सुविधांमुळे Notepad plain text दस्तऐवज व्यवस्थापनासाठी कार्यक्षम आहे."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 11 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "What is the primary file type associated with Notepad?",
              questionMr: "Notepad शी संबंधित मुख्य फाइल प्रकार कोणता?",
              options: [
                { textEn: ".xlsx (Excel Spreadsheet)", textMr: ".xlsx (Excel Spreadsheet)" },
                { textEn: ".pdf (Portable Document Format)", textMr: ".pdf (Portable Document Format)" },
                { textEn: ".docx (Word Document)", textMr: ".docx (Word Document)" },
                { textEn: ".txt (Plain Text)", textMr: ".txt (Plain Text)" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which feature must be enabled to ensure text automatically moves to the next line when it reaches the edge of the window?",
              questionMr: "मजकूर विंडोच्या काठावर पोहोचल्यावर आपोआप पुढच्या ओळीवर यावा यासाठी कोणती सुविधा चालू करावी?",
              options: [
                { textEn: "Font Style", textMr: "Font Style" },
                { textEn: "Page Setup", textMr: "Page Setup" },
                { textEn: "Word Wrap", textMr: "Word Wrap" },
                { textEn: "Status Bar", textMr: "Status Bar" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which keyboard shortcut is used to open the 'Replace' tool in Notepad?",
              questionMr: "Notepad मध्ये 'Replace' साधन उघडण्यासाठी कोणता कीबोर्ड शॉर्टकट वापरतात?",
              options: [
                { textEn: "Ctrl + H", textMr: "Ctrl + H" },
                { textEn: "Ctrl + S", textMr: "Ctrl + S" },
                { textEn: "Ctrl + R", textMr: "Ctrl + R" },
                { textEn: "Ctrl + F", textMr: "Ctrl + F" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "What is a major limitation of formatting text in Notepad?",
              questionMr: "Notepad मध्ये मजकूर फॉर्मॅट करण्याची एक मोठी मर्यादा काय आहे?",
              options: [
                { textEn: "Text is always red.", textMr: "मजकूर नेहमी लाल असतो." },
                { textEn: "You can only use the Arial font.", textMr: "फक्त Arial फॉन्ट वापरता येतो." },
                { textEn: "Formatting changes apply to the entire document, not specific words.", textMr: "फॉर्मॅटिंग संपूर्ण दस्तऐवजावर लागू होते, विशिष्ट शब्दांवर नाही." },
                { textEn: "You cannot change the font size at all.", textMr: "फॉन्ट साइझ अजिबात बदलता येत नाही." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which function key allows you to instantly insert the current system time and date?",
              questionMr: "सध्याची सिस्टम वेळ आणि तारीख झटपट घालण्यासाठी कोणती function key वापरतात?",
              options: [
                { textEn: "F11", textMr: "F11" },
                { textEn: "F1", textMr: "F1" },
                { textEn: "F5", textMr: "F5" },
                { textEn: "F3", textMr: "F3" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you want to change the paper orientation from Portrait to Landscape before printing, where should you go?",
              questionMr: "प्रिंट करण्यापूर्वी पेपर orientation Portrait ते Landscape बदलायची असल्यास कुठे जावे?",
              options: [
                { textEn: "View -> Zoom", textMr: "View -> Zoom" },
                { textEn: "Edit -> Replace", textMr: "Edit -> Replace" },
                { textEn: "Format -> Font", textMr: "Format -> Font" },
                { textEn: "File -> Page Setup", textMr: "File -> Page Setup" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which shortcut combination resets the Zoom level back to the default (100%)?",
              questionMr: "Zoom लेव्हल पुन्हा डिफॉल्ट (100%) वर आणण्यासाठी कोणता शॉर्टकट वापरतात?",
              options: [
                { textEn: "Ctrl + A", textMr: "Ctrl + A" },
                { textEn: "Ctrl + Z", textMr: "Ctrl + Z" },
                { textEn: "Ctrl + 0", textMr: "Ctrl + 0" },
                { textEn: "Ctrl + Minus", textMr: "Ctrl + Minus" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which of the following items can you NOT insert into a Notepad document?",
              questionMr: "Notepad दस्तऐवजात खालीलपैकी काय घालता येत नाही?",
              options: [
                { textEn: "Time and Date", textMr: "Time and Date" },
                { textEn: "Special Symbols (e.g., @, #, $)", textMr: "Special Symbols (उदा. @, #, $)" },
                { textEn: "Letters and Numbers", textMr: "Letters and Numbers" },
                { textEn: "Images and Tables", textMr: "Images and Tables" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What does the 'Undo' command (Ctrl + Z) do?",
              questionMr: "'Undo' कमांड (Ctrl + Z) काय करते?",
              options: [
                { textEn: "It copies the text.", textMr: "तो मजकूर कॉपी करतो." },
                { textEn: "It deletes the file permanently.", textMr: "तो फाइल कायम डिलीट करतो." },
                { textEn: "It reverses your last action.", textMr: "तो तुमची शेवटची क्रिया उलटवतो." },
                { textEn: "It saves the file.", textMr: "तो फाइल सेव्ह करतो." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "To start a completely fresh document in Notepad, which menu option should you choose?",
              questionMr: "Notepad मध्ये पूर्णतः नवीन दस्तऐवज सुरू करण्यासाठी कोणता मेनू पर्याय निवडावा?",
              options: [
                { textEn: "File -> Open", textMr: "File -> Open" },
                { textEn: "View -> Status Bar", textMr: "View -> Status Bar" },
                { textEn: "Edit -> Select All", textMr: "Edit -> Select All" },
                { textEn: "File -> New", textMr: "File -> New" }
              ],
              correctIndex: 3
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 12 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/G94zWtAr9Gc?si=qY75EkhzDuOMIomS" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 12 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #12: Microsoft Word (Part 1)\n\nThis lesson introduces Microsoft Word, specifically focusing on the 2007 version as it remains widely used in offices and learning centers. It covers the interface, basic operations, and customization options.\n\n1. Getting Started with MS Word\n\nHow to Open MS Word\n\nMethod 1 (Run Command): Press Windows + R, type winword, and press Enter.\n\nMethod 2 (Search): Type \"Microsoft Word\" in the Windows search bar and click to open.\n\nGenerating Practice Text\n\nTo practice formatting without typing a lot of content, use the built-in random text generator:\n\nType =rand() and press Enter.\n\nThis will automatically generate several paragraphs of placeholder text.\n\n2. The Office Button (Top Left Corner)\n\nThe Office Button contains the most essential file management tools:\n\nNew: Create a blank document or use a template.\n\nOpen: Access previously saved documents.\n\nSave: Update changes to the current file (Ctrl + S).\n\nSave As: Save a copy of the document with a different name or in a different format (e.g., plain text or a different Word version).\n\nPrint: Quick Print: Sends the document directly to the default printer. Print Settings: Choose specific pages (e.g., 1, 3 for page 1 and 3) and the number of copies. Print Preview: See exactly how the document will look on paper before printing.\n\nClose: Closes the current document window.\n\n3. Interface Components\n\nQuick Access Toolbar: Located at the very top. You can customize this by adding commands you use frequently (like 'New' or 'Print Preview') to save time.\n\nTitle Bar: Displays the name of the document you are currently working on.\n\nThe Ribbon: The main menu area containing:\n\nTabs: Home, Insert, Page Layout, etc.\n\nGroups: Each Tab is divided into Groups (e.g., the Home tab has the 'Font' and 'Paragraph' groups).\n\nStatus Bar (Bottom): Displays important information:\n\nPage Count: Which page you are on out of the total.\n\nWord Count: The total number of words typed.\n\nView Modes: Print Layout (standard), Full Screen Reading, Web Layout, etc.\n\nZoom Slider: Easily zoom in (+) or out (-) of the document.\n\n4. Key Differences to Remember\n\nSave vs. Save As: 'Save' updates the file you are currently in. 'Save As' allows you to create a brand new file from your current work without overwriting the original.\n\nPrint Current Page vs. All Pages: Use 'Current Page' when you only need to print the specific page where your cursor is currently resting.\n\nNext Class: Part 2 will cover the Home Tab in detail, focusing on font styling, paragraph alignment, and text formatting.",
          "subsections.1.contentMr":
            "Computer Class Day #12: Microsoft Word (Part 1)\n\nMS Word 2007 ची ओळख – इंटरफेस, मूलभूत ऑपरेशन्स आणि कस्टमायझेशन.\n\n१. सुरुवात: उघडणे – Windows + R -> winword -> Enter; किंवा Search मध्ये \"Microsoft Word\". सराव मजकूर: =rand() टाइप करून Enter – placeholder पैराग्राफ्स येतात.\n\n२. Office Button (वर डावीकडे): New, Open, Save (Ctrl+S), Save As, Print (Quick Print / Print Settings / Print Preview), Close.\n\n३. इंटरफेस: Quick Access Toolbar (वरच्या बाजूस, कस्टमायझ करता येते), Title Bar (दस्तऐवजाचे नाव), Ribbon (Tabs: Home, Insert, Page Layout; प्रत्येक टॅबमध्ये Groups उदा. Font, Paragraph). Status Bar (खाली): Page Count, Word Count, View Modes (Print Layout, Full Screen Reading, Web Layout), Zoom Slider.\n\n४. महत्त्वाचे फरक: Save – सध्याची फाइल अपडेट; Save As – नवीन नाव/फॉर्मॅटमध्ये कॉपी. Print – Current Page किंवा All Pages.\n\nपुढील वर्ग: Part 2 मध्ये Home Tab – फॉन्ट स्टाइलिंग, पैराग्राफ अलाइनमेंट आणि टेक्स्ट फॉर्मॅटिंग."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 12 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "Which Run command should you type to launch Microsoft Word directly?",
              questionMr: "Microsoft Word थेट लॉन्च करण्यासाठी Run मध्ये कोणती कमांड टाइप करावी?",
              options: [
                { textEn: "winword", textMr: "winword" },
                { textEn: "word.exe", textMr: "word.exe" },
                { textEn: "write", textMr: "write" },
                { textEn: "msword", textMr: "msword" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "If you want to quickly generate placeholder text to practice formatting, what command should you type and press Enter?",
              questionMr: "फॉर्मॅटिंग सराव करण्यासाठी placeholder मजकूर झटपट तयार करण्यासाठी कोणती कमांड टाइप करून Enter द्यावा?",
              options: [
                { textEn: "=rand()", textMr: "=rand()" },
                { textEn: "=lorem()", textMr: "=lorem()" },
                { textEn: "=sample()", textMr: "=sample()" },
                { textEn: "=text()", textMr: "=text()" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "What is the primary difference between 'Save' and 'Save As'?",
              questionMr: "'Save' आणि 'Save As' मधील मुख्य फरक काय आहे?",
              options: [
                { textEn: "'Save' deletes the old file, while 'Save As' keeps it.", textMr: "'Save' जुनी फाइल डिलीट करते, 'Save As' ठेवते." },
                { textEn: "'Save' updates the current file, while 'Save As' creates a new copy with a different name or format.", textMr: "'Save' सध्याची फाइल अपडेट करते, 'Save As' वेगळ्या नावाने/फॉर्मॅटमध्ये नवी कॉपी तयार करते." },
                { textEn: "'Save As' is faster than 'Save'.", textMr: "'Save As' 'Save' पेक्षा वेगवान आहे." },
                { textEn: "'Save' is for text files only, while 'Save As' is for images.", textMr: "'Save' फक्त टेक्स्ट फाइल्ससाठी, 'Save As' चित्रांसाठी." }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which bar located at the bottom of the Word window displays the page count and zoom slider?",
              questionMr: "Word विंडोच्या खालच्या बाजूस कोणता बार पेज काउंट आणि zoom स्लायडर दाखवतो?",
              options: [
                { textEn: "Menu Bar", textMr: "Menu Bar" },
                { textEn: "Title Bar", textMr: "Title Bar" },
                { textEn: "Status Bar", textMr: "Status Bar" },
                { textEn: "Scroll Bar", textMr: "Scroll Bar" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Where would you look to find the 'Quick Access Toolbar'?",
              questionMr: "'Quick Access Toolbar' कुठे सापडते?",
              options: [
                { textEn: "At the very top of the window, near the Office Button.", textMr: "विंडोच्या अगदी वरच्या बाजूस, Office Button जवळ." },
                { textEn: "In the center of the document.", textMr: "दस्तऐवजाच्या मध्यभागी." },
                { textEn: "Inside the Format menu.", textMr: "Format मेनूच्या आत." },
                { textEn: "At the very bottom right of the screen.", textMr: "स्क्रीनच्या खालच्या उजव्या कोपऱ्यात." }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which print option should you choose if you only want to print the specific page where your cursor is currently placed?",
              questionMr: "फक्त ज्या पृष्ठावर cursor आहे तेच पृष्ठ प्रिंट करायचे असल्यास कोणता print पर्याय निवडावा?",
              options: [
                { textEn: "Print Selection", textMr: "Print Selection" },
                { textEn: "Print All Pages", textMr: "Print All Pages" },
                { textEn: "Quick Print", textMr: "Quick Print" },
                { textEn: "Print Current Page", textMr: "Print Current Page" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What is the function of 'Print Preview'?",
              questionMr: "'Print Preview' चे कार्य काय आहे?",
              options: [
                { textEn: "To change the font style automatically.", textMr: "फॉन्ट स्टाइल स्वयंचलित बदलणे." },
                { textEn: "To see exactly how the document will look on paper before printing.", textMr: "प्रिंट करण्यापूर्वी दस्तऐवज कागदावर कसा दिसेल ते बघणे." },
                { textEn: "To send the document to the printer immediately.", textMr: "दस्तऐवज ताबडतोब प्रिंटरवर पाठवणे." },
                { textEn: "To save the document as a PDF.", textMr: "दस्तऐवज PDF म्हणून सेव्ह करणे." }
              ],
              correctIndex: 1
            },
            {
              questionEn: "The main menu area in MS Word (2007 and later) that contains Tabs and Groups is called the:",
              questionMr: "MS Word (2007 आणि नंतर) मधील Tabs आणि Groups असलेल्या मुख्य मेनू क्षेत्राला काय म्हणतात?",
              options: [
                { textEn: "The Ruler", textMr: "The Ruler" },
                { textEn: "The Taskbar", textMr: "The Taskbar" },
                { textEn: "The Grid", textMr: "The Grid" },
                { textEn: "The Ribbon", textMr: "The Ribbon" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which keyboard shortcut is used to Save the current document?",
              questionMr: "सध्याचा दस्तऐवज सेव्ह करण्यासाठी कोणता कीबोर्ड शॉर्टकट वापरतात?",
              options: [
                { textEn: "Ctrl + O", textMr: "Ctrl + O" },
                { textEn: "Ctrl + P", textMr: "Ctrl + P" },
                { textEn: "Ctrl + S", textMr: "Ctrl + S" },
                { textEn: "Ctrl + N", textMr: "Ctrl + N" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What information does the Title Bar display?",
              questionMr: "Title Bar कोणती माहिती दाखवतो?",
              options: [
                { textEn: "The name of the document you are working on.", textMr: "तुम्ही ज्या दस्तऐवजावर काम करत आहात त्याचे नाव." },
                { textEn: "The zoom level.", textMr: "Zoom लेव्हल." },
                { textEn: "The available fonts.", textMr: "उपलब्ध फॉन्ट्स." },
                { textEn: "The number of pages in the document.", textMr: "दस्तऐवजातील पृष्ठांची संख्या." }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 13 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/pqP_RUBf-So?si=bfw9hoOoA9Z8D1y5" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 13 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #13: MS Word (Part 2) - Text Editing & Home Tab\n\nThis lesson covers the fundamentals of creating and editing documents in Microsoft Word, focusing on the essential tools found in the Home Tab.\n\n1. Typing & Editing Basics\n\nStarting Out: Typing begins where the cursor (blinking vertical line) is placed.\n\nCapitalization: Use Caps Lock to type entirely in capital letters. Hold Shift + [Letter] to capitalize only a single letter.\n\nNavigation: Spacebar creates a space between words. Enter Key moves the cursor to a new line (starts a new paragraph).\n\nDeleting Text: Backspace deletes characters to the left of the cursor. Delete Key deletes characters to the right of the cursor. Pro Tip: Hold Ctrl + Backspace (or Delete) to delete entire words at once.\n\n2. Selecting Text\n\nYou must select text before applying any formatting.\n\nWord: Double-click on the word.\n\nSentence/Paragraph: Triple-click within the text.\n\nManual: Click, hold, and drag the mouse over the text.\n\nEntire Document: Press Ctrl + A (Select All).\n\n3. The Home Tab: Clipboard & Formatting\n\nClipboard Group: Cut (Ctrl + X), Copy (Ctrl + C), Paste (Ctrl + V). Format Painter copies only the formatting and applies it to another text. Undo (Ctrl + Z) & Redo (Ctrl + Y).\n\nFont Group: Font Style & Size. Bold (B), Italic (I), Underline (U). Strikethrough. Subscript & Superscript (for formulas). Change Case. Clear Formatting.\n\nParagraph Group: Alignment (Left, Center, Right, Justify). Lists (Bullets, Numbered, Multilevel). Indents. Sorting. Line Spacing. Borders & Shading.\n\n4. Styles & Editing Groups\n\nStyles: Pre-set formatting for Titles, Headings, Quotes for a consistent look.\n\nFind (Ctrl + F): Search for specific words.\n\nReplace (Ctrl + H): Find a word and replace it with something else (e.g., \"2024\" with \"2025\" everywhere).\n\nSummary: Mastery of the Home Tab is 90% of basic document creation. Practice these shortcuts and tools to become significantly faster at editing.",
          "subsections.1.contentMr":
            "Computer Class Day #13: MS Word (Part 2) - Text Editing & Home Tab\n\nMS Word मध्ये दस्तऐवज तयार करणे आणि संपादन; Home Tab मधील मूलभूत साधने.\n\n१. टाइपिंग आणि एडिटिंग: कर्सर जिथे आहे तिथे टाइपिंग. Caps Lock – सर्व कॅपिटल; Shift+Letter – एक अक्षर कॅपिटल. Spacebar, Enter. Backspace (डावीकडे), Delete (उजवीकडे); Ctrl+Backspace/Delete – संपूर्ण शब्द हटवते.\n\n२. मजकूर निवडणे: फॉर्मॅटिंग आधी निवड करा. डबल-क्लिक – शब्द; ट्रिपल-क्लिक – वाक्य/पैराग्राफ; ड्रॅग – मॅन्युअल; Ctrl+A – संपूर्ण दस्तऐवज.\n\n३. Home Tab: Clipboard (Cut/Copy/Paste, Format Painter, Undo/Redo). Font (स्टाइल, साइझ, B/I/U, Strikethrough, Subscript/Superscript, Change Case, Clear Formatting). Paragraph (Alignment, Lists, Indents, Sort, Line Spacing, Borders & Shading).\n\n४. Styles आणि Editing: Styles (Title, Heading, Quote). Find (Ctrl+F), Replace (Ctrl+H).\n\nसारांश: Home Tab चे नियंत्रण मूलभूत दस्तऐवज निर्मितीच्या 90% आहे; शॉर्टकट्स आणि साधनांचा सराव करा."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 13 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "Which action allows you to quickly select an entire paragraph or sentence in MS Word?",
              questionMr: "MS Word मध्ये संपूर्ण पैराग्राफ किंवा वाक्य झटपट निवडण्यासाठी कोणती क्रिया करावी?",
              options: [
                { textEn: "Shift + Click", textMr: "Shift + Click" },
                { textEn: "Double-click within the text", textMr: "मजकूरात डबल-क्लिक करा" },
                { textEn: "Ctrl + Click", textMr: "Ctrl + Click" },
                { textEn: "Triple-click within the text", textMr: "मजकूरात ट्रिपल-क्लिक करा" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "If you want to delete an entire word to the left of your cursor without pressing Backspace multiple times, which shortcut should you use?",
              questionMr: "Backspace अनेक वेळा दाबल्याशिवाय कर्सरच्या डावीकडील संपूर्ण शब्द हटवायचा असल्यास कोणता शॉर्टकट वापरावा?",
              options: [
                { textEn: "Alt + Backspace", textMr: "Alt + Backspace" },
                { textEn: "Ctrl + Backspace", textMr: "Ctrl + Backspace" },
                { textEn: "Ctrl + Delete", textMr: "Ctrl + Delete" },
                { textEn: "Shift + Delete", textMr: "Shift + Delete" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What is the primary function of the 'Format Painter' tool?",
              questionMr: "'Format Painter' साधनाचे मुख्य कार्य काय आहे?",
              options: [
                { textEn: "To copy the text content and paste it elsewhere.", textMr: "मजकूर कॉपी करून दुसरीकडे पेस्ट करणे." },
                { textEn: "To highlight text in yellow.", textMr: "मजकूर पिवळा हायलाइट करणे." },
                { textEn: "To copy only the formatting of text and apply it to other text.", textMr: "फक्त मजकुराचे फॉर्मॅटिंग कॉपी करून दुसऱ्या मजकुरावर लावणे." },
                { textEn: "To draw shapes and color them.", textMr: "आकार काढून रंगवणे." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which keyboard shortcut opens the 'Replace' tool to find a specific word and change it to another?",
              questionMr: "विशिष्ट शब्द शोधून दुसऱ्याने बदलण्याचे 'Replace' साधन कोणता शॉर्टकट उघडते?",
              options: [
                { textEn: "Ctrl + H", textMr: "Ctrl + H" },
                { textEn: "Ctrl + R", textMr: "Ctrl + R" },
                { textEn: "Ctrl + G", textMr: "Ctrl + G" },
                { textEn: "Ctrl + F", textMr: "Ctrl + F" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which alignment option distributes text evenly between the margins, creating straight edges on both the left and right sides?",
              questionMr: "मजकूर मार्जिन दरम्यान समान वाटून डाव्या आणि उजव्या दोन्ही बाजू सरळ करणारा alignment पर्याय कोणता?",
              options: [
                { textEn: "Center", textMr: "Center" },
                { textEn: "Left Align", textMr: "Left Align" },
                { textEn: "Justify", textMr: "Justify" },
                { textEn: "Right Align", textMr: "Right Align" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you want to type a chemical formula like H2O where the '2' sits below the line, which feature should you use?",
              questionMr: "H2O सारख्या सूत्रात '2' ओळीखाली घालायचा असल्यास कोणती सुविधा वापरावी?",
              options: [
                { textEn: "Superscript", textMr: "Superscript" },
                { textEn: "Subscript", textMr: "Subscript" },
                { textEn: "Small Caps", textMr: "Small Caps" },
                { textEn: "Strikethrough", textMr: "Strikethrough" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What does the 'Clear Formatting' button do?",
              questionMr: "'Clear Formatting' बटण काय करते?",
              options: [
                { textEn: "It removes styles like bold and color, returning text to the default look.", textMr: "Bold, color सारखे स्टाइल काढून मजकूर डिफॉल्ट स्वरूपात आणते." },
                { textEn: "It deletes the selected text completely.", textMr: "निवडलेला मजकूर पूर्णपणे डिलीट करते." },
                { textEn: "It checks the document for spelling errors.", textMr: "दस्तऐवजातील स्पेलिंग तपासते." },
                { textEn: "It changes the text color to white.", textMr: "मजकुराचा रंग पांढरा करते." }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which keyboard shortcut is used to 'Cut' selected text to the clipboard?",
              questionMr: "निवडलेला मजकूर क्लिपबोर्डवर 'Cut' करण्यासाठी कोणता शॉर्टकट वापरतात?",
              options: [
                { textEn: "Ctrl + Z", textMr: "Ctrl + Z" },
                { textEn: "Ctrl + X", textMr: "Ctrl + X" },
                { textEn: "Ctrl + C", textMr: "Ctrl + C" },
                { textEn: "Ctrl + V", textMr: "Ctrl + V" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "If you accidentally deleted a paragraph, which shortcut would immediately bring it back?",
              questionMr: "चुकून पैराग्राफ डिलीट केल्यास तो ताबडतोब परत आणण्यासाठी कोणता शॉर्टकट वापरावा?",
              options: [
                { textEn: "Ctrl + Y", textMr: "Ctrl + Y" },
                { textEn: "Ctrl + A", textMr: "Ctrl + A" },
                { textEn: "Ctrl + S", textMr: "Ctrl + S" },
                { textEn: "Ctrl + Z", textMr: "Ctrl + Z" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which feature allows you to change text from 'lowercase' to 'UPPERCASE' without retyping it?",
              questionMr: "मजकूर पुन्हा टाइप न करता 'lowercase' ते 'UPPERCASE' बदलण्याची सुविधा कोणती?",
              options: [
                { textEn: "Text Highlight Color", textMr: "Text Highlight Color" },
                { textEn: "Font Size", textMr: "Font Size" },
                { textEn: "Change Case", textMr: "Change Case" },
                { textEn: "Bold", textMr: "Bold" }
              ],
              correctIndex: 2
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 14 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/mWLxz8q7ztE?si=mMnY-YX7Ph-RR0U3" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 14 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #14: MS Word Part 3 - The Insert Tab\n\nThis guide covers the key features and tools available in the Insert Tab of Microsoft Word, as explained in the \"EasyTech Class\" tutorial. The Insert Tab is primarily used to add various elements like tables, pictures, shapes, headers, footers, and links to your document.\n\n1. Pages Group\n\nThis group helps manage the overall structure and flow of pages in your document.\n\nCover Page: Allows you to insert a pre-designed front page for your document. You can customize the title, subtitle, author name, and date.\n\nBlank Page: Inserts a completely new blank page at the current cursor position.\n\nPage Break: Ends the current page at the cursor position and moves all subsequent content to the next page.\n\n2. Tables Group\n\nUsed to organize information in rows and columns.\n\nInserting a Table: Grid Method - Hover over the grid to select the number of columns and rows. Insert Table Dialog - Manually enter the specific number of columns and rows.\n\nFormatting: Once a table is inserted, the Design and Layout tabs appear, allowing you to change table styles, colors, borders, and adjust row/column sizes.\n\n3. Illustrations Group\n\nEnables the addition of visual elements to make the document more engaging.\n\nPictures: Insert images from your computer. You can resize, crop, and apply styles or borders using the Format tab.\n\nClip Art: (In older versions) Search for and insert simple graphic illustrations and drawings.\n\nShapes: Add geometric shapes, arrows, and lines. These can be customized with colors and shadows.\n\nSmartArt: Used for visual representations of information, such as organizational charts, process cycles, or hierarchies.\n\nChart: Insert various charts (Bar, Pie, Line, etc.) to represent data visually. This often opens an Excel-like window to manage the data.\n\n4. Links Group\n\nHelps connect the document to external resources or other parts of the same file.\n\nHyperlink: Links selected text to a website, another document, or a folder. (Shortcut: Ctrl + K)\n\nBookmark: Marks a specific location in the document so you can quickly jump back to it later.\n\nCross-reference: Refers to items like headings, figures, or tables within the same document, allowing you to jump to them by clicking.\n\n5. Header & Footer Group\n\nAdd content that repeats at the top or bottom of every page.\n\nHeader: Adds text (like document title or author) at the top of every page.\n\nFooter: Adds text at the bottom of every page.\n\nPage Number: Automatically inserts page numbers at the top, bottom, or margins.\n\n6. Text Group\n\nProvides advanced text-based elements.\n\nText Box: A movable box that holds text, useful for pull quotes or specific layout needs.\n\nQuick Parts: Saves frequently used text (like addresses or company names) so they can be reinserted instantly without retyping.\n\nWordArt: Adds stylized, decorative text effects.\n\nDrop Cap: Enlarges the first letter of a paragraph (often seen in newspapers or magazines).\n\nSignature Line: Adds a formal signature placeholder at the end of a document.\n\nDate & Time: Quickly inserts the current date and time in various formats.\n\n7. Symbols Group\n\nFor specialized characters and mathematical content.\n\nEquation: Insert mathematical formulas and complex equations.\n\nSymbol: Add special characters not found on the keyboard (like copyright, registered, or Greek letters).\n\nNote: These features are based on MS Word (as demonstrated in the video). Menus may vary slightly depending on your version of Office.",
          "subsections.1.contentMr":
            "Computer Class Day #14: MS Word Part 3 - The Insert Tab\n\nInsert Tab मध्ये टेबल्स, चित्रे, शेप्स, हेडर, फूटर आणि लिंक्स जोडण्याची साधने.\n\n१. Pages: Cover Page (प्री-डिझाइन फ्रंट पेज), Blank Page, Page Break.\n\n२. Tables: ग्रिड किंवा Insert Table डायलॉगद्वारे row/column; Design आणि Layout टॅब्स – स्टाइल्स, रंग, बॉर्डर, आकार.\n\n३. Illustrations: Pictures (संगणकावरून, resize/crop/Format), Clip Art (जुन्या आवृत्ती), Shapes, SmartArt (ऑर्ग चार्ट, प्रक्रिया), Chart (Bar, Pie, Line – Excel सारखे डेटा).\n\n४. Links: Hyperlink (Ctrl+K), Bookmark, Cross-reference.\n\n५. Header & Footer: Header, Footer, Page Number.\n\n६. Text: Text Box, Quick Parts, WordArt, Drop Cap, Signature Line, Date & Time.\n\n७. Symbols: Equation, Symbol (©, ®, ग्रीक अक्षरे).\n\nटीप: Office आवृत्तीनुसार मेनू थोडे वेगळे असू शकतात."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 14 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "Which feature in the Pages group would you use to insert a pre-designed front page with placeholders for title, author, and date?",
              questionMr: "शीर्षक, लेखक आणि तारीखसाठी placeholders असलेला प्री-डिझाइन फ्रंट पेज घालण्यासाठी Pages गटात कोणती सुविधा वापरावी?",
              options: [
                { textEn: "Quick Parts", textMr: "Quick Parts" },
                { textEn: "Blank Page", textMr: "Blank Page" },
                { textEn: "Cover Page", textMr: "Cover Page" },
                { textEn: "Page Break", textMr: "Page Break" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you want to end the current page immediately and move all subsequent content to the top of the next page, which command should you use?",
              questionMr: "सध्याचे पृष्ठ ताबडतोब संपवून पुढील सर्व मजकूर पुढच्या पृष्ठाच्या वरच्या बाजूस हलवायचा असल्यास कोणती कमांड वापरावी?",
              options: [
                { textEn: "Page Break", textMr: "Page Break" },
                { textEn: "Text Box", textMr: "Text Box" },
                { textEn: "Bookmark", textMr: "Bookmark" },
                { textEn: "SmartArt", textMr: "SmartArt" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "When inserting a table, which two specific tabs appear to allow you to format styles and adjust row/column sizes?",
              questionMr: "टेबल घातल्यावर स्टाइल्स फॉर्मॅट करण्यासाठी आणि row/column आकार समायोजित करण्यासाठी कोणते दोन टॅब्स दिसतात?",
              options: [
                { textEn: "References and Mailings", textMr: "References and Mailings" },
                { textEn: "Design and Layout", textMr: "Design and Layout" },
                { textEn: "View and Review", textMr: "View and Review" },
                { textEn: "Home and Insert", textMr: "Home and Insert" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which tool in the Illustrations group is best suited for creating visual representations of information, such as organizational charts or process cycles?",
              questionMr: "Illustrations गटातील कोणते साधन संघटनात्मक चार्ट किंवा प्रक्रिया चक्र सारख्या माहितीचे दृश्य प्रतिनिधित्व तयार करण्यासाठी योग्य आहे?",
              options: [
                { textEn: "Chart", textMr: "Chart" },
                { textEn: "SmartArt", textMr: "SmartArt" },
                { textEn: "Screenshot", textMr: "Screenshot" },
                { textEn: "Shapes", textMr: "Shapes" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What is the keyboard shortcut mentioned for creating a Hyperlink?",
              questionMr: "Hyperlink तयार करण्यासाठी दिलेला कीबोर्ड शॉर्टकट कोणता?",
              options: [
                { textEn: "Ctrl + P", textMr: "Ctrl + P" },
                { textEn: "Ctrl + K", textMr: "Ctrl + K" },
                { textEn: "Ctrl + H", textMr: "Ctrl + H" },
                { textEn: "Ctrl + L", textMr: "Ctrl + L" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which feature allows you to jump to specific headings, figures, or tables within the same document by clicking on a reference?",
              questionMr: "संदर्भावर क्लिक करून त्याच दस्तऐवजातील विशिष्ट हेडिंग्स, आकृत्या किंवा टेबल्सवर जाण्याची सुविधा कोणती?",
              options: [
                { textEn: "WordArt", textMr: "WordArt" },
                { textEn: "Cross-reference", textMr: "Cross-reference" },
                { textEn: "Signature Line", textMr: "Signature Line" },
                { textEn: "Hyperlink", textMr: "Hyperlink" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You want to add the document title to the top of every page automatically. Which feature should you use?",
              questionMr: "दस्तऐवजाचे शीर्षक प्रत्येक पृष्ठाच्या वरच्या बाजूस स्वयंचलित जोडायचे आहे. कोणती सुविधा वापरावी?",
              options: [
                { textEn: "Drop Cap", textMr: "Drop Cap" },
                { textEn: "Header", textMr: "Header" },
                { textEn: "Text Box", textMr: "Text Box" },
                { textEn: "Footer", textMr: "Footer" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What is the primary purpose of the 'Quick Parts' feature?",
              questionMr: "'Quick Parts' सुविधेचा मुख्य उद्देश काय आहे?",
              options: [
                { textEn: "To insert mathematical equations quickly.", textMr: "गणिती समीकरणे झटपट घालणे." },
                { textEn: "To create a quick chart from data.", textMr: "डेटावरून झटपट चार्ट तयार करणे." },
                { textEn: "To quickly add a border to a picture.", textMr: "चित्राला झटपट बॉर्डर जोडणे." },
                { textEn: "To save and reinsert frequently used text or properties.", textMr: "वारंवार वापरलेला मजकूर किंवा गुणधर्म सेव्ह करून पुन्हा घालणे." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which text feature enlarges the first letter of a paragraph to make it decorative, often seen in newspapers?",
              questionMr: "पैराग्राफचे पहिले अक्षर सजावटीने मोठे करणारी, वृत्तपत्रांमध्ये दिसणारी टेक्स्ट सुविधा कोणती?",
              options: [
                { textEn: "Drop Cap", textMr: "Drop Cap" },
                { textEn: "Symbol", textMr: "Symbol" },
                { textEn: "WordArt", textMr: "WordArt" },
                { textEn: "Text Box", textMr: "Text Box" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which tool would you use to insert complex mathematical formulas into your document?",
              questionMr: "दस्तऐवजात जटिल गणिती सूत्रे घालण्यासाठी कोणते साधन वापरावे?",
              options: [
                { textEn: "Equation", textMr: "Equation" },
                { textEn: "Chart", textMr: "Chart" },
                { textEn: "Symbol", textMr: "Symbol" },
                { textEn: "SmartArt", textMr: "SmartArt" }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 15 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/EFw00omO54A?si=gy3wAq41HJvJWRBJ" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 15 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #15: MS Word Part 4 - The Page Layout Tab\n\nThis guide covers the tools available in the Page Layout Tab of Microsoft Word, as explained in the \"EasyTech Class\" tutorial. This tab is essential for controlling the overall appearance, page structure, and print settings of your document.\n\n1. Themes Group\n\nThemes allow you to change the entire look of your document with one click.\n\nThemes: Changes colors, font styles, and object effects across the whole document.\n\nColors, Fonts, & Effects: You can customize a theme by choosing specific color palettes or font sets while keeping the rest of the theme intact.\n\n2. Page Setup Group (Crucial for Printing)\n\nMargins: Adjusts the white space around the text (Top, Bottom, Left, Right). Options: Normal, Narrow, Wide, or Custom Margins (set in cm).\n\nOrientation: Choose between Portrait (vertical) and Landscape (horizontal).\n\nSize: Select the paper size for your document. A4 is the most common standard for printing.\n\nColumns: Divides text into two or more columns (useful for newsletters or newspapers).\n\nBreaks: Page Break moves content to the next page. Column Break moves text to the next column. Section Breaks apply different formatting to different parts (Next Page, Continuous, Even/Odd Page).\n\nHyphenation: When a word is too long to fit at the end of a line, Word can hyphenate it to keep the text balanced.\n\n3. Page Background Group\n\nWatermark: Adds faint text (e.g. \"Confidential\") or an image behind the document.\n\nPage Color: Changes the background color of the entire page.\n\nPage Borders: Adds decorative borders around the edges of the page.\n\n4. Paragraph Group\n\nIndent: Adjust the left or right margin of a specific paragraph (in cm).\n\nSpacing (Before/After): Control space before or after a paragraph (in points).\n\n5. Arrange Group (For Images & Objects)\n\nWhen an image or shape is selected: Position (place image on page), Wrap Text (how text flows around image), Align (multiple objects), Group (join objects as one), Rotate.\n\nNote: Concepts apply to Word 2007 and modern versions (2010, 2013, 2016, 2019, Office 365).",
          "subsections.1.contentMr":
            "Computer Class Day #15: MS Word Part 4 - The Page Layout Tab\n\nPage Layout टॅब – दस्तऐवजाचे स्वरूप, पृष्ठ रचना आणि प्रिंट सेटिंग्ज.\n\n१. Themes: एका क्लिकमध्ये रंग, फॉन्ट स्टाइल्स आणि ऑब्जेक्ट इफेक्ट्स. Colors, Fonts, Effects द्वारे कस्टमायझ.\n\n२. Page Setup: Margins (Normal/Narrow/Wide/Custom, cm), Orientation (Portrait/Landscape), Size (A4 सामान्य), Columns, Breaks (Page/Column/Section – Next Page, Continuous, Even/Odd), Hyphenation.\n\n३. Page Background: Watermark, Page Color, Page Borders.\n\n४. Paragraph: Indent (cm), Spacing Before/After (pt).\n\n५. Arrange (चित्रे/ऑब्जेक्ट्स निवडल्यावर): Position, Wrap Text, Align, Group, Rotate.\n\nटीप: Word 2007 ते Office 365 पर्यंत संकल्पना लागू."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 15 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "Which feature in the Page Setup group controls the amount of white space around the top, bottom, left, and right edges of your document?",
              questionMr: "Page Setup गटातील कोणती सुविधा दस्तऐवजाच्या वर, खाली, डावी आणि उजवी कडांभोवतीची पांढरी जागा नियंत्रित करते?",
              options: [
                { textEn: "Columns", textMr: "Columns" },
                { textEn: "Size", textMr: "Size" },
                { textEn: "Margins", textMr: "Margins" },
                { textEn: "Orientation", textMr: "Orientation" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You want your document to be wider than it is tall (horizontal layout). Which Page Setup option should you change?",
              questionMr: "दस्तऐवज उंचीपेक्षा रुंद असावा (आडवे लेआउट) असे वाटत असेल तर Page Setup मधील कोणता पर्याय बदलावा?",
              options: [
                { textEn: "Orientation", textMr: "Orientation" },
                { textEn: "Size", textMr: "Size" },
                { textEn: "Margins", textMr: "Margins" },
                { textEn: "Breaks", textMr: "Breaks" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which Section Break would you use if you want to change formatting (like columns) in the middle of a page without starting a new page?",
              questionMr: "नवीन पृष्ठ न सुरू करता पृष्ठाच्या मध्यात फॉर्मॅटिंग (उदा. columns) बदलायची असल्यास कोणता Section Break वापरावा?",
              options: [
                { textEn: "Next Page", textMr: "Next Page" },
                { textEn: "Page Break", textMr: "Page Break" },
                { textEn: "Even Page", textMr: "Even Page" },
                { textEn: "Continuous", textMr: "Continuous" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What is the primary purpose of the 'Watermark' feature in the Page Background group?",
              questionMr: "Page Background गटातील 'Watermark' सुविधेचा मुख्य उद्देश काय आहे?",
              options: [
                { textEn: "To change the background color of the entire page.", textMr: "संपूर्ण पृष्ठाचा बॅकग्राउंड रंग बदलणे." },
                { textEn: "To add a decorative border around the page.", textMr: "पृष्ठाभोवती सजावटीचा बॉर्डर जोडणे." },
                { textEn: "To add faint text or images behind the content.", textMr: "मजकुराच्या मागे हलका मजकूर किंवा चित्रे जोडणे." },
                { textEn: "To adjust paragraph indentation.", textMr: "पैराग्राफ इंडेंटेशन समायोजित करणे." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you want to split your text into two vertical blocks, similar to a newspaper layout, which tool should you use?",
              questionMr: "मजकूर वृत्तपत्र सारख्या दोन उभ्या ब्लॉक्समध्ये विभाजित करायचा असल्यास कोणते साधन वापरावे?",
              options: [
                { textEn: "Hyphenation", textMr: "Hyphenation" },
                { textEn: "Line Numbers", textMr: "Line Numbers" },
                { textEn: "Columns", textMr: "Columns" },
                { textEn: "Orientation", textMr: "Orientation" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which tool allows you to change the colors, fonts, and effects of the entire document with a single click?",
              questionMr: "एका क्लिकमध्ये संपूर्ण दस्तऐवजाचे रंग, फॉन्ट्स आणि इफेक्ट्स बदलण्याचे साधन कोणते?",
              options: [
                { textEn: "Themes", textMr: "Themes" },
                { textEn: "Styles", textMr: "Styles" },
                { textEn: "Page Color", textMr: "Page Color" },
                { textEn: "AutoFormat", textMr: "AutoFormat" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "In the Paragraph group of the Page Layout tab, what does the 'Spacing: After' setting control?",
              questionMr: "Page Layout टॅबच्या Paragraph गटात 'Spacing: After' सेटिंग काय नियंत्रित करते?",
              options: [
                { textEn: "The amount of space added below a paragraph.", textMr: "पैराग्राफ खाली जोडलेली जागा." },
                { textEn: "The width of the page margins.", textMr: "पृष्ठ मार्जिनची रुंदी." },
                { textEn: "The indentation of the first line.", textMr: "पहिल्या ओळीचे इंडेंटेशन." },
                { textEn: "The space between characters in a word.", textMr: "शब्दातील अक्षरांमधील जागा." }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which feature helps prevent large gaps in text alignment by splitting long words at the end of a line?",
              questionMr: "ओळीच्या शेवटी लांब शब्द विभाजित करून मजकूर अलाइनमेंटमधील मोठ्या गॅप्स टाळण्यास कोणती सुविधा मदत करते?",
              options: [
                { textEn: "Text Wrapping", textMr: "Text Wrapping" },
                { textEn: "Kerning", textMr: "Kerning" },
                { textEn: "Hyphenation", textMr: "Hyphenation" },
                { textEn: "Justify", textMr: "Justify" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You have inserted an image and want the text to flow tightly around its edges. Which Arrange tool do you use?",
              questionMr: "चित्र घातले आहे आणि मजकूर त्याच्या कडांभोवती घट्ट वाहावा असे वाटते. Arrange मधील कोणते साधन वापरावे?",
              options: [
                { textEn: "Align", textMr: "Align" },
                { textEn: "Wrap Text", textMr: "Wrap Text" },
                { textEn: "Rotate", textMr: "Rotate" },
                { textEn: "Position", textMr: "Position" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "How can you treat multiple shapes or images as a single object so they move together?",
              questionMr: "अनेक शेप्स किंवा चित्रे एकाच ऑब्जेक्टप्रमाणे एकत्र हलवण्यासाठी काय करावे?",
              options: [
                { textEn: "Group", textMr: "Group" },
                { textEn: "Anchor", textMr: "Anchor" },
                { textEn: "Combine", textMr: "Combine" },
                { textEn: "Link", textMr: "Link" }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 16 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/uOCyvUoUA0c?si=sx_Dkj-SJrMnUlkJ" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 16 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #16: MS Word Part 5 - The References Tab\n\nThe References Tab is primarily used for creating professional, academic, and research-based documents. It helps you organize content, provide credit to sources, and help readers navigate long documents.\n\n1. Table of Contents (TOC)\n\nThis feature creates a summary of the headings and sub-headings used in your document, including their page numbers.\n\nTable of Contents: Choose a style to automatically generate a table based on your Heading levels (Heading 1, 2, 3).\n\nAdd Text: If you haven't used the Home tab styles, you can manually mark text as Level 1, 2, or 3 for inclusion in the TOC.\n\nUpdate Table: If you change your headings or add more content, use this to refresh the TOC and page numbers.\n\n2. Footnotes & Endnotes\n\nUsed to provide additional explanations or references for specific words or sentences without cluttering the main body.\n\nInsert Footnote: Adds a note at the bottom of the current page.\n\nInsert Endnote: Adds a note at the very end of the document.\n\nNext Footnote: A navigation tool to jump between different notes in your file.\n\nShow Notes: Quickly scrolls the document to the footnote or endnote area.\n\n3. Citations & Bibliography\n\nCrucial for research papers to avoid plagiarism by citing your sources.\n\nInsert Citation: Add a source (Book, Website, Article, etc.). You enter details like Author, Title, Year, and Publisher.\n\nManage Sources: A central list of all sources you've ever cited, allowing you to reuse them in different parts of the document.\n\nStyle: Select the citation format (APA, MLA, Chicago, etc.).\n\nBibliography: Generates a full list of all cited sources at the end of the document with complete details.\n\n4. Captions\n\nInsert Caption: Adds a label (e.g., \"Figure 1: Keyboard\") to an image, table, or chart.\n\nInsert Table of Figures: Creates a list of all captioned images/tables with their page numbers.\n\nCross-reference: Link text to a specific figure (e.g., \"See Figure 1\") so clicking takes you to that image.\n\n5. Index\n\nMark Entry: Select a keyword and mark it as an index entry.\n\nInsert Index: Generates an alphabetical index list at the end of your document.\n\n6. Table of Authorities\n\nUsed in legal documents. Mark Citation marks legal text under a category (Cases, Statutes, etc.). Insert Table of Authorities creates a list showing which legal references appear on which pages.\n\nSummary: The References tab supports structured, professional document management beyond simple typing.",
          "subsections.1.contentMr":
            "Computer Class Day #16: MS Word Part 5 - The References Tab\n\nReferences टॅब व्यावसायिक, शैक्षणिक आणि संशोधन दस्तऐवजांसाठी; स्रोतांचे श्रेय, नेव्हिगेशन.\n\n१. Table of Contents (TOC): हेडिंग्सवर आधारित सारणी; Add Text (Level 1/2/3), Update Table.\n\n२. Footnotes & Endnotes: Insert Footnote (पृष्ठाच्या खाली), Insert Endnote (दस्तऐवज शेवटी), Next Footnote, Show Notes.\n\n३. Citations & Bibliography: Insert Citation (स्रोत तपशील), Manage Sources, Style (APA, MLA, Chicago), Bibliography.\n\n४. Captions: Insert Caption (Figure 1 इ.), Insert Table of Figures, Cross-reference.\n\n५. Index: Mark Entry, Insert Index (वर्णक्रमानुसार).\n\n६. Table of Authorities: कायदेशीर दस्तऐवज – Mark Citation, Insert Table of Authorities.\n\nसारांश: References टॅब संरचित, व्यावसायिक दस्तऐवज व्यवस्थापनासाठी."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 16 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "Which specific element does the 'Table of Contents' feature primarily rely on to automatically generate the list structure?",
              questionMr: "'Table of Contents' सुविधा यादी स्वयंचलित तयार करण्यासाठी मुख्यतः कोणत्या घटकावर अवलंबून आहे?",
              options: [
                { textEn: "Footnotes", textMr: "Footnotes" },
                { textEn: "Page Borders", textMr: "Page Borders" },
                { textEn: "Bookmarks", textMr: "Bookmarks" },
                { textEn: "Heading Styles", textMr: "Heading Styles" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What is the key difference between a Footnote and an Endnote regarding their placement?",
              questionMr: "Footnote आणि Endnote मध्ये ठिकाणाचा मुख्य फरक काय आहे?",
              options: [
                { textEn: "Footnotes appear at the top of the page; Endnotes appear at the bottom.", textMr: "Footnotes पृष्ठाच्या वर; Endnotes खाली." },
                { textEn: "Footnotes are for images only; Endnotes are for text only.", textMr: "Footnotes फक्त चित्रांसाठी; Endnotes फक्त मजकूरासाठी." },
                { textEn: "There is no difference; they are just different names for the same feature.", textMr: "फरक नाही; समान सुविधेची वेगवेगळी नावे." },
                { textEn: "Footnotes appear at the bottom of the page; Endnotes appear at the end of the document.", textMr: "Footnotes पृष्ठाच्या खाली; Endnotes दस्तऐवजाच्या शेवटी." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You have added a new chapter and changed some headings. What must you do to ensure the Table of Contents reflects these changes?",
              questionMr: "नवीन अध्याय आणि हेडिंग बदलल्यावर Table of Contents ते बदल दाखवावी म्हणून काय करावे?",
              options: [
                { textEn: "Insert a new Cover Page.", textMr: "नवीन Cover Page घाला." },
                { textEn: "Re-type the Table of Contents manually.", textMr: "Table of Contents पुन्हा हाताने टाइप करा." },
                { textEn: "Click 'Update Table'.", textMr: "'Update Table' क्लिक करा." },
                { textEn: "Use the 'Track Changes' feature.", textMr: "'Track Changes' वापरा." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which tool would you use to create a list of all the images, charts, and tables in your document along with their page numbers?",
              questionMr: "दस्तऐवजातील सर्व चित्रे, चार्ट्स आणि टेबल्सची यादी आणि पृष्ठ क्रमांक तयार करण्यास कोणते साधन वापरावे?",
              options: [
                { textEn: "Table of Authorities", textMr: "Table of Authorities" },
                { textEn: "Index", textMr: "Index" },
                { textEn: "Insert Table of Figures", textMr: "Insert Table of Figures" },
                { textEn: "Bibliography", textMr: "Bibliography" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "In a legal document, which feature is used to list citations of cases, statutes, and rules?",
              questionMr: "कायदेशीर दस्तऐवजात केसेस, कायदे आणि नियमांची उद्धरणे सूचीबद्ध करण्यास कोणती सुविधा वापरतात?",
              options: [
                { textEn: "SmartArt", textMr: "SmartArt" },
                { textEn: "Cross-reference", textMr: "Cross-reference" },
                { textEn: "Table of Figures", textMr: "Table of Figures" },
                { textEn: "Table of Authorities", textMr: "Table of Authorities" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What is the primary purpose of the 'Manage Sources' feature in the Citations & Bibliography group?",
              questionMr: "Citations & Bibliography गटातील 'Manage Sources' सुविधेचा मुख्य उद्देश काय आहे?",
              options: [
                { textEn: "To search the internet for new books.", textMr: "नवीन पुस्तकांसाठी इंटरनेट शोधणे." },
                { textEn: "To automatically write the essay for you.", textMr: "निबंध स्वयंचलित लिहिणे." },
                { textEn: "To change the font of the bibliography.", textMr: "बिब्लिओग्राफीचा फॉन्ट बदलणे." },
                { textEn: "To create a central list of cited sources for reuse.", textMr: "पुनर्वापरासाठी उद्धृत स्रोतांची केंद्रीय यादी तयार करणे." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which feature generates an alphabetical list of keywords and the page numbers where they appear, usually found at the end of a book?",
              questionMr: "कोणती सुविधा कीवर्ड्सची वर्णक्रमानुसार यादी आणि पृष्ठ क्रमांक तयार करते, सहसा पुस्तकाच्या शेवटी?",
              options: [
                { textEn: "Caption", textMr: "Caption" },
                { textEn: "Index", textMr: "Index" },
                { textEn: "Table of Contents", textMr: "Table of Contents" },
                { textEn: "Citation", textMr: "Citation" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "If you want to create a clickable link in your text that says 'See Figure 1' and takes the reader to that image, which tool should you use?",
              questionMr: "'See Figure 1' असे क्लिक करण्यायोग्य लिंक तयार करून वाचकाला त्या चित्रावर नेण्यास कोणते साधन वापरावे?",
              options: [
                { textEn: "Cross-reference", textMr: "Cross-reference" },
                { textEn: "Hyperlink", textMr: "Hyperlink" },
                { textEn: "Bookmark", textMr: "Bookmark" },
                { textEn: "Watermark", textMr: "Watermark" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which of the following is NOT a standard Citation Style available in MS Word?",
              questionMr: "खालीलपैकी MS Word मध्ये उपलब्ध मानक Citation Style कोणता नाही?",
              options: [
                { textEn: "Twitter Thread", textMr: "Twitter Thread" },
                { textEn: "Chicago", textMr: "Chicago" },
                { textEn: "APA", textMr: "APA" },
                { textEn: "MLA", textMr: "MLA" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "To add a label like 'Figure 1' below an image, which button in the Captions group should you click?",
              questionMr: "चित्राखाली 'Figure 1' सारखे लेबल घालण्यासाठी Captions गटात कोणते बटण क्लिक करावे?",
              options: [
                { textEn: "Update Table", textMr: "Update Table" },
                { textEn: "Mark Entry", textMr: "Mark Entry" },
                { textEn: "Insert Citation", textMr: "Insert Citation" },
                { textEn: "Insert Caption", textMr: "Insert Caption" }
              ],
              correctIndex: 3
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 17 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/zSeZWjSUubo?si=wOBmFjyBDFfJltau" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 17 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #17: MS Word Part 6 - The Mailings Tab\n\nThe Mailings Tab is used to create and send mass communications like letters, emails, envelopes, and labels. It is particularly useful for tasks like sending wedding invitations, company newsletters, or product labels.\n\n1. Create Group\n\nThis group allows you to prepare individual mailing items.\n\nEnvelopes: Used to print sender and recipient addresses directly onto a physical envelope. Delivery Address (recipient) and Return Address (yours). Options include Envelope Size (e.g. DL), Font Customization for both addresses. You can print directly or \"Add to Document\" to preview before printing.\n\nLabels: Used to create stickers for products, couriers, or school books. Enter text in the address box. Printing: Full Page (same on every label) or Single Label. Select the correct Label Vendor (e.g. Avery A4/A5) and Product Number from your label packaging so text aligns with the physical labels.\n\n2. Start Mail Merge Group (Overview)\n\nMail Merge combines a single document with a list of recipients to create multiple personalized documents at once.\n\nStart Mail Merge: Choose document type (Letters, E-mail Messages, Envelopes, etc.).\n\nSelect Recipients: Type a New List (manual), Use an Existing List (Excel/database), or Select from Outlook Contacts.\n\n3. The Mail Merge Workflow (Summary)\n\nDrafting the Document: Write the letter or email once.\n\nInserting Merge Fields: Place placeholders (e.g. <<Name>>, <<City>>) where recipient data should go.\n\nPreviewing: See how each document looks with real data.\n\nFinishing: Print all documents or send all emails at once.\n\nNote: Mail Merge saves hours when dealing with hundreds of recipients.",
          "subsections.1.contentMr":
            "Computer Class Day #17: MS Word Part 6 - The Mailings Tab\n\nMailings टॅब मास कम्युनिकेशन्स – पत्रे, ईमेल, लिफाफे, लेबल्स (उदा. लग्न निमंत्रणे, न्यूझलेटर).\n\n१. Create गट: Envelopes – Delivery Address, Return Address; size (DL), font; Print किंवा Add to Document. Labels – मजकूर टाइप करा; Full Page / Single Label; Label Vendor आणि Product Number (उदा. Avery) निवडा.\n\n२. Start Mail Merge: दस्तऐवज प्रकार निवडा (Letters, E-mail, Envelopes). Select Recipients – Type a New List, Use an Existing List (Excel/DB), Select from Outlook Contacts.\n\n३. Mail Merge प्रक्रिया: दस्तऐवज लिहा -> Merge Fields घाला (<<Name>>, <<City>>) -> Preview -> Finish (प्रिंट किंवा ईमेल पाठवा).\n\nटीप: शेकडो प्राप्तकर्त्यांसाठी Mail Merge खूप वेळ वाचवते."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 17 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "You need to send a formal letter to 500 different clients, each personalized with their name. Which feature on the Mailings tab is designed specifically for this task?",
              questionMr: "500 वेगवेगळ्या क्लायंट्सना त्यांच्या नावाने वैयक्तिकृत औपचारिक पत्र पाठवायचे आहे. Mailings टॅबवरील कोणती सुविधा यासाठी आहे?",
              options: [
                { textEn: "Cross-reference", textMr: "Cross-reference" },
                { textEn: "Envelopes", textMr: "Envelopes" },
                { textEn: "Mail Merge", textMr: "Mail Merge" },
                { textEn: "Labels", textMr: "Labels" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "When setting up a physical envelope in Word, where should you input your own address to ensure the mail can be sent back to you if undeliverable?",
              questionMr: "Word मध्ये भौतिक लिफाफा सेटअप करताना पोहोचू न शकल्यास मेल परत यावी म्हणून तुमचा पत्ता कुठे टाइप करावा?",
              options: [
                { textEn: "Label Vendor", textMr: "Label Vendor" },
                { textEn: "Return Address", textMr: "Return Address" },
                { textEn: "Merge Field", textMr: "Merge Field" },
                { textEn: "Delivery Address", textMr: "Delivery Address" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You have purchased a packet of sticker paper to print address labels. Why is it critical to select the correct 'Label Vendor' and 'Product Number' in Word?",
              questionMr: "पत्ता लेबल्स प्रिंट करण्यासाठी स्टिकर पेपर आणल्यावर Word मध्ये योग्य 'Label Vendor' आणि 'Product Number' निवडणे का महत्त्वाचे आहे?",
              options: [
                { textEn: "To add a digital signature.", textMr: "डिजिटल सही जोडणे." },
                { textEn: "To ensure the text aligns perfectly with the physical cuts on the sticker paper.", textMr: "मजकूर स्टिकर पेपरच्या भौतिक कट्सशी परिपूर्ण संरेखित होण्यासाठी." },
                { textEn: "To import contacts from Outlook.", textMr: "Outlook मधून संपर्क आयात करणे." },
                { textEn: "To change the font color automatically.", textMr: "फॉन्ट रंग स्वयंचलित बदलणे." }
              ],
              correctIndex: 1
            },
            {
              questionEn: "In the Mail Merge workflow, what is the specific term for the placeholders like <<Name>> or <<City>> that you insert into your document?",
              questionMr: "Mail Merge प्रक्रियेत दस्तऐवजात घातलेल्या <<Name>> किंवा <<City>> सारख्या placeholders ला काय म्हणतात?",
              options: [
                { textEn: "Hyperlinks", textMr: "Hyperlinks" },
                { textEn: "SmartArt", textMr: "SmartArt" },
                { textEn: "Watermarks", textMr: "Watermarks" },
                { textEn: "Merge Fields", textMr: "Merge Fields" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "If you want to print a full sheet of identical return address stickers, which option in the Labels dialog box should you choose?",
              questionMr: "संपूर्ण शीटवर एकसारखे रिटर्न अॅड्रेस स्टिकर्स प्रिंट करायचे असल्यास Labels डायलॉगमध्ये कोणता पर्याय निवडावा?",
              options: [
                { textEn: "Envelope Size", textMr: "Envelope Size" },
                { textEn: "Start Mail Merge", textMr: "Start Mail Merge" },
                { textEn: "Full Page of the Same Label", textMr: "Full Page of the Same Label" },
                { textEn: "Single Label", textMr: "Single Label" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which of the following is NOT a standard method mentioned for selecting recipients in a Mail Merge?",
              questionMr: "Mail Merge मध्ये प्राप्तकर्ते निवडण्याची खालीलपैकी कोणती मानक पद्धत नाही?",
              options: [
                { textEn: "Use an Existing List", textMr: "Use an Existing List" },
                { textEn: "Scan Business Cards via Webcam", textMr: "Scan Business Cards via Webcam" },
                { textEn: "Type a New List", textMr: "Type a New List" },
                { textEn: "Select from Outlook Contacts", textMr: "Select from Outlook Contacts" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Why is the 'Preview Results' step in the Mail Merge workflow important?",
              questionMr: "Mail Merge प्रक्रियेत 'Preview Results' पायरी का महत्त्वाची आहे?",
              options: [
                { textEn: "It selects the printer settings.", textMr: "तो प्रिंटर सेटिंग्स निवडतो." },
                { textEn: "It saves the document as a PDF.", textMr: "तो दस्तऐवज PDF म्हणून सेव्ह करतो." },
                { textEn: "It automatically corrects spelling errors.", textMr: "तो स्पेलिंग चुका स्वयंचलित दुरुस्त करतो." },
                { textEn: "It allows you to see how the document looks with real recipient data before printing.", textMr: "प्रिंट करण्यापूर्वी वास्तविक प्राप्तकर्ता डेटासह दस्तऐवज कसा दिसतो ते बघण्यास मदत करते." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You are setting up an envelope but want the recipient's name to appear in a specific fancy font. Where can you change this?",
              questionMr: "लिफाफा सेटअप करत आहात आणि प्राप्तकर्त्याचे नाव विशिष्ट फॅन्सी फॉन्टमध्ये दिसावे असे वाटते. हे कुठे बदलता येईल?",
              options: [
                { textEn: "By using the 'Reference' tab.", textMr: "'Reference' टॅब वापरून." },
                { textEn: "By changing the Label Vendor.", textMr: "Label Vendor बदलून." },
                { textEn: "In the 'Options' menu within the Envelopes dialog.", textMr: "Envelopes डायलॉगमधील 'Options' मेनूमध्ये." },
                { textEn: "You cannot change the font on envelopes.", textMr: "लिफाफ्यावर फॉन्ट बदलता येत नाही." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What is the standard size used for business envelopes as mentioned in the notes, though custom sizes are available?",
              questionMr: "नोट्सनुसार व्यावसायिक लिफाफ्यांसाठी वापरलेला मानक साइझ कोणता (कस्टम साइझ उपलब्ध असले तरी)?",
              options: [
                { textEn: "DL", textMr: "DL" },
                { textEn: "A4", textMr: "A4" },
                { textEn: "Passport", textMr: "Passport" },
                { textEn: "Letter", textMr: "Letter" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "What is the final step in the Mail Merge workflow to generate the actual documents?",
              questionMr: "वास्तविक दस्तऐवज तयार करण्यासाठी Mail Merge प्रक्रियेतील अंतिम पायरी कोणती?",
              options: [
                { textEn: "Finish & Merge", textMr: "Finish & Merge" },
                { textEn: "Type a New List", textMr: "Type a New List" },
                { textEn: "Select Recipients", textMr: "Select Recipients" },
                { textEn: "Insert Merge Field", textMr: "Insert Merge Field" }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 18 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/vWr5CBOP-IA?si=GspY8jiwjqb5oQ_A" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 18 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #18: MS Word - Review Tab Guide\n\nThe Review Tab in Microsoft Word is essential for proofreading, editing, and collaborating on documents. Its primary goal is to make a document professional and error-free before finalization.\n\n1. Proofing Group\n\nSpelling & Grammar (F7): Scans for typos (red underline) and grammar issues; suggests replacements. Options: Change, Change All, or Ignore.\n\nResearch: Opens a pane to search for definitions and references.\n\nThesaurus: Provides synonyms (e.g. \"Pictures\" might suggest \"Cinema\" or \"Movies\").\n\nTranslate: Translates selected text or the whole document. Translation Screen Tip shows a pop-up translation when you hover over a word.\n\nWord Count: Statistics for pages, words, characters (with/without spaces), paragraphs, and lines.\n\n2. Comments Group\n\nNew Comment: Adds a note to a word or section without changing the text.\n\nDelete: Removes selected or all comments. Previous/Next: Navigate between comments.\n\n3. Tracking Group\n\nTrack Changes: When enabled, every addition or deletion is recorded. Deletions appear in the margin or as strikethroughs; additions in a different color.\n\nDisplay for Review: Final Showing Markup (all changes visible), Final (as if all accepted), Original (before any changes).\n\nReviewing Pane: Summary window listing every change. Balloons: Changes/comments in callouts on the right margin.\n\n4. Changes Group\n\nAccept: Finalizes a change. Reject: Discards it and reverts to original. Previous/Next: Move between changes.\n\n5. Compare Group\n\nCompare: Highlights differences between two versions of the same document.\n\nCombine: Merges revisions from multiple authors into one document.\n\n6. Protect Group\n\nRestrict Editing: Formatting Restrictions (no font/style changes), Editing Restrictions (Read Only or Comments only). Enforce Protection: Set a password so only authorized users can remove restrictions.\n\nSummary: The Review Tab is for final polishing – grammar, collaboration tools, and securing content from unwanted changes.",
          "subsections.1.contentMr":
            "Computer Class Day #18: MS Word - Review Tab Guide\n\nReview टॅब प्रूफरीडिंग, एडिटिंग आणि सहकार्यासाठी; दस्तऐवज व्यावसायिक आणि त्रुटी-मुक्त करणे.\n\n१. Proofing: Spelling & Grammar (F7), Research, Thesaurus, Translate, Translation Screen Tip, Word Count.\n\n२. Comments: New Comment, Delete, Previous/Next.\n\n३. Tracking: Track Changes (जोडणी/हटवणी रेकॉर्ड), Display for Review (Final Showing Markup / Final / Original), Reviewing Pane, Balloons.\n\n४. Changes: Accept, Reject, Previous/Next.\n\n५. Compare: Compare (दोन आवृत्त्यांमधील फरक), Combine (अनेक लेखकांची संशोधने एकत्र).\n\n६. Protect: Restrict Editing (Formatting/Editing restrictions), Enforce Protection (पासवर्ड).\n\nसारांश: अंतिम पॉलिशिंग – व्याकरण, सहकार्य साधने आणि अवांछित बदलापासून संरक्षण."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 18 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "You have finished writing a report and want to ensure there are no spelling or grammatical errors before sending it. Which keyboard shortcut should you press to immediately start the check?",
              questionMr: "अहवाल लिहून झाल्यावर पाठवण्यापूर्वी स्पेलिंग किंवा व्याकरणाच्या त्रुटी नाहीत याची खात्री करायची आहे. तपासणी ताबडतोब सुरू करण्यासाठी कोणता कीबोर्ड शॉर्टकट द्यावा?",
              options: [
                { textEn: "Ctrl + S", textMr: "Ctrl + S" },
                { textEn: "F7", textMr: "F7" },
                { textEn: "F5", textMr: "F5" },
                { textEn: "Alt + R", textMr: "Alt + R" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You are reviewing a student's assignment and want to suggest a change to a specific paragraph without actually altering their original text. Which feature is best suited for this?",
              questionMr: "विद्यार्थ्याचे असाइनमेंट तपासत आहात आणि मूळ मजकूर बदलल्याशिवाय विशिष्ट परिच्छेदासाठी सुचना द्यायची आहे. यासाठी कोणती सुविधा योग्य आहे?",
              options: [
                { textEn: "Compare", textMr: "Compare" },
                { textEn: "Thesaurus", textMr: "Thesaurus" },
                { textEn: "Track Changes", textMr: "Track Changes" },
                { textEn: "New Comment", textMr: "New Comment" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "When 'Track Changes' is enabled, how does MS Word typically visually distinguish a deletion made by an editor?",
              questionMr: "'Track Changes' चालू असताना एडिटरने केलेली हटवणी MS Word सामान्यतः कशी दाखवते?",
              options: [
                { textEn: "It underlines the text in blue.", textMr: "मजकूर निळ्या रंगात अंडरलाइन करते." },
                { textEn: "It hides the text completely.", textMr: "मजकूर पूर्णपणे लपवते." },
                { textEn: "It appears as a strikethrough or in the margin.", textMr: "स्ट्राइकथ्रू किंवा मार्जिनमध्ये दिसते." },
                { textEn: "It highlights the text in yellow.", textMr: "मजकूर पिवळा हायलाइट करते." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You want to see exactly how your document looked before any edits were made by your colleagues. Which 'Display for Review' option should you select?",
              questionMr: "सहकाऱ्यांनी कोणतेही संपादन करण्यापूर्वी दस्तऐवज अगदी कसा दिसत होता ते पहायचे आहे. 'Display for Review' मध्ये कोणता पर्याय निवडावा?",
              options: [
                { textEn: "Original", textMr: "Original" },
                { textEn: "Final Showing Markup", textMr: "Final Showing Markup" },
                { textEn: "Final", textMr: "Final" },
                { textEn: "No Markup", textMr: "No Markup" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "If you are writing an essay and find that you are repeating the word 'pictures' too often, which tool in the Proofing group would help you find a suitable alternative like 'images' or 'photos'?",
              questionMr: "निबंध लिहिताना 'pictures' शब्द वारंवार वापरत आहात; 'images' किंवा 'photos' सारखा पर्याय शोधण्यासाठी Proofing गटात कोणते साधन उपयुक्त आहे?",
              options: [
                { textEn: "Thesaurus", textMr: "Thesaurus" },
                { textEn: "Translate", textMr: "Translate" },
                { textEn: "Word Count", textMr: "Word Count" },
                { textEn: "Research", textMr: "Research" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You have sent a document to two different colleagues and received two different edited files back. Which feature allows you to merge their revisions into a single new document?",
              questionMr: "दस्तऐवज दोन सहकाऱ्यांना पाठवला आणि दोन वेगवेगळ्या संपादित फाइल्स मिळाल्या. त्यांची संशोधने एकाच नवीन दस्तऐवजात एकत्र करण्याची सुविधा कोणती?",
              options: [
                { textEn: "Restrict Editing", textMr: "Restrict Editing" },
                { textEn: "Combine", textMr: "Combine" },
                { textEn: "Compare", textMr: "Compare" },
                { textEn: "Track Changes", textMr: "Track Changes" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "In the Changes group, what happens when you click 'Accept' on a specific tracked change?",
              questionMr: "Changes गटात विशिष्ट tracked change वर 'Accept' क्लिक केल्यावर काय होते?",
              options: [
                { textEn: "The change is highlighted in green.", textMr: "बदल हिरव्या रंगात हायलाइट होतो." },
                { textEn: "A comment is added explaining the change.", textMr: "बदल स्पष्ट करणारा कॉमेंट जोडला जातो." },
                { textEn: "The change becomes a permanent part of the document content.", textMr: "बदल दस्तऐवजाचा कायमचा भाग बनतो." },
                { textEn: "The change is deleted and the text reverts to the original.", textMr: "बदल डिलीट होतो आणि मजकूर मूळ स्थितीत परत येतो." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You want to share a document for colleagues to read, but you want to ensure they cannot change the formatting styles you meticulously applied. Where would you go to set this up?",
              questionMr: "सहकाऱ्यांना वाचण्यासाठी दस्तऐवज द्यायचा आहे पण तुम्ही लावलेले फॉर्मॅटिंग स्टाइल्स ते बदलू शकू नयेत. हे सेटअप करण्यासाठी कुठे जावे?",
              options: [
                { textEn: "Track Changes", textMr: "Track Changes" },
                { textEn: "Protect Sheet", textMr: "Protect Sheet" },
                { textEn: "Restrict Editing", textMr: "Restrict Editing" },
                { textEn: "Mark as Final", textMr: "Mark as Final" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "The 'Reviewing Pane' is most useful when:",
              questionMr: "'Reviewing Pane' कधी सर्वात उपयुक्त आहे?",
              options: [
                { textEn: "You want to add a password to the file.", textMr: "फाइलला पासवर्ड जोडायचा आहे." },
                { textEn: "You want to check the spelling of the document.", textMr: "दस्तऐवजाची स्पेलिंग तपासायची आहे." },
                { textEn: "You want to translate the document.", textMr: "दस्तऐवज भाषांतर करायचा आहे." },
                { textEn: "You need to see a list of every single change made in a dense document.", textMr: "गर्दीच्या दस्तऐवजात केलेल्या प्रत्येक बदलाची यादी पहायची आहे." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which of the following statistics is NOT provided by the 'Word Count' feature in the Proofing group?",
              questionMr: "Proofing गटातील 'Word Count' सुविधा खालीलपैकी कोणती आकडेवारी देत नाही?",
              options: [
                { textEn: "Paragraphs", textMr: "Paragraphs" },
                { textEn: "Characters (with spaces)", textMr: "Characters (with spaces)" },
                { textEn: "Pages", textMr: "Pages" },
                { textEn: "Spelling Errors", textMr: "Spelling Errors" }
              ],
              correctIndex: 3
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 19 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/8IDxAww4EhM?si=JAGbpwEHOsuDnn8J" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 19 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #19: MS Word - View Tab Guide\n\nThe View Tab is used to change how you see your document. While it doesn't help with creating content or formatting text, it is crucial for navigating, proofreading, and automating repetitive tasks.\n\n1. Document Views Group\n\nPrint Layout: Default view; document as it will look when printed (margins, headers, footers).\n\nFull Screen Reading: Optimized for reading; toolbars removed; view two pages or adjust text size.\n\nWeb Layout: Document as a web page; no page breaks; text wraps to window size.\n\nOutline: Outline format; good for reorganizing long documents; collapse/expand headings, drag sections.\n\nDraft: Bare-bones view for fast editing; no headers, footers, or some graphics.\n\n2. Show/Hide Group\n\nRuler: Horizontal and vertical rulers for tabs, margins, paragraph indents.\n\nGridlines: Grid background for aligning objects, images, shapes. (Gridlines do not print.)\n\nDocument Map: Side pane with headings; click to jump to a section.\n\nThumbnails: Small image of every page in a side pane; fast navigation in long documents.\n\n3. Zoom Group\n\nZoom: Dialog for specific percentage (e.g. 75%, 200%). 100% resets to actual size. One Page / Two Pages; Page Width (page width matches window).\n\n4. Window Group\n\nNew Window: Same document in a second window; edits sync. Arrange All: Tile all Word windows. Split: Two horizontal panes (e.g. view top while editing bottom). View Side by Side: Compare two documents or two windows. Switch Windows: Jump between open documents.\n\n5. Macros\n\nMacros record a series of actions and replay them with one click (e.g. table, header, signature).\n\nHow to use: Macros > Record Macro (name it) -> perform the actions -> Stop Recording. To run: Macros > View Macros -> select macro -> Run. Ideal for repetitive tasks (signatures, headers, tables).\n\nWhat's Next: Day 20 will transition from MS Word to Microsoft Excel.",
          "subsections.1.contentMr":
            "Computer Class Day #19: MS Word - View Tab Guide\n\nView टॅब दस्तऐवज कसा दिसतो ते बदलण्यासाठी; नेव्हिगेशन, प्रूफरीडिंग आणि पुनरावृत्ती कामे ऑटोमेट करणे.\n\n१. Document Views: Print Layout (डिफॉल्ट), Full Screen Reading, Web Layout, Outline (रचना बदलणे), Draft.\n\n२. Show/Hide: Ruler, Gridlines (प्रिंट होत नाहीत), Document Map (हेडिंग्स), Thumbnails (पृष्ठ थंबनेल्स).\n\n३. Zoom: टक्केवारी, 100%, One/Two Page, Page Width.\n\n४. Window: New Window, Arrange All, Split, View Side by Side, Switch Windows.\n\n५. Macros: क्रिया रेकॉर्ड करून एका क्लिकमध्ये पुन्हा चालवणे (Record Macro -> क्रिया करा -> Stop -> View Macros -> Run). पुनरावृत्ती कामांसाठी.\n\nपुढे: Day 20 MS Excel वर."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 19 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "You are working on a 50-page report and need to move 'Chapter 5' to the beginning of the document. Which Document View allows you to drag and drop entire sections easily?",
              questionMr: "50-पृष्ठीय अहवालावर काम करत आहात आणि 'Chapter 5' दस्तऐवजाच्या सुरुवातीला हलवायचे आहे. कोणत्या Document View मध्ये संपूर्ण विभाग ड्रॅग आणि ड्रॉप करता येतात?",
              options: [
                { textEn: "Print Layout", textMr: "Print Layout" },
                { textEn: "Web Layout", textMr: "Web Layout" },
                { textEn: "Outline View", textMr: "Outline View" },
                { textEn: "Draft View", textMr: "Draft View" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You are inserting several images and want to ensure they are perfectly aligned with each other. Which tool in the Show/Hide group should you enable?",
              questionMr: "अनेक चित्रे घालत आहात आणि ती एकमेकांशी परिपूर्ण संरेखित असावीत. Show/Hide गटात कोणते साधन चालू करावे?",
              options: [
                { textEn: "Gridlines", textMr: "Gridlines" },
                { textEn: "Ruler", textMr: "Ruler" },
                { textEn: "Thumbnails", textMr: "Thumbnails" },
                { textEn: "Document Map", textMr: "Document Map" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You need to refer to a table on Page 2 while writing the conclusion on Page 45 of the same document. Which feature allows you to see both parts of the document at once?",
              questionMr: "त्याच दस्तऐवजात पृष्ठ 45 वर निष्कर्ष लिहिताना पृष्ठ 2 वरील टेबल बघायचा आहे. दस्तऐवजाचे दोन्ही भाग एकाच वेळी पहाण्याची सुविधा कोणती?",
              options: [
                { textEn: "New Window", textMr: "New Window" },
                { textEn: "Split", textMr: "Split" },
                { textEn: "Arrange All", textMr: "Arrange All" },
                { textEn: "View Side by Side", textMr: "View Side by Side" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Every Friday, you have to type the same complex disclaimer at the bottom of your reports. How can you automate this task to happen with a single click?",
              questionMr: "प्रत्येक शुक्रवारी अहवालांच्या शेवटी समान जटिल disclaimer टाइप करावा लागतो. हे काम एका क्लिकमध्ये कसे ऑटोमेट करता येईल?",
              options: [
                { textEn: "Create a Macro", textMr: "Create a Macro" },
                { textEn: "Use Track Changes", textMr: "Use Track Changes" },
                { textEn: "Use the Thesaurus", textMr: "Use the Thesaurus" },
                { textEn: "Enable Restrict Editing", textMr: "Enable Restrict Editing" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You want to focus solely on reading a document without the distraction of ribbons and toolbars. Which view is best suited for this?",
              questionMr: "रिबन्स आणि टूलबारच्या व्यत्ययाशिवाय फक्त दस्तऐवज वाचायचा आहे. यासाठी कोणता view योग्य आहे?",
              options: [
                { textEn: "Print Layout", textMr: "Print Layout" },
                { textEn: "Web Layout", textMr: "Web Layout" },
                { textEn: "Full Screen Reading", textMr: "Full Screen Reading" },
                { textEn: "Draft View", textMr: "Draft View" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you are editing a document and want to quickly adjust the left indentation of a specific paragraph without opening a dialog box, what should you use?",
              questionMr: "दस्तऐवज एडिट करताना डायलॉग बॉक्स न उघडता विशिष्ट परिच्छेदाचे डावे इंडेंटेशन झटपट समायोजित करायचे असल्यास काय वापरावे?",
              options: [
                { textEn: "Gridlines", textMr: "Gridlines" },
                { textEn: "The Ruler", textMr: "The Ruler" },
                { textEn: "The Document Map", textMr: "The Document Map" },
                { textEn: "Zoom", textMr: "Zoom" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which of the following statements about 'Draft' view is true?",
              questionMr: "'Draft' view बाबत खालीलपैकी कोणते विधान खरे आहे?",
              options: [
                { textEn: "It shows the document exactly as it will print.", textMr: "तो दस्तऐवज अगदी प्रिंट होईल तसा दाखवतो." },
                { textEn: "It organizes the document into collapsible headings.", textMr: "तो दस्तऐवज कोलॅप्स करता येणाऱ्या हेडिंग्समध्ये व्यवस्थित करतो." },
                { textEn: "It displays headers, footers, and page borders.", textMr: "तो हेडर, फूटर आणि पृष्ठ बॉर्डर दाखवतो." },
                { textEn: "It is a bare-bones view meant for quick text editing.", textMr: "तो झटपट मजकूर एडिटिंगसाठीचा साधा view आहे." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You have a very long document and want to visually find a specific page that contains a large chart. Which navigation tool is fastest?",
              questionMr: "खूप लांब दस्तऐवज आहे आणि मोठा चार्ट असलेले विशिष्ट पृष्ठ दृष्यदृष्ट्या शोधायचे आहे. सर्वात वेगवान नेव्हिगेशन साधन कोणते?",
              options: [
                { textEn: "Switch Windows", textMr: "Switch Windows" },
                { textEn: "Web Layout", textMr: "Web Layout" },
                { textEn: "Document Map", textMr: "Document Map" },
                { textEn: "Thumbnails", textMr: "Thumbnails" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What happens when you click 'New Window' in the Window group?",
              questionMr: "Window गटात 'New Window' क्लिक केल्यावर काय होते?",
              options: [
                { textEn: "A blank, empty document is created.", textMr: "रिकामा नवीन दस्तऐवज तयार होतो." },
                { textEn: "The document is saved as a new file.", textMr: "दस्तऐवज नवीन फाइल म्हणून सेव्ह होतो." },
                { textEn: "A second window opens displaying the exact same document.", textMr: "त्याच दस्तऐवजाचे दुसरे विंडो उघडते." },
                { textEn: "The current document is closed and reopened.", textMr: "सध्याचा दस्तऐवज बंद होऊन पुन्हा उघडतो." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You want to create a blog post using Word and need to know how the text will wrap when viewed in a browser. Which view should you use?",
              questionMr: "Word वापरून ब्लॉग पोस्ट तयार करायचा आहे आणि ब्राउझरमध्ये मजकूर कसा wrap होईल ते पहायचे आहे. कोणता view वापरावा?",
              options: [
                { textEn: "Outline View", textMr: "Outline View" },
                { textEn: "Web Layout", textMr: "Web Layout" },
                { textEn: "Print Layout", textMr: "Print Layout" },
                { textEn: "Full Screen Reading", textMr: "Full Screen Reading" }
              ],
              correctIndex: 1
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 20 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/ICQ5YmwEGPY?si=joHyQ47QAf-WrEr_" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 20 },
      {
        $set: {
          "subsections.1.contentEn":
            "Computer Class Day #20: Comprehensive Keyboard Guide - Keys & Functions\n\nThis document provides a detailed breakdown of a standard QWERTY keyboard. Understanding these keys allows for efficient and confident computer usage.\n\n1. Keyboard Layouts\n\nThe \"QWERTY\" layout is the most common in India and globally, named after the first six letters on the top row (Q-W-E-R-T-Y). Other layouts include QWERTZ, AZERTY, and Dvorak (less common in standard Indian computing).\n\n2. Special Shortcut & Function Keys\n\nTop Row: Many keyboards have Home/Mail, Media (Pause, Play, Volume) keys.\n\nEsc (Escape): Top-left; cancels or stops a process, exits full-screen, closes pop-ups and dialog boxes.\n\nFunction Keys (F1-F12): F1 Help; F2 Rename; F3 Search; F4 Repeat/Alt+F4 Close; F5 Refresh or Find & Replace; F6 Address bar; F7 Spelling & Grammar; F8 Boot Menu; F9 Outlook Send/Receive; F10 Menu bar; F11 Full-screen; F12 Save As.\n\n3. Control & Navigation Keys\n\nModifier Keys: Shift (upper symbol, uppercase when Caps Lock off), Ctrl and Alt (shortcuts e.g. Ctrl+C).\n\nPrint Screen (PrtSc): Captures entire screen to clipboard. Scroll Lock: In Excel, arrow keys scroll instead of moving cell. Home/End: Start or end of line (or top/bottom of page in browser). Page Up/Page Down: Scroll one screen. Insert: Overtype mode. Delete: Character right or selected file. Backspace: Character left. Tab: Spaces forward or switch between fields.\n\n4. Specialized Tool Keys\n\nRight-Click (Menu) Key: Between right Alt and Ctrl; same as mouse right-click. Enter: New line or OK for commands.\n\n5. Numeric Keypad & Indicators\n\nNum Lock ON: Keypad types numbers. OFF: Keys act as navigation (arrows, Home, End). Caps Lock ON: All letters uppercase.\n\nSummary Tip: Keys with two symbols – the top symbol is accessed via Shift.",
          "subsections.1.contentMr":
            "Computer Class Day #20: Comprehensive Keyboard Guide - Keys & Functions\n\nमानक QWERTY कीबोर्डचा तपशील; कार्यक्षम वापरासाठी.\n\n१. Layouts: QWERTY सर्वात सामान्य (भारत/जग); QWERTZ, AZERTY, Dvorak कमी प्रचलित.\n\n२. Esc, Function Keys (F1 Help, F2 Rename, F3 Search, F4/F5/F6… F12 Save As), टॉप रो मीडिया की.\n\n३. Modifier: Shift, Ctrl, Alt. Navigation: PrtSc, Scroll Lock (Excel), Home/End, Page Up/Down, Insert, Delete, Backspace, Tab.\n\n४. Right-Click (Menu) Key, Enter.\n\n५. Numeric Keypad: Num Lock (ON=अंक, OFF=नेव्हिगेशन). Caps Lock: अप्परकेस.\n\nटीप: दोन चिन्ह असलेल्या कळा – वरचे चिन्ह Shift दाबून."
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 20 },
      {
        $set: {
          "exam.questions": [
            {
              questionEn: "You are looking at a standard keyboard in India. By observing the first six letters on the top alphabetic row, which layout are you most likely to identify?",
              questionMr: "भारतातील मानक कीबोर्ड पाहत आहात. वरच्या अक्षर ओळीतील पहिले सहा अक्षरे पाहून कोणता layout ओळखण्याची शक्यता सर्वात जास्त आहे?",
              options: [
                { textEn: "QWERTZ", textMr: "QWERTZ" },
                { textEn: "QWERTY", textMr: "QWERTY" },
                { textEn: "AZERTY", textMr: "AZERTY" },
                { textEn: "DVORAK", textMr: "DVORAK" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You have selected a file named 'New Folder' and want to quickly rename it to 'Project Docs' without using the mouse. Which function key should you press?",
              questionMr: "'New Folder' नावाची फाइल निवडली आहे आणि माऊस न वापरता ती 'Project Docs' असे झटपट रिनेम करायची आहे. कोणती function key द्यावी?",
              options: [
                { textEn: "F2", textMr: "F2" },
                { textEn: "F12", textMr: "F12" },
                { textEn: "F5", textMr: "F5" },
                { textEn: "F1", textMr: "F1" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You are typing a document and notice a mistake in the text. You place your cursor before the wrong character and want to delete the character to the right of the cursor. Which key do you press?",
              questionMr: "दस्तऐवज टाइप करताना मजकुरात चूक दिसली. कर्सर चुकीच्या अक्षराच्या आधी ठेवला आहे आणि कर्सरच्या उजवीकडील अक्षर हटवायचे आहे. कोणती कळ द्यावी?",
              options: [
                { textEn: "Delete", textMr: "Delete" },
                { textEn: "End", textMr: "End" },
                { textEn: "Insert", textMr: "Insert" },
                { textEn: "Backspace", textMr: "Backspace" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You are trying to type numbers using the numeric keypad on the right side of your keyboard, but the cursor keeps moving up and down instead of typing digits. What is the likely cause?",
              questionMr: "कीबोर्डच्या उजव्या बाजूचा न्यूमेरिक कीपॅड वापरून अंक टाइप करत आहात, पण अंक येण्याऐवजी कर्सर वर-खाली होतो. संभावित कारण काय?",
              options: [
                { textEn: "Num Lock is OFF", textMr: "Num Lock बंद आहे" },
                { textEn: "Ctrl key is stuck", textMr: "Ctrl कळ अडकली आहे" },
                { textEn: "Caps Lock is ON", textMr: "Caps Lock चालू आहे" },
                { textEn: "Scroll Lock is ON", textMr: "Scroll Lock चालू आहे" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You are working in Microsoft Excel and want to save your current workbook with a new name. Which function key opens the 'Save As' dialog directly?",
              questionMr: "Microsoft Excel मध्ये काम करत आहात आणि सध्याचे वर्कबुक नवीन नावाने सेव्ह करायचे आहे. 'Save As' डायलॉग थेट कोणती function key उघडते?",
              options: [
                { textEn: "F12", textMr: "F12" },
                { textEn: "F8", textMr: "F8" },
                { textEn: "F10", textMr: "F10" },
                { textEn: "F1", textMr: "F1" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which key combination is widely used to immediately close the currently active window or application?",
              questionMr: "सध्याची सक्रिय विंडो किंवा अॅप्लिकेशन ताबडतोब बंद करण्यासाठी कोणता की संयोजन मोठ्या प्रमाणात वापरतात?",
              options: [
                { textEn: "Alt + Tab", textMr: "Alt + Tab" },
                { textEn: "Ctrl + C", textMr: "Ctrl + C" },
                { textEn: "Alt + F4", textMr: "Alt + F4" },
                { textEn: "Shift + Delete", textMr: "Shift + Delete" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You are browsing a very long webpage and want to jump instantly to the very top of the page. Which navigation key should you press?",
              questionMr: "खूप लांब वेबपेज ब्राउझ करत आहात आणि पृष्ठाच्या अगदी वरच्या बाजूस ताबडतोब जायचे आहे. कोणती navigation कळ द्यावी?",
              options: [
                { textEn: "End", textMr: "End" },
                { textEn: "Home", textMr: "Home" },
                { textEn: "Page Up", textMr: "Page Up" },
                { textEn: "Insert", textMr: "Insert" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What is the primary function of the 'Print Screen' (PrtSc) key?",
              questionMr: "'Print Screen' (PrtSc) कळेचे मुख्य कार्य काय आहे?",
              options: [
                { textEn: "It sends the current document to the printer.", textMr: "तो सध्याचा दस्तऐवज प्रिंटरवर पाठवतो." },
                { textEn: "It locks the screen layout.", textMr: "तो स्क्रीन लेआउट लॉक करतो." },
                { textEn: "It clears the screen.", textMr: "तो स्क्रीन साफ करतो." },
                { textEn: "It captures an image of the entire screen to the clipboard.", textMr: "तो संपूर्ण स्क्रीनची प्रतिमा क्लिपबोर्डवर कॅप्चर करतो." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You want to access the right-click context menu for a selected item, but your mouse is broken. Which key on the keyboard performs this function?",
              questionMr: "निवडलेल्या आयटमसाठी right-click context मेनू उघडायचा आहे, पण माऊस बिघडला आहे. कीबोर्डवरील कोणती कळ हे कार्य करते?",
              options: [
                { textEn: "The Windows Key", textMr: "The Windows Key" },
                { textEn: "The Tab Key", textMr: "The Tab Key" },
                { textEn: "The Alt Key", textMr: "The Alt Key" },
                { textEn: "The Menu Key (Application Key)", textMr: "The Menu Key (Application Key)" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "If you are typing in Word and realize you are replacing existing text with new text as you type instead of inserting it, which key did you accidentally press?",
              questionMr: "Word मध्ये टाइप करताना समजले की नवीन टाइप केल्याने अस्तित्वातील मजकूर बदलतो, घातला जात नाही. चुकून कोणती कळ दाबली असेल?",
              options: [
                { textEn: "Num Lock", textMr: "Num Lock" },
                { textEn: "Caps Lock", textMr: "Caps Lock" },
                { textEn: "Insert", textMr: "Insert" },
                { textEn: "Scroll Lock", textMr: "Scroll Lock" }
              ],
              correctIndex: 2
            }
          ]
        }
      }
    );
    // Day 21: exam only (no video/content) — 100 questions from past 20 days
    const days1to20 = await CourseDay.find({ dayNumber: { $gte: 1, $lte: 20 } })
      .select("exam.questions")
      .lean();
    const allQuestions = days1to20.flatMap((d) => d.exam?.questions || []);
    const shuffle = (arr) => arr.slice().sort(() => Math.random() - 0.5);
    const questions100 = shuffle(allQuestions).slice(0, 100);
    await CourseDay.updateOne(
      { dayNumber: 21 },
      {
        $set: {
          contentEn: "Day 21 is exam only. No video or content—100 questions from Days 1–20.",
          contentMr: "दिवस २१ फक्त परीक्षा. व्हिडिओ किंवा मजकूर नाही—दिवस १ ते २० मधून १०० प्रश्न.",
          imageUrl: "",
          videoUrl: "",
          subsections: [],
          "exam.durationMinutes": 100,
          "exam.questions": questions100
        }
      }
    );
    // Day 22: MS Excel Basics – Section 1 (video), Section 2 (notes). Use full subsections array so "Section 2" appears.
    const day22Section2ContentEn =
      "MS Excel Basics: Rows, Columns, and Beyond\n\n1. How to Open MS Excel\n\nThere are three primary ways to open Excel:\n\nSearch Box: Type \"Excel\" in the Windows search bar. [00:01:40]\n\nOffice App: Open the Microsoft Office suite app and select Excel. [00:02:15]\n\nRun Command: Press Windows + R, type excel, and hit Enter. [00:02:57]\n\n2. Dashboard Overview\n\nWhen you first open Excel, you see:\n\nHome: View recent files and basic options. [00:03:24]\n\nNew: Start a \"Blank Workbook\" or use pre-made Templates for specific tasks. [00:03:59]\n\nOpen: Access existing files saved on your computer. [00:04:30]\n\n3. Interface Components\n\nThe Ribbon: The top panel containing all tools, divided into tabs (Home, Insert, etc.) and groups (Font, Alignment). [00:05:15]\n\nName Box: Shows the address of the active cell (e.g., A1). [00:06:24]\n\nFormula Bar: Used to enter or view data and formulas within a cell. [00:06:34]\n\n4. Understanding Rows, Columns, and Cells\n\nColumns: Vertical sections identified by letters (A, B, C...). There are 16,384 columns (ending at XFD). [00:07:44]\n\nRows: Horizontal sections identified by numbers (1, 2, 3...). There are 1,048,576 rows. [00:11:15]\n\nCell: The intersection of a row and a column. The smallest unit for data entry. [00:07:37]\n\nCell Address: A combination of the Column Letter and Row Number (e.g., C4 means Column C, Row 4). [00:13:16]\n\n5. Navigation and Zooming\n\nNavigation Shortcuts: Use Ctrl + Arrow Keys to jump to the very end of the sheet (Right, Left, Up, or Down). [00:10:47]\n\nZooming Methods:\n- Slider in the bottom right corner. [00:08:25]\n- Click the percentage number next to the slider to set a specific zoom. [00:08:42]\n- Shortcut: Hold Ctrl and use the Mouse Scroll Wheel. [00:09:25]\n\n6. Basic Formulas and Ranges\n\nFormulas: Every formula must start with an equals sign (=). For example, =60+40. [00:14:36]\n\nData vs. Formula: A cell may show \"100,\" but the Formula Bar will show the underlying calculation if a formula was used. [00:16:09]\n\nRange: A collection of selected cells, written as StartCell:EndCell (e.g., C3:E6). [00:17:58]\n\n7. Sheet Management\n\nAdding Sheets: Click the + icon or use Shift + F11. [00:18:43]\n\nRenaming: Right-click the sheet tab -> Rename. Tip: Use underscores instead of spaces for advanced compatibility. [00:20:16]\n\nTab Color: Right-click -> Tab Color to organize sheets visually. [00:21:13]\n\nHiding/Unhiding: Right-click a sheet to Hide it; Right-click any visible sheet to Unhide. [00:22:08]\n\nProtection: You can right-click a sheet and select \"Protect Sheet\" to add a password. [00:21:40]";
    const day22Section2ContentMr =
      "MS Excel मूलभूत: पंक्ती, स्तंभ आणि अधिक\n\n१. MS Excel कसे उघडावे\n\nतीन मुख्य मार्ग: Windows शोध पट्टीत \"Excel\" टाइप करा [00:01:40]; Microsoft Office अॅप उघडून Excel निवडा [00:02:15]; Windows + R दाबून excel टाइप करून Enter [00:02:57].\n\n२. डॅशबोर्ड: Home (अलीकडील फाइल्स), New (Blank Workbook/टेम्पलेट्स), Open (अस्तित्वातील फाइल). [00:03:24–00:04:30]\n\n३. इंटरफेस: Ribbon (टॅब्स आणि गट), Name Box (सक्रिय सेल पत्ता उदा. A1), Formula Bar (डेटा/सूत्र प्रवेश). [00:05:15–00:06:34]\n\n४. पंक्ती, स्तंभ आणि सेल: स्तंभ अक्षरांनी (A,B,C… 16,384); पंक्ती संख्यांनी (1,2,3… 1,048,576); सेल = पंक्ती आणि स्तंभ छेदन; सेल पत्ता उदा. C4. [00:07:37–00:13:16]\n\n५. नेव्हिगेशन आणि झूम: Ctrl + Arrow Keys शीटच्या शेवटापर्यंत; झूम – खालच्या उजव्या स्लायडर, टक्केवारी क्लिक, किंवा Ctrl + माऊस स्क्रोल. [00:08:25–00:10:47]\n\n६. सूत्रे आणि रेंज: सूत्र = चिन्हाने सुरू (उदा. =60+40); सेल मूल्य vs Formula Bar; रेंज StartCell:EndCell (उदा. C3:E6). [00:14:36–00:17:58]\n\n७. शीट व्यवस्थापन: + किंवा Shift+F11 नवीन शीट; रिनेम (Right-click -> Rename, अंडरस्कोर वापरा); Tab Color; Hide/Unhide; Protect Sheet (पासवर्ड). [00:18:43–00:22:08]";
    await CourseDay.updateOne(
      { dayNumber: 22 },
      {
        $set: {
          contentEn: "",
          contentMr: "",
          subsections: [
            {
              titleEn: "Section 1",
              titleMr: "भाग १",
              contentEn: "",
              contentMr: "",
              videoUrl: "https://youtu.be/dt8g0uAy0cE?si=3qnlX5kFXXfryR16"
            },
            {
              titleEn: "Section 2",
              titleMr: "भाग २",
              contentEn: day22Section2ContentEn,
              contentMr: day22Section2ContentMr,
              videoUrl: ""
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 22 },
      {
        $set: {
          "exam.durationMinutes": 30,
          "exam.questions": [
            {
              questionEn: "Which keyboard shortcut combination opens the Run command dialog to launch Excel?",
              questionMr: "Excel लॉन्च करण्यासाठी Run कमांड डायलॉग कोणता कीबोर्ड शॉर्टकट उघडतो?",
              options: [
                { textEn: "Ctrl + R", textMr: "Ctrl + R" },
                { textEn: "Alt + E", textMr: "Alt + E" },
                { textEn: "Windows + R", textMr: "Windows + R" },
                { textEn: "Shift + Enter", textMr: "Shift + Enter" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which component of the Excel interface displays the specific address (e.g., A1) of the currently selected cell?",
              questionMr: "सध्याच्या निवडलेल्या सेलचा पत्ता (उदा. A1) Excel इंटरफेसचा कोणता घटक दाखवतो?",
              options: [
                { textEn: "Ribbon", textMr: "Ribbon" },
                { textEn: "Sheet Tab", textMr: "Sheet Tab" },
                { textEn: "Name Box", textMr: "Name Box" },
                { textEn: "Formula Bar", textMr: "Formula Bar" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What is the correct syntax to represent a cell range starting at C3 and ending at E6?",
              questionMr: "C3 ते E6 पर्यंतची सेल रेंज दर्शवण्याचा योग्य सिंटॅक्स कोणता?",
              options: [
                { textEn: "C3-E6", textMr: "C3-E6" },
                { textEn: "C3:E6", textMr: "C3:E6" },
                { textEn: "C3,E6", textMr: "C3,E6" },
                { textEn: "C3;E6", textMr: "C3;E6" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "How are columns identified in an Excel worksheet?",
              questionMr: "Excel वर्कशीटमध्ये स्तंभ कसे ओळखले जातात?",
              options: [
                { textEn: "By Symbols (!, @, #...)", textMr: "चिन्हांनी (!, @, #...)" },
                { textEn: "By Letters (A, B, C...)", textMr: "अक्षरांनी (A, B, C...)" },
                { textEn: "By Roman Numerals (I, II, III...)", textMr: "रोमन अंकांनी (I, II, III...)" },
                { textEn: "By Numbers (1, 2, 3...)", textMr: "संख्यांनी (1, 2, 3...)" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which symbol must strictly be typed first to begin any formula in Excel?",
              questionMr: "Excel मध्ये कोणतेही सूत्र सुरू करण्यासाठी प्रथम कोणते चिन्ह टाइप करावे लागते?",
              options: [
                { textEn: "> (Greater Than)", textMr: "> (Greater Than)" },
                { textEn: "= (Equals)", textMr: "= (Equals)" },
                { textEn: "# (Hash)", textMr: "# (Hash)" },
                { textEn: "+ (Plus)", textMr: "+ (Plus)" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "If you are in cell A1, which shortcut would instantly move your selection to the very last occupied cell (or the end of the sheet) in that direction?",
              questionMr: "तुम्ही सेल A1 मध्ये असल्यास, त्या दिशेने शेवटच्या भरलेल्या सेल (किंवा शीटच्या शेवटी) झटपट जाण्यासाठी कोणता शॉर्टकट वापरावा?",
              options: [
                { textEn: "Shift + Arrow Key", textMr: "Shift + Arrow Key" },
                { textEn: "Tab", textMr: "Tab" },
                { textEn: "Ctrl + Arrow Key", textMr: "Ctrl + Arrow Key" },
                { textEn: "Alt + Arrow Key", textMr: "Alt + Arrow Key" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What is the correct cell address for the intersection of Column D and Row 5?",
              questionMr: "स्तंभ D आणि पंक्ती 5 च्या छेदनबिंदूचा योग्य सेल पत्ता कोणता?",
              options: [
                { textEn: "D:5", textMr: "D:5" },
                { textEn: "5D", textMr: "5D" },
                { textEn: "Row5ColD", textMr: "Row5ColD" },
                { textEn: "D5", textMr: "D5" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which action allows you to zoom in and out of the worksheet using the mouse?",
              questionMr: "माऊस वापरून वर्कशीट झूम इन आणि आउट करण्याची क्रिया कोणती?",
              options: [
                { textEn: "Hold Alt + Scroll Wheel", textMr: "Alt + Scroll Wheel दाबून ठेवा" },
                { textEn: "Double Click Scroll Wheel", textMr: "Scroll Wheel वर डबल क्लिक करा" },
                { textEn: "Hold Shift + Scroll Wheel", textMr: "Shift + Scroll Wheel दाबून ठेवा" },
                { textEn: "Hold Ctrl + Scroll Wheel", textMr: "Ctrl + Scroll Wheel दाबून ठेवा" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "How many total rows are available in a modern Excel worksheet?",
              questionMr: "आधुनिक Excel वर्कशीटमध्ये एकूण किती पंक्ती उपलब्ध आहेत?",
              options: [
                { textEn: "Unlimited", textMr: "अमर्यादित" },
                { textEn: "1,048,576", textMr: "1,048,576" },
                { textEn: "16,384", textMr: "16,384" },
                { textEn: "65,536", textMr: "65,536" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which of the following is a valid way to rename a worksheet tab?",
              questionMr: "वर्कशीट टॅबचे नाव बदलण्याचा योग्य मार्ग खालीलपैकी कोणता?",
              options: [
                { textEn: "Press Ctrl + S", textMr: "Ctrl + S दाबा" },
                { textEn: "Type the new name in the Formula Bar", textMr: "Formula Bar मध्ये नवीन नाव टाइप करा" },
                { textEn: "Click the 'New' button on the dashboard", textMr: "डॅशबोर्डवर 'New' बटण क्लिक करा" },
                { textEn: "Right-click the Sheet Tab and select 'Rename'", textMr: "Sheet Tab वर Right-click करून 'Rename' निवडा" }
              ],
              correctIndex: 3
            }
          ]
        }
      }
    );
    // Day 23: MS Excel Basic Formulas & Functions – Section 1 (video), Section 2 (notes)
    const day23Section2ContentEn =
      "Computer Class Day 23: MS Excel Basic Formulas & Functions\n\n1. Formulas vs. Functions\n\nThe video distinguishes between two types of calculations in Excel:\n\nFormulas: User-defined calculations (e.g., =A1+B1).\n\nFunctions (Pre-defined Formulas): Built-in Excel tools used for complex tasks (e.g., =SUM(), =POWER()). [00:02:46]\n\n2. Basic Arithmetic Operations\n\nTo activate any calculation, you must start with the = sign. [00:04:22]\n\nAddition (+)\nMethod: Type =, select the first cell, type +, select the second cell, and press Enter.\nExample: =C3+D3 [00:04:35]\n\nSubtraction (-)\nMethod: Type =, select the higher value cell, type -, select the value to subtract, and press Enter.\nExample: =A1-B1 [00:06:09]\n\nMultiplication (*)\nMethod: Use the asterisk symbol (*) as the multiplication operator.\nExample: =E5*F5 [00:08:12]\n\nDivision (/)\nMethod: Use the forward slash (/) as the division operator.\nExample: =A1/B1 [00:09:15]\n\n3. Advanced Basic Functions\n\nSquare Root (SQRT)\nTo find the square root of a number, use the SQRT function.\nSyntax: =SQRT(number_or_cell)\nExample: =SQRT(16) results in 4. [00:11:20]\n\nPower (POWER)\nTo calculate a number raised to a specific power (e.g., 10^2).\nSyntax: =POWER(number, power)\nExample: =POWER(10, 2) results in 100. [00:12:11]\n\n4. Calculating Within a Cell\n\nYou don't always need to reference other cells. You can perform \"calculator-style\" math directly inside a single cell by typing the values after the equals sign.\nExample: Typing =1000/10 in a cell will display 100. [00:10:28]\n\n5. Summary Table of Operators\n\nOperation | Operator | Excel Example\nAddition | + | =A1+B1\nSubtraction | - | =A1-B1\nMultiplication | * | =A1*B1\nDivision | / | =A1/B1\nSquare Root | SQRT | =SQRT(A1)\nPower | POWER | =POWER(A1, 2)";
    const day23Section2ContentMr =
      "Computer Class Day 23: MS Excel Basic Formulas & Functions\n\n१. Formulas vs. Functions\n\nFormulas: वापरकर्ता-परिभाषित गणना (उदा. =A1+B1).\nFunctions: अंगभूत Excel साधने (उदा. =SUM(), =POWER()). [00:02:46]\n\n२. मूलभूत अंकगणित: = चिन्हाने सुरू करा. [00:04:22]\n\nबेरीज (+): =, पहिला सेल, +, दुसरा सेल, Enter. उदा. =C3+D3 [00:04:35]\nवजाबाकी (-): =, मोठ्या मूल्याचा सेल, -, वजा करायचा सेल. उदा. =A1-B1 [00:06:09]\nगुणाकार (*): * चिन्ह. उदा. =E5*F5 [00:08:12]\nभागाकार (/): / चिन्ह. उदा. =A1/B1 [00:09:15]\n\n३. SQRT: =SQRT(संख्या किंवा सेल). उदा. =SQRT(16) → 4 [00:11:20]\nPOWER: =POWER(संख्या, घात). उदा. =POWER(10, 2) → 100 [00:12:11]\n\n४. एकाच सेलमध्ये गणना: =1000/10 सारखे टाइप करून परिणाम मिळवता येतो. [00:10:28]\n\n५. ऑपरेटर सारणी: बेरीज +, वजाबाकी -, गुणाकार *, भागाकार /, SQRT, POWER.";
    await CourseDay.updateOne(
      { dayNumber: 23 },
      {
        $set: {
          contentEn: "",
          contentMr: "",
          subsections: [
            {
              titleEn: "Section 1",
              titleMr: "भाग १",
              contentEn: "",
              contentMr: "",
              videoUrl: "https://youtu.be/dyl91P37P1Y?si=MzEvDrztgm6uaZDp"
            },
            {
              titleEn: "Section 2",
              titleMr: "भाग २",
              contentEn: day23Section2ContentEn,
              contentMr: day23Section2ContentMr,
              videoUrl: ""
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 23 },
      {
        $set: {
          "exam.durationMinutes": 30,
          "exam.questions": [
            {
              questionEn: "Which character must always be typed first to activate a calculation or formula in an Excel cell?",
              questionMr: "Excel सेलमध्ये गणना किंवा सूत्र सक्रिय करण्यासाठी प्रथम कोणते चिन्ह टाइप करावे लागते?",
              options: [
                { textEn: ": (Colon)", textMr: ": (Colon)" },
                { textEn: "= (Equals)", textMr: "= (Equals)" },
                { textEn: "+ (Plus)", textMr: "+ (Plus)" },
                { textEn: "# (Hash)", textMr: "# (Hash)" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What is the specific difference between a 'Formula' and a 'Function' in Excel?",
              questionMr: "Excel मध्ये 'Formula' आणि 'Function' मध्ये विशिष्ट फरक काय आहे?",
              options: [
                { textEn: "Formulas are user-defined calculations, while Functions are pre-defined built-in tools.", textMr: "Formulas वापरकर्ता-परिभाषित गणना आहेत, तर Functions पूर्व-परिभाषित अंगभूत साधने आहेत." },
                { textEn: "There is no difference; the terms are interchangeable.", textMr: "फरक नाही; शब्द परस्पर बदलण्यायोग्य आहेत." },
                { textEn: "Formulas are for text only, while Functions are for numbers.", textMr: "Formulas फक्त मजकूरासाठी, Functions संख्यांसाठी." },
                { textEn: "Functions must start with an equals sign, but Formulas do not.", textMr: "Functions = चिन्हाने सुरू होतात, पण Formulas नाहीत." }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which symbol is used as the multiplication operator in Excel?",
              questionMr: "Excel मध्ये गुणाकार ऑपरेटर म्हणून कोणते चिन्ह वापरतात?",
              options: [
                { textEn: "×", textMr: "×" },
                { textEn: "%", textMr: "%" },
                { textEn: "* (Asterisk)", textMr: "* (Asterisk)" },
                { textEn: "x", textMr: "x" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What would be the result of the formula \"=POWER(10, 2)\"?",
              questionMr: "सूत्र \"=POWER(10, 2)\" चा परिणाम काय असेल?",
              options: [
                { textEn: "20", textMr: "20" },
                { textEn: "12", textMr: "12" },
                { textEn: "5", textMr: "5" },
                { textEn: "100", textMr: "100" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which function would you use to find the square root of the number 16?",
              questionMr: "१६ चे वर्गमूळ काढण्यासाठी कोणती function वापरावी?",
              options: [
                { textEn: "=SQR(16)", textMr: "=SQR(16)" },
                { textEn: "=ROOT(16)", textMr: "=ROOT(16)" },
                { textEn: "=SQRT(16)", textMr: "=SQRT(16)" },
                { textEn: "=SR(16)", textMr: "=SR(16)" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you type \"=1000/10\" directly into a cell, what will be displayed?",
              questionMr: "सेलमध्ये थेट \"=1000/10\" टाइप केल्यास काय दिसेल?",
              options: [
                { textEn: "100", textMr: "100" },
                { textEn: "1000", textMr: "1000" },
                { textEn: "Error", textMr: "Error" },
                { textEn: "=1000/10", textMr: "=1000/10" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which symbol is used for division in Excel formulas?",
              questionMr: "Excel सूत्रांमध्ये भागाकारासाठी कोणते चिन्ह वापरतात?",
              options: [
                { textEn: "\\ (Backslash)", textMr: "\\ (Backslash)" },
                { textEn: "÷ (Division Sign)", textMr: "÷ (Division Sign)" },
                { textEn: "/ (Forward Slash)", textMr: "/ (Forward Slash)" },
                { textEn: "| (Pipe)", textMr: "| (Pipe)" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What is the correct syntax to subtract the value in cell B1 from the value in cell A1?",
              questionMr: "सेल A1 मधील मूल्यातून सेल B1 मधील मूल्य वजा करण्याचा योग्य सिंटॅक्स कोणता?",
              options: [
                { textEn: "A1-B1", textMr: "A1-B1" },
                { textEn: "=SUBTRACT(A1, B1)", textMr: "=SUBTRACT(A1, B1)" },
                { textEn: "=A1:B1", textMr: "=A1:B1" },
                { textEn: "=A1-B1", textMr: "=A1-B1" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "In the formula \"=POWER(5, 3)\", what does the number '3' represent?",
              questionMr: "सूत्र \"=POWER(5, 3)\" मध्ये '3' काय दर्शवते?",
              options: [
                { textEn: "The exponent (power)", textMr: "घातांक (power)" },
                { textEn: "The square root", textMr: "वर्गमूळ" },
                { textEn: "The number of cells to add", textMr: "जोडायच्या सेलची संख्या" },
                { textEn: "The number to be multiplied", textMr: "गुणाकार करायची संख्या" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which of the following formulas correctly adds the values in cells C3 and D3?",
              questionMr: "सेल C3 आणि D3 मधील मूल्ये योग्यरित्या जोडणारे सूत्र खालीलपैकी कोणते?",
              options: [
                { textEn: "=ADD(C3, D3)", textMr: "=ADD(C3, D3)" },
                { textEn: "=C3+D3", textMr: "=C3+D3" },
                { textEn: "SUM(C3:D3)", textMr: "SUM(C3:D3)" },
                { textEn: "C3+D3=", textMr: "C3+D3=" }
              ],
              correctIndex: 1
            }
          ]
        }
      }
    );
    // Day 24: Excel Structure – Rows, Columns, and Cell Merging – Section 1 (video), Section 2 (notes)
    const day24Section2ContentEn =
      "Computer Class Day 24: Excel Structure- Rows, Columns, and Cell Merging\n\n1. Adjusting Decimal Places\n\nBefore structural changes, the video demonstrates how to format numbers for better readability.\n\nIncrease/Decrease Decimals: Under the Home tab, in the Number group, there are two icons (one with a left arrow, one with a right arrow) to add or remove decimal points.\n\n[00:01:48]\n\nConsistency: It is recommended to keep decimal places consistent across a column for a cleaner look.\n\n[00:02:20]\n\n2. Inserting Rows and Columns\n\nMethod 1: Header Right-Click (Full Row/Column)\n\nSelect: Click on the row number (e.g., 3) or column letter (e.g., C) where you want the new space.\n\nRight-Click: Press the right mouse button on the header.\n\nInsert: Click \"Insert.\" A new column will appear to the left of your selection, or a new row will appear above it.\n\n[00:02:40]\n\nMethod 2: Cell Right-Click (Advanced Options)\n\nRight-click on a single cell.\n\nSelect Insert.\n\nA dialog box appears with four choices:\n\n[00:03:52]\n\nShift cells right: Moves only the data in that row to the right.\n\nShift cells down: Moves data in that column down.\n\nEntire row: Inserts a full row.\n\nEntire column: Inserts a full column.\n\n3. Merge & Center Feature\n\nThis is used to combine multiple cells into one, often for titles or headings.\n\n[00:05:18]\n\nMerge & Center: Select a range of cells (e.g., A1 to D1), then click the Merge & Center button in the Alignment group. This turns the range into one large cell and centers the text.\n\n[00:06:24]\n\nUnmerge Cells: To reverse the action, select the merged cell and click the \"Unmerge Cells\" option from the Merge & Center dropdown menu.\n\n[00:08:18]\n\nMerge Across: Merges cells in the same row into one larger cell without centering.\n\n[00:08:48]\n\n4. Deleting Sheets: A Cautionary Note\n\nIrreversible Action: When you right-click a sheet tab (at the bottom) and select Delete, you cannot use the \"Undo\" (Ctrl+Z) function to bring it back. Always be careful before deleting entire worksheets.\n\n[00:04:51]\n\n5. Visual Formatting Tip\n\nTo make a heading stand out (like \"Class 10th Data\"), use Merge & Center and then apply a background color (Fill Color) to the large merged cell.\n\n[00:07:03]";
    const day24Section2ContentMr =
      "Computer Class Day 24: Excel Structure – Rows, Columns, and Cell Merging\n\n१. दशांश ठिकाणे समायोजित करणे\n\nHome टॅब, Number गटात दोन आयकॉन्स (डावा/उजवा अॅरो) – दशांश बिंदू वाढवणे किंवा कमी करणे. [00:01:48] स्तंभात एकसारखे दशांश ठेवण्याची शिफारस. [00:02:20]\n\n२. पंक्ती आणि स्तंभ घालणे\n\nपद्धत १: हेडरवर Right-Click – पंक्ती क्रमांक (उदा. 3) किंवा स्तंभ अक्षर (उदा. C) वर क्लिक करून Insert. नवीन स्तंभ निवडीच्या डावीकडे किंवा नवीन पंक्ती वर दिसते. [00:02:40]\n\nपद्धत २: सेलवर Right-Click -> Insert – डायलॉगमध्ये: Shift cells right, Shift cells down, Entire row, Entire column. [00:03:52]\n\n३. Merge & Center\n\nअनेक सेल एकत्र करणे (शीर्षकांसाठी). रेंज निवडा (उदा. A1 ते D1), Alignment गटात Merge & Center. Unmerge: Merge & Center ड्रॉपडाउनमधून Unmerge Cells. Merge Across: समान पंक्तीतील सेल्स एकत्र, सेंटरिंगशिवाय. [00:05:18–00:08:48]\n\n४. शीट हटवणे: सावधानता – शीट टॅबवर Right-click -> Delete केल्यावर Undo (Ctrl+Z) काम करत नाही. [00:04:51]\n\n५. व्हिज्युअल फॉर्मॅटिंग: हेडिंग उठावदार करण्यासाठी Merge & Center नंतर Fill Color लावा. [00:07:03]";
    await CourseDay.updateOne(
      { dayNumber: 24 },
      {
        $set: {
          contentEn: "",
          contentMr: "",
          subsections: [
            {
              titleEn: "Section 1",
              titleMr: "भाग १",
              contentEn: "",
              contentMr: "",
              videoUrl: "https://youtu.be/Qb5AqDIlkog?si=-pIR4B-QcqYa716d"
            },
            {
              titleEn: "Section 2",
              titleMr: "भाग २",
              contentEn: day24Section2ContentEn,
              contentMr: day24Section2ContentMr,
              videoUrl: ""
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 24 },
      {
        $set: {
          "exam.durationMinutes": 30,
          "exam.questions": [
            {
              questionEn: "When you insert a new column using the header right-click method, where does the new column appear relative to your selection?",
              questionMr: "हेडर राइट-क्लिक पद्धतीने नवीन स्तंभ घातल्यावर, निवडीच्या संदर्भात नवीन स्तंभ कोठे दिसतो?",
              options: [
                { textEn: "To the right of the selected column", textMr: "निवडलेल्या स्तंभाच्या उजवीकडे" },
                { textEn: "At the end of the worksheet", textMr: "वर्कशीटच्या शेवटी" },
                { textEn: "At the beginning of the worksheet (Column A)", textMr: "वर्कशीटच्या सुरुवातीला (Column A)" },
                { textEn: "To the left of the selected column", textMr: "निवडलेल्या स्तंभाच्या डावीकडे" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which specific action in Excel is permanent and cannot be reversed using the 'Undo' (Ctrl + Z) function?",
              questionMr: "Excel मध्ये कोणती क्रिया कायमची आहे आणि 'Undo' (Ctrl + Z) ने उलटवता येत नाही?",
              options: [
                { textEn: "Deleting an entire worksheet tab", textMr: "संपूर्ण वर्कशीट टॅब हटवणे" },
                { textEn: "Clearing cell content", textMr: "सेल मजकूर साफ करणे" },
                { textEn: "Merging cells", textMr: "सेल एकत्र करणे" },
                { textEn: "Deleting a row", textMr: "पंक्ती हटवणे" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "What is the primary difference between 'Merge & Center' and 'Merge Across'?",
              questionMr: "'Merge & Center' आणि 'Merge Across' मध्ये मुख्य फरक काय आहे?",
              options: [
                { textEn: "Merge Across combines cells vertically; Merge & Center combines them horizontally.", textMr: "Merge Across उभ्या एकत्र करते; Merge & Center आडवे." },
                { textEn: "Merge Across allows you to keep data from all cells; Merge & Center does not.", textMr: "Merge Across सर्व सेलचा डेटा ठेवू देते; Merge & Center नाही." },
                { textEn: "Merge & Center aligns text to the middle; Merge Across keeps default alignment.", textMr: "Merge & Center मजकूर मध्यात संरेखित करते; Merge Across डीफॉल्ट संरेखन ठेवते." },
                { textEn: "Merge & Center is permanent; Merge Across is temporary.", textMr: "Merge & Center कायमचे; Merge Across तात्पुरते." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which formula correctly calculates the square root of the value in cell A1?",
              questionMr: "सेल A1 मधील मूल्याचे वर्गमूळ योग्यरित्या कोणते सूत्र काढते?",
              options: [
                { textEn: "=SQRT(A1)", textMr: "=SQRT(A1)" },
                { textEn: "=A1/2", textMr: "=A1/2" },
                { textEn: "=ROOT(A1)", textMr: "=ROOT(A1)" },
                { textEn: "=POWER(A1, 2)", textMr: "=POWER(A1, 2)" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "How many rows does a standard modern Excel worksheet contain?",
              questionMr: "आधुनिक Excel वर्कशीटमध्ये एकूण किती पंक्ती असतात?",
              options: [
                { textEn: "65,536", textMr: "65,536" },
                { textEn: "10,000", textMr: "10,000" },
                { textEn: "1,048,576", textMr: "1,048,576" },
                { textEn: "16,384", textMr: "16,384" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which interface component displays the address of the currently active cell (e.g., 'B5')?",
              questionMr: "सध्याच्या सक्रिय सेलचा पत्ता (उदा. 'B5') कोणता घटक दाखवतो?",
              options: [
                { textEn: "Formula Bar", textMr: "Formula Bar" },
                { textEn: "Ribbon", textMr: "Ribbon" },
                { textEn: "Name Box", textMr: "Name Box" },
                { textEn: "Status Bar", textMr: "Status Bar" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What is the correct syntax to multiply cell A1 by cell B1?",
              questionMr: "सेल A1 ला सेल B1 ने गुणण्याचा योग्य सिंटॅक्स कोणता?",
              options: [
                { textEn: "=A1 x B1", textMr: "=A1 x B1" },
                { textEn: "=MULTIPLY(A1, B1)", textMr: "=MULTIPLY(A1, B1)" },
                { textEn: "=A1 * B1", textMr: "=A1 * B1" },
                { textEn: "A1 * B1", textMr: "A1 * B1" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which shortcut combination allows you to Zoom in and out of the worksheet using the mouse?",
              questionMr: "माऊस वापरून वर्कशीट झूम इन/आउट करण्यासाठी कोणता शॉर्टकट वापरावा?",
              options: [
                { textEn: "Shift + Scroll Wheel", textMr: "Shift + Scroll Wheel" },
                { textEn: "Ctrl + Scroll Wheel", textMr: "Ctrl + Scroll Wheel" },
                { textEn: "Tab + Scroll Wheel", textMr: "Tab + Scroll Wheel" },
                { textEn: "Alt + Scroll Wheel", textMr: "Alt + Scroll Wheel" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What would be the result of the formula \"=POWER(10, 3)\"?",
              questionMr: "सूत्र \"=POWER(10, 3)\" चा परिणाम काय असेल?",
              options: [
                { textEn: "13", textMr: "13" },
                { textEn: "3.33", textMr: "3.33" },
                { textEn: "1000", textMr: "1000" },
                { textEn: "30", textMr: "30" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you want to move an entire row of data down to create space between Row 2 and Row 3, which option in the Insert dialog box should you choose?",
              questionMr: "पंक्ती 2 आणि 3 मध्ये जागा करण्यासाठी संपूर्ण पंक्ती खाली सरकवायची असेल तर Insert डायलॉगमध्ये कोणता पर्याय निवडावा?",
              options: [
                { textEn: "Shift cells right", textMr: "Shift cells right" },
                { textEn: "Entire column", textMr: "Entire column" },
                { textEn: "Shift cells up", textMr: "Shift cells up" },
                { textEn: "Entire row", textMr: "Entire row" }
              ],
              correctIndex: 3
            }
          ]
        }
      }
    );
    // Day 25: MS Excel Professional Data Entry Basics – Section 1 (video), Section 2 (notes)
    const day25Section2ContentEn =
      "Computer Class Day 25: MS Excel Professional Data Entry Basics\n\n1. Efficient Navigation\n\nNext Cell: Instead of using the mouse, use the Right Arrow Key or Tab to move to the next cell to the right. [00:02:47]\n\nPrevious Cell: Use the Left Arrow Key or Shift + Tab.\n\nMoving Down: Press Enter to move to the cell below.\n\n2. Auto-Fitting Column Width\n\nIf your text is too long for a cell (e.g., \"Name of the Student\"), you can automatically adjust the column width.\n\nManual Method: Hover between the column headers (e.g., between A and B) until the cursor turns into a double arrow, then double-click. [00:06:03]\n\nKeyboard Shortcut (AutoFit): Select the range or the entire sheet, then press these keys in sequence (not together):\n\nAlt → H (Home) → O (Format) → I (AutoFit Column Width). [00:06:23]\n\n3. Creating Serial Numbers (AutoFill)\n\nDon't type every number manually. Use these \"AutoFill\" methods:\n\nSequence Method: Type 1 in the first cell and 2 in the second. Select both cells, then click and drag the small green square (Fill Handle) at the bottom-right corner of the selection downwards. [00:08:30]\n\nControl Key Method: Type 1. Hold the Ctrl key and drag the Fill Handle downwards. Important: Release the mouse button before releasing the Ctrl key. [00:10:43]\n\nPattern Recognition: If you type 1 and 5, then drag, Excel will continue the pattern (9, 13, 17, etc.). [00:09:40]\n\n4. Rapid Data Entry in a Selection\n\nTo enter data into a specific area without constantly moving the cursor:\n\nSelect the entire range where you want to enter data. [00:11:42]\n\nStart typing. When you press Enter, the cursor automatically moves to the next cell within your selection.\n\nOnce it reaches the bottom of the first column in your selection, pressing Enter will automatically jump the cursor to the top of the next column. [00:12:05]\n\n5. Summary of Shortcuts\n\nAction | Shortcut / Method\nMove to Right Cell | Tab or Right Arrow\nMove to Cell Below | Enter\nAutoFit Column Width | Alt + H + O + I\nAutoFill Numbers | Select 1 and 2 → Drag Fill Handle\nQuick Fill Selection | Highlight Range → Type → Enter";
    const day25Section2ContentMr =
      "Computer Class Day 25: MS Excel Professional Data Entry Basics\n\n१. कार्यक्षम नेव्हिगेशन\n\nपुढचा सेल: माऊस ऐवजी Right Arrow किंवा Tab – उजवीकडचा सेल. [00:02:47] मागचा सेल: Left Arrow किंवा Shift + Tab. खाली जाणे: Enter.\n\n२. स्तंभ रुंदी ऑटो-फिट\n\nमजकूर लांब असेल तर: स्तंभ हेडर्स दरम्यान (उदा. A आणि B) कर्सर डबल अॅरो होईपर्यंत हॉवर करून डबल-क्लिक. [00:06:03] कीबोर्ड शॉर्टकट: रेंज किंवा संपूर्ण शीट निवडा, नंतर क्रमाने दाबा: Alt → H → O → I (AutoFit Column Width). [00:06:23]\n\n३. क्रमांक तयार करणे (AutoFill)\n\nSequence: पहिल्या सेलमध्ये 1, दुसऱ्यात 2 टाइप करा; दोन्ही निवडा, निवडीच्या खालच्या उजव्या कोपऱ्यातील Fill Handle खाली ड्रॅग करा. [00:08:30] Ctrl पद्धत: 1 टाइप करा, Ctrl दाबून Fill Handle खाली ड्रॅग; प्रथम माऊस सोडा, नंतर Ctrl. [00:10:43] पॅटर्न: 1 आणि 5 टाइप करून ड्रॅग केल्यास Excel पॅटर्न चालू ठेवते (9, 13, 17…). [00:09:40]\n\n४. निवडीत झटपट डेटा प्रवेश\n\nरेंज निवडा [00:11:42]; टाइप करा आणि Enter – कर्सर निवडीतील पुढच्या सेलवर जातो; पहिल्या स्तंभाच्या तळाशी पोहोचल्यावर Enter दिल्यास पुढच्या स्तंभाच्या वरच्या सेलवर जातो. [00:12:05]\n\n५. शॉर्टकट सारांश: उजवीकडे – Tab/Right Arrow; खाली – Enter; AutoFit – Alt+H+O+I; AutoFill – 1,2 निवडून Fill Handle ड्रॅग; Quick Fill – रेंज हायलाइट करून टाइप आणि Enter.";
    await CourseDay.updateOne(
      { dayNumber: 25 },
      {
        $set: {
          contentEn: "",
          contentMr: "",
          subsections: [
            {
              titleEn: "Section 1",
              titleMr: "भाग १",
              contentEn: "",
              contentMr: "",
              videoUrl: "https://youtu.be/z-1BJw6iebg?si=ZrC1LaH8M8yDB8i6"
            },
            {
              titleEn: "Section 2",
              titleMr: "भाग २",
              contentEn: day25Section2ContentEn,
              contentMr: day25Section2ContentMr,
              videoUrl: ""
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 25 },
      {
        $set: {
          "exam.durationMinutes": 30,
          "exam.questions": [
            {
              questionEn: "Which key would you press to move to the next cell to the right instead of using the mouse?",
              questionMr: "माऊस न वापरता पुढच्या उजव्या सेलवर जाण्यासाठी कोणती कळ दाबावी?",
              options: [
                { textEn: "Enter", textMr: "Enter" },
                { textEn: "Esc", textMr: "Esc" },
                { textEn: "Tab", textMr: "Tab" },
                { textEn: "Alt", textMr: "Alt" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What happens when you press 'Enter' after typing data into a cell?",
              questionMr: "सेलमध्ये डेटा टाइप केल्यावर 'Enter' दाबल्यास काय होते?",
              options: [
                { textEn: "The cursor moves to the cell below.", textMr: "कर्सर खालच्या सेलवर जातो." },
                { textEn: "The cursor moves to the cell to the right.", textMr: "कर्सर उजव्या सेलवर जातो." },
                { textEn: "The cursor moves to the previous cell.", textMr: "कर्सर मागच्या सेलवर जातो." },
                { textEn: "The cursor stays in the same cell.", textMr: "कर्सर त्याच सेलमध्ये राहतो." }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which shortcut allows you to navigate to the previous cell?",
              questionMr: "मागच्या सेलवर जाण्यासाठी कोणता शॉर्टकट वापरावा?",
              options: [
                { textEn: "Shift + Tab", textMr: "Shift + Tab" },
                { textEn: "Alt + Enter", textMr: "Alt + Enter" },
                { textEn: "Ctrl + Space", textMr: "Ctrl + Space" },
                { textEn: "Ctrl + Tab", textMr: "Ctrl + Tab" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "How can you manually auto-fit a column to match the width of its longest text using the mouse?",
              questionMr: "माऊस वापरून स्तंभाची रुंदी सर्वात लांब मजकुराशी जुळवण्यासाठी काय करावे?",
              options: [
                { textEn: "Right-click the cell and select 'Format'", textMr: "सेलवर Right-click करून 'Format' निवडा" },
                { textEn: "Double-click inside the cell", textMr: "सेलच्या आत डबल-क्लिक करा" },
                { textEn: "Double-click the boundary between column headers", textMr: "स्तंभ हेडर्स दरम्यानच्या सीमेवर डबल-क्लिक करा" },
                { textEn: "Click and drag the row number", textMr: "पंक्ती क्रमांकावर क्लिक करून ड्रॅग करा" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What is the correct key sequence to AutoFit Column Width using the keyboard?",
              questionMr: "कीबोर्ड वापरून AutoFit Column Width साठी योग्य कळ क्रम कोणता?",
              options: [
                { textEn: "Alt + F4", textMr: "Alt + F4" },
                { textEn: "Ctrl + Alt + Del", textMr: "Ctrl + Alt + Del" },
                { textEn: "Ctrl + Shift + F", textMr: "Ctrl + Shift + F" },
                { textEn: "Alt -> H -> O -> I", textMr: "Alt -> H -> O -> I" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "To create a sequential list (1, 2, 3...) using the Fill Handle without holding any keys, what must you do first?",
              questionMr: "कोणतीही कळ दाबून ठेवल्याशिवाय Fill Handle वापरून क्रम (1, 2, 3...) तयार करण्यापूर्वी काय करावे?",
              options: [
                { textEn: "Type '1' and press Tab.", textMr: "'1' टाइप करून Tab दाबा." },
                { textEn: "Select an empty column and press Enter.", textMr: "रिकामा स्तंभ निवडा आणि Enter दाबा." },
                { textEn: "Type '1' in the first cell and '2' in the second, then select both.", textMr: "पहिल्या सेलमध्ये '1' आणि दुसऱ्यात '2' टाइप करा, नंतर दोन्ही निवडा." },
                { textEn: "Type '1' in the first cell and immediately drag.", textMr: "पहिल्या सेलमध्ये '1' टाइप करून त्वरित ड्रॅग करा." }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you only type '1' in a cell, which key must you hold while dragging the Fill Handle to create a sequence (1, 2, 3...)?",
              questionMr: "फक्त '1' टाइप केल्यास क्रम (1, 2, 3...) तयार करण्यासाठी Fill Handle ड्रॅग करताना कोणती कळ दाबून ठेवावी?",
              options: [
                { textEn: "Tab", textMr: "Tab" },
                { textEn: "Ctrl", textMr: "Ctrl" },
                { textEn: "Shift", textMr: "Shift" },
                { textEn: "Alt", textMr: "Alt" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "If you enter '1' in the first cell and '5' in the second, then drag the Fill Handle, what will the next numbers be?",
              questionMr: "पहिल्या सेलमध्ये '1' आणि दुसऱ्यात '5' टाइप करून Fill Handle ड्रॅग केल्यास पुढचे क्रमांक काय असतील?",
              options: [
                { textEn: "9, 13, 17...", textMr: "9, 13, 17..." },
                { textEn: "6, 7, 8...", textMr: "6, 7, 8..." },
                { textEn: "1, 5, 1, 5...", textMr: "1, 5, 1, 5..." },
                { textEn: "2, 3, 4..", textMr: "2, 3, 4.." }
              ],
              correctIndex: 0
            },
            {
              questionEn: "What is the first step to perform 'Rapid Data Entry' in a specific block of cells?",
              questionMr: "'Rapid Data Entry' करण्याचा पहिला पाऊल कोणता?",
              options: [
                { textEn: "Press Ctrl + A.", textMr: "Ctrl + A दाबा." },
                { textEn: "Select the entire range where you want to enter data.", textMr: "ज्या रेंजमध्ये डेटा प्रवेश करायचा ती संपूर्ण रेंज निवडा." },
                { textEn: "Turn on Scroll Lock.", textMr: "Scroll Lock चालू करा." },
                { textEn: "Start typing in the first cell immediately.", textMr: "पहिल्या सेलमध्ये त्वरित टाइप करणे सुरू करा." }
              ],
              correctIndex: 1
            },
            {
              questionEn: "In a selected range for Rapid Data Entry, what happens when you reach the bottom of a column and press Enter?",
              questionMr: "Rapid Data Entry साठी निवडलेल्या रेंजमध्ये स्तंभाच्या तळाशी पोहोचल्यावर Enter दाबल्यास काय होते?",
              options: [
                { textEn: "The cursor automatically jumps to the top of the next column in the selection.", textMr: "कर्सर निवडीतील पुढच्या स्तंभाच्या वरच्या सेलवर आपोआप जातो." },
                { textEn: "The data is deleted.", textMr: "डेटा हटतो." },
                { textEn: "The selection is cancelled.", textMr: "निवड रद्द होते." },
                { textEn: "The cursor moves to the cell directly below, outside the selection.", textMr: "कर्सर निवडीबाहेर थेट खालच्या सेलवर जातो." }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    // Day 26: How to Apply Formulas in Tabular Format – Section 1 (video placeholder), Section 2 (notes)
    const day26Section2ContentEn =
      "Computer Class Day 26: How to Apply Formulas in Tabular Format in Excel\n\n1. Introduction to Functions vs. Formulas\n\nThe video distinguishes between \"Functions\" and \"Formulas\":\n\nFunctions: In-built Excel commands like SUM(), MAX(), MIN().\n\nFormulas: Custom expressions created by the user, such as =(A1/B1)*100.\n\n2. Summation (Calculating Total Marks) [00:02:18]\n\nThe instructor demonstrates three ways to calculate a total across a row:\n\nA. Using AutoSum\n\nGo to the Home tab.\n\nClick the Sum (Σ) button in the ribbon.\n\nExcel automatically selects the adjacent range. Press Enter.\n\nB. Manual Cell Addition\n\nType = and click on individual cells separated by plus signs: =C2+D2+E2+F2+G2.\n\nNote: This is tedious for large datasets.\n\nC. Using the SUM Function\n\nType =SUM(.\n\nSelect the range of cells (e.g., from Physics to Chemistry).\n\nClose the bracket and press Enter.\n\nD. Keyboard Shortcut [00:05:52]\n\nSelect the cell where you want the total.\n\nPress Alt + = on your keyboard.\n\n3. Statistical Functions [00:07:18]\n\nCommon functions used for data analysis in tables:\n\nTask | Function | Description\nMaximum | =MAX(range) | Finds the highest value in the selected range.\nMinimum | =MIN(range) | Finds the lowest value in the selected range.\nCount | =COUNT(range) | Counts how many numeric entries are in the range.\nAverage | =AVERAGE(range) | Calculates the mean of the selected numbers.\n\nPro Tip: When using the AutoSum dropdown for these functions, Excel might occasionally include the \"Total\" column in its automatic range. Always double-check and manually re-select the correct data range (e.g., only the subject marks) before hitting Enter [00:07:35].\n\n4. Calculating Percentage [00:11:17]\n\nSince Excel does not have a specific \"Percentage\" function, you must create a manual formula:\n\nLogic: (Obtained Marks / Total Possible Marks) * 100\n\nExcel Formula: = (H2 / 500) * 100 (assuming H2 is the Total and there are 5 subjects of 100 marks each).\n\nOrder of Operations: Excel follows BODMAS. It will divide first, then multiply. You can use brackets (H2/500)*100 for better readability [00:12:57].\n\n5. Efficiency Tips: Applying Formulas to the Whole Column [00:04:38]\n\nOnce a formula is applied to the first row, you don't need to type it for others:\n\nDrag and Drop: Click the small green square (Fill Handle) at the bottom-right of the cell and drag it down.\n\nDouble-Click: Double-click the Fill Handle to instantly fill the formula down to the last row of your data.\n\n6. Key Takeaways\n\nAlways start a formula or function with an equals sign (=).\n\nCell references (like C2) are better than hard-coding numbers because the result updates automatically if the data changes.\n\nThe Formula Bar is useful for viewing and editing long or complex formulas [00:04:12].\n\nNext Video Teaser: The instructor mentions that the next lesson will cover logical conditions (e.g., Pass/Fail results using the IF function).";
    const day26Section2ContentMr =
      "Computer Class Day 26: How to Apply Formulas in Tabular Format in Excel\n\n१. Functions vs. Formulas\n\nFunctions: अंगभूत Excel कमांड्स – SUM(), MAX(), MIN().\nFormulas: वापरकर्ता तयार केलेले सूत्र, उदा. =(A1/B1)*100.\n\n२. बेरीज (Total Marks) [00:02:18]\n\nAutoSum: Home टॅब → Sum (Σ) बटण → Enter. Manual: =C2+D2+E2+... SUM: =SUM(रेंज). शॉर्टकट: Alt + = [00:05:52].\n\n३. Statistical Functions [00:07:18]\n\nसारणी विश्लेषणासाठी: Maximum =MAX(रेंज), Minimum =MIN(रेंज), Count =COUNT(रेंज), Average =AVERAGE(रेंज).\n\nPro Tip: AutoSum ड्रॉपडाउन कधीकधी Total स्तंभ समाविष्ट करतो; Enter दाबण्यापूर्वी फक्त विषय गुणांची रेंज पुन्हा निवडा [00:07:35].\n\n४. टक्केवारी [00:11:17]\n\nसूत्र: (मिळालेले गुण / एकूण शक्य गुण) * 100. उदा. =(H2/500)*100. BODMAS अनुसरण. [00:12:57]\n\n५. संपूर्ण स्तंभात सूत्र लावणे [00:04:38]\n\nFill Handle खाली ड्रॅग करा किंवा Fill Handle वर डबल-क्लिक.\n\n६. महत्त्वाचे: सूत्र/फंक्शन = ने सुरू; सेल संदर्भ वापरा; Formula Bar लांब सूत्र पाहण्यासाठी उपयुक्त [00:04:12]. पुढे: IF फंक्शन (Pass/Fail).";
    await CourseDay.updateOne(
      { dayNumber: 26 },
      {
        $set: {
          contentEn: "",
          contentMr: "",
          subsections: [
            {
              titleEn: "Section 1",
              titleMr: "भाग १",
              contentEn: "",
              contentMr: "",
              videoUrl: "https://youtu.be/xZa8XWty_4o?si=bWXpSyOG2pNyX6u6"
            },
            {
              titleEn: "Section 2",
              titleMr: "भाग २",
              contentEn: day26Section2ContentEn,
              contentMr: day26Section2ContentMr,
              videoUrl: ""
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 26 },
      {
        $set: {
          "exam.durationMinutes": 30,
          "exam.questions": [
            {
              questionEn: "Which character must every Excel formula or function start with?",
              questionMr: "प्रत्येक Excel सूत्र किंवा फंक्शन कोणत्या चिन्हाने सुरू होणे आवश्यक आहे?",
              options: [
                { textEn: "+ (Plus)", textMr: "+ (Plus)" },
                { textEn: "= (Equals)", textMr: "= (Equals)" },
                { textEn: "- (Minus)", textMr: "- (Minus)" },
                { textEn: "SUM", textMr: "SUM" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What is the keyboard shortcut to automatically apply the SUM function to a selected cell?",
              questionMr: "निवडलेल्या सेलमध्ये SUM फंक्शन स्वयं लावण्यासाठी कोणता कीबोर्ड शॉर्टकट वापरावा?",
              options: [
                { textEn: "Ctrl + F", textMr: "Ctrl + F" },
                { textEn: "Alt + =", textMr: "Alt + =" },
                { textEn: "Shift + +", textMr: "Shift + +" },
                { textEn: "Ctrl + S", textMr: "Ctrl + S" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which function would you use to find the highest score in a list of student marks?",
              questionMr: "विद्यार्थी गुणांच्या यादीत सर्वोच्च गुण शोधण्यासाठी कोणते फंक्शन वापरावे?",
              options: [
                { textEn: "=CEILING()", textMr: "=CEILING()" },
                { textEn: "=MAX()", textMr: "=MAX()" },
                { textEn: "=TOP()", textMr: "=TOP()" },
                { textEn: "=HIGH()", textMr: "=HIGH()" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You want to calculate the percentage for a student. The obtained marks are in cell H2 and the total possible marks are 500. Which formula is correct?",
              questionMr: "विद्यार्थ्याची टक्केवारी काढायची आहे. मिळालेले गुण सेल H2 मध्ये आणि एकूण शक्य गुण 500. योग्य सूत्र कोणते?",
              options: [
                { textEn: "=H2 * 500 / 100", textMr: "=H2 * 500 / 100" },
                { textEn: "=500 / H2 * 100", textMr: "=500 / H2 * 100" },
                { textEn: "=(H2 / 500) * 100", textMr: "=(H2 / 500) * 100" },
                { textEn: "=PERCENT(H2, 500)", textMr: "=PERCENT(H2, 500)" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What is the most efficient way to apply a formula from the top cell of a column to all the rows below it?",
              questionMr: "स्तंभातील वरच्या सेलचे सूत्र खालच्या सर्व पंक्तींना लावण्याचा सर्वात कार्यक्षम मार्ग कोणता?",
              options: [
                { textEn: "Double-click the Fill Handle", textMr: "Fill Handle वर डबल-क्लिक करा" },
                { textEn: "Use the Cut command", textMr: "Cut कमांड वापरा" },
                { textEn: "Copy and Paste Special > Values", textMr: "Copy आणि Paste Special > Values" },
                { textEn: "Retype the formula in every cell", textMr: "प्रत्येक सेलमध्ये सूत्र पुन्हा टाइप करा" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Why is it better to use cell references (e.g., =A1+B1) instead of hard-coded numbers (e.g., =10+20)?",
              questionMr: "हार्ड-कोडेड संख्यांऐवजी सेल संदर्भ (उदा. =A1+B1) वापरणे चांगले का?",
              options: [
                { textEn: "It is required to save the file", textMr: "फाइल सेव्ह करण्यासाठी आवश्यक आहे" },
                { textEn: "It looks more professional", textMr: "अधिक व्यावसायिक दिसते" },
                { textEn: "It prevents the file from being printed", textMr: "फाइल प्रिंट होण्यापासून रोखते" },
                { textEn: "The result updates automatically if the input data changes", textMr: "इनपुट डेटा बदलल्यास परिणाम आपोआप अपडेट होतो" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What potential issue should you check for when using AutoSum to calculate the Average of several subjects?",
              questionMr: "अनेक विषयांची सरासरी काढण्यासाठी AutoSum वापरताना कोणती संभाव्य समस्या तपासावी?",
              options: [
                { textEn: "Excel will always give an error message", textMr: "Excel नेहमी एरर देईल" },
                { textEn: "It will delete the data in the cells", textMr: "सेलमधील डेटा हटेल" },
                { textEn: "Excel might include the 'Total' column in the range", textMr: "Excel रेंजमध्ये 'Total' स्तंभ समाविष्ट करू शकतो" },
                { textEn: "Excel might format the cell as text", textMr: "Excel सेल टेक्स्ट म्हणून फॉर्मॅट करू शकतो" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which function counts how many cells in a range contain numeric values?",
              questionMr: "रेंजमध्ये किती सेलमध्ये संख्यात्मक मूल्ये आहेत हे कोणते फंक्शन मोजते?",
              options: [
                { textEn: "=SUM()", textMr: "=SUM()" },
                { textEn: "=COUNT()", textMr: "=COUNT()" },
                { textEn: "=NUMBER()", textMr: "=NUMBER()" },
                { textEn: "=CALC()", textMr: "=CALC()" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "According to the notes, what is the 'Order of Operations' Excel follows when calculating percentages?",
              questionMr: "टक्केवारी काढताना Excel कोणता 'Order of Operations' अनुसरण करतो?",
              options: [
                { textEn: "It always multiplies first", textMr: "प्रथम नेहमी गुणाकार" },
                { textEn: "BODMAS", textMr: "BODMAS" },
                { textEn: "Left to Right regardless of operator", textMr: "ऑपरेटरकडे दुर्लक्ष करून डावीकडून उजवीकडे" },
                { textEn: "Addition then Subtraction", textMr: "प्रथम बेरीज नंतर वजाबाकी" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What is the difference between a Function and a Formula in the context of this video?",
              questionMr: "या व्हिडिओच्या संदर्भात Function आणि Formula मध्ये फरक काय आहे?",
              options: [
                { textEn: "Functions are in-built commands; Formulas are user-created expressions", textMr: "Functions अंगभूत कमांड्स; Formulas वापरकर्ता तयार केलेली अभिव्यक्ती" },
                { textEn: "There is no difference", textMr: "फरक नाही" },
                { textEn: "Formulas are faster than Functions", textMr: "Formulas Functions पेक्षा वेगवान आहेत" },
                { textEn: "Formulas are for text, Functions are for numbers", textMr: "Formulas मजकूरासाठी, Functions संख्यांसाठी" }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    // Day 27: Conditional Formatting in Excel – Section 1 (video placeholder), Section 2 (notes)
    const day27Section2ContentEn =
      "Computer Class Day 27: Conditional Formatting in Excel\n\n1. What is Conditional Formatting? [00:01:34]\n\nConditional formatting allows you to automatically apply formatting—such as colors, icons, and data bars—to one or more cells based on the cell value. It helps in:\n\nVisualizing data trends.\n\nIdentifying specific data points (e.g., failing marks or top performers).\n\nAnalyzing large datasets quickly.\n\n2. Highlight Cell Rules [00:02:06]\n\nThis feature highlights cells that meet specific mathematical or text-based criteria.\n\nGreater Than: Highlights cells with values higher than a specified number (e.g., marking passing students).\n\nLess Than: Highlights cells with values lower than a specified number (e.g., identifying students who scored below 35).\n\nBetween: Highlights values within a specific range (e.g., scores between 40 and 60).\n\nEqual To: Highlights cells that match a specific value exactly.\n\nText that Contains: Useful for finding specific names or strings (e.g., finding everyone with the surname \"Sharma\" in a voter list) [00:09:54].\n\nDuplicate Values: Extremely useful for data cleaning, such as identifying if an Aadhar card number or Email ID has been entered twice [00:08:22].\n\n3. Top/Bottom Rules [00:10:48]\n\nIdeal for identifying the \"best\" and \"worst\" performers in a dataset.\n\nTop 10 Items / Top 10%: Highlights the highest values.\n\nBottom 10 Items / Bottom 10%: Highlights the lowest values.\n\nAbove/Below Average: Automatically calculates the average of the range and highlights cells accordingly.\n\n4. Visualizing Data with Bars and Scales [00:12:21]\n\nData Bars: Adds a colored bar inside the cell. The length of the bar represents the value in the cell (similar to a mini bar chart) [00:12:33].\n\nColor Scales: Applies a two or three-color gradient to a range of cells. The color shade represents where the value falls (e.g., Green for high, Red for low) [00:13:32].\n\n5. Icon Sets [00:14:18]\n\nIcons (like arrows, traffic lights, or star ratings) are added to cells to represent the data's status.\n\nDirectional Arrows: Show if a value is high, medium, or low.\n\nShapes/Indicators: Traffic lights (Red/Yellow/Green).\n\nRatings: Mobile signal bars or star ratings [00:16:06].\n\nPro Tip: Hiding Numbers to Show Only Icons [00:15:09]\n\nYou can display only the icons without the numbers:\n\nGo to Format Cells (Ctrl + 1).\n\nGo to Custom.\n\nIn the 'Type' box, enter three semicolons: ;;;\n\nThe numbers will become invisible, leaving only the conditional formatting icons.\n\n6. Managing and Clearing Rules [00:03:11]\n\nClear Rules: You can choose to clear rules from \"Selected Cells\" or the \"Entire Sheet\" [00:04:40].\n\nManage Rules: Allows you to see all rules applied to a range, change their order of priority, or edit the criteria.\n\n7. Formatting Options\n\nWhen applying a rule, you can choose:\n\nPre-defined formats (e.g., Light Red Fill with Dark Red Text).\n\nCustom Format: Allows you to choose specific borders, font colors, and fill patterns [00:07:14].\n\nSummary: Conditional formatting is a powerful tool for making data \"speak.\" Whether you are looking for duplicates or identifying top students, these visual cues make Excel reports much more professional and easier to read.";
    const day27Section2ContentMr =
      "Computer Class Day 27: Conditional Formatting in Excel\n\n१. Conditional Formatting म्हणजे काय? [00:01:34]\n\nसेल मूल्यावर आधारित रंग, आयकॉन्स, डेटा बार यासारखे फॉर्मॅटिंग स्वयं लागू होते. डेटा ट्रेंड्स दाखवणे, विशिष्ट बिंदू ओळखणे (उत्तीर्ण/अनुत्तीर्ण), मोठ्या डेटासेटचे विश्लेषण.\n\n२. Highlight Cell Rules [00:02:06]\n\nगणितीय किंवा मजकूर निकष पूर्ण करणाऱ्या सेल हायलाइट होतात.\n\nGreater Than: निर्दिष्ट संख्येपेक्षा जास्त मूल्ये (उत्तीर्ण विद्यार्थी). Less Than: कमी (उदा. 35 पेक्षा कमी). Between: दिलेल्या रेंजमध्ये (40–60). Equal To: अगदी जुळणारे मूल्य. Text that Contains: विशिष्ट मजकूर (उदा. \"Sharma\") [00:09:54]. Duplicate Values: डेटा सफाई – आधार क्रमांक/ईमेल दुसऱ्यांदा [00:08:22].\n\n३. Top/Bottom Rules [00:10:48]\n\nTop 10 Items/%, Bottom 10 Items/%, Above/Below Average.\n\n४. Data Bars आणि Color Scales [00:12:21]\n\nData Bars: सेलमध्ये बार; लांबी मूल्य दर्शवते [00:12:33]. Color Scales: दोन/तीन रंग ग्रेडियंट; उच्च=हिरवा, निम्न=लाल [00:13:32].\n\n५. Icon Sets [00:14:18]\n\nअॅरो, ट्रॅफिक लाइट्स, स्टार रेटिंग. Pro Tip: फक्त आयकॉन दाखवणे – Format Cells (Ctrl+1) → Custom → Type: ;;; [00:15:09].\n\n६. Clear Rules / Manage Rules [00:03:11]\n\nSelected Cells किंवा Entire Sheet; नियमांचा क्रम बदलणे [00:04:40].\n\n७. Pre-defined किंवा Custom Format [00:07:14]. सारांश: डेटा स्पष्ट दाखवण्यासाठी शक्तिशाली साधन.";
    await CourseDay.updateOne(
      { dayNumber: 27 },
      {
        $set: {
          contentEn: "",
          contentMr: "",
          subsections: [
            {
              titleEn: "Section 1",
              titleMr: "भाग १",
              contentEn: "",
              contentMr: "",
              videoUrl: "https://youtu.be/XWztQ4YeULw?si=j81-G8j7B_Lv4-Hs"
            },
            {
              titleEn: "Section 2",
              titleMr: "भाग २",
              contentEn: day27Section2ContentEn,
              contentMr: day27Section2ContentMr,
              videoUrl: ""
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 27 },
      {
        $set: {
          "exam.durationMinutes": 30,
          "exam.questions": [
            {
              questionEn: "Which of the following best describes the primary purpose of Conditional Formatting in Excel?",
              questionMr: "Excel मध्ये Conditional Formatting चा मुख्य उद्देश खालीलपैकी कोणता सर्वोत्तम वर्णन करतो?",
              options: [
                { textEn: "To permanently delete data that does not meet specific criteria", textMr: "विशिष्ट निकष पूर्ण न करणारा डेटा कायमचा हटवणे" },
                { textEn: "To sort data in ascending or descending order", textMr: "डेटा चढत्या किंवा उतरत्या क्रमाने लावणे" },
                { textEn: "To automatically apply formatting like colors or icons based on the cell's value", textMr: "सेल मूल्यावर आधारित रंग किंवा आयकॉन्स स्वयं लागू करणे" },
                { textEn: "To change the cell value based on a formula", textMr: "सूत्रावर आधारित सेल मूल्य बदलणे" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You have a list of voters and want to highlight every cell that includes the surname \"Sharma\". Which Highlight Cell Rule should you use?",
              questionMr: "मतदार यादीत \"Sharma\" आडनाव असलेले प्रत्येक सेल हायलाइट करायचे आहे. कोणता Highlight Cell Rule वापरावा?",
              options: [
                { textEn: "Duplicate Values", textMr: "Duplicate Values" },
                { textEn: "Text that Contains", textMr: "Text that Contains" },
                { textEn: "Equal To", textMr: "Equal To" },
                { textEn: "Between", textMr: "Between" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You are cleaning a dataset and suspect that some Aadhar card numbers have been entered twice. Which rule would instantly reveal these errors?",
              questionMr: "डेटासेट साफ करत आहात आणि काही आधार क्रमांक दोनदा टाइप झाले असण्याची शंका आहे. ही चुका ताबडतोब कोणता नियम दाखवेल?",
              options: [
                { textEn: "Greater Than", textMr: "Greater Than" },
                { textEn: "Top 10 Items", textMr: "Top 10 Items" },
                { textEn: "Duplicate Values", textMr: "Duplicate Values" },
                { textEn: "Data Bars", textMr: "Data Bars" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which visual tool adds a colored bar inside the cell, where the length of the bar is proportional to the cell's value?",
              questionMr: "कोणते साधन सेलमध्ये रंगीत बार जोडते, जिथे बारची लांबी सेल मूल्याच्या प्रमाणात असते?",
              options: [
                { textEn: "Icon Sets", textMr: "Icon Sets" },
                { textEn: "Color Scales", textMr: "Color Scales" },
                { textEn: "Data Bars", textMr: "Data Bars" },
                { textEn: "Highlight Cell Rules", textMr: "Highlight Cell Rules" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you want to quickly identify the students performing in the bottom 10% of the class, which category of rules should you use?",
              questionMr: "वर्गातील खालच्या 10% विद्यार्थ्यांना ओळखण्यासाठी कोणत्या नियमांचा वापर करावा?",
              options: [
                { textEn: "Data Bars", textMr: "Data Bars" },
                { textEn: "Top/Bottom Rules", textMr: "Top/Bottom Rules" },
                { textEn: "Highlight Cell Rules", textMr: "Highlight Cell Rules" },
                { textEn: "Icon Sets", textMr: "Icon Sets" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "According to the 'Pro Tip' in the notes, which custom format code will hide the numbers in a cell, leaving only the Conditional Formatting icons visible?",
              questionMr: "नोट्समधील 'Pro Tip' नुसार, सेलमधील संख्या लपवून फक्त Conditional Formatting आयकॉन्स दिसण्यासाठी कोणता कस्टम फॉर्मॅट कोड वापरावा?",
              options: [
                { textEn: "(blank)", textMr: "(रिक्त)" },
                { textEn: "000", textMr: "000" },
                { textEn: ";;;", textMr: ";;;" },
                { textEn: "Hidden", textMr: "Hidden" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You applied a 'Greater Than 50' rule to a column. Later, you want to remove this rule only from that specific column, not the whole sheet. Which option should you choose?",
              questionMr: "तुम्ही एका स्तंभावर 'Greater Than 50' नियम लावला. नंतर फक्त त्या स्तंभातून हा नियम काढायचा आहे, संपूर्ण शीटवरून नाही. कोणता पर्याय निवडावा?",
              options: [
                { textEn: "Delete Column", textMr: "Delete Column" },
                { textEn: "Clear Rules from Selected Cells", textMr: "Clear Rules from Selected Cells" },
                { textEn: "Manage Rules > Edit Rule", textMr: "Manage Rules > Edit Rule" },
                { textEn: "Clear Rules from Entire Sheet", textMr: "Clear Rules from Entire Sheet" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which of the following is NOT a standard option when choosing a 'Color Scale'?",
              questionMr: "Color Scale निवडताना खालीलपैकी कोणता मानक पर्याय नाही?",
              options: [
                { textEn: "3-Color Scale", textMr: "3-Color Scale" },
                { textEn: "2-Color Scale", textMr: "2-Color Scale" },
                { textEn: "Rainbow Text Animation", textMr: "Rainbow Text Animation" },
                { textEn: "Green - Yellow - Red Scale", textMr: "Green - Yellow - Red Scale" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What happens if you use the 'Above Average' rule on a set of student marks?",
              questionMr: "विद्यार्थी गुणांवर 'Above Average' नियम वापरल्यास काय होते?",
              options: [
                { textEn: "It highlights any student with marks above 50.", textMr: "50 पेक्षा जास्त गुण असलेल्या विद्यार्थ्यांना हायलाइट करते." },
                { textEn: "It automatically calculates the average of the selected range and highlights cells greater than that value.", textMr: "निवडलेल्या रेंजची सरासरी काढते आणि त्यापेक्षा जास्त मूल्याचे सेल हायलाइट करते." },
                { textEn: "It changes the font of all cells to bold.", textMr: "सर्व सेलचा फॉंट बोल्ड करते." },
                { textEn: "It highlights the top 10 students in the list.", textMr: "यादीतील टॉप 10 विद्यार्थ्यांना हायलाइट करते." }
              ],
              correctIndex: 1
            },
            {
              questionEn: "When creating a Custom Format for a rule, which of the following attributes can you modify?",
              questionMr: "नियमासाठी Custom Format तयार करताना खालीलपैकी कोणते गुणधर्म बदलता येतात?",
              options: [
                { textEn: "Font color, Border style, and Fill pattern", textMr: "Font color, Border style आणि Fill pattern" },
                { textEn: "The actual text content (e.g., changing 'Fail' to 'Pass')", textMr: "वास्तविक मजकूर (उदा. 'Fail' ला 'Pass' करणे)" },
                { textEn: "Font size and Font family (e.g., changing Arial to Times New Roman)", textMr: "Font size आणि Font family (उदा. Arial → Times New Roman)" },
                { textEn: "Cell width and height", textMr: "Cell width आणि height" }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    // Day 28: IF, AND, OR Functions – Section 1 (video), Section 2 (notes)
    const day28Section2ContentEn =
      "Computer Class Day 28: IF, AND, OR Functions in Excel\n\n1. Introduction to Logical Functions\n\nLogical functions allow Excel to make decisions based on specific conditions. This is essential for tasks like automating student results, categorizing data, or calculating commissions.\n\n2. The Basic IF Function [00:04:53]\n\nThe IF function checks a single condition and returns one value if true and another if false.\n\nSyntax: =IF(logical_test, value_if_true, value_if_false)\n\nExample (Pass/Fail):\n=IF(H2 >= 33, \"Pass\", \"Fail\")\n\nKey Rules:\n\nText values (like \"Pass\" or \"Fail\") must be enclosed in double quotes (\" \").\n\nArguments are separated by commas (,). [00:07:04]\n\nDouble quotes are required; using two single quotes will cause an error. [00:07:52]\n\n3. IF with AND (Multiple Mandatory Conditions) [00:11:54]\n\nUse AND inside an IF when all conditions must be met for the result to be \"True.\"\n\nScenario: A student must pass every single subject (e.g., score > 33 in Math, English, and Science) to pass the exam.\n\nSyntax: =IF(AND(condition1, condition2, ...), \"Pass\", \"Fail\")\n\nExample: =IF(AND(C2>=33, D2>=33, E2>=33, F2>=33, G2>=33), \"Pass\", \"Fail\")\n\nLogic: If even one subject score is below 33, the AND function returns FALSE, and the student \"Fails.\" [00:18:28]\n\n4. IF with OR (Any One Condition) [00:19:19]\n\nUse OR when the result should be \"True\" if any one of the conditions is met.\n\nSyntax: =IF(OR(condition1, condition2, ...), \"Value_if_Any_True\", \"Value_if_None_True\")\n\nExample (Identifying Failures):\n=IF(OR(C2<33, D2<33, E2<33), \"Fail\", \"Pass\")\n\nLogic: If a student scores less than 33 in any of the subjects, they are marked as \"Fail.\" [00:24:34]\n\n5. Nested IF (The Grading System) [00:25:21]\n\nA \"Nested IF\" is when you put an IF function inside another IF function. This is used for multiple possible outcomes (like Grades A+, A, B, C, F).\n\nScenario: Grading based on percentage.\n\nLogic Flow:\n\nFirst, check if the student failed any subjects (using a reference to the Pass/Fail column).\n\nIf passed, check if Percentage >= 75% -> A+\n\nOtherwise, check if Percentage >= 60% -> A\n\nOtherwise, check if Percentage >= 45% -> B\n\nOtherwise, check if Percentage >= 33% -> C\n\nElse -> Fail\n\nFormula Example:\n=IF(N2=\"Fail\", \"F\", IF(M2>=75, \"A+\", IF(M2>=60, \"A\", IF(M2>=45, \"B\", \"C\"))))\n\nPro Tip: You don't need to manually close all the brackets at the end; Excel will often suggest the correct correction when you press Enter. [00:34:51]\n\n6. Practical Tips & Common Errors\n\nSpace Error: Never put a space between the function name and the bracket (e.g., use IF( not IF (). [00:33:08]\n\nEfficiency: Once the formula is written for the first row, use the Fill Handle (double-click the bottom right corner of the cell) to apply it to all students. [00:33:42]\n\nData Integrity: A student might have a high overall percentage but still fail if they failed an individual subject. Nested IFs help capture this accurately. [00:35:45]\n\nSummary: Mastery of IF, AND, and OR allows you to build complex automated systems in Excel that go beyond simple arithmetic.";
    const day28Section2ContentMr =
      "Computer Class Day 28: IF, AND, OR Functions in Excel\n\n१. Logical Functions परिचय\n\nविशिष्ट अटींवर आधारित Excel निर्णय घेऊ शकतो – विद्यार्थी निकाल, वर्गीकरण, कमिशन यासारखे काम.\n\n२. मूलभूत IF फंक्शन [00:04:53]\n\nSyntax: =IF(logical_test, value_if_true, value_if_false). उदा. =IF(H2>=33, \"Pass\", \"Fail\"). मजकूर दुहेरी अवतरणात (\" \"); अर्ग्युमेंट्स कॉमाने विभक्त; दुहेरी अवतरणच गरजेचे [00:07:04, 00:07:52].\n\n३. IF सह AND (सर्व अटी पूर्ण) [00:11:54]\n\nसर्व अटी पूर्ण झाल्यावरच True. =IF(AND(C2>=33, D2>=33, E2>=33, F2>=33, G2>=33), \"Pass\", \"Fail\"). एकही विषय 33 पेक्षा कमी असेल तर Fail [00:18:28].\n\n४. IF सह OR (एक अट पूर्ण) [00:19:19]\n\nकोणतीही एक अट पूर्ण झाली तर True. =IF(OR(C2<33, D2<33, E2<33), \"Fail\", \"Pass\"). कोणत्याही विषयात 33 पेक्षा कमी तर Fail [00:24:34].\n\n५. Nested IF (ग्रेडिंग) [00:25:21]\n\nIF आत IF – अनेक परिणाम (A+, A, B, C, F). प्रथम Fail column पहा; नंतर टक्केवारी >=75 -> A+, >=60 -> A, >=45 -> B, >=33 -> C, else F. उदा. =IF(N2=\"Fail\", \"F\", IF(M2>=75, \"A+\", IF(M2>=60, \"A\", IF(M2>=45, \"B\", \"C\")))). Pro Tip: कंस बंद करण्यासाठी Enter दाबल्यावर Excel सुचवू शकतो [00:34:51].\n\n६. टिप्स: IF आणि कंस दरम्यान स्पेस ठेवू नका (IF( नाही IF () [00:33:08]. Fill Handle ने सर्व पंक्तींना लावा [00:33:42]. उच्च टक्केवारी असूनही एखाद्या विषयात नापास असले तर Nested IF योग्य ग्रेड देतो [00:35:45]. सारांश: IF, AND, OR ने जटिल ऑटोमेशन शक्य.";
    await CourseDay.updateOne(
      { dayNumber: 28 },
      {
        $set: {
          contentEn: "",
          contentMr: "",
          subsections: [
            {
              titleEn: "Section 1",
              titleMr: "भाग १",
              contentEn: "",
              contentMr: "",
              videoUrl: "https://youtu.be/DD7W8L2c8xA?si=L8pcQSmRqwolIetc"
            },
            {
              titleEn: "Section 2",
              titleMr: "भाग २",
              contentEn: day28Section2ContentEn,
              contentMr: day28Section2ContentMr,
              videoUrl: ""
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 28 },
      {
        $set: {
          "exam.durationMinutes": 30,
          "exam.questions": [
            {
              questionEn: "What is the primary purpose of the IF function in Excel?",
              questionMr: "Excel मध्ये IF फंक्शनचा मुख्य उद्देश काय आहे?",
              options: [
                { textEn: "To add up a range of numbers based on a condition", textMr: "अटीवर आधारित संख्यांची बेरीज करणे" },
                { textEn: "To check a specific condition and return one value if true and another if false", textMr: "विशिष्ट अट तपासून सत्य असेल तर एक मूल्य आणि असत्य असेल तर दुसरे मूल्य परत करणे" },
                { textEn: "To find the average of numbers that meet specific criteria", textMr: "विशिष्ट निकष पूर्ण करणाऱ्या संख्यांची सरासरी काढणे" },
                { textEn: "To count the number of cells that are not empty", textMr: "रिकामी नसलेल्या सेलची संख्या मोजणे" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which of the following represents the correct syntax for a basic IF formula?",
              questionMr: "मूलभूत IF सूत्राचा योग्य सिंटॅक्स खालीलपैकी कोणता?",
              options: [
                { textEn: "=IF(value_if_true, value_if_false, logical_test)", textMr: "=IF(value_if_true, value_if_false, logical_test)" },
                { textEn: "=IF(logical_test, value_if_true)", textMr: "=IF(logical_test, value_if_true)" },
                { textEn: "=IF(logical_test, value_if_true, value_if_false)", textMr: "=IF(logical_test, value_if_true, value_if_false)" },
                { textEn: "=IF(logical_test : value_if_true : value_if_false)", textMr: "=IF(logical_test : value_if_true : value_if_false)" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "How must text values, such as \"Pass\" or \"Fail\", be written inside an IF function argument?",
              questionMr: "IF फंक्शन अर्ग्युमेंटमध्ये \"Pass\" किंवा \"Fail\" सारखे मजकूर कसे लिहावे?",
              options: [
                { textEn: "Without any quotes (Pass)", textMr: "अवतरणाशिवाय (Pass)" },
                { textEn: "In double quotes (\"Pass\")", textMr: "दुहेरी अवतरणात (\"Pass\")" },
                { textEn: "In brackets ([Pass])", textMr: "कंसात ([Pass])" },
                { textEn: "In single quotes ('Pass')", textMr: "एकच अवतरणात ('Pass')" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "When using the AND function inside an IF statement (e.g., =IF(AND(A1>33, B1>33), ...)), when does the function return TRUE?",
              questionMr: "IF मध्ये AND वापरताना (उदा. =IF(AND(A1>33, B1>33), ...)) फंक्शन कधी TRUE परत करते?",
              options: [
                { textEn: "If none of the conditions are met", textMr: "कोणतीही अट पूर्ण झाली नाही तर" },
                { textEn: "Only if ALL conditions are met", textMr: "फक्त सर्व अटी पूर्ण झाल्यावर" },
                { textEn: "If at least one of the conditions is met", textMr: "किमान एक अट पूर्ण झाल्यावर" },
                { textEn: "If the first condition is met, regardless of the others", textMr: "पहिली अट पूर्ण झाल्यावर, इतरांकडे दुर्लक्ष करून" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You want to identify students who failed. If a student scores less than 33 in ANY one subject, they fail. Which function should be used inside the IF?",
              questionMr: "नापास विद्यार्थी ओळखायचे आहेत. कोणत्याही एका विषयात 33 पेक्षा कमी गुण मिळाल्यास नापास. IF मध्ये कोणते फंक्शन वापरावे?",
              options: [
                { textEn: "SUM", textMr: "SUM" },
                { textEn: "MAX", textMr: "MAX" },
                { textEn: "AND", textMr: "AND" },
                { textEn: "OR", textMr: "OR" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What is a \"Nested IF\" function used for?",
              questionMr: "\"Nested IF\" फंक्शन कशासाठी वापरतात?",
              options: [
                { textEn: "To format cells with colors", textMr: "सेल रंगाने फॉर्मॅट करणे" },
                { textEn: "To handle scenarios with multiple possible outcomes (like Grades A, B, C, F)", textMr: "अनेक शक्य परिणाम असलेले परिदृश्य (उदा. ग्रेड A, B, C, F) हाताळणे" },
                { textEn: "To calculate the sum of multiple cells", textMr: "अनेक सेलची बेरीज काढणे" },
                { textEn: "To combine text from two cells", textMr: "दोन सेलचा मजकूर एकत्र करणे" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which of the following formulas contains a common syntax error mentioned in the notes?",
              questionMr: "नोट्समध्ये उल्लेखलेला सामान्य सिंटॅक्स एरर खालीलपैकी कोणत्या सूत्रात आहे?",
              options: [
                { textEn: "=IF (A1>10,\"Yes\",\"No\")", textMr: "=IF (A1>10,\"Yes\",\"No\")" },
                { textEn: "=IF(A1>10,\"Yes\",\"No\")", textMr: "=IF(A1>10,\"Yes\",\"No\")" },
                { textEn: "=IF(A1>10, \"Yes\", \"No\")", textMr: "=IF(A1>10, \"Yes\", \"No\")" },
                { textEn: "=IF(A1>10,\"Yes\",\"No\")", textMr: "=IF(A1>10,\"Yes\",\"No\")" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "According to the notes, what is the most efficient way to apply a formula to an entire column after writing it once?",
              questionMr: "सूत्र एकदा लिहिल्यावर संपूर्ण स्तंभात लावण्याचा सर्वात कार्यक्षम मार्ग नोट्सनुसार कोणता?",
              options: [
                { textEn: "Double-click the Fill Handle", textMr: "Fill Handle वर डबल-क्लिक करा" },
                { textEn: "Take a screenshot", textMr: "स्क्रीनशॉट घ्या" },
                { textEn: "Copy and paste individually", textMr: "वैयक्तिकरित्या Copy आणि Paste करा" },
                { textEn: "Retype it in every cell", textMr: "प्रत्येक सेलमध्ये पुन्हा टाइप करा" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "In a Nested IF used for grading, why is the order of conditions important?",
              questionMr: "ग्रेडिंगसाठी वापरलेल्या Nested IF मध्ये अटींचा क्रम महत्त्वाचा का आहे?",
              options: [
                { textEn: "You must always start with the lowest number", textMr: "नेहमी सर्वात कमी संख्येपासून सुरू करावे" },
                { textEn: "Excel stops at the first TRUE condition it finds", textMr: "Excel जी पहिली TRUE अट आढळते तिथे थांबते" },
                { textEn: "It isn't important; Excel sorts them automatically", textMr: "महत्त्वाचे नाही; Excel स्वयं क्रमवारी लावतो" },
                { textEn: "The last IF must always be empty", textMr: "शेवटचा IF नेहमी रिकामा असावा" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "What happens if you use two single quotes (' ') instead of one double quote (\" \") in a formula?",
              questionMr: "सूत्रात एका दुहेरी अवतरणाऐवजी दोन एकच अवतरण (' ') वापरल्यास काय होते?",
              options: [
                { textEn: "It makes the text bold", textMr: "मजकूर बोल्ड होतो" },
                { textEn: "It creates a comment", textMr: "कमेंट तयार होते" },
                { textEn: "It causes an error", textMr: "एरर येते" },
                { textEn: "It works perfectly fine", textMr: "बरोबर काम करते" }
              ],
              correctIndex: 2
            }
          ]
        }
      }
    );
    // Day 29: MS PowerPoint Introduction – Section 1 (video placeholder), Section 2 (notes)
    const day29Section2ContentEn =
      "Computer Class Day 29: MS PowerPoint Introduction Notes\n\nThis document provides a comprehensive summary of the introductory tutorial for Microsoft PowerPoint, covering its purpose, how to access it, and an overview of its interface.\n\n1. Introduction to Microsoft PowerPoint\n\nDefinition: MS PowerPoint is a presentation software developed by Microsoft. It is part of the MS Office suite (which includes Word, Excel, etc.).\n\nPrimary Uses: Creating professional presentations. Designing slide shows for business or educational purposes. Creating simple animation videos.\n\nInstallation: It does not need to be installed separately if you already have MS Office installed on your computer.\n\n2. Methods to Open PowerPoint\n\nThe tutorial outlines four main ways to launch the application:\n\nStart Menu: Click the Start button -> All Apps/Programs -> MS Office Folder -> Microsoft PowerPoint. [00:02:30]\n\nSearch Bar: Click the Search icon/bar and type \"PowerPoint\" or \"Microsoft PowerPoint.\" [00:03:00]\n\nRun Command (Short-cut): Press Windows + R on the keyboard, type powerpnt (exactly as written, without spaces), and press Enter. [00:03:13]\n\nDesktop Shortcut: Right-click on the Desktop -> New -> Microsoft PowerPoint Presentation. [00:03:46]\n\n3. Understanding the User Interface (UI)\n\nThe video breaks down the PowerPoint window into several key sections: [00:04:34]\n\nA. Title Bar (Top)\n\nShows the name of the current file (e.g., \"Presentation1\" or the saved file name).\n\nContains Window Controls: Minimize, Maximize/Restore, and Close buttons.\n\nB. Quick Access Toolbar (Top Left)\n\nContains frequently used shortcuts like Save, Undo, and Redo.\n\nIt can be customized to add more buttons like \"Print Preview\" or \"Email.\" [00:06:40]\n\nC. Office Button (File Menu)\n\nLocated in the top-left corner, it contains essential file management options: [00:07:37]\n\nNew: Create a new presentation.\n\nOpen: Open an existing file.\n\nSave: Save changes to the current file.\n\nSave As: Save a copy of the file with a different name or in a different location.\n\nPrint: Includes Print settings and Print Preview (to see how the slide looks before printing).\n\nPrepare/Send/Publish: Advanced options for security, emailing, or publishing to a server.\n\nClose: Closes the current file.\n\nD. The Ribbon and Tabs\n\nLocated below the Title Bar.\n\nOrganized into Tabs: Home, Insert, Design, Animations, Slide Show, Review, and View.\n\nEach tab contains a specific set of tools and options related to that category. [00:11:19]\n\nE. Navigation Panel (Left Side)\n\nDisplays thumbnail previews of all the slides in your presentation.\n\nAllows you to quickly switch between slides or see the overall flow. [00:12:09]\n\nF. Slide Area (Center)\n\nThe main workspace where you design your content. It is often referred to as the \"Page.\" [00:12:35]\n\nG. Notes Area (Bottom)\n\nA space below the slide area where you can type speaker notes for each specific slide. [00:12:56]\n\nH. Status Bar (Very Bottom)\n\nShows information like the total number of slides, the theme name, and the language. [00:13:07]\n\nIncludes View Buttons: Normal View, Slide Sorter, and Slide Show.\n\nIncludes the Zoom Slider to make the slide appear larger or smaller on the screen.\n\n4. Summary Table of Key Features\n\nComponent | Function\nRun Command | powerpnt\nQuick Access | Save, Undo, Redo (Customizable)\nSave As | Used to change file name or location\nStatus Bar | Shows slide count and zoom levels\nNotes Area | For adding speaker-specific information";
    const day29Section2ContentMr =
      "Computer Class Day 29: MS PowerPoint Introduction Notes\n\n१. Microsoft PowerPoint परिचय\n\nMS PowerPoint हे Microsoft चे प्रेझेंटेशन सॉफ्टवेअर; MS Office सूटचा भाग (Word, Excel सारखे). वापर: व्यावसायिक प्रेझेंटेशन्स, स्लाइड शो, साधे अॅनिमेशन व्हिडिओ. MS Office असेल तर वेगळे इंस्टॉल करण्याची गरज नाही.\n\n२. PowerPoint उघडण्याच्या पद्धती\n\nStart Menu -> All Apps -> MS Office Folder -> Microsoft PowerPoint [00:02:30]. Search Bar मध्ये \"PowerPoint\" टाइप [00:03:00]. Run: Windows + R, powerpnt (अगदी असेच, स्पेसशिवाय), Enter [00:03:13]. Desktop Shortcut: Right-click Desktop -> New -> Microsoft PowerPoint Presentation [00:03:46].\n\n३. User Interface (UI)\n\n[00:04:34] Title Bar – फाइल नाव, Minimize/Maximize/Close. Quick Access Toolbar – Save, Undo, Redo; कस्टमायझ करता येते [00:06:40]. Office Button (File Menu) – New, Open, Save, Save As, Print, Prepare/Send/Publish, Close [00:07:37]. Ribbon आणि Tabs – Home, Insert, Design, Animations, Slide Show, Review, View [00:11:19]. Navigation Panel – सर्व स्लाइड्सचे थंबनेल [00:12:09]. Slide Area – मुख्य कामाची जागा (\"Page\") [00:12:35]. Notes Area – स्पीकर नोट्स [00:12:56]. Status Bar – स्लाइड संख्या, थीम, भाषा; View बटणे; Zoom Slider [00:13:07].\n\n४. Summary Table of Key Features\n\nComponent | Function\nRun Command | powerpnt\nQuick Access | Save, Undo, Redo (Customizable)\nSave As | Used to change file name or location\nStatus Bar | Shows slide count and zoom levels\nNotes Area | For adding speaker-specific information";
    await CourseDay.updateOne(
      { dayNumber: 29 },
      {
        $set: {
          contentEn: "",
          contentMr: "",
          subsections: [
            {
              titleEn: "Section 1",
              titleMr: "भाग १",
              contentEn: "",
              contentMr: "",
              videoUrl: "https://youtu.be/Yoq-nL2W2Gk?si=X0QJsvK58hgVL5eh"
            },
            {
              titleEn: "Section 2",
              titleMr: "भाग २",
              contentEn: day29Section2ContentEn,
              contentMr: day29Section2ContentMr,
              videoUrl: ""
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 29 },
      {
        $set: {
          "exam.durationMinutes": 30,
          "exam.questions": [
            {
              questionEn: "Which specific command must be typed into the Run dialog box (Windows + R) to launch Microsoft PowerPoint?",
              questionMr: "Microsoft PowerPoint लॉन्च करण्यासाठी Run डायलॉग (Windows + R) मध्ये कोणती कमांड टाइप करावी?",
              options: [
                { textEn: "microsoft powerpoint", textMr: "microsoft powerpoint" },
                { textEn: "powerpoint", textMr: "powerpoint" },
                { textEn: "powerpnt", textMr: "powerpnt" },
                { textEn: "ppt", textMr: "ppt" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Where is the Zoom Slider located within the PowerPoint interface?",
              questionMr: "PowerPoint इंटरफेसमध्ये Zoom Slider कोठे असतो?",
              options: [
                { textEn: "Status Bar", textMr: "Status Bar" },
                { textEn: "Quick Access Toolbar", textMr: "Quick Access Toolbar" },
                { textEn: "Title Bar", textMr: "Title Bar" },
                { textEn: "Navigation Panel", textMr: "Navigation Panel" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which section of the interface is primarily used to display thumbnail previews of all slides for easy switching?",
              questionMr: "सर्व स्लाइड्सचे थंबनेल प्रिव्ह्यू सोप्या स्विचिंगसाठी कोणता भाग दाखवतो?",
              options: [
                { textEn: "Navigation Panel", textMr: "Navigation Panel" },
                { textEn: "Notes Area", textMr: "Notes Area" },
                { textEn: "Slide Area", textMr: "Slide Area" },
                { textEn: "Ribbon", textMr: "Ribbon" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "What is the primary function of the Notes Area located below the Slide Area?",
              questionMr: "Slide Area खाली असलेल्या Notes Area चे मुख्य कार्य काय आहे?",
              options: [
                { textEn: "To display the file name", textMr: "फाइल नाव दाखवणे" },
                { textEn: "To show the slide count", textMr: "स्लाइड संख्या दाखवणे" },
                { textEn: "To type speaker notes", textMr: "स्पीकर नोट्स टाइप करणे" },
                { textEn: "To change the slide layout", textMr: "स्लाइड लेआउट बदलणे" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which three commands are found by default on the Quick Access Toolbar?",
              questionMr: "Quick Access Toolbar वर डीफॉल्ट कोणती तीन कमांड्स असतात?",
              options: [
                { textEn: "New, Open, Close", textMr: "New, Open, Close" },
                { textEn: "Bold, Italic, Underline", textMr: "Bold, Italic, Underline" },
                { textEn: "Save, Undo, Redo", textMr: "Save, Undo, Redo" },
                { textEn: "Cut, Copy, Paste", textMr: "Cut, Copy, Paste" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you want to create a new PowerPoint file from the Desktop without opening the Start menu, what is the correct action?",
              questionMr: "Start मेनू न उघडता डेस्कटॉपवरून नवीन PowerPoint फाइल तयार करायची असेल तर योग्य क्रिया कोणती?",
              options: [
                { textEn: "Double-click the Recycle Bin", textMr: "Recycle Bin वर डबल-क्लिक करा" },
                { textEn: "Press Windows + D", textMr: "Windows + D दाबा" },
                { textEn: "Right-click Desktop > New > Microsoft PowerPoint Presentation", textMr: "Right-click Desktop > New > Microsoft PowerPoint Presentation" },
                { textEn: "Left-click Desktop > Properties", textMr: "Left-click Desktop > Properties" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which interface element displays the name of the current file, such as 'Presentation1'?",
              questionMr: "वर्तमान फाइलचे नाव (उदा. 'Presentation1') कोणता घटक दाखवतो?",
              options: [
                { textEn: "Office Button", textMr: "Office Button" },
                { textEn: "Ribbon", textMr: "Ribbon" },
                { textEn: "Title Bar", textMr: "Title Bar" },
                { textEn: "Status Bar", textMr: "Status Bar" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "The 'Ribbon' is organized into which of the following categories?",
              questionMr: "'Ribbon' खालीलपैकी कोणत्या श्रेणींमध्ये आयोजित आहे?",
              options: [
                { textEn: "Files", textMr: "Files" },
                { textEn: "Lists", textMr: "Lists" },
                { textEn: "Tabs", textMr: "Tabs" },
                { textEn: "Menus", textMr: "Menus" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which of the following is NOT listed as a primary use of MS PowerPoint in the notes?",
              questionMr: "नोट्सनुसार MS PowerPoint चा मुख्य वापर खालीलपैकी कोणता नाही?",
              options: [
                { textEn: "Designing slide shows for business", textMr: "व्यवसायासाठी स्लाइड शो डिझाइन करणे" },
                { textEn: "Creating professional presentations", textMr: "व्यावसायिक प्रेझेंटेशन्स तयार करणे" },
                { textEn: "Performing complex data calculations", textMr: "जटिल डेटा गणना करणे" },
                { textEn: "Creating simple animation videos", textMr: "साधे अॅनिमेशन व्हिडिओ तयार करणे" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Where would you click to find options for 'Save As', 'Print Preview', and 'Publish'?",
              questionMr: "'Save As', 'Print Preview' आणि 'Publish' पर्याय कोठे सापडतात?",
              options: [
                { textEn: "The Slide Area", textMr: "The Slide Area" },
                { textEn: "The View Tab", textMr: "The View Tab" },
                { textEn: "The Office Button / File Menu", textMr: "The Office Button / File Menu" },
                { textEn: "The Animation Tab", textMr: "The Animation Tab" }
              ],
              correctIndex: 2
            }
          ]
        }
      }
    );
    // Day 30: MS PowerPoint Home Tab Guide – Section 1 (video placeholder), Section 2 (notes)
    const day30Section2ContentEn =
      "Computer Class Day 30: MS PowerPoint Home Tab Guide\n\nThis document covers the comprehensive tutorial on the Home Tab in Microsoft PowerPoint, as explained in Part 2 of the series.\n\n1. Opening PowerPoint\n\nShortcut: Press Windows + R, type powerpnt, and press Enter. [00:00:55]\n\n2. Clipboard Group\n\nThis group handles basic text and object manipulation. [00:01:59]\n\nCut/Copy/Paste: standard tools to move or duplicate text, images, and shapes.\n\nFormat Painter: Copies the formatting (font, color, size, etc.) of a selected text or object and applies it to another.\n\nUsage: Select formatted text -> Click Format Painter -> Select target text. [00:03:31]\n\n3. Slides Group\n\nManage the structure of your presentation here. [00:04:37]\n\nNew Slide: Inserts a new slide. You can choose different layouts by clicking the arrow below the button.\n\nLayout: Changes the structure of the current slide (e.g., Title Only, Two Content). [00:05:17]\n\nReset: Restores the positions and formatting of the slide placeholders to their default settings. [00:05:32]\n\nDelete: Removes the selected slide from the presentation. [00:05:53]\n\n4. Font Group\n\nUsed for detailed text styling. [00:06:21]\n\nFont Style & Size: Change the appearance and size of the text.\n\nBold (B), Italic (I), Underline (U): Standard emphasis tools.\n\nText Shadow (S): Adds a subtle shadow behind text for a professional look. [00:10:23]\n\nCharacter Spacing (AV): Adjusts the space between letters (Tighter, Normal, Loose). [00:10:50]\n\nChange Case (Aa): Quickly switch between Uppercase, Lowercase, Sentence Case, etc. [00:11:37]\n\nClear All Formatting: Removes all styles and returns text to default. [00:08:14]\n\nFont Color: Changes the color of the selected text. [00:12:30]\n\n5. Paragraph Group\n\nControls the alignment and organization of text. [00:13:07]\n\nBullets & Numbering: Create organized lists. [00:13:25]\n\nIndents: Increase or decrease the space between the text and the border of the text box.\n\nLine Spacing: Adjust the vertical space between lines of text. [00:14:28]\n\nAlignment: Left, Center, Right: Standard horizontal positioning.\n\nJustify: Aligns text to both left and right margins. [00:16:35]\n\nColumns: Splits text within a text box into two or more columns. [00:17:21]\n\nText Direction: Rotates text (Horizontal, 90°, 270°, Stacked). [00:18:14]\n\nAlign Text: Vertically aligns text within a text box (Top, Middle, Bottom). [00:19:33]\n\nConvert to SmartArt: Turns a plain list into a professional graphic/diagram. [00:20:13]\n\n6. Drawing Group\n\nTools for creating and styling visual elements. [00:22:53]\n\nShapes: Insert various shapes like rectangles, arrows, and circles.\n\nArrange: Order: Bring Forward/Send Backward to layer objects.\n\nGroup: Combine multiple objects into one. [00:24:35]\n\nRotate: Rotate or flip shapes and images. [00:25:51]\n\nQuick Styles: Apply pre-designed color and border combinations to shapes. [00:26:19]\n\nShape Fill: Change the internal color of a shape (can include Pictures or Textures). [00:26:34]\n\nShape Outline: Change the color and thickness of a shape's border. [00:27:00]\n\nShape Effects: Add 3D rotation, Glow, Reflection, or Bevel effects. [00:27:14]\n\n7. Editing Group\n\nFind: Search for specific words within the slides. [00:28:10]\n\nReplace: Find a specific word and swap it with another throughout the document. [00:28:52]\n\nSelect: Select All: Selects every object on the slide.\n\nSelection Pane: Shows a list of all objects on the current slide, allowing you to hide or reorder them easily. [00:30:05]";
    const day30Section2ContentMr =
      "Computer Class Day 30: MS PowerPoint Home Tab Guide\n\nHome Tab वर संपूर्ण ट्यूटोरियल – Part 2.\n\n१. PowerPoint उघडणे: Windows + R, powerpnt, Enter [00:00:55].\n\n२. Clipboard Group [00:01:59]\n\nCut/Copy/Paste, Format Painter – निवडलेल्या मजकुराचे फॉर्मॅटिंग दुसऱ्या मजकुरावर लावणे. निवड -> Format Painter -> लक्ष्य मजकूर निवडा [00:03:31].\n\n३. Slides Group [00:04:37]\n\nNew Slide, Layout (Title Only, Two Content) [00:05:17], Reset [00:05:32], Delete [00:05:53].\n\n४. Font Group [00:06:21]\n\nFont Style & Size, Bold/Italic/Underline, Text Shadow (S) [00:10:23], Character Spacing (AV) [00:10:50], Change Case (Aa) [00:11:37], Clear All Formatting [00:08:14], Font Color [00:12:30].\n\n५. Paragraph Group [00:13:07]\n\nBullets & Numbering [00:13:25], Indents, Line Spacing [00:14:28], Alignment (Left/Center/Right/Justify) [00:16:35], Columns [00:17:21], Text Direction [00:18:14], Align Text (Top/Middle/Bottom) [00:19:33], Convert to SmartArt [00:20:13].\n\n६. Drawing Group [00:22:53]\n\nShapes, Arrange (Order, Group [00:24:35]), Rotate [00:25:51], Quick Styles [00:26:19], Shape Fill [00:26:34], Shape Outline [00:27:00], Shape Effects [00:27:14].\n\n७. Editing Group\n\nFind [00:28:10], Replace [00:28:52], Select All, Selection Pane [00:30:05].";
    await CourseDay.updateOne(
      { dayNumber: 30 },
      {
        $set: {
          contentEn: "",
          contentMr: "",
          subsections: [
            {
              titleEn: "Section 1",
              titleMr: "भाग १",
              contentEn: "",
              contentMr: "",
              videoUrl: "https://youtu.be/5FHGhJnZxXw?si=u0DXnXYrX6i365IE"
            },
            {
              titleEn: "Section 2",
              titleMr: "भाग २",
              contentEn: day30Section2ContentEn,
              contentMr: day30Section2ContentMr,
              videoUrl: ""
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 30 },
      {
        $set: {
          "exam.durationMinutes": 30,
          "exam.questions": [
            {
              questionEn: "You have customized the font, color, and size of a title and want to apply the exact same styling to a subtitle on another slide. Which tool is most efficient for this?",
              questionMr: "तुम्ही एका शीर्षकाचे फॉंट, रंग आणि साइझ कस्टमायझ केले आणि दुसऱ्या स्लाइडवरील उपशीर्षकावर तेच स्टाइलिंग लावायचे आहे. यासाठी सर्वात कार्यक्षम साधन कोणते?",
              options: [
                { textEn: "Duplicate Slide", textMr: "Duplicate Slide" },
                { textEn: "Styles Pane", textMr: "Styles Pane" },
                { textEn: "Format Painter", textMr: "Format Painter" },
                { textEn: "Copy and Paste", textMr: "Copy and Paste" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "If you have manually moved and resized the text placeholders on a slide and want to return them to their original default positions defined by the template, which button should you click?",
              questionMr: "स्लाइडवरील टेक्स्ट प्लेसहोल्डर्स हाताने हलवले आणि साइझ बदलले असल्यास, टेम्पलेटनुसार मूळ डीफॉल्ट स्थानावर आणण्यासाठी कोणते बटण क्लिक करावे?",
              options: [
                { textEn: "Clear All Formatting", textMr: "Clear All Formatting" },
                { textEn: "Reset", textMr: "Reset" },
                { textEn: "Layout", textMr: "Layout" },
                { textEn: "New Slide", textMr: "New Slide" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which feature in the Paragraph group allows you to distribute text evenly between the left and right margins, giving the text block clean edges on both sides?",
              questionMr: "Paragraph गटातील कोणती सुविधा मजकूर डाव्या आणि उजव्या मार्जिन दरम्यान समान रीतीने वितरित करते?",
              options: [
                { textEn: "Justify", textMr: "Justify" },
                { textEn: "Center Align", textMr: "Center Align" },
                { textEn: "Distributed", textMr: "Distributed" },
                { textEn: "Left Align", textMr: "Left Align" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "You have a plain bulleted list of process steps. What is the quickest way to transform this text into a professional graphic diagram?",
              questionMr: "प्रक्रिया चरणांची साधी बुलेटेड यादी आहे. या मजकुराचे व्यावसायिक ग्राफिक डायग्राममध्ये रूपांतर करण्याचा सर्वात जलद मार्ग कोणता?",
              options: [
                { textEn: "Insert Shapes", textMr: "Insert Shapes" },
                { textEn: "Group", textMr: "Group" },
                { textEn: "Convert to SmartArt", textMr: "Convert to SmartArt" },
                { textEn: "Text Direction", textMr: "Text Direction" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Which tool in the Font group would you use to change 'powerpoint presentation' to 'POWERPOINT PRESENTATION' without retyping the text?",
              questionMr: "मजकूर पुन्हा टाइप न करता 'powerpoint presentation' ला 'POWERPOINT PRESENTATION' करण्यासाठी Font गटातील कोणते साधन वापरावे?",
              options: [
                { textEn: "Font Size", textMr: "Font Size" },
                { textEn: "Change Case", textMr: "Change Case" },
                { textEn: "Character Spacing", textMr: "Character Spacing" },
                { textEn: "Bold", textMr: "Bold" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "You want to hide a specific shape on your slide temporarily to edit what is behind it, without deleting it. Which pane allows you to do this?",
              questionMr: "स्लाइडवरील एक आकार हटवून त्यामागील गोष्टी संपादित करायच्या आहेत; आकार हटवू नये. कोणता पेन यासाठी वापरावा?",
              options: [
                { textEn: "Animation Pane", textMr: "Animation Pane" },
                { textEn: "Selection Pane", textMr: "Selection Pane" },
                { textEn: "Format Pane", textMr: "Format Pane" },
                { textEn: "Notes Pane", textMr: "Notes Pane" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "In the Drawing group, which option would you use to combine multiple separate shapes so they can be moved or resized as a single unit?",
              questionMr: "Drawing गटात अनेक वेगवेगळे आकार एकत्र करून एकाच युनिटप्रमाणे हलवणे किंवा साइझ बदलणे कोणत्या पर्यायाने करता येते?",
              options: [
                { textEn: "Align", textMr: "Align" },
                { textEn: "Rotate", textMr: "Rotate" },
                { textEn: "Order", textMr: "Order" },
                { textEn: "Group", textMr: "Group" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "What is the function of the 'Character Spacing' tool (AV icon) in the Font group?",
              questionMr: "Font गटातील 'Character Spacing' (AV आयकॉन) साधनाचे कार्य काय आहे?",
              options: [
                { textEn: "It changes the vertical space between lines of text.", textMr: "मजकुराच्या ओळींमधील उभी जागा बदलते." },
                { textEn: "It adds a shadow behind the text.", textMr: "मजकुरामागे सावली जोडते." },
                { textEn: "It highlights the text with a background color.", textMr: "मजकुराला बॅकग्राउंड रंगाने हायलाइट करते." },
                { textEn: "It adjusts the horizontal space between individual letters.", textMr: "वैयक्तिक अक्षरांमधील आडवी जागा समायोजित करते." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "If you need to change every occurrence of the word 'Client' to 'Customer' throughout your entire presentation, which tool is most effective?",
              questionMr: "संपूर्ण प्रेझेंटेशनमध्ये 'Client' शब्दाची प्रत्येक वेळ 'Customer' ने बदलायची असेल तर कोणते साधन सर्वात प्रभावी आहे?",
              options: [
                { textEn: "Find", textMr: "Find" },
                { textEn: "Rename", textMr: "Rename" },
                { textEn: "Select All", textMr: "Select All" },
                { textEn: "Replace", textMr: "Replace" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "The 'Text Direction' tool in the Paragraph group allows you to do which of the following?",
              questionMr: "Paragraph गटातील 'Text Direction' साधनाने खालीलपैकी काय करता येते?",
              options: [
                { textEn: "Rotate text to vertical (90 degrees) or stacked orientations.", textMr: "मजकूर उभा (90 अंश) किंवा स्टॅक्ड ओरिएंटेशनमध्ये फिरवणे." },
                { textEn: "Move text from the left margin to the right margin.", textMr: "मजकूर डाव्या मार्जिनवरून उजव्या मार्जिनवर नेणे." },
                { textEn: "Change the language of the text.", textMr: "मजकुराची भाषा बदलणे." },
                { textEn: "Convert text into a 3D shape.", textMr: "मजकुराचे 3D आकारात रूपांतर करणे." }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    // Day 31: MS PowerPoint Insert Tab – Section 1 (video), Section 2 (notes)
    const day31Section2ContentEn =
      "Computer Class Day 31: MS PowerPoint Insert Tab\n\nThis document provides detailed notes on the features and functions of the Insert Tab in MS PowerPoint as presented in the 'Power Point Part-3' tutorial by GULAB GURU.\n\n1. Introduction & Opening PowerPoint\n\nKeyboard Shortcut: Press Windows + R, type powerpnt, and press Enter to open MS PowerPoint. [00:00:41]\n\n2. Table Menu\n\nGrid Selection: Quickly select the number of columns and rows from the grid. [00:01:01]\n\nInsert Table: Manually enter the specific number of columns and rows. [00:01:48]\n\nDraw Table: Use a pencil tool to manually draw a custom table. [00:02:24]\n\nExcel Spreadsheet: Embed a functional Excel sheet directly into your PowerPoint slide. [00:02:45]\n\nPro Tip: To delete a table, select it and press Shift + Delete. [00:01:38]\n\n3. Images & Illustrations\n\nPictures: Insert images from your local computer. [00:04:01]\n\nFormat Tab (for pictures): Adjust brightness and contrast [00:05:14], recolor images or apply picture styles [00:05:29], crop and resize images [00:14:23].\n\nClip Art: Search and insert pre-made graphics from the built-in library. [00:15:18]\n\nPhoto Album: Insert multiple photos at once; each photo can automatically occupy a new slide. [00:16:41]\n\nShapes: Insert circles, squares, arrows, and other geometric forms. [00:19:00]\n\nSmartArt: Create visual representations of information such as lists, processes, and cycles. [00:20:06]\n\nYou can add text, change colors, and add bullets within SmartArt. [00:21:50]\n\nCharts: Insert data-driven charts (Column, Pie, Line, etc.) linked to an Excel data window. [00:23:05]\n\n4. Links & Text Features\n\nHyperlink: Link text or objects to other files, folders, or websites. [00:26:07]\n\nText Box: Draw areas to type text anywhere on the slide. [00:27:08]\n\nHeader & Footer: Add slide numbers, dates, or custom text to the top or bottom of slides. [00:27:40]\n\nWordArt: Insert stylized and decorative text with various effects. [00:28:35]\n\nSymbols: Insert special characters not found on the keyboard. [00:31:43]\n\nObject: Work with content from another application (like MS Word) while staying inside PowerPoint. [00:32:06]\n\n5. Media Clips\n\nMovie (Video): Insert video files into your presentation and set them to play automatically or on click. [00:33:01]\n\nSound (Audio): Add background music or voiceovers to your slides. [00:34:01]\n\nKey Shortcuts Mentioned\n\nRun Command: Win + R\n\nStart Slideshow: F5 [00:17:48]\n\nExit Slideshow: Esc [00:18:11]\n\nDelete Object: Shift + Delete.";
    const day31Section2ContentMr =
      "Computer Class Day 31: MS PowerPoint Insert Tab\n\nInsert Tab चे सविस्तर मार्गदर्शन (Power Point Part-3 – GULAB GURU).\n\n१. PowerPoint उघडणे: Windows + R -> powerpnt -> Enter [00:00:41].\n\n२. Table मेनू [00:01:01–00:02:45]\n\nGrid Selection – पटकन स्तंभ/ओळी निवडणे; Insert Table – कॉलम/रो संख्या हाताने देणे; Draw Table – पेन्सिलने कस्टम टेबल काढणे; Excel Spreadsheet – थेट Excel शीट एम्बेड करणे; Pro Tip: टेबल काढण्यासाठी Shift + Delete [00:01:38].\n\n३. Images & Illustrations [00:04:01–00:23:05]\n\nPictures – संगणकातून इमेज; Format Tab – Brightness/Contrast [00:05:14], Recolor/Styles [00:05:29], Crop/Resize [00:14:23]; Clip Art [00:15:18]; Photo Album – अनेक फोटो एकाच वेळी, प्रत्येक वेगळ्या स्लाइडवर [00:16:41]; Shapes [00:19:00]; SmartArt – लिस्ट/प्रोसेस/सायकलचे ग्राफिक्स, टेक्स्ट/कलर/बुलेट्स बदल [00:20:06–00:21:50]; Charts – Excel डेटा विंडोसह Column/Pie/Line चार्ट [00:23:05].\n\n४. Links आणि Text [00:26:07–00:32:06]\n\nHyperlink – फाइल/फोल्डर/वेबसाइट लिंक; Text Box [00:27:08]; Header & Footer – स्लाइड नंबर, तारीख, कस्टम मजकूर [00:27:40]; WordArt – स्टाईलाइज्ड टेक्स्ट [00:28:35]; Symbols – विशेष अक्षरे [00:31:43]; Object – दुसऱ्या प्रोग्रामचे कंटेंट (जसे Word) PowerPoint मध्येच वापरणे [00:32:06].\n\n५. Media Clips [00:33:01–00:34:01]\n\nMovie (Video) – व्हिडिओ इन्सर्ट करून Auto किंवा On Click प्ले; Sound (Audio) – बॅकग्राउंड म्युझिक किंवा व्हॉइसओव्हर.\n\nकीबोर्ड शॉर्टकट: Run – Win + R; Start Slideshow – F5 [00:17:48]; Exit – Esc [00:18:11]; Delete Object – Shift + Delete.";
    await CourseDay.updateOne(
      { dayNumber: 31 },
      {
        $set: {
          contentEn: "",
          contentMr: "",
          subsections: [
            {
              titleEn: "Section 1",
              titleMr: "भाग १",
              contentEn: "",
              contentMr: "",
              videoUrl: "https://youtu.be/SBjz_M3DM_4?si=cHSM7H2a5way6V0E"
            },
            {
              titleEn: "Section 2",
              titleMr: "भाग २",
              contentEn: day31Section2ContentEn,
              contentMr: day31Section2ContentMr,
              videoUrl: ""
            }
          ]
        }
      }
    );
    // Day 32: MS PowerPoint Design Tab – Section 1 (video), Section 2 (notes)
    const day32Section2ContentEn =
      "Computer Class Day 32: MS PowerPoint Design Tab\n\nThis document summarizes the features of the Design Tab in MS PowerPoint based on the Part-4 tutorial by GULAB GURU.\n\n1. Page Setup Group\n\nThis group allows you to manage the physical dimensions and orientation of your slides.\n\nPage Setup: Adjust overall slide settings. [00:01:40]\n\nSlide Size: By default, slides are often 4:3. For high-definition or YouTube videos, use 16:9.\n\nCustom Dimensions: You can manually set the width and height of slides.\n\nNumber Slides From: Change the starting slide number (for example, begin at 5 instead of 1). [00:03:03]\n\nSlide Orientation: Choose Portrait (vertical) or Landscape (horizontal – standard for most presentations). [00:03:43]\n\n2. Themes Group\n\nThemes provide a complete look for your presentation, including coordinated colors, fonts, and effects.\n\nApplying Themes: Hover over a theme to preview and click to apply it to all slides. [00:04:38]\n\nCustomizing Themes: [00:05:33]\n\n- Colors: Change the color palette of the current theme without changing its layout.\n- Fonts: Swap the font style across the entire presentation.\n- Effects: Adjust subtle visual styles (especially visible on 3D shapes/objects).\n\nManaging Themes: [00:06:50]\n\n- Browse for Themes: Open a theme file saved on your computer.\n- Save Current Theme: Export your customized design for reuse. [00:07:27]\n\nPro Tip – Different Themes for Different Slides: [00:11:23]\n\nBy default, a theme applies to all slides. To apply a theme only to one slide, right-click the theme thumbnail and choose \"Apply to Selected Slides.\"\n\n3. Background Group\n\nThis group controls the background of slides independently of the theme.\n\nBackground Styles: Choose from preset gradient or solid color backgrounds. [00:08:55]\n\nFormat Background: [00:09:43]\n\n- Solid Fill: Use a single color.\n- Gradient Fill: Blend multiple colors.\n- Picture or Texture Fill: Use an image from your computer or a built-in texture as the slide background.\n\nHide Background Graphics: If a theme includes decorative graphics (lines, patterns, logos) that you do not want, enable this option to hide them. [00:10:57]\n\nQuick Shortcuts\n\nOpen PowerPoint: Win + R -> type powerpnt. [00:00:34]\n\nQuick Access: Right-click the Theme gallery and select \"Add Gallery to Quick Access Toolbar\" for faster access. [00:13:01]";
    const day32Section2ContentMr =
      "Computer Class Day 32: MS PowerPoint Design Tab\n\nDesign Tab – Part 4 (GULAB GURU) सारांश.\n\n१. Page Setup Group [00:01:40–00:03:43]\n\nSlide Size (4:3, HD/YouTube साठी 16:9), कस्टम रुंदी/उंची, Number Slides From – स्लाइड नंबर कुठून सुरू होईल ते बदलणे [00:03:03]; Slide Orientation – Portrait (उभा) किंवा Landscape (आडवा, डीफॉल्ट) [00:03:43].\n\n२. Themes Group [00:04:38–00:07:27]\n\nप्रेझेंटेशनसाठी Colors, Fonts, Effects चे पूर्ण सेट.\n\nथीम लावणे – Hover करून प्रिव्ह्यू, क्लिक केल्यावर सर्व स्लाइडला लागू [00:04:38]. Colors/Fonts/Effects बदलून थीम कस्टमायझ [00:05:33]. Browse for Themes आणि Save Current Theme – स्वतःचा थीम सेव्ह/पुन्हा वापर [00:06:50–00:07:27].\n\nPro Tip: वेगवेगळ्या स्लाइडसाठी वेगवेगळे Themes – थीमवर Right-click करून \"Apply to Selected Slides\" [00:11:23].\n\n३. Background Group [00:08:55–00:10:57]\n\nBackground Styles – तयार ग्रेडियंट/सॉलिड शैली [00:08:55]. Format Background – Solid, Gradient, Picture/Texture Fill [00:09:43]. Hide Background Graphics – थीममधील सजावटी ग्राफिक्स (रेषा, पॅटर्न) लपवणे [00:10:57].\n\nशॉर्टकट्स: PowerPoint उघडणे – Win + R -> powerpnt [00:00:34]; Theme Gallery ला Quick Access Toolbar मध्ये Add करणे – Right-click -> Add Gallery to Quick Access Toolbar [00:13:01].";
    await CourseDay.updateOne(
      { dayNumber: 32 },
      {
        $set: {
          contentEn: "",
          contentMr: "",
          subsections: [
            {
              titleEn: "Section 1",
              titleMr: "भाग १",
              contentEn: "",
              contentMr: "",
              videoUrl: "https://youtu.be/yXiXr6AsHf4?si=RFjk2TrROwu26w8n"
            },
            {
              titleEn: "Section 2",
              titleMr: "भाग २",
              contentEn: day32Section2ContentEn,
              contentMr: day32Section2ContentMr,
              videoUrl: ""
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 31 },
      {
        $set: {
          "exam.durationMinutes": 30,
          "exam.questions": [
            {
              questionEn: "Which command should you type in the Run dialog box (Windows + R) to open MS PowerPoint?",
              questionMr: "Windows + R Run डायलॉगमध्ये MS PowerPoint उघडण्यासाठी कोणती कमांड टाइप करावी?",
              options: [
                { textEn: "powerpoint", textMr: "powerpoint" },
                { textEn: "openpowerpoint", textMr: "openpowerpoint" },
                { textEn: "ppt", textMr: "ppt" },
                { textEn: "powerpnt", textMr: "powerpnt" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You have selected a table in your slide and want to delete it completely. Which shortcut key combination should you use?",
              questionMr: "स्लाइडमधील टेबल पूर्णपणे काढून टाकण्यासाठी कोणता शॉर्टकट वापरावा?",
              options: [
                { textEn: "Ctrl + Delete", textMr: "Ctrl + Delete" },
                { textEn: "Shift + Delete", textMr: "Shift + Delete" },
                { textEn: "Delete", textMr: "Delete" },
                { textEn: "Alt + Backspace", textMr: "Alt + Backspace" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "Which feature would you use to import 50 holiday photos at once, creating a new slide for each photo automatically?",
              questionMr: "५० सुट्टीतील फोटो एकाच वेळी इम्पोर्ट करून प्रत्येक फोटोसाठी स्वतंत्र स्लाइड तयार करण्यासाठी कोणते फीचर वापराल?",
              options: [
                { textEn: "Clip Art", textMr: "Clip Art" },
                { textEn: "Insert Picture", textMr: "Insert Picture" },
                { textEn: "SmartArt", textMr: "SmartArt" },
                { textEn: "Photo Album", textMr: "Photo Album" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "If you want to create a visual representation of a process cycle or a hierarchy list, which tool is best suited for this?",
              questionMr: "प्रोसेस सायकल किंवा हायरार्की लिस्टचे दृश्य रूप तयार करण्यासाठी कोणते साधन सर्वात योग्य आहे?",
              options: [
                { textEn: "Chart", textMr: "Chart" },
                { textEn: "Shapes", textMr: "Shapes" },
                { textEn: "WordArt", textMr: "WordArt" },
                { textEn: "SmartArt", textMr: "SmartArt" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which feature allows you to embed a fully functional spreadsheet into your slide where you can use Excel formulas?",
              questionMr: "कोणते फीचर स्लाइडमध्ये पूर्ण कार्यक्षम स्प्रेडशीट एम्बेड करण्यास परवानगी देते जिथे तुम्ही Excel सूत्रे वापरू शकता?",
              options: [
                { textEn: "Object -> Word Document", textMr: "Object -> Word Document" },
                { textEn: "Draw Table", textMr: "Draw Table" },
                { textEn: "Excel Spreadsheet", textMr: "Excel Spreadsheet" },
                { textEn: "Insert Table", textMr: "Insert Table" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You want to make a piece of text clickable so that it opens a specific website when clicked during the presentation. What should you use?",
              questionMr: "प्रेझेंटेशनदरम्यान क्लिक केल्यावर विशिष्ट वेबसाइट उघडण्यासाठी मजकूर क्लिकेबल करायचा आहे. काय वापराल?",
              options: [
                { textEn: "Hyperlink", textMr: "Hyperlink" },
                { textEn: "Header & Footer", textMr: "Header & Footer" },
                { textEn: "Object", textMr: "Object" },
                { textEn: "Action Button", textMr: "Action Button" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which keyboard shortcut allows you to start the slideshow from the beginning?",
              questionMr: "स्लाइडशो सुरुवातीपासून सुरू करण्यासाठी कोणता कीबोर्ड शॉर्टकट वापराल?",
              options: [
                { textEn: "F5", textMr: "F5" },
                { textEn: "Esc", textMr: "Esc" },
                { textEn: "Ctrl + S", textMr: "Ctrl + S" },
                { textEn: "Shift + F5", textMr: "Shift + F5" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "If you want to add background music that plays during your presentation, which option in the Media Clips group should you select?",
              questionMr: "प्रेझेंटेशनदरम्यान वाजणारे बॅकग्राउंड म्युझिक जोडण्यासाठी Media Clips गटातील कोणता पर्याय निवडावा?",
              options: [
                { textEn: "Sound", textMr: "Sound" },
                { textEn: "Clip Art", textMr: "Clip Art" },
                { textEn: "Movie", textMr: "Movie" },
                { textEn: "Symbol", textMr: "Symbol" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which 'Insert' tab feature would you use to place special characters like ©, ™, or mathematical operators that are not on your keyboard?",
              questionMr: "'Insert' टॅबमधील कोणते फीचर ©, ™ किंवा कीबोर्डवर नसलेले गणितीय ऑपरेटर्ससारखी विशेष अक्षरे घालण्यासाठी वापराल?",
              options: [
                { textEn: "Symbol", textMr: "Symbol" },
                { textEn: "Text Box", textMr: "Text Box" },
                { textEn: "WordArt", textMr: "WordArt" },
                { textEn: "SmartArt", textMr: "SmartArt" }
              ],
              correctIndex: 0
            },
            {
              questionEn: "What happens when you select a picture and click on the 'Format' tab that appears?",
              questionMr: "चित्र निवडून दिसणाऱ्या 'Format' टॅबवर क्लिक केल्यावर काय करता येते?",
              options: [
                { textEn: "You can adjust brightness, contrast, and apply borders to the picture.", textMr: "तुम्ही चित्राचा ब्राइटनेस, कॉन्ट्रास्ट बदलू शकता आणि बॉर्डर लावू शकता." },
                { textEn: "You can change the slide background.", textMr: "तुम्ही स्लाइडचा बॅकग्राउंड बदलू शकता." },
                { textEn: "You can insert a new table.", textMr: "तुम्ही नवीन टेबल इन्सर्ट करू शकता." },
                { textEn: "You can start the slideshow.", textMr: "तुम्ही स्लाइडशो सुरू करू शकता." }
              ],
              correctIndex: 0
            }
          ]
        }
      }
    );
    await CourseDay.updateOne(
      { dayNumber: 32 },
      {
        $set: {
          "exam.durationMinutes": 30,
          "exam.questions": [
            {
              questionEn: "If you are creating a presentation specifically for a YouTube video or a modern wide-screen display, which slide size ratio should you select in Page Setup?",
              questionMr: "जर तुम्ही YouTube व्हिडिओ किंवा आधुनिक वाइड-स्क्रीन डिस्प्ले साठी प्रेझेंटेशन तयार करत असाल, तर Page Setup मध्ये कोणते स्लाइड साईज रेशो निवडावे?",
              options: [
                { textEn: "1:1", textMr: "1:1" },
                { textEn: "4:3", textMr: "4:3" },
                { textEn: "16:9", textMr: "16:9" },
                { textEn: "A4", textMr: "A4" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You want your slides to appear vertically, like a sheet of paper, rather than the standard horizontal layout. Which option should you change?",
              questionMr: "तुम्हाला स्लाइड्स कागदाच्या पानासारख्या उभ्या दिसाव्यात, नेहमीच्या आडव्या लेआउटऐवजी. कोणता पर्याय बदलाल?",
              options: [
                { textEn: "Slide Orientation -> Landscape", textMr: "Slide Orientation -> Landscape" },
                { textEn: "Slide Orientation -> Portrait", textMr: "Slide Orientation -> Portrait" },
                { textEn: "Slide Layout", textMr: "Slide Layout" },
                { textEn: "Page Setup -> 16:9", textMr: "Page Setup -> 16:9" }
              ],
              correctIndex: 1
            },
            {
              questionEn: "By default, clicking a Theme applies it to all slides. How do you apply a specific Theme to ONLY the currently selected slide?",
              questionMr: "डीफॉल्टनुसार, थीमवर क्लिक केल्यावर ती सर्व स्लाइड्सला लागू होते. फक्त वर्तमान निवडलेल्या स्लाइडला थीम लावण्यासाठी काय कराल?",
              options: [
                { textEn: "Hold Ctrl and click the Theme", textMr: "Ctrl दाबून थीमवर क्लिक करा" },
                { textEn: "Double-click the Theme", textMr: "थीमवर डबल-क्लिक करा" },
                { textEn: "Go to Page Setup and select 'Current Slide'", textMr: "Page Setup मध्ये जाऊन 'Current Slide' निवडा" },
                { textEn: "Right-click the Theme and select 'Apply to Selected Slides'", textMr: "थीमवर Right-click करून 'Apply to Selected Slides' निवडा" }
              ],
              correctIndex: 3
            },
            {
              questionEn: "You like the current Theme's layout but want to use your company's specific blue and grey colors instead of the default orange. What is the best way to do this without changing the whole theme?",
              questionMr: "तुम्हाला सध्याच्या थीमचा लेआउट आवडतो पण डीफॉल्ट केशरी रंगाऐवजी कंपनीचे निळे आणि करडे रंग वापरायचे आहेत. संपूर्ण थीम न बदलता हे करण्याचा सर्वोत्तम मार्ग कोणता?",
              options: [
                { textEn: "Use the 'Colors' dropdown in the Themes group.", textMr: "Themes गटातील 'Colors' ड्रॉपडाऊन वापरा." },
                { textEn: "Select a completely new Theme.", textMr: "पूर्णपणे नवीन थीम निवडा." },
                { textEn: "Change the Background Style.", textMr: "Background Style बदला." },
                { textEn: "Manually change the color of every text box and shape.", textMr: "प्रत्येक टेक्स्ट बॉक्स आणि शेपचा रंग हाताने बदला." }
              ],
              correctIndex: 0
            },
            {
              questionEn: "Which feature allows you to use a personal photograph stored on your computer as the permanent background for your slides?",
              questionMr: "तुमच्या संगणकावर साठवलेला वैयक्तिक फोटो स्लाइड्ससाठी कायमस्वरूपी बॅकग्राउंड म्हणून वापरण्यासाठी कोणते फीचर उपयोगी आहे?",
              options: [
                { textEn: "Page Setup -> Header/Footer", textMr: "Page Setup -> Header/Footer" },
                { textEn: "Design -> Effects", textMr: "Design -> Effects" },
                { textEn: "Format Background -> Picture or texture fill", textMr: "Format Background -> Picture or texture fill" },
                { textEn: "Insert -> Picture", textMr: "Insert -> Picture" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "Your chosen Theme has decorative graphic lines in the background that interfere with your text. How can you remove them without changing the Theme?",
              questionMr: "निवडलेल्या थीममध्ये मजकुरामागे त्रासदायक सजावटी रेषा आहेत. थीम न बदलता त्या कशा काढाल?",
              options: [
                { textEn: "Use the Eraser tool.", textMr: "Eraser साधन वापरा." },
                { textEn: "Delete the slide and create a new one.", textMr: "स्लाइड डिलीट करून नवी तयार करा." },
                { textEn: "Change the Background Style to white.", textMr: "Background Style पांढरा करा." },
                { textEn: "Check the 'Hide Background Graphics' box.", textMr: "'Hide Background Graphics' बॉक्स चेक करा." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "If you want your slide numbering to start at '5' instead of '1', where would you go to change this setting?",
              questionMr: "स्लाइड नंबरिंग '1' ऐवजी '5' पासून सुरू करायची असल्यास, कोणत्या सेटिंगमध्ये जाल?",
              options: [
                { textEn: "Insert -> Slide Number", textMr: "Insert -> Slide Number" },
                { textEn: "Home -> Numbering", textMr: "Home -> Numbering" },
                { textEn: "Page Setup -> Number slides from", textMr: "Page Setup -> Number slides from" },
                { textEn: "Design -> Slide Orientation", textMr: "Design -> Slide Orientation" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "You have customized a Theme with your favorite colors and fonts. How can you save it to reuse in future presentations?",
              questionMr: "तुम्ही आवडते रंग आणि फॉंट वापरून थीम कस्टमायझ केली आहे. भविष्यात पुन्हा वापरण्यासाठी ती कशी सेव्ह कराल?",
              options: [
                { textEn: "Add to Quick Access Toolbar.", textMr: "Quick Access Toolbar मध्ये Add करा." },
                { textEn: "Copy and Paste the slide into a new file.", textMr: "स्लाइड नवीन फाइलमध्ये Copy-Paste करा." },
                { textEn: "Open the Themes dropdown and select 'Save Current Theme'.", textMr: "Themes ड्रॉपडाऊन उघडून 'Save Current Theme' निवडा." },
                { textEn: "File -> Save As -> JPEG", textMr: "File -> Save As -> JPEG" }
              ],
              correctIndex: 2
            },
            {
              questionEn: "What is the primary function of the 'Fonts' dropdown in the Themes group?",
              questionMr: "Themes गटातील 'Fonts' ड्रॉपडाऊनचे मुख्य कार्य काय आहे?",
              options: [
                { textEn: "To change the font size of a single selected word.", textMr: "एखाद्या निवडलेल्या शब्दाचा फॉन्ट साईज बदलणे." },
                { textEn: "To add a shadow effect to text.", textMr: "मजकुरावर सावली इफेक्ट लावणे." },
                { textEn: "To highlight text in yellow.", textMr: "मजकूर पिवळ्या रंगात हायलाइट करणे." },
                { textEn: "To change the heading and body fonts for the entire presentation at once.", textMr: "संपूर्ण प्रेझेंटेशनसाठी हेडिंग आणि बॉडी फॉन्ट एकाच वेळी बदलणे." }
              ],
              correctIndex: 3
            },
            {
              questionEn: "Which of the following best describes the 'Background Styles' option?",
              questionMr: "'Background Styles' पर्यायाचे सर्वोत्तम वर्णन खालीलपैकी कोणते?",
              options: [
                { textEn: "It changes the layout of text boxes.", textMr: "तो टेक्स्ट बॉक्सचे लेआउट बदलतो." },
                { textEn: "It changes the orientation of the slide.", textMr: "तो स्लाइडची ओरिएंटेशन बदलतो." },
                { textEn: "It adds clip art to the background.", textMr: "तो बॅकग्राउंडमध्ये क्लिप आर्ट घालतो." },
                { textEn: "It provides pre-set variations of solid and gradient fills based on your theme colors.", textMr: "तो थीम रंगांवर आधारित सॉलिड आणि ग्रेडियंट फिल्सचे पूर्वनिर्धारित प्रकार देतो." }
              ],
              correctIndex: 3
            }
          ]
        }
      }
    );
    await CourseDay.updateMany(
      { dayNumber: { $ne: 21 } },
      { $set: { "subsections.0.contentEn": "", "subsections.0.contentMr": "" } }
    );
    return;
  }
  const days = [];
  for (let i = 1; i <= 50; i += 1) {
    const sectionOneVideo =
      i === 1
        ? "https://youtu.be/m2rTyhaFIOY?si=KWJK15WK0jHDsYcC"
        : i === 2
          ? "https://youtu.be/rWMcD2QAk4Q?si=rd7DFr9g3BXZNXUg"
          : i === 3
            ? "https://youtu.be/UUuRuWc-Tw4?si=eyY9WnhQA8jOxysd"
            : i === 4
              ? "https://youtu.be/FtFAAGkMLsY?si=p9iglMg5IcWFO8GW"
              : i === 5
                ? "https://youtu.be/CI9OySCfKBk?si=56wMxVMH4KREVM8v"
                : i === 6
                  ? "https://youtu.be/YH5vJ8J7ADc?si=UTHvKtx4UXsZj8Gk"
                  : i === 7
                    ? "https://youtu.be/LWt0PYilMm0?si=4Rm0kXSbUgjFKkbM"
                    : i === 8
                      ? "https://youtu.be/3xyGUrfAIHU?si=_rVs_NBj1EgPSodS"
                      : i === 9
                        ? "https://youtu.be/dpgNDXF3jmw?si=N4-CClA6opROtXQB"
                        : i === 10
                          ? "https://youtu.be/LlULwNT_Frg?si=9xH1_qAVH6N-xHi-"
                          : i === 11
                            ? "https://youtu.be/Aq2zEvTJhR4?si=DrSxWZir-f3N4pg_"
                            : i === 12
                              ? "https://youtu.be/G94zWtAr9Gc?si=qY75EkhzDuOMIomS"
                              : i === 13
                                ? "https://youtu.be/pqP_RUBf-So?si=bfw9hoOoA9Z8D1y5"
                                : i === 14
                                  ? "https://youtu.be/mWLxz8q7ztE?si=mMnY-YX7Ph-RR0U3"
                                  : i === 15
                                    ? "https://youtu.be/EFw00omO54A?si=gy3wAq41HJvJWRBJ"
                                    : i === 16
                                      ? "https://youtu.be/uOCyvUoUA0c?si=sx_Dkj-SJrMnUlkJ"
                                      : i === 17
                                        ? "https://youtu.be/zSeZWjSUubo?si=wOBmFjyBDFfJltau"
                                        : i === 18
                                          ? "https://youtu.be/vWr5CBOP-IA?si=GspY8jiwjqb5oQ_A"
                                          : i === 19
                                            ? "https://youtu.be/8IDxAww4EhM?si=JAGbpwEHOsuDnn8J"
                                            : i === 20
                                              ? "https://youtu.be/ICQ5YmwEGPY?si=joHyQ47QAf-WrEr_"
                                              : i === 21
                                                ? "https://youtu.be/Ha2P3sVkUhw?si=NgX-bT6UUUWF-Ri6"
                                                : i === 22
                                                  ? "https://youtu.be/dt8g0uAy0cE?si=3qnlX5kFXXfryR16"
                                                  : i === 23
                                                    ? "https://youtu.be/dyl91P37P1Y?si=MzEvDrztgm6uaZDp"
                                                    : i === 24
                                                      ? "https://youtu.be/Qb5AqDIlkog?si=-pIR4B-QcqYa716d"
                                                      : i === 25
                                                        ? "https://youtu.be/z-1BJw6iebg?si=ZrC1LaH8M8yDB8i6"
                                                        : i === 26
                                                          ? "https://youtu.be/xZa8XWty_4o?si=bWXpSyOG2pNyX6u6"
                                                          : i === 27
                                                            ? "https://youtu.be/XWztQ4YeULw?si=j81-G8j7B_Lv4-Hs"
                                                    : i === 28
                                                      ? "https://youtu.be/DD7W8L2c8xA?si=L8pcQSmRqwolIetc"
                                                      : i === 29
                                                        ? "https://youtu.be/Yoq-nL2W2Gk?si=X0QJsvK58hgVL5eh"
                                                        : i === 30
                                                          ? "https://youtu.be/5FHGhJnZxXw?si=u0DXnXYrX6i365IE"
                                                          : i === 31
                                                            ? "https://youtu.be/SBjz_M3DM_4?si=cHSM7H2a5way6V0E"
                                                            : i === 32
                                                              ? "https://youtu.be/yXiXr6AsHf4?si=RFjk2TrROwu26w8n"
                                                              : i === 33
                                                                ? "https://youtu.be/b0lMv8De0fs?si=bOD9MkSy3INNkjHx"
            : "";
    const sectionTwoContentEn =
      i === 2
        ? "Computer Class Day 2: Basic Operations & Customization\n\n1. Opening Programs & Applications [00:00:58]\n\nThere are multiple ways to open a program:\n\nDesktop Icons: Move the cursor to the icon and Double-Click (left mouse button).\n\nRight-Click Method: Right-click the icon and select Open from the menu.\n\nTaskbar: For apps pinned to the taskbar, a Single-Click is sufficient.\n\nStart Menu: Click the Start button (bottom-left), find the app in the list, and click to open.\n\nSearch Bar: Type the name of the program in the search bar to find and open it quickly.\n\n2. Window Management [00:01:23]\n\nEvery open program window has three essential buttons in the top-right corner:\n\nMinimize (-): Hides the window and sends it to the taskbar. Click the taskbar icon to bring it back.\n\nMaximize/Restore (Square): Expands the window to full screen. If already full screen, it becomes \"Restore Down\" to return to the previous size.\n\nClose (X): Exits the program.\n\nResizing: To manually resize, hover the cursor over the edge or corner of the window until it turns into a double-arrow, then click and drag.\n\n3. Creating Desktop Shortcuts [00:03:15]\n\nTo keep frequently used files or apps on the desktop:\n\nApps: Start Menu -> Right-click the app -> More -> Open File Location. In the folder that opens, right-click the file -> Send to -> Desktop (create shortcut).\n\nFolders: Right-click on the desktop -> New -> Shortcut -> Browse for the folder/file -> Finish.\n\n4. Managing Desktop Icons [00:04:56]\n\nIf system icons like \"This PC\" or \"Recycle Bin\" are missing:\n\nRight-click the desktop -> Personalize.\n\nGo to Themes -> Desktop icon settings.\n\nCheck the boxes for the icons you want to show and click OK.\n\nResizing Icons: Right-click desktop -> View -> Select Large, Medium, or Small icons.\n\n5. Creating Folders [00:05:36]\n\nFolders help organize files:\n\nRight-click on a blank area of the desktop -> New -> Folder.\n\nType a name and press Enter.\n\n6. The \"Refresh\" Myth [00:06:26]\n\nNote: Refreshing the desktop (Right-click -> Refresh) does not speed up your computer.\n\nIt is used to update the screen display to reflect recent changes (like a renamed file or a newly moved icon).\n\n7. Taskbar Customization [00:06:56]\n\nPinning Apps: Search for an app -> Right-click -> Pin to taskbar.\n\nMoving Taskbar: Right-click taskbar -> Taskbar settings. Under \"Taskbar location on screen,\" choose Left, Top, Right, or Bottom.\n\nChanging Color: Settings -> Personalization -> Colors. Choose a theme color and ensure \"Start, taskbar, and action center\" is checked (Note: Windows must be in Dark Mode for this to apply).\n\n8. Themes and Wallpapers [00:10:36]\n\nWallpaper: Right-click desktop -> Personalize -> Choose a picture or browse for your own.\n\nThemes: Go to Themes in the personalization menu to change the overall look (colors, background, and sounds) of Windows at once.\n\nSummary of Day 2: Focused on navigating the Windows interface and personalizing the workspace for better productivity."
        : i === 33
          ? day33SectionTwoContentEn
          : i === 34
            ? day34SectionTwoContentEn
            : "[00:41] What You Will Learn Today\nThis is the first video of our computer training course. By the end of this lesson, you will know:\n- How to turn a computer on and off.\n- How to open programs and manage windows (minimize, maximize, close).\n- What the Start Menu and Taskbar are.\n- How to connect a laptop or computer to the internet.\n- The purpose of various Desktop Icons.\n\n[01:15] Hardware Introduction\nLet’s look at the computer setup:\na. UPS (Uninterruptible Power Supply): This is a battery backup. If the power goes out, the UPS provides temporary electricity so you can save your work. It also protects your PC from voltage fluctuations.\nb. Computer Cabinet (CPU Case): People often call this the \"CPU,\" but the CPU is actually a chip inside it. This cabinet houses the motherboard, RAM, hard disk, and power supply.\nc. Monitor: Also known as the display.\nd. Keyboard & Mouse: The mouse has a left button, a right button, and a scroll wheel for moving up and down on a page.\n\n[03:02] How to Start the Computer\na. Connect the UPS power cord to the wall socket and switch it on.\nb. Press the Power Button on the front of the UPS.\nc. Press the Power Button on the computer cabinet (the yellow button in this video).\nd. Turn on the Monitor power button.\ne. Wait for the \"booting\" process to finish until you see the home screen.\n\n[04:12] Understanding the Desktop\nThe first screen you see is the Desktop.\n- Icons: The small pictures on the left are shortcuts to programs like Chrome or folders. You can add or delete these.\n- Taskbar: The long bar at the bottom.\n- Start Button: The Windows icon on the bottom left. Clicking it opens the Start Menu.\n\n[05:48] Power Options\nInside the Start Menu, click the Power icon to see:\n- Sleep Mode: Turns off the display and uses very little power. Press any key to \"wake\" it up.\n- Shut Down: Completely turns off the computer.\n- Restart: Closes all apps and reboots the system. Note: Always save your data before restarting.\n\n[06:58] Search & Task View\n- Search Box: Located next to the Start button. Use it to find files, apps, or settings on your PC or the web.\n- Task View: Shows all currently open windows. You can also create a \"New Desktop\" here to organize different tasks.\n\n[08:28] System Tray & Internet\n- Hidden Icons: The small arrow shows background programs.\n- Battery: Shows your charge percentage.\n- Network/Internet: Click the globe/Wi‑Fi icon. Select your Wi‑Fi name, click Connect, enter your password, and click Next to access the internet.\n- Volume: A slider to adjust or mute your speakers.\n\n[11:03] Notification Area & Action Center\n- Notification Area: Shows system alerts.\n- Action Center: Contains quick settings like Battery Saver, Bluetooth, Night Light, and Screen Snip.\n- Brightness: Use the slider at the bottom of the Action Center to adjust the light level.\n\n[12:48] Conclusion & Homework\nThat’s it for Day 1! Rewatch this video if you need to clarify anything. In the next class, we will learn how to add/remove icons and pin apps to the taskbar.\nPractice Questions (Answer in the comments):\n- What is the technical name for the computer's home screen?\n- What do we call the button used to turn the computer on?\n- What is the bar at the bottom of the desktop called?\nGoodbye, and see you in the next class!";
    const sectionTwoContentMr =
      i === 2
        ? "Computer Class Day 2: Basic Operations & Customization\n\n१. प्रोग्राम आणि अॅप्स उघडणे [00:00:58]\n\nप्रोग्राम उघडण्यासाठी अनेक पद्धती आहेत:\n\nDesktop Icons: आयकॉनवर माऊस नेऊन डाव्या बटणाने Double‑Click करा.\n\nRight‑Click Method: आयकॉनवर Right‑Click करा आणि मेनू मधून Open निवडा.\n\nTaskbar: टास्कबारवर पिन केलेल्या अॅपसाठी Single‑Click पुरेसा आहे.\n\nStart Menu: खालच्या डावीकडे असलेला Start बटण क्लिक करा, यादीत अॅप शोधा आणि क्लिक करून उघडा.\n\nSearch Bar: शोध पट्टीत प्रोग्रामचे नाव टाइप करा आणि पटकन उघडा.\n\n२. Window Management [00:01:23]\n\nप्रत्येक उघडलेल्या विंडोच्या वरच्या उजव्या कोपऱ्यात तीन बटणे असतात:\n\nMinimize (-): विंडो लपवून टास्कबारवर पाठवते. टास्कबार आयकॉनवर क्लिक केल्यावर पुन्हा दिसते.\n\nMaximize/Restore (Square): विंडो पूर्ण स्क्रीन करते. आधीच पूर्ण स्क्रीन असेल तर Restore Down करून पूर्वीच्या आकारात आणते.\n\nClose (X): प्रोग्राम बंद करते.\n\nResizing: विंडोचा कडा/कोपरा धरून (डबल‑अॅरो दिसल्यावर) क्लिक करून ड्रॅग करा.\n\n३. Desktop Shortcuts तयार करणे [00:03:15]\n\nवारंवार वापरलेले फाइल/अॅप्स डेस्कटॉपवर ठेवण्यासाठी:\n\nApps: Start Menu -> अॅपवर Right‑Click -> More -> Open File Location. उघडलेल्या फोल्डरमध्ये फाइलवर Right‑Click -> Send to -> Desktop (create shortcut).\n\nFolders: डेस्कटॉपवर Right‑Click -> New -> Shortcut -> फोल्डर/फाइल Browse करा -> Finish.\n\n४. Desktop Icons व्यवस्थापन [00:04:56]\n\n\"This PC\" किंवा \"Recycle Bin\" असे सिस्टम आयकॉन्स दिसत नसतील तर:\n\nडेस्कटॉपवर Right‑Click -> Personalize.\n\nThemes -> Desktop icon settings.\n\nहवे असलेल्या आयकॉनचे बॉक्स निवडा आणि OK करा.\n\nResizing Icons: डेस्कटॉपवर Right‑Click -> View -> Large, Medium किंवा Small icons निवडा.\n\n५. Folders तयार करणे [00:05:36]\n\nफाइल्स व्यवस्थित ठेवण्यासाठी फोल्डर तयार करा:\n\nडेस्कटॉपवरील मोकळ्या जागेवर Right‑Click -> New -> Folder.\n\nनाव टाइप करा आणि Enter दाबा.\n\n६. \"Refresh\" बाबत गैरसमज [00:06:26]\n\nटीप: डेस्कटॉप Refresh केल्याने संगणक वेगवान होत नाही.\n\nतो फक्त स्क्रीनवरील बदल दाखवण्यासाठी वापरला जातो (उदा. फाइलचे नाव बदलले किंवा आयकॉन हलवले).\n\n७. Taskbar Customization [00:06:56]\n\nPinning Apps: अॅप शोधा -> Right‑Click -> Pin to taskbar.\n\nMoving Taskbar: टास्कबारवर Right‑Click -> Taskbar settings. \"Taskbar location on screen\" मध्ये Left/Top/Right/Bottom निवडा.\n\nChanging Color: Settings -> Personalization -> Colors. थीम कलर निवडा आणि \"Start, taskbar, and action center\" चेक करा (टीप: हे दिसण्यासाठी Windows Dark Mode मध्ये असणे आवश्यक आहे).\n\n८. Themes आणि Wallpapers [00:10:36]\n\nWallpaper: डेस्कटॉपवर Right‑Click -> Personalize -> चित्र निवडा किंवा Browse करा.\n\nThemes: Personalization मधील Themes मध्ये जाऊन एकाच वेळी रंग, बॅकग्राउंड आणि साऊंड्स बदलू शकता.\n\nDay 2 सारांश: Windows इंटरफेस वापरणे आणि कामासाठी सोयीचे कस्टमायझेशन करणे यावर लक्ष केंद्रित केले."
        : i === 33
          ? day33SectionTwoContentMr
          : i === 34
            ? day34SectionTwoContentMr
            : "Computer Class Day #1: Basic Computer Course Script\n\nWhat You Will Learn Today\nThis is the first video of our computer training course. By the end of this lesson, you will know:\n- संगणक सुरू आणि बंद कसा करायचा.\n- प्रोग्राम कसे उघडायचे आणि विंडो मॅनेज कशी करायची.\n- Start Menu आणि Taskbar म्हणजे काय.\n- इंटरनेटशी कनेक्ट कसे व्हायचे.\n- Desktop Iconsचा उपयोग काय आहे.\n\nHardware Introduction\nचला संगणकाचा सेटअप पाहूया:\n1. UPS (Uninterruptible Power Supply): वीज गेली तरी काही काळ बॅकअप मिळतो आणि काम सेव्ह करता येते. तसेच व्होल्टेज बदलांपासून संरक्षण मिळते.\n2. Computer Cabinet (CPU Case): CPU चिप आत असते; या कॅबिनेटमध्ये मदरबोर्ड, RAM, हार्ड डिस्क आणि पॉवर सप्लाय असतो.\n3. Monitor: स्क्रीन/डिस्प्ले.\n4. Keyboard & Mouse: माऊसला left/right बटणे आणि scroll wheel असते.\n\nHow to Start the Computer\n1. UPSचा प्लग सॉकेटला लावून स्विच ऑन करा.\n2. UPSचा Power Button दाबा.\n3. CPU कॅबिनेटचा Power Button दाबा.\n4. मॉनिटरचा Power Button चालू करा.\n5. बूटिंग पूर्ण होईपर्यंत थांबा.\n\nUnderstanding the Desktop\nDesktop ही पहिली स्क्रीन आहे.\n- Icons: डावीकडील आयकॉन्स हे प्रोग्राम/फोल्डर शॉर्टकट्स आहेत.\n- Taskbar: खालील लांब पट्टी.\n- Start Button: डावीकडील Windows आयकॉन.\n\nPower Options\nStart Menu मध्ये Power आयकॉनवर क्लिक केल्यावर:\n- Sleep Mode: स्क्रीन बंद होते आणि कमी वीज वापरली जाते.\n- Shut Down: संगणक पूर्ण बंद होतो.\n- Restart: सिस्टम पुन्हा सुरू होते. (टिप: डेटा सेव्ह करूनच.)\n\nSearch & Task View\n- Search Box: Start बटणाजवळ; apps, files, settings शोधण्यासाठी.\n- Task View: उघडलेल्या विंडोज दाखवतो आणि New Desktop तयार करता येतो.\n\nSystem Tray & Internet\n- Hidden Icons: छोटा arrow लपलेले प्रोग्राम दाखवतो.\n- Battery: चार्ज टक्केवारी दाखवते.\n- Network/Internet: Wi‑Fi/ग्लोब आयकॉनवरून इंटरनेट कनेक्ट करा.\n- Volume: आवाज कमी‑जास्त करण्यासाठी.\n\nNotification Area & Action Center\n- Notification Area: सिस्टम अलर्ट्स दाखवतो.\n- Action Center: Battery Saver, Bluetooth, Night Light, Screen Snip यांसारखे Quick Settings.\n- Brightness: स्लायडरने स्क्रीनचा उजेड बदलता येतो.\n\nConclusion & Homework\nDay 1 इथे संपला! गरज असल्यास व्हिडिओ पुन्हा पहा. पुढच्या क्लासमध्ये आयकॉन्स add/remove आणि टास्कबारला pin करणे शिकू.\nसराव प्रश्न:\n- संगणकाच्या home screen ला काय म्हणतात?\n- संगणक सुरू करण्यासाठी कोणते बटण वापरतात?\n- डेस्कटॉपच्या खालच्या पट्टीला काय म्हणतात?\nपुढच्या क्लासमध्ये भेटू!";
    days.push({
      dayNumber: i,
      videoUrl: "",
      contentEn: `Day ${i} overview in English.`,
      contentMr: `दिवस ${i} मराठी आढावा.`,
      subsections: [
        {
          titleEn: "Section 1",
          titleMr: "भाग १",
          contentEn: "",
          contentMr: "",
          videoUrl: sectionOneVideo
        },
        {
          titleEn: "Section 2",
          titleMr: "भाग २",
          contentEn: sectionTwoContentEn,
          contentMr: sectionTwoContentMr
        }
      ],
      exam:
        i === 33
          ? {
              durationMinutes: 30,
              questions: day33ExamQuestions
            }
          : i === 34
            ? {
                durationMinutes: 30,
                questions: day34ExamQuestions
              }
            : i === 35
              ? {
                  durationMinutes: 30,
                  questions: day35ExamQuestions
                }
              : {
                  durationMinutes: 30,
                  questions: [
                    {
                      questionEn: "What is MS-CIT?",
                      questionMr: "MS-CIT म्हणजे काय?",
                      options: [
                        {
                          textEn: "A computer literacy course",
                          textMr: "कंप्यूटर साक्षरता कोर्स"
                        },
                        { textEn: "A sports event", textMr: "क्रीडा कार्यक्रम" },
                        { textEn: "A music class", textMr: "संगीत वर्ग" },
                        { textEn: "A cooking course", textMr: "स्वयंपाक कोर्स" }
                      ],
                      correctIndex: 0
                    }
                  ]
                }
    });
  }
  await CourseDay.insertMany(days);
  console.log("Seeded 50 course days");
};

module.exports = { ensureCourseDays };

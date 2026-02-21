const CourseDay = require("../models/CourseDay");

const ensureCourseDays = async () => {
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
      { dayNumber: 17 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/zSeZWjSUubo?si=wOBmFjyBDFfJltau" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 18 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/vWr5CBOP-IA?si=GspY8jiwjqb5oQ_A" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 19 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/8IDxAww4EhM?si=JAGbpwEHOsuDnn8J" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 20 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/ICQ5YmwEGPY?si=joHyQ47QAf-WrEr_" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 21 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/Ha2P3sVkUhw?si=NgX-bT6UUUWF-Ri6" } }
    );
    await CourseDay.updateMany(
      {},
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
            : "";
    const sectionTwoContentEn =
      i === 2
        ? "Computer Class Day 2: Basic Operations & Customization\n\n1. Opening Programs & Applications [00:00:58]\n\nThere are multiple ways to open a program:\n\nDesktop Icons: Move the cursor to the icon and Double-Click (left mouse button).\n\nRight-Click Method: Right-click the icon and select Open from the menu.\n\nTaskbar: For apps pinned to the taskbar, a Single-Click is sufficient.\n\nStart Menu: Click the Start button (bottom-left), find the app in the list, and click to open.\n\nSearch Bar: Type the name of the program in the search bar to find and open it quickly.\n\n2. Window Management [00:01:23]\n\nEvery open program window has three essential buttons in the top-right corner:\n\nMinimize (-): Hides the window and sends it to the taskbar. Click the taskbar icon to bring it back.\n\nMaximize/Restore (Square): Expands the window to full screen. If already full screen, it becomes \"Restore Down\" to return to the previous size.\n\nClose (X): Exits the program.\n\nResizing: To manually resize, hover the cursor over the edge or corner of the window until it turns into a double-arrow, then click and drag.\n\n3. Creating Desktop Shortcuts [00:03:15]\n\nTo keep frequently used files or apps on the desktop:\n\nApps: Start Menu -> Right-click the app -> More -> Open File Location. In the folder that opens, right-click the file -> Send to -> Desktop (create shortcut).\n\nFolders: Right-click on the desktop -> New -> Shortcut -> Browse for the folder/file -> Finish.\n\n4. Managing Desktop Icons [00:04:56]\n\nIf system icons like \"This PC\" or \"Recycle Bin\" are missing:\n\nRight-click the desktop -> Personalize.\n\nGo to Themes -> Desktop icon settings.\n\nCheck the boxes for the icons you want to show and click OK.\n\nResizing Icons: Right-click desktop -> View -> Select Large, Medium, or Small icons.\n\n5. Creating Folders [00:05:36]\n\nFolders help organize files:\n\nRight-click on a blank area of the desktop -> New -> Folder.\n\nType a name and press Enter.\n\n6. The \"Refresh\" Myth [00:06:26]\n\nNote: Refreshing the desktop (Right-click -> Refresh) does not speed up your computer.\n\nIt is used to update the screen display to reflect recent changes (like a renamed file or a newly moved icon).\n\n7. Taskbar Customization [00:06:56]\n\nPinning Apps: Search for an app -> Right-click -> Pin to taskbar.\n\nMoving Taskbar: Right-click taskbar -> Taskbar settings. Under \"Taskbar location on screen,\" choose Left, Top, Right, or Bottom.\n\nChanging Color: Settings -> Personalization -> Colors. Choose a theme color and ensure \"Start, taskbar, and action center\" is checked (Note: Windows must be in Dark Mode for this to apply).\n\n8. Themes and Wallpapers [00:10:36]\n\nWallpaper: Right-click desktop -> Personalize -> Choose a picture or browse for your own.\n\nThemes: Go to Themes in the personalization menu to change the overall look (colors, background, and sounds) of Windows at once.\n\nSummary of Day 2: Focused on navigating the Windows interface and personalizing the workspace for better productivity."
        : "[00:41] What You Will Learn Today\nThis is the first video of our computer training course. By the end of this lesson, you will know:\n- How to turn a computer on and off.\n- How to open programs and manage windows (minimize, maximize, close).\n- What the Start Menu and Taskbar are.\n- How to connect a laptop or computer to the internet.\n- The purpose of various Desktop Icons.\n\n[01:15] Hardware Introduction\nLet’s look at the computer setup:\na. UPS (Uninterruptible Power Supply): This is a battery backup. If the power goes out, the UPS provides temporary electricity so you can save your work. It also protects your PC from voltage fluctuations.\nb. Computer Cabinet (CPU Case): People often call this the \"CPU,\" but the CPU is actually a chip inside it. This cabinet houses the motherboard, RAM, hard disk, and power supply.\nc. Monitor: Also known as the display.\nd. Keyboard & Mouse: The mouse has a left button, a right button, and a scroll wheel for moving up and down on a page.\n\n[03:02] How to Start the Computer\na. Connect the UPS power cord to the wall socket and switch it on.\nb. Press the Power Button on the front of the UPS.\nc. Press the Power Button on the computer cabinet (the yellow button in this video).\nd. Turn on the Monitor power button.\ne. Wait for the \"booting\" process to finish until you see the home screen.\n\n[04:12] Understanding the Desktop\nThe first screen you see is the Desktop.\n- Icons: The small pictures on the left are shortcuts to programs like Chrome or folders. You can add or delete these.\n- Taskbar: The long bar at the bottom.\n- Start Button: The Windows icon on the bottom left. Clicking it opens the Start Menu.\n\n[05:48] Power Options\nInside the Start Menu, click the Power icon to see:\n- Sleep Mode: Turns off the display and uses very little power. Press any key to \"wake\" it up.\n- Shut Down: Completely turns off the computer.\n- Restart: Closes all apps and reboots the system. Note: Always save your data before restarting.\n\n[06:58] Search & Task View\n- Search Box: Located next to the Start button. Use it to find files, apps, or settings on your PC or the web.\n- Task View: Shows all currently open windows. You can also create a \"New Desktop\" here to organize different tasks.\n\n[08:28] System Tray & Internet\n- Hidden Icons: The small arrow shows background programs.\n- Battery: Shows your charge percentage.\n- Network/Internet: Click the globe/Wi‑Fi icon. Select your Wi‑Fi name, click Connect, enter your password, and click Next to access the internet.\n- Volume: A slider to adjust or mute your speakers.\n\n[11:03] Notification Area & Action Center\n- Notification Area: Shows system alerts.\n- Action Center: Contains quick settings like Battery Saver, Bluetooth, Night Light, and Screen Snip.\n- Brightness: Use the slider at the bottom of the Action Center to adjust the light level.\n\n[12:48] Conclusion & Homework\nThat’s it for Day 1! Rewatch this video if you need to clarify anything. In the next class, we will learn how to add/remove icons and pin apps to the taskbar.\nPractice Questions (Answer in the comments):\n- What is the technical name for the computer's home screen?\n- What do we call the button used to turn the computer on?\n- What is the bar at the bottom of the desktop called?\nGoodbye, and see you in the next class!";
    const sectionTwoContentMr =
      i === 2
        ? "Computer Class Day 2: Basic Operations & Customization\n\n१. प्रोग्राम आणि अॅप्स उघडणे [00:00:58]\n\nप्रोग्राम उघडण्यासाठी अनेक पद्धती आहेत:\n\nDesktop Icons: आयकॉनवर माऊस नेऊन डाव्या बटणाने Double‑Click करा.\n\nRight‑Click Method: आयकॉनवर Right‑Click करा आणि मेनू मधून Open निवडा.\n\nTaskbar: टास्कबारवर पिन केलेल्या अॅपसाठी Single‑Click पुरेसा आहे.\n\nStart Menu: खालच्या डावीकडे असलेला Start बटण क्लिक करा, यादीत अॅप शोधा आणि क्लिक करून उघडा.\n\nSearch Bar: शोध पट्टीत प्रोग्रामचे नाव टाइप करा आणि पटकन उघडा.\n\n२. Window Management [00:01:23]\n\nप्रत्येक उघडलेल्या विंडोच्या वरच्या उजव्या कोपऱ्यात तीन बटणे असतात:\n\nMinimize (-): विंडो लपवून टास्कबारवर पाठवते. टास्कबार आयकॉनवर क्लिक केल्यावर पुन्हा दिसते.\n\nMaximize/Restore (Square): विंडो पूर्ण स्क्रीन करते. आधीच पूर्ण स्क्रीन असेल तर Restore Down करून पूर्वीच्या आकारात आणते.\n\nClose (X): प्रोग्राम बंद करते.\n\nResizing: विंडोचा कडा/कोपरा धरून (डबल‑अॅरो दिसल्यावर) क्लिक करून ड्रॅग करा.\n\n३. Desktop Shortcuts तयार करणे [00:03:15]\n\nवारंवार वापरलेले फाइल/अॅप्स डेस्कटॉपवर ठेवण्यासाठी:\n\nApps: Start Menu -> अॅपवर Right‑Click -> More -> Open File Location. उघडलेल्या फोल्डरमध्ये फाइलवर Right‑Click -> Send to -> Desktop (create shortcut).\n\nFolders: डेस्कटॉपवर Right‑Click -> New -> Shortcut -> फोल्डर/फाइल Browse करा -> Finish.\n\n४. Desktop Icons व्यवस्थापन [00:04:56]\n\n\"This PC\" किंवा \"Recycle Bin\" असे सिस्टम आयकॉन्स दिसत नसतील तर:\n\nडेस्कटॉपवर Right‑Click -> Personalize.\n\nThemes -> Desktop icon settings.\n\nहवे असलेल्या आयकॉनचे बॉक्स निवडा आणि OK करा.\n\nResizing Icons: डेस्कटॉपवर Right‑Click -> View -> Large, Medium किंवा Small icons निवडा.\n\n५. Folders तयार करणे [00:05:36]\n\nफाइल्स व्यवस्थित ठेवण्यासाठी फोल्डर तयार करा:\n\nडेस्कटॉपवरील मोकळ्या जागेवर Right‑Click -> New -> Folder.\n\nनाव टाइप करा आणि Enter दाबा.\n\n६. \"Refresh\" बाबत गैरसमज [00:06:26]\n\nटीप: डेस्कटॉप Refresh केल्याने संगणक वेगवान होत नाही.\n\nतो फक्त स्क्रीनवरील बदल दाखवण्यासाठी वापरला जातो (उदा. फाइलचे नाव बदलले किंवा आयकॉन हलवले).\n\n७. Taskbar Customization [00:06:56]\n\nPinning Apps: अॅप शोधा -> Right‑Click -> Pin to taskbar.\n\nMoving Taskbar: टास्कबारवर Right‑Click -> Taskbar settings. \"Taskbar location on screen\" मध्ये Left/Top/Right/Bottom निवडा.\n\nChanging Color: Settings -> Personalization -> Colors. थीम कलर निवडा आणि \"Start, taskbar, and action center\" चेक करा (टीप: हे दिसण्यासाठी Windows Dark Mode मध्ये असणे आवश्यक आहे).\n\n८. Themes आणि Wallpapers [00:10:36]\n\nWallpaper: डेस्कटॉपवर Right‑Click -> Personalize -> चित्र निवडा किंवा Browse करा.\n\nThemes: Personalization मधील Themes मध्ये जाऊन एकाच वेळी रंग, बॅकग्राउंड आणि साऊंड्स बदलू शकता.\n\nDay 2 सारांश: Windows इंटरफेस वापरणे आणि कामासाठी सोयीचे कस्टमायझेशन करणे यावर लक्ष केंद्रित केले."
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
      exam: {
        durationMinutes: 30,
        questions: [
          {
            questionEn: "What is MS-CIT?",
            questionMr: "MS-CIT म्हणजे काय?",
            options: [
              { textEn: "A computer literacy course", textMr: "कंप्यूटर साक्षरता कोर्स" },
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

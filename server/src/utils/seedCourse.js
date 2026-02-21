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
      { dayNumber: 5 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/CI9OySCfKBk?si=56wMxVMH4KREVM8v" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 6 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/YH5vJ8J7ADc?si=UTHvKtx4UXsZj8Gk" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 7 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/LWt0PYilMm0?si=4Rm0kXSbUgjFKkbM" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 8 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/3xyGUrfAIHU?si=_rVs_NBj1EgPSodS" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 9 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/dpgNDXF3jmw?si=N4-CClA6opROtXQB" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 10 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/LlULwNT_Frg?si=9xH1_qAVH6N-xHi-" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 11 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/Aq2zEvTJhR4?si=DrSxWZir-f3N4pg_" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 12 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/G94zWtAr9Gc?si=qY75EkhzDuOMIomS" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 13 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/pqP_RUBf-So?si=bfw9hoOoA9Z8D1y5" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 14 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/mWLxz8q7ztE?si=mMnY-YX7Ph-RR0U3" } }
    );
    await CourseDay.updateOne(
      { dayNumber: 15 },
      { $set: { "subsections.0.videoUrl": "https://youtu.be/EFw00omO54A?si=gy3wAq41HJvJWRBJ" } }
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

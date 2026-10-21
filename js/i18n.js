const MEDORA_LANGS = {
  en: { label: "English", locale: "en-IN" },
  hi: { label: "हिन्दी (Hindi)", locale: "hi-IN" },
  te: { label: "తెలుగు (Telugu)", locale: "te-IN" },
  ta: { label: "தமிழ் (Tamil)", locale: "ta-IN" },
  bn: { label: "বাংলা (Bengali)", locale: "bn-IN" },
  mr: { label: "मराठी (Marathi)", locale: "mr-IN" },
  kn: { label: "ಕನ್ನಡ (Kannada)", locale: "kn-IN" },
  ml: { label: "മലയാളം (Malayalam)", locale: "ml-IN" },
  gu: { label: "ગુજરાતી (Gujarati)", locale: "gu-IN" },
  pa: { label: "ਪੰਜਾਬੀ (Punjabi)", locale: "pa-IN" }
};

const I18N = {
  en: {
    brandTagline: "Cheaper Generics, Clear Prices",
    navSearch: "Search", navRx: "My Prescription", navKendras: "Jan Aushadhi Kendras", navAbout: "About & Disclaimer",
    offline: "Works Offline", themeWord: "Theme", viewMap: "View on Map",
    useMyLocation: "Use My Location - Find Nearest", locating: "Getting your location...",
    locationDenied: "Location not available. Allow location access, or use the Directions buttons - Google Maps will find the route.",
    nearestFirst: "Sorted by distance from your location - nearest first.", kmAway: "km away",
    allIndiaTitle: "All India Jan Aushadhi Kendras",
    allIndiaNote: "Search the published PMBI Kendra list - 16,912 Kendras across India with district, pincode, address and contact.",
    loadIndia: "Load All-India Kendra List", searchKendraPh: "Search district, pincode, name or address",
    allStates: "All States", resultsFound: "Kendras found", showingFirst: "Showing first", contactPerson: "Contact",
    nearestKendra: "Nearest Jan Aushadhi Kendra", findNearest: "Find Nearest Kendra",
    photoRxTitle: "Medicines found in this photo", photoAddAll: "Add All to My Prescription",
    photoVerify: "Please check every name against your prescription paper before adding. Medora never reads doses - only names.",
    photoUnreadable: "This looks handwritten or unclear, and handwriting cannot be read reliably. Please type the medicine names instead - typing always works.",
    photoNotFound: "Not in our list:",
    heroTitle: "Know the <span class=\"accent\">generic</span> and the <span class=\"accent\">fair price</span> of your branded medicine",
    heroSub: "Type a brand name or molecule. Get the generic name, strength and Jan Aushadhi price - instantly.",
    searchPh: "Try: Dolo, Pantop, Telma, paracitamol...",
    notFound: "This medicine is not in our list yet. We only show prices from data we have verified - we never guess a price. Please check the spelling, or ask your pharmacist.",
    photoBtn: "Photo of strip / box",
    photoNote: "Printed name reading by Gemma 4 (optional key on the About page). Typing always works.",
    toastAdded: "Added to My Prescription",
    matchWord: "match", saveWord: "Save",
    youSaveLine: "You save {s}",
    genericLabel: "Generic / Molecule", strengthLabel: "Strength", packLabel: "Pack", jaPrice: "Jan Aushadhi Price",
    trustLine: "Source: Jan Aushadhi published price (indicative) - Match: {p}% - Please verify the strength on your prescription strip.",
    addRx: "+ Add to My Prescription", shieldBtn: "Counter Shield - Show to Chemist", listenBtn: "Listen",
    rxTitle: "My Prescription", clearBtn: "Clear",
    rxEmpty: "No medicines added yet. Go to the <a href=\"index.html\">Search page</a>, find your medicine and tap \"Add to My Prescription\".",
    brandedTotal: "Branded total", genericTotal: "Generic (Jan Aushadhi) total", youSave: "You save",
    chronicQ: "If you buy this prescription <strong>every month</strong>, packs per month:",
    chronicLine: "Monthly saving: {m} - 1 year: {y} - 10 years: {t}",
    printBtn: "Print Sheet", whatsappBtn: "Share on WhatsApp",
    kendrasTitle: "Nearest Jan Aushadhi Kendras - Lucknow",
    kendrasIntro: "Jan Aushadhi Kendras stock generic medicines at the published prices Medora shows. Take your prescription list with you.",
    directions: "Get Directions",
    verifyNote: "Please verify timings and stock at the Kendra before visiting. Kendra details should be confirmed against the official PMBI listing.",
    moreKendras: "Find Kendras in other cities on the official Jan Aushadhi website",
    sayTitle: "What to say at the Kendra",
    sayText: "Show your printed prescription sheet from the My Prescription page, or use Counter Shield on the Search page - it shows the generic name, strength and price in big text, so you do not have to argue at the counter.",
    aboutTitle: "About Medora",
    aboutP1: "Medora turns a branded medicine name into the two things a patient needs to know: what molecule it is, and what it should cost. For a large share of medicines, an identical generic - same molecule, same strength - exists at a fraction of the price at Jan Aushadhi Kendras, which publish their prices openly.",
    aboutP2: "Medora is a free, open-source Progressive Web App. It works fully offline, needs no sign-up, and is built for a cheap phone on a bad signal.",
    dataTitle: "Data Sources",
    gemmaTitle: "Gemma 4 Photo Reading (Optional)",
    gemmaText: "Medora can send a photo of a printed medicine strip to a Gemma 4 vision model (Google AI Studio) to read the brand name. Gemma only reads printed text - every price and molecule still comes from the Jan Aushadhi data inside this app. Without a key, typing and voice search work fully.",
    gemmaKeyPh: "Paste Google AI Studio API key (stored only on this phone)",
    gemmaModelPh: "Gemma 4 vision model ID from AI Studio",
    saveBtn: "Save on this device", gemmaSaved: "Gemma settings saved on this device.",
    disclaimer: "<strong>Disclaimer:</strong> Medora shows <strong>price and molecule information only. It is not medical advice</strong> and never suggests changing or substituting a medicine. Prices are indicative - branded MRP versus the published Jan Aushadhi price for the same molecule and strength. Always confirm with your doctor or pharmacist before buying a generic alternative.",
    footerLine: "Medora - Built for GDG On Campus SRMCEM Hackfest, Lucknow. Open source under MIT Licence.",
    shieldAsk: "Please give me the generic of this medicine",
    shieldJa: "Available at Jan Aushadhi Kendra",
    shieldClose: "Close",
    printTitle: "Medora - Generic Medicine List",
    printSub: "Show this sheet at the chemist / Jan Aushadhi Kendra and confirm with your doctor or pharmacist.",
    printTotalLine: "Total: Branded {b} -> Generic {g}. You save {s}.",
    speakLine: "The generic name of this medicine is {g} {st}. Branded price {b} rupees, Jan Aushadhi price {p} rupees. You save {s} rupees. Please confirm with your doctor or pharmacist.",
    photoNoKey: "Photo added. Add your free Google AI Studio key and Gemma 4 model ID on the About page to auto-read the name - or type the name above, typing always works.",
    photoReading: "Reading the printed name with Gemma 4...",
    photoOk: "Gemma read: {x} - please verify it matches the strip.",
    photoFail: "Could not read the name. Please type it above - typing always works."
  },
  hi: {
    brandTagline: "सस्ती जेनेरिक, साफ़ कीमत",
    navSearch: "खोजें", navRx: "मेरी दवाइयाँ", navKendras: "जन औषधि केंद्र", navAbout: "जानकारी व अस्वीकरण",
    offline: "ऑफ़लाइन चलता है", themeWord: "थीम", viewMap: "नक्शे पर देखें",
    useMyLocation: "मेरी लोकेशन से सबसे नज़दीक खोजें", locating: "आपकी लोकेशन मिल रही है...",
    locationDenied: "लोकेशन नहीं मिली। लोकेशन की अनुमति दें, या रास्ता देखें बटन दबाएं - Google Maps रास्ता दिखा देगा।",
    nearestFirst: "आपकी लोकेशन से दूरी के हिसाब से - सबसे नज़दीक पहले।", kmAway: "किमी दूर",
    allIndiaTitle: "पूरे भारत के जन औषधि केंद्र",
    allIndiaNote: "प्रकाशित PMBI केंद्र सूची खोजें - पूरे भारत के 16,912 केंद्र, जिला, पिनकोड, पता और संपर्क के साथ।",
    loadIndia: "पूरे भारत की केंद्र सूची लोड करें", searchKendraPh: "जिला, पिनकोड, नाम या पता खोजें",
    allStates: "सभी राज्य", resultsFound: "केंद्र मिले", showingFirst: "पहले दिखा रहे हैं", contactPerson: "संपर्क",
    nearestKendra: "सबसे नज़दीक जन औषधि केंद्र", findNearest: "सबसे नज़दीक केंद्र खोजें",
    photoRxTitle: "इस फोटो में मिली दवाइयाँ", photoAddAll: "सभी को मेरी पर्ची में जोड़ें",
    photoVerify: "जोड़ने से पहले हर नाम अपनी पर्ची से मिला लें। Medora कभी खुराक नहीं पढ़ता - सिर्फ नाम।",
    photoUnreadable: "यह हस्तलिखित या अस्पष्ट लग रहा है, और हस्तलिपि भरोसेमंद तरीके से नहीं पढ़ी जा सकती। कृपया दवाइयों के नाम टाइप करें - टाइप करना हमेशा काम करता है।",
    photoNotFound: "हमारी सूची में नहीं मिला:",
    heroTitle: "अपनी ब्रांडेड दवाई का <span class=\"accent\">जेनेरिक</span> और उसकी <span class=\"accent\">सही कीमत</span> जानें",
    heroSub: "ब्रांड का नाम या मॉलिक्यूल लिखें। जेनेरिक नाम, स्ट्रेंथ और जन औषधि कीमत तुरंत पाएं।",
    searchPh: "लिखें: Dolo, Pantop, Telma, paracitamol...",
    notFound: "यह दवाई अभी हमारी सूची में नहीं है। हम केवल जाँच किया हुआ डेटा दिखाते हैं - कीमत का अंदाज़ा कभी नहीं लगाते। कृपया स्पेलिंग देखें या फार्मासिस्ट से पूछें।",
    photoBtn: "पत्ते / डिब्बे की फोटो",
    photoNote: "Gemma 4 से छपा नाम पढ़ना (About पेज पर कुंजी वैकल्पिक है)। लिखकर खोजना हमेशा चलता है।",
    toastAdded: "मेरी दवाइयों में जुड़ गया",
    matchWord: "मेल", saveWord: "बचत",
    youSaveLine: "आपकी बचत {s}",
    genericLabel: "जेनेरिक / मॉलिक्यूल", strengthLabel: "स्ट्रेंथ", packLabel: "पैक", jaPrice: "जन औषधि कीमत",
    trustLine: "स्रोत: जन औषधि प्रकाशित कीमत (सांकेतिक) - मेल: {p}% - कृपया प्रिस्क्रिप्शन पर स्ट्रेंथ जाँचें।",
    addRx: "+ मेरी दवाइयों में जोड़ें", shieldBtn: "काउंटर शील्ड - केमिस्ट को दिखाएं", listenBtn: "सुनें",
    rxTitle: "मेरी दवाइयाँ", clearBtn: "साफ़ करें",
    rxEmpty: "अभी कोई दवाई नहीं जोड़ी गई। <a href=\"index.html\">खोज पेज</a> पर जाएं, दवाई खोजें और \"मेरी दवाइयों में जोड़ें\" दबाएं।",
    brandedTotal: "ब्रांडेड कुल", genericTotal: "जेनेरिक (जन औषधि) कुल", youSave: "आपकी बचत",
    chronicQ: "अगर आप यह दवाइयाँ <strong>हर महीने</strong> लेते हैं, प्रति माह पैक:",
    chronicLine: "मासिक बचत: {m} - 1 साल: {y} - 10 साल: {t}",
    printBtn: "शीट प्रिंट करें", whatsappBtn: "WhatsApp पर भेजें",
    kendrasTitle: "निकटतम जन औषधि केंद्र - लखनऊ",
    kendrasIntro: "जन औषधि केंद्रों पर जेनेरिक दवाइयाँ उन्हीं प्रकाशित कीमतों पर मिलती हैं जो Medora दिखाता है। अपनी दवाई सूची साथ ले जाएं।",
    directions: "रास्ता देखें",
    verifyNote: "जाने से पहले केंद्र का समय और स्टॉक जाँच लें। केंद्र की जानकारी आधिकारिक PMBI सूची से मिलान करें।",
    moreKendras: "अन्य शहरों के केंद्र आधिकारिक जन औषधि वेबसाइट पर खोजें",
    sayTitle: "केंद्र पर क्या कहें",
    sayText: "मेरी दवाइयाँ पेज से छपी शीट दिखाएं, या खोज पेज पर काउंटर शील्ड का उपयोग करें - यह जेनेरिक नाम, स्ट्रेंथ और कीमत बड़े अक्षरों में दिखाता है, ताकि आपको काउंटर पर बहस न करनी पड़े।",
    aboutTitle: "Medora के बारे में",
    dataTitle: "डेटा स्रोत",
    gemmaTitle: "Gemma 4 फोटो रीडिंग (वैकल्पिक)",
    gemmaKeyPh: "Google AI Studio API कुंजी डालें (केवल इसी फोन पर रहती है)",
    gemmaModelPh: "AI Studio से Gemma 4 विज़न मॉडल ID",
    saveBtn: "इस डिवाइस पर सहेजें", gemmaSaved: "Gemma सेटिंग इस डिवाइस पर सहेजी गई।",
    disclaimer: "<strong>अस्वीकरण:</strong> Medora केवल <strong>कीमत और मॉलिक्यूल की जानकारी</strong> देता है। यह <strong>चिकित्सीय सलाह नहीं है</strong> और कभी दवाई बदलने का सुझाव नहीं देता। कीमतें सांकेतिक हैं। जेनेरिक खरीदने से पहले हमेशा अपने डॉक्टर या फार्मासिस्ट से पुष्टि करें।",
    footerLine: "Medora - GDG On Campus SRMCEM Hackfest, लखनऊ के लिए बनाया गया। MIT लाइसेंस के तहत ओपन सोर्स।",
    shieldAsk: "कृपया मुझे इसका जेनेरिक दीजिए",
    shieldJa: "जन औषधि केंद्र पर उपलब्ध है",
    shieldClose: "बंद करें",
    speakLine: "इस दवाई का जेनेरिक नाम है {g} {st}। ब्रांडेड कीमत {b} रुपये, जन औषधि कीमत {p} रुपये। आपकी बचत {s} रुपये। कृपया डॉक्टर या फार्मासिस्ट से पुष्टि करें।",
    photoNoKey: "फोटो जुड़ गई। नाम अपने-आप पढ़ने के लिए About पेज पर अपनी मुफ़्त Google AI Studio कुंजी और Gemma 4 मॉडल ID डालें - या ऊपर नाम लिखें, लिखना हमेशा चलता है।",
    photoReading: "Gemma 4 से छपा नाम पढ़ा जा रहा है...",
    photoOk: "Gemma ने पढ़ा: {x} - कृपया पत्ते से मिलान करें।",
    photoFail: "नाम पढ़ा नहीं जा सका। कृपया ऊपर लिखें - लिखना हमेशा चलता है।"
  },
  te: {
    brandTagline: "చౌకైన జెనరిక్‌లు, స్పష్టమైన ధరలు",
    navSearch: "వెతకండి", navRx: "నా ప్రిస్క్రిప్షన్", navKendras: "జన్ ఔషధి కేంద్రాలు", navAbout: "గురించి & నిరాకరణ",
    offline: "ఆఫ్‌లైన్‌లో పనిచేస్తుంది",
    heroTitle: "మీ బ్రాండెడ్ మందు యొక్క <span class=\"accent\">జెనరిక్</span> మరియు <span class=\"accent\">సరైన ధర</span> తెలుసుకోండి",
    heroSub: "బ్రాండ్ పేరు లేదా మాలిక్యూల్ రాయండి. జెనరిక్ పేరు, స్ట్రెంత్ మరియు జన్ ఔషధి ధర వెంటనే పొందండి.",
    searchPh: "ప్రయత్నించండి: Dolo, Pantop, Telma, paracitamol...",
    photoBtn: "స్ట్రిప్ / బాక్స్ ఫోటో", toastAdded: "నా ప్రిస్క్రిప్షన్‌కు చేర్చబడింది",
    matchWord: "సరిపోలిక", saveWord: "పొదుపు", youSaveLine: "మీ పొదుపు {s}",
    addRx: "+ నా ప్రిస్క్రిప్షన్‌కు చేర్చండి", shieldBtn: "కౌంటర్ షీల్డ్ - కెమిస్ట్‌కు చూపండి", listenBtn: "వినండి",
    rxTitle: "నా ప్రిస్క్రిప్షన్", clearBtn: "క్లియర్",
    brandedTotal: "బ్రాండెడ్ మొత్తం", genericTotal: "జెనరిక్ (జన్ ఔషధి) మొత్తం", youSave: "మీ పొదుపు",
    printBtn: "షీట్ ప్రింట్ చేయండి", whatsappBtn: "WhatsAppలో పంపండి",
    kendrasTitle: "సమీప జన్ ఔషధి కేంద్రాలు - లక్నో", directions: "దారి చూపండి",
    disclaimer: "<strong>నిరాకరణ:</strong> Medora <strong>ధర మరియు మాలిక్యూల్ సమాచారం మాత్రమే</strong> చూపుతుంది. ఇది <strong>వైద్య సలహా కాదు</strong>. జెనరిక్ కొనే ముందు మీ డాక్టర్ లేదా ఫార్మసిస్ట్‌ను ఖచ్చితంగా అడగండి.",
    shieldAsk: "దయచేసి దీని జెనరిక్ ఇవ్వండి", shieldJa: "జన్ ఔషధి కేంద్రంలో లభిస్తుంది", shieldClose: "మూసివేయండి",
    speakLine: "ఈ మందు జెనరిక్ పేరు {g} {st}. బ్రాండెడ్ ధర {b} రూపాయలు, జన్ ఔషధి ధర {p} రూపాయలు. మీ పొదుపు {s} రూపాయలు. దయచేసి డాక్టర్ లేదా ఫార్మసిస్ట్‌తో నిర్ధారించండి."
  },
  ta: {
    brandTagline: "மலிவான ஜெனரிக், தெளிவான விலை",
    navSearch: "தேடுக", navRx: "என் மருந்துச்சீட்டு", navKendras: "ஜன் ஔஷதி மையங்கள்", navAbout: "பற்றி & மறுப்பு",
    offline: "ஆஃப்லைனில் வேலை செய்யும்",
    heroTitle: "உங்கள் பிராண்டட் மருந்தின் <span class=\"accent\">ஜெனரிக்</span> மற்றும் <span class=\"accent\">சரியான விலையை</span> அறியுங்கள்",
    heroSub: "பிராண்ட் பெயர் அல்லது மூலக்கூறை உள்ளிடுங்கள். ஜெனரிக் பெயர், வலிமை மற்றும் ஜன் ஔஷதி விலையை உடனே பெறுங்கள்.",
    searchPh: "முயற்சிக்கவும்: Dolo, Pantop, Telma, paracitamol...",
    photoBtn: "ஸ்டிரிப் / பெட்டியின் புகைப்படம்", toastAdded: "என் மருந்துச்சீட்டில் சேர்க்கப்பட்டது",
    matchWord: "பொருத்தம்", saveWord: "சேமிப்பு", youSaveLine: "நீங்கள் சேமிப்பது {s}",
    addRx: "+ என் மருந்துச்சீட்டில் சேர்க்கவும்", shieldBtn: "கவுண்டர் ஷீல்ட் - கெமிஸ்டிடம் காட்டவும்", listenBtn: "கேளுங்கள்",
    rxTitle: "என் மருந்துச்சீட்டு", clearBtn: "அழிக்கவும்",
    brandedTotal: "பிராண்டட் மொத்தம்", genericTotal: "ஜெனரிக் (ஜன் ஔஷதி) மொத்தம்", youSave: "நீங்கள் சேமிப்பது",
    printBtn: "தாளை அச்சிடவும்", whatsappBtn: "WhatsApp இல் பகிரவும்",
    kendrasTitle: "அருகிலுள்ள ஜன் ஔஷதி மையங்கள் - லக்னோ", directions: "வழியைக் காட்டு",
    disclaimer: "<strong>மறுப்பு:</strong> Medora <strong>விலை மற்றும் மூலக்கூறு தகவலை மட்டும்</strong> காட்டுகிறது. இது <strong>மருத்துவ ஆலோசனை அல்ல</strong>. ஜெனரிக் வாங்கும் முன் உங்கள் மருத்துவர் அல்லது மருந்தாளரிடம் உறுதிப்படுத்தவும்.",
    shieldAsk: "தயவுசெய்து இதன் ஜெனரிக்கை தாருங்கள்", shieldJa: "ஜன் ஔஷதி மையத்தில் கிடைக்கும்", shieldClose: "மூடவும்",
    speakLine: "இந்த மருந்தின் ஜெனரிக் பெயர் {g} {st}. பிராண்டட் விலை {b} ரூபாய், ஜன் ஔஷதி விலை {p} ரூபாய். நீங்கள் சேமிப்பது {s} ரூபாய். தயவுசெய்து மருத்துவர் அல்லது மருந்தாளரிடம் உறுதிப்படுத்தவும்."
  },
  bn: {
    brandTagline: "সস্তা জেনেরিক, পরিষ্কার দাম",
    navSearch: "খুঁজুন", navRx: "আমার প্রেসক্রিপশন", navKendras: "জন ঔষধি কেন্দ্র", navAbout: "সম্পর্কে ও দাবিত্যাগ",
    offline: "অফলাইনে কাজ করে",
    heroTitle: "আপনার ব্র্যান্ডেড ওষুধের <span class=\"accent\">জেনেরিক</span> এবং <span class=\"accent\">সঠিক দাম</span> জানুন",
    heroSub: "ব্র্যান্ডের নাম বা অণু লিখুন। জেনেরিক নাম, শক্তি ও জন ঔষধি দাম সঙ্গে সঙ্গে পান।",
    searchPh: "চেষ্টা করুন: Dolo, Pantop, Telma, paracitamol...",
    photoBtn: "স্ট্রিপ / বাক্সের ছবি", toastAdded: "আমার প্রেসক্রিপশনে যোগ হয়েছে",
    matchWord: "মিল", saveWord: "সাশ্রয়", youSaveLine: "আপনার সাশ্রয় {s}",
    addRx: "+ আমার প্রেসক্রিপশনে যোগ করুন", shieldBtn: "কাউন্টার শিল্ড - কেমিস্টকে দেখান", listenBtn: "শুনুন",
    rxTitle: "আমার প্রেসক্রিপশন", clearBtn: "মুছুন",
    brandedTotal: "ব্র্যান্ডেড মোট", genericTotal: "জেনেরিক (জন ঔষধি) মোট", youSave: "আপনার সাশ্রয়",
    printBtn: "শিট প্রিন্ট করুন", whatsappBtn: "WhatsApp-এ পাঠান",
    kendrasTitle: "কাছের জন ঔষধি কেন্দ্র - লখনউ", directions: "পথ দেখান",
    disclaimer: "<strong>দাবিত্যাগ:</strong> Medora শুধু <strong>দাম ও অণুর তথ্য</strong> দেখায়। এটি <strong>চিকিৎসা পরামর্শ নয়</strong>। জেনেরিক কেনার আগে আপনার ডাক্তার বা ফার্মাসিস্টের থেকে নিশ্চিত করুন।",
    shieldAsk: "অনুগ্রহ করে এর জেনেরিক দিন", shieldJa: "জন ঔষধি কেন্দ্রে পাওয়া যায়", shieldClose: "বন্ধ করুন",
    speakLine: "এই ওষুধের জেনেরিক নাম {g} {st}। ব্র্যান্ডেড দাম {b} টাকা, জন ঔষধি দাম {p} টাকা। আপনার সাশ্রয় {s} টাকা। অনুগ্রহ করে ডাক্তার বা ফার্মাসিস্টের থেকে নিশ্চিত করুন।"
  },
  mr: {
    brandTagline: "स्वस्त जेनेरिक, स्पष्ट किंमत",
    navSearch: "शोधा", navRx: "माझे प्रिस्क्रिप्शन", navKendras: "जन औषधी केंद्रे", navAbout: "माहिती व अस्वीकरण",
    offline: "ऑफलाइन चालते",
    heroTitle: "तुमच्या ब्रँडेड औषधाचे <span class=\"accent\">जेनेरिक</span> आणि त्याची <span class=\"accent\">योग्य किंमत</span> जाणून घ्या",
    heroSub: "ब्रँडचे नाव किंवा रेणू लिहा. जेनेरिक नाव, स्ट्रेंथ आणि जन औषधी किंमत लगेच मिळवा.",
    searchPh: "प्रयत्न करा: Dolo, Pantop, Telma, paracitamol...",
    photoBtn: "पट्टी / डब्याचा फोटो", toastAdded: "माझ्या प्रिस्क्रिप्शनमध्ये जोडले",
    matchWord: "जुळणी", saveWord: "बचत", youSaveLine: "तुमची बचत {s}",
    addRx: "+ माझ्या प्रिस्क्रिप्शनमध्ये जोडा", shieldBtn: "काउंटर शील्ड - केमिस्टला दाखवा", listenBtn: "ऐका",
    rxTitle: "माझे प्रिस्क्रिप्शन", clearBtn: "पुसा",
    brandedTotal: "ब्रँडेड एकूण", genericTotal: "जेनेरिक (जन औषधी) एकूण", youSave: "तुमची बचत",
    printBtn: "शीट प्रिंट करा", whatsappBtn: "WhatsApp वर पाठवा",
    kendrasTitle: "जवळची जन औषधी केंद्रे - लखनऊ", directions: "रस्ता दाखवा",
    disclaimer: "<strong>अस्वीकरण:</strong> Medora फक्त <strong>किंमत आणि रेणूची माहिती</strong> दाखवते. हा <strong>वैद्यकीय सल्ला नाही</strong>. जेनेरिक घेण्यापूर्वी तुमच्या डॉक्टर किंवा फार्मासिस्टकडून खात्री करा.",
    shieldAsk: "कृपया मला याचे जेनेरिक द्या", shieldJa: "जन औषधी केंद्रावर उपलब्ध आहे", shieldClose: "बंद करा",
    speakLine: "या औषधाचे जेनेरिक नाव आहे {g} {st}. ब्रँडेड किंमत {b} रुपये, जन औषधी किंमत {p} रुपये. तुमची बचत {s} रुपये. कृपया डॉक्टर किंवा फार्मासिस्टकडून खात्री करा."
  },
  kn: {
    brandTagline: "ಅಗ್ಗದ ಜೆನೆರಿಕ್, ಸ್ಪಷ್ಟ ಬೆಲೆ",
    navSearch: "ಹುಡುಕಿ", navRx: "ನನ್ನ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್", navKendras: "ಜನ್ ಔಷಧಿ ಕೇಂದ್ರಗಳು", navAbout: "ಬಗ್ಗೆ & ಹಕ್ಕು ನಿರಾಕರಣೆ",
    offline: "ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    heroTitle: "ನಿಮ್ಮ ಬ್ರಾಂಡೆಡ್ ಔಷಧದ <span class=\"accent\">ಜೆನೆರಿಕ್</span> ಮತ್ತು ಅದರ <span class=\"accent\">ಸರಿಯಾದ ಬೆಲೆ</span> ತಿಳಿಯಿರಿ",
    heroSub: "ಬ್ರಾಂಡ್ ಹೆಸರು ಅಥವಾ ಅಣುವನ್ನು ಬರೆಯಿರಿ. ಜೆನೆರಿಕ್ ಹೆಸರು, ಸ್ಟ್ರೆಂತ್ ಮತ್ತು ಜನ್ ಔಷಧಿ ಬೆಲೆಯನ್ನು ತಕ್ಷಣ ಪಡೆಯಿರಿ.",
    searchPh: "ಪ್ರಯತ್ನಿಸಿ: Dolo, Pantop, Telma, paracitamol...",
    photoBtn: "ಸ್ಟ್ರಿಪ್ / ಬಾಕ್ಸ್ ಫೋಟೋ", toastAdded: "ನನ್ನ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ",
    matchWord: "ಹೊಂದಾಣಿಕೆ", saveWord: "ಉಳಿತಾಯ", youSaveLine: "ನಿಮ್ಮ ಉಳಿತಾಯ {s}",
    addRx: "+ ನನ್ನ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್‌ಗೆ ಸೇರಿಸಿ", shieldBtn: "ಕೌಂಟರ್ ಶೀಲ್ಡ್ - ಕೆಮಿಸ್ಟ್‌ಗೆ ತೋರಿಸಿ", listenBtn: "ಕೇಳಿ",
    rxTitle: "ನನ್ನ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್", clearBtn: "ಅಳಿಸಿ",
    brandedTotal: "ಬ್ರಾಂಡೆಡ್ ಒಟ್ಟು", genericTotal: "ಜೆನೆರಿಕ್ (ಜನ್ ಔಷಧಿ) ಒಟ್ಟು", youSave: "ನಿಮ್ಮ ಉಳಿತಾಯ",
    printBtn: "ಶೀಟ್ ಪ್ರಿಂಟ್ ಮಾಡಿ", whatsappBtn: "WhatsApp ನಲ್ಲಿ ಕಳುಹಿಸಿ",
    kendrasTitle: "ಹತ್ತಿರದ ಜನ್ ಔಷಧಿ ಕೇಂದ್ರಗಳು - ಲಕ್ನೋ", directions: "ದಾರಿ ತೋರಿಸಿ",
    disclaimer: "<strong>ಹಕ್ಕು ನಿರಾಕರಣೆ:</strong> Medora <strong>ಬೆಲೆ ಮತ್ತು ಅಣುವಿನ ಮಾಹಿತಿಯನ್ನು ಮಾತ್ರ</strong> ತೋರಿಸುತ್ತದೆ. ಇದು <strong>ವೈದ್ಯಕೀಯ ಸಲಹೆಯಲ್ಲ</strong>. ಜೆನೆರಿಕ್ ಖರೀದಿಸುವ ಮೊದಲು ನಿಮ್ಮ ವೈದ್ಯರು ಅಥವಾ ಫಾರ್ಮಸಿಸ್ಟ್ ಅವರಿಂದ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
    shieldAsk: "ದಯವಿಟ್ಟು ಇದರ ಜೆನೆರಿಕ್ ಕೊಡಿ", shieldJa: "ಜನ್ ಔಷಧಿ ಕೇಂದ್ರದಲ್ಲಿ ಲಭ್ಯವಿದೆ", shieldClose: "ಮುಚ್ಚಿ",
    speakLine: "ಈ ಔಷಧದ ಜೆನೆರಿಕ್ ಹೆಸರು {g} {st}. ಬ್ರಾಂಡೆಡ್ ಬೆಲೆ {b} ರೂಪಾಯಿ, ಜನ್ ಔಷಧಿ ಬೆಲೆ {p} ರೂಪಾಯಿ. ನಿಮ್ಮ ಉಳಿತಾಯ {s} ರೂಪಾಯಿ. ದಯವಿಟ್ಟು ವೈದ್ಯರು ಅಥವಾ ಫಾರ್ಮಸಿಸ್ಟ್ ಅವರಿಂದ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."
  },
  ml: {
    brandTagline: "വിലകുറഞ്ഞ ജനറിക്, വ്യക്തമായ വില",
    navSearch: "തിരയുക", navRx: "എന്റെ പ്രിസ്ക്രിപ്ഷൻ", navKendras: "ജൻ ഔഷധി കേന്ദ്രങ്ങൾ", navAbout: "കുറിച്ച് & നിരാകരണം",
    offline: "ഓഫ്‌ലൈനിൽ പ്രവർത്തിക്കും",
    heroTitle: "നിങ്ങളുടെ ബ്രാൻഡഡ് മരുന്നിന്റെ <span class=\"accent\">ജനറിക്</span>, അതിന്റെ <span class=\"accent\">ശരിയായ വില</span> എന്നിവ അറിയുക",
    heroSub: "ബ്രാൻഡ് പേരോ തന്മാത്രയോ എഴുതുക. ജനറിക് പേര്, സ്ട്രെങ്ത്, ജൻ ഔഷധി വില എന്നിവ ഉടനടി നേടുക.",
    searchPh: "ശ്രമിക്കുക: Dolo, Pantop, Telma, paracitamol...",
    photoBtn: "സ്ട്രിപ്പ് / ബോക്സ് ഫോട്ടോ", toastAdded: "എന്റെ പ്രിസ്ക്രിപ്ഷനിൽ ചേർത്തു",
    matchWord: "പൊരുത്തം", saveWord: "ലാഭം", youSaveLine: "നിങ്ങളുടെ ലാഭം {s}",
    addRx: "+ എന്റെ പ്രിസ്ക്രിപ്ഷനിൽ ചേർക്കുക", shieldBtn: "കൗണ്ടർ ഷീൽഡ് - കെമിസ്റ്റിനെ കാണിക്കുക", listenBtn: "കേൾക്കുക",
    rxTitle: "എന്റെ പ്രിസ്ക്രിപ്ഷൻ", clearBtn: "മായ്ക്കുക",
    brandedTotal: "ബ്രാൻഡഡ് ആകെ", genericTotal: "ജനറിക് (ജൻ ഔഷധി) ആകെ", youSave: "നിങ്ങളുടെ ലാഭം",
    printBtn: "ഷീറ്റ് പ്രിന്റ് ചെയ്യുക", whatsappBtn: "WhatsApp-ൽ അയക്കുക",
    kendrasTitle: "അടുത്തുള്ള ജൻ ഔഷധി കേന്ദ്രങ്ങൾ - ലഖ്‌നൗ", directions: "വഴി കാണിക്കുക",
    disclaimer: "<strong>നിരാകരണം:</strong> Medora <strong>വിലയും തന്മാത്ര വിവരവും മാത്രം</strong> കാണിക്കുന്നു. ഇത് <strong>വൈദ്യോപദേശമല്ല</strong>. ജനറിക് വാങ്ങുന്നതിന് മുമ്പ് ഡോക്ടറോടോ ഫാർമസിസ്റ്റിനോടോ ഉറപ്പാക്കുക.",
    shieldAsk: "ദയവായി ഇതിന്റെ ജനറിക് തരൂ", shieldJa: "ജൻ ഔഷധി കേന്ദ്രത്തിൽ ലഭ്യമാണ്", shieldClose: "അടയ്ക്കുക",
    speakLine: "ഈ മരുന്നിന്റെ ജനറിക് പേര് {g} {st}. ബ്രാൻഡഡ് വില {b} രൂപ, ജൻ ഔഷധി വില {p} രൂപ. നിങ്ങളുടെ ലാഭം {s} രൂപ. ദയവായി ഡോക്ടറോടോ ഫാർമസിസ്റ്റിനോടോ ഉറപ്പാക്കുക."
  },
  gu: {
    brandTagline: "સસ્તી જેનેરિક, સ્પષ્ટ કિંમત",
    navSearch: "શોધો", navRx: "મારું પ્રિસ્ક્રિપ્શન", navKendras: "જન ઔષધિ કેન્દ્રો", navAbout: "વિશે અને અસ્વીકરણ",
    offline: "ઑફલાઇન કામ કરે છે",
    heroTitle: "તમારી બ્રાન્ડેડ દવાનું <span class=\"accent\">જેનેરિક</span> અને તેની <span class=\"accent\">સાચી કિંમત</span> જાણો",
    heroSub: "બ્રાન્ડનું નામ અથવા અણુ લખો. જેનેરિક નામ, સ્ટ્રેન્થ અને જન ઔષધિ કિંમત તરત મેળવો.",
    searchPh: "પ્રયાસ કરો: Dolo, Pantop, Telma, paracitamol...",
    photoBtn: "સ્ટ્રિપ / બોક્સનો ફોટો", toastAdded: "મારા પ્રિસ્ક્રિપ્શનમાં ઉમેરાયું",
    matchWord: "મેળ", saveWord: "બચત", youSaveLine: "તમારી બચત {s}",
    addRx: "+ મારા પ્રિસ્ક્રિપ્શનમાં ઉમેરો", shieldBtn: "કાઉન્ટર શીલ્ડ - કેમિસ્ટને બતાવો", listenBtn: "સાંભળો",
    rxTitle: "મારું પ્રિસ્ક્રિપ્શન", clearBtn: "સાફ કરો",
    brandedTotal: "બ્રાન્ડેડ કુલ", genericTotal: "જેનેરિક (જન ઔષધિ) કુલ", youSave: "તમારી બચત",
    printBtn: "શીટ પ્રિન્ટ કરો", whatsappBtn: "WhatsApp પર મોકલો",
    kendrasTitle: "નજીકના જન ઔષધિ કેન્દ્રો - લખનૌ", directions: "રસ્તો બતાવો",
    disclaimer: "<strong>અસ્વીકરણ:</strong> Medora ફક્ત <strong>કિંમત અને અણુની માહિતી</strong> બતાવે છે. આ <strong>તબીબી સલાહ નથી</strong>. જેનેરિક ખરીદતા પહેલા તમારા ડૉક્ટર અથવા ફાર્માસિસ્ટ પાસે ખાતરી કરો.",
    shieldAsk: "કૃપા કરી મને આનું જેનેરિક આપો", shieldJa: "જન ઔષધિ કેન્દ્ર પર ઉપલબ્ધ છે", shieldClose: "બંધ કરો",
    speakLine: "આ દવાનું જેનેરિક નામ છે {g} {st}. બ્રાન્ડેડ કિંમત {b} રૂપિયા, જન ઔષધિ કિંમત {p} રૂપિયા. તમારી બચત {s} રૂપિયા. કૃપા કરી ડૉક્ટર અથવા ફાર્માસિસ્ટ પાસે ખાતરી કરો."
  },
  pa: {
    brandTagline: "ਸਸਤੀ ਜੈਨਰਿਕ, ਸਾਫ਼ ਕੀਮਤ",
    navSearch: "ਖੋਜੋ", navRx: "ਮੇਰੀ ਪਰਚੀ", navKendras: "ਜਨ ਔਸ਼ਧੀ ਕੇਂਦਰ", navAbout: "ਬਾਰੇ ਅਤੇ ਅਸਵੀਕਰਨ",
    offline: "ਆਫ਼ਲਾਈਨ ਕੰਮ ਕਰਦਾ ਹੈ",
    heroTitle: "ਆਪਣੀ ਬ੍ਰਾਂਡੇਡ ਦਵਾਈ ਦਾ <span class=\"accent\">ਜੈਨਰਿਕ</span> ਅਤੇ ਉਸਦੀ <span class=\"accent\">ਸਹੀ ਕੀਮਤ</span> ਜਾਣੋ",
    heroSub: "ਬ੍ਰਾਂਡ ਦਾ ਨਾਮ ਜਾਂ ਅਣੂ ਲਿਖੋ। ਜੈਨਰਿਕ ਨਾਮ, ਸਟ੍ਰੈਂਥ ਅਤੇ ਜਨ ਔਸ਼ਧੀ ਕੀਮਤ ਤੁਰੰਤ ਪਾਓ।",
    searchPh: "ਕੋਸ਼ਿਸ਼ ਕਰੋ: Dolo, Pantop, Telma, paracitamol...",
    photoBtn: "ਪੱਟੀ / ਡੱਬੇ ਦੀ ਫੋਟੋ", toastAdded: "ਮੇਰੀ ਪਰਚੀ ਵਿੱਚ ਜੁੜ ਗਿਆ",
    matchWord: "ਮੇਲ", saveWord: "ਬਚਤ", youSaveLine: "ਤੁਹਾਡੀ ਬਚਤ {s}",
    addRx: "+ ਮੇਰੀ ਪਰਚੀ ਵਿੱਚ ਜੋੜੋ", shieldBtn: "ਕਾਊਂਟਰ ਸ਼ੀਲਡ - ਕੈਮਿਸਟ ਨੂੰ ਦਿਖਾਓ", listenBtn: "ਸੁਣੋ",
    rxTitle: "ਮੇਰੀ ਪਰਚੀ", clearBtn: "ਸਾਫ਼ ਕਰੋ",
    brandedTotal: "ਬ੍ਰਾਂਡੇਡ ਕੁੱਲ", genericTotal: "ਜੈਨਰਿਕ (ਜਨ ਔਸ਼ਧੀ) ਕੁੱਲ", youSave: "ਤੁਹਾਡੀ ਬਚਤ",
    printBtn: "ਸ਼ੀਟ ਪ੍ਰਿੰਟ ਕਰੋ", whatsappBtn: "WhatsApp 'ਤੇ ਭੇਜੋ",
    kendrasTitle: "ਨੇੜਲੇ ਜਨ ਔਸ਼ਧੀ ਕੇਂਦਰ - ਲਖਨਊ", directions: "ਰਸਤਾ ਦਿਖਾਓ",
    disclaimer: "<strong>ਅਸਵੀਕਰਨ:</strong> Medora ਸਿਰਫ਼ <strong>ਕੀਮਤ ਅਤੇ ਅਣੂ ਦੀ ਜਾਣਕਾਰੀ</strong> ਦਿਖਾਉਂਦਾ ਹੈ। ਇਹ <strong>ਡਾਕਟਰੀ ਸਲਾਹ ਨਹੀਂ ਹੈ</strong>। ਜੈਨਰਿਕ ਖਰੀਦਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਡਾਕਟਰ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਤੋਂ ਪੁਸ਼ਟੀ ਕਰੋ।",
    shieldAsk: "ਕਿਰਪਾ ਕਰਕੇ ਮੈਨੂੰ ਇਸਦਾ ਜੈਨਰਿਕ ਦਿਓ", shieldJa: "ਜਨ ਔਸ਼ਧੀ ਕੇਂਦਰ 'ਤੇ ਉਪਲਬਧ ਹੈ", shieldClose: "ਬੰਦ ਕਰੋ",
    speakLine: "ਇਸ ਦਵਾਈ ਦਾ ਜੈਨਰਿਕ ਨਾਮ ਹੈ {g} {st}। ਬ੍ਰਾਂਡੇਡ ਕੀਮਤ {b} ਰੁਪਏ, ਜਨ ਔਸ਼ਧੀ ਕੀਮਤ {p} ਰੁਪਏ। ਤੁਹਾਡੀ ਬਚਤ {s} ਰੁਪਏ। ਕਿਰਪਾ ਕਰਕੇ ਡਾਕਟਰ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਤੋਂ ਪੁਸ਼ਟੀ ਕਰੋ।"
  }
};

function medoraLang() {
  const saved = localStorage.getItem("medora_lang") || "en";
  return MEDORA_LANGS[saved] ? saved : "en";
}

function t(key, params) {
  const lang = medoraLang();
  let str = (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  if (params) {
    Object.keys(params).forEach((k) => { str = str.replaceAll("{" + k + "}", params[k]); });
  }
  return str;
}

function applyLanguage() {
  const lang = medoraLang();
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  const select = document.getElementById("langSelect");
  if (select) select.value = lang;
  document.dispatchEvent(new CustomEvent("medora:lang"));
}

function applyTheme() {
  const theme = localStorage.getItem("medora_theme") || "light";
  document.documentElement.dataset.theme = theme;
  const icon = document.querySelector("#themeToggle i");
  if (icon) icon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("langSelect");
  if (select) {
    select.innerHTML = Object.keys(MEDORA_LANGS)
      .map((code) => `<option value="${code}">${MEDORA_LANGS[code].label}</option>`)
      .join("");
    select.addEventListener("change", () => {
      localStorage.setItem("medora_lang", select.value);
      applyLanguage();
    });
  }
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("medora_theme", next);
      applyTheme();
    });
  }
  applyTheme();
  applyLanguage();
});

applyTheme();

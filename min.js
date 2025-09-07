
// Global variables to store DOM references
let card, flipBtn, previewBtn, resetBtn, downloadBtn, downloadA4Btn, spinner;
let tempCanvasContainer, successMessage;
let idNumberInput, nameEnglishInput, namePunjabiInput, dobInput, genderInput;
let addressTypeInput, addressNameInput, addressTypePunjabiInput, addressNamePunjabiInput;
let villageInput, districtInput, pincodeInput;
let translateFromSelect, translateToSelect;
let passportPhotoInput, barcodeInput;
let frontPicInput, backPicInput, frontPicPlaceholder, backPicPlaceholder;
let dobLabelSelect, addressLabelEnSelect, addressLabelPaSelect;
let previewIdNumber, previewIdNumberBack, previewNameEnglish, previewNamePunjabi;
let previewDob, previewGender, previewDobLabel, previewAddressLabelEn, previewAddressLabelPa;
let previewAddressType, previewAddressName, previewAddressTypePunjabi, previewAddressNamePunjabi;
let previewAddressEnglish, previewAddressPunjabi;
let photoPlaceholderFront, placeholderFront, placeholderBack, cardFront, cardBack, cardWrapper;

// Village data
const villages = [
    "Ahmad Dhandi", "Alam Ke", "Amir Khas", "Araianwala", "Arnianwala", "Attu Wala", "Awan",
    "Badalke Hithar", "Badalke Uttar", "Baghe Ke Hithar", "Baghe Ke Uttar", "Baghuwala", "Bahadar Ke",
    "Bahmani Wala", "Baje Ke", "Balalke Kamalwala", "Balelke Hasal", "Balelke Rohela", "Bamewala",
    "Barhan Bahtti", "Barhandinwala", "Basti Baba Sarup Dass", "Basti Bawrian", "Basti Dilawar Singh",
    "Basti Kera Wali", "Basti Mohar Singh", "Basti Phuman Shah", "Behak Hasta Hithar", "Behak Hasta Uttar",
    "Bhamba Wattu Hithar", "Bhamba Wattu Uttar", "Bharoli Wala", "Bilimar", "Bodel Pire Ke",
    "Bula Rai Hithar", "Bula Rai Uttar", "Bura Sarwan", "Burwala", "Chak Arainwala", "Chak Arniwala",
    "Chak Bazida", "Chak Balochanwala", "Chak Bhabra", "Chak Bhamba Wattu", "Chak Burwala",
    "Chak Chhanga Rai", "Chak Chhapriwala", "Chak Dhab Khushal Joyia", "Chak Dumal", "Chak Gariban Sandar",
    "Chak Gheruwala", "Chak Gulam Rasulwala", "Chak Hamid Saidoke", "Chak Jamalgarh", "Chak Jamiat Singhwala",
    "Chak Jandwala", "Chak Janisar", "Chak Kandhe Shah", "Chak Kathgarh", "Chak Kherewala", "Chak Khewa",
    "Chak Khundwala", "Chak Khuranj", "Chak Lakhowali", "Chak Lamochar", "Chak Mabain Hardo Dhandi",
    "Chak Maddike", "Chak Mahantanwala", "Chak Manewala", "Chak Maujdinwala", "Chak Megha Rai",
    "Chak Megha Wiran", "Chak Mochanwala", "Chak Mohamdewala", "Chak Nidana", "Chak Paliwala",
    "Chak Paniwala", "Chak Panj Kohi", "Chak Panje Ke", "Chak Punnawali", "Chak Qabarwala",
    "Chak Rakh Amir", "Chak Rohiwala", "Chak Romwala", "Chak Roranwala", "Chak Saidoke", "Chak Sarian",
    "Chak Sarkar Mahazi Parbhat Singhwala", "Chak Sarkar No.1", "Chak Sarkar No.2", "Chak Sawah Wala",
    "Chak Shikargah", "Chak Singhewala", "Chak Sohlewala", "Chak Sohna Sandar", "Chak Somianwala",
    "Chak Sotria", "Chak Sukar", "Chak Sukhera", "Chak Tahliwala", "Changa Kalan", "Changa Khurd",
    "Chhanga Rai Hithar", "Chhanga Rai Uttar", "Chugha", "Dhab Karyal", "Dhab Khushal Joya",
    "Dhandi Khurd", "Dhandi Qadim", "Dhani Natha Singh", "Dhani Qadim", "Dona Bhadru", "Duleke Abad",
    "Duleke Ghairabad", "Duleke Nathuwala", "Fatehgarh", "Fattuwala", "Gatti Ajaid Singhwala",
    "Ghubhaya", "Ghulla", "Gudar Panjgrain", "Guddar Dhandi", "Guru Har Sahai", "Guruhar Sahai (Rural)",
    "Hadiwala", "Haji Betu", "Halimwala", "Hamid Saide Ke", "Hauj Alias Gander", "Haujkhas",
    "Illahi Bakhash Bodla", "Isa Panjgrain", "Jala Lakheke Hithar", "Jalalabad (Rural)", "Jamal Ke",
    "Jandwala", "Jandwala Khera", "Janisar", "Jhariwala", "Jiwa Arain", "Kahansinghwala", "Kahnewala",
    "Kathgarh", "Khere Ke Uttar", "Khereke Hithar", "Khuranj", "Kirianwala", "Kore Singhwala", "Kutti",
    "Laduka", "Ladhuwala Hithar", "Ladhuwala Uttar", "Lakhe Ke Hithar", "Lakhe Ke Uttar", "Lakhewali Asli",
    "Lamochar Khurd", "Naukerian", "Roranwala", "Sahiwala", "Taro Bari"
];

// Initialize the application
function init() {
    // Cache DOM elements
    cacheDomElements();

    // Set up event listeners
    setupEventListeners();

    // Populate village dropdown
    populateVillageDropdown();

    // Initialize defaults
    initializeDefaults();

    // Update preview
    updatePreview();
}

// Cache all DOM elements
function cacheDomElements() {
    card = document.querySelector('.card');
    flipBtn = document.getElementById('flip-btn');
    previewBtn = document.getElementById('preview-btn');
    resetBtn = document.getElementById('reset-btn');
    downloadBtn = document.getElementById('download-btn');
    downloadA4Btn = document.getElementById('download-a4-png-btn');
    spinner = document.getElementById('loading-spinner');
    tempCanvasContainer = document.getElementById('temp-canvas-container');
    successMessage = document.getElementById('success-message');

    // Inputs
    idNumberInput = document.getElementById('id-number');
    nameEnglishInput = document.getElementById('name-english');
    namePunjabiInput = document.getElementById('name-punjabi');
    dobInput = document.getElementById('dob');
    genderInput = document.getElementById('gender');

    addressTypeInput = document.getElementById('address-type');
    addressNameInput = document.getElementById('address-name');
    addressTypePunjabiInput = document.getElementById('address-type-punjabi');
    addressNamePunjabiInput = document.getElementById('address-name-punjabi');

    villageInput = document.getElementById('village');
    districtInput = document.getElementById('district');
    pincodeInput = document.getElementById('pincode');

    translateFromSelect = document.getElementById('translate-from');
    translateToSelect = document.getElementById('translate-to');

    passportPhotoInput = document.getElementById('passport-photo');
    barcodeInput = document.getElementById('barcode');

    // Front/back dedicated uploads & placeholders
    frontPicInput = document.getElementById('front-pic');
    backPicInput = document.getElementById('back-pic');
    frontPicPlaceholder = document.getElementById('front-pic-placeholder');
    backPicPlaceholder = document.getElementById('back-pic-placeholder');

    // New label selects
    dobLabelSelect = document.getElementById('dob-label-select');
    addressLabelEnSelect = document.getElementById('address-label-en-select');
    addressLabelPaSelect = document.getElementById('address-label-pa-select');

    // Preview elements
    previewIdNumber = document.getElementById('preview-id-number');
    previewIdNumberBack = document.getElementById('preview-id-number-back');
    previewNameEnglish = document.getElementById('preview-name-english');
    previewNamePunjabi = document.getElementById('preview-name-punjabi');
    previewDob = document.getElementById('preview-dob');
    previewGender = document.getElementById('preview-gender');

    previewDobLabel = document.getElementById('preview-dob-label');
    previewAddressLabelEn = document.getElementById('preview-address-label-en');
    previewAddressLabelPa = document.getElementById('preview-address-label-pa');

    previewAddressType = document.getElementById('preview-address-type');
    previewAddressName = document.getElementById('preview-address-name');
    previewAddressTypePunjabi = document.getElementById('preview-address-type-punjabi');
    previewAddressNamePunjabi = document.getElementById('preview-address-name-punjabi');
    previewAddressEnglish = document.getElementById('preview-address-english');
    previewAddressPunjabi = document.getElementById('preview-address-punjabi');

    photoPlaceholderFront = document.querySelector('.photo-placeholder-front');
    placeholderFront = document.querySelector('.placeholder-front');
    placeholderBack = document.querySelector('.placeholder-back');
    cardFront = document.querySelector('.card-front');
    cardBack = document.querySelector('.card-back');
    cardWrapper = document.querySelector('.card-wrapper');
}

// Set up all event listeners
function setupEventListeners() {
    // ID number formatting
    idNumberInput.addEventListener('input', handleIdNumberInput);

    // Flip card
    flipBtn.addEventListener('click', flipCard);

    // Re-translate when language selections change
    translateFromSelect.addEventListener('change', handleLanguageChange);
    translateToSelect.addEventListener('change', handleLanguageChange);

    // When user manually edits translated fields
    namePunjabiInput.addEventListener('input', handleManualNamePunjabiInput);
    addressNamePunjabiInput.addEventListener('input', handleManualAddressNamePunjabiInput);

    // Trigger translations while typing in English fields
    nameEnglishInput.addEventListener('input', debounce(autoTranslateName, 600));
    addressNameInput.addEventListener('input', debounce(autoTranslateAddressName, 600));

    // Trigger full address translation on changes to address selectors
    villageInput.addEventListener('change', handleAddressChange);
    districtInput.addEventListener('change', handleAddressChange);
    pincodeInput.addEventListener('change', handleAddressChange);

    addressTypeInput.addEventListener('change', updatePreview);
    addressTypePunjabiInput.addEventListener('change', updatePreview);
    genderInput.addEventListener('change', updatePreview);
    dobInput.addEventListener('change', updatePreview);

    // Image uploads
    passportPhotoInput.addEventListener('change', function () {
        handleImageUpload(this, photoPlaceholderFront);
    });

    barcodeInput.addEventListener('change', function () {
        handleImageUpload(this, placeholderFront);
        handleImageUpload(this, placeholderBack);
    });

    // Front/back dedicated uploads
    frontPicInput.addEventListener('change', function () {
        handleImageUpload(this, frontPicPlaceholder);
    });

    backPicInput.addEventListener('change', function () {
        handleImageUpload(this, backPicPlaceholder);
    });

    // Event listeners for label selects
    dobLabelSelect.addEventListener('change', function () {
        previewDobLabel.textContent = dobLabelSelect.value;
    });

    addressLabelEnSelect.addEventListener('change', function () {
        previewAddressLabelEn.textContent = addressLabelEnSelect.value;
    });

    addressLabelPaSelect.addEventListener('change', function () {
        previewAddressLabelPa.textContent = addressLabelPaSelect.value;
    });

    // Main action buttons
    previewBtn.addEventListener('click', handlePreviewClick);
    resetBtn.addEventListener('click', resetForm);
    downloadBtn.addEventListener('click', downloadVisibleSidePNG);
    downloadA4Btn.addEventListener('click', downloadA4PNG);

    // Ensure preview updates when translated inputs manually changed
    namePunjabiInput.addEventListener('input', updatePreview);
    addressNamePunjabiInput.addEventListener('input', updatePreview);
}

// Populate village dropdown
function populateVillageDropdown() {
    villages.forEach(village => {
        const option = document.createElement('option');
        option.value = village;
        option.textContent = village;
        villageInput.appendChild(option);
    });
}

// Initialize default values
function initializeDefaults() {
    dobLabelSelect.value = 'ਜਨਮ ਮਿਤੀ/DOB:';
    addressLabelEnSelect.value = 'Address :';
    addressLabelPaSelect.value = 'ਪਤਾ:';
}

// Event handlers
function handleIdNumberInput(e) {
    let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
    if (value.length > 12) value = value.substring(0, 12);
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) formatted += ' ';
        formatted += value[i];
    }
    e.target.value = formatted;
    previewIdNumber.textContent = formatted || '1234 5678 9012';
    previewIdNumberBack.textContent = formatted || '1234 5678 9012';
}

function flipCard() {
    card.classList.toggle('flipped');
}

function handleLanguageChange() {
    autoTranslateName();
    autoTranslateAddressName();
    autoTranslateFullAddress();
}

function handleManualNamePunjabiInput() {
    if (namePunjabiInput.value.trim()) namePunjabiInput.dataset.manual = '1';
    else delete namePunjabiInput.dataset.manual;
    updatePreview();
}

function handleManualAddressNamePunjabiInput() {
    if (addressNamePunjabiInput.value.trim()) addressNamePunjabiInput.dataset.manual = '1';
    else delete addressNamePunjabiInput.dataset.manual;
    updatePreview();
}

function handleAddressChange() {
    updatePreview();
    autoTranslateFullAddress();
}

function handlePreviewClick() {
    autoTranslateName();
    autoTranslateAddressName();
    autoTranslateFullAddress();
    setTimeout(updatePreview, 600);
}

// Debounce helper
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Translation helper using MyMemory API
async function translateText(text, from, to) {
    if (!text) return '';
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(from)}|${encodeURIComponent(to)}`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        if (json && json.responseData && json.responseData.translatedText) {
            return json.responseData.translatedText;
        }
        return '';
    } catch (err) {
        console.error('Translation error', err);
        return '';
    }
}

// Auto-translate name and address fields
async function autoTranslateName() {
    const from = translateFromSelect.value || 'en';
    const to = translateToSelect.value || 'pa';
    const text = nameEnglishInput.value.trim();
    if (!text) {
        if (!namePunjabiInput.dataset.manual) namePunjabiInput.value = '';
        updatePreview();
        return;
    }
    spinner.style.display = 'block';
    const translated = await translateText(text, from, to);
    if (!namePunjabiInput.dataset.manual) {
        namePunjabiInput.value = translated || text;
    }
    updatePreview();
    spinner.style.display = 'none';
}

async function autoTranslateAddressName() {
    const from = translateFromSelect.value || 'en';
    const to = translateToSelect.value || 'pa';
    const text = addressNameInput.value.trim();
    if (!text) {
        if (!addressNamePunjabiInput.dataset.manual) addressNamePunjabiInput.value = '';
        updatePreview();
        return;
    }
    spinner.style.display = 'block';
    const translated = await translateText(text, from, to);
    if (!addressNamePunjabiInput.dataset.manual) {
        addressNamePunjabiInput.value = translated || text;
    }
    updatePreview();
    spinner.style.display = 'none';
}

async function autoTranslateFullAddress() {
    const from = translateFromSelect.value || 'en';
    const to = translateToSelect.value || 'pa';
    const village = villageInput.value || '';
    const district = districtInput.value || '';
    const state = 'Punjab';
    const pincode = pincodeInput.value || '';

    const englishAddress = [village, district, state].filter(Boolean).join(', ') + (pincode ? ` - ${pincode}` : '');
    if (!englishAddress.trim()) {
        updatePreview();
        return;
    }
    spinner.style.display = 'block';
    const translated = await translateText(englishAddress, from, to);
    if (translated) {
        previewAddressPunjabi.textContent = translated;
    } else {
        previewAddressPunjabi.textContent = getPunjabiAddress(village, district, state, pincode);
    }
    spinner.style.display = 'none';
}

// Update preview function
function updatePreview() {
    spinner.style.display = 'block';
    setTimeout(() => {
        previewNameEnglish.textContent = nameEnglishInput.value || 'John Doe';
        previewNamePunjabi.textContent = namePunjabiInput.value || 'ਜੌਹਨ ਡੋ';
        previewDob.textContent = formatDate(dobInput.value) || '01/01/1990';
        applyGenderPreview();

        // Labels from selects
        previewDobLabel.textContent = dobLabelSelect.value || 'ਜਨਮ ਮਿਤੀ/DOB:';
        previewAddressLabelEn.textContent = addressLabelEnSelect.value || 'Address :';
        previewAddressLabelPa.textContent = addressLabelPaSelect.value || 'ਪਤਾ:';

        previewAddressType.textContent = addressTypeInput.value || 'W/O';
        previewAddressName.textContent = addressNameInput.value || 'John Doe';
        previewAddressTypePunjabi.textContent = addressTypePunjabiInput.value || 'W/O';
        previewAddressNamePunjabi.textContent = addressNamePunjabiInput.value || 'ਜੌਹਨ ਡੋ';

        const village = villageInput.value || 'Village 1';
        const district = districtInput.value || 'Amritsar';
        const state = 'Punjab';
        const pincode = pincodeInput.value || '143001';

        previewAddressEnglish.textContent = `${village}, ${district}, ${state} - ${pincode}`;

        if (!previewAddressPunjabi.textContent || previewAddressPunjabi.textContent.trim() === '') {
            previewAddressPunjabi.textContent = getPunjabiAddress(village, district, state, pincode);
        }

        spinner.style.display = 'none';
    }, 250);
}

// Apply gender preview using the gender input directly
function applyGenderPreview() {
    const genderVal = genderInput.value || '';
    previewGender.textContent = genderVal ? genderVal : 'ਮਰਦ/Male';
}

// Helper: local Punjabi mapping fallback for village/district/state
function getPunjabiAddress(village, district, state, pincode) {
    const villageMap = {
        'Ahmad Dhandi': 'ਅਹਿਮਦ ਢੰਡੀ',
        'Alam Ke': 'ਆਲਮ ਕੇ',
        'Amir Khas': 'ਅਮੀਰ ਖਾਸ',
        'Araianwala': 'ਅਰਾਇਆਂਵਾਲਾ',
        'Arnianwala': 'ਅਰਨੀਆਂਵਾਲਾ',
        'Attu Wala': 'ਅੱਟੂ ਵਾਲਾ',
        'Awan': 'ਅਵਾਨ',
        'Badalke Hithar': 'ਬਦਲਕੇ ਹਿਠਾਰ',
        'Badalke Uttar': 'ਬਦਲਕੇ ਉੱਤਰ',
        'Baghe Ke Hithar': 'ਬਾਗੇ ਕੇ ਹਿਠਾਰ',
        'Baghe Ke Uttar': 'ਬਾਗੇ ਕੇ ਉੱਤਰ',
        'Baghuwala': 'ਬਘੂਵਾਲਾ',
        'Bahadar Ke': 'ਬਹਾਦਰ ਕੇ',
        'Bahmani Wala': 'ਬਾਹਮਣੀ ਵਾਲਾ',
        'Baje Ke': 'ਬਾਜੇ ਕੇ',
        'Balalke Kamalwala': 'ਬਲਾਲਕੇ ਕਮਾਲਵਾਲਾ',
        'Taro Bari': 'ਤਾਰੋ ਬਾੜੀ'
    };

    const districtMap = {
        'Amritsar': 'ਅੰਮ੍ਰਿਤਸਰ',
        'Barnala': 'ਬਰਨਾਲਾ',
        'Bathinda': 'ਬਠਿੰਡਾ',
        'Faridkot': 'ਫਰੀਦਕੋਟ',
        'Fatehgarh Sahib': 'ਫਤਿਹਗੜ੍ਹ ਸਾਹਿਤ',
        'Fazilka': 'ਫਾਜ਼ਿਲਕਾ',
        'Ferozepur': 'ਫਿਰੋਜ਼ਪੁਰ',
        'Gurdaspur': 'ਗੁਰਦਾਸਪੁਰ',
        'Hoshiarpur': 'ਹੁਸ਼ਿਆਰਪੁਰ',
        'Jalandhar': 'ਜਲੰਧਰ',
        'Kapurthala': 'ਕਪੂਰਥਲਾ',
        'Ludhiana': 'ਲੁਧਿਆਣਾ',
        'Mansa': 'ਮਾਨਸਾ',
        'Moga': 'ਮੋਗਾ',
        'Mohali': 'ਮੋਹਾਲੀ',
        'Muktsar': 'ਮੁਕਤਸਰ',
        'Nawanshahr': 'ਨਵਾਂਸ਼ਹਿਰ',
        'Pathankot': 'ਪਠਾਨਕੋਟ',
        'Patiala': 'ਪਟਿਆਲਾ',
        'Ropar': 'ਰੋਝਾਰ',
        'Sangrur': 'ਸੰਗਰੂਰ',
        'Tarn Taran': 'ਤਰਨਤਾਰਨ'
    };

    const stateMap = { 'Punjab': 'ਪੰਜਾਬ' };

    return `${villageMap[village] || village}, ${districtMap[district] || district}, ${stateMap[state] || state} - ${pincode}`;
}

// Format date DD/MM/YYYY
function formatDate(dateString) {
    if (!dateString) return '';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    } catch (e) {
        return '';
    }
}

// Handle image uploads
function handleImageUpload(input, placeholder) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            placeholder.innerHTML = '';
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name || '';
            img.style.maxWidth = '100%';
            img.style.height = '100%';
            placeholder.appendChild(img);
            // Also attach data attribute for later use
            placeholder.dataset.imageData = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Reset form
function resetForm() {
    idNumberInput.value = '';
    nameEnglishInput.value = '';
    namePunjabiInput.value = '';
    delete namePunjabiInput.dataset.manual;
    dobInput.value = '';
    genderInput.value = '';
    addressTypeInput.value = '';
    addressNameInput.value = '';
    addressTypePunjabiInput.value = '';
    addressNamePunjabiInput.value = '';
    delete addressNamePunjabiInput.dataset.manual;
    villageInput.value = '';
    districtInput.value = '';
    pincodeInput.value = '';
    passportPhotoInput.value = '';
    barcodeInput.value = '';
    frontPicInput.value = '';
    backPicInput.value = '';

    // reset selects to defaults
    dobLabelSelect.value = 'ਜਨਮ ਮਿਤੀ/DOB:';
    addressLabelEnSelect.value = 'Address :';
    addressLabelPaSelect.value = 'ਪਤਾ:';

    previewNameEnglish.textContent = 'John Doe';
    previewNamePunjabi.textContent = 'ਜੌਹਨ ਡੋ';
    previewDob.textContent = '01/01/1990';
    previewGender.textContent = 'ਮਰਦ/Male';
    previewDobLabel.textContent = 'ਜਨਮ ਮਿਤੀ/DOB:';
    previewAddressLabelEn.textContent = 'Address :';
    previewAddressLabelPa.textContent = 'ਪਤਾ:';

    previewAddressType.textContent = 'W/O';
    previewAddressName.textContent = 'John Doe';
    previewAddressTypePunjabi.textContent = 'W/O';
    previewAddressNamePunjabi.textContent = 'ਜੌਹਨ ਡੋ';
    previewAddressEnglish.textContent = 'Village 1, Amritsar, Punjab - 143001';
    previewAddressPunjabi.textContent = 'విలేజ్ 1, ਅੰਮ੍ਰਿਤਸਰ, ਪੰਜਾਬ - 143001';
    previewIdNumber.textContent = '1234 5678 9012';
    previewIdNumberBack.textContent = '1234 5678 9012';

    photoPlaceholderFront.innerHTML = 'Pass Photo';
    placeholderFront.innerHTML = 'Barcode/QR';
    placeholderBack.innerHTML = 'Barcode/QR';
    frontPicPlaceholder.innerHTML = 'Front Pic';
    backPicPlaceholder.innerHTML = 'Back Pic';

    // Reset background colors
    cardFront.style.backgroundImage = '';
    cardFront.style.backgroundColor = '#f0f8ff';
    cardBack.style.backgroundImage = '';
    cardBack.style.backgroundColor = '#fff8f0';

    successMessage.style.display = 'none';
}

// Helper to deep-clone a side
function createCleanClone(sideElement) {
    const clone = sideElement.cloneNode(true);

    // copy computed styles that matter for backgrounds and sizing
    const computed = window.getComputedStyle(sideElement);
    clone.style.backgroundImage = computed.getPropertyValue('background-image');
    clone.style.backgroundSize = computed.getPropertyValue('background-size') || '100% 100%';
    clone.style.backgroundPosition = computed.getPropertyValue('background-position') || 'center';
    clone.style.backgroundRepeat = computed.getPropertyValue('background-repeat') || 'no-repeat';
    clone.style.width = computed.getPropertyValue('width') || sideElement.offsetWidth + 'px';
    clone.style.height = computed.getPropertyValue('height') || sideElement.offsetHeight + 'px';
    clone.style.padding = computed.getPropertyValue('padding');
    clone.style.boxSizing = 'border-box';
    clone.style.position = 'relative';
    clone.style.transform = 'none';

    // ensure any <img> tags use the stored data URLs if available
    clone.querySelectorAll('img').forEach(img => {
        // try to map by alt/name or fallback to dataset on original placeholder elements
        if (!img.src || img.src.startsWith('blob:') || img.src.startsWith('http')) {
            const originalPlaceholder = findMatchingOriginalPlaceholder(sideElement, img);
            if (originalPlaceholder && originalPlaceholder.dataset && originalPlaceholder.dataset.imageData) {
                img.src = originalPlaceholder.dataset.imageData;
            }
        }
        img.style.maxWidth = '100%';
        img.style.height = '100%';
        img.crossOrigin = 'anonymous';
    });

    return clone;
}

// Attempt to find the original placeholder element
function findMatchingOriginalPlaceholder(originalSide, clonedImg) {
    const candidates = originalSide.querySelectorAll('img, .photo-placeholder-front, .placeholder-front, .placeholder-back, .Front-Pic, .Back-Pic');
    for (const el of candidates) {
        if (el.tagName && el.tagName.toLowerCase() === 'img' && el.alt && clonedImg.alt && el.alt === clonedImg.alt) return el;
        if (el.parentElement && clonedImg.parentElement && el.parentElement.className === clonedImg.parentElement.className) return el;
        if (el.classList && clonedImg.parentElement && clonedImg.parentElement.classList) {
            for (const c of el.classList) {
                if (clonedImg.parentElement.classList.contains(c)) return el;
            }
        }
    }
    return null;
}

// Download visible side as PNG
async function downloadVisibleSidePNG() {
    try {
        spinner.style.display = 'block';

        const isFrontVisible = !card.classList.contains('flipped');
        const cardSide = isFrontVisible ? cardFront : cardBack;

        const clone = createCleanClone(cardSide);

        // match preview size
        const wrapperRect = cardWrapper.getBoundingClientRect();
        clone.style.width = wrapperRect.width + 'px';
        clone.style.height = wrapperRect.height + 'px';

        tempCanvasContainer.innerHTML = '';
        tempCanvasContainer.appendChild(clone);

        // high scale for crisp PNG
        const scale = 5;

        const canvas = await html2canvas(clone, {
            scale,
            useCORS: true,
            allowTaint: false,
            backgroundColor: null,
            logging: false,
            imageTimeout: 0,
            letterRendering: true
        });

        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `id-card-${isFrontVisible ? 'front' : 'back'}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        successMessage.style.display = 'block';
        setTimeout(() => { successMessage.style.display = 'none'; }, 3000);
    } catch (error) {
        console.error('Error generating PNG:', error);
        alert('Error generating PNG. Ensure images are accessible or uploaded (data URLs).');
    } finally {
        spinner.style.display = 'none';
    }
}

// Download both front and back positioned on A4 page as PNG
async function downloadA4PNG() {
    try {
        spinner.style.display = 'block';

        // create A4 container
        const a4 = document.createElement('div');
        a4.className = 'a4-page';

        // clones of both sides
        const frontClone = createCleanClone(cardFront);
        const backClone = createCleanClone(cardBack);

        // Make both clones have the preview card pixel dimensions
        const wrapperRect = cardWrapper.getBoundingClientRect();
        const cardCssWidth = wrapperRect.width + 'px';
        const cardCssHeight = wrapperRect.height + 'px';
        frontClone.style.width = cardCssWidth;
        frontClone.style.height = cardCssHeight;
        backClone.style.width = cardCssWidth;
        backClone.style.height = cardCssHeight;

        // position them inside A4: top 5mm, left and right 10mm margin
        frontClone.classList.add('a4-card');
        backClone.classList.add('a4-card');

        frontClone.style.top = '5mm';
        frontClone.style.left = '100px';
        frontClone.style.position = 'absolute';

        backClone.style.top = '5mm';
        backClone.style.right = '100px';
        backClone.style.position = 'absolute';

        a4.appendChild(frontClone);
        a4.appendChild(backClone);

        // Put into DOM off-screen
        tempCanvasContainer.innerHTML = '';
        tempCanvasContainer.appendChild(a4);

        // Choose scale for high-quality A4 PNG
        const scale = 4;

        const canvas = await html2canvas(a4, {
            scale,
            useCORS: true,
            allowTaint: false,
            backgroundColor: '#ffffff',
            logging: false,
            imageTimeout: 0,
            letterRendering: true
        });

        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `Id-Cards-A4.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        successMessage.style.display = 'block';
        setTimeout(() => { successMessage.style.display = 'none'; }, 3000);
    } catch (error) {
        console.error('Error generating A4 PNG:', error);
        alert('Error generating A4 PNG. Ensure images are accessible or uploaded (data URLs).');
    } finally {
        spinner.style.display = 'none';
        // cleanup
        setTimeout(() => { tempCanvasContainer.innerHTML = ''; }, 300);
    }
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

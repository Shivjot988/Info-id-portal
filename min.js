// Global variables to store DOM references
let card, flipBtn, previewBtn, resetBtn, downloadBtn, downloadA4Btn, spinner, exportFormatSelect;
let tempCanvasContainer, successMessage, jsPdfLoaded = false;
let idNumberInput, nameEnglishInput, namePunjabiInput, dobInput, genderInput, tehsilInput;
let addressTypeInput, addressNameInput, addressTypePunjabiInput, addressNamePunjabiInput;
let villageInput, pincodeInput;
let translateFromSelect, translateToSelect;
let passportPhotoInput, barcodeInput, photoPreviewThumb, barcodePreviewThumb;
let frontPicInput, backPicInput, frontPicPlaceholder, backPicPlaceholder, frontPicPreviewThumb, backPicPreviewThumb;
let dobLabelSelect, addressLabelEnSelect, addressLabelPaSelect;
let previewIdNumber, previewIdNumberBack, previewNameEnglish, previewNamePunjabi;
let previewDob, previewGender, previewDobLabel, previewAddressLabelEn, previewAddressLabelPa;
let previewAddressType, previewAddressName, previewAddressTypePunjabi, previewAddressNamePunjabi;
let previewAddressEnglish, previewAddressPunjabi;
let photoPlaceholderFront, placeholderFront, placeholderBack, cardFront, cardBack, cardWrapper;
let pincodeChoice, tehsilChoice, villageChoice;
let currentDistrict = '';
let isDownloading = false; // Security flag to prevent anti-screenshot during downloads

// Initialize the application
function init() {
    cacheDomElements();
    setupEventListeners();
    setupSecurityListeners();
    const choiceOptions = {
        searchEnabled: true,
        itemSelectText: '',
        shouldSort: false,
        allowHTML: false,
    };
    pincodeChoice = new Choices(pincodeInput, choiceOptions);
    tehsilChoice = new Choices(tehsilInput, choiceOptions);
    villageChoice = new Choices(villageInput, choiceOptions);

    populatePincodeDropdown();
    initializeDefaults();
    updatePreview();
}

function cacheDomElements() {
    card = document.querySelector('.card');
    flipBtn = document.getElementById('flip-btn');
    previewBtn = document.getElementById('preview-btn');
    resetBtn = document.getElementById('reset-btn');
    downloadBtn = document.getElementById('download-btn');
    downloadA4Btn = document.getElementById('download-a4-btn');
    exportFormatSelect = document.getElementById('export-format');
    spinner = document.getElementById('loading-spinner');
    tempCanvasContainer = document.getElementById('temp-canvas-container');
    successMessage = document.getElementById('success-message');

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
    pincodeInput = document.getElementById('pincode');
    tehsilInput = document.getElementById('tehsil');

    translateFromSelect = document.getElementById('translate-from');
    translateToSelect = document.getElementById('translate-to');

    passportPhotoInput = document.getElementById('passport-photo');
    photoPreviewThumb = document.getElementById('photo-preview-thumb');
    barcodeInput = document.getElementById('barcode');

    frontPicInput = document.getElementById('front-pic');
    backPicInput = document.getElementById('back-pic');
    frontPicPlaceholder = document.getElementById('front-pic-placeholder');
    backPicPlaceholder = document.getElementById('back-pic-placeholder');
    frontPicPreviewThumb = document.getElementById('front-pic-preview-thumb');
    backPicPreviewThumb = document.getElementById('back-pic-preview-thumb');
    barcodePreviewThumb = document.getElementById('barcode-preview-thumb');

    dobLabelSelect = document.getElementById('dob-label-select');
    addressLabelEnSelect = document.getElementById('address-label-en-select');
    addressLabelPaSelect = document.getElementById('address-label-pa-select');

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

function setupEventListeners() {
    idNumberInput.addEventListener('input', handleIdNumberInput);
    flipBtn.addEventListener('click', flipCard);

    translateFromSelect.addEventListener('change', handleLanguageChange);
    translateToSelect.addEventListener('change', handleLanguageChange);

    namePunjabiInput.addEventListener('input', handleManualNamePunjabiInput);
    addressNamePunjabiInput.addEventListener('input', handleManualAddressNamePunjabiInput);

    nameEnglishInput.addEventListener('input', debounce(autoTranslateName, 600));
    addressNameInput.addEventListener('input', debounce(autoTranslateAddressName, 600));

    villageInput.addEventListener('change', handleAddressChange);
    pincodeInput.addEventListener('change', handlePincodeChange);
    tehsilInput.addEventListener('change', handleTehsilChange);

    addressTypeInput.addEventListener('change', updatePreview);
    addressTypePunjabiInput.addEventListener('change', updatePreview);
    genderInput.addEventListener('change', updatePreview);
    dobInput.addEventListener('change', updatePreview);

    passportPhotoInput.addEventListener('change', function () {
        handleImageUpload(this, photoPlaceholderFront, photoPreviewThumb);
    });

    barcodeInput.addEventListener('change', function () {
        handleImageUpload(this, placeholderFront, barcodePreviewThumb);
        handleImageUpload(this, placeholderBack, barcodePreviewThumb);
    });

    frontPicInput.addEventListener('change', function () {
        handleImageUpload(this, frontPicPlaceholder, frontPicPreviewThumb);
    });

    backPicInput.addEventListener('change', function () {
        handleImageUpload(this, backPicPlaceholder, backPicPreviewThumb);
    });

    dobLabelSelect.addEventListener('change', function () {
        previewDobLabel.textContent = dobLabelSelect.value;
    });

    addressLabelEnSelect.addEventListener('change', function () {
        previewAddressLabelEn.textContent = addressLabelEnSelect.value;
    });

    addressLabelPaSelect.addEventListener('change', function () {
        previewAddressLabelPa.textContent = addressLabelPaSelect.value;
    });

    previewBtn.addEventListener('click', handlePreviewClick);
    resetBtn.addEventListener('click', resetForm);
    downloadBtn.addEventListener('click', downloadVisibleSidePNG);
    downloadA4Btn.addEventListener('click', downloadA4);

    namePunjabiInput.addEventListener('input', updatePreview);
    addressNamePunjabiInput.addEventListener('input', updatePreview);
}

function setupSecurityListeners() {
    // 1. Disable Developer Tools & Inspection Shortcuts
    document.addEventListener('keydown', e => {
        // Block F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
        }
        // Block Ctrl+Shift+I/J/C
        if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
            e.preventDefault();
        }
        // Block Ctrl+U (View Source), Ctrl+S (Save), Ctrl+P (Print)
        if ((e.ctrlKey || e.metaKey) && ['U', 'S', 'P'].includes(e.key.toUpperCase())) {
            e.preventDefault();
        }
    });

    // 2. Disable Mouse Interactions
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', e => e.preventDefault());

    // Prevent copying of the entire card, but allow text input selection (handled by CSS)
    document.addEventListener('selectstart', e => {
        const allowedTags = ['INPUT', 'TEXTAREA', 'SELECT'];
        if (!allowedTags.includes(e.target.tagName.toUpperCase())) {
            e.preventDefault();
        }
    });
}

function populatePincodeDropdown() {
    if (typeof pincodeList === 'undefined') return;
    const choices = pincodeList.map(pincode => ({
        value: pincode.value,
        label: pincode.text,
        customProperties: { district: pincode.district }
    }));
    pincodeChoice.setChoices(choices, 'value', 'label', true);
}

function populateTehsilDropdown(tehsils) {
    const choices = tehsils.map(tehsil => ({ value: tehsil, label: tehsil }));
    tehsilChoice.clearStore();
    tehsilChoice.setChoices(choices, 'value', 'label', true);
}

function populateVillageDropdown(villages) {
    let choices;
    if (villages.length > 0 && typeof villages[0] === 'object' && villages[0] !== null && 'name' in villages[0]) {
        choices = villages.map(village => {
            const cleanName = village.name.replace(/\s*\(\d+\)$/, '').trim();
            const cleanPunjabiName = (village.punjabi || village.punjabi_name || '').replace(/\s*\(\d+\)$/, '').trim();
            return {
                value: cleanName,
                label: village.name,
                customProperties: { punjabi: cleanPunjabiName }
            };
        });
    } else {
        choices = villages.map(village => ({ value: village, label: village }));
    }
    villageChoice.clearStore();
    villageChoice.setChoices(choices, 'value', 'label', true);
}

function initializeDefaults() {
    dobLabelSelect.value = 'ਜਨਮ ਮਿਤੀ/DOB:';
    addressLabelEnSelect.value = 'Address :';
    addressLabelPaSelect.value = 'ਪਤਾ:';
}

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

function handlePincodeChange() {
    const selectedItem = pincodeChoice.getValue();
    currentDistrict = (selectedItem && selectedItem.customProperties && selectedItem.customProperties.district) ? selectedItem.customProperties.district : '';

    if (typeof tehsilMap !== 'undefined') {
        const tehsils = tehsilMap[currentDistrict] || [];
        populateTehsilDropdown(tehsils);
    }
    
    villageChoice.clearStore();
    villageChoice.clearInput();
    handleAddressChange();
}

function handleTehsilChange() {
    const selectedTehsil = tehsilChoice.getValue(true);
    if (typeof villageMap !== 'undefined') {
        const villages = villageMap[selectedTehsil] || [];
        populateVillageDropdown(villages);
    }
    handleAddressChange();
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

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

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

    const selectedVillageChoice = villageChoice.getValue(); // Get full choice object
    const village = selectedVillageChoice ? selectedVillageChoice.value : '';
    const punjabiVillage = selectedVillageChoice && selectedVillageChoice.customProperties ? selectedVillageChoice.customProperties.punjabi : '';

    const tehsil = tehsilChoice.getValue(true) || '';
    const district = currentDistrict || '';
    const state = 'Punjab';
    const pincode = pincodeChoice.getValue(true) || '';

    const addressToTranslate = [tehsil, district, state].filter(Boolean).join(', ') + (pincode ? ` - ${pincode}` : '');

    if (!village && !addressToTranslate.trim()) {
        previewAddressPunjabi.textContent = ''; // Clear or set to default
        return;
    }

    spinner.style.display = 'block';
    try {
        const translatedRestOfAddress = await translateText(addressToTranslate, from, to);
        const punjabiVillagePart = punjabiVillage || village;
        const fullPunjabiAddress = [punjabiVillagePart, translatedRestOfAddress].filter(Boolean).join(', ');

        if (fullPunjabiAddress) {
            previewAddressPunjabi.textContent = fullPunjabiAddress;
        }
    } catch (err) {
        console.error('Translation error in autoTranslateFullAddress:', err);
        const englishAddress = [village, addressToTranslate].filter(Boolean).join(', ');
        previewAddressPunjabi.textContent = englishAddress;
    } finally {
        spinner.style.display = 'none';
    }
}

function updatePreview() {
    spinner.style.display = 'block';
    setTimeout(() => {
        previewNameEnglish.textContent = nameEnglishInput.value || 'John Doe';
        previewNamePunjabi.textContent = namePunjabiInput.value || 'ਜੌਹਨ ਡੋ';
        previewDob.textContent = formatDate(dobInput.value) || '01/01/1990';
        applyGenderPreview();

        previewDobLabel.textContent = dobLabelSelect.value || 'ਜਨਮ ਮਿਤੀ/DOB:';
        previewAddressLabelEn.textContent = addressLabelEnSelect.value || 'Address :';
        previewAddressLabelPa.textContent = addressLabelPaSelect.value || 'ਪਤਾ:';

        previewAddressType.textContent = addressTypeInput.value || 'W/O';
        previewAddressName.textContent = addressNameInput.value || 'John Doe';
        previewAddressTypePunjabi.textContent = addressTypePunjabiInput.value || 'W/O';
        previewAddressNamePunjabi.textContent = addressNamePunjabiInput.value || 'ਜੌਹਨ ਡੋ';

        const village = villageChoice.getValue(true) || 'Village 1';
        const tehsil = tehsilChoice.getValue(true) || 'Tehsil 1';
        const district = currentDistrict || 'Amritsar';
        const state = 'Punjab';
        const pincode = pincodeChoice.getValue(true) || '143001';

        previewAddressEnglish.textContent = `${village}, ${tehsil}, ${district}, ${state} - ${pincode}`;

        spinner.style.display = 'none';
    }, 250);
}

function applyGenderPreview() {
    const genderVal = genderInput.value || '';
    previewGender.textContent = genderVal ? genderVal : 'ਮਰਦ/Male';
}

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

// FIX: इमेज अपलोड में सीधे <img> टैग जोड़ना ताकि html2canvas ब्लर न करे
function handleImageUpload(input, placeholder, thumbnail) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageDataUrl = e.target.result;
            placeholder.dataset.imageData = imageDataUrl;

            if (thumbnail) {
                thumbnail.src = imageDataUrl;
                thumbnail.style.display = 'block';
            }

            placeholder.innerHTML = '';
            const img = document.createElement('img');
            img.src = imageDataUrl;
            img.alt = file.name || 'Uploaded Image';
            img.style.cssText = 'width: 100%; height: 100%; object-fit: fill;';
            placeholder.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

function resetForm() {
    document.querySelector('.card-creator').reset();

    delete namePunjabiInput.dataset.manual;
    delete addressNamePunjabiInput.dataset.manual;

    pincodeChoice.clearStore();
    pincodeChoice.clearInput();
    tehsilChoice.clearStore();
    tehsilChoice.clearInput();
    villageChoice.clearStore();
    villageChoice.clearInput();
    populatePincodeDropdown();

    [photoPlaceholderFront, placeholderFront, placeholderBack, frontPicPlaceholder, backPicPlaceholder].forEach(p => {
        p.innerHTML = p.title || '';
        p.style.backgroundImage = '';
        delete p.dataset.imageData;
    });
    photoPlaceholderFront.innerHTML = 'Pass Photo';
    placeholderFront.innerHTML = 'Barcode/QR';
    placeholderBack.innerHTML = 'Barcode/QR';
    frontPicPlaceholder.innerHTML = 'Front Pic';
    backPicPlaceholder.innerHTML = 'Back Pic';

    [photoPreviewThumb, barcodePreviewThumb, frontPicPreviewThumb, backPicPreviewThumb].forEach(thumb => {
        if (thumb) {
            thumb.removeAttribute('src');
            thumb.style.display = 'none';
        }
    });
    updatePreview();
    showSuccessMessage(false);
}

function showSuccessMessage(show = true) {
    if (show) {
        successMessage.style.display = 'block';
        setTimeout(() => { successMessage.style.display = 'none'; }, 3000);
    } else {
        successMessage.style.display = 'none';
    }
}

// FIX: Clone करते समय <img> एलिमेंट बनाकर ओरिजिनल रेजोल्यूशन बनाए रखना
async function createCleanClone(sideElement) {
    const clone = sideElement.cloneNode(true);
    clone.classList.add('render-card');

    const originalPlaceholders = sideElement.querySelectorAll('[data-image-data]');
    
    originalPlaceholders.forEach(originalEl => {
        const selector = originalEl.id ? `#${originalEl.id}` : `.${Array.from(originalEl.classList).filter(c => c !== 'choices__input').join('.')}`;
        const clonedEl = clone.querySelector(selector);

        if (clonedEl && originalEl.dataset.imageData) {
            clonedEl.innerHTML = '';
            const img = document.createElement('img');
            img.src = originalEl.dataset.imageData;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'fill';
            img.crossOrigin = 'anonymous';
            clonedEl.appendChild(img);
        }
    });

    return clone;
}

// FIX: Scale: 4 (Ultra HD Sharpness)
async function downloadVisibleSidePNG() {
    try {
        isDownloading = true;
        spinner.style.display = 'block';

        const isFrontVisible = !card.classList.contains('flipped');
        const cardSide = isFrontVisible ? cardFront : cardBack;

        const clone = await createCleanClone(cardSide);

        const container = document.createElement('div');
        container.className = 'download-card-container';
        container.appendChild(clone);

        tempCanvasContainer.innerHTML = '';
        tempCanvasContainer.appendChild(container);

        const canvas = await html2canvas(container, {
            scale: 4,
            useCORS: true,
            allowTaint: true,
            imageTimeout: 0,
            backgroundColor: null,
            logging: false
        });

        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `id-card-${isFrontVisible ? 'front' : 'back'}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        tempCanvasContainer.innerHTML = '';
        showSuccessMessage();
    } catch (error) {
        console.error('Error generating PNG:', error);
        alert('Error generating PNG. Ensure images are accessible or uploaded.');
    } finally {
        spinner.style.display = 'none';
    }
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        if (jsPdfLoaded) return resolve();
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            jsPdfLoaded = true;
            resolve();
        };
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.head.appendChild(script);
    });
}

// FIX: A4 Download HD Scale 4
async function downloadA4() {
    try {
        spinner.style.display = 'block';

        const a4Page = document.createElement('div');
        a4Page.className = 'a4-page';

        const cardContainer = document.createElement('div');
        cardContainer.className = 'a4-card-container';

        const frontCardWrapper = document.createElement('div');
        frontCardWrapper.className = 'a4-card';
        
        const backCardWrapper = document.createElement('div');
        backCardWrapper.className = 'a4-card';

        const frontClone = await createCleanClone(cardFront);
        const backClone = await createCleanClone(cardBack);

        frontCardWrapper.appendChild(frontClone);
        backCardWrapper.appendChild(backClone);

        cardContainer.appendChild(frontCardWrapper);
        cardContainer.appendChild(backCardWrapper);

        a4Page.appendChild(cardContainer);

        tempCanvasContainer.innerHTML = '';
        tempCanvasContainer.appendChild(a4Page);

        const canvas = await html2canvas(a4Page, {
            scale: 4,
            useCORS: true,
            allowTaint: true,
            imageTimeout: 0,
            backgroundColor: '#ffffff',
            logging: false
        });

        const format = exportFormatSelect.value;
        const fileName = `ID-Cards-A4.${format.split(',')[0]}`;
        const link = document.createElement('a');
        link.download = fileName;

        switch (format) {
            case 'pdf':
                await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF({
                    orientation: 'p',
                    unit: 'px',
                    format: 'a4'
                });
                const imgData = canvas.toDataURL('image/jpeg', 1.0);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(fileName);
                break;

            case 'jpg':
                link.href = canvas.toDataURL('image/jpeg', 1.0);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'webp':
                link.href = canvas.toDataURL('image/webp', 1.0);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'svg':
                const pngDataUrlForSvg = canvas.toDataURL('image/png');
                const svgContent = `<svg width="${canvas.width}" height="${canvas.height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <image href="${pngDataUrlForSvg}" width="${canvas.width}" height="${canvas.height}" />
                </svg>`;
                const svgBlob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
                link.href = URL.createObjectURL(svgBlob);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(link.href);
                break;

            case 'psd':
            case 'tiff':
            case 'bmp':
            case 'eps':
            case 'gif':
            case 'png':
            default:
                link.href = canvas.toDataURL('image/png');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;
        }

        tempCanvasContainer.innerHTML = '';
        showSuccessMessage();

    } catch (error) {
        console.error('Error generating A4 download:', error);
        alert('Error generating A4 download. Ensure images are accessible or uploaded.');
    } finally {
        spinner.style.display = 'none';
        isDownloading = false;
    }
}
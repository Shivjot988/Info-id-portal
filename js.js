const productData = [
{
},
];

/**
* ProductCard Component
* This returns an HTML string that represents a single product card.
* @param {Object} product - The product data object.
*/
function ProductCard(product) {
return `


<div class="tool-section">
    <div class="card-creator">
        <div class="form-section">
            <h3>Card Information</h3>

            <div class="form-row">
                <div class="form-group">
                    <label for="translate-from">Translate from</label>
                    <select id="translate-from">
                        <option value="en">English</option>
                        <option value="as">Assamese</option>
                        <option value="bn">Bengali</option>
                        <option value="gu">Gujarati</option>
                        <option value="hi">Hindi</option>
                        <option value="kn">Kannada</option>
                        <option value="kok">Konkani</option>
                        <option value="ml">Malayalam</option>
                        <option value="mr">Marathi</option>
                        <option value="mni">Manipuri</option>
                        <option value="ne">Nepali</option>
                        <option value="or">Odia</option>
                        <option value="pa">Punjabi</option>
                        <option value="ta">Tamil</option>
                        <option value="te">Telugu</option>
                        <option value="ur">Urdu</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="translate-to">Translate to</label>
                    <select id="translate-to">
                        <option value="pa">Punjabi</option>
                        <option value="en">English</option>
                        <option value="as">Assamese</option>
                        <option value="bn">Bengali</option>
                        <option value="gu">Gujarati</option>
                        <option value="hi">Hindi</option>
                        <option value="kn">Kannada</option>
                        <option value="kok">Konkani</option>
                        <option value="ml">Malayalam</option>
                        <option value="mr">Marathi</option>
                        <option value="mni">Manipuri</option>
                        <option value="ne">Nepali</option>
                        <option value="or">Odia</option>
                        <option value="ta">Tamil</option>
                        <option value="te">Telugu</option>
                        <option value="ur">Urdu</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="id-number">ID Number (12 digits)</label>
                    <input type="text" id="id-number" maxlength="14" placeholder="Enter 12 digit ID number">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="name-english">Name (English)</label>
                    <input type="text" id="name-english" placeholder="Enter name in English">
                </div>
                <div class="form-group">
                    <label for="name-punjabi">Name (Translated)</label>
                    <input type="text" id="name-punjabi" placeholder="Translated name will appear here">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="dob">Date of Birth</label>
                    <input type="date" id="dob">
                </div>
                <div class="form-group">
                    <label for="gender">Gender</label>
                    <select id="gender">
                        <option value="">Select Gender</option>
                        <option value="ਮਰਦ/MALE">ਮਰਦ/MALE</option>
                        <option value="ਔਰਤ/FEMALE">ਔਰਤ/FEMALE</option>
                        <option value="Other/OTHER">Other/OTHER</option>
                    </select>
                </div>
            </div>

            <div class="label-selects">
                <div class="form-row">
                    <div class="form-group">
                        <label for="dob-label-select">Choose DOB label</label>
                        <select id="dob-label-select">
                            <option value="ਜਨਮ ਮਿਤੀ/DOB:">select</option>
                            <option value="ਜਨਮ ਮਿਤੀ/DOB:">ਜਨਮ ਮਿਤੀ/DOB:</option>
                            <option value="जन्म तिथि/DOB:">जन्म तिथि/DOB:</option>
                            <option value="ਜਨਮ ਤਾਰੀਖ/DOB:">ਜਨਮ ਤਾਰੀਖ/DOB:</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="address-label-en-select">English Address</label>
                        <select id="address-label-en-select">
                            <option value="Address :">Address :</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="address-label-pa-select">Choose Address</label>
                        <select id="address-label-pa-select">
                            <option value="select">Select</option>
                            <option value="ਪਤਾ:">ਪਤਾ:</option>
                            <option value="ਠੀਕਨਾ :">ਠੀਕਨਾ :</option>
                            <option value="ঠিকানা: ">ঠিকানা: </option>
                            <option value="સરનામું:">સરનામું:</option>
                            <option value="पता :">पता :</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="address-type">Care Of Type (English)</label>
                    <select id="address-type">
                        <option value="">Select Type</option>
                        <option value="S/O">S/O (Son of)</option>
                        <option value="C/O">C/O (Care of)</option>
                        <option value="W/O">W/O (Wife of)</option>
                        <option value="D/O">D/O (Daughter of)</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="address-type-punjabi">Care Of Type (Translated)</label>
                    <select id="address-type-punjabi">
                        <option value="">Select Type</option>
                        <option value="S/O">S/O (ਪੁੱਤਰ)</option>
                        <option value="C/O">C/O (ਦੇਖਭਾਲ)</option>
                        <option value="W/O">W/O (ਪਤਨੀ)</option>
                        <option value="D/O">D/O (ਧੀ)</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="address-name">Father Name (English)</label>
                    <input type="text" id="address-name" placeholder="Enter name for address type">
                </div>

                <div class="form-group">
                    <label for="address-name-punjabi">Father Name (Translated)</label>
                    <input type="text" id="address-name-punjabi" placeholder="Translated address name will appear here">
                </div>
            </div>

            <div class="form-row">
                 <div class="form-group">
                    <label for="state">State</label>
                    <select id="state">
                        <option value="">Select State</option>
                    </select>
                </div>
                 <div class="form-group">
                     <label for="pincode">Pincode</label>
                     <select id="pincode">
                         <option value="">Select Pincode</option>
                     </select>
                 </div>
                 <div class="form-group">
                     <label for="tehsil">Tehsil</label>
                     <select id="tehsil">
                         <option value="">Select Tehsil</option>
                     </select>
                 </div>
                 <div class="form-group">
                     <label for="village">Village</label>
                     <select id="village">
                         <option value="">Select Village</option>
                     </select>
                 </div>
            </div>

            <h3>Card Photos</h3>
            <div class="form-row">
                <div class="form-group">
                    <label for="passport-photo">Passport Photo (Front)</label>
                    <div class="photo-upload-wrapper">
                        <input type="file" id="passport-photo" accept="image/*">
                        <img id="photo-preview-thumb" style="display: none;">
                    </div>
                </div>

                <div class="form-group">
                    <label for="barcode">Upload Barcode/QR Code</label>
                    <div class="photo-upload-wrapper">
                        <input type="file" id="barcode" accept="image/*">
                        <img id="barcode-preview-thumb" style="display: none;">
                    </div>
                </div>

                <div class="form-group">
                    <label for="front-pic">Front Side Photo (Front-Pic)</label>
                    <div class="photo-upload-wrapper">
                        <input type="file" id="front-pic" accept="image/*">
                        <img id="front-pic-preview-thumb" style="display: none;">
                    </div>
                </div>

                <div class="form-group">
                    <label for="back-pic">Back Side Photo (Back-Pic)</label>
                    <div class="photo-upload-wrapper">
                        <input type="file" id="back-pic" accept="image/*">
                        <img id="back-pic-preview-thumb" style="display: none;">
                    </div>
                </div>
            </div>

            <div class="controls">
                <button id="reset-btn" class="btn-outline" type="button">Reset</button>
                <button id="preview-btn" class="btn-primary" type="button">Update Preview</button>
            </div>
        </div>

        <div class="preview-section">
            <h3>Card Preview</h3>

            <div id="success-message" style="display: none; color: green; background: #e0ffe0; border: 1px solid #a0d0a0; padding: 10px; border-radius: 5px; text-align: center; margin-bottom: 10px;">Operation successful!</div>

            <div class="card-preview-container">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-front" aria-label="Card front">
                            <div class="Front-Pic" id="front-pic-placeholder">Front Pic</div>
                            <div class="photo-placeholder-front">Pass Photo</div>
                            <div class="placeholder-front">Barcode/QR</div>
                            <div class="card-details">
                                <p><span id="preview-name-english">John Doe</span></p>
                                <p><span id="preview-name-punjabi">ਜੌਹਨ ਡੋ</span></p>
                                <p><strong class="dbo" id="preview-dob-label">ਜਨਮ ਮਿਤੀ/DOB:</strong> <span id="preview-dob">01/01/1990</span></p>
                                <p><span id="preview-gender">ਮਰਦ/Male</span></p>
                            </div>
                            <div class="card-number" id="preview-id-number">1234 5678 9012</div>
                        </div>

                        <div class="card-back" aria-label="Card back">
                            <div class="Back-Pic" id="back-pic-placeholder">Back Pic</div>
                            <div class="address-details">
                                <p><span id="preview-address-label-en">Address :</span> <span id="preview-address-type">W/O</span> <span id="preview-address-name">John Doe</span></p>
                                <p id="preview-address-english">Village 1, Amritsar, Punjab - 143001</p>
                                <p><span id="preview-address-label-pa">ਪਤਾ:</span> <span id="preview-address-type-punjabi">W/O</span> <span id="preview-address-name-punjabi">ਜੌਹਨ ਡੋ</span></p>
                                <p id="preview-address-punjabi">ਵਿਲੇਜ 1, ਅੰਮ੍ਰਿਤਸਰ, ਪੰਜਾਬ - 143001</p>
                            </div>
                            <div class="placeholder-back">Barcode/QR</div>
                            <div class="card-number" id="preview-id-number-back">1234 5678 9012</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="controls-min">
                <button id="download-btn" class="btn-primary" type="button">Download ID Front</button>
                <select id="export-format">
                    <option value="jpg" selected>JPEG Image (*.jpg, *.jpeg)</option>
                    <option value="pdf">Adobe PDF / Photoshop PDF (*.pdf, *.pdp)</option>
                    <option value="png">PNG Image (*.png)</option>
                    <option value="psd">Photoshop Document (*.psd, *.pdd)</option>
                    <option value="tiff">TIFF Image (*.tif, *.tiff)</option>
                    <option value="bmp">BMP Image (*.bmp)</option>
                    <option value="eps">Photoshop EPS (*.eps)</option>
                    <option value="gif">GIF Image (*.gif)</option>
                    <option value="webp">WEBP Image (*.webp)</option>
                </select>
                <button id="download-a4-btn" class="btn-primary" type="button">Download A4</button>
                <button id="flip-btn" class="btn-outline" type="button">Flip Card</button>
            </div>

            <div class="spinner" id="loading-spinner" aria-hidden="true"></div>
        </div>
    </div>
</div>
`;
}

/**
* ProductList Component
* This renders all product cards into the main container.
* @param {Array} products - An array of product objects.
*/
function ProductList(products) {
    const cardsHTML = products.map(item => ProductCard(item)).join('');
    const container = document.getElementById('container');
    container.innerHTML = cardsHTML;

    // Initialize all the event listeners and logic from min.js
    if (typeof init === 'function') {
        init();
    }
}

// Start the application after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    ProductList(productData);

    // --- Loading Indicators Logic ---
    const topLoadingBarContainer = document.getElementById('top-loading-bar-container');
    const loadingOverlay = document.getElementById('loading-overlay');

    window.addEventListener('load', () => {
        // A small delay ensures the animations are visible before they fade out.
        setTimeout(() => {
            if (topLoadingBarContainer) {
                topLoadingBarContainer.style.opacity = '0';
                setTimeout(() => { topLoadingBarContainer.style.display = 'none'; }, 500); // Match transition
            }
            if (loadingOverlay) {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => { loadingOverlay.style.display = 'none'; }, 500); // Match transition
            }
        }, 500);
    });
});
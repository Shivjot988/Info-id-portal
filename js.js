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



<div class="success-message" id="success-message">ID card generated successfully!</div>

<div class="tool-section">
    <div class="custom-ill">
        <h2>Create Your ID Card</h2>
        <p>Fill in the details below to design your custom ID card</p>
    </div>

    <div class="card-creator">
        <div class="form-section">
            <h3>Card Information</h3>

            <!-- Translation controls -->
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
            </div>

            <div class="form-group">
                <label for="id-number">ID Number (12 digits)</label>
                <input type="text" id="id-number" maxlength="14" placeholder="Enter 12 digit ID number">
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

            <!-- Translation label-selects block -->
            <div class="label-selects">
                <div class="form-row">
                    <div class="form-group">
                        <label for="dob-label-select">Choose DOB label</label>
                        <select id="dob-label-select">
                            <option value="ਜਨਮ ਮਿਤੀ/DOB:">select</option>
                            <option value="ਜਨਮ ਮਿਤੀ/DOB:">ਜਨਮ ਮਿਤੀ/DOB:</option>
                            <option value="जन्म तिथि/DOB:">जन्म तिथि/DOB:</option>
                            <option value="জন্ম তারিখ/DOB:">জন্ম তারিখ/DOB:</option>
                            <option value="పుట్టిన తేదీ/DOB:">పుట్టిన తేదీ/DOB:</option>
                            <option value="જુનમ તારીખ/DOB:">જન્મ તારીખ/DOB:</option>
                        </select>
                    </div>

                </div>

                <div class="form-row" style="margin-top:10px;">
                    <div class="form-group">
                        <label for="address-label-en-select">English Address</label>
                        <select id="address-label-en-select">
                        <option value="Address :">Select</option>
                        <option value="Address :">Address :</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="address-label-pa-select">Choose Address</label>
                        <select id="address-label-pa-select">
                        <option value="ਪਤਾ:">Select</option>
                        <option value="ঠিকনা :">ঠিকনা :</option>
                        <option value="ਪਤਾ:">ਪਤਾ:</option>
                        <option value="पता :">पता :</option>
                        <option value="ঠিকানা: ">ঠিকানা: </option>
                        <option value="સરનામું:">સરનામું:</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="address-type"> Care Of Type(English)</label>
                    <select id="address-type">
                        <option value="">Select Type</option>
                        <option value="S/O">S/O (Son of)</option>
                        <option value="C/O">C/O (Care of)</option>
                        <option value="W/O">W/O (Wife of)</option>
                        <option value="D/O">D/O (Daughter of)</option>
                    </select>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="address-type-punjabi"> Care Of Type (Translated)</label>
                        <select id="address-type-punjabi">
                            <option value="">Select Type</option>
                            <option value="S/O">S/O (ਪੁੱਤਰ)</option>
                            <option value="C/O">C/O (ਦੇਖਭਾਲ)</option>
                            <option value="W/O">W/O (ਪਤਨੀ)</option>
                            <option value="D/O">D/O (ਧੀ)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="address-name"> Father Name (English)</label>
                        <input type="text" id="address-name" placeholder="Enter name for address type">
                    </div>
                </div>
                <div class="form-group">
                    <label for="address-name-punjabi">Father Name (Translated)</label>
                    <input type="text" id="address-name-punjabi" placeholder="Translated address name will appear here">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="pincode">Pincode</label>
                    <select id="pincode">
                        <option value="">Select Pincode</option>
                        <option value="143001">143001 (Amritsar)</option>
                        <option value="148101">148101 (Barnala)</option>
                        <option value="151001">151001 (Bathinda)</option>
                        <option value="151203">151203 (Faridkot)</option>
                        <option value="140406">140406 (Fatehgarh Sahib)</option>
                        <option value="140407">140407 (Fatehgarh Sahib)</option>
                        <option value="152123">152123 (Fazilka)</option>
                        <option value="152024">152024 (Fazilka)</option>
                        <option value="152001">152001 (Ferozepur)</option>
                        <option value="143505">143505 (Gurdaspur)</option>
                        <option value="146001">146001 (Hoshiarpur)</option>
                        <option value="144001">144001 (Jalandhar)</option>
                        <option value="144601">144601 (Kapurthala)</option>
                        <option value="141001">141001 (Ludhiana)</option>
                        <option value="151505">151505 (Mansa)</option>
                        <option value="142001">142001 (Moga)</option>
                        <option value="160055">160055 (Mohali)</option>
                        <option value="152026">152026 (Muktsar)</option>
                        <option value="144514">144514 (Nawanshahr)</option>
                        <option value="145001">145001 (Pathankot)</option>
                        <option value="147001">147001 (Patiala)</option>
                        <option value="140001">140001 (Ropar)</option>
                        <option value="148001">148001 (Sangrur)</option>
                        <option value="143401">143401 (Tarn Taran)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="district">District</label>
                    <select id="district">
                        <option value="">Select District</option>
                        <option value="Amritsar">Amritsar</option>
                        <option value="Barnala">Barnala</option>
                        <option value="Bathinda">Bathinda</option>
                        <option value="Faridkot">Faridkot</option>
                        <option value="Fatehgarh Sahib">Fatehgarh Sahib</option>
                        <option value="Fazilka">Fazilka</option>
                        <option value="Ferozepur">Ferozepur</option>
                        <option value="Gurdaspur">Gurdaspur</option>
                        <option value="Hoshiarpur">Hoshiarpur</option>
                        <option value="Jalandhar">Jalandhar</option>
                        <option value="Kapurthala">Kapurthala</option>
                        <option value="Ludhiana">Ludhiana</option>
                        <option value="Mansa">Mansa</option>
                        <option value="Moga">Moga</option>
                        <option value="Muktsar">Muktsar</option>
                        <option value="Pathankot">Pathankot</option>
                        <option value="Patiala">Patiala</option>
                        <option value="Rupnagar">Rupnagar</option>
                        <option value="Sahibzada Ajit Singh Nagar">Sahibzada Ajit Singh Nagar</option>
                        <option value="Sangrur">Sangrur</option>
                        <option value="Shahid Bhagat Singh Nagar">Shahid Bhagat Singh Nagar</option>
                        <option value="Tarn Taran">Tarn Taran</option>
                        <option value="Mohali">Mohali</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="village">Village</label>
                    <select id="village">
                        <option value="">Select Village</option>
                        <!-- populated by JS -->
                    </select>
                </div>

            </div>

            <h3>Card Photos</h3>
            <div class="form-row">
                <div class="form-group">
                    <label for="passport-photo">Passport Photo (Front)</label>
                    <input type="file" id="passport-photo" accept="image/*">
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="barcode">Upload Barcode/QR Code</label>
                        <input type="file" id="barcode" accept="image/*">
                    </div>
                </div>

                <div class="form-group">
                    <label for="front-pic">Front Side Photo (Front-Pic)</label>
                    <input type="file" id="front-pic" accept="image/*">
                </div>

                <div class="form-group">
                    <label for="back-pic">Back Side Photo (Back-Pic)</label>
                    <input type="file" id="back-pic" accept="image/*">
                </div>
            </div>
            <div class="controls">
                <button id="reset-btn" class="btn-outline" type="button">Reset</button>
                <button id="preview-btn" class="btn-primary" type="button">Update Preview</button>
            </div>
        </div>

        <div class="preview-section">
            <h3>Card Preview</h3>

            <div class="card-preview-container">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="card-front" aria-label="Card front">
                            <!-- original small photo placeholder -->
                            <div class="photo-placeholder-front">Pass Photo</div>

                            <!-- larger front-pic placeholder -->
                            <div class="Front-Pic" id="front-pic-placeholder">Front Pic</div>

                            <div class="placeholder-front">Barcode/QR</div>
                            <div class="card-details">
                                <p><span id="preview-name-english">John Doe</span></p>
                                <p><span id="preview-name-punjabi">ਜੌਹਨ ਡੋ</span></p>
                                <p><strong class="dbo" id="preview-dob-label">ਜਨਮ ਮਿਤੀ/DOB:</strong> <span
                                        id="preview-dob">01/01/1990</span></p>
                                <p><span id="preview-gender">ਮਰਦ/Male</span></p>
                            </div>

                            <div class="card-number" id="preview-id-number">1234 5678 9012</div>
                        </div>

                        <div class="card-back" aria-label="Card back">
                            <div class="address-details">
                                <p><span id="preview-address-label-en">Address :</span> <span
                                        id="preview-address-type">W/O</span> <span id="preview-address-name">John
                                        Doe</span></p>
                                <p id="preview-address-english">Village 1, Amritsar, Punjab - 143001</p>
                                <p><span id="preview-address-label-pa">ਪਤਾ:</span> <span
                                        id="preview-address-type-punjabi">W/O</span> <span
                                        id="preview-address-name-punjabi">ਜੌਹਨ ਡੋ</span></p>
                                <p id="preview-address-punjabi">ਵਿਲੇਜ 1, ਅੰਮ੍ਰਿਤਸਰ, ਪੰਜਾਬ - 143001</p>
                            </div>

                            <!-- larger back-pic placeholder -->
                            <div class="Back-Pic" id="back-pic-placeholder">Back Pic</div>

                            <div class="placeholder-back">Barcode/QR</div>
                            <div class="card-number" id="preview-id-number-back">1234 5678 9012</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="controls-min">
                <button id="download-btn" class="btn-primary">Download ID Singal</button>
                <button id="download-a4-png-btn" class="btn-primary">Download A4</button>
                <button id="flip-btn" class="btn-outline">Flip Card</button>
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
// Call the ProductCard component for each product and join the resulting strings
const cardsHTML = products.map(item => ProductCard(item)).join('');

// Add the generated HTML to the container
const container = document.getElementById('container');
container.innerHTML = cardsHTML;
}

// Start the application after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
ProductList(productData);
});

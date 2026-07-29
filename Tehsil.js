
// Tehsil data mapped to districts
const tehsilMap = {
    'Amritsar': [
        { name: 'Ajnala', punjabi: 'ਅਜਨਾਲਾ' },
        { name: 'Amritsar-I', punjabi: 'ਅੰਮ੍ਰਿਤਸਰ-I' },
        { name: 'Amritsar-II', punjabi: 'ਅੰਮ੍ਰਿਤਸਰ-II' },
        { name: 'Baba Bakala', punjabi: 'ਬਾਬਾ ਬਕਾਲਾ' },
        { name: 'Jandiala Guru', punjabi: 'ਜੰਡਿਆਲਾ ਗੁਰੂ' },
        { name: 'Attari', punjabi: 'ਅਟਾਰੀ' },
        { name: 'Ramdas', punjabi: 'ਰਾਮਦਾਸ' },
        { name: 'Beas', punjabi: 'ਬਿਆਸ' },
        { name: 'Tarsikka', punjabi: 'ਤਰਸਿੱਕਾ' },
        { name: 'Majitha', punjabi: 'ਮਜੀਠਾ' },
        { name: 'Lopoke', punjabi: 'ਲੋਪੋਕੇ' },
        { name: 'Raja Sansi', punjabi: 'ਰਾਜਾ ਸਾਂਸੀ' }
    ],
    'Barnala': [
        { name: 'Barnala', punjabi: 'ਬਰਨਾਲਾ' },
        { name: 'Tapa', punjabi: 'ਤਪਾ' },
        { name: 'Mehal Kalan', punjabi: 'ਮਹਿਲ ਕਲਾਂ' }
    ],
    'Bathinda': [
        { name: 'Bathinda', punjabi: 'ਬਠਿੰਡਾ' },
        { name: 'Rampura Phul', punjabi: 'ਰਾਮਪੁਰਾ ਫੂਲ' },
        { name: 'Talwandi Sabo', punjabi: 'ਤਲਵੰਡੀ ਸਾਬੋ' },
        { name: 'Maur', punjabi: 'ਮੌੜ' }
    ],
    'Faridkot': [
        { name: 'Faridkot', punjabi: 'ਫਰੀਦਕੋਟ' },
        { name: 'Kotkapura', punjabi: 'ਕੋਟਕਪੂਰਾ' },
        { name: 'Jaitu', punjabi: 'ਜੈਤੋ' }
    ],
    'Fatehgarh Sahib': [
        { name: 'Fatehgarh Sahib', punjabi: 'ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ' },
        { name: 'Bassi Pathana', punjabi: 'ਬਸੀ ਪਠਾਣਾਂ' },
        { name: 'Amloh', punjabi: 'ਅਮਲੋਹ' },
        { name: 'Khamano', punjabi: 'ਖਮਾਣੋਂ' }
    ],
    'Fazilka': [
        { name: 'Fazilka', punjabi: 'ਫਾਜ਼ਿਲਕਾ' },
        { name: 'Abohar', punjabi: 'ਅਬੋਹਰ' },
        { name: 'Jalalabad', punjabi: 'ਜਲਾਲਾਬਾਦ' }
    ],
    'Firozpur': [
        { name: 'Firozpur', punjabi: 'ਫਿਰੋਜ਼ਪੁਰ' },
        { name: 'Zira', punjabi: 'ਜ਼ੀਰਾ' },
        { name: 'Guruharsahai', punjabi: 'ਗੁਰੂਹਰਸਹਾਏ' }
    ],
    'Gurdaspur': [
        { name: 'Gurdaspur', punjabi: 'ਗੁਰਦਾਸਪੁਰ' },
        { name: 'Batala', punjabi: 'ਬਟਾਲਾ' },
        { name: 'Dera Baba Nanak', punjabi: 'ਡੇਰਾ ਬਾਬਾ ਨਾਨਕ' }
    ],
    'Hoshiarpur': [
        { name: 'Hoshiarpur', punjabi: 'ਹੁਸ਼ਿਆਰਪੁਰ' },
        { name: 'Dasuya', punjabi: 'ਦਸੂਆ' },
        { name: 'Mukerian', punjabi: 'ਮੁਕੇਰੀਆਂ' },
        { name: 'Garhshankar', punjabi: 'ਗੜ੍ਹਸ਼ੰਕਰ' }
    ],
    'Jalandhar': [
        { name: 'Jalandhar-I', punjabi: 'ਜਲੰਧਰ-I' },
        { name: 'Jalandhar-II', punjabi: 'ਜਲੰਧਰ-II' },
        { name: 'Nakodar', punjabi: 'ਨਕੋਦਰ' },
        { name: 'Phillaur', punjabi: 'ਫਿਲੌਰ' },
        { name: 'Shahkot', punjabi: 'ਸ਼ਾਹਕੋਟ' }
    ],
    'Kapurthala': [
        { name: 'Kapurthala', punjabi: 'ਕਪੂਰਥਲਾ' },
        { name: 'Phagwara', punjabi: 'ਫਗਵਾੜਾ' },
        { name: 'Sultanpur Lodhi', punjabi: 'ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ' },
        { name: 'Bholath', punjabi: 'ਭੁਲੱਥ' }
    ],
    'Ludhiana': [
        { name: 'Ludhiana (East)', punjabi: 'ਲੁਧਿਆਣਾ (ਪੂਰਬੀ)' },
        { name: 'Ludhiana (West)', punjabi: 'ਲੁਧਿਆਣਾ (ਪੱਛਮੀ)' },
        { name: 'Jagraon', punjabi: 'ਜਗਰਾਉਂ' },
        { name: 'Khanna', punjabi: 'ਖੰਨਾ' },
        { name: 'Payal', punjabi: 'ਪਾਇਲ' },
        { name: 'Raikot', punjabi: 'ਰਾਏਕੋਟ' },
        { name: 'Samrala', punjabi: 'ਸਮਰਾਲਾ' }
    ],
    'Malerkotla': [
        { name: 'Malerkotla', punjabi: 'ਮਲੇਰਕੋਟਲਾ' },
        { name: 'Amargarh', punjabi: 'ਅਮਰਗੜ੍ਹ' }
    ],
    'Mansa': [
        { name: 'Mansa', punjabi: 'ਮਾਨਸਾ' },
        { name: 'Sardulgarh', punjabi: 'ਸਰਦੂਲਗੜ੍ਹ' },
        { name: 'Budhlada', punjabi: 'ਬੁਢਲਾਡਾ' }
    ],
    'Moga': [
        { name: 'Moga', punjabi: 'ਮੋਗਾ' },
        { name: 'Bagha Purana', punjabi: 'ਬਾਘਾ ਪੁਰਾਣਾ' },
        { name: 'Nihal Singh Wala', punjabi: 'ਨਿਹਾਲ ਸਿੰਘ ਵਾਲਾ' }
    ],
    'Sri Muktsar Sahib': [
        { name: 'Sri Muktsar Sahib', punjabi: 'ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ' },
        { name: 'Gidderbaha', punjabi: 'ਗਿੱਦੜਬਾਹਾ' },
        { name: 'Malout', punjabi: 'ਮਲੋਟ' }
    ],
    'Pathankot': [
        { name: 'Pathankot', punjabi: 'ਪਠਾਨਕੋਟ' },
        { name: 'Dhar Kalan', punjabi: 'ਧਾਰ ਕਲਾਂ' },
        { name: 'Sujanpur', punjabi: 'ਸੁਜਾਨਪੁਰ' }
    ],
    'Patiala': [
        { name: 'Patiala', punjabi: 'ਪਟਿਆਲਾ' },
        { name: 'Nabha', punjabi: 'ਨਾਭਾ' },
        { name: 'Patran', punjabi: 'ਪਾਤੜਾਂ' },
        { name: 'Rajpura', punjabi: 'ਰਾਜਪੁਰਾ' },
        { name: 'Samana', punjabi: 'ਸਮਾਣਾ' }
    ],
    'Rupnagar': [
        { name: 'Rupnagar', punjabi: 'ਰੂਪਨਗਰ' },
        { name: 'Anandpur Sahib', punjabi: 'ਆਨੰਦਪੁਰ ਸਾਹਿਬ' },
        { name: 'Nangal', punjabi: 'ਨੰਗਲ' },
        { name: 'Chamkaur Sahib', punjabi: 'ਚਮਕੌਰ ਸਾਹਿਬ' }
    ],
    'SAS Nagar (Mohali)': [
        { name: 'Mohali', punjabi: 'ਮੋਹਾਲੀ' },
        { name: 'Dera Bassi', punjabi: 'ਡੇਰਾਬਸੀ' },
        { name: 'Kharar', punjabi: 'ਖਰੜ' }
    ],
    'Sangrur': [
        { name: 'Sangrur', punjabi: 'ਸੰਗਰੂਰ' },
        { name: 'Dhuri', punjabi: 'ਧੂਰੀ' },
        { name: 'Lehra', punjabi: 'ਲਹਿਰਾ' },
        { name: 'Moonak', punjabi: 'ਮੂਣਕ' },
        { name: 'Sunam', punjabi: 'ਸੁਨਾਮ' }
    ],
    'Shaheed Bhagat Singh Nagar': [
        { name: 'Nawanshahr', punjabi: 'ਨਵਾਂਸ਼ਹਿਰ' },
        { name: 'Balachaur', punjabi: 'ਬਲਾਚੌਰ' },
        { name: 'Banga', punjabi: 'ਬੰਗਾ' }
    ],
    'Tarn Taran': [
        { name: 'Tarn Taran', punjabi: 'ਤਰਨ ਤਾਰਨ' },
        { name: 'Patti', punjabi: 'ਪੱਟੀ' },
        { name: 'Khadoor Sahib', punjabi: 'ਖਡੂਰ ਸਾਹਿਬ' }
    ]
};

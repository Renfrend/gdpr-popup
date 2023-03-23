let cookieConsentOptions = {
    'textPopup': 'We use cookies on this website to enhance your user experience and to analyze site usage. By clicking "Accept" or by continuing to use this website, you consent to the use of cookies. You can manage and change your cookie settings at any time through your browser settings.\n<a href="https://hemansings.com/privacy-policy/">privacy policy</a>.',
    'textButtonAccept': 'Accept all',
    'textButtonConfigure': 'Configuring choices',
    'textButtonSave': 'Save choices',
    authorization: [
        {
            textAuthorization: 'Right to object to processing',
            nameCookieAuthorization: 'objectToProcessing'
        },
        {
            textAuthorization: 'Rights related to automated decision making and profiling (in the case of tracking through cookies)',
            nameCookieAuthorization: 'automatedDecision'
        },
    ]
}
popupConsent(cookieConsentOptions);


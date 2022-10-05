import CookieConsent from 'react-cookie-consent';

const CookieConfirmation = () => {
  return (
    <>
      <CookieConsent
      location="bottom"
        cookieName="cookies"
        style={{ background: '#000'}}
        buttonText="Confirm"
        buttonStyle={{
          border: '2px solid #000',
          borderRadius: '10px',
          outline: 'none',
          background: "#e0af5b",
          padding: '5px',
          color: '#000',
          boxShadow: "0px 0px 3px 0px rgba(255, 255, 255, 0.7)",
        }}
        expires={365}
      >
        <p>We use cookies to improve the user's browsing experience.</p>
      </CookieConsent>
    </>
  );
};

export default CookieConfirmation;
import { useState, useEffect } from 'react';

interface MailingListSignupProps {
  isOpen: boolean;
  onClose: () => void;
}

const MailingListSignup = ({ isOpen, onClose }: MailingListSignupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formLoaded, setFormLoaded] = useState(false);

  // Load Constant Contact script when modal is opened
  useEffect(() => {
    if (isOpen && !formLoaded) {
      // Create script element for Constant Contact
      const script = document.createElement('script');
      script.src = 'https://static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js';
      script.async = true;
      script.onload = () => {
        setFormLoaded(true);
        // Initialize the form once script is loaded
        if (window._ctct_m) {
          window._ctct_m.push(['signUpFormWidget', { formId: 'YOUR_FORM_ID_HERE' }]);
        }
      };
      document.body.appendChild(script);

      return () => {
        // Clean up script when component unmounts
        document.body.removeChild(script);
      };
    }
  }, [isOpen, formLoaded]);

  // Simple form submission for demonstration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // This is just for demonstration - the actual submission will be handled by Constant Contact's form
      // We're simulating success here
      setTimeout(() => {
        setSuccess(true);
        setEmail('');
        
        // Close the modal after 3 seconds on success
        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 3000);
        
        setIsSubmitting(false);
      }, 1000);
    } catch (err) {
      setError('An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden transform transition-all">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="p-6">
            <h3 className="text-2xl font-bold text-center mb-6 text-accent-color">Join Our Mailing List</h3>
            
            {success ? (
              <div className="text-center py-8">
                <svg className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg font-medium">Thank you for subscribing!</p>
                <p className="text-gray-600 mt-2">You've been added to our mailing list.</p>
              </div>
            ) : (
              <>
                {/* Constant Contact Form Container */}
                <div id="ctct-form-container" className="mb-4">
                  {/* This div will be populated by Constant Contact's script */}
                  <div className="ctct-form-embed form_id_YOUR_FORM_ID_HERE"></div>
                </div>
                
                {/* Fallback form in case Constant Contact script fails to load */}
                {!formLoaded && (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                        required
                      />
                    </div>
                    
                    {error && (
                      <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                        {error}
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent-color text-white py-2 px-4 rounded-md hover:bg-accent-color/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-color disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </button>
                    
                    <p className="text-xs text-gray-500 mt-4 text-center">
                      By subscribing, you agree to receive emails from us. You can unsubscribe at any time.
                    </p>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this to make TypeScript happy with the _ctct_m global
declare global {
  interface Window {
    _ctct_m: any[];
  }
}

export default MailingListSignup; 
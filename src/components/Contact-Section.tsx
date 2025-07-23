import axios from 'axios';
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'


interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactSection() {
  const [result, setResult] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) return "Name can only contain letters, spaces, hyphens, and apostrophes";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return undefined; // Phone is optional
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,}$/;
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10) return "Message must be at least 10 characters";
    if (message.trim().length > 1000) return "Message must be less than 1000 characters";
    return undefined;
  };

  const validateForm = (formData: Record<string, string>): FormErrors => {
    const newErrors: FormErrors = {};
    
    const nameError = validateName(formData.name || '');
    if (nameError) newErrors.name = nameError;

    const emailError = validateEmail(formData.email || '');
    if (emailError) newErrors.email = emailError;

    const phoneError = validatePhone(formData.phone || '');
    if (phoneError) newErrors.phone = phoneError;

    const messageError = validateMessage(formData.message || '');
    if (messageError) newErrors.message = messageError;

    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Mark field as touched
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate individual field
    let fieldError: string | undefined;
    switch (name) {
      case 'name':
        fieldError = validateName(value);
        break;
      case 'email':
        fieldError = validateEmail(value);
        break;
      case 'phone':
        fieldError = validatePhone(value);
        break;
      case 'message':
        fieldError = validateMessage(value);
        break;
    }

    // Update errors
    setErrors(prev => ({
      ...prev,
      [name]: fieldError
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResult("Sending....");
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Convert FormData to object for validation (excluding access_key)
    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (key !== 'access_key') {
        formObject[key] = value.toString();
      }
    });

    // Validate form
    const formErrors = validateForm(formObject);
    
    // Mark all fields as touched
    const allFieldsTouched = Object.keys(formObject).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouched(allFieldsTouched);

    // If there are errors, don't submit
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setResult("Please fix the errors below");
      setIsLoading(false);
      return;
    }

    // Clear errors if validation passes
    setErrors({});
    
    // Create the final object to send with access_key included
    const submitData = {
      ...formObject,
      access_key: "17d270e4-f8e9-4cf7-a796-9d2e591a1eb1"
    };

    try {
      const response = await axios.post("https://api.web3forms.com/submit", submitData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setResult("Form Submitted Successfully");
        form.reset();
        setTouched({});
        setErrors({});
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Ready to streamline your logistics? Contact our expert team for personalized freight solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-500">+971 544263686</p>
                  <p className="text-sm text-gray-500">24/7 Support Available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-500">info@shipzo.ae</p>
                  <p className="text-sm text-gray-500">Quick response guaranteed</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Service Areas</h4>
                  <p className="text-gray-500">Middle East</p>
                  <p className="text-sm text-gray-500">Global trade routes worldwide</p>
                </div>
              </div>
            </div>

            {/* <div className="mt-12 py-6 h-60 lg:h-80  rounded-xl">
            <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861056.6190953816!2d52.62925706351628!3d24.35080444336307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1753249477155!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
          

            </div> */}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
            
            {result && (
              <div className={`mb-4 p-3 rounded-lg ${
                result.includes('Successfully') 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : result.includes('Sending') 
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : result.includes('fix the errors')
                  ? 'bg-red-100 text-red-700 border border-red-200'
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {result}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                      touched.name && errors.name 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                    placeholder="Your full name"
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                      touched.email && errors.email 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                    placeholder="your@email.com"
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                      touched.phone && errors.phone 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                    placeholder="+971 XXX XXXXXX"
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                <select 
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select service type</option>
                  <option value="Air Freight">Air Freight</option>
                  <option value="Sea Freight (FCL)">Sea Freight (FCL)</option>
                  <option value="Sea Freight (LCL)">Sea Freight (LCL)</option>
                  <option value="GCC Road Transport">GCC Road Transport</option>
                  <option value="Customs Clearance">Customs Clearance</option>
                  <option value="Cross Trade">Cross Trade</option>
                  <option value="Project Cargo">Project Cargo</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea 
                  name="message"
                  rows={4}
                  required
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                    touched.message && errors.message 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-teal-500'
                  }`}
                  placeholder="Tell us about your shipping requirements..."
                ></textarea>
                {touched.message && errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button 
                type="submit"
                disabled={isLoading || Object.keys(errors).some(key => errors[key as keyof FormErrors])}
                className="w-full bg-teal text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
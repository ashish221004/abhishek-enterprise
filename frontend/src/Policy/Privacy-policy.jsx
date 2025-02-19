import React from 'react'
import Footer from '../Footer'

function Privacy() {
    return (
        <>

            <div className="w-full">
                {/* Hero Section */}
                <div className="relative h-[500px]">
                    <div className="absolute inset-0">
                        <img
                            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.ecomsolver.com/wp-content/uploads/2021/02/banner-1.jpg"
                            alt="International Moving"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" /> 
                    </div>


                </div>

                <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-2xl sm:text-5xl font-bold mb-6 ">
                            PRIVACY STATEMENT
                        </h1>

                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Abhishek Enterprise is to be an exemplary corporate citizen to help make the world a more beautiful place. We place great value on honesty and clarity and we are committed to building a strong and lasting relationship with our consumers based on trust and mutual benefit. Part of this commitment means safeguarding and respecting your privacy and your choices. Respecting your privacy is essential to us. This is why we set out “Our Privacy Promise” and our full Privacy Policy below.
                        </p>

                        <h2 className="text-xl sm:text-xl font-semibold mb-6">
                            OUR PRIVACY PROMISE
                        </h2>

                        <ul className="space-y-4 mb-8">
                            {[
                                "We respect your privacy and your choices.",
                                "We ensure privacy and security are embedded in everything we do.",
                                "We do not send you marketing communications unless you have asked us to. You can change your mind at any time.",
                                "We never sell your data.",
                                "We are committed to keeping your data safe and secure. This includes only working with trusted partners.",
                                "We are committed to being open and transparent about how we use your data.",
                                "We do not use your data in ways that we have not told you about.",
                                "We respect your rights, and always try to accommodate your requests as far as is possible, in line with our own legal and operational responsibilities."
                            ].map((promise, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="font-medium">{index + 1}.</span>
                                    <span className="text-gray-700">{promise}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl sm:text-xl font-semibold mb-6">
                            WHAT WILL YOU FIND IN THIS PRIVACY POLICY?
                        </h2>

                        <ul className="list-disc pl-6 space-y-3 text-gray-700">
                            {[
                                "Who we are",
                                "What is personal data",
                                "How we collect and use your data",
                                "How we protect your information",
                                "Your rights and choices",
                                "Contact information"
                            ].map((item, index) => (
                                <li key={index} className="pl-2">{item}</li>
                            ))}
                        </ul>
                        <p>For more information about our privacy practices, below we set out what types of personal data we may receive from you directly or from your interaction with us, how we may use it, who we may share it with, how we protect it and keep it secure, and your rights around your personal data. Of course all situations may not apply to you. This Privacy Policy gives you an overview of all possible situations in which we could interact together.</p>
                        <div class="   rounded-lg ">

                            <h2 class="text-2xl font-semibold text-gray-700 mt-6">Why are cookies important?</h2>
                            <p class="text-gray-600">Cookies help you make your online experience more efficient and relevant to your interests. For instance, they are used to remember your preferences on sites you visit often, to remember your user ID and the contents of your shopping baskets, and to help you navigate between pages efficiently....</p>

                            <h2 class="text-2xl font-semibold text-gray-700 mt-6">What is a Cookie?</h2>
                            <p class="text-gray-600">A cookie is a small file, or files on your computer, phone, or other device with a browser to save snippets of text for reference by the website you are visiting. All cookies have expiration dates in them that determine how long they stay in your browser:...</p>

                            <ul class="list-disc list-inside text-gray-600 mt-4">
                                <li><strong>Session cookies</strong> - these are temporary cookies that expire whenever you close your browser.</li>
                                <li><strong>Persistent cookies</strong> -  these usually have an expiration date and so stay in your browser until they expire, or until you manually delete them. For example we use persistent cookies to better understand usage patterns so that we can improve the site for our customers.</li>
                            </ul>

                            <h2 class="text-2xl font-semibold text-gray-700 mt-6">Cookie Categories</h2>
                            <ul class="list-disc list-inside text-gray-600 mt-4">
                                <li><strong>Essential</strong> - Required for the regular operation of our websites.</li>
                                <li><strong>Functional</strong> - These remember your preferences for a better experience.</li>
                                <li><strong>Analytics</strong> –  these cookies are used for performance measurement to understand things including how many people visit our websites, how they navigate our sites, and what content is popular. This allows us to improve your experience with us. Additionally, you can see how Google Analytics (one of our analytics tools) uses cookie information when you use our partners' sites by visiting www.google.com/policies/privacy/partners, or any other URL Google may provide from time to time <a href="https://www.google.com/policies/privacy/partners" class="text-blue-600 underline">Google’s Privacy & Terms</a>.</li>
                                <li><strong>Advertising</strong> - these cookies enable us and our advertising partners to serve you with relevant advertisements that we think will interest you. You might see these advertisements on our sites on other sites you visit. These cookies record your visit to our website and the content you interact with. They may be placed by us, or by advertising partners with our permission..</li>
                            </ul>

                            <p class="text-gray-600 mt-4">To ensure compliance with our policies, we restrict the use of third-party cookies to trusted partners.
                                We also use third party information from third party sources to enable us to deliver advertising. These sources are validated by Third party, and not by us.
                            </p>

                            <h2 class="text-2xl font-semibold text-gray-700 mt-6">Managing Cookies</h2>
                            <p class="text-gray-600">To delete cookies from your browser, please note the following simple steps. The following steps are indicative for Google chrome and might vary depending on the different browsers that you may use. Please refer to Settings on your browser for further details....</p>
                            <p className='text-gray-600'>To ensure compliance with our policies, we restrict the use of third-party cookies to trusted partners.
                                You may also change other settings related to Privacy and Security under the same section.
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

        </>
    )
}

export default Privacy
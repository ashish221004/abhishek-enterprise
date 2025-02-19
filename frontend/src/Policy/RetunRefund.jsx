import React from 'react'
import Footer from '../Footer'

function RetunRefund() {
  return (
    <>

      <div className='w-full'>
        <div className="relative h-[500px]">
          <div className="absolute inset-0">
            <img
              src="https://www.lorealparis.co.in/-/media/project/loreal/brand-sites/oap/apac/in/categories/hair/haircolor-category.jpg?rev=66ab43c9c13f446e9ac7535a8d1933ed&cx=0.33&cy=0.27&cw=2000&ch=600&hash=492EFEE7EA541617BBE0B1D9C44ACF5AB1B89EBA"
              alt="International Moving"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
            <div className="text-white max-w-3xl">
              <h2 className="text-base sm:text-lg font-medium mb-2 tracking-wide">
                PREPARE YOUR MOVE
              </h2>
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-4xl font-medium">
                  Cookie & Policy
                </h1>
                <div className="border-b-2 border-red-600 w-24 sm:w-32" />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className='text-7xl'>Return & Refund</h1>

        <div class="bg-green-50 border-l-4 border-green-500 p-5 mb-8 rounded-r-lg">
          <p class="text-green-800">
            At Abhishek Enterprises, we strive to ensure your complete satisfaction with our products. This Return and Refund Policy outlines the process for returning items and requesting refunds. We aim to make this process as smooth and hassle-free as possible.
          </p>
        </div>

        <main class="space-y-8">
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Return Policy</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We accept returns within <span class="font-medium">30 days</span> of purchase. To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.
              </p>
              <p>
                Additionally, you must have the receipt or proof of purchase. Please note that certain types of goods are exempt from being returned. These include:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Perishable goods such as food, flowers, or newspapers</li>
                <li>Intimate or sanitary goods</li>
                <li>Hazardous materials</li>
                <li>Software or digital products that have been downloaded or unsealed</li>
                <li>Custom-made or personalized items</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Return Process</h2>
            <ol class="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>
                <span class="font-medium">Initiate a Return:</span> Contact our customer service team through email or phone to initiate the return process. Please include your order number and reason for the return.
              </li>
              <li>
                <span class="font-medium">Receive Return Authorization:</span> Our team will review your request and provide you with a Return Merchandise Authorization (RMA) number and return instructions.
              </li>
              <li>
                <span class="font-medium">Package Your Return:</span> Pack the item securely in its original packaging if possible. Include the RMA number with your return.
              </li>
              <li>
                <span class="font-medium">Ship Your Return:</span> Ship the item to the address provided in the return instructions. We recommend using a trackable shipping service.
              </li>
              <li>
                <span class="font-medium">Return Inspection:</span> Once we receive your return, we will inspect the item to ensure it meets our return policy requirements.
              </li>
            </ol>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Refund Policy</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p>
                If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within <span class="font-medium">7-10 business days</span>. Depending on your credit card company or bank, it may take an additional 2-5 business days for the refund to reflect in your account.
              </p>
              <div class="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400 my-4">
                <p class="text-yellow-800 font-medium">Note on Late or Missing Refunds</p>
                <p class="text-yellow-800 mt-2">
                  If you haven't received a refund after 10 business days, please check your bank account or credit card statement first. Then contact your bank or credit card company as there might be some processing time. If you've done all of this and you still have not received your refund, please contact our customer service team.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Refund Conditions</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <h3 class="font-bold text-lg mb-2 text-gray-800">Full Refunds</h3>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Item received was defective or damaged</li>
                    <li>Item received was significantly different from description</li>
                    <li>Unused item returned within 7 days with original packaging</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-sm">
                  <h3 class="font-bold text-lg mb-2 text-gray-800">Partial Refunds</h3>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Item returned between 8-30 days (15% restocking fee may apply)</li>
                    <li>Item shows signs of use but is in good condition</li>
                    <li>Item is missing original packaging or accessories</li>
                  </ul>
                </div>
              </div>
              <p>
                In certain situations, we may only offer store credit for your returned item. This will be communicated to you during the return authorization process.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Shipping Returns</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p>
                You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
              </p>
              <p>
                For items that are defective or damaged upon receipt, we will provide a prepaid shipping label and reimburse the original shipping cost.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Exchanges</h2>
            <div class="text-gray-700 leading-relaxed">
              <p>
                If you need to exchange an item for the same item in a different size or color, please follow the same process as for returns. In the return request, specify that you want an exchange and provide details about the replacement item you're seeking.
              </p>
              <p class="mt-3">
                We will process the exchange upon receiving your returned item, subject to product availability.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Contact Us</h2>
            <p class="text-gray-700 leading-relaxed">
              If you have any questions or concerns about our Return and Refund Policy, please contact our customer service team:
            </p>
            <div class="mt-4 bg-gray-100 p-4 rounded-lg">
              <p class="font-medium">Abhishek Enterprises</p>
              <p>Email: <a href="mailto:returns@abhishekenterprises.com" class="text-blue-600 hover:underline">returns@abhishekenterprises.com</a></p>
              <p>Phone: <a href="tel:+919876543210" class="text-blue-600 hover:underline">+91 9876543210</a></p>
              <p>Customer Service Hours: Monday to Friday, 10:00 AM to 6:00 PM IST</p>
            </div>
          </section>
        </main>

        <footer class="mt-12 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>© 2025 Abhishek Enterprises. All rights reserved.</p>
          <p class="mt-2">Last Updated: February 19, 2025</p>
        </footer>
      </div>

      <Footer />
    </>
  )
}

export default RetunRefund
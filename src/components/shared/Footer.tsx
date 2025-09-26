import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] w-full">
      {/* Desktop Layout */}
      <div className="hidden lg:block px-[120px] pt-16 pb-6">
        <div className="max-w-[1440px] mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-4 gap-16 mb-12">
            {/* Logo + Quick Links 1 */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#7CB342] rounded-md flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h2 className="text-[#2D2D2D] text-xl font-medium font-questrial">Fresh Harvests</h2>
              </div>

              <div className="mb-8">
                <h4 className="text-[#2D2D2D] font-medium mb-4 font-questrial text-base">Download App:</h4>
                <div className="space-y-3">
                  {/* App Store */}
                  <div className="bg-black rounded-lg px-4 py-3 flex items-center gap-3">
                    <div className="text-white text-xl">🍎</div>
                    <div>
                      <div className="text-white text-xs">Download on the</div>
                      <div className="text-white text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                  {/* Google Play */}
                  <div className="bg-black rounded-lg px-4 py-3 flex items-center gap-3">
                    <div className="text-white text-xl">▶️</div>
                    <div>
                      <div className="text-white text-xs">GET IT ON</div>
                      <div className="text-white text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Links 2 */}
            <div>
              <h3 className="text-[#2D2D2D] font-medium mb-4 font-questrial text-base">Quick links 2</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#666666] hover:text-[#7CB342] transition-colors font-questrial text-sm">Favorites</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#7CB342] transition-colors font-questrial text-sm">Cart</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#7CB342] transition-colors font-questrial text-sm">Sign in</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#7CB342] transition-colors font-questrial text-sm">Register</a></li>
              </ul>
            </div>

            {/* Quick Links 1 */}
            <div>
              <h3 className="text-[#2D2D2D] font-medium mb-4 font-questrial text-base">Quick links 1</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#666666] hover:text-[#7CB342] transition-colors font-questrial text-sm">Home</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#7CB342] transition-colors font-questrial text-sm">Shop</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#7CB342] transition-colors font-questrial text-sm">About us</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#7CB342] transition-colors font-questrial text-sm">Blog</a></li>
                <li><a href="#" className="text-[#666666] hover:text-[#7CB342] transition-colors font-questrial text-sm">Detail Blog</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            {/* <div>
              <h3 className="text-[#2D2D2D] font-medium mb-4 font-questrial text-base">Contact us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#666666]" />
                  <span className="text-[#666666] font-questrial text-sm">1234 5678 90</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#666666]" />
                  <span className="text-[#666666] font-questrial text-sm">Freshharvests@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#666666] mt-0.5 flex-shrink-0" />
                  <span className="text-[#666666] font-questrial text-sm">Tanjung Sari Street, Pontianak, Indonesia</span>
                </div>
              </div>
            </div> */}

            {/* Payment & Download */}
            <div>
              <div>
                <h3 className="text-[#2D2D2D] font-medium mb-4 font-questrial text-base">Contact us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#666666]" />
                    <span className="text-[#666666] font-questrial text-sm">1234 5678 90</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#666666]" />
                    <span className="text-[#666666] font-questrial text-sm">Freshharvests@gmail.com</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#666666] mt-0.5 flex-shrink-0" />
                    <span className="text-[#666666] font-questrial text-sm">Tanjung Sari Street, Pontianak, Indonesia</span>
                  </div>
                </div>
              </div>
              <h3 className="text-[#2D2D2D] font-medium mb-4 font-questrial text-base">Accepted Payment Methods:</h3>
              <div className="flex items-center gap-3 mb-8">
                {/* Visa */}
                <div className="w-14 h-9 bg-[#1A1F71] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                {/* PayPal */}
                <div className="w-14 h-9 bg-[#003087] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">PayPal</span>
                </div>
                {/* Apple Pay */}
                <div className="w-14 h-9 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-lg">🍎 Pay</span>
                </div>
              </div>


            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-300">
            {/* Copyright */}
            <p className="text-[#666666] text-sm font-questrial">
              © Copyright 2024. All Rights Reserved by Banana Studio
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#7CB342] transition-colors">
                <span className="text-white text-xs font-bold">T</span>
              </a>
              <a href="#" className="w-8 h-8 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#7CB342] transition-colors">
                <span className="text-white text-xs font-bold">F</span>
              </a>
              <a href="#" className="w-8 h-8 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#7CB342] transition-colors">
                <span className="text-white text-xs font-bold">IG</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden px-6 pt-12 pb-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-[#7CB342] rounded-md flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <h2 className="text-[#2D2D2D] text-xl font-medium font-questrial">Fresh Harvests</h2>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Quick Links 1 */}
          <div className="mb-8">
            <h4 className="text-[#2D2D2D] font-medium mb-4 font-questrial text-base">Download App:</h4>
            <div className="space-y-3">
              {/* App Store */}
              <div className="bg-black rounded-lg px-4 py-3 flex items-center gap-3">
                <div className="text-white text-xl">🍎</div>
                <div>
                  <div className="text-white text-xs">Download on the</div>
                  <div className="text-white text-sm font-semibold">App Store</div>
                </div>
              </div>
              {/* Google Play */}
              <div className="bg-black rounded-lg px-4 py-3 flex items-center gap-3">
                <div className="text-white text-xl">▶️</div>
                <div>
                  <div className="text-white text-xs">GET IT ON</div>
                  <div className="text-white text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>


          {/* Quick Links 2 */}
          <div>
            <h3 className="text-[#2D2D2D] font-medium mb-4 font-questrial text-base">Quick links 2</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#666666] font-questrial text-sm">Favorites</a></li>
              <li><a href="#" className="text-[#666666] font-questrial text-sm">Cart</a></li>
              <li><a href="#" className="text-[#666666] font-questrial text-sm">Sign in</a></li>
              <li><a href="#" className="text-[#666666] font-questrial text-sm">Register</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h3 className="text-[#2D2D2D] font-medium mb-4 font-questrial text-base">Contact us</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#666666]" />
              <span className="text-[#666666] font-questrial text-sm">1234 5678 90</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#666666]" />
              <span className="text-[#666666] font-questrial text-sm">Freshharvests@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#666666] mt-0.5 flex-shrink-0" />
              <span className="text-[#666666] font-questrial text-sm">Tanjung Sari Street, Pontianak, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <h3 className="text-[#2D2D2D] font-medium mb-4 font-questrial text-base">Accepted Payment Methods:</h3>
          <div className="flex items-center gap-3 mb-6">
            {/* Visa */}
            <div className="w-14 h-9 bg-[#1A1F71] rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">VISA</span>
            </div>
            {/* PayPal */}
            <div className="w-14 h-9 bg-[#003087] rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">PayPal</span>
            </div>
            {/* Apple Pay */}
            <div className="w-14 h-9 bg-black rounded flex items-center justify-center">
              <span className="text-white text-xs">🍎 Pay</span>
            </div>
          </div>
        </div>

        {/* Download App */}


        {/* Social Media Icons */}
        <div className="flex justify-center gap-3 mb-6">
          <a href="#" className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#7CB342] transition-colors">
            <span className="text-white text-sm font-bold">T</span>
          </a>
          <a href="#" className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#7CB342] transition-colors">
            <span className="text-white text-sm font-bold">F</span>
          </a>
          <a href="#" className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-[#7CB342] transition-colors">
            <span className="text-white text-sm font-bold">IG</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-300 pt-6">
          <p className="text-[#666666] text-sm font-questrial">
            © Copyright 2024. All Rights Reserved by Banana Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
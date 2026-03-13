export default function Footer() {
  return (
    <footer id="contact" className="bg-[#000000] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/images/logos/logo-white.webp"
              alt="WV Development Logo"
              className="h-16 md:h-20 mb-4"
            />
            <p className="text-sm opacity-80 mb-4">
              Infrastructure development & built environment solutions for
              mission-critical operations.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Transportation Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Real Estate Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Construction Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Regulatory & Environmental Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                Email:{" "}
                <a href="mailto:info@theslvcompanies.com">
                  info@theslvcompanies.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-[auto_1fr] gap-12 mb-12">
          <div>
            <h3 className="font-bold mb-4 text-lg">Company Data</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>UEI: Z499GXPQ99R3</li>
              <li>CAGE CODE: 0QZT1</li>
              <li>DUNS: 11-937-9361</li>
              <li>ESTABLISHED: 2022</li>
            </ul>
            <br />
            <h4>Address</h4>
            <p>96 Harry S Truman, Suite 325, Largo MD 20774</p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">NAICS Codes</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                541611 Admin Mgmt and General Mgmt Consulting Services (Primary)
              </li>
              <li>488119, Other Airport Operations</li>
              <li>541690 Other Scientific and Tech Consulting Services</li>
              <li>531390 Other Activities Related to Real Estate</li>
              <li>488310 Port and Harbor Operations</li>
              <li>488999 All Other Support Activities for Transportation</li>
              <li>237310 Highway, Street, and Bridge Construction</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
          <p>&copy; 2025 WV Development, LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

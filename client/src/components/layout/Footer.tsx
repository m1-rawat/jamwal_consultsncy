import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">
              Jamwal<span className="text-primary-foreground/80">Consultancy</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner for ESI, PF, Payroll, and Labour Law compliance. We simplify complex regulations so you can focus on growing your business.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-primary-foreground transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'ESI Registration',
                'PF Compliance',
                'Payroll Management',
                'Labour Law Advisory',
                'Factory Act Compliance',
                'Shop & Establishment'
              ].map((item) => (
                <li key={item} className="text-slate-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                
                <span>
                  GALI NO. 2 SEWAK PARK ,GROUND FLOOR HNA91, GRAM SABHA , <br />
                  DWARKA MOR, METRO STATION GATE NO 2 ,New-DELHI 110059
                </span>
              </li>
           <li className="flex items-start gap-3 text-sm text-slate-400">
  <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
  <div className="flex flex-col">
    <span>+91 88266 52785</span>
    <span>+91 95607 89745</span>
    <span>+91 99714 79785</span>
  </div>
</li>

             <li className="flex items-start gap-3 text-sm text-slate-400">
  <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
  <div className="flex flex-col">
    <span>kuldeep.jamwal1971@gmail.com</span>
    <span>vishaldeepjamwal278@gmail.com</span>
  </div>
</li>

            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Jamwal Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

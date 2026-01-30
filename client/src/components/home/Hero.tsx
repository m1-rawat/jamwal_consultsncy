import heroImage from '@assets/generated_images/modern_corporate_indian_office_consultancy_team.png';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-10 pb-20 md:pt-20 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-5 duration-700">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Trusted by 100+ Businesses in India
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Simplify Your <br/>
              <span className="text-primary">Compliance & Payroll</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Expert consultancy for ESI, PF, Labour Laws, and Payroll Management. We handle the complexities so you can focus on growing your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-base px-8 h-12 shadow-xl shadow-primary/20">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-base px-8 h-12">
                  View Our Services
                </Button>
              </Link>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>100% Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>Timely Filings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right-5 duration-700 delay-200">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-200/20 rounded-2xl blur-2xl -z-10" />
            <img 
              src={heroImage} 
              alt="Jamwal Consultancy Team" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Success Rate</p>
                  <p className="text-xl font-bold text-slate-900">99.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

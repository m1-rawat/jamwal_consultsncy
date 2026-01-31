import { Layout } from "@/components/layout/Layout";
import { CheckCircle2 } from "lucide-react";
import teamImage from '@assets/generated_images/modern_corporate_indian_office_consultancy_team.png';

export default function About() {
  return (
    <Layout>
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">About Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dedicated to delivering excellence in statutory compliance and payroll management since 2015.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src={teamImage} 
                alt="Our Team" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-slate-900">Who We Are</h2>
              <p className="text-slate-600 leading-relaxed">
                Jamwal Consultancy is a premier labour law consultancy firm based in India. We specialize in providing end-to-end solutions for ESI, EPF, Payroll, and other statutory compliances. 
              </p>
              <p className="text-slate-600 leading-relaxed">
                With a team of experienced professionals, we have successfully assisted over 500 businesses—from startups to large enterprises—in maintaining 100% compliance. Our mission is to simplify the complex legal landscape for employers so they can focus on their core business activities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {['100+ Happy Clients', '15+ Years Experience', '100% Compliance Rate', '24/7 Support'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be the most trusted compliance partner for businesses in India, recognized for our integrity, expertise, and customer-centric approach.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To provide hassle-free, accurate, and timely compliance services that empower businesses to operate without legal hurdles and foster a healthy work environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

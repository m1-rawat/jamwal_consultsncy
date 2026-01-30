import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ShieldCheck, Users, Briefcase, Scale, Calculator, FileText } from "lucide-react";
import esiImage from '@assets/generated_images/esi_pf_compliance_concept.png';
import payrollImage from '@assets/generated_images/payroll_services_concept.png';
import lawImage from '@assets/generated_images/labour_law_consultancy_concept.png';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import LogoCarousel from "@/components/LogoCarousel";

export default function Home() {
  const services = [
    {
      title: "ESI & PF Registration",
      description: "End-to-end support for Employee State Insurance and Provident Fund registration and monthly compliance filings.",
      icon: <ShieldCheck className="h-6 w-6" />,
      image: esiImage
    },
    {
      title: "Payroll Management",
      description: "Accurate and timely payroll processing, salary structure design, and tax deductions management.",
      icon: <Calculator className="h-6 w-6" />,
      image: payrollImage
    },
    {
      title: "Labour Law Consultancy",
      description: "Expert advisory on Factory Act, Minimum Wages Act, Bonus Act, and other statutory labour compliances.",
      icon: <Scale className="h-6 w-6" />,
      image: lawImage
    }
  ];


  return (

    <Layout>
      <Hero />
      <LogoCarousel />
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Comprehensive Compliance Solutions</h3>
            <p className="text-slate-600">
              We offer a full spectrum of consultancy services to ensure your business remains compliant with all Indian labour laws and regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Expert Team</h4>
                  <p className="text-sm text-slate-600">Highly qualified professionals with decades of experience in labour laws.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <FileText className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Timely Filings</h4>
                  <p className="text-sm text-slate-600">Zero penalties with our rigorous adherence to compliance deadlines.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <Briefcase className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Client Centric</h4>
                  <p className="text-sm text-slate-600">Tailored solutions that fit your specific business size and industry.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Data Security</h4>
                  <p className="text-sm text-slate-600">Your employee data and financial records are 100% secure with us.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-sm font-semibold text-primary tracking-wide uppercase">Why Choose Jamwal Consultancy</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Your Partner in Growth and Compliance</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Navigating the complex landscape of Indian labour laws and statutory compliance can be challenging. At Jamwal Consultancy, we simplify this process for you.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our proactive approach ensures that your business stays ahead of regulatory changes, minimizing risk and maximizing operational efficiency. We handle the paperwork so you can handle your business.
              </p>
              <Link to="/about">
                <Button className="mt-4">Read More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Streamline Your Compliance?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Get in touch with us today for a free audit of your current compliance status and a customized proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-primary font-bold">Contact Us Now</Button>
            </Link>
            <a href="tel:+919876543210">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Call +91 99714 79785
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

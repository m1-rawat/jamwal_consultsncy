import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ShieldCheck, Calculator, Scale, FileText, Building2, Users } from "lucide-react";
import esiImage from '@assets/generated_images/esi_pf_compliance_concept.png';
import payrollImage from '@assets/generated_images/payroll_services_concept.png';
import lawImage from '@assets/generated_images/labour_law_consultancy_concept.png';
import modernImage from '@assets/generated_images/modern_corporate_indian_office_consultancy_team.png';

export default function Services() {
  const allServices = [
    {
      title: "ESI Registration & Compliance",
      description: "Complete assistance with Employee State Insurance registration, monthly contribution filing, challan generation, and handling ESI inspections.",
      icon: <ShieldCheck className="h-6 w-6" />,
      image: esiImage
    },
    {
      title: "PF Registration & Compliance",
      description: "End-to-end Provident Fund services including establishment registration, monthly returns, withdrawals, transfers, and grievance handling.",
      icon: <FileText className="h-6 w-6" />,
      image: esiImage // Reusing for consistency, normally would generate unique
    },
    {
      title: "Payroll Processing",
      description: "Accurate monthly payroll calculation, payslip generation, tax computation (TDS), and full and final settlement management.",
      icon: <Calculator className="h-6 w-6" />,
      image: payrollImage
    },
    {
      title: "Labour Law Advisory",
      description: "Expert legal advice on Minimum Wages Act, Payment of Bonus Act, Gratuity Act, and other statutory compliances tailored to your industry.",
      icon: <Scale className="h-6 w-6" />,
      image: lawImage
    },
    {
      title: "Shop & Establishment Act",
      description: "Assistance with registration and renewal of Shop & Establishment licenses across various states in India.",
      icon: <Building2 className="h-6 w-6" />,
      image: modernImage
    },
    {
      title: "Contract Labour Compliance",
      description: "Management of CLRA licenses, maintenance of statutory registers, and ensuring compliance for contract workers.",
      icon: <Users className="h-6 w-6" />,
      image: lawImage
    }
  ];

  return (
    <Layout>
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide a comprehensive suite of compliance and payroll services designed to meet the unique needs of Indian businesses.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} className="h-full" />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

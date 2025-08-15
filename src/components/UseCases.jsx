import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("strategy");

  const tabs = [
    { id: "strategy", name: "Strategy" },
    { id: "operations", name: "Operations" },
    { id: "finance-legal", name: "Finance & Legal" },
    { id: "sales-marketing", name: "Sales & Marketing" },
    { id: "hr-people", name: "HR & People" },
    { id: "predictive-cx", name: "Predictive & CX" },
    { id: "logistics-field", name: "Logistics & Field Ops" },
  ];

  const useCases = {
    strategy: [
      {
        title: "Sales & Marketing Strategy",
        description:
          "Agents generate personalized talking points from public data/LinkedIn/internal notes to reduce SDR prep time.",
      },
      {
        title: "Digital Transformation Strategy",
        description:
          "Agents analyze current processes and recommend AI-native workflow architectures (what to automate/augment/eliminate).",
      },
      {
        title: "Strategic Decision Support",
        description:
          "Scenario planning & strategic modeling using market data, internal metrics, and external factors.",
      },
      {
        title: "HR Strategic Planning",
        description:
          "Always-available onboarding guides reduce HR effort and increase new-hire productivity.",
      },
    ],
    operations: [
      {
        title: "Cross-system Data Reconciliation",
        description:
          "Cross-system data reconciliation across ERP/CRM/HRIS to improve accuracy and reporting.",
      },
      {
        title: "Customer Feedback Analysis",
        description:
          "Customer feedback analysis: summarize reviews/surveys/tickets into actionable CX insights.",
      },
      {
        title: "Meeting & Scheduling Operations",
        description:
          "Meeting & scheduling operations across calendars/teams/time zones.",
      },
      {
        title: "Data Entry & System Updates",
        description:
          "Data entry & system updates: extract structured data from emails/PDFs and update systems automatically.",
      },
    ],
    "finance-legal": [
      {
        title: "Reporting Automation",
        description:
          "Reporting automation for Finance/HR/ESG from multiple systems into compliant reports.",
      },
      {
        title: "Contract Drafting & Legal Document Assembly",
        description:
          "Contract drafting & legal document assembly (NDAs, SLAs, MSAs) with human review in loop.",
      },
      {
        title: "Real-time Financial Insights",
        description:
          "Real-time financial insights from disconnected systems; reconcile values and surface discrepancies.",
      },
      {
        title: "Invoice Review",
        description:
          "Invoice review: extract line items from PDFs, match to POs, flag anomalies.",
      },
    ],
    "sales-marketing": [
      {
        title: "Lead Qualification & Prioritization",
        description:
          "Lead qualification & prioritization: enrich CRM; flag high-fit accounts via ICP signals/intent.",
      },
      {
        title: "Demo Follow-up Automation",
        description:
          "Demo follow-up automation: auto-generate follow-ups/recaps/documents.",
      },
      {
        title: "Feedback Loop to Product Teams",
        description:
          "Feedback loop to product teams: summarize objection patterns for roadmap input.",
      },
      {
        title: "Account Research & Personalization",
        description:
          "Account research & personalization: tailored talking points; reduce SDR prep.",
      },
    ],
    "hr-people": [
      {
        title: "Employee Onboarding & Training Assistants",
        description: "Employee onboarding & training assistants.",
      },
      {
        title: "Internal Knowledge Discovery",
        description:
          "Internal knowledge discovery (answers to HR/benefits/onboarding from approved sources).",
      },
      {
        title: "HR Document Automation",
        description:
          "HR document automation (contracts, policy updates, compliance logs).",
      },
    ],
    "predictive-cx": [
      {
        title: "Market Positioning",
        description:
          "Market positioning: monitor competitor pricing/features/migrations; provide real-time strategic recommendations.",
      },
      {
        title: "Demand & Supply Forecasting",
        description:
          "Demand & supply forecasting across channels with seasonality/promotions; coordinate inventory & production.",
      },
      {
        title: "Operations Forecasting",
        description:
          "Operations forecasting: workforce planning & capacity optimization 6–12 months ahead.",
      },
      {
        title: "Hyper-personalized Customer Journeys",
        description:
          "Hyper-personalized customer journeys: dynamic experiences based on behavior/preferences/lifecycle stage.",
      },
    ],
    "logistics-field": [
      {
        title: "Maintenance Alerts & Predictive Repairs",
        description:
          "Maintenance alerts & predictive repairs (IoT + service logs).",
      },
      {
        title: "Autonomous Dispatch & Rescheduling",
        description:
          "Autonomous dispatch & rescheduling (real-time reassignment/notifications).",
      },
      {
        title: "Inventory-level Monitoring & Replenishment",
        description:
          "Inventory-level monitoring & replenishment; discrepancy surfacing.",
      },
      {
        title: "Real-time Task Assignment",
        description:
          "Real-time task assignment: multi-agent routing and location-based orchestration.",
      },
      {
        title: "Agricultural Coordination",
        description:
          "Agents coordinate harvest timing, storage, distribution, and delivery route optimization.",
      },
    ],
  };

  return (
    <section id="use-cases" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Use Cases
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-source-sans">
            Real-world applications of AI agents across different business
            functions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "orange-gradient text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases[activeTab].map((useCase, index) => (
            <Card
              key={index}
              className="hover-lift bg-gray-900/50 border border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-white font-inter">
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 font-source-sans leading-relaxed">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

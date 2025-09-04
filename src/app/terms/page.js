import React from "react";
import Container from "@/components/Container";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[url('/intro-bg.png')] bg-cover bg-center bg-no-repeat w-full">
        <Container>
          <div className="h-[35vh] md:h-[50vh] flex items-end pt-[90px] pb-10">
            <div>
              <h1 className="text-white text-[40px] md:text-[56px] font-bold leading-tight">
                Terms of Service
              </h1>
              <p className="text-white/70 text-lg mt-3 max-w-3xl">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 text-black">
        <Container>
          <div className="prose prose-invert max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-black/80">
              By accessing or using our website, applications, or services
              (collectively, the Services), you agree to be bound by these
              Terms. If you do not agree, do not use the Services.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Eligibility and Accounts
            </h3>
            <p className="text-black/80">
              You must be at least the age of majority in your jurisdiction to
              use the Services. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">Acceptable Use</h3>
            <ul className="text-black/80 list-disc pl-5 space-y-2">
              <li>
                Do not engage in unlawful, abusive, or fraudulent activities.
              </li>
              <li>
                Do not attempt to probe, scan, or test the vulnerability of the
                Services.
              </li>
              <li>
                Do not interfere with or disrupt the integrity or performance of
                the Services.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-10 mb-3">Content</h3>
            <p className="text-black/80">
              You retain ownership of content you submit to the Services. By
              submitting content, you grant us a non-exclusive, worldwide,
              royalty-free license to use, reproduce, and display that content
              for the purpose of operating and improving the Services.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Subscriptions and Payments
            </h3>
            <p className="text-black/80">
              If any portion of the Services is offered on a paid basis, you
              agree to pay all applicable fees and taxes. All charges are
              non-refundable except as required by law or as explicitly stated
              otherwise.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Third-Party Services
            </h3>
            <p className="text-black/80">
              The Services may link to third-party websites or services. We are
              not responsible for third-party content, policies, or practices.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">Termination</h3>
            <p className="text-black/80">
              We may suspend or terminate your access to the Services at any
              time for any reason, including violation of these Terms. Upon
              termination, your right to use the Services will cease
              immediately.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Disclaimer of Warranties
            </h3>
            <p className="text-black/80">
              The Services are provided on an AS IS and AS AVAILABLE basis
              without warranties of any kind, express or implied.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Limitation of Liability
            </h3>
            <p className="text-black/80">
              To the fullest extent permitted by law, we shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or revenues, whether incurred
              directly or indirectly, or any loss of data, use, goodwill, or
              other intangible losses.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Indemnification
            </h3>
            <p className="text-black/80">
              You agree to defend, indemnify, and hold harmless our company and
              its affiliates from and against any claims, liabilities, damages,
              losses, and expenses arising out of or in any way connected with
              your use of the Services or violation of these Terms.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Changes to Terms
            </h3>
            <p className="text-black/80">
              We may modify these Terms at any time. We will update the date
              below when changes are made. Continued use of the Services
              constitutes acceptance of the updated Terms.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">Governing Law</h3>
            <p className="text-black/80">
              These Terms are governed by the laws of the jurisdiction in which
              our company is established, without regard to its conflict of law
              principles.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">Contact</h3>
            <p className="text-black/80">
              Questions about these Terms can be sent to{" "}
              <a className="underline" href="mailto:contact@example.com">
                contact@example.com
              </a>
              .
            </p>

            <p className="text-black/60 mt-10">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

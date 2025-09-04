import React from "react";
import Container from "@/components/Container";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[url('/intro-bg.png')] bg-cover bg-center bg-no-repeat w-full">
        <Container>
          <div className="h-[35vh] md:h-[50vh] flex items-end pt-[90px] pb-10">
            <div>
              <h1 className="text-white text-[40px] md:text-[56px] font-bold leading-tight">
                Privacy Policy
              </h1>
              <p className="text-white/70 text-lg mt-3 max-w-3xl">
                How we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 text-black">
        <Container>
          <div className="prose prose-invert max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-black/80">
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our website, products, and
              services. By using our services, you agree to the collection and
              use of information in accordance with this policy.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Information We Collect
            </h3>
            <p className="text-black/80">
              We collect information that you provide directly to us and
              information collected automatically when you interact with our
              services.
            </p>
            <ul className="text-black/80 list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Information you provide:</span>{" "}
                name, email address, phone number, account credentials,
                communications you send to us, and any other details you choose
                to provide through forms or support channels.
              </li>
              <li>
                <span className="font-semibold">
                  Information collected automatically:
                </span>{" "}
                device and usage data such as IP address, browser type,
                operating system, referring URLs, pages viewed, and the
                dates/times of your visits.
              </li>
              <li>
                <span className="font-semibold">
                  Cookies and similar technologies:
                </span>{" "}
                we use cookies and local storage to remember preferences,
                maintain sessions, and analyze usage. You can control cookies
                through your browser settings.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              How We Use Your Information
            </h3>
            <ul className="text-black/80 list-disc pl-5 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our offerings</li>
              <li>
                Communicate with you about updates, security alerts, and support
              </li>
              <li>Process transactions and fulfill requests</li>
              <li>Detect, prevent, and address technical issues or abuse</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Legal Bases for Processing
            </h3>
            <p className="text-black/80">
              If you are located in the EEA, UK, or Switzerland, we process your
              personal data on the basis of legitimate interests, contract
              performance, consent (where applicable), and compliance with legal
              obligations.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Sharing of Information
            </h3>
            <p className="text-black/80">
              We do not sell your personal information. We may share information
              with trusted service providers who perform services on our behalf,
              with professional advisors, in connection with a business
              transfer, or as required by law.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">Data Retention</h3>
            <p className="text-black/80">
              We retain personal information only for as long as necessary to
              fulfill the purposes outlined in this policy, comply with our
              legal obligations, resolve disputes, and enforce our agreements.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">Security</h3>
            <p className="text-black/80">
              We implement reasonable technical and organizational measures to
              protect your information. However, no method of transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              International Transfers
            </h3>
            <p className="text-black/80">
              Your information may be transferred to and processed in countries
              other than your own. Where required, we use appropriate safeguards
              for cross-border transfers.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">Your Rights</h3>
            <p className="text-black/80">
              Depending on your location, you may have rights to access,
              correct, update, or delete your personal information, object to or
              restrict processing, withdraw consent, and data portability. To
              exercise these rights, contact us using the details below.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Children’s Privacy
            </h3>
            <p className="text-black/80">
              Our services are not directed to children under 13 (or as defined
              by local law), and we do not knowingly collect personal
              information from children.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Third-Party Links
            </h3>
            <p className="text-black/80">
              Our services may contain links to third-party websites. We are not
              responsible for the privacy practices of those sites. We encourage
              you to review their policies.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">
              Changes to This Policy
            </h3>
            <p className="text-black/80">
              We may update this Privacy Policy from time to time. We will
              update the “Last updated” date below when changes are made.
            </p>

            <h3 className="text-xl font-semibold mt-10 mb-3">Contact Us</h3>
            <p className="text-black/80">
              If you have questions about this Privacy Policy or our data
              practices, please contact us at{" "}
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

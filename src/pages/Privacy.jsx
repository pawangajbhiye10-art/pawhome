import React from 'react';

export default function Privacy() {
  return (
    <section className="block">
      <div className="wrap" style={{ maxWidth: 800 }}>
        <div className="panel" style={{ padding: 36, lineHeight: 1.7 }}>
          <h1 style={{ fontSize: 32, marginBottom: 12 }}>Privacy Policy</h1>
          <p className="meta" style={{ marginBottom: 24 }}>Last updated: October 2026</p>

          <h3 style={{ fontSize: 20, marginTop: 20, marginBottom: 8 }}>1. Data We Collect</h3>
          <p>
            When registering, submitting adoption inquiries, or uploading verification files on Pawhome, we collect your name, email, phone number, address, housing details, and submitted identity documentation.
          </p>

          <h3 style={{ fontSize: 20, marginTop: 20, marginBottom: 8 }}>2. Private Document Security</h3>
          <p>
            Government IDs and landlord permission papers are stored in private cloud storage partitions protected by strict access control rules. They are never published publicly, indexed by search engines, or accessible to other platform users. Only verified shelter review officers with administrative clearance may inspect these files for adoption decisions.
          </p>

          <h3 style={{ fontSize: 20, marginTop: 20, marginBottom: 8 }}>3. Public Certificate Verification</h3>
          <p>
            When an adoption is finalized, an adoption certificate ID is generated. Our public verification tool confirms the validity of the certificate while obscuring private identity details to safeguard adopter confidentiality.
          </p>

          <h3 style={{ fontSize: 20, marginTop: 20, marginBottom: 8 }}>4. Third-Party Disclosures</h3>
          <p>
            We do not sell, rent, or monetize your personal information to advertisers. Data is shared strictly with the authorized shelter rescue coordinating the specific pet adoption you applied for.
          </p>
        </div>
      </div>
    </section>
  );
}

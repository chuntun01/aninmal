import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import TermsConditionsContent from "../components/TermsConditions/TermsConditionsContent";

export default function TermsConditions() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />

      <TermsConditionsContent />

      <Footer />
    </>
  );
}

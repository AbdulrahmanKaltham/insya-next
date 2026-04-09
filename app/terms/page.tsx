import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "شروط الاستخدام | إنسيا",
  description: "شروط وأحكام استخدام موقع مؤسسة إنسيا للدراسات والبحوث الإنسانية.",
};

export default function TermsPage() {
  return <TermsClient />;
}
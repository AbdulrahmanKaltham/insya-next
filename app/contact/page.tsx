import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "تواصل معنا | إنسيا",
  description: "تواصل مع مؤسسة إنسيا للدراسات والبحوث الإنسانية.",
};

export default function ContactPage() {
  return <ContactClient />;
}
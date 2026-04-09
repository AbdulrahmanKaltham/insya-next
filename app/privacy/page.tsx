import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | إنسيا",
  description: "سياسة الخصوصية لمؤسسة إنسيا للدراسات والبحوث الإنسانية.",
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
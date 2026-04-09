import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "الخدمات | إنسيا",
  description: "خدمات إنسيا: الدائرة التراثية، التعريبية، البحثية، الاستشرافية، الاستشارية، وغيرها.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
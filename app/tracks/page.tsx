import type { Metadata } from "next";
import TracksClient from "./TracksClient";

export const metadata: Metadata = {
  title: "المسارات | إنسيا",
  description: "مسارات إنسيا: البحوث الأكاديمية، المشاريع التطبيقية، بناء القدرات، ونشر المعرفة.",
};

export default function TracksPage() {
  return <TracksClient />;
}
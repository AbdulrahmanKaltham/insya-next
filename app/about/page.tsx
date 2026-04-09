import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "من نحن | إنسيا — مركز الدراسات والبحوث الإنسانية",
  description: "تعرف على مؤسسة إنسيا، مركز بحثي رائد تأسس عام 2015م لتعزيز البحث العلمي في مجالات العلوم الإنسانية.",
};

export default function AboutPage() {
  return <AboutClient />;
}